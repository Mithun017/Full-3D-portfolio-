import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NEOFETCH_TEXT = [
  "  ███╗   ███╗██╗████████╗██╗  ██╗██╗   ██╗███╗   ██╗",
  "  ████╗ ████║██║╚══██╔══╝██║  ██║██║   ██║████╗  ██║",
  "  ██╔████╔██║██║   ██║   ███████║██║   ██║██╔██╗ ██║",
  "  ██║╚██╔╝██║██║   ██║   ██╔══██║██║   ██║██║╚██╗██║",
  "  ██║ ╚═╝ ██║██║   ██║   ██║  ██║╚██████╔╝██║ ╚████║",
  "  ╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝",
  "--------------------------------------------------",
  "OS: Ubuntu Cosmic 24.04 LTS (x86_64)",
  "Host: Sri Eshwar AI Compute Node",
  "Kernel: 6.8.0-mithun-ai",
  "Uptime: 35+ Projects, 30+ Certs, 2 Internships",
  "Shell: zsh 5.9 (x86_64-ubuntu)",
  "Role: AI & Data Science Undergraduate",
  "Focus: Generative AI, LLMs, Agents, Digital Twins",
  "Status: Available for High-Impact Engagements"
].join('\n');

const getInitialHistory = () => [
  { type: 'system', text: 'Connecting to MITHUN-OS v2.4 (x86_64-pc-linux-gnu)...' },
  { type: 'system', text: 'Session authenticated: mithun@cosmic-node-01' },
  { type: 'input', text: 'mithun@universe:~$ neofetch' },
  { type: 'neofetch', text: NEOFETCH_TEXT },
  {
    type: 'welcome',
    text: "Type 'help' or click the command buttons above to explore projects, skills, experience, and contact."
  }
];

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (history.length === 0) {
        setHistory(getInitialHistory());
      }
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];

    // When clear is given, reset directly to the default neofetch display
    if (mainCmd === 'clear') {
      setHistory(getInitialHistory());
      setInput('');
      return;
    }

    const newHistory = [...history, { type: 'input', text: `mithun@universe:~$ ${cmd}` }];

    switch (mainCmd) {
      case 'help':
        portfolioData.terminalFileSystem.commands.help
          .filter((line) => !line.includes('neofetch')) // remove neofetch mention from help if preferred, or keep as command
          .forEach((line) => {
            newHistory.push({ type: 'output', text: line });
          });
        break;

      case 'neofetch':
        newHistory.push({
          type: 'neofetch',
          text: NEOFETCH_TEXT
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `[PROFILE] ${portfolioData.profile.bio}\n\n[MISSION] "${portfolioData.profile.mission}"`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: "=== MITHUN'S 15 REAL-WORLD DEPLOYMENTS ===\n" +
            portfolioData.projects
              .map((p, i) => `${(i + 1).toString().padStart(2, '0')}. [${p.category.toUpperCase()}] ${p.title}\n    -> ${p.tagline}\n    -> Stack: ${p.techStack.join(', ')}`)
              .join('\n\n')
        });
        break;

      case 'project':
        const queryId = parts.slice(1).join('-').toLowerCase();
        const found = portfolioData.projects.find((p) =>
          p.id.includes(queryId) || p.title.toLowerCase().includes(queryId)
        );
        if (found) {
          newHistory.push({
            type: 'output',
            text: `[PROJECT] ${found.title}\nTagline: ${found.tagline}\nCategory: ${found.category}\nOverview: ${found.overview}\nImpact: ${found.impact}\nStack: ${found.techStack.join(', ')}`
          });
        } else {
          newHistory.push({
            type: 'error',
            text: `Project '${queryId}' not found. Type 'projects' to see list.`
          });
        }
        break;

      case 'skills':
        const skillsText = Object.values(portfolioData.skills)
          .map((cat) => `\n● ${cat.title}:\n  ` + cat.items.map((i) => `${i.name} (${i.level}%)`).join(', '))
          .join('\n');
        newHistory.push({ type: 'output', text: `=== TECHNICAL STACK ===${skillsText}` });
        break;

      case 'experience':
        const expText = portfolioData.experiences
          .map((e) => `[${e.period}] ${e.role} @ ${e.company}\nFocus: ${e.focus}\n- ${e.achievements[0]}\n- ${e.achievements[1]}`)
          .join('\n\n');
        newHistory.push({ type: 'output', text: `=== EXPERIENCE TIMELINE ===\n${expText}` });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `=== COMMUNICATION CHANNELS ===\nEmail:    ${portfolioData.profile.contact.email}\nPhone:    ${portfolioData.profile.contact.phone}\nLinkedIn: ${portfolioData.profile.contact.linkedin}\nGitHub:   ${portfolioData.profile.contact.github}\nRepo:     ${portfolioData.profile.contact.repo}`
        });
        break;

      case 'date':
        newHistory.push({ type: 'output', text: new Date().toString() });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `zsh: command not found: ${cmd}. Type 'help' for available commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  // Neofetch removed as quick option since it is now permanently default
  const quickCommands = ['projects', 'skills', 'experience', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className={`w-full transition-all duration-300 rounded-xl overflow-hidden border border-purple-500/30 bg-[#120a1f] shadow-2xl flex flex-col ${
          isMaximized ? 'h-full max-w-full' : 'max-w-4xl h-[82vh]'
        }`}
      >
        {/* Terminal Title Bar (Ubuntu Retro Style) */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1e112a] border-b border-purple-500/20 select-none">
          {/* Window Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:brightness-125 transition-all"
              title="Close"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-125 transition-all"
              title="Maximize / Restore"
            />
            <button
              onClick={() => setHistory(getInitialHistory())}
              className="w-3 h-3 rounded-full bg-green-500 hover:brightness-125 transition-all"
              title="Reset / Clear to Neofetch"
            />
          </div>

          {/* Window Title */}
          <div className="flex items-center gap-2 text-xs font-mono text-purple-200">
            <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>mithun@cosmic-core: ~/portfolio (zsh)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-purple-400 hover:text-white"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-purple-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#170e24] border-b border-purple-500/10 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider shrink-0">
            Quick Exec:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:bg-purple-900/60 hover:text-white transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen / Output Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed terminal-scanlines space-y-3 cursor-text text-zinc-300"
        >
          {history.map((line, idx) => {
            if (line.type === 'input') {
              return (
                <div key={idx} className="text-amber-400 font-semibold">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'system') {
              return (
                <div key={idx} className="text-zinc-500 text-[11px]">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'welcome') {
              return (
                <div key={idx} className="text-purple-300/80 whitespace-pre">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'neofetch') {
              return (
                <div key={idx} className="text-amber-300 whitespace-pre font-bold leading-tight">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'error') {
              return (
                <div key={idx} className="text-red-400">
                  {line.text}
                </div>
              );
            }
            return (
              <div key={idx} className="text-zinc-300 whitespace-pre-wrap">
                {line.text}
              </div>
            );
          })}

          {/* Active Input Line */}
          <form onSubmit={onSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-semibold shrink-0">
              mithun@universe:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-amber-200 outline-none border-none p-0 focus:ring-0 font-mono text-xs sm:text-sm"
              autoFocus
              spellCheck={false}
            />
            <button type="submit" className="text-purple-400 hover:text-white" title="Run Command">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
