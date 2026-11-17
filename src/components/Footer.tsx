import React from 'react';
import { Mail, MapPin, Globe, ShieldCheck, Facebook, Instagram, Youtube } from 'lucide-react';
import { OFFICE_INFO } from '../data/voicepodSiteData';
import { PageId } from './Navbar';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookieSettings }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070f] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs font-['Sora',sans-serif]">
      <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <img
                  src="/assets/aistudio/x2dd6rxx_voicepod_icon_transparent__2__8918fc13.webp"
                  alt="VOICEPOD"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                />
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                VOICEPOD
              </span>
            </button>

            <p className="text-slate-400 max-w-sm leading-relaxed font-light">
              Empowering Businesses with Intelligent AI Voice Automation. Customize AI Voice Assistants that work for you 24/7.
            </p>

            <div className="pt-2 flex flex-col gap-2 font-mono text-[11px] text-slate-400">
              <div className="flex items-center gap-2 text-cyan-400">
                <Globe className="w-3.5 h-3.5" />
                <span>https://voicepod.ai</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Telephony & Cloud Infrastructure</span>
              </div>
            </div>

            {/* Verified Social Links in Footer */}
            <div className="pt-3 flex items-center gap-2.5">
              <span className="text-[11px] font-mono text-slate-500">Follow:</span>
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

          {/* Product Links - Linked to Real Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('features')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('features')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Integrations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resource-center')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Resources
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Help Center & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Links - Linked to Real Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('features')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Customer Support
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('features')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Appointment Booking
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('features')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Lead Generation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Multi-Channel Outreach
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact-sales')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Business Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Office Address & Clickable Mailto Link */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Office Address</h4>
            <div className="space-y-2 text-slate-300">
              <a
                href={OFFICE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-cyan-400 transition-colors cursor-pointer group"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">{OFFICE_INFO.name}, {OFFICE_INFO.address}</span>
              </a>
              <div className="pt-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Email Address:</div>
                <div className="flex items-center gap-2 mt-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <a
                    href="mailto:support@voicepod.ai"
                    className="text-cyan-400 hover:text-cyan-300 underline font-mono font-medium transition-colors"
                  >
                    support@voicepod.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Company Registration Details */}
        <div className="pt-6 pb-4 border-b border-slate-800/60 text-slate-400 text-[11px] font-mono leading-relaxed">
          <p>
            {OFFICE_INFO.legalEntity}
          </p>
        </div>

        {/* Bottom copyright and legal policy links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            {OFFICE_INFO.copyright}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => handleNav('privacy-policy')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('cookie-policy')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => onOpenCookieSettings?.()}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Cookie settings
            </button>
            <button
              onClick={() => handleNav('contact-sales')}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>

      </ScrollReveal>
    </footer>
  );
};
