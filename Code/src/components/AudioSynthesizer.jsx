import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Procedural Celestial Soundscape using Web Audio API
 * Generates an ethereal, warm ambient pad with gentle cosmic chimes.
 */
export default function AudioSynthesizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);
  const chimeIntervalRef = useRef(null);

  const startAudio = async () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioContext();
      audioCtxRef.current = ctx;

      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      // Master Gain for pleasant, clearly audible volume
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.4);

      // Warm low-pass filter for a smooth cinematic sheen
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1100, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Lush celestial chord (A major 9 / Cosmic harmony: A3, E4, A4, B4, C#5)
      const chord = [
        { freq: 220.00, type: 'sine', detune: 0, gain: 0.22 },
        { freq: 220.00, type: 'triangle', detune: 4, gain: 0.15 },
        { freq: 329.63, type: 'sine', detune: -3, gain: 0.18 },
        { freq: 440.00, type: 'sine', detune: 5, gain: 0.15 },
        { freq: 493.88, type: 'triangle', detune: -2, gain: 0.12 },
        { freq: 554.37, type: 'sine', detune: 3, gain: 0.14 },
      ];

      const activeOscs = [];

      chord.forEach(({ freq, type, detune, gain }) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.detune.setValueAtTime(detune, ctx.currentTime);

        // Slow LFO for organic breath
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.15, ctx.currentTime);
        lfoGain.gain.setValueAtTime(gain * 0.25, ctx.currentTime);
        lfo.connect(oscGain.gain);
        lfo.start();

        oscGain.gain.setValueAtTime(gain, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        activeOscs.push({ osc, lfo });
      });

      // Procedural soft celestial bell chime trigger every 4.5 seconds
      const chimePentatonic = [554.37, 659.25, 880.00, 987.77, 1108.73];
      const playChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        try {
          const chimeCtx = audioCtxRef.current;
          const chimeOsc = chimeCtx.createOscillator();
          const chimeGain = chimeCtx.createGain();
          const note = chimePentatonic[Math.floor(Math.random() * chimePentatonic.length)];

          chimeOsc.type = 'sine';
          chimeOsc.frequency.setValueAtTime(note, chimeCtx.currentTime);

          chimeGain.gain.setValueAtTime(0.0001, chimeCtx.currentTime);
          chimeGain.gain.linearRampToValueAtTime(0.12, chimeCtx.currentTime + 0.05);
          chimeGain.gain.exponentialRampToValueAtTime(0.00001, chimeCtx.currentTime + 2.8);

          chimeOsc.connect(chimeGain);
          chimeGain.connect(masterGain);

          chimeOsc.start();
          chimeOsc.stop(chimeCtx.currentTime + 3.0);
        } catch (e) {
          // ignore
        }
      };

      // Play initial chime immediately so the user gets instant audio confirmation!
      playChime();
      chimeIntervalRef.current = setInterval(playChime, 4200);

      nodesRef.current = { masterGain, activeOscs };
      setIsPlaying(true);
    } catch (err) {
      console.error('Audio initialization error:', err);
    }
  };

  const stopAudio = () => {
    if (chimeIntervalRef.current) {
      clearInterval(chimeIntervalRef.current);
      chimeIntervalRef.current = null;
    }

    if (audioCtxRef.current && nodesRef.current.masterGain) {
      try {
        const { masterGain, activeOscs } = nodesRef.current;
        const ctx = audioCtxRef.current;
        masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

        setTimeout(() => {
          activeOscs.forEach(({ osc, lfo }) => {
            try {
              osc.stop();
              lfo.stop();
            } catch (e) {}
          });
          ctx.suspend();
        }, 550);
      } catch (err) {
        // ignore
      }
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      if (chimeIntervalRef.current) clearInterval(chimeIntervalRef.current);
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
        isPlaying
          ? 'bg-amber-500/15 border-amber-500/60 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
      }`}
      title={isPlaying ? 'Mute Celestial Soundscape' : 'Enable Celestial Ambient Soundscape'}
      aria-label="Toggle Sound"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="hidden sm:inline">SOLARE AUDIO // ON</span>
          <span className="flex gap-0.5 items-center">
            <span className="w-0.5 h-2 bg-amber-400 animate-[pulse_1s_infinite_100ms]"></span>
            <span className="w-0.5 h-3 bg-amber-400 animate-[pulse_1s_infinite_300ms]"></span>
            <span className="w-0.5 h-1.5 bg-amber-400 animate-[pulse_1s_infinite_500ms]"></span>
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
          <span className="hidden sm:inline">AUDIO // OFF</span>
        </>
      )}
    </button>
  );
}
