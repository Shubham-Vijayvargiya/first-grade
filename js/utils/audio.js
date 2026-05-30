/* ============================================================
   CHAMPION ACADEMY — Audio Service
   Generates simple sounds using Web Audio API
   ============================================================ */

window.AudioService = (function () {
  let audioCtx = null;
  let enabled = true;

  function getContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  function resumeContext() {
    const ctx = getContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
  }

  function playTone(frequency, duration, type, volume) {
    if (!enabled) return;
    try {
      resumeContext();
      const ctx = getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(volume || 0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Silently fail if audio context is not available
    }
  }

  function playNotes(notes) {
    if (!enabled) return;
    try {
      resumeContext();
      const ctx = getContext();
      let time = ctx.currentTime;
      notes.forEach(function (note) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = note.type || 'sine';
        osc.frequency.setValueAtTime(note.freq, time);
        gain.gain.setValueAtTime(note.vol || 0.12, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + note.dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(time);
        osc.stop(time + note.dur);
        time += note.delay || note.dur * 0.8;
      });
    } catch (e) {
      // Silently fail
    }
  }

  return {
    isEnabled: function () { return enabled; },

    toggle: function () {
      enabled = !enabled;
      return enabled;
    },

    setEnabled: function (val) {
      enabled = !!val;
    },

    // Click / tap sound
    click: function () {
      playTone(800, 0.08, 'sine', 0.08);
    },

    // Correct answer
    correct: function () {
      playNotes([
        { freq: 523, dur: 0.1, type: 'sine', vol: 0.12 },
        { freq: 659, dur: 0.1, type: 'sine', vol: 0.12, delay: 0.08 },
        { freq: 784, dur: 0.2, type: 'sine', vol: 0.15, delay: 0.08 }
      ]);
    },

    // Wrong answer
    wrong: function () {
      playNotes([
        { freq: 300, dur: 0.15, type: 'square', vol: 0.08 },
        { freq: 250, dur: 0.25, type: 'square', vol: 0.06, delay: 0.12 }
      ]);
    },

    // Level up / badge unlock
    levelUp: function () {
      playNotes([
        { freq: 523, dur: 0.1, type: 'sine', vol: 0.1 },
        { freq: 587, dur: 0.1, type: 'sine', vol: 0.1, delay: 0.08 },
        { freq: 659, dur: 0.1, type: 'sine', vol: 0.1, delay: 0.08 },
        { freq: 784, dur: 0.12, type: 'sine', vol: 0.12, delay: 0.08 },
        { freq: 880, dur: 0.12, type: 'sine', vol: 0.12, delay: 0.1 },
        { freq: 1047, dur: 0.3, type: 'sine', vol: 0.15, delay: 0.1 }
      ]);
    },

    // Star earned
    star: function () {
      playNotes([
        { freq: 880, dur: 0.08, type: 'sine', vol: 0.1 },
        { freq: 1100, dur: 0.15, type: 'sine', vol: 0.12, delay: 0.06 }
      ]);
    },

    // Button press
    press: function () {
      playTone(600, 0.06, 'square', 0.05);
    },

    // Achievement / trophy
    achievement: function () {
      playNotes([
        { freq: 659, dur: 0.12, type: 'sine', vol: 0.1 },
        { freq: 784, dur: 0.12, type: 'sine', vol: 0.1, delay: 0.1 },
        { freq: 988, dur: 0.12, type: 'sine', vol: 0.12, delay: 0.1 },
        { freq: 1175, dur: 0.12, type: 'sine', vol: 0.12, delay: 0.1 },
        { freq: 1319, dur: 0.35, type: 'sine', vol: 0.15, delay: 0.1 }
      ]);
    },

    // Whoosh (page transition)
    whoosh: function () {
      if (!enabled) return;
      try {
        resumeContext();
        const ctx = getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.2);
      } catch (e) {}
    },

    // Pop (for drag and drop)
    pop: function () {
      playTone(1200, 0.05, 'sine', 0.08);
    },

    // Ensure context is ready (call on first user interaction)
    init: function () {
      resumeContext();
    }
  };
})();
