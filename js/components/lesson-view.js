/* ============================================================
   CHAMPION ACADEMY — Lesson View Component
   Renders lesson with Learn / Practice / Check steps
   ============================================================ */

window.LessonView = (function () {

  var currentLesson = null;
  var currentModule = null;
  var currentStep = 'learn';

  function renderWorksheetHeader() {
    var name = typeof Storage !== 'undefined' && typeof Storage.getStudentName === 'function' ? Storage.getStudentName() : '';
    var date = new Date().toLocaleDateString();
    return '<div class="worksheet-header">' +
      '<span class="worksheet-name-field">Name: <span class="name-line">' + (name || '') + '</span></span>' +
      '<span class="worksheet-date-field">Date: <span class="date-line">' + date + '</span></span>' +
      '</div>';
  }

  function render(container, moduleId, lessonId) {
    var mod = Progress.findModule(moduleId);
    var lesson = Progress.findLesson(moduleId, lessonId);
    if (!mod || !lesson) {
      container.innerHTML = '<div class="empty-state"><span class="empty-state-icon">🔍</span><h3>Lesson not found</h3></div>';
      return;
    }

    currentModule = mod;
    currentLesson = lesson;
    currentStep = 'learn';

    var lessonStatus = Storage.getLessonStatus(lesson.id) || {};
    var lessonIndex = mod.lessons.indexOf(lesson);

    // Build lesson view
    var html = '<div class="lesson-view">';

    // Sidebar
    html += renderSidebar(mod, lesson, lessonIndex);

    // Main content
    html += '<div class="lesson-main">';
    html += renderLessonHeader(lesson);
    html += renderStepTabs(lessonStatus);
    html += '<div id="step-content-area"></div>';
    html += renderLessonNav(mod, lessonIndex);
    html += '</div>'; // end lesson-main

    html += '</div>'; // end lesson-view

    container.innerHTML = html;

    // Render initial step content
    renderStepContent('learn');

    // Bind sidebar clicks
    bindSidebarEvents(mod, container);
    bindStepTabEvents(lessonStatus);
    bindNavEvents(mod, lessonIndex);
  }

  function renderSidebar(mod, activeLesson, activeIndex) {
    var html = '<aside class="lesson-sidebar">';
    html += '<h3 class="sidebar-module-title">' + mod.title + '</h3>';
    html += '<div class="sidebar-module-badge">';
    html += '<span class="sidebar-module-badge-icon">' + mod.badgeIcon + '</span>';
    html += '<span>' + mod.badgeName + '</span>';
    html += '</div>';

    html += '<div class="lesson-list">';
    mod.lessons.forEach(function (lesson, i) {
      var status = Storage.getLessonStatus(lesson.id) || {};
      var isActive = lesson.id === activeLesson.id;
      var isCompleted = status.completed;

      html += '<div class="lesson-list-item' + (isActive ? ' active' : '') + (isCompleted ? ' completed' : '') + '" data-lesson="' + lesson.id + '" data-module="' + mod.id + '">';
      html += '<div class="lesson-list-check">' + (isCompleted ? '✓' : (i + 1)) + '</div>';
      html += '<span class="lesson-list-text">' + lesson.title + '</span>';
      html += '</div>';
    });
    html += '</div>';

    // Quiz button
    var quizResult = Storage.getQuizResult(mod.id);
    html += '<button class="sidebar-quiz-btn' + (quizResult ? ' completed' : '') + '" id="sidebar-quiz-btn">';
    html += quizResult ? '🏆 Quiz (' + quizResult.stars + '⭐)' : '📝 Take Quiz';
    html += '</button>';

    // Worksheet button
    html += '<button class="sidebar-worksheet-btn" id="sidebar-worksheet-btn">🖨️ Print Worksheet</button>';

    html += '</aside>';
    return html;
  }

  function renderLessonHeader(lesson) {
    return '<div class="lesson-header">' +
      '<div class="lesson-number">Lesson ' + lesson.number + '</div>' +
      '<h1 class="lesson-title">' + lesson.title + '</h1>' +
      '</div>';
  }

  function renderStepTabs(status) {
    return '<div class="step-tabs">' +
      '<button class="step-tab active' + (status.learnDone ? ' completed' : '') + '" data-step="learn">' +
        '<span class="step-tab-icon">📘</span> <span>Learn</span>' +
      '</button>' +
      '<button class="step-tab' + (status.practiceDone ? ' completed' : '') + '" data-step="practice">' +
        '<span class="step-tab-icon">🎯</span> <span>Practice</span>' +
      '</button>' +
      '<button class="step-tab' + (status.checkDone ? ' completed' : '') + '" data-step="check">' +
        '<span class="step-tab-icon">✅</span> <span>Check</span>' +
      '</button>' +
      '</div>';
  }

  function renderStepContent(step) {
    var area = document.getElementById('step-content-area');
    if (!area || !currentLesson) return;

    currentStep = step;

    switch (step) {
      case 'learn':
        renderLearnStep(area);
        break;
      case 'practice':
        renderPracticeStep(area);
        break;
      case 'check':
        renderCheckStep(area);
        break;
    }
  }

  function renderLearnStep(area) {
    var learn = currentLesson.learnContent || {};
    var html = '<div class="step-content">';
    html += '<div class="learn-content">';
    html += renderWorksheetHeader();

    // Main explanation
    if (learn.title) {
      html += '<div class="learn-section">';
      html += '<h3 class="learn-section-title">📚 ' + learn.title + '</h3>';
      (learn.paragraphs || []).forEach(function (p) {
        html += '<p class="learn-paragraph">' + p + '</p>';
      });
      html += '</div>';
    }

    // Highlight/key concept
    if (learn.keyPoint) {
      html += '<div class="learn-highlight">';
      html += '<span class="learn-highlight-icon">💡</span> ' + learn.keyPoint;
      html += '</div>';
    }

    // Examples
    if (learn.examples && learn.examples.length > 0) {
      html += '<div class="learn-section">';
      html += '<h3 class="learn-section-title">🎯 Examples</h3>';
      html += '<div class="learn-examples">';
      learn.examples.forEach(function (ex) {
        html += '<div class="learn-example-card">';
        if (ex.visual) html += '<span class="learn-example-visual">' + ex.visual + '</span>';
        html += '<span class="learn-example-text">' + ex.text + '</span>';
        if (ex.label) html += '<span class="learn-example-label">' + ex.label + '</span>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
    }

    // Tip
    if (learn.tip) {
      html += '<div class="learn-tip">';
      html += '<span class="learn-tip-icon">🌟</span>';
      html += '<div class="learn-tip-text">' + learn.tip + '</div>';
      html += '</div>';
    }

    html += '</div>'; // end learn-content

    // Mark as done button
    html += '<div class="step-complete-btn">';
    html += '<button class="btn btn-primary btn-lg" id="learn-done-btn">✅ I Learned It! Go to Practice →</button>';
    html += '</div>';

    html += '</div>'; // end step-content
    area.innerHTML = html;

    // Bind learn done
    var doneBtn = document.getElementById('learn-done-btn');
    if (doneBtn) {
      doneBtn.addEventListener('click', function () {
        Storage.saveLessonStep(currentLesson.id, 'learn');
        markTabComplete('learn');
        switchToStep('practice');
        AudioService.correct();
        Storage.addPoints(5);
        Progress.updateHeaderStats();
      });
    }
  }

  function renderPracticeStep(area) {
    var activity = currentLesson.activity;
    if (!activity) {
      area.innerHTML = '<div class="step-content"><div class="empty-state"><span class="empty-state-icon">🎮</span><h3>No practice activity for this lesson</h3><button class="btn btn-primary" id="skip-practice-btn">Skip to Check →</button></div></div>';
      var skipBtn = document.getElementById('skip-practice-btn');
      if (skipBtn) {
        skipBtn.addEventListener('click', function () {
          Storage.saveLessonStep(currentLesson.id, 'practice');
          markTabComplete('practice');
          switchToStep('check');
        });
      }
      return;
    }

    area.innerHTML = '<div class="step-content" id="practice-container"></div>';
    var practiceContainer = document.getElementById('practice-container');

    Activities.render(practiceContainer, activity, function (isCorrect) {
      Storage.saveLessonStep(currentLesson.id, 'practice');
      markTabComplete('practice');
      Storage.addPoints(isCorrect ? 10 : 5);
      Progress.updateHeaderStats();

      // Auto-advance to check after a moment
      setTimeout(function () {
        switchToStep('check');
      }, 500);
    });

    var headerDiv = document.createElement('div');
    headerDiv.innerHTML = renderWorksheetHeader();
    practiceContainer.insertBefore(headerDiv.firstChild, practiceContainer.firstChild);
  }

  function renderCheckStep(area) {
    var questions = currentLesson.checkQuestions || [];
    if (questions.length === 0) {
      area.innerHTML = '<div class="step-content"><div class="empty-state"><span class="empty-state-icon">✅</span><h3>No check questions for this lesson</h3><p>You\'re all done with this lesson!</p><button class="btn btn-primary" id="complete-lesson-btn">Complete Lesson 🎉</button></div></div>';
      var completeBtn = document.getElementById('complete-lesson-btn');
      if (completeBtn) {
        completeBtn.addEventListener('click', function () {
          completeLessonCheck(3);
        });
      }
      return;
    }

    // Simple inline quiz (3 questions max)
    var currentQ = 0;
    var checkScore = 0;

    function renderCheckQuestion() {
      if (currentQ >= questions.length) {
        // Done
        completeLessonCheck(checkScore);
        return;
      }

      var q = questions[currentQ];
      var letters = ['A', 'B', 'C', 'D'];
      var html = '<div class="step-content">';
      html += '<div class="quiz-question-card">';
      html += renderWorksheetHeader();
      html += '<div class="quiz-question-number">Check ' + (currentQ + 1) + ' of ' + questions.length + '</div>';
      html += '<div class="quiz-question-text">' + q.question + '</div>';
      html += '<div class="quiz-options">';
      (q.options || []).forEach(function (opt, i) {
        html += '<div class="quiz-option" data-index="' + i + '">';
        html += '<span class="quiz-option-letter">' + letters[i] + '</span>';
        html += '<span class="quiz-option-bubble"></span>';
        html += '<span class="quiz-option-text">' + opt + '</span>';
        html += '<span class="quiz-option-feedback"></span>';
        html += '</div>';
      });
      html += '</div>';
      html += '<div class="quiz-feedback hidden" id="check-feedback"></div>';
      html += '</div>';
      html += '<div class="quiz-nav"><button class="btn btn-primary btn-lg hidden" id="check-next-btn">Next →</button></div>';
      html += '</div>';

      area.innerHTML = html;

      var answered = false;
      var options = document.querySelectorAll('.quiz-option');
      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          AudioService.click();

          var idx = parseInt(opt.dataset.index);
          var isCorrect = idx === q.correct;
          if (isCorrect) checkScore++;

          options.forEach(function (o) {
            o.classList.add('disabled');
            if (parseInt(o.dataset.index) === q.correct) {
              o.classList.add('correct');
              o.querySelector('.quiz-option-feedback').textContent = '✓';
            }
            if (parseInt(o.dataset.index) === idx && !isCorrect) {
              o.classList.add('wrong');
              o.querySelector('.quiz-option-feedback').textContent = '✗';
            }
          });

          var fb = document.getElementById('check-feedback');
          if (fb) {
            fb.classList.remove('hidden');
            fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
            fb.innerHTML = '<span class="quiz-feedback-icon">' + (isCorrect ? '🎉' : '💡') + '</span>' +
              '<div><p class="quiz-feedback-text">' + (isCorrect ? 'Correct!' : 'Not quite!') + '</p></div>';
          }

          if (isCorrect) AudioService.correct();
          else AudioService.wrong();

          var nextBtn = document.getElementById('check-next-btn');
          if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.textContent = currentQ >= questions.length - 1 ? '🎉 Complete Lesson!' : 'Next →';
            nextBtn.addEventListener('click', function () {
              currentQ++;
              renderCheckQuestion();
            });
          }
        });
      });
    }

    renderCheckQuestion();
  }

  function completeLessonCheck(checkScore) {
    Storage.saveLessonStep(currentLesson.id, 'check');
    Storage.saveLessonCheckScore(currentLesson.id, checkScore);
    markTabComplete('check');
    Storage.addPoints(checkScore * 5);
    Progress.updateHeaderStats();

    // Show celebration
    Rewards.showCelebration(
      'Lesson Complete!',
      currentLesson.title + ' — Great work, champion!',
      '🎉'
    );
  }

  function markTabComplete(step) {
    var tab = document.querySelector('.step-tab[data-step="' + step + '"]');
    if (tab) tab.classList.add('completed');

    // Also update sidebar lesson item
    var lessonItem = document.querySelector('.lesson-list-item[data-lesson="' + currentLesson.id + '"]');
    var status = Storage.getLessonStatus(currentLesson.id);
    if (lessonItem && status && status.completed) {
      lessonItem.classList.add('completed');
      var check = lessonItem.querySelector('.lesson-list-check');
      if (check) check.textContent = '✓';
    }
  }

  function switchToStep(step) {
    // Update tab active state
    var tabs = document.querySelectorAll('.step-tab');
    tabs.forEach(function (t) {
      t.classList.remove('active');
      if (t.dataset.step === step) t.classList.add('active');
    });
    renderStepContent(step);
    AnimUtils.scrollToTop();
  }

  function bindStepTabEvents(status) {
    var tabs = document.querySelectorAll('.step-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var step = tab.dataset.step;
        switchToStep(step);
        AudioService.click();
      });
    });
  }

  function bindSidebarEvents(mod, container) {
    // Lesson list clicks
    document.querySelectorAll('.lesson-list-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var lessonId = item.dataset.lesson;
        var moduleId = item.dataset.module;
        window.location.hash = '#lesson/' + moduleId + '/' + lessonId;
      });
    });

    // Quiz button
    var quizBtn = document.getElementById('sidebar-quiz-btn');
    if (quizBtn) {
      quizBtn.addEventListener('click', function () {
        window.location.hash = '#quiz/' + mod.id;
      });
    }

    // Worksheet button
    var wsBtn = document.getElementById('sidebar-worksheet-btn');
    if (wsBtn) {
      wsBtn.addEventListener('click', function () {
        if (window.Worksheets) {
          Worksheets.generate(mod.id);
        }
      });
    }
  }

  function bindNavEvents(mod, lessonIndex) {
    var prevBtn = document.querySelector('.lesson-nav-btn.prev');
    var nextBtn = document.querySelector('.lesson-nav-btn.next');

    if (prevBtn && lessonIndex > 0) {
      prevBtn.addEventListener('click', function () {
        var prevLesson = mod.lessons[lessonIndex - 1];
        window.location.hash = '#lesson/' + mod.id + '/' + prevLesson.id;
      });
    }

    if (nextBtn && lessonIndex < mod.lessons.length - 1) {
      nextBtn.addEventListener('click', function () {
        var nextLesson = mod.lessons[lessonIndex + 1];
        window.location.hash = '#lesson/' + mod.id + '/' + nextLesson.id;
      });
    }
  }

  function renderLessonNav(mod, lessonIndex) {
    var html = '<div class="lesson-nav">';

    if (lessonIndex > 0) {
      html += '<button class="lesson-nav-btn prev">⬅️ Previous</button>';
    } else {
      html += '<button class="lesson-nav-btn prev" disabled>⬅️ Previous</button>';
    }

    if (lessonIndex < mod.lessons.length - 1) {
      html += '<button class="lesson-nav-btn next">Next ➡️</button>';
    } else {
      html += '<button class="lesson-nav-btn next" disabled>Last Lesson</button>';
    }

    html += '</div>';
    return html;
  }

  return {
    render: render
  };
})();
