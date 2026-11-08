import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Terminal, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const { experiences } = portfolioData;
  const [selectedExp, setSelectedExp] = useState(experiences[0].id);

  const active = experiences.find((e) => e.id === selectedExp) || experiences[0];

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">02 // TRAJECTORY</span>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Production <span className="text-gold-gradient">Experience</span>
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-2 uppercase tracking-wider">
            Industrial engineering internships & technical consulting
          </p>
        </div>
      </div>

      {/* Interactive Dual-Column Experience Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Tabs (Left) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {experiences.map((exp) => {
            const isSelected = exp.id === selectedExp;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-zinc-900/90 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] translate-x-2'
                    : 'bg-zinc-950/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600"></div>
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {exp.badge}
                  </span>
                  <span className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-zinc-100 group-hover:text-amber-300">
                  {exp.company}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                  {exp.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Experience View (Right) */}
        <div className="lg:col-span-8">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/20 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
              <div>
                <span className="font-mono text-xs text-amber-400/90 tracking-widest uppercase">
                  ROLE BREAKDOWN
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-100 mt-1">
                  {active.role}
                </h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="font-semibold text-sm text-amber-300">
                    @{active.company}
                  </span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="font-mono text-xs text-zinc-400">
                    {active.period}
                  </span>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 self-start sm:self-center">
                Focus: <span className="text-amber-300">{active.focus}</span>
              </div>
            </div>

            {/* Narrative Description */}
            <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
              {active.description}
            </p>

            {/* Key Deliverables & Achievements */}
            <h4 className="font-mono text-xs text-amber-400 tracking-wider uppercase mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Key Technical Deliverables</span>
            </h4>
            <div className="space-y-3 mb-8">
              {active.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Technologies Applied */}
            <div className="pt-6 border-t border-zinc-800/80">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-3">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-2">
                {active.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-950/80 border border-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

