import React, { useState, useEffect } from 'react';
import { Cookie, X, ArrowRight, Check } from 'lucide-react';
import { PageId } from './Navbar';

interface CookieBannerProps {
  onNavigate: (page: PageId) => void;
  forceOpen?: boolean;
  onClose?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate, forceOpen = false, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [savedChoice, setSavedChoice] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('voicepod_cookie_consent') as 'accepted' | 'declined' | null;
    setSavedChoice(consent);
    if (!consent) {
      // Small timeout to allow initial page render smoothly
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      const consent = localStorage.getItem('voicepod_cookie_consent') as 'accepted' | 'declined' | null;
      setSavedChoice(consent);
      setIsVisible(true);
    }
  }, [forceOpen]);

  const handleAccept = () => {
    localStorage.setItem('voicepod_cookie_consent', 'accepted');
    setSavedChoice('accepted');
    setIsVisible(false);
    onClose?.();
  };

  const handleDecline = () => {
    localStorage.setItem('voicepod_cookie_consent', 'declined');
    setSavedChoice('declined');
    setIsVisible(false);
    onClose?.();
  };

  const handleDismiss = () => {
    if (!savedChoice) {
      localStorage.setItem('voicepod_cookie_consent', 'declined');
      setSavedChoice('declined');
    }
    setIsVisible(false);
    onClose?.();
  };

  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie settings"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-slide-up"
    >
      <div className="rounded-2xl bg-[#0b0e1b]/95 border border-cyan-500/40 p-5 shadow-2xl backdrop-blur-xl text-white space-y-4">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Cookie Settings</h4>
              <p className="text-[11px] text-cyan-300 font-mono">Tech Future Solutions Ltd</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Saved preference indicator when reopened */}
        {savedChoice && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[11px] font-mono text-slate-300">
            <Check className="w-3 h-3 text-cyan-400" />
            <span>
              Current choice:{' '}
              <strong className="text-cyan-300">
                {savedChoice === 'accepted' ? 'Accept All Cookies' : 'Essential Only'}
              </strong>
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed font-light">
          We use essential cookies to provide our services and optional cookies to analyze site traffic and improve performance. You can manage your preferences or read our policies at any time.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 text-[11px] text-cyan-400 font-mono">
          <button
            onClick={() => {
              onNavigate('privacy-policy');
              handleDismiss();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Privacy Policy</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <span>•</span>
          <button
            onClick={() => {
              onNavigate('cookie-policy');
              handleDismiss();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Cookie Policy</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs shadow-md shadow-cyan-950 transition-all cursor-pointer text-center"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
          >
            Essential Only
          </button>
        </div>

      </div>
    </div>
  );
};
