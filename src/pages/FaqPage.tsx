import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { FAQS_DATA, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { PageId } from '../components/Navbar';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Help & Knowledge
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about VoicePod AI voice automation, architecture, and telephony integrations.
          </p>
        </div>
      </section>

      {/* Main Content with 3D AI Support Assistant */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: 3D Robot Assistant Card */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-6 space-y-6 sticky top-28 shadow-xl shadow-cyan-950/30">
            <div className="relative w-full h-56 flex items-center justify-center animate-float-robot">
              <div className="absolute w-[180px] h-[180px] bg-cyan-500/20 rounded-full blur-[50px] animate-pulse-aura" />
              <img
                src={ROBOT_ASSETS.hero}
                alt="VoicePod Support AI Robot"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ROBOT_ASSETS.avatarFallback;
                }}
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(6,182,212,0.45)]"
              />
            </div>

            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>AI Support Specialist Active</span>
              </div>
              <h3 className="text-lg font-bold text-white">Have a specific question?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our voice engineers can set up a live preview demonstrating custom voice agents on your existing business phone number.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sub-300ms Latency Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Zero Hallucination Guardrails</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact-sales')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950 hover:scale-105 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Talk with Engineering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {FAQS_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all hover:border-slate-700"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/90 transition-colors"
                  >
                    <span className="text-base font-bold text-white">
                      {item.question}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-slate-800 text-cyan-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-cyan-950 text-cyan-300' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
