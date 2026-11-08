import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-[#050409]/90 backdrop-blur-xl z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800/60">
          {/* Identity */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <svg className="w-3.5 h-3.5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 82 L16 18 L50 56 L84 18 L84 82" />
                </svg>
              </div>
              <span className="font-display font-black text-lg text-gold-gradient tracking-wide">
                MITHUN
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">&bull;</span>
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                AI & DATA SCIENCE
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Crafted as an immersive 3D WebGL experience inspired by celestial aesthetics and high-performance neural computing.
            </p>
          </div>

          {/* Telemetry Clock */}
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-3 font-semibold">
              Mission Telemetry
            </span>
            <div className="font-mono text-xs text-zinc-800 dark:text-zinc-300 bg-white dark:bg-zinc-950/80 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800/80 min-w-[200px] shadow-sm dark:shadow-none">
              <div className="text-[10px] text-zinc-500">SYSTEM TIME:</div>
              <div className="text-amber-700 dark:text-amber-300 font-semibold">{time || 'SYNCHRONIZING...'}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="text-xs font-mono text-zinc-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} M Mithun. All Rights Reserved. Engineered with React, Three.js & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-300 hover:border-amber-500/40 shadow-sm dark:shadow-none transition-all duration-300"
          >
            <span>Ascend to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
