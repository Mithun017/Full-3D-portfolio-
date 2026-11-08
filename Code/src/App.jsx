import React, { useState } from 'react';
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

  return (
    <div className="relative min-h-screen bg-[#050409] text-zinc-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* 3D Celestial WebGL Scene */}
      <CosmicBackground />

      {/* Primary Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

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

