import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  ExternalLink,
  Layers,
  Activity,
  ShieldAlert,
  Globe,
  Mic,
  Car,
  HeartPulse,
  Navigation,
  Lock,
  BookOpen,
  CloudRain,
  Users,
  LayoutDashboard,
  FolderGit2,
  Briefcase,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

// Icon mapping helper
const iconMap = {
  Activity,
  ShieldAlert,
  Globe,
  Mic,
  Car,
  HeartPulse,
  Navigation,
  Lock,
  BookOpen,
  CloudRain,
  Users,
  LayoutDashboard,
  FolderGit2,
  Briefcase,
  FileCheck,
};

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & ML', 'NLP', 'Computer Vision', 'Cloud & DevOps', 'Web & Systems'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' ||
        (activeCategory === 'AI & ML' && (project.category.includes('AI') || project.category.includes('Signal') || project.category.includes('Data'))) ||
        (activeCategory === 'NLP' && project.category.includes('NLP')) ||
        (activeCategory === 'Computer Vision' && (project.category.includes('Vision') || project.category.includes('Geospatial'))) ||
        (activeCategory === 'Cloud & DevOps' && (project.category.includes('Cloud') || project.category.includes('Cybersecurity'))) ||
        (activeCategory === 'Web & Systems' && project.category.includes('Web'));

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">03 // ARTIFACTS</span>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Selected <span className="text-gold-gradient">Deployments</span>
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-2 uppercase tracking-wider">
            All 15 production & research projects built with high fidelity
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, title, domain..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide whitespace-nowrap transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-amber-500/15 border-amber-500/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const IconComponent = iconMap[project.icon] || Sparkles;

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group glass-panel glass-panel-hover rounded-2xl p-6 border border-zinc-800/80 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent group-hover:via-amber-400 transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800">
                    {project.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-zinc-100 group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                  {project.title}
                </h3>

                <p className="font-editorial text-xs text-amber-400/80 font-medium mb-3 line-clamp-1">
                  {project.tagline}
                </p>

                <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3 mb-6">
                  {project.overview}
                </p>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Card CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60 text-xs font-mono text-zinc-400 group-hover:text-amber-300 transition-colors">
                  <span>Inspect System</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-zinc-500 font-mono text-xs">
          No projects matching your query. Try resetting filters.
        </div>
      )}

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
