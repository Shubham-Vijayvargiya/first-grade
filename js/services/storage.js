/* ============================================================
   CHAMPION ACADEMY — Storage Service
   Wrapper around localStorage
   ============================================================ */

window.Storage = (function () {
  var STORAGE_KEY = 'champion_academy_data';

  function loadAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('Storage: failed to load data', e);
      return null;
    }
  }

  function saveAll(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Storage: failed to save data', e);
    }
  }

  function getDefaults() {
    return {
      studentName: '',
      firstVisit: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      streak: 0,
      lastStreakDate: '',
      totalPoints: 0,
      soundEnabled: true,
      lessons: {},       // { 'lesson-1-1': { completed: true, learnDone: true, practiceDone: true, checkDone: true, checkScore: 3, date: '...' } }
      quizzes: {},       // { 'module-1': { score: 8, total: 10, stars: 2, points: 20, date: '...' } }
      badges: [],        // ['phonics-star', 'word-wizard', ...]
      worksheetsPrinted: [] // ['module-1', ...]
    };
  }

  function ensureData() {
    var data = loadAll();
    if (!data) {
      data = getDefaults();
      saveAll(data);
    }
    return data;
  }

  return {
    // Initialize and return stored data (or defaults)
    init: function () {
      return ensureData();
    },

    // Get full data object
    getData: function () {
      return ensureData();
    },

    // Save full data object
    setData: function (data) {
      saveAll(data);
    },

    // Get a specific field
    get: function (key) {
      var data = ensureData();
      return data[key];
    },

    // Set a specific field
    set: function (key, value) {
      var data = ensureData();
      data[key] = value;
      saveAll(data);
    },

    // Get student name
    getStudentName: function () {
      return ensureData().studentName || '';
    },

    // Set student name
    setStudentName: function (name) {
      var data = ensureData();
      data.studentName = name;
      saveAll(data);
    },

    // Check if first visit
    isFirstVisit: function () {
      return !loadAll() || !loadAll().studentName;
    },

    // Get lesson status
    getLessonStatus: function (lessonId) {
      var data = ensureData();
      return data.lessons[lessonId] || null;
    },

    // Save lesson step completion
    saveLessonStep: function (lessonId, step) {
      var data = ensureData();
      if (!data.lessons[lessonId]) {
        data.lessons[lessonId] = {
          completed: false,
          learnDone: false,
          practiceDone: false,
          checkDone: false,
          checkScore: 0,
          date: ''
        };
      }
      data.lessons[lessonId][step + 'Done'] = true;

      // Check if all steps are done
      var l = data.lessons[lessonId];
      if (l.learnDone && l.practiceDone && l.checkDone) {
        l.completed = true;
        l.date = new Date().toISOString();
      }

      saveAll(data);
      return data.lessons[lessonId];
    },

    // Save check score for a lesson
    saveLessonCheckScore: function (lessonId, score) {
      var data = ensureData();
      if (!data.lessons[lessonId]) {
        data.lessons[lessonId] = {
          completed: false,
          learnDone: false,
          practiceDone: false,
          checkDone: false,
          checkScore: 0,
          date: ''
        };
      }
      data.lessons[lessonId].checkScore = score;
      data.lessons[lessonId].checkDone = true;
      saveAll(data);
    },

    // Get quiz result
    getQuizResult: function (moduleId) {
      var data = ensureData();
      return data.quizzes[moduleId] || null;
    },

    // Save quiz result
    saveQuizResult: function (moduleId, score, total, stars, points) {
      var data = ensureData();
      data.quizzes[moduleId] = {
        score: score,
        total: total,
        stars: stars,
        points: points,
        date: new Date().toISOString()
      };
      data.totalPoints += points;
      saveAll(data);
    },

    // Add points
    addPoints: function (points) {
      var data = ensureData();
      data.totalPoints += points;
      saveAll(data);
      return data.totalPoints;
    },

    // Get total points
    getTotalPoints: function () {
      return ensureData().totalPoints || 0;
    },

    // Badge management
    hasBadge: function (badgeId) {
      return ensureData().badges.indexOf(badgeId) !== -1;
    },

    awardBadge: function (badgeId) {
      var data = ensureData();
      if (data.badges.indexOf(badgeId) === -1) {
        data.badges.push(badgeId);
        saveAll(data);
        return true; // newly awarded
      }
      return false; // already had it
    },

    getBadges: function () {
      return ensureData().badges || [];
    },

    // Streak management
    getStreak: function () {
      return ensureData().streak || 0;
    },

    updateStreak: function () {
      var data = ensureData();
      var today = new Date().toISOString().split('T')[0];

      if (data.lastStreakDate === today) {
        return data.streak;
      }

      var yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

      if (data.lastStreakDate === yesterday) {
        data.streak += 1;
      } else if (data.lastStreakDate !== today) {
        data.streak = 1;
      }

      data.lastStreakDate = today;
      data.lastVisit = new Date().toISOString();
      saveAll(data);
      return data.streak;
    },

    // Sound preference
    isSoundEnabled: function () {
      var data = loadAll();
      return data ? data.soundEnabled !== false : true;
    },

    setSoundEnabled: function (val) {
      var data = ensureData();
      data.soundEnabled = !!val;
      saveAll(data);
    },

    // Worksheet tracking
    markWorksheetPrinted: function (moduleId) {
      var data = ensureData();
      if (data.worksheetsPrinted.indexOf(moduleId) === -1) {
        data.worksheetsPrinted.push(moduleId);
        saveAll(data);
      }
    },

    // Export progress as JSON
    exportProgress: function () {
      return JSON.stringify(ensureData(), null, 2);
    },

    // Import progress from JSON
    importProgress: function (jsonStr) {
      try {
        var data = JSON.parse(jsonStr);
        if (data && data.studentName) {
          saveAll(data);
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    },

    // Reset all progress
    resetAll: function () {
      localStorage.removeItem(STORAGE_KEY);
    }
  };
})();
