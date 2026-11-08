import React, { useState } from 'react';
import { Award, Compass, Sparkles, BookOpen, UserCheck, ShieldCheck, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { profile } = portfolioData;
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">01 // IDENTITY</span>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading and Editorial Narrative */}
        <div className="lg:col-span-7">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-6 uppercase tracking-tight">
            Engineering Systems <br />
            <span className="text-gold-gradient">Of High Intelligence</span>
          </h2>

          <div className="prose prose-invert max-w-none text-zinc-300 space-y-5 text-sm sm:text-base leading-relaxed font-light">
            <p>
              {profile.bio}
            </p>
            <p className="border-l-2 border-amber-500/60 pl-4 italic text-zinc-400 bg-amber-500/5 py-2 rounded-r">
              "{profile.mission}"
            </p>
            <p>
              {profile.experienceHighlights}
            </p>
          </div>

          {/* Core Interests Grid */}
          <div className="mt-8">
            <h3 className="font-mono text-xs text-amber-400/90 tracking-widest uppercase mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Core Exploration Vectors</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {profile.coreInterests.map((interest, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300 hover:border-amber-500/30 hover:text-amber-200 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80"></span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Leadership & Honors Card Deck */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 shadow-xl shadow-black/50">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="font-display font-bold text-sm tracking-wide text-zinc-100">
                  Leadership & Recognition
                </span>
              </div>
              <span className="font-mono text-[10px] text-amber-400/80 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                VERIFIED
              </span>
            </div>

            <div className="space-y-4">
              {profile.leadership.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs text-amber-300">
                      {item.title}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">
                      {item.organization}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Solare Dynamic Type Tester / Interactive Accent */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                  Solare Dynamic Weight
                </span>
                <span className="font-mono text-[10px] text-amber-400">
                  VARIABLE CUT // 900
                </span>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent border border-zinc-800 text-center">
                <div className="font-display font-black text-2xl tracking-widest text-zinc-200">
                  M I T H U N
                </div>
                <div className="text-[10px] font-mono text-zinc-500 mt-1">
                  SRI ESHWAR COLLEGE OF ENGINEERING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
