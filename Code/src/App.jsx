import React, { useState, useEffect } from 'react';
import CosmicBackground from './components/CosmicBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('mithun-theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('mithun-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-[#faf8f5] dark:bg-[#050409] text-zinc-900 dark:text-zinc-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-800 dark:selection:text-amber-200 transition-colors duration-500">
      {/* Precision Custom Cursor */}
      <CustomCursor theme={theme} />

      {/* 3D Celestial WebGL Scene */}
      <CosmicBackground theme={theme} />

      {/* Primary Navigation with Theme Toggle */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsMatrix />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Ubuntu Terminal System */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
