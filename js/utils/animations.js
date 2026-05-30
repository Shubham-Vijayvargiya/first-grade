/* ============================================================
   CHAMPION ACADEMY — Animation Utilities
   ============================================================ */

window.AnimUtils = (function () {
  return {
    // Add animation class and remove when done
    animate: function (element, animClass, callback) {
      if (!element) return;
      element.classList.add(animClass);
      function handleEnd() {
        element.classList.remove(animClass);
        element.removeEventListener('animationend', handleEnd);
        if (callback) callback();
      }
      element.addEventListener('animationend', handleEnd);
    },

    // Stagger animation for child elements
    staggerChildren: function (parent, animClass, delay) {
      if (!parent) return;
      var children = parent.children;
      delay = delay || 60;
      for (var i = 0; i < children.length; i++) {
        (function (child, index) {
          child.style.animationDelay = (index * delay) + 'ms';
          child.classList.add(animClass);
        })(children[i], i);
      }
    },

    // Points float animation (shows +10 floating up)
    showPointsFloat: function (x, y, points) {
      var el = document.createElement('div');
      el.className = 'floating-points anim-points-float';
      el.textContent = '+' + points;
      el.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;font-family:var(--font-heading);font-size:1.5rem;color:var(--color-accent-yellow);z-index:700;pointer-events:none;';
      document.body.appendChild(el);
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 1000);
    },

    // Page transition
    transitionPage: function (container, renderFn) {
      if (!container) {
        renderFn();
        return;
      }
      container.classList.add('page-exit');
      setTimeout(function () {
        renderFn();
        container.classList.remove('page-exit');
        container.classList.add('page-enter');
        setTimeout(function () {
          container.classList.remove('page-enter');
        }, 400);
      }, 200);
    },

    // Scroll to top smoothly
    scrollToTop: function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
})();
