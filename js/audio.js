/* ==========================================================================
   TENSORARCADE 8-BIT AUDIO SYNTHESIZER
   Uses native Web Audio API — 0 external audio dependencies!
   ========================================================================== */

class ArcadeAudio {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('tensorarcade_muted') === 'true';
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('tensorarcade_muted', this.isMuted);
    return this.isMuted;
  }

  playTone(freq, type = 'square', duration = 0.08, gainVal = 0.1) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play prevented:', e);
    }
  }

  playClick() {
    this.playTone(600, 'square', 0.04, 0.06);
  }

  playCheck() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Mario coin style chime (B5 -> E6)
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(987.77, now); // B5
    osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  playLevelUp() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // 4-note victory arpeggio: C5 -> E5 -> G5 -> C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.15, 0.12);
      }, idx * 100);
    });
  }

  playModalOpen() {
    this.playTone(440, 'sine', 0.1, 0.08);
  }
}

// Global audio singleton
window.arcadeAudio = new ArcadeAudio();
