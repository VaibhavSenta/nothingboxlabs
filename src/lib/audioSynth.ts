// Web Audio API ambient synthesizer for browser-native audio playback
class AmbientSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: NodeJS.Timeout | null = null;
  private masterGain: GainNode | null = null;
  private currentVolume: number = 0.7;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
    }
  }

  public play() {
    this.initContext();
    if (this.isPlaying || !this.ctx || !this.masterGain) return;
    this.isPlaying = true;

    // Chord sequence: Cmaj7, Am7, Fmaj7, G7
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // C, E, G, B
      [220.00, 261.63, 329.63, 392.00], // A, C, E, G
      [174.61, 220.00, 261.63, 329.63], // F, A, C, E
      [196.00, 246.94, 293.66, 349.23], // G, B, D, F
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      currentChord.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        osc.type = i === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Gentle attack and release envelope
        const now = this.ctx.currentTime;
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.06 / (i + 1), now + 0.4);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

        osc.connect(noteGain);
        noteGain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 3.0);
      });
    };

    playChord();
    this.timer = setInterval(playChord, 3000);
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  public stop() {
    this.pause();
  }

  public isAudioPlaying() {
    return this.isPlaying;
  }
}

export const ambientSynth = new AmbientSynthesizer();
