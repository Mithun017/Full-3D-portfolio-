import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X, Sun, Moon } from 'lucide-react';
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
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all">
            <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="50" cy="50" r="43" strokeWidth="7" />
              <path d="M26 70 L26 30 L50 54 L74 30 L74 70" strokeWidth="9" />
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
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border bg-white/80 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-300 hover:border-amber-500/40 shadow-sm dark:shadow-none"
            title={theme === 'dark' ? 'Switch to Radiant Light Theme' : 'Switch to Cosmic Dark Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-[11px]">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-semibold text-[11px]">DARK</span>
              </>
            )}
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
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-600" />}
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
