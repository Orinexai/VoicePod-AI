import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

export type PageId =
  | 'home'
  | 'features'
  | 'pricing'
  | 'faq'
  | 'blog'
  | 'tutorials'
  | 'resource-center'
  | 'contact-sales'
  | 'privacy-policy'
  | 'cookie-policy';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Blog', id: 'blog' },
    { label: 'Tutorials', id: 'tutorials' },
    { label: 'Resources', id: 'resource-center' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b19]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-purple-950/20 py-3.5'
          : 'bg-[#080b19]/80 backdrop-blur-md py-4 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left section: Hamburger button for drawer + VOICEPOD Brand */}
          <div className="flex items-center gap-3">
            {/* Sidebar Drawer Hamburger Trigger */}
            <button
              onClick={onOpenSidebar}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 transition-all duration-200 cursor-pointer shadow-md group flex items-center justify-center"
              aria-label="Open Sidebar Drawer"
              title="About Us & Gallery"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="w-5 h-0.5 bg-cyan-400 rounded-full transition-transform group-hover:scale-x-110 origin-left" />
                <span className="w-3.5 h-0.5 bg-slate-300 group-hover:bg-cyan-300 rounded-full transition-transform group-hover:w-5" />
                <span className="w-5 h-0.5 bg-cyan-400 rounded-full transition-transform group-hover:scale-x-110 origin-left" />
              </div>
            </button>

            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-cyan-500/40 p-1.5 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <img
                  src="/assets/aistudio/x2dd6rxx_voicepod_icon_transparent__2__8918fc13.webp"
                  alt="VOICEPOD"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white font-['Sora',sans-serif]">
                  VOICEPOD
                </span>
                <span className="text-[10px] text-cyan-400 font-mono tracking-wider -mt-1 font-medium">
                  Business Voice Automation
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Sales Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact-sales')}
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 rounded-xl transition-all duration-200 shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact Sales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('contact-sales')}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-lg sm:hidden cursor-pointer"
            >
              Contact Sales
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080b19]/98 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-2 backdrop-blur-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left py-2.5 px-3 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/80">
            <button
              onClick={() => handleLinkClick('contact-sales')}
              className="w-full py-3 text-center text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-xl cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
