/* ============================================================
   CHAMPION ACADEMY — Main Application Controller
   SPA Router & View Renderer
   ============================================================ */

(function () {
  'use strict';

  var contentEl = null;

  // ── Subject definitions ──────────────────────────────────────
  var subjects = [
    { id: 'ela', name: 'Word Arena', icon: '📚', description: 'Reading, writing, phonics, and grammar adventures!', color: 'ela' },
    { id: 'math', name: 'Number Stadium', icon: '🔢', description: 'Counting, adding, subtracting, shapes, and more!', color: 'math' },
    { id: 'science', name: 'Discovery Lab', icon: '🔬', description: 'Explore light, sound, plants, animals, and the earth!', color: 'science' },
    { id: 'social', name: 'World Arena', icon: '🌎', description: 'Communities, maps, history, and citizenship!', color: 'social' },
    { id: 'art', name: 'Creative Arcade', icon: '🎨', description: 'Colors, shapes, music, rhythm, and creativity!', color: 'art' }
  ];

  // ── Initialize ───────────────────────────────────────────────
  function init() {
    contentEl = document.getElementById('app-content');

    // Audio init
    var soundEnabled = Storage.isSoundEnabled();
    AudioService.setEnabled(soundEnabled);
    updateSoundButton(soundEnabled);

    // Sound toggle
    var soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', function () {
        AudioService.init();
        var enabled = AudioService.toggle();
        Storage.setSoundEnabled(enabled);
        updateSoundButton(enabled);
      });
    }

    // Welcome modal
    if (Storage.isFirstVisit()) {
      showWelcomeModal();
    } else {
      Storage.updateStreak();
      Progress.updateHeaderStats();
    }

    // Rewards init
    Rewards.init();

    // Router
    window.addEventListener('hashchange', handleRoute);

    // Initial route
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#home';
    } else {
      handleRoute();
    }

    // Init audio context on first interaction
    document.addEventListener('click', function initAudio() {
      AudioService.init();
      document.removeEventListener('click', initAudio);
    }, { once: true });

    // Listen for auth state changes
    if (window.AuthService) {
      var isFirstAuth = true;
      var wasAuthenticated = false;
      window.AuthService.subscribe(function (user) {
        updateAuthUI(user);
        if (user) {
          if (!wasAuthenticated) {
            window.ShowProfileSelectorPending = true;
          }
          var modal = document.getElementById('welcome-modal');
          if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
          } else if (isFirstAuth) {
            var profiles = Storage.getProfiles();
            if (Object.keys(profiles).length > 1) {
              showProfileSelectorModal();
            }
          }
          isFirstAuth = false;
          wasAuthenticated = true;
        } else {
          wasAuthenticated = false;
        }
      });
    }

    // ProgressSyncCallback when remote database updates
    window.ProgressSyncCallback = function () {
      Progress.updateHeaderStats();
      
      // Update Auth UI to show correct child profile name in header
      if (window.AuthService && window.AuthService.isAuthenticated()) {
        var user = window.AuthService.getCurrentUser();
        updateAuthUI(user);
      }

      if (window.ShowProfileSelectorPending) {
        window.ShowProfileSelectorPending = false;
        var profiles = Storage.getProfiles();
        var keys = Object.keys(profiles);
        if (keys.length > 1) {
          showProfileSelectorModal();
        } else {
          if (keys[0]) {
            Storage.switchProfile(keys[0]);
          }
          handleRoute();
        }
      } else {
        handleRoute();
      }
    };

    // Google Sign-In Buttons
    var headerLoginBtn = document.getElementById('header-login-btn');
    if (headerLoginBtn) {
      headerLoginBtn.addEventListener('click', function () {
        if (window.AuthService) window.AuthService.loginWithGoogle();
      });
    }

    var googleSigninBtn = document.getElementById('google-signin-btn');
    if (googleSigninBtn) {
      googleSigninBtn.addEventListener('click', function () {
        if (window.AuthService) window.AuthService.loginWithGoogle();
      });
    }
  }

  function updateSoundButton(enabled) {
    var btn = document.getElementById('sound-toggle');
    if (btn) btn.textContent = enabled ? '🔊' : '🔇';
  }

  function updateAuthUI(user) {
    var container = document.getElementById('auth-status-container');
    if (!container) return;

    if (user) {
      var html = '<div class="auth-user-profile">';
      var displayName = Storage.getStudentName() || user.name || 'Champion';
      if (user.avatar) {
        html += '<img src="' + escapeHtml(user.avatar) + '" alt="' + escapeHtml(displayName) + '" class="auth-user-avatar">';
      } else {
        html += '<span class="auth-user-avatar" style="display:flex;align-items:center;justify-content:center;font-size:1.2rem;background:#E9ECEF">👤</span>';
      }
      html += '<div class="auth-user-info" style="display:flex;flex-direction:column;align-items:flex-start">';
      html += '<span class="auth-user-name" title="' + escapeHtml(user.email) + '">' + escapeHtml(displayName) + '</span>';
      html += '<button id="header-switch-profile-btn" class="btn-link btn-xs" style="color:var(--color-secondary-dark);font-size:0.75rem;padding:0;font-weight:700;cursor:pointer;border:none;background:none">🔄 Switch Profile</button>';
      html += '</div>';
      html += '<button id="header-logout-btn" class="btn btn-outline btn-sm">Sign Out</button>';
      html += '</div>';
      container.innerHTML = html;

      var logoutBtn = document.getElementById('header-logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
          if (window.AuthService) {
            window.AuthService.signOut().then(function () {
              Storage.resetAll();
              window.location.reload();
            });
          }
        });
      }

      var switchBtn = document.getElementById('header-switch-profile-btn');
      if (switchBtn) {
        switchBtn.addEventListener('click', function () {
          showProfileSelectorModal();
        });
      }
    } else {
      container.innerHTML = '<button id="header-login-btn" class="btn btn-outline btn-sm">🔑 Sign In</button>';
      var loginBtn = document.getElementById('header-login-btn');
      if (loginBtn) {
        loginBtn.addEventListener('click', function () {
          if (window.AuthService) window.AuthService.loginWithGoogle();
        });
      }
    }
  }

  // ── Welcome Modal ────────────────────────────────────────────
  function showWelcomeModal() {
    var modal = document.getElementById('welcome-modal');
    var input = document.getElementById('student-name-input');
    var startBtn = document.getElementById('start-btn');

    if (modal) modal.classList.remove('hidden');

    if (input) {
      input.addEventListener('input', function () {
        if (startBtn) startBtn.disabled = input.value.trim().length === 0;
      });

      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && input.value.trim().length > 0) {
          completeWelcome(input.value.trim(), modal);
        }
      });
    }

    if (startBtn) {
      startBtn.addEventListener('click', function () {
        if (input && input.value.trim().length > 0) {
          completeWelcome(input.value.trim(), modal);
        }
      });
    }
  }

  function completeWelcome(name, modal) {
    Storage.setStudentName(name);
    Storage.updateStreak();
    Progress.updateHeaderStats();

    if (modal) modal.classList.add('hidden');

    AudioService.init();
    AudioService.levelUp();

    handleRoute();
  }

  // ── Router ───────────────────────────────────────────────────
  function handleRoute() {
    var hash = window.location.hash.substring(1) || 'home';
    var parts = hash.split('/');
    var route = parts[0];

    AnimUtils.scrollToTop();

    switch (route) {
      case 'home':
        renderHome();
        break;
      case 'subject':
        renderSubject(parts[1]);
        break;
      case 'module':
        renderModule(parts[1]);
        break;
      case 'lesson':
        renderLesson(parts[1], parts[2]);
        break;
      case 'quiz':
        renderQuiz(parts[1]);
        break;
      case 'progress':
        renderProgress();
        break;
      case 'parent':
        renderParent();
        break;
      default:
        renderHome();
    }
  }

  // ── Home View ────────────────────────────────────────────────
  function renderHome() {
    Navigation.clearBreadcrumbs();
    var name = Storage.getStudentName() || 'Champion';
    var overall = Progress.getOverallProgress();

    var html = '<div class="home-view page-enter">';

    // Banner
    html += '<div class="home-banner">';
    html += '<span class="home-banner-mascot">🏆</span>';
    html += '<p class="home-banner-greeting">Hey there,</p>';
    html += '<h1 class="home-banner-name glow-text">' + escapeHtml(name) + ' <button id="edit-name-btn" class="edit-name-btn" title="Change Name">✏️</button>!</h1>';
    html += '<p class="home-banner-tagline">Ready to level up your 1st Grade learning? Pick a game zone!</p>';
    html += '</div>';

    // Stats row
    html += '<div class="home-stats stagger-children">';
    html += '<div class="home-stat-card stat-card-points"><span class="home-stat-icon">⭐</span><span class="home-stat-value">' + overall.totalPoints + '</span><span class="home-stat-label">Points</span></div>';
    html += '<div class="home-stat-card stat-card-trophies"><span class="home-stat-icon">🏆</span><span class="home-stat-value">' + overall.totalBadges + ' / ' + overall.totalModules + '</span><span class="home-stat-label">Trophies</span></div>';
    html += '<div class="home-stat-card stat-card-streak"><span class="home-stat-icon">🔥</span><span class="home-stat-value">' + overall.streak + '</span><span class="home-stat-label">Day Streak</span></div>';
    html += '<div class="home-stat-card stat-card-lessons"><span class="home-stat-icon">📖</span><span class="home-stat-value">' + overall.completedLessons + ' / ' + overall.totalLessons + '</span><span class="home-stat-label">Lessons Done</span></div>';
    html += '</div>';

    // Continue learning
    var recentMods = Progress.getRecentModules();
    if (recentMods.length > 0) {
      html += '<div class="continue-section">';
      html += '<div class="section-header"><h2>🕹️ Continue Playing</h2><div class="section-header-line"></div></div>';
      html += '<div class="continue-cards">';
      recentMods.forEach(function (item) {
        var subjectInfo = Progress.getSubjectInfo(item.module.subject);
        html += '<div class="continue-card card-clickable" data-href="#module/' + item.module.id + '">';
        html += '<div class="continue-card-subject tag-' + item.module.subject + '">' + (subjectInfo ? subjectInfo.name : '') + '</div>';
        html += '<div class="continue-card-title">' + item.module.title + '</div>';
        html += '<div class="continue-card-progress"><div class="continue-card-progress-bar" style="width:' + item.percentage + '%;background:var(--color-' + item.module.subject + ')"></div></div>';
        html += '</div>';
      });
      html += '</div></div>';
    }

    // Game zones
    html += '<div class="section-header"><h2>🎮 Game Zones</h2><div class="section-header-line"></div></div>';
    html += '<div class="game-zones stagger-children">';

    subjects.forEach(function (subj) {
      var sp = Progress.getSubjectProgress(subj.id);
      var modules = Progress.getSubjectModules(subj.id);

      html += '<div class="game-zone-card game-zone-' + subj.id + ' card-clickable" data-href="#subject/' + subj.id + '">';
      html += '<div class="zone-header">';
      html += '<span class="zone-icon">' + subj.icon + '</span>';
      html += ProgressBar.createSmallRing(sp.percentage, subj.id);
      html += '</div>';
      html += '<h2 class="zone-title text-gradient-' + subj.id + '">' + subj.name + '</h2>';
      html += '<p class="zone-subtitle">' + subj.description + '</p>';
      html += '<div class="zone-meta">';
      html += '<span class="zone-meta-item"><span class="zone-meta-icon">📦</span> ' + modules.length + ' modules</span>';
      html += '<span class="zone-meta-item"><span class="zone-meta-icon">📖</span> ' + sp.completedLessons + '/' + sp.totalLessons + ' lessons</span>';
      html += '<span class="zone-cta">Play →</span>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';

    // Trophy preview
    var badges = Progress.getAllBadgeInfo();
    var earnedBadges = badges.filter(function (b) { return b.earned; });
    html += '<div class="trophy-preview mt-2xl">';
    html += '<div class="trophy-preview-header">';
    html += '<h2>🏅 Trophy Case (' + earnedBadges.length + '/' + badges.length + ')</h2>';
    html += '<a href="#progress" class="btn btn-secondary btn-sm">View All →</a>';
    html += '</div>';
    html += '<div class="trophy-grid-preview">';
    badges.slice(0, 12).forEach(function (b) {
      html += '<div class="trophy-slot ' + (b.earned ? 'earned' : 'locked') + '" title="' + escapeHtml(b.name) + '">' +
        (b.earned ? b.icon : '🔒') + '</div>';
    });
    if (badges.length > 12) {
      html += '<div class="trophy-slot" style="font-size:0.9rem;color:var(--text-muted)">+' + (badges.length - 12) + '</div>';
    }
    html += '</div></div>';

    // Parent link
    html += '<div class="text-center mt-2xl mb-lg">';
    html += '<a href="#parent" class="btn btn-secondary btn-sm">👨‍👩‍👦 Parent Dashboard</a>';
    html += '</div>';

    html += '</div>';

    contentEl.innerHTML = html;
    bindCardClicks();

    // Bind edit name button click
    var editBtn = document.getElementById('edit-name-btn');
    if (editBtn) {
      editBtn.addEventListener('click', function () {
        var currentName = Storage.getStudentName() || 'Champion';
        var newName = prompt("What is the student's name?", currentName);
        if (newName !== null) {
          var nameToSave = newName.trim();
          if (nameToSave.length > 0) {
            Storage.setStudentName(nameToSave);
            // Refresh stats and UI
            Progress.updateHeaderStats();
            
            // If logged in, reload the header login view to show student name
            if (window.AuthService && window.AuthService.isAuthenticated()) {
              var user = window.AuthService.getCurrentUser();
              updateAuthUI(user);
            }
            
            renderHome();
          }
        }
      });
    }
  }

  // ── Subject View ─────────────────────────────────────────────
  function renderSubject(subjectId) {
    var subjectInfo = null;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].id === subjectId) { subjectInfo = subjects[i]; break; }
    }
    if (!subjectInfo) { renderHome(); return; }

    Navigation.setBreadcrumbs([
      { label: '🏠 Home', href: '#home' },
      { label: subjectInfo.name }
    ]);

    var modules = Progress.getSubjectModules(subjectId);
    var sp = Progress.getSubjectProgress(subjectId);

    var html = '<div class="subject-view page-enter">';

    // Header
    html += '<div class="subject-header">';
    html += '<span class="subject-header-icon">' + subjectInfo.icon + '</span>';
    html += '<h1 class="subject-header-title text-gradient-' + subjectId + '">' + subjectInfo.name + '</h1>';
    html += '<p class="subject-header-desc">' + subjectInfo.description + '</p>';
    html += '<div class="subject-stats-bar">';
    html += '<div class="subject-stat"><span class="subject-stat-icon">📦</span><span class="subject-stat-value">' + modules.length + '</span> Modules</div>';
    html += '<div class="subject-stat"><span class="subject-stat-icon">📖</span><span class="subject-stat-value">' + sp.completedLessons + '/' + sp.totalLessons + '</span> Lessons</div>';
    html += '<div class="subject-stat"><span class="subject-stat-icon">⭐</span><span class="subject-stat-value">' + sp.earnedQuizStars + '/' + sp.totalQuizStars + '</span> Stars</div>';
    html += '<div class="subject-stat"><span class="subject-stat-icon">📊</span><span class="subject-stat-value">' + sp.percentage + '%</span> Complete</div>';
    html += '</div></div>';

    // Module grid
    html += '<div class="module-grid stagger-children">';
    modules.forEach(function (mod) {
      html += ModuleCard.render(mod);
    });
    html += '</div>';

    html += '</div>';

    contentEl.innerHTML = html;

    // Bind module card clicks
    document.querySelectorAll('.module-card').forEach(function (card) {
      card.addEventListener('click', function () {
        AudioService.click();
        var moduleId = card.dataset.module;
        window.location.hash = '#module/' + moduleId;
      });
    });
  }

  // ── Module View (redirects to first lesson) ──────────────────
  function renderModule(moduleId) {
    var mod = Progress.findModule(moduleId);
    if (!mod || !mod.lessons || mod.lessons.length === 0) {
      renderHome();
      return;
    }

    // Find next uncompleted lesson or first lesson
    var nextLesson = Progress.getNextLesson(moduleId) || mod.lessons[0];
    window.location.hash = '#lesson/' + moduleId + '/' + nextLesson.id;
  }

  // ── Lesson View ──────────────────────────────────────────────
  function renderLesson(moduleId, lessonId) {
    var mod = Progress.findModule(moduleId);
    if (!mod) { renderHome(); return; }

    var subjectInfo = null;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].id === mod.subject) { subjectInfo = subjects[i]; break; }
    }

    Navigation.setBreadcrumbs([
      { label: '🏠 Home', href: '#home' },
      { label: subjectInfo ? subjectInfo.name : '', href: '#subject/' + mod.subject },
      { label: mod.title, href: '#module/' + mod.id },
      { label: 'Lesson' }
    ]);

    contentEl.innerHTML = '<div class="page-enter" id="lesson-container"></div>';
    var container = document.getElementById('lesson-container');
    LessonView.render(container, moduleId, lessonId);
  }

  // ── Quiz View ────────────────────────────────────────────────
  function renderQuiz(moduleId) {
    var mod = Progress.findModule(moduleId);
    if (!mod) { renderHome(); return; }

    var subjectInfo = null;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].id === mod.subject) { subjectInfo = subjects[i]; break; }
    }

    Navigation.setBreadcrumbs([
      { label: '🏠 Home', href: '#home' },
      { label: subjectInfo ? subjectInfo.name : '', href: '#subject/' + mod.subject },
      { label: mod.title + ' Quiz' }
    ]);

    var questions = mod.quizQuestions || [];
    if (questions.length === 0) {
      contentEl.innerHTML = '<div class="empty-state page-enter"><span class="empty-state-icon">📝</span><h3>No quiz available yet</h3><a href="#module/' + moduleId + '" class="btn btn-primary mt-lg">← Back to Module</a></div>';
      return;
    }

    contentEl.innerHTML = '<div class="page-enter" id="quiz-container"></div>';
    var container = document.getElementById('quiz-container');

    QuizEngine.start(container, questions, moduleId, function (score, total, stars) {
      Progress.updateHeaderStats();
      // Navigate back to module
      window.location.hash = '#module/' + moduleId;
    });
  }

  // ── Progress Dashboard View ──────────────────────────────────
  function renderProgress() {
    Navigation.setBreadcrumbs([
      { label: '🏠 Home', href: '#home' },
      { label: 'My Progress' }
    ]);

    var overall = Progress.getOverallProgress();
    var name = Storage.getStudentName() || 'Champion';

    var html = '<div class="progress-view page-enter">';

    // Header
    html += '<div class="progress-header">';
    html += '<span class="progress-header-icon">📊</span>';
    html += '<h1 class="progress-header-title">' + escapeHtml(name) + '\'s Progress</h1>';
    html += '<p class="progress-header-subtitle">Track your learning journey!</p>';
    html += '</div>';

    // Tabs
    html += '<div class="progress-tabs" id="progress-tabs">';
    html += '<button class="progress-tab active" data-tab="overview">📈 Overview</button>';
    html += '<button class="progress-tab" data-tab="badges">🏅 Trophies</button>';
    html += '<button class="progress-tab" data-tab="detailed">📋 Detailed</button>';
    html += '</div>';

    // Tab content
    html += '<div id="progress-tab-content"></div>';

    html += '</div>';

    contentEl.innerHTML = html;

    // Render overview tab by default
    renderProgressTab('overview');

    // Tab switching
    document.querySelectorAll('.progress-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.progress-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        renderProgressTab(tab.dataset.tab);
        AudioService.click();
      });
    });
  }

  function renderProgressTab(tab) {
    var container = document.getElementById('progress-tab-content');
    if (!container) return;

    switch (tab) {
      case 'overview':
        renderOverviewTab(container);
        break;
      case 'badges':
        renderBadgesTab(container);
        break;
      case 'detailed':
        renderDetailedTab(container);
        break;
    }
  }

  function renderOverviewTab(container) {
    var overall = Progress.getOverallProgress();

    var html = '<div class="progress-overview anim-fade-in">';

    // Ring + stats
    html += '<div class="progress-ring-section">';
    html += ProgressBar.createLargeRing(overall.percentage);
    html += '<div class="progress-stats-grid">';
    html += '<div class="progress-stat-card"><span class="progress-stat-card-icon">⭐</span><span class="progress-stat-card-value">' + overall.totalPoints + '</span><span class="progress-stat-card-label">Points</span></div>';
    html += '<div class="progress-stat-card"><span class="progress-stat-card-icon">🏆</span><span class="progress-stat-card-value">' + overall.totalBadges + '</span><span class="progress-stat-card-label">Trophies</span></div>';
    html += '<div class="progress-stat-card"><span class="progress-stat-card-icon">🔥</span><span class="progress-stat-card-value">' + overall.streak + '</span><span class="progress-stat-card-label">Day Streak</span></div>';
    html += '<div class="progress-stat-card"><span class="progress-stat-card-icon">📖</span><span class="progress-stat-card-value">' + overall.completedLessons + '</span><span class="progress-stat-card-label">Lessons Done</span></div>';
    html += '</div>';
    html += '</div>';

    // Subject progress bars
    html += '<div class="progress-subjects">';
    html += '<h3 style="font-family:var(--font-heading);font-size:var(--font-size-xl);margin-bottom:var(--space-lg)">By Subject</h3>';

    subjects.forEach(function (subj) {
      var sp = Progress.getSubjectProgress(subj.id);
      html += '<div class="progress-subject-row" data-href="#subject/' + subj.id + '">';
      html += '<span class="progress-subject-icon">' + subj.icon + '</span>';
      html += '<div class="progress-subject-info">';
      html += '<div class="progress-subject-name">' + subj.name + '</div>';
      html += '<div class="progress-subject-bar"><div class="progress-subject-fill ' + subj.id + '" style="width:' + sp.percentage + '%"></div></div>';
      html += '<div class="progress-subject-detail">' + sp.completedLessons + '/' + sp.totalLessons + ' lessons • ' + sp.earnedQuizStars + '/' + sp.totalQuizStars + ' stars</div>';
      html += '</div>';
      html += '<span class="progress-subject-pct">' + sp.percentage + '%</span>';
      html += '</div>';
    });

    html += '</div>';
    html += '</div>';

    container.innerHTML = html;

    // Subject row clicks
    document.querySelectorAll('.progress-subject-row').forEach(function (row) {
      row.addEventListener('click', function () {
        window.location.hash = row.dataset.href;
      });
    });
  }

  function renderBadgesTab(container) {
    var badges = Progress.getAllBadgeInfo();
    var earned = badges.filter(function (b) { return b.earned; }).length;

    var html = '<div class="badge-case anim-fade-in">';
    html += '<h2 class="badge-case-title">🏅 Trophy Case</h2>';
    html += '<p class="badge-case-subtitle">' + earned + ' of ' + badges.length + ' trophies earned — keep going!</p>';

    html += '<div class="badge-grid stagger-children">';
    badges.forEach(function (b) {
      html += '<div class="badge-card ' + (b.earned ? 'earned' : 'locked') + '">';
      html += '<span class="badge-icon">' + (b.earned ? b.icon : '🔒') + '</span>';
      html += '<span class="badge-name">' + b.name + '</span>';
      html += '<span class="badge-module">' + b.moduleName + '</span>';
      if (!b.earned) html += '<span class="badge-lock-icon">🔒</span>';
      html += '</div>';
    });
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;
  }

  function renderDetailedTab(container) {
    var html = '<div class="progress-detailed anim-fade-in">';

    subjects.forEach(function (subj) {
      var modules = Progress.getSubjectModules(subj.id);
      var sp = Progress.getSubjectProgress(subj.id);

      html += '<div class="progress-detail-section">';
      html += '<div class="progress-detail-header" data-section="' + subj.id + '">';
      html += '<span class="progress-detail-icon">' + subj.icon + '</span>';
      html += '<span class="progress-detail-title">' + subj.name + '</span>';
      html += '<span class="progress-detail-pct">' + sp.percentage + '%</span>';
      html += '<span class="progress-detail-toggle" id="toggle-' + subj.id + '">▼</span>';
      html += '</div>';

      html += '<div class="progress-detail-body" id="detail-' + subj.id + '">';
      modules.forEach(function (mod) {
        var mp = Progress.getModuleProgress(mod.id);
        html += '<div class="progress-module-row" data-href="#module/' + mod.id + '">';
        html += '<span class="progress-module-badge ' + (mp.hasBadge ? '' : 'locked') + '">' + mod.badgeIcon + '</span>';
        html += '<span class="progress-module-name">' + mod.title + '</span>';
        html += '<div class="progress-module-bar-wrap"><div class="progress-module-bar" style="width:' + mp.percentage + '%;background:var(--color-' + subj.id + ')"></div></div>';
        html += '<span class="progress-module-pct">' + mp.percentage + '%</span>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';
    container.innerHTML = html;

    // Toggle sections
    document.querySelectorAll('.progress-detail-header').forEach(function (header) {
      header.addEventListener('click', function () {
        var section = header.dataset.section;
        var body = document.getElementById('detail-' + section);
        var toggle = document.getElementById('toggle-' + section);
        if (body) body.classList.toggle('collapsed');
        if (toggle) toggle.classList.toggle('open');
      });
    });

    // Module row clicks
    document.querySelectorAll('.progress-module-row').forEach(function (row) {
      row.addEventListener('click', function () {
        window.location.hash = row.dataset.href;
      });
    });
  }

  // ── Parent Dashboard ─────────────────────────────────────────
  function renderParent() {
    Navigation.setBreadcrumbs([
      { label: '🏠 Home', href: '#home' },
      { label: 'Parent Dashboard' }
    ]);

    var overall = Progress.getOverallProgress();
    var name = Storage.getStudentName() || 'Student';
    var strengths = Progress.getStrengths();
    var data = Storage.getData();

    var html = '<div class="parent-view page-enter">';

    html += '<div class="parent-header">';
    html += '<h1 class="parent-header-title">👨‍👩‍👦 Parent Dashboard</h1>';
    html += '<p class="parent-header-subtitle">Detailed learning analytics for ' + escapeHtml(name) + '</p>';
    html += '</div>';

    // Quick analytics
    html += '<div class="parent-section">';
    html += '<h2 class="parent-section-title">📊 Quick Overview</h2>';
    html += '<div class="parent-analytics-grid">';
    html += '<div class="parent-analytics-card"><span class="parent-analytics-value">' + overall.percentage + '%</span><span class="parent-analytics-label">Overall Completion</span></div>';
    html += '<div class="parent-analytics-card"><span class="parent-analytics-value">' + overall.completedLessons + '/' + overall.totalLessons + '</span><span class="parent-analytics-label">Lessons Completed</span></div>';
    html += '<div class="parent-analytics-card"><span class="parent-analytics-value">' + overall.totalBadges + '/' + overall.totalModules + '</span><span class="parent-analytics-label">Trophies Earned</span></div>';
    html += '<div class="parent-analytics-card"><span class="parent-analytics-value">' + overall.streak + ' days</span><span class="parent-analytics-label">Current Streak</span></div>';
    html += '<div class="parent-analytics-card"><span class="parent-analytics-value">' + overall.totalPoints + '</span><span class="parent-analytics-label">Total Points</span></div>';
    var firstVisit = data.firstVisit ? new Date(data.firstVisit).toLocaleDateString() : 'N/A';
    html += '<div class="parent-analytics-card"><span class="parent-analytics-value" style="font-size:var(--font-size-xl)">' + firstVisit + '</span><span class="parent-analytics-label">Started Learning</span></div>';
    html += '</div></div>';

    // Strengths
    html += '<div class="parent-section">';
    html += '<h2 class="parent-section-title">💪 Subject Performance</h2>';
    html += '<div class="parent-insight-list">';
    strengths.forEach(function (s, i) {
      var status = s.percentage >= 70 ? '🌟 Strong' : s.percentage >= 30 ? '📈 In Progress' : s.percentage > 0 ? '🌱 Getting Started' : '⬜ Not Started';
      html += '<div class="parent-insight-item">';
      html += '<span class="parent-insight-icon">' + s.icon + '</span>';
      html += '<div class="parent-insight-text">';
      html += '<div class="parent-insight-name">' + s.name + '</div>';
      html += '<div class="parent-insight-detail">' + status + ' — ' + s.percentage + '% complete</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div></div>';

    // Quiz scores
    html += '<div class="parent-section">';
    html += '<h2 class="parent-section-title">📝 Quiz Results</h2>';
    var allMods = Progress.getAllModules();
    var hasQuizzes = false;
    html += '<div class="parent-insight-list">';
    allMods.forEach(function (mod) {
      var qr = Storage.getQuizResult(mod.id);
      if (qr) {
        hasQuizzes = true;
        var stars = '';
        for (var s = 0; s < 3; s++) stars += s < qr.stars ? '⭐' : '☆';
        html += '<div class="parent-insight-item">';
        html += '<span class="parent-insight-icon">' + mod.badgeIcon + '</span>';
        html += '<div class="parent-insight-text">';
        html += '<div class="parent-insight-name">' + mod.title + '</div>';
        html += '<div class="parent-insight-detail">Score: ' + qr.score + '/' + qr.total + ' ' + stars + ' — ' + new Date(qr.date).toLocaleDateString() + '</div>';
        html += '</div>';
        html += '</div>';
      }
    });
    if (!hasQuizzes) {
      html += '<div class="parent-insight-item"><span class="parent-insight-icon">📝</span><div class="parent-insight-text"><div class="parent-insight-name">No quizzes taken yet</div></div></div>';
    }
    html += '</div></div>';

    // Export/Import
    html += '<div class="parent-section">';
    html += '<h2 class="parent-section-title">💾 Data Management</h2>';
    html += '<div class="parent-data-actions">';
    html += '<button class="btn btn-secondary" id="export-btn">📥 Export Progress</button>';
    html += '<button class="btn btn-secondary" id="import-btn">📤 Import Progress</button>';
    html += '<button class="btn btn-secondary" id="reset-btn" style="border-color:var(--color-wrong)">🗑️ Reset All Data</button>';
    html += '</div></div>';

    html += '<div class="text-center mt-xl"><a href="#home" class="btn btn-primary">← Back to Home</a></div>';

    html += '</div>';

    contentEl.innerHTML = html;

    // Export
    document.getElementById('export-btn').addEventListener('click', function () {
      var json = Storage.exportProgress();
      var blob = new Blob([json], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'champion-academy-progress-' + new Date().toISOString().split('T')[0] + '.json';
      a.click();
      URL.revokeObjectURL(url);
    });

    // Import
    document.getElementById('import-btn').addEventListener('click', function () {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.addEventListener('change', function () {
        var file = input.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (e) {
          if (Storage.importProgress(e.target.result)) {
            alert('Progress imported successfully!');
            Progress.updateHeaderStats();
            renderParent();
          } else {
            alert('Invalid file. Please use a Champion Academy export file.');
          }
        };
        reader.readAsText(file);
      });
      input.click();
    });

    // Reset
    document.getElementById('reset-btn').addEventListener('click', function () {
      if (confirm('Are you sure? This will delete ALL progress and cannot be undone!')) {
        Storage.resetAll();
        Progress.updateHeaderStats();
        window.location.hash = '#home';
        window.location.reload();
      }
    });
  }

  // ── Utility ──────────────────────────────────────────────────
  function bindCardClicks() {
    document.querySelectorAll('[data-href]').forEach(function (el) {
      el.addEventListener('click', function () {
        AudioService.click();
        window.location.hash = el.dataset.href;
      });
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function showProfileSelectorModal() {
    var existing = document.getElementById('profile-selector-modal');
    if (existing) existing.remove();

    var profiles = Storage.getProfiles();
    var keys = Object.keys(profiles);

    var html = '<div class="modal-content profile-modal-content">';
    html += '<h2 class="welcome-title glow-text" style="margin-bottom:var(--space-xs)">Who is playing today?</h2>';
    html += '<p class="welcome-subtitle">Select a profile or add a new child (1-5 children)</p>';
    
    html += '<div class="profile-grid">';
    
    keys.forEach(function (key) {
      var prof = profiles[key];
      var points = prof.totalPoints || 0;
      html += '<div class="profile-card" data-profile-id="' + key + '">';
      html += '<div class="profile-avatar-large">👦</div>';
      html += '<div class="profile-name">' + escapeHtml(prof.studentName) + '</div>';
      html += '<div style="font-size:0.8rem;color:var(--text-muted)">⭐ ' + points + ' pts</div>';
      if (keys.length > 1) {
        html += '<button class="delete-profile-btn" data-profile-id="' + key + '" title="Delete Profile" style="font-size:0.8rem;margin-top:var(--space-xs);color:var(--color-wrong);border:none;background:none;font-weight:700">Remove</button>';
      }
      html += '</div>';
    });

    if (keys.length < 5) {
      html += '<div class="profile-card add-profile" id="add-profile-card">';
      html += '<div class="profile-avatar-large" style="background:#F1F3F5;border-style:dashed">+</div>';
      html += '<div class="profile-name" style="color:var(--text-muted)">Add Child</div>';
      html += '</div>';
    }

    html += '</div>';
    html += '<button id="close-profile-btn" class="btn btn-secondary btn-sm" style="margin-top:var(--space-md)">Cancel</button>';
    html += '</div>';

    var modalOverlay = document.createElement('div');
    modalOverlay.id = 'profile-selector-modal';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = html;
    document.body.appendChild(modalOverlay);

    modalOverlay.querySelectorAll('.profile-card[data-profile-id]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-profile-btn')) return;

        var pid = card.dataset.profileId;
        Storage.switchProfile(pid);
        modalOverlay.remove();
        
        Progress.updateHeaderStats();
        if (window.AuthService && window.AuthService.isAuthenticated()) {
          var user = window.AuthService.getCurrentUser();
          updateAuthUI(user);
        }
        handleRoute();
      });
    });

    modalOverlay.querySelectorAll('.delete-profile-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var pid = btn.dataset.profileId;
        var prof = profiles[pid];
        if (confirm('Are you sure you want to remove ' + prof.studentName + '\'s profile? This will delete all their progress!')) {
          Storage.deleteProfile(pid);
          showProfileSelectorModal();
        }
      });
    });

    var addCard = document.getElementById('add-profile-card');
    if (addCard) {
      addCard.addEventListener('click', function () {
        var name = prompt("What is the child's name?");
        if (name && name.trim().length > 0) {
          Storage.createProfile(name.trim());
          showProfileSelectorModal();
        }
      });
    }

    var closeBtn = document.getElementById('close-profile-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        modalOverlay.remove();
      });
    }
  }

  // ── Start ────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
