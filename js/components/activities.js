/* ============================================================
   CHAMPION ACADEMY — Activities Engine
   Handles all interactive activity types
   ============================================================ */

window.Activities = (function () {

  var currentActivity = null;
  var activityResult = null;

  // Render an activity based on its type and data
  function render(container, activity, onComplete) {
    if (!container || !activity) return;
    currentActivity = activity;
    activityResult = null;

    var type = activity.type;
    var html = '';

    switch (type) {
      case 'multiple-choice':
        html = renderMultipleChoice(activity);
        break;
      case 'drag-drop':
        html = renderDragDrop(activity);
        break;
      case 'matching':
        html = renderMatching(activity);
        break;
      case 'sorting':
        html = renderSorting(activity);
        break;
      case 'fill-blank':
        html = renderFillBlank(activity);
        break;
      case 'true-false':
        html = renderTrueFalse(activity);
        break;
      case 'sequence':
        html = renderSequence(activity);
        break;
      case 'counting':
        html = renderCounting(activity);
        break;
      case 'word-search':
        html = renderWordSearch(activity);
        break;
      case 'missing-letter':
        html = renderMissingLetter(activity);
        break;
      case 'read-fluency':
        html = renderReadFluency(activity);
        break;
      case 'tap-color':
        html = renderTapColor(activity);
        break;
      default:
        html = renderMultipleChoice(activity);
    }

    container.innerHTML =
      '<div class="activity-container">' +
        '<div class="activity-instruction" style="display:flex;align-items:center;gap:12px">' +
          '<span class="activity-instruction-icon">🎯</span> ' +
          '<span style="flex-grow:1">' + (activity.instruction || 'Complete the activity!') + '</span>' +
          '<button class="btn-icon speak-btn" data-text="' + (activity.instruction || 'Complete the activity!').replace(/"/g, '&quot;') + '" title="Read Aloud" style="flex-shrink:0">🔊</button>' +
        '</div>' +
        '<div class="activity-content" id="activity-content">' + html + '</div>' +
        '<div class="activity-feedback hidden" id="activity-feedback"></div>' +
        '<div class="activity-actions" id="activity-actions">' +
          '<button class="btn btn-primary btn-lg" id="check-activity-btn">✅ Check My Answer</button>' +
        '</div>' +
      '</div>';

    bindSpeakButtons(container);

    // Bind events based on type
    setTimeout(function () {
      bindEvents(type, activity, onComplete);
    }, 50);
  }

  // ── Multiple Choice ──────────────────────────────────────────
  function renderMultipleChoice(activity) {
    var html = '<div class="mc-question" style="display:flex;align-items:center;gap:12px">' +
      '<p class="mc-question-text" style="margin-bottom:0">' + (activity.question || '') + '</p>' +
      '<button class="btn-icon speak-btn" data-text="' + (activity.question || '').replace(/"/g, '&quot;') + '" title="Read Aloud">🔊</button>' +
      '</div>';
    html += '<div class="mc-options">';
    var letters = ['A', 'B', 'C', 'D'];
    (activity.options || []).forEach(function (opt, i) {
      html += '<div class="mc-option quiz-option" data-index="' + i + '">' +
        '<span class="quiz-option-letter">' + letters[i] + '</span>' +
        '<span class="quiz-option-bubble"></span>' +
        '<span class="quiz-option-text">' + opt + '</span>' +
        '<button class="btn-icon speak-btn" data-text="' + opt.replace(/"/g, '&quot;') + '" title="Read Aloud" style="margin-left:auto;z-index:2">🔊</button>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  // ── True/False ───────────────────────────────────────────────
  function renderTrueFalse(activity) {
    var text = activity.question || activity.statement || '';
    var html = '<div class="mc-question" style="display:flex;align-items:center;gap:12px">' +
      '<p class="mc-question-text" style="margin-bottom:0">' + text + '</p>' +
      '<button class="btn-icon speak-btn" data-text="' + text.replace(/"/g, '&quot;') + '" title="Read Aloud">🔊</button>' +
      '</div>';
    html += '<div class="quiz-tf-options">' +
      '<div class="quiz-tf-option quiz-option" data-value="true"><span class="quiz-option-bubble"></span><span class="quiz-tf-icon">✅</span><span>True</span></div>' +
      '<div class="quiz-tf-option quiz-option" data-value="false"><span class="quiz-option-bubble"></span><span class="quiz-tf-icon">❌</span><span>False</span></div>' +
      '</div>';
    return html;
  }

  // ── Fill in the Blank ────────────────────────────────────────
  function renderFillBlank(activity) {
    var items = activity.items || [activity];
    var html = '<div class="fill-blank-items">';
    items.forEach(function (item, i) {
      var parts = (item.sentence || item.question || '').split('___');
      html += '<div class="fill-blank-item" data-index="' + i + '">';
      html += '<p class="fill-blank-sentence">';
      parts.forEach(function (part, j) {
        html += '<span>' + part + '</span>';
        if (j < parts.length - 1) {
          html += '<input type="text" class="fill-blank-input quiz-fill-input" data-index="' + i + '" placeholder="?" autocomplete="off">';
        }
      });
      html += '</p></div>';
    });
    html += '</div>';
    return html;
  }

  // ── Sorting (categorize items) ───────────────────────────────
  function renderSorting(activity) {
    var categories = activity.categories || [];
    var items = shuffleArray(activity.items || []);

    var html = '<div class="sort-items" id="sort-items">';
    items.forEach(function (item) {
      html += '<div class="sort-item" draggable="true" data-value="' + escapeHtml(item.value || item.text || item) + '">' +
        '<span class="sort-item-icon">' + (item.icon || '') + '</span>' +
        '<span class="sort-item-text">' + (item.text || item) + '</span>' +
        '</div>';
    });
    html += '</div>';

    html += '<div class="sort-categories">';
    categories.forEach(function (cat) {
      html += '<div class="sort-category" data-category="' + escapeHtml(cat.name || cat) + '">' +
        '<div class="sort-category-header">' + (cat.name || cat) + '</div>' +
        '<div class="sort-category-dropzone" data-category="' + escapeHtml(cat.name || cat) + '"></div>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  // ── Drag and Drop ────────────────────────────────────────────
  function renderDragDrop(activity) {
    var items = shuffleArray(activity.items || []);
    var targets = activity.targets || [];

    var html = '<div class="dd-items" id="dd-items">';
    items.forEach(function (item) {
      html += '<div class="dd-item" draggable="true" data-id="' + escapeHtml(item.id || item.text || item) + '">' +
        (item.icon ? '<span class="dd-item-icon">' + item.icon + '</span>' : '') +
        '<span class="dd-item-text">' + (item.text || item) + '</span>' +
        '</div>';
    });
    html += '</div>';

    html += '<div class="dd-targets">';
    targets.forEach(function (target) {
      html += '<div class="dd-target" data-target="' + escapeHtml(target.id || target.text || target) + '">' +
        '<div class="dd-target-label">' + (target.label || target.text || target) + '</div>' +
        '<div class="dd-target-zone" data-target="' + escapeHtml(target.id || target.text || target) + '">' +
          '<span class="dd-target-placeholder">Drop here</span>' +
        '</div>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  // ── Matching ─────────────────────────────────────────────────
  function renderMatching(activity) {
    var pairs = activity.pairs || [];
    var leftItems = pairs.map(function (p) { return { id: p.id || p.left, text: p.left, icon: p.leftIcon || '' }; });
    var rightItems = shuffleArray(pairs.map(function (p) { return { id: p.id || p.left, text: p.right, icon: p.rightIcon || '' }; }));

    var html = '<div class="match-container">';
    html += '<div class="match-column match-left">';
    leftItems.forEach(function (item) {
      html += '<div class="match-item match-left-item" data-id="' + escapeHtml(item.id) + '">' +
        (item.icon ? '<span class="match-item-icon">' + item.icon + '</span>' : '') +
        '<span>' + item.text + '</span>' +
        '<span class="match-connector"></span>' +
        '</div>';
    });
    html += '</div>';

    html += '<div class="match-column match-right">';
    rightItems.forEach(function (item) {
      html += '<div class="match-item match-right-item" data-id="' + escapeHtml(item.id) + '">' +
        '<span class="match-connector"></span>' +
        (item.icon ? '<span class="match-item-icon">' + item.icon + '</span>' : '') +
        '<span>' + item.text + '</span>' +
        '</div>';
    });
    html += '</div>';
    html += '</div>';
    return html;
  }

  // ── Sequence (put in order) ──────────────────────────────────
  function renderSequence(activity) {
    var items = shuffleArray((activity.items || []).map(function (item, i) {
      return { text: item.text || item, correctIndex: i, icon: item.icon || '' };
    }));

    var html = '<div class="sequence-items" id="sequence-items">';
    items.forEach(function (item, i) {
      html += '<div class="sequence-item" draggable="true" data-correct="' + item.correctIndex + '">' +
        '<span class="sequence-handle">☰</span>' +
        (item.icon ? '<span class="sequence-icon">' + item.icon + '</span>' : '') +
        '<span class="sequence-text">' + item.text + '</span>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  // ── Counting ─────────────────────────────────────────────────
  function renderCounting(activity) {
    var items = activity.items || [activity];
    var html = '<div class="counting-items">';
    items.forEach(function (item, i) {
      var objects = '';
      var count = item.count || 5;
      for (var j = 0; j < count; j++) {
        objects += '<span class="counting-object">' + (item.icon || '⭐') + '</span>';
      }
      html += '<div class="counting-item" data-index="' + i + '">' +
        '<div class="counting-objects">' + objects + '</div>' +
        '<div class="counting-input-wrap">' +
          '<label>How many ' + (item.label || 'objects') + '?</label>' +
          '<input type="number" class="counting-input quiz-fill-input" data-index="' + i + '" data-answer="' + count + '" min="0" max="100">' +
        '</div>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  // ── Bind Events ──────────────────────────────────────────────
  function bindEvents(type, activity, onComplete) {
    var checkBtn = document.getElementById('check-activity-btn');

    switch (type) {
      case 'multiple-choice':
        bindMCEvents(activity, checkBtn, onComplete);
        break;
      case 'true-false':
        bindTFEvents(activity, checkBtn, onComplete);
        break;
      case 'fill-blank':
        bindFillEvents(activity, checkBtn, onComplete);
        break;
      case 'sorting':
        bindSortEvents(activity, checkBtn, onComplete);
        break;
      case 'drag-drop':
        bindDDEvents(activity, checkBtn, onComplete);
        break;
      case 'matching':
        bindMatchEvents(activity, checkBtn, onComplete);
        break;
      case 'sequence':
        bindSequenceEvents(activity, checkBtn, onComplete);
        break;
      case 'counting':
        bindCountingEvents(activity, checkBtn, onComplete);
        break;
      case 'word-search':
        bindWordSearchEvents(activity, checkBtn, onComplete);
        break;
      case 'missing-letter':
        bindMissingLetterEvents(activity, checkBtn, onComplete);
        break;
      case 'read-fluency':
        bindReadFluencyEvents(activity, checkBtn, onComplete);
        break;
      case 'tap-color':
        bindTapColorEvents(activity, checkBtn, onComplete);
        break;
      default:
        bindMCEvents(activity, checkBtn, onComplete);
    }
  }

  function bindMCEvents(activity, checkBtn, onComplete) {
    var selected = -1;
    var options = document.querySelectorAll('.mc-option');
    options.forEach(function (opt) {
      opt.addEventListener('click', function () {
        AudioService.click();
        options.forEach(function (o) { o.classList.remove('selected'); });
        opt.classList.add('selected');
        selected = parseInt(opt.dataset.index);
      });
    });

    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        if (selected < 0) return;
        var correct = activity.correct;
        var isCorrect = selected === correct;
        showActivityFeedback(isCorrect, activity.explanation);
        options.forEach(function (o) {
          o.classList.add('disabled');
          if (parseInt(o.dataset.index) === correct) o.classList.add('correct');
          if (parseInt(o.dataset.index) === selected && !isCorrect) o.classList.add('wrong');
        });
        checkBtn.classList.add('hidden');
        finishActivity(isCorrect, onComplete);
      });
    }
  }

  function bindTFEvents(activity, checkBtn, onComplete) {
    var selected = null;
    var options = document.querySelectorAll('.quiz-tf-option');
    options.forEach(function (opt) {
      opt.addEventListener('click', function () {
        AudioService.click();
        options.forEach(function (o) { o.classList.remove('selected'); });
        opt.classList.add('selected');
        selected = opt.dataset.value;
      });
    });

    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        if (selected === null) return;
        var correctVal = activity.correct === true || activity.correct === 'true' ? 'true' : 'false';
        var isCorrect = selected === correctVal;
        showActivityFeedback(isCorrect, activity.explanation);
        options.forEach(function (o) {
          o.classList.add('disabled');
          if (o.dataset.value === correctVal) o.classList.add('correct');
          if (o.dataset.value === selected && !isCorrect) o.classList.add('wrong');
        });
        checkBtn.classList.add('hidden');
        finishActivity(isCorrect, onComplete);
      });
    }
  }

  function bindFillEvents(activity, checkBtn, onComplete) {
    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var inputs = document.querySelectorAll('.fill-blank-input');
        var items = activity.items || [activity];
        var allCorrect = true;

        inputs.forEach(function (input, i) {
          var answer = (items[i] && items[i].answer) ? items[i].answer : (activity.answer || '');
          var userVal = input.value.trim().toLowerCase();
          var correctVal = answer.toString().toLowerCase();
          var isCorrect = userVal === correctVal;

          if (isCorrect) {
            input.classList.add('correct');
          } else {
            input.classList.add('wrong');
            allCorrect = false;
          }
          input.disabled = true;
        });

        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  function bindSortEvents(activity, checkBtn, onComplete) {
    enableDragAndDrop('.sort-item', '.sort-category-dropzone');

    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var categories = activity.categories || [];
        var allCorrect = true;

        categories.forEach(function (cat) {
          var catName = cat.name || cat;
          var zone = document.querySelector('.sort-category-dropzone[data-category="' + CSS.escape(catName) + '"]');
          if (!zone) return;

          var droppedItems = zone.querySelectorAll('.sort-item');
          var correctItems = (cat.items || []).map(function (i) { return (i.value || i.text || i).toString(); });

          droppedItems.forEach(function (item) {
            var val = item.dataset.value;
            if (correctItems.indexOf(val) !== -1) {
              item.classList.add('drop-correct');
            } else {
              item.classList.add('drop-wrong');
              allCorrect = false;
            }
          });

          if (droppedItems.length !== correctItems.length) allCorrect = false;
        });

        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  function bindDDEvents(activity, checkBtn, onComplete) {
    enableDragAndDrop('.dd-item', '.dd-target-zone');

    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var correctMap = {};
        (activity.items || []).forEach(function (item) {
          correctMap[item.id || item.text || item] = item.target;
        });

        var allCorrect = true;
        var zones = document.querySelectorAll('.dd-target-zone');
        zones.forEach(function (zone) {
          var targetId = zone.dataset.target;
          var droppedItems = zone.querySelectorAll('.dd-item');
          droppedItems.forEach(function (item) {
            var itemId = item.dataset.id;
            if (correctMap[itemId] === targetId) {
              item.classList.add('drop-correct');
            } else {
              item.classList.add('drop-wrong');
              allCorrect = false;
            }
          });
        });

        // Check items not dropped
        var remaining = document.querySelectorAll('#dd-items .dd-item');
        if (remaining.length > 0) allCorrect = false;

        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  function bindMatchEvents(activity, checkBtn, onComplete) {
    var selectedLeft = null;
    var selectedRight = null;
    var matches = {};
    var pairs = activity.pairs || [];

    document.querySelectorAll('.match-left-item').forEach(function (item) {
      item.addEventListener('click', function () {
        AudioService.click();
        document.querySelectorAll('.match-left-item').forEach(function (i) { i.classList.remove('selected'); });
        item.classList.add('selected');
        selectedLeft = item.dataset.id;

        if (selectedRight) {
          matches[selectedLeft] = selectedRight;
          item.classList.add('matched');
          document.querySelector('.match-right-item[data-id="' + CSS.escape(selectedRight) + '"]').classList.add('matched');
          selectedLeft = null;
          selectedRight = null;
        }
      });
    });

    document.querySelectorAll('.match-right-item').forEach(function (item) {
      item.addEventListener('click', function () {
        AudioService.click();
        document.querySelectorAll('.match-right-item').forEach(function (i) { i.classList.remove('selected'); });
        item.classList.add('selected');
        selectedRight = item.dataset.id;

        if (selectedLeft) {
          matches[selectedLeft] = selectedRight;
          item.classList.add('matched');
          document.querySelector('.match-left-item[data-id="' + CSS.escape(selectedLeft) + '"]').classList.add('matched');
          selectedLeft = null;
          selectedRight = null;
        }
      });
    });

    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var allCorrect = true;
        pairs.forEach(function (pair) {
          var pairId = pair.id || pair.left;
          var leftEl = document.querySelector('.match-left-item[data-id="' + CSS.escape(pairId) + '"]');
          var rightEl = document.querySelector('.match-right-item[data-id="' + CSS.escape(pairId) + '"]');

          if (matches[pairId] === pairId) {
            if (leftEl) leftEl.classList.add('correct');
            if (rightEl) rightEl.classList.add('correct');
          } else {
            if (leftEl) leftEl.classList.add('wrong');
            allCorrect = false;
          }
        });

        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  function bindSequenceEvents(activity, checkBtn, onComplete) {
    var container = document.getElementById('sequence-items');
    if (container) {
      enableReorderDrag(container);
    }

    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var items = document.querySelectorAll('.sequence-item');
        var allCorrect = true;

        items.forEach(function (item, i) {
          if (parseInt(item.dataset.correct) === i) {
            item.classList.add('drop-correct');
          } else {
            item.classList.add('drop-wrong');
            allCorrect = false;
          }
        });

        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  function bindCountingEvents(activity, checkBtn, onComplete) {
    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var inputs = document.querySelectorAll('.counting-input');
        var allCorrect = true;

        inputs.forEach(function (input) {
          var answer = parseInt(input.dataset.answer);
          var userVal = parseInt(input.value);
          if (userVal === answer) {
            input.classList.add('correct');
          } else {
            input.classList.add('wrong');
            allCorrect = false;
          }
          input.disabled = true;
        });

        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  // ── Shared Helpers ───────────────────────────────────────────

  function showActivityFeedback(isCorrect, explanation) {
    var fb = document.getElementById('activity-feedback');
    if (!fb) return;
    fb.classList.remove('hidden');
    fb.className = 'activity-feedback quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
    fb.innerHTML =
      '<span class="quiz-feedback-icon">' + (isCorrect ? '🎉' : '💡') + '</span>' +
      '<div>' +
        '<p class="quiz-feedback-text">' + (isCorrect ? 'Awesome! You got it right!' : 'Not quite! Here\'s a tip:') + '</p>' +
        (explanation ? '<p class="quiz-feedback-explanation">' + explanation + '</p>' : '') +
      '</div>';

    if (isCorrect) {
      AudioService.correct();
    } else {
      AudioService.wrong();
    }
  }

  function finishActivity(isCorrect, onComplete) {
    activityResult = { correct: isCorrect };

    var actions = document.getElementById('activity-actions');
    if (actions) {
      actions.innerHTML = '<button class="btn btn-primary btn-lg" id="activity-done-btn">' +
        (isCorrect ? '✅ Continue' : '➡️ Continue') + '</button>';

      var doneBtn = document.getElementById('activity-done-btn');
      if (doneBtn) {
        doneBtn.addEventListener('click', function () {
          if (onComplete) onComplete(isCorrect);
        });
      }
    }
  }

  function enableDragAndDrop(itemSelector, zoneSelector) {
    setTimeout(function () {
      var items = document.querySelectorAll(itemSelector);
      var zones = document.querySelectorAll(zoneSelector);

      items.forEach(function (item) {
        item.addEventListener('dragstart', function (e) {
          e.dataTransfer.setData('text/plain', item.outerHTML);
          e.dataTransfer.setData('text/id', item.dataset.id || item.dataset.value || '');
          item.classList.add('dragging');
          AudioService.pop();
        });

        item.addEventListener('dragend', function () {
          item.classList.remove('dragging');
        });
      });

      zones.forEach(function (zone) {
        zone.addEventListener('dragover', function (e) {
          e.preventDefault();
          zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', function () {
          zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', function (e) {
          e.preventDefault();
          zone.classList.remove('drag-over');
          var html = e.dataTransfer.getData('text/plain');
          var temp = document.createElement('div');
          temp.innerHTML = html;
          var newItem = temp.firstElementChild;
          if (newItem) {
            newItem.classList.remove('dragging');
            zone.appendChild(newItem);
            // Remove placeholder text
            var placeholder = zone.querySelector('.dd-target-placeholder, .sort-placeholder');
            if (placeholder) placeholder.remove();
            // Remove from original location
            var dragging = document.querySelector('.dragging');
            if (dragging) dragging.remove();
            AudioService.pop();

            // Re-enable drag on the newly placed item
            newItem.addEventListener('dragstart', function (ev) {
              ev.dataTransfer.setData('text/plain', newItem.outerHTML);
              newItem.classList.add('dragging');
            });
            newItem.addEventListener('dragend', function () {
              newItem.classList.remove('dragging');
            });
          }
        });
      });
    }, 100);
  }

  function enableReorderDrag(container) {
    var draggedItem = null;

    container.addEventListener('dragstart', function (e) {
      draggedItem = e.target.closest('.sequence-item');
      if (draggedItem) {
        draggedItem.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        AudioService.pop();
      }
    });

    container.addEventListener('dragend', function () {
      if (draggedItem) {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
      }
    });

    container.addEventListener('dragover', function (e) {
      e.preventDefault();
      var afterElement = getDragAfterElement(container, e.clientY);
      if (draggedItem) {
        if (afterElement) {
          container.insertBefore(draggedItem, afterElement);
        } else {
          container.appendChild(draggedItem);
        }
      }
    });
  }

  function getDragAfterElement(container, y) {
    var elements = Array.from(container.querySelectorAll('.sequence-item:not(.dragging)'));
    var closest = null;
    var closestOffset = Number.NEGATIVE_INFINITY;

    elements.forEach(function (child) {
      var box = child.getBoundingClientRect();
      var offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closest = child;
      }
    });

    return closest;
  }

  function shuffleArray(arr) {
    var shuffled = arr.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── Word Search Rendering and Events ──────────────────────────
  function renderWordSearch(activity) {
    var grid = activity.grid || [];
    var words = activity.words || [];
    var cols = grid[0] ? grid[0].length : 0;
    
    var html = '<div class="word-search-container">';
    html += '<div class="word-search-grid" style="grid-template-columns: repeat(' + cols + ', 40px);">';
    
    for (var r = 0; r < grid.length; r++) {
      for (var c = 0; c < grid[r].length; c++) {
        html += '<div class="word-search-cell" data-row="' + r + '" data-col="' + c + '">' + grid[r][c] + '</div>';
      }
    }
    
    html += '</div>';
    
    // List of words to find
    html += '<div class="word-search-words">';
    words.forEach(function(word) {
      var wordText = typeof word === 'object' ? word.word : word;
      html += '<span class="word-search-word" data-word="' + wordText.toUpperCase() + '">' + wordText + ' <button class="btn-icon speak-btn" data-text="' + wordText.replace(/"/g, '&quot;') + '" title="Read Aloud" style="padding:0;font-size:12px;background:none;border:none;margin-left:4px;cursor:pointer">🔊</button></span>';
    });
    html += '</div>';
    html += '</div>';
    return html;
  }

  function bindWordSearchEvents(activity, checkBtn, onComplete) {
    var cells = document.querySelectorAll('.word-search-cell');
    cells.forEach(function (cell) {
      cell.addEventListener('click', function () {
        AudioService.click();
        cell.classList.toggle('selected');
      });
    });
    
    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var selectedCells = document.querySelectorAll('.word-search-cell.selected');
        var allCorrect = true;
        
        var solutions = activity.solutions || [];
        var solutionKeys = {};
        solutions.forEach(function(s) {
          solutionKeys[s[0] + ',' + s[1]] = true;
        });
        
        var userKeys = {};
        selectedCells.forEach(function(cell) {
          userKeys[cell.dataset.row + ',' + cell.dataset.col] = true;
        });
        
        cells.forEach(function(cell) {
          var key = cell.dataset.row + ',' + cell.dataset.col;
          var isSol = solutionKeys[key];
          var isUser = userKeys[key];
          
          if (isSol) {
            if (isUser) {
              cell.classList.add('correct');
            } else {
              cell.classList.add('wrong');
              allCorrect = false;
            }
          } else {
            if (isUser) {
              cell.classList.add('wrong');
              allCorrect = false;
            }
          }
          cell.classList.remove('selected');
        });
        
        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  // ── Missing Letter Rendering and Events ───────────────────────
  function renderMissingLetter(activity) {
    var cards = activity.cards || [];
    var html = '<div class="missing-letter-container">';
    
    cards.forEach(function (card, i) {
      html += '<div class="missing-letter-card" data-index="' + i + '">';
      if (card.icon) {
        html += '<span class="missing-letter-icon">' + card.icon + '</span>';
      }
      html += '<div class="missing-letter-word-wrap">';
      var textToShow = card.text || card.word;
      var speakWord = card.word || textToShow.replace(/_/g, '');
      html += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:var(--space-xs)">' +
        '<div class="missing-letter-word" style="margin-bottom:0">' + textToShow + '</div>' +
        '<button class="btn-icon speak-btn" data-text="' + speakWord.replace(/"/g, '&quot;') + '" title="Read Aloud" style="padding:4px">🔊</button>' +
        '</div>';
      
      html += '<div class="missing-letter-options">';
      (card.options || []).forEach(function (opt) {
        html += '<button class="missing-letter-option" data-option="' + opt + '">' + opt + '</button>';
      });
      html += '</div>';
      
      html += '</div>';
      html += '</div>';
    });
    
    html += '</div>';
    return html;
  }

  function bindMissingLetterEvents(activity, checkBtn, onComplete) {
    var cards = activity.cards || [];
    var userSelections = {};
    
    document.querySelectorAll('.missing-letter-card').forEach(function (cardEl) {
      var cardIndex = parseInt(cardEl.dataset.index);
      var options = cardEl.querySelectorAll('.missing-letter-option');
      
      options.forEach(function (optBtn) {
        optBtn.addEventListener('click', function () {
          AudioService.click();
          options.forEach(function (btn) { btn.classList.remove('selected'); });
          optBtn.classList.add('selected');
          userSelections[cardIndex] = optBtn.dataset.option;
        });
      });
    });
    
    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        if (Object.keys(userSelections).length < cards.length) {
          alert('Please select a missing letter for all cards first!');
          return;
        }
        
        var allCorrect = true;
        cards.forEach(function (card, i) {
          var userAns = userSelections[i];
          var correctAns = card.missing;
          var cardEl = document.querySelector('.missing-letter-card[data-index="' + i + '"]');
          
          if (userAns === correctAns) {
            if (cardEl) cardEl.classList.add('drop-correct');
          } else {
            if (cardEl) cardEl.classList.add('drop-wrong');
            allCorrect = false;
          }
        });
        
        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
  }

  // ── Read Fluency Rendering and Events ─────────────────────────
  function renderReadFluency(activity) {
    var html = '<div class="read-fluency-container">';
    html += '<div style="display:flex;align-items:start;gap:12px;margin-bottom:var(--space-md)">' +
      '<div class="read-fluency-passage" style="flex-grow:1;text-align:left">' + (activity.passage || '') + '</div>' +
      '<button class="btn-icon speak-btn" data-text="' + (activity.passage || '').replace(/"/g, '&quot;') + '" title="Read Aloud" style="margin-top:4px;flex-shrink:0">🔊</button>' +
      '</div>';
    html += '<p style="margin-top: 15px; font-weight: bold;">Tap a star for each time you read the story out loud!</p>';
    html += '<div class="read-fluency-stars">';
    for (var i = 0; i < 3; i++) {
      html += '<span class="read-fluency-star" data-index="' + i + '">⭐</span>';
    }
    html += '</div>';
    html += '</div>';
    return html;
  }

  function bindReadFluencyEvents(activity, checkBtn, onComplete) {
    var stars = document.querySelectorAll('.read-fluency-star');
    var starsRead = 0;
    
    stars.forEach(function (star, idx) {
      star.addEventListener('click', function () {
        AudioService.correct();
        starsRead = idx + 1;
        stars.forEach(function (s, sIdx) {
          if (sIdx <= idx) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
      });
    });
    
    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        if (starsRead < 3) {
          alert('Read the passage 3 times and tap all 3 stars!');
          return;
        }
        showActivityFeedback(true, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(true, onComplete);
      });
    }
  }

  // ── Tap Color Rendering and Events ────────────────────────────
  function renderTapColor(activity) {
    var categories = activity.categories || [];
    var items = activity.items || [];
    
    var html = '<div class="tap-color-container">';
    
    html += '<div class="tap-color-palette">';
    categories.forEach(function (cat, i) {
      var colorClass = cat.class || ('color-' + cat.color);
      html += '<div class="tap-color-palette-item ' + colorClass + '" data-category="' + cat.name + '" data-class="' + colorClass + '" data-index="' + i + '">';
      html += '🎨 ' + cat.name;
      html += '</div>';
    });
    html += '</div>';
    
    html += '<div class="tap-color-items-grid">';
    items.forEach(function (item, i) {
      html += '<div class="tap-color-item" data-index="' + i + '" data-correct-category="' + item.category + '">' + item.text + '</div>';
    });
    html += '</div>';
    
    html += '</div>';
    return html;
  }

  function bindTapColorEvents(activity, checkBtn, onComplete) {
    var activeCategory = null;
    var activeClass = null;
    var userColoring = {};
    
    var paletteItems = document.querySelectorAll('.tap-color-palette-item');
    var colorItems = document.querySelectorAll('.tap-color-item');
    
    paletteItems.forEach(function (palette) {
      palette.addEventListener('click', function () {
        AudioService.click();
        paletteItems.forEach(function (p) { p.classList.remove('active'); });
        palette.classList.add('active');
        activeCategory = palette.dataset.category;
        activeClass = palette.dataset.class;
      });
    });
    
    colorItems.forEach(function (itemEl) {
      itemEl.addEventListener('click', function () {
        if (!activeCategory) {
          alert('Please select a color category from the palette first! 🎨');
          return;
        }
        AudioService.pop();
        paletteItems.forEach(function (p) {
          itemEl.classList.remove(p.dataset.class);
        });
        itemEl.classList.add(activeClass);
        userColoring[itemEl.dataset.index] = activeCategory;
      });
    });
    
    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        var items = activity.items || [];
        var allCorrect = true;
        
        colorItems.forEach(function (itemEl) {
          var idx = parseInt(itemEl.dataset.index);
          var userAns = userColoring[idx];
          var correctAns = itemEl.dataset.correctCategory;
          
          if (userAns === correctAns) {
            itemEl.classList.add('correct');
          } else {
            itemEl.classList.add('wrong');
            allCorrect = false;
          }
        });
        
        showActivityFeedback(allCorrect, activity.explanation);
        checkBtn.classList.add('hidden');
        finishActivity(allCorrect, onComplete);
      });
    }
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

  return {
    render: render,
    getResult: function () { return activityResult; }
  };
})();
