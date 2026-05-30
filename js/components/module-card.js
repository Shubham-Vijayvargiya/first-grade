/* ============================================================
   CHAMPION ACADEMY — Module Card Component
   ============================================================ */

window.ModuleCard = (function () {
  return {
    render: function (mod) {
      var progress = Progress.getModuleProgress(mod.id);
      var completedClass = progress.percentage === 100 ? ' completed' : '';

      var html = '<div class="module-card card-clickable' + completedClass + '" data-subject="' + mod.subject + '" data-module="' + mod.id + '">';

      html += '<div class="module-card-header">';
      html += '<span class="module-card-number">Module ' + mod.number + '</span>';
      html += '<div class="module-card-badge ' + (progress.hasBadge ? 'earned' : 'locked') + '">' + mod.badgeIcon + '</div>';
      html += '</div>';

      html += '<span class="module-card-icon">' + mod.icon + '</span>';
      html += '<h3 class="module-card-title">' + mod.title + '</h3>';
      html += '<p class="module-card-desc">' + mod.description + '</p>';

      html += '<div class="module-card-footer">';
      html += '<span class="module-card-lessons">' + mod.lessons.length + ' lessons</span>';
      html += '<div class="module-card-progress">';
      html += '<div class="module-progress-bar"><div class="module-progress-fill" style="width:' + progress.percentage + '%"></div></div>';
      html += '<span class="module-progress-pct">' + progress.percentage + '%</span>';
      html += '</div>';
      html += '</div>';

      html += '</div>';
      return html;
    }
  };
})();

/* ============================================================
   CHAMPION ACADEMY — Navigation Component
   ============================================================ */

window.Navigation = (function () {
  return {
    setBreadcrumbs: function (items) {
      var bc = document.getElementById('breadcrumbs');
      if (!bc) return;

      var html = '';
      items.forEach(function (item, i) {
        var isLast = i === items.length - 1;
        html += '<li>';
        if (isLast) {
          html += '<span class="current">' + item.label + '</span>';
        } else {
          html += '<a href="' + item.href + '">' + item.label + '</a>';
        }
        html += '</li>';
      });
      bc.innerHTML = html;
    },

    clearBreadcrumbs: function () {
      var bc = document.getElementById('breadcrumbs');
      if (bc) bc.innerHTML = '';
    }
  };
})();
