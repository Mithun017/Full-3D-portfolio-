import React from 'react';
import { ArrowDown, Terminal, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const { profile } = portfolioData;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 z-10">
      {/* Decorative Celestial Label */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(245,158,11,0.15)] animate-pulse-slow">
        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
        <span>CELESTIAL SYSTEM ONLINE // AI & DATA SCIENCE</span>
      </div>

      {/* Main Title / Editorial Display */}
      <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tight text-white mb-6 uppercase select-none">
        <span className="text-gold-gradient block drop-shadow-[0_10px_35px_rgba(245,158,11,0.25)]">
          {profile.name}
        </span>
      </h1>

      {/* Role & Academic Affiliation */}
      <p className="font-editorial text-lg sm:text-2xl lg:text-3xl font-medium tracking-wide text-zinc-300 max-w-3xl mb-4">
        {profile.role}
      </p>

      <p className="font-mono text-xs sm:text-sm text-amber-400/90 tracking-widest uppercase mb-8">
        {profile.institution} &bull; {profile.location}
      </p>

      {/* Concise Bio / Impact Statement */}
      <p className="max-w-2xl text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-10">
        Specializing in <span className="text-zinc-200 font-medium">Generative AI, LLMs & Agentic Systems</span>, 
        multimodal neural architectures, and scalable cloud ML pipelines with hands-on production experience.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a
          href="#projects"
          className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-zinc-950 group-hover:rotate-12 transition-transform" />
          <span>Explore Works</span>
        </a>

        <button
          onClick={onOpenTerminal}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-zinc-900/80 border border-purple-500/40 text-purple-200 hover:bg-purple-950/60 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:scale-105 transition-all duration-300"
        >
          <Terminal className="w-4 h-4 text-purple-400" />
          <span>Launch CLI</span>
        </button>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300"
        >
          <span>Initiate Contact</span>
        </a>
      </div>

      {/* Telemetry Stats Banner */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {profile.stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-4 rounded-xl border border-amber-500/10 text-center"
          >
            <div className="font-display font-black text-2xl sm:text-3xl text-gold-gradient mb-1">
              {stat.value}
            </div>
            <div className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Down Hint */}
      <a
        href="#about"
        className="mt-14 inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors"
        aria-label="Scroll Down"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">System Discovery</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-amber-500/80" />
      </a>
    </section>
  );
}

