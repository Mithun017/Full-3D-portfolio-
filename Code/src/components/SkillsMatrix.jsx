import React, { useState } from 'react';
import { Brain, Code2, Boxes, Cloud, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillIcons = {
  Brain,
  Code2,
  Boxes,
  Cloud,
  Cpu
};

export default function SkillsMatrix() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [activeCategoryKey, setActiveCategoryKey] = useState(categories[0]);

  const activeCategory = skills[activeCategoryKey];
  const IconComponent = skillIcons[activeCategory.icon] || Sparkles;

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs text-amber-700 dark:text-amber-400 tracking-widest uppercase">04 // PROFICIENCY</span>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/40 dark:from-amber-500/30 to-transparent"></div>
      </div>

      <div className="mb-12">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-zinc-900 dark:text-white uppercase tracking-tight">
          Technical <span className="text-gold-gradient">Matrix</span>
        </h2>
        <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-2 uppercase tracking-wider">
          System capabilities, deep neural frameworks, and engineering competencies
        </p>
      </div>

      {/* Category Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {categories.map((key) => {
          const item = skills[key];
          const Icon = skillIcons[item.icon] || Sparkles;
          const isSelected = key === activeCategoryKey;

          return (
            <button
              key={key}
              onClick={() => setActiveCategoryKey(key)}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 text-center transition-all duration-300 ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-600/60 dark:border-amber-500/50 shadow-md dark:shadow-[0_0_20px_rgba(245,158,11,0.15)] -translate-y-1'
                  : 'bg-white/80 dark:bg-zinc-950/40 border-zinc-200 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200 shadow-sm dark:shadow-none'
              }`}
            >
              <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-500 dark:text-zinc-400'}`} />
              <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Skills Display */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800/80 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-100">
                {activeCategory.title}
              </h3>
              <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 tracking-wider font-semibold">
                COMPETENCY MATRIX // {activeCategory.items.length} MODULES
              </span>
            </div>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-zinc-500 dark:text-zinc-500 font-semibold">
            CONFIRMED MASTERY
          </span>
        </div>

        {/* Competencies Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {activeCategory.items.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400/80" />
                  {skill.name}
                </span>
                <span className="text-amber-700 dark:text-amber-400/90 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300/60 dark:border-zinc-800/80 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 dark:to-amber-300 transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
