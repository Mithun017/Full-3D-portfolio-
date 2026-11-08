import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, GitBranch, Cpu, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
    <footer className="relative border-t border-zinc-800/80 bg-[#050409]/90 backdrop-blur-xl z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800/60">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-lg text-gold-gradient">
                ◈ MITHUN
              </span>
              <span className="text-zinc-600">&bull;</span>
              <span className="font-mono text-xs text-zinc-400">
                AI & DATA SCIENCE
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md font-light leading-relaxed">
              Crafted as an immersive 3D WebGL experience inspired by celestial aesthetics and high-performance neural computing.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>COIMBATORE, TN, INDIA // 11.0168° N, 76.9558° E</span>
            </div>
          </div>

          {/* Repository & GitHub */}
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-3">
              Source Repository
            </span>
            <a
              href={portfolioData.profile.contact.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-amber-300 transition-colors p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/30"
            >
              <GitBranch className="w-4 h-4 text-amber-400" />
              <span>Full-3D-portfolio-</span>
            </a>
          </div>

          {/* Telemetry Clock */}
          <div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-3">
              Mission Telemetry
            </span>
            <div className="font-mono text-xs text-zinc-300 bg-zinc-950/80 p-3 rounded-lg border border-zinc-800/80">
              <div className="text-[10px] text-zinc-500">SYSTEM TIME:</div>
              <div className="text-amber-300 font-semibold">{time || 'SYNCHRONIZING...'}</div>
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
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-amber-300 hover:border-amber-500/40 transition-all duration-300"
          >
            <span>Ascend to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
