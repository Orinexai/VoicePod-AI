import React from 'react';
import { 
  PhoneCall, 
  Mic, 
  Globe, 
  Languages, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Cpu, 
  UserCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CORE_FEATURES, PILLAR_CAPABILITIES, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { PageId } from '../components/Navbar';

interface FeaturesPageProps {
  onNavigate: (page: PageId) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Page Header with 3D Robot Visual */}
      <section className="py-20 bg-gradient-to-b from-[#080b18] via-[#07090e] to-[#07090e] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>PLATFORM ARCHITECTURE & CAPABILITIES</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Powerful AI Voice Features Built to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                Scale Your Business
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Customize AI Voice Assistants that work for you 24/7. Handle inbound queries, conduct autonomous outbound workflows, qualify prospects, and sync instantly with your CRM.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-950 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Deploy AI Voice Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <span>Request Custom Demo</span>
              </button>
            </div>
          </div>

          {/* Right Floating 3D Robot Character */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/25 to-teal-400/20 rounded-full blur-[80px] animate-pulse-aura pointer-events-none" />
            
            <div className="relative w-full max-w-[340px] flex flex-col items-center group cursor-pointer">
              <div className="absolute top-2 -left-4 z-20 animate-float-badge-1">
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/50 backdrop-blur-md shadow-xl text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>VoicePod Engine Active</span>
                </div>
              </div>

              <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center animate-float-robot">
                <img
                  src={ROBOT_ASSETS.hero}
                  alt="VoicePod Platform AI Avatar"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = ROBOT_ASSETS.avatarFallback;
                  }}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(6,182,212,0.45)] group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="absolute -bottom-3 -right-4 z-20 animate-float-badge-2">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/95 border border-purple-500/50 backdrop-blur-md shadow-xl text-xs font-mono text-purple-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Sub-300ms Turn Latency</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Features Deep Dives with 3D Graphic Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* Feature 1: Inbound & Outbound Calling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/30">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Autonomous Telephony Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Inbound & Outbound AI Calling
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Never miss an opportunity with AI voice agents that manage both incoming and outgoing calls. Deliver instant responses, engage prospects, follow up on leads, and provide 24/7 call center support.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Instant qualification before CRM handoff',
                'Autonomous mass outbound notifications & survey campaigns',
                'Answer inbound calls 24/7 in zero rings with zero hold queue'
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-950 hover:scale-105 transition-all"
              >
                <span>Deploy Calling Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-2xl hover-lift group hover:border-cyan-400 transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
                alt="Inbound & Outbound AI Calling Visual"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            <div className="p-6 font-mono text-xs space-y-3">
              <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SIP Trunk Live
                </span>
                <span className="text-emerald-400">⚡ Latency 240ms</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
                Caller: "Can I book a consultation for Friday at 10 AM?"
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-200">
                VoicePod: "I've locked Friday at 10:00 AM on our calendar. Confirmation SMS dispatched!"
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Custom Voices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider bg-purple-950/50 px-3 py-1 rounded-full border border-purple-500/30">
              <Mic className="w-3.5 h-3.5" />
              <span>Voice Personalization & Cloning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Custom AI Voices
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Create a unique voice experience that reflects your brand. Choose from a wide range of realistic AI voices or customize speech inflection, pacing, pitch, and conversational tone.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Adjustable tone, empathy, pacing, and speaking style',
                'Custom voice cloning matched to your brand ambassador',
                'Natural human-like breathing, cadence, and pause variations'
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-purple-500/40 text-purple-300 hover:text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
              >
                <span>Sample Voice Library</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1 rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-2xl hover-lift group hover:border-purple-400 transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
                alt="Custom AI Voices Visual"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-purple-500/30 transition-colors">
                <div className="text-xs text-purple-400 font-mono">Tone Presets</div>
                <div className="text-sm font-bold text-white mt-1">Professional & Warm</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Healthcare, Finance & Tech</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                <div className="text-xs text-cyan-400 font-mono">Speed & Modulation</div>
                <div className="text-sm font-bold text-white mt-1">Dynamic Cadence</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Adaptive Real-Time Control</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Regional Accents & Multi-Language */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-wider bg-teal-950/50 px-3 py-1 rounded-full border border-teal-500/30">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Reach & Dialect Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Multiple Accents & 50+ Languages
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Build stronger customer connections with familiar regional accents and communicate fluently across the globe with instantaneous caller language detection.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Localized accents: US, UK, Australian, Canadian, and more',
                'Automatic in-call language detection & mid-sentence translation',
                'Support for over 50+ international languages and regional dialects'
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-teal-950 hover:scale-105 transition-all"
              >
                <span>Request Dialect Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-2xl hover-lift group hover:border-teal-400 transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Accents and Languages Visual"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {[
                  'English (US)', 'English (UK)', 'English (AU)', 
                  'Español', 'Français', 'Deutsch', 
                  'العربية', 'Urdu', 'Hindi', 
                  'Italiano', 'Nederlands', 'Português',
                  '日本語', '한국어', 'Mandarin'
                ].map((lang, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-500/50 transition-colors">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 3. 4 Pillars with 3D Cybernetic Visual Cards */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
              Reliability & Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Enterprise Foundation for Mission-Critical Voice
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Engineered for 99.9% uptime, zero hallucination guardrails, and rapid integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLAR_CAPABILITIES.map((cap, idx) => (
              <div 
                key={idx} 
                onClick={() => {
                  onNavigate('contact-sales');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover-lift group hover:border-purple-400 hover:shadow-[0_20px_40px_-5px_rgba(104,59,242,0.35)] transition-all cursor-pointer"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-purple-400 font-mono font-medium group-hover:translate-x-1 transition-transform">
                    <span>Learn details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
