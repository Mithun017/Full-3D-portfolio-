import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { contact } = portfolioData.profile;
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory cosmic confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#fbbf24', '#f59e0b', '#38bdf8', '#c084fc']
    });

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">05 // TRANSMISSION</span>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
      </div>

      <div className="mb-12">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
          Initiate <span className="text-gold-gradient">Collaboration</span>
        </h2>
        <p className="font-mono text-xs text-zinc-400 mt-2 uppercase tracking-wider">
          Let's connect for high-impact AI/ML systems, research collaborations, or engineering ventures
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 hover:border-amber-500/30 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                Direct Email Channel
              </span>
              <button
                onClick={() => copyToClipboard(contact.email, 'email')}
                className="flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-zinc-100 hover:text-amber-300 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-mono text-sm sm:text-base font-medium break-all">
                {contact.email}
              </span>
            </a>
          </div>

          {/* Direct Phone Card */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 hover:border-amber-500/30 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                Direct Telephony / WhatsApp
              </span>
              <button
                onClick={() => copyToClipboard(contact.phone, 'phone')}
                className="flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-zinc-100 hover:text-amber-300 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-mono text-sm sm:text-base font-medium">
                {contact.phone}
              </span>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-4 rounded-xl border border-zinc-800/80 hover:border-amber-500/40 flex items-center gap-3 text-zinc-300 hover:text-white transition-all group"
            >
              <Linkedin className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase">Connect</div>
                <div className="font-semibold text-xs">LinkedIn</div>
              </div>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-4 rounded-xl border border-zinc-800/80 hover:border-amber-500/40 flex items-center gap-3 text-zinc-300 hover:text-white transition-all group"
            >
              <Github className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase">Repositories</div>
                <div className="font-semibold text-xs">GitHub</div>
              </div>
            </a>
          </div>

          {/* Location & Institution info */}
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900 flex items-center gap-3 text-xs text-zinc-400 font-mono">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Sri Eshwar College of Engineering &bull; Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/20 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-2">
              <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Transmit Secure Dispatch</span>
              </span>
              <span className="font-mono text-[10px] text-zinc-500">ENCRYPTED PROTOCOL</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Alan Turing"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. turing@bletchley.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Dispatch Subject
              </label>
              <input
                type="text"
                placeholder="e.g. AI Research Partnership / System Engineering"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Message Content
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe your project, timeline, or collaboration proposal..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSent}
              className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                isSent
                  ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 hover:brightness-110 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
              }`}
            >
              {isSent ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Dispatch Transmitted Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Dispatch</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

