/* ============================================================
   CHAMPION ACADEMY — Progress Bar Component
   SVG ring and linear progress bars
   ============================================================ */

window.ProgressBar = (function () {

  // Create an SVG ring progress indicator
  function createRing(size, percentage, strokeWidth, colorClass) {
    var radius = (size / 2) - strokeWidth;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference - (percentage / 100) * circumference;

    var gradientId = 'pg-' + Math.random().toString(36).substr(2, 6);

    var colors = {
      ela: { start: '#FF5252', end: '#FF8A80' },
      math: { start: '#448AFF', end: '#82B1FF' },
      science: { start: '#00E676', end: '#69F0AE' },
      social: { start: '#FFD740', end: '#FFE57F' },
      art: { start: '#E040FB', end: '#EA80FC' },
      primary: { start: '#00E676', end: '#00B0FF' },
      gold: { start: '#FFD740', end: '#FF6D00' }
    };

    var c = colors[colorClass] || colors.primary;

    var svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
      '<defs><linearGradient id="' + gradientId + '" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="' + c.start + '"/>' +
      '<stop offset="100%" stop-color="' + c.end + '"/>' +
      '</linearGradient></defs>' +
      '<circle cx="' + (size/2) + '" cy="' + (size/2) + '" r="' + radius + '" ' +
        'fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="' + strokeWidth + '"/>' +
      '<circle cx="' + (size/2) + '" cy="' + (size/2) + '" r="' + radius + '" ' +
        'fill="none" stroke="url(#' + gradientId + ')" stroke-width="' + strokeWidth + '" ' +
        'stroke-linecap="round" ' +
        'stroke-dasharray="' + circumference + '" ' +
        'stroke-dashoffset="' + offset + '" ' +
        'transform="rotate(-90 ' + (size/2) + ' ' + (size/2) + ')" ' +
        'style="transition: stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1)"/>' +
      '</svg>';

    return svg;
  }

  // Create a small ring for module cards (with percentage text in center)
  function createSmallRing(percentage, subject) {
    var size = 52;
    var sw = 4;
    var html = '<div class="zone-progress-ring" style="position:relative;width:' + size + 'px;height:' + size + 'px;">' +
      createRing(size, percentage, sw, subject || 'primary') +
      '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">' +
        '<span style="font-family:var(--font-heading);font-size:0.75rem;letter-spacing:0.03em;">' + percentage + '%</span>' +
      '</div>' +
      '</div>';
    return html;
  }

  // Create a large ring for the progress dashboard
  function createLargeRing(percentage) {
    var size = 220;
    var sw = 8;
    var html = '<div class="progress-ring-large">' +
      createRing(size, percentage, sw, 'primary') +
      '<div class="progress-ring-center">' +
        '<span class="progress-ring-value">' + percentage + '%</span>' +
        '<span class="progress-ring-label">Complete</span>' +
      '</div>' +
      '</div>';
    return html;
  }

  // Create a linear progress bar
  function createLinear(percentage, colorClass, height) {
    height = height || 6;
    var bgColor = 'rgba(255,255,255,0.08)';
    var fillColors = {
      ela: 'linear-gradient(90deg, var(--color-ela-dark), var(--color-ela))',
      math: 'linear-gradient(90deg, var(--color-math-dark), var(--color-math))',
      science: 'linear-gradient(90deg, var(--color-science-dark), var(--color-science))',
      social: 'linear-gradient(90deg, var(--color-social-dark), var(--color-social))',
      art: 'linear-gradient(90deg, var(--color-art-dark), var(--color-art))',
      primary: 'linear-gradient(90deg, var(--color-primary-dark), var(--color-primary))',
      gold: 'linear-gradient(90deg, #FFC400, #FFD740)'
    };

    var fill = fillColors[colorClass] || fillColors.primary;

    var html = '<div style="width:100%;height:' + height + 'px;background:' + bgColor + ';border-radius:' + (height/2) + 'px;overflow:hidden;">' +
      '<div style="width:' + percentage + '%;height:100%;background:' + fill + ';border-radius:' + (height/2) + 'px;transition:width 0.8s cubic-bezier(0.22, 1, 0.36, 1);"></div>' +
      '</div>';
    return html;
  }

  return {
    createRing: createRing,
    createSmallRing: createSmallRing,
    createLargeRing: createLargeRing,
    createLinear: createLinear
  };
})();
