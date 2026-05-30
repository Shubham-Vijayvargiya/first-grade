/* ============================================================
   CHAMPION ACADEMY — Worksheet Generator
   Creates printable worksheets for each module
   ============================================================ */

window.Worksheets = (function () {

  function generate(moduleId) {
    var mod = Progress.findModule(moduleId);
    if (!mod) return;

    var subjectInfo = Progress.getSubjectInfo(mod.subject);
    var subjectName = subjectInfo ? subjectInfo.name : mod.subject;

    var content = '<!DOCTYPE html><html><head>' +
      '<meta charset="UTF-8">' +
      '<title>' + mod.title + ' — Worksheet | Champion Academy</title>' +
      '<style>' +
        'body { font-family: "Nunito", Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6; }' +
        'h1 { font-size: 24px; text-align: center; border-bottom: 3px solid #333; padding-bottom: 10px; margin-bottom: 5px; }' +
        'h2 { font-size: 18px; margin-top: 30px; border-bottom: 1px solid #ccc; padding-bottom: 5px; }' +
        'h3 { font-size: 15px; margin-top: 20px; }' +
        '.header { text-align: center; margin-bottom: 20px; }' +
        '.name-line { border-bottom: 1px solid #999; width: 250px; display: inline-block; margin-left: 10px; }' +
        '.date-line { border-bottom: 1px solid #999; width: 150px; display: inline-block; margin-left: 10px; }' +
        '.info-row { display: flex; justify-content: space-between; margin: 10px 0 30px; font-size: 14px; }' +
        '.question { margin: 15px 0; padding: 10px; border: 1px solid #eee; border-radius: 8px; page-break-inside: avoid; }' +
        '.question-num { font-weight: bold; margin-bottom: 5px; }' +
        '.question-text { margin-bottom: 10px; font-size: 16px; }' +
        '.options { list-style: none; padding: 0; }' +
        '.options li { padding: 4px 0; font-size: 14px; }' +
        '.options li::before { content: "○ "; font-size: 16px; }' +
        '.write-line { border-bottom: 1px solid #ccc; height: 30px; margin: 5px 0; }' +
        '.write-area { border: 1px solid #ccc; border-radius: 4px; min-height: 80px; margin: 10px 0; }' +
        '.activity-section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 8px; }' +
        '.footer { text-align: center; margin-top: 40px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }' +
        '@media print { body { padding: 0; } .question { border: 1px solid #ddd; } }' +
      '</style></head><body>';

    // Header
    content += '<div class="header">';
    content += '<h1>' + mod.badgeIcon + ' ' + mod.title + '</h1>';
    content += '<p style="color:#666">' + subjectName + ' — Champion Academy Worksheet</p>';
    content += '</div>';

    content += '<div class="info-row">';
    content += '<span>Name: <span class="name-line"></span></span>';
    content += '<span>Date: <span class="date-line"></span></span>';
    content += '</div>';

    // Generate questions from lesson data
    var questionNum = 1;

    mod.lessons.forEach(function (lesson, i) {
      content += '<h2>Part ' + (i + 1) + ': ' + lesson.title + '</h2>';

      // Add key concept from learn content
      if (lesson.learnContent && lesson.learnContent.keyPoint) {
        content += '<p style="background:#f0f8ff;padding:10px;border-radius:4px;font-style:italic;">💡 Remember: ' + lesson.learnContent.keyPoint + '</p>';
      }

      // Add check questions
      if (lesson.checkQuestions && lesson.checkQuestions.length > 0) {
        lesson.checkQuestions.forEach(function (q) {
          content += '<div class="question">';
          content += '<div class="question-num">Question ' + questionNum + '</div>';
          content += '<div class="question-text">' + q.question + '</div>';

          if (q.options) {
            content += '<ul class="options">';
            q.options.forEach(function (opt) {
              content += '<li>' + opt + '</li>';
            });
            content += '</ul>';
          } else {
            content += '<div class="write-line"></div>';
            content += '<div class="write-line"></div>';
          }

          content += '</div>';
          questionNum++;
        });
      }

      // Add a writing/practice prompt
      if (lesson.activity) {
        content += '<div class="activity-section">';
        content += '<h3>✏️ Practice Activity</h3>';
        content += '<p>' + (lesson.activity.instruction || 'Complete the activity below.') + '</p>';

        if (lesson.activity.type === 'fill-blank') {
          var items = lesson.activity.items || [lesson.activity];
          items.forEach(function (item) {
            content += '<p>' + (item.sentence || item.question || '').replace(/___/g, '<span class="name-line" style="width:100px"></span>') + '</p>';
          });
        } else if (lesson.activity.type === 'sorting') {
          var cats = lesson.activity.categories || [];
          content += '<p>Sort these items into the correct categories:</p>';
          var allItems = lesson.activity.items || [];
          content += '<p style="text-align:center;font-weight:bold">';
          allItems.forEach(function (item) {
            content += (item.text || item) + '&nbsp;&nbsp;&nbsp;';
          });
          content += '</p>';
          cats.forEach(function (cat) {
            content += '<p><strong>' + (cat.name || cat) + ':</strong> <span class="name-line" style="width:300px"></span></p>';
          });
        } else {
          content += '<div class="write-area"></div>';
        }

        content += '</div>';
      }
    });

    // Module quiz questions
    if (mod.quizQuestions && mod.quizQuestions.length > 0) {
      content += '<h2>🏆 Module Quiz</h2>';
      mod.quizQuestions.forEach(function (q) {
        content += '<div class="question">';
        content += '<div class="question-num">Question ' + questionNum + '</div>';
        content += '<div class="question-text">' + (q.question || q.text || '') + '</div>';

        if (q.options) {
          content += '<ul class="options">';
          q.options.forEach(function (opt) {
            content += '<li>' + opt + '</li>';
          });
          content += '</ul>';
        } else {
          content += '<div class="write-line"></div>';
        }

        content += '</div>';
        questionNum++;
      });
    }

    // Footer
    content += '<div class="footer">Champion Academy — First Grade Learning Adventure • ' + new Date().toLocaleDateString() + '</div>';

    content += '</body></html>';

    // Open in new window for printing
    var printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(function () {
        printWindow.print();
      }, 500);
    }

    // Track
    Storage.markWorksheetPrinted(moduleId);
  }

  return {
    generate: generate
  };
})();
