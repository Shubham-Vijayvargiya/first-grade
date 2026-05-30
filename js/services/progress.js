/* ============================================================
   CHAMPION ACADEMY — Progress Service
   Computes aggregated progress from stored data
   ============================================================ */

window.Progress = (function () {

  // Get all modules flat list
  function getAllModules() {
    var modules = [];
    var subjects = ['ela', 'math', 'science', 'social', 'art'];
    subjects.forEach(function (subj) {
      var data = window.AppData && window.AppData[subj];
      if (data && data.modules) {
        data.modules.forEach(function (m) {
          modules.push(m);
        });
      }
    });
    return modules;
  }

  // Get all modules for a specific subject
  function getSubjectModules(subjectId) {
    var data = window.AppData && window.AppData[subjectId];
    return (data && data.modules) ? data.modules : [];
  }

  // Find a specific module by ID
  function findModule(moduleId) {
    var all = getAllModules();
    for (var i = 0; i < all.length; i++) {
      if (all[i].id === moduleId) return all[i];
    }
    return null;
  }

  // Find a specific lesson
  function findLesson(moduleId, lessonId) {
    var mod = findModule(moduleId);
    if (!mod || !mod.lessons) return null;
    for (var i = 0; i < mod.lessons.length; i++) {
      if (mod.lessons[i].id === lessonId) return mod.lessons[i];
    }
    return null;
  }

  // Count completed lessons for a module
  function getModuleLessonProgress(moduleId) {
    var mod = findModule(moduleId);
    if (!mod || !mod.lessons) return { completed: 0, total: 0 };
    var completed = 0;
    mod.lessons.forEach(function (lesson) {
      var status = Storage.getLessonStatus(lesson.id);
      if (status && status.completed) completed++;
    });
    return { completed: completed, total: mod.lessons.length };
  }

  return {
    getAllModules: getAllModules,
    getSubjectModules: getSubjectModules,
    findModule: findModule,
    findLesson: findLesson,

    // Get subject metadata
    getSubjectInfo: function (subjectId) {
      var data = window.AppData && window.AppData[subjectId];
      return data ? { id: data.id, name: data.name, icon: data.icon, description: data.description, color: data.color } : null;
    },

    // Module progress: { completed, total, percentage, quizResult, badge }
    getModuleProgress: function (moduleId) {
      var lp = getModuleLessonProgress(moduleId);
      var quizResult = Storage.getQuizResult(moduleId);
      var mod = findModule(moduleId);
      var badgeId = mod ? mod.badgeId : '';
      var hasBadge = badgeId ? Storage.hasBadge(badgeId) : false;

      var percentage = lp.total > 0 ? Math.round((lp.completed / lp.total) * 100) : 0;

      return {
        lessonsCompleted: lp.completed,
        lessonsTotal: lp.total,
        percentage: percentage,
        quizResult: quizResult,
        hasBadge: hasBadge,
        badgeId: badgeId
      };
    },

    // Subject progress
    getSubjectProgress: function (subjectId) {
      var modules = getSubjectModules(subjectId);
      var totalLessons = 0;
      var completedLessons = 0;
      var totalQuizStars = 0;
      var earnedQuizStars = 0;
      var completedModules = 0;

      modules.forEach(function (mod) {
        var lp = getModuleLessonProgress(mod.id);
        totalLessons += lp.total;
        completedLessons += lp.completed;
        totalQuizStars += 3;
        var qr = Storage.getQuizResult(mod.id);
        if (qr) {
          earnedQuizStars += qr.stars || 0;
          if (lp.completed === lp.total && qr.stars > 0) completedModules++;
        }
      });

      var percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      return {
        totalModules: modules.length,
        completedModules: completedModules,
        totalLessons: totalLessons,
        completedLessons: completedLessons,
        percentage: percentage,
        totalQuizStars: totalQuizStars,
        earnedQuizStars: earnedQuizStars
      };
    },

    // Overall progress across all subjects
    getOverallProgress: function () {
      var subjects = ['ela', 'math', 'science', 'social', 'art'];
      var totalLessons = 0;
      var completedLessons = 0;
      var totalModules = 0;
      var completedModules = 0;

      subjects.forEach(function (subj) {
        var sp = Progress.getSubjectProgress(subj);
        totalLessons += sp.totalLessons;
        completedLessons += sp.completedLessons;
        totalModules += sp.totalModules;
        completedModules += sp.completedModules;
      });

      var percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      return {
        totalLessons: totalLessons,
        completedLessons: completedLessons,
        totalModules: totalModules,
        completedModules: completedModules,
        percentage: percentage,
        totalPoints: Storage.getTotalPoints(),
        totalBadges: Storage.getBadges().length,
        streak: Storage.getStreak()
      };
    },

    // Get recently started/incomplete modules (for "continue" section)
    getRecentModules: function () {
      var all = getAllModules();
      var recent = [];

      all.forEach(function (mod) {
        var lp = getModuleLessonProgress(mod.id);
        if (lp.completed > 0 && lp.completed < lp.total) {
          recent.push({
            module: mod,
            progress: lp,
            percentage: Math.round((lp.completed / lp.total) * 100)
          });
        }
      });

      return recent.slice(0, 5);
    },

    // Get next uncompleted lesson for a module
    getNextLesson: function (moduleId) {
      var mod = findModule(moduleId);
      if (!mod || !mod.lessons) return null;

      for (var i = 0; i < mod.lessons.length; i++) {
        var status = Storage.getLessonStatus(mod.lessons[i].id);
        if (!status || !status.completed) {
          return mod.lessons[i];
        }
      }
      return null;
    },

    // Get all badge info (for trophy case)
    getAllBadgeInfo: function () {
      var allMods = getAllModules();
      return allMods.map(function (mod) {
        return {
          id: mod.badgeId,
          name: mod.badgeName,
          icon: mod.badgeIcon,
          moduleName: mod.title,
          moduleId: mod.id,
          subject: mod.subject,
          earned: Storage.hasBadge(mod.badgeId)
        };
      });
    },

    // Calculate points for a quiz score
    calculateQuizPoints: function (score, total) {
      var pct = total > 0 ? score / total : 0;
      if (pct >= 1) return 30;
      if (pct >= 0.8) return 20;
      if (pct >= 0.6) return 10;
      return 5;
    },

    // Calculate stars for a quiz score
    calculateStars: function (score, total) {
      var pct = total > 0 ? score / total : 0;
      if (pct >= 0.9) return 3;
      if (pct >= 0.7) return 2;
      if (pct >= 0.5) return 1;
      return 0;
    },

    // Get strengths (subjects with highest completion)
    getStrengths: function () {
      var subjects = ['ela', 'math', 'science', 'social', 'art'];
      var results = subjects.map(function (subj) {
        var sp = Progress.getSubjectProgress(subj);
        var info = Progress.getSubjectInfo(subj);
        return { id: subj, name: info ? info.name : subj, percentage: sp.percentage, icon: info ? info.icon : '' };
      });
      results.sort(function (a, b) { return b.percentage - a.percentage; });
      return results;
    },

    // Update the header stats display
    updateHeaderStats: function () {
      var pointsEl = document.getElementById('points-value');
      var trophiesEl = document.getElementById('trophies-value');
      var streakEl = document.getElementById('streak-value');

      if (pointsEl) pointsEl.textContent = Storage.getTotalPoints();
      if (trophiesEl) trophiesEl.textContent = Storage.getBadges().length;
      if (streakEl) streakEl.textContent = Storage.getStreak();
    }
  };
})();
