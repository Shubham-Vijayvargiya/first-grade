/* ============================================================
   CHAMPION ACADEMY — Storage Service
   Wrapper around localStorage supporting 1-5 child profiles
   ============================================================ */

window.Storage = (function () {
  var STORAGE_KEY = 'champion_academy_data_v2'; // New key for 2.0 multi-profile compatibility
  var LEGACY_KEY = 'champion_academy_data';

  function loadAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
      
      // Attempt legacy migration
      var legacyRaw = localStorage.getItem(LEGACY_KEY);
      if (legacyRaw) {
        try {
          var legacyData = JSON.parse(legacyRaw);
          var migrated = migrateLegacy(legacyData);
          saveAllLocal(migrated);
          return migrated;
        } catch (err) {
          console.warn('Storage: failed to migrate legacy data', err);
        }
      }
      return null;
    } catch (e) {
      console.warn('Storage: failed to load data', e);
      return null;
    }
  }

  function migrateLegacy(legacy) {
    var defaults = getDefaults();
    if (!legacy) return defaults;
    
    // Copy main settings
    defaults.soundEnabled = legacy.soundEnabled !== false;
    
    // Convert old progress to the 'default' profile
    if (legacy.studentName) {
      var prof = defaults.profiles['default'];
      prof.studentName = legacy.studentName;
      prof.firstVisit = legacy.firstVisit || new Date().toISOString();
      prof.lastVisit = legacy.lastVisit || new Date().toISOString();
      prof.streak = legacy.streak || 0;
      prof.lastStreakDate = legacy.lastStreakDate || '';
      prof.totalPoints = legacy.totalPoints || 0;
      prof.lessons = legacy.lessons || {};
      prof.quizzes = legacy.quizzes || {};
      prof.badges = legacy.badges || [];
      prof.worksheetsPrinted = legacy.worksheetsPrinted || [];
    }
    
    return defaults;
  }

  function saveAllLocal(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Storage: failed to save data', e);
    }
  }

  function saveAll(data) {
    saveAllLocal(data);
    syncToSupabase(data);
  }

  function syncToSupabase(data) {
    if (!window.SupabaseService || !window.SupabaseService.isReady()) return;
    if (!window.AuthService || !window.AuthService.isAuthenticated()) return;
    
    var user = window.AuthService.getCurrentUser();
    if (!user) return;

    var client = window.SupabaseService.getClient();
    client
      .from('progress')
      .upsert({
        user_id: user.id,
        student_name: getActiveProfileName(data),
        data: data,
        updated_at: new Date().toISOString()
      })
      .then(function (result) {
        if (result.error) {
          console.error('Storage: Supabase sync error', result.error);
        } else {
          console.log('Storage: Synced successfully to Supabase.');
        }
      });
  }

  function getActiveProfileName(data) {
    var activeId = data.activeProfileId || 'default';
    var prof = data.profiles[activeId];
    return prof ? prof.studentName : 'Champion';
  }

  function fetchFromSupabase(userId, authUser) {
    if (!window.SupabaseService || !window.SupabaseService.isReady()) return;
    var client = window.SupabaseService.getClient();

    client
      .from('progress')
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
      .then(function (result) {
        if (result.error) {
          console.error('Storage: Supabase fetch error', result.error);
          return;
        }

        var remoteData = result.data && result.data.data;
        if (remoteData) {
          console.log('Storage: Found remote progress, merging...');
          var localData = loadAll() || getDefaults();
          var merged = mergeProgress(localData, remoteData);
          saveAllLocal(merged);
          
          // Notify app components to reload their progress state
          if (window.ProgressSyncCallback) {
            window.ProgressSyncCallback();
          }
        } else {
          console.log('Storage: No remote progress found. Syncing local progress to Supabase.');
          var localData = loadAll() || getDefaults();
          
          // Make sure default profile name matches user if default name is still 'Champion'
          var activeId = localData.activeProfileId || 'default';
          if (localData.profiles[activeId] && localData.profiles[activeId].studentName === 'Champion' && authUser.name) {
            localData.profiles[activeId].studentName = authUser.name;
            saveAllLocal(localData);
          }
          syncToSupabase(localData);
          
          if (window.ProgressSyncCallback) {
            window.ProgressSyncCallback();
          }
        }
      });
  }

  function mergeProgress(local, remote) {
    var merged = getDefaults();
    merged.soundEnabled = remote.soundEnabled !== undefined ? remote.soundEnabled : local.soundEnabled;
    merged.activeProfileId = remote.activeProfileId || local.activeProfileId || 'default';
    
    // Merge all profiles
    var localProfs = local.profiles || {};
    var remoteProfs = remote.profiles || {};
    
    var allKeys = Array.from(new Set(Object.keys(localProfs).concat(Object.keys(remoteProfs))));
    allKeys.forEach(function (key) {
      var lProf = localProfs[key];
      var rProf = remoteProfs[key];
      
      if (lProf && rProf) {
        // Merge them
        merged.profiles[key] = {
          id: key,
          studentName: rProf.studentName || lProf.studentName || 'Champion',
          firstVisit: lProf.firstVisit || rProf.firstVisit || new Date().toISOString(),
          lastVisit: new Date(lProf.lastVisit || 0) > new Date(rProf.lastVisit || 0) ? lProf.lastVisit : rProf.lastVisit,
          streak: Math.max(lProf.streak || 0, rProf.streak || 0),
          lastStreakDate: rProf.lastStreakDate || lProf.lastStreakDate || '',
          totalPoints: Math.max(lProf.totalPoints || 0, rProf.totalPoints || 0),
          avatar: rProf.avatar || lProf.avatar || '👦',
          unlockedAvatars: Array.from(new Set((lProf.unlockedAvatars || ['👦', '👧', '👶']).concat(rProf.unlockedAvatars || ['👦', '👧', '👶']))),
          lessons: Object.assign({}, lProf.lessons || {}, rProf.lessons || {}),
          quizzes: Object.assign({}, lProf.quizzes || {}, rProf.quizzes || {}),
          badges: Array.from(new Set((lProf.badges || []).concat(rProf.badges || []))),
          worksheetsPrinted: Array.from(new Set((lProf.worksheetsPrinted || []).concat(rProf.worksheetsPrinted || [])))
        };
      } else {
        merged.profiles[key] = rProf || lProf;
      }
    });
    
    return merged;
  }

  function handleAuthStateChange(user) {
    if (user) {
      console.log('Storage: User logged in, fetching remote progress for', user.email);
      fetchFromSupabase(user.id, user);
    } else {
      console.log('Storage: No user logged in. Using local storage.');
    }
  }

  // Subscribe to auth changes
  setTimeout(function () {
    if (window.AuthService) {
      window.AuthService.subscribe(handleAuthStateChange);
    }
  }, 100);

  function getDefaults() {
    return {
      version: '2.0',
      activeProfileId: 'default',
      soundEnabled: true,
      profiles: {
        'default': {
          id: 'default',
          studentName: 'Champion',
          firstVisit: new Date().toISOString(),
          lastVisit: new Date().toISOString(),
          streak: 0,
          lastStreakDate: '',
          totalPoints: 0,
          avatar: '🧽',
          unlockedAvatars: ['🧽', '🌟'],
          lessons: {},
          quizzes: {},
          badges: [],
          worksheetsPrinted: []
        }
      }
    };
  }

  function ensureData() {
    var data = loadAll();
    if (!data) {
      data = getDefaults();
      saveAllLocal(data);
    }
    return data;
  }

  // Helper to retrieve the current active profile object
  function getActiveProfile() {
    var data = ensureData();
    var activeId = data.activeProfileId || 'default';
    if (!data.profiles[activeId]) {
      var keys = Object.keys(data.profiles);
      activeId = keys[0] || 'default';
      data.activeProfileId = activeId;
      if (!data.profiles[activeId]) {
        data.profiles[activeId] = {
          id: activeId,
          studentName: 'Champion',
          firstVisit: new Date().toISOString(),
          lastVisit: new Date().toISOString(),
          streak: 0,
          lastStreakDate: '',
          totalPoints: 0,
          avatar: '🧽',
          unlockedAvatars: ['🧽', '🌟'],
          lessons: {},
          quizzes: {},
          badges: [],
          worksheetsPrinted: []
        };
      }
    }
    return data.profiles[activeId];
  }

  return {
    init: function () {
      return ensureData();
    },

    getData: function () {
      return ensureData();
    },

    setData: function (data) {
      saveAll(data);
    },

    // Profiles Configuration API (1-5 profiles)
    getProfiles: function () {
      return ensureData().profiles || {};
    },

    getActiveProfileId: function () {
      return ensureData().activeProfileId || 'default';
    },

    switchProfile: function (profileId) {
      var data = ensureData();
      if (data.profiles[profileId]) {
        data.activeProfileId = profileId;
        saveAll(data);
        console.log('Storage: Switched active profile to', profileId);
        return true;
      }
      return false;
    },

    createProfile: function (name) {
      var data = ensureData();
      var keys = Object.keys(data.profiles);
      if (keys.length >= 5) {
        return null;
      }
      
      var id = 'profile-' + Date.now();
      data.profiles[id] = {
        id: id,
        studentName: name,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
        streak: 0,
        lastStreakDate: '',
        totalPoints: 0,
        avatar: '🧽',
        unlockedAvatars: ['🧽', '🌟'],
        lessons: {},
        quizzes: {},
        badges: [],
        worksheetsPrinted: []
      };
      data.activeProfileId = id;
      saveAll(data);
      console.log('Storage: Created profile', name, 'with ID', id);
      return id;
    },

    deleteProfile: function (profileId) {
      var data = ensureData();
      if (Object.keys(data.profiles).length <= 1) {
        return false;
      }
      delete data.profiles[profileId];
      if (data.activeProfileId === profileId) {
        data.activeProfileId = Object.keys(data.profiles)[0];
      }
      saveAll(data);
      console.log('Storage: Deleted profile', profileId);
      return true;
    },

    getAvatar: function () {
      return getActiveProfile().avatar || '👦';
    },

    setAvatar: function (emoji) {
      var data = ensureData();
      var activeId = data.activeProfileId || 'default';
      var prof = data.profiles[activeId];
      if (prof && prof.unlockedAvatars && prof.unlockedAvatars.indexOf(emoji) !== -1) {
        prof.avatar = emoji;
        saveAll(data);
        return true;
      }
      return false;
    },

    getUnlockedAvatars: function () {
      return getActiveProfile().unlockedAvatars || ['👦', '👧', '👶'];
    },

    unlockAvatar: function (emoji, cost) {
      var data = ensureData();
      var activeId = data.activeProfileId || 'default';
      var prof = data.profiles[activeId];
      if (prof) {
        var currentPoints = prof.totalPoints || 0;
        if (currentPoints >= cost) {
          prof.totalPoints = currentPoints - cost;
          if (!prof.unlockedAvatars) {
            prof.unlockedAvatars = ['👦', '👧', '👶'];
          }
          if (prof.unlockedAvatars.indexOf(emoji) === -1) {
            prof.unlockedAvatars.push(emoji);
          }
          prof.avatar = emoji;
          saveAll(data);
          return true;
        }
      }
      return false;
    },

    // Get student name of current active profile
    getStudentName: function () {
      return getActiveProfile().studentName || '';
    },

    // Set student name of current active profile
    setStudentName: function (name) {
      var data = ensureData();
      var activeId = data.activeProfileId || 'default';
      if (data.profiles[activeId]) {
        data.profiles[activeId].studentName = name;
        saveAll(data);
      }
    },

    // Check if first visit for the current active profile
    isFirstVisit: function () {
      var prof = getActiveProfile();
      return !prof || prof.studentName === 'Champion';
    },

    // Get lesson status for current active profile
    getLessonStatus: function (lessonId) {
      return getActiveProfile().lessons[lessonId] || null;
    },

    // Save lesson step completion for current active profile
    saveLessonStep: function (lessonId, step) {
      var data = ensureData();
      var prof = data.profiles[data.activeProfileId || 'default'];
      if (!prof) return null;

      if (!prof.lessons[lessonId]) {
        prof.lessons[lessonId] = {
          completed: false,
          learnDone: false,
          practiceDone: false,
          checkDone: false,
          checkScore: 0,
          date: ''
        };
      }
      prof.lessons[lessonId][step + 'Done'] = true;

      // Check if all steps are done
      var l = prof.lessons[lessonId];
      if (l.learnDone && l.practiceDone && l.checkDone) {
        l.completed = true;
        l.date = new Date().toISOString();
      }

      saveAll(data);
      return prof.lessons[lessonId];
    },

    // Save check score for current active profile
    saveLessonCheckScore: function (lessonId, score) {
      var data = ensureData();
      var prof = data.profiles[data.activeProfileId || 'default'];
      if (!prof) return;

      if (!prof.lessons[lessonId]) {
        prof.lessons[lessonId] = {
          completed: false,
          learnDone: false,
          practiceDone: false,
          checkDone: false,
          checkScore: 0,
          date: ''
        };
      }
      prof.lessons[lessonId].checkScore = score;
      prof.lessons[lessonId].checkDone = true;
      saveAll(data);
    },

    // Get quiz result for current active profile
    getQuizResult: function (moduleId) {
      return getActiveProfile().quizzes[moduleId] || null;
    },

    // Save quiz result for current active profile
    saveQuizResult: function (moduleId, score, total, stars, points) {
      var data = ensureData();
      var prof = data.profiles[data.activeProfileId || 'default'];
      if (!prof) return;

      prof.quizzes[moduleId] = {
        score: score,
        total: total,
        stars: stars,
        points: points,
        date: new Date().toISOString()
      };
      prof.totalPoints = (prof.totalPoints || 0) + points;
      saveAll(data);
    },

    // Add points to current active profile
    addPoints: function (points) {
      var data = ensureData();
      var prof = data.profiles[data.activeProfileId || 'default'];
      if (!prof) return 0;

      prof.totalPoints = (prof.totalPoints || 0) + points;
      saveAll(data);
      return prof.totalPoints;
    },

    // Get total points of current active profile
    getTotalPoints: function () {
      return getActiveProfile().totalPoints || 0;
    },

    // Badge management for current active profile
    hasBadge: function (badgeId) {
      return getActiveProfile().badges.indexOf(badgeId) !== -1;
    },

    awardBadge: function (badgeId) {
      var data = ensureData();
      var prof = data.profiles[data.activeProfileId || 'default'];
      if (!prof) return false;

      if (prof.badges.indexOf(badgeId) === -1) {
        prof.badges.push(badgeId);
        saveAll(data);
        return true;
      }
      return false;
    },

    getBadges: function () {
      return getActiveProfile().badges || [];
    },

    // Streak management for current active profile
    getStreak: function () {
      return getActiveProfile().streak || 0;
    },

    updateStreak: function () {
      var data = ensureData();
      var prof = data.profiles[data.activeProfileId || 'default'];
      if (!prof) return 0;

      var today = new Date().toISOString().split('T')[0];
      if (prof.lastStreakDate === today) {
        return prof.streak;
      }

      var yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (prof.lastStreakDate === yesterday) {
        prof.streak = (prof.streak || 0) + 1;
      } else {
        prof.streak = 1;
      }

      prof.lastStreakDate = today;
      prof.lastVisit = new Date().toISOString();
      saveAll(data);
      return prof.streak;
    },

    // Sound preference (global config)
    isSoundEnabled: function () {
      var data = loadAll();
      return data ? data.soundEnabled !== false : true;
    },

    setSoundEnabled: function (val) {
      var data = ensureData();
      data.soundEnabled = !!val;
      saveAll(data);
    },

    // Worksheet tracking for current active profile
    markWorksheetPrinted: function (moduleId) {
      var data = ensureData();
      var prof = data.profiles[data.activeProfileId || 'default'];
      if (!prof) return;

      if (prof.worksheetsPrinted.indexOf(moduleId) === -1) {
        prof.worksheetsPrinted.push(moduleId);
        saveAll(data);
      }
    },

    exportProgress: function () {
      return JSON.stringify(ensureData(), null, 2);
    },

    importProgress: function (jsonStr) {
      try {
        var data = JSON.parse(jsonStr);
        if (data && (data.profiles || data.studentName)) {
          // If importing old schema, migrate it
          var migrated = data.profiles ? data : migrateLegacy(data);
          saveAll(migrated);
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    },

    resetAll: function () {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(LEGACY_KEY);
    }
  };
})();
