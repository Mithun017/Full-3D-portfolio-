import React, { useEffect } from 'react';
import { X, Github, CheckCircle, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-xl animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#090812] border border-amber-500/30 p-5 sm:p-8 shadow-2xl shadow-amber-500/10 my-4 sm:my-8 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 uppercase tracking-widest">
            {project.category}
          </span>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500 font-medium">
            {project.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 mb-1">
          {project.title}
        </h3>
        <p className="font-editorial text-sm sm:text-base text-amber-700 dark:text-amber-300/90 font-medium mb-6">
          {project.tagline}
        </p>

        {/* Narrative Overview */}
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 mb-6">
          <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-1 font-semibold">
            System Overview
          </span>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <span className="font-mono text-xs text-amber-700 dark:text-amber-400 tracking-wider uppercase block mb-3 flex items-center gap-2 font-semibold">
            <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Architecture & Key Features</span>
          </span>
          <div className="space-y-2.5">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400/80 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metric */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 mb-6">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Impact</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-light">
            {project.impact}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-2.5 font-semibold">
            Stack & Frameworks
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-amber-200/90 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            Close
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 hover:brightness-110 transition-colors shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
