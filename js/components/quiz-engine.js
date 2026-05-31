/* ============================================================
   CHAMPION ACADEMY — Quiz Engine Component
   ============================================================ */

window.QuizEngine = (function () {

  var currentQuiz = null;
  var currentIndex = 0;
  var score = 0;
  var answers = [];

  function start(container, questions, moduleId, onFinish) {
    currentQuiz = { questions: questions, moduleId: moduleId, onFinish: onFinish, container: container };
    currentIndex = 0;
    score = 0;
    answers = [];
    renderQuestion(container);
  }

  function renderQuestion(container) {
    if (!currentQuiz) return;
    var questions = currentQuiz.questions;
    if (currentIndex >= questions.length) {
      finishQuiz();
      return;
    }

    var q = questions[currentIndex];
    var total = questions.length;
    var progressPct = Math.round(((currentIndex) / total) * 100);
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    var html = '<div class="quiz-view">';

    // Progress
    html += '<div class="quiz-progress">' +
      '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + progressPct + '%"></div></div>' +
      '<div class="quiz-progress-text"><span>Question ' + (currentIndex + 1) + ' of ' + total + '</span><span>' + score + ' correct</span></div>' +
      '</div>';

    // Question card
    html += '<div class="quiz-question-card">';
    html += '<div class="quiz-question-number">Question ' + (currentIndex + 1) + '</div>';
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:var(--space-md)">' +
      '<div class="quiz-question-text" style="margin-bottom:0">' + (q.question || q.text || '') + '</div>' +
      '<button class="btn-icon speak-btn" data-text="' + (q.question || q.text || '').replace(/"/g, '&quot;') + '" title="Read Aloud">🔊</button>' +
      '</div>';

    // Options based on type
    if (q.type === 'true-false') {
      html += '<div class="quiz-tf-options">' +
        '<div class="quiz-tf-option quiz-option" data-value="true"><span class="quiz-option-bubble"></span><span class="quiz-tf-icon">✅</span><span>True</span></div>' +
        '<div class="quiz-tf-option quiz-option" data-value="false"><span class="quiz-option-bubble"></span><span class="quiz-tf-icon">❌</span><span>False</span></div>' +
        '</div>';
    } else if (q.type === 'fill-blank') {
      html += '<div class="quiz-fill-blank">' +
        '<input type="text" class="quiz-fill-input" id="quiz-fill-answer" placeholder="Type your answer..." autocomplete="off">' +
        '</div>';
    } else {
      html += '<div class="quiz-options">';
      (q.options || []).forEach(function (opt, i) {
        html += '<div class="quiz-option" data-index="' + i + '">' +
          '<span class="quiz-option-letter">' + letters[i] + '</span>' +
          '<span class="quiz-option-bubble"></span>' +
          '<span class="quiz-option-text">' + opt + '</span>' +
          '<button class="btn-icon speak-btn" data-text="' + opt.replace(/"/g, '&quot;') + '" title="Read Aloud" style="margin-left:auto;z-index:2">🔊</button>' +
          '<span class="quiz-option-feedback"></span>' +
          '</div>';
      });
      html += '</div>';
    }

    // Feedback area
    html += '<div class="quiz-feedback hidden" id="quiz-q-feedback"></div>';

    html += '</div>'; // end question card

    // Navigation
    html += '<div class="quiz-nav">' +
      '<button class="btn btn-primary btn-lg hidden" id="quiz-next-btn">Next Question ➡️</button>' +
      '</div>';

    html += '</div>'; // end quiz-view

    container.innerHTML = html;
    bindSpeakButtons(container);

    // Bind events
    setTimeout(function () {
      bindQuizEvents(q);
    }, 50);
  }

  function bindSpeakButtons(container) {
    var target = container || document;
    target.querySelectorAll('.speak-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var text = btn.dataset.text;
        if (window.AudioService && window.AudioService.speak) {
          window.AudioService.speak(text);
        }
      });
    });
  }

  function bindQuizEvents(q) {
    var answered = false;

    if (q.type === 'true-false') {
      var tfOptions = document.querySelectorAll('.quiz-tf-option');
      tfOptions.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          AudioService.click();

          var correctVal = (q.correct === true || q.correct === 'true') ? 'true' : 'false';
          var selectedVal = opt.dataset.value;
          var isCorrect = selectedVal === correctVal;

          processAnswer(isCorrect, q);

          tfOptions.forEach(function (o) {
            o.classList.add('disabled');
            if (o.dataset.value === correctVal) o.classList.add('correct');
            if (o.dataset.value === selectedVal && !isCorrect) o.classList.add('wrong');
          });
        });
      });
    } else if (q.type === 'fill-blank') {
      var input = document.getElementById('quiz-fill-answer');
      var checkOnEnter = function (e) {
        if (e.key === 'Enter' && !answered) {
          answered = true;
          var userVal = input.value.trim().toLowerCase();
          var correctVal = (q.answer || '').toString().toLowerCase();
          var isCorrect = userVal === correctVal;

          if (isCorrect) {
            input.classList.add('correct');
          } else {
            input.classList.add('wrong');
          }
          input.disabled = true;
          processAnswer(isCorrect, q);
        }
      };
      if (input) {
        input.addEventListener('keydown', checkOnEnter);
        input.focus();
      }
      // Also add a check button for fill-blank
      var nav = document.querySelector('.quiz-nav');
      if (nav) {
        var checkBtn = document.createElement('button');
        checkBtn.className = 'btn btn-secondary btn-lg';
        checkBtn.textContent = '✅ Check';
        checkBtn.id = 'quiz-fill-check';
        nav.insertBefore(checkBtn, nav.firstChild);
        checkBtn.addEventListener('click', function () {
          if (!answered && input) {
            answered = true;
            var userVal = input.value.trim().toLowerCase();
            var correctVal = (q.answer || '').toString().toLowerCase();
            var isCorrect = userVal === correctVal;
            if (isCorrect) { input.classList.add('correct'); }
            else { input.classList.add('wrong'); }
            input.disabled = true;
            checkBtn.classList.add('hidden');
            processAnswer(isCorrect, q);
          }
        });
      }
    } else {
      // Multiple choice
      var options = document.querySelectorAll('.quiz-option');
      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          AudioService.click();

          var selectedIdx = parseInt(opt.dataset.index);
          var correctIdx = q.correct;
          var isCorrect = selectedIdx === correctIdx;

          processAnswer(isCorrect, q);

          options.forEach(function (o) {
            o.classList.add('disabled');
            var idx = parseInt(o.dataset.index);
            if (idx === correctIdx) {
              o.classList.add('correct');
              o.querySelector('.quiz-option-feedback').textContent = '✓';
            }
            if (idx === selectedIdx && !isCorrect) {
              o.classList.add('wrong');
              o.querySelector('.quiz-option-feedback').textContent = '✗';
            }
          });
        });
      });
    }
  }

  function processAnswer(isCorrect, q) {
    if (isCorrect) score++;
    answers.push({ question: q, correct: isCorrect });

    // Show feedback
    var fb = document.getElementById('quiz-q-feedback');
    if (fb) {
      fb.classList.remove('hidden');
      fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
      fb.innerHTML = '<span class="quiz-feedback-icon">' + (isCorrect ? '🎉' : '💡') + '</span>' +
        '<div><p class="quiz-feedback-text">' + (isCorrect ? 'Correct! Great job!' : 'Not quite!') + '</p>' +
        (q.explanation ? '<p class="quiz-feedback-explanation">' + q.explanation + '</p>' : '') +
        '</div>';
    }

    if (isCorrect) AudioService.correct();
    else AudioService.wrong();

    // Show next button
    var nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) {
      nextBtn.classList.remove('hidden');
      var isLast = currentIndex >= currentQuiz.questions.length - 1;
      nextBtn.textContent = isLast ? '🏆 See Results' : 'Next Question ➡️';
      nextBtn.addEventListener('click', function () {
        currentIndex++;
        renderQuestion(currentQuiz.container);
      });
    }
  }

  function finishQuiz() {
    var total = currentQuiz.questions.length;
    var stars = Progress.calculateStars(score, total);
    var points = Progress.calculateQuizPoints(score, total);

    // Save results
    Storage.saveQuizResult(currentQuiz.moduleId, score, total, stars, points);
    Storage.addPoints(points);

    // Check if badge should be awarded
    var mod = Progress.findModule(currentQuiz.moduleId);
    var newBadge = null;
    if (mod && mod.badgeId && stars >= 1) {
      var isNew = Storage.awardBadge(mod.badgeId);
      if (isNew) {
        newBadge = { id: mod.badgeId, name: mod.badgeName, icon: mod.badgeIcon, moduleName: mod.title };
      }
    }

    // Update header
    Progress.updateHeaderStats();

    // Show results via rewards overlay
    Rewards.showQuizResults(score, total, stars, points, newBadge,
      function onRetry() {
        start(currentQuiz.container, currentQuiz.questions, currentQuiz.moduleId, currentQuiz.onFinish);
      },
      function onContinue() {
        if (newBadge) {
          Rewards.showBadgeUnlock(newBadge, function () {
            if (currentQuiz.onFinish) currentQuiz.onFinish(score, total, stars);
          });
        } else {
          if (currentQuiz.onFinish) currentQuiz.onFinish(score, total, stars);
        }
      }
    );
  }

  return {
    start: start,
    getScore: function () { return score; }
  };
})();
