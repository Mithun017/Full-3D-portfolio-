import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Procedural Celestial Soundscape using Web Audio API
 * Generates an ambient, warm cosmic harmonic tone with safe gain staging.
 */
export default function AudioSynthesizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 3);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        masterGain.connect(filter);
        filter.connect(ctx.destination);

        // Frequencies for a calm cosmic chord (F# minor / celestial harmony)
        const freqs = [92.5, 138.59, 185.0, 277.18, 370.0];
        const oscs = freqs.map((f, i) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          osc.type = i % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          // Subtle LFO modulation for breathing texture
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.1 + i * 0.05, ctx.currentTime);
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(osc.frequency);
          lfo.start();

          oscGain.gain.setValueAtTime(0.18 / freqs.length, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start();

          return { osc, lfo };
        });

        nodesRef.current = { ctx, masterGain, oscs };
        setIsPlaying(true);
      } catch (err) {
        console.warn('Audio context initialization prevented:', err);
      }
    } else {
      if (audioCtxRef.current) {
        try {
          const { masterGain, ctx, oscs } = nodesRef.current;
          masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
          masterGain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 1.2);
          setTimeout(() => {
            oscs.forEach((o) => {
              o.osc.stop();
              o.lfo.stop();
            });
            ctx.close();
            audioCtxRef.current = null;
          }, 1300);
        } catch (e) {
          audioCtxRef.current = null;
        }
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
        isPlaying
          ? 'bg-amber-500/10 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
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

