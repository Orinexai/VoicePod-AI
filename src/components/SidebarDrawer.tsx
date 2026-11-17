import React, { useEffect } from 'react';
import { X, ArrowRight, PhoneCall, Mail, MapPin, Sparkles, Facebook, Instagram, Youtube } from 'lucide-react';
import { PageId } from './Navbar';
import { OFFICE_INFO } from '../data/voicepodSiteData';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLink = (page: PageId) => {
    onNavigate(page);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex font-['Sora',sans-serif]">
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        aria-hidden="true"
      />

      {/* Drawer content */}
      <aside
        className="relative z-10 w-84 sm:w-[380px] max-w-[88vw] h-full bg-[#0b0e19] border-r border-slate-800/80 shadow-2xl flex flex-col justify-between overflow-y-auto p-6 sm:p-7 text-white animate-slide-right transition-transform"
      >
        <div className="space-y-6">
          
          {/* Header row with VoicePod Logo & Close button */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center p-1.5 bg-slate-900 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                <img
                  src="/assets/aistudio/x2dd6rxx_voicepod_icon_transparent__2__8918fc13.webp"
                  alt="VOICEPOD"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-wider text-white">VOICEPOD</h1>
                <p className="text-[10px] text-cyan-400 font-mono">Autonomous Voice AI</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Authentic About Us section (Replaced filler text completely) */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About VoicePod</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              VOICEPOD is an enterprise conversational AI voice automation platform engineered by Tech Future Solutions Ltd. We deploy autonomous, human-like voice agents that operate 24/7/365 to handle customer support, outbound speed-to-lead qualification, and live calendar appointment scheduling with sub-300ms latency.
            </p>
          </div>

          {/* Solutions & Core Capabilities Quick Links */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Core Capabilities
            </h2>
            <div className="space-y-2">
              <button
                onClick={() => handleLink('features')}
                className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center text-xs">
                    📞
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Inbound & Outbound Calling
                    </div>
                    <div className="text-[10px] text-slate-400">24/7 Automated resolution</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => handleLink('features')}
                className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center text-xs">
                    📅
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Calendar & CRM Sync
                    </div>
                    <div className="text-[10px] text-slate-400">Google, Outlook, Salesforce</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => handleLink('resource-center')}
                className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center text-xs">
                    📊
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      ROI Calculator & Models
                    </div>
                    <div className="text-[10px] text-slate-400">Financial payback templates</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* Office & Direct Contact Info */}
          <div className="pt-2 space-y-2 text-xs text-slate-300 font-light border-t border-slate-800/80">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 pt-2">
              Registered Office
            </h3>
            <a
              href={OFFICE_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="group-hover:underline">{OFFICE_INFO.name}, {OFFICE_INFO.address}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <Mail className="w-4 h-4 text-purple-400 shrink-0" />
              <a href={`mailto:${OFFICE_INFO.email}`} className="text-cyan-400 hover:underline font-mono">
                {OFFICE_INFO.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Active Social Links + CTA Button */}
        <div className="pt-6 border-t border-slate-800/80 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Connect With Us:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/p/VoicePod-AI-61582448673384/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/voicepodai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:text-pink-400 text-slate-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@kingsleyujam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@VoicePodAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500/50 hover:text-red-400 text-slate-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <button
            onClick={() => handleLink('contact-sales')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-950 transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Solutions Engineering</span>
          </button>
        </div>
      </aside>
    </div>
  );
};
