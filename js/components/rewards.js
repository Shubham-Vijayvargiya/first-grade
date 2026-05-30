/* ============================================================
   CHAMPION ACADEMY — Rewards Component
   Badge unlocks, confetti, celebrations
   ============================================================ */

window.Rewards = (function () {
  var confettiCanvas = null;
  var confettiCtx = null;
  var confettiPieces = [];
  var confettiAnimFrame = null;

  function initConfetti() {
    confettiCanvas = document.getElementById('confetti-canvas');
    if (!confettiCanvas) return;
    confettiCtx = confettiCanvas.getContext('2d');
    resizeConfetti();
    window.addEventListener('resize', resizeConfetti);
  }

  function resizeConfetti() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }

  function createConfettiPiece() {
    var colors = ['#FF5252', '#448AFF', '#00E676', '#FFD740', '#E040FB', '#FF4081', '#00B0FF', '#FF6D00'];
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * -window.innerHeight,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      speedX: (Math.random() - 0.5) * 3,
      speedY: Math.random() * 3 + 2,
      opacity: 1
    };
  }

  function animateConfetti() {
    if (!confettiCtx || !confettiCanvas) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiPieces.forEach(function (p) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      p.speedY += 0.05;
      if (p.y > window.innerHeight * 0.8) {
        p.opacity -= 0.02;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.globalAlpha = Math.max(0, p.opacity);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confettiCtx.restore();
    });

    confettiPieces = confettiPieces.filter(function (p) { return p.opacity > 0; });

    if (confettiPieces.length > 0) {
      confettiAnimFrame = requestAnimationFrame(animateConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  return {
    init: function () {
      initConfetti();
    },

    // Launch confetti
    launchConfetti: function (count) {
      if (!confettiCanvas) initConfetti();
      count = count || 100;
      for (var i = 0; i < count; i++) {
        confettiPieces.push(createConfettiPiece());
      }
      if (!confettiAnimFrame) {
        animateConfetti();
      }
    },

    // Show badge unlock overlay
    showBadgeUnlock: function (badge, callback) {
      var overlay = document.getElementById('reward-overlay');
      var content = document.getElementById('reward-content');
      if (!overlay || !content) return;

      content.innerHTML =
        '<div class="reward-icon anim-trophy">' + (badge.icon || '🏆') + '</div>' +
        '<h2 class="reward-title glow-text">Trophy Unlocked!</h2>' +
        '<p class="reward-subtitle">' + (badge.name || 'New Badge') + '</p>' +
        '<p style="color:var(--text-muted);margin-bottom:var(--space-xl);">' + (badge.moduleName || '') + '</p>' +
        '<button class="btn btn-primary btn-lg" id="reward-continue-btn">🎮 Keep Going!</button>';

      overlay.classList.remove('hidden');
      Rewards.launchConfetti(150);
      AudioService.achievement();

      var btn = document.getElementById('reward-continue-btn');
      if (btn) {
        btn.addEventListener('click', function () {
          overlay.classList.add('hidden');
          if (callback) callback();
        });
      }

      // Also close on overlay click
      overlay.addEventListener('click', function handler(e) {
        if (e.target === overlay) {
          overlay.classList.add('hidden');
          overlay.removeEventListener('click', handler);
          if (callback) callback();
        }
      });
    },

    // Show quiz results
    showQuizResults: function (score, total, stars, points, badge, onRetry, onContinue) {
      var overlay = document.getElementById('reward-overlay');
      var content = document.getElementById('reward-content');
      if (!overlay || !content) return;

      var pct = total > 0 ? Math.round((score / total) * 100) : 0;
      var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🥈' : pct >= 50 ? '🥉' : '💪';
      var title = pct >= 90 ? 'CHAMPION!' : pct >= 70 ? 'Great Job!' : pct >= 50 ? 'Good Try!' : 'Keep Practicing!';

      var starsHtml = '';
      for (var i = 0; i < 3; i++) {
        if (i < stars) {
          starsHtml += '<span class="quiz-results-star earned">⭐</span>';
        } else {
          starsHtml += '<span class="quiz-results-star empty">⭐</span>';
        }
      }

      content.innerHTML =
        '<div class="quiz-results">' +
          '<div class="quiz-results-header">' +
            '<span class="quiz-results-icon">' + emoji + '</span>' +
            '<h2 class="quiz-results-title">' + title + '</h2>' +
            '<p class="quiz-results-subtitle">You completed the quiz!</p>' +
          '</div>' +
          '<div class="quiz-results-score">' +
            '<span class="quiz-results-score-number">' + score + ' / ' + total + '</span>' +
            '<span class="quiz-results-score-label">Questions Correct</span>' +
          '</div>' +
          '<div class="quiz-results-stars">' + starsHtml + '</div>' +
          '<p class="quiz-results-points">+' + points + ' Points!</p>' +
          '<div class="quiz-results-actions">' +
            '<button class="btn btn-secondary" id="quiz-retry-btn">🔄 Try Again</button>' +
            '<button class="btn btn-primary" id="quiz-continue-btn">✅ Continue</button>' +
          '</div>' +
        '</div>';

      overlay.classList.remove('hidden');

      if (stars >= 2) {
        Rewards.launchConfetti(stars * 50);
      }

      if (stars >= 1) AudioService.levelUp();

      var retryBtn = document.getElementById('quiz-retry-btn');
      var continueBtn = document.getElementById('quiz-continue-btn');

      if (retryBtn) {
        retryBtn.addEventListener('click', function () {
          overlay.classList.add('hidden');
          if (onRetry) onRetry();
        });
      }

      if (continueBtn) {
        continueBtn.addEventListener('click', function () {
          overlay.classList.add('hidden');
          if (onContinue) onContinue();
        });
      }
    },

    // Show a quick celebration (lesson complete, etc.)
    showCelebration: function (title, subtitle, emoji) {
      var overlay = document.getElementById('reward-overlay');
      var content = document.getElementById('reward-content');
      if (!overlay || !content) return;

      content.innerHTML =
        '<div class="reward-icon anim-bounce-in">' + (emoji || '🎉') + '</div>' +
        '<h2 class="reward-title">' + (title || 'Great Job!') + '</h2>' +
        '<p class="reward-subtitle">' + (subtitle || '') + '</p>' +
        '<button class="btn btn-primary btn-lg" id="celebration-continue-btn">👍 Awesome!</button>';

      overlay.classList.remove('hidden');
      Rewards.launchConfetti(80);
      AudioService.correct();

      var btn = document.getElementById('celebration-continue-btn');
      if (btn) {
        btn.addEventListener('click', function () {
          overlay.classList.add('hidden');
        });
      }

      setTimeout(function () {
        overlay.classList.add('hidden');
      }, 5000);
    },

    // Close any open reward overlay
    close: function () {
      var overlay = document.getElementById('reward-overlay');
      if (overlay) overlay.classList.add('hidden');
    }
  };
})();
