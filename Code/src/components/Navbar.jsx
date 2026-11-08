import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#07060c]/85 backdrop-blur-xl border-b border-amber-500/20 dark:border-amber-500/10 py-3 shadow-md dark:shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/40 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all">
            <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 80 L18 20 L50 54 L82 20 L82 80" />
            </svg>
          </div>
          <div>
            <div className="font-display font-bold tracking-widest text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              MITHUN
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider">
              AI & DATA SCIENCE
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm dark:shadow-none">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-500/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Utilities */}
        <div className="hidden lg:flex items-center gap-3">
          {/* 3D Glowing Celestial Single-Orb Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="relative w-10 h-10 rounded-full p-0 flex items-center justify-center cursor-pointer select-none transition-all duration-500 group focus:outline-none mr-3.5"
            title={theme === 'dark' ? 'Cosmic Cold Moon (Dark) • Click for Fiery Sun (Light)' : 'Fiery Golden Sun (Light) • Click for Cold Moon (Dark)'}
            aria-label="Toggle Celestial Theme"
          >
            {/* Outer Atmospheric Corona Halo Glow */}
            <div
              className={`absolute -inset-1.5 rounded-full transition-all duration-700 blur-md pointer-events-none ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-500/50 via-cyan-400/40 to-blue-600/50 opacity-90 group-hover:opacity-100 group-hover:scale-110'
                  : 'bg-gradient-to-r from-amber-500/60 via-yellow-400/50 to-orange-500/60 opacity-95 group-hover:opacity-100 group-hover:scale-110'
              }`}
            />

            {/* 3D Celestial Body Sphere */}
            <div
              className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-700 transform group-hover:scale-105 ${
                theme === 'dark'
                  ? 'shadow-[0_0_15px_rgba(96,165,250,0.85),0_0_30px_rgba(59,130,246,0.55),0_0_45px_rgba(37,99,235,0.35)] ring-2 ring-blue-300/60'
                  : 'shadow-[0_0_16px_rgba(251,191,36,0.95),0_0_32px_rgba(245,158,11,0.75),0_0_50px_rgba(234,88,12,0.5)] ring-2 ring-amber-300/70'
              }`}
            >
              {/* Moon Texture (Dark Mode) */}
              <img
                src="/assets/celestial-moon.png"
                alt="Cold Moon"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  theme === 'dark'
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-75 -rotate-90 pointer-events-none'
                }`}
              />

              {/* Sun Texture (Light Mode) */}
              <img
                src="/assets/celestial-sun.png"
                alt="Fiery Sun"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  theme === 'light'
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-75 rotate-90 pointer-events-none'
                }`}
              />

              {/* 3D Convex Sphere Lighting Overlay (Photorealistic 3D Depth) */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 35%, rgba(0,0,0,0.7) 100%)',
                }}
              />

              {/* 3D Specular Light Glint on Sphere Apex */}
              <div
                className="absolute top-1 left-1.5 w-3.5 h-2.5 rounded-full pointer-events-none opacity-80"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 75%)',
                  transform: 'rotate(-25deg)',
                }}
              />

              {/* 3D Ambient Limb Shadow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.8),inset_2px_2px_4px_rgba(255,255,255,0.4)]"
              />
            </div>
          </button>

          {/* Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-purple-100/80 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-500/30 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-900/60 hover:border-purple-400 transition-all duration-300 shadow-sm dark:shadow-none"
            title="Launch Retro Ubuntu Terminal Mode"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>CLI SYSTEM</span>
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
            <a
              href={portfolioData.profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile 3D Glowing Celestial Single-Orb Toggle */}
          <button
            onClick={onToggleTheme}
            className="relative w-9 h-9 rounded-full p-0 flex items-center justify-center cursor-pointer select-none transition-all duration-500 focus:outline-none"
            title="Toggle Celestial Theme"
            aria-label="Toggle Celestial Theme"
          >
            {/* Outer Corona Glow */}
            <div
              className={`absolute -inset-1 rounded-full transition-all duration-500 blur-sm pointer-events-none ${
                theme === 'dark'
                  ? 'bg-blue-500/50 opacity-90'
                  : 'bg-amber-500/60 opacity-90'
              }`}
            />
            {/* 3D Celestial Body Sphere */}
            <div
              className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ${
                theme === 'dark'
                  ? 'shadow-[0_0_12px_rgba(96,165,250,0.8),0_0_24px_rgba(59,130,246,0.5)] ring-2 ring-blue-300/60'
                  : 'shadow-[0_0_14px_rgba(251,191,36,0.9),0_0_26px_rgba(245,158,11,0.6)] ring-2 ring-amber-300/70'
              }`}
            >
              <img
                src="/assets/celestial-moon.png"
                alt="Cold Moon"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
                }`}
              />
              <img
                src="/assets/celestial-sun.png"
                alt="Fiery Sun"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  theme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
                }`}
              />
              {/* 3D Convex Overlay */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay"
                style={{
                  background: 'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 35%, rgba(0,0,0,0.7) 100%)',
                }}
              />
            </div>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#07060c]/95 border-b border-amber-500/20 px-6 py-6 backdrop-blur-2xl shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-300 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/40 text-purple-800 dark:text-purple-200"
              >
                <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>LAUNCH CLI SYSTEM</span>
              </button>
              <div className="flex justify-center gap-4 pt-2">
                <a
                  href={portfolioData.profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
