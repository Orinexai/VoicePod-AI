import React, { useState } from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Cpu, 
  UserCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Mic, 
  Globe, 
  Languages, 
  Check, 
  TrendingUp, 
  Star,
  Zap,
  Mail,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { 
  CORE_FEATURES, 
  PILLAR_CAPABILITIES, 
  SOLUTIONS_PROJECTS, 
  PRICING_DATA, 
  TESTIMONIALS_DATA, 
  BLOGS_DATA,
  ROBOT_ASSETS
} from '../data/voicepodSiteData';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { PageId } from '../components/Navbar';
import { submitToWebhook } from '../utils/webhook';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || isSubscribing) return;

    setIsSubscribing(true);
    setNewsletterError(null);

    try {
      await submitToWebhook({
        path: 'newsletter',
        name: '',
        email: newsletterEmail.trim(),
        company: '',
        phone: '',
        message: '',
      });
      setIsSubscribed(true);
      setNewsletterEmail('');
    } catch {
      setNewsletterError('Could not subscribe right now. Please try again in a moment.');
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-circuit-glow">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-xs text-cyan-300 font-mono shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>DISCOVER THE FUTURE OF BUSINESS AUTOMATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Transform Your Business With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                  Intelligent AI Voice Assistants
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Customize AI Voice Assistants that work for you 24/7. Handle inbound calls, run outbound campaigns, qualify leads, and schedule appointments with human-like AI reps.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-950 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact-sales')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/40 transition-all cursor-pointer"
                >
                  <span>Contact Sales</span>
                </button>
              </div>
            </div>

            {/* Right Hero: Animated 3D AI Voice Robot & Floating HUD Badges */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Radial Glowing Aura Behind Robot */}
              <div className="absolute w-[360px] h-[360px] sm:w-[440px] h-[440px] bg-gradient-to-tr from-cyan-500/25 via-purple-600/20 to-teal-400/20 rounded-full blur-[90px] animate-pulse-aura pointer-events-none" />

              {/* Main Animated Robot Container */}
              <div className="relative w-full max-w-md flex flex-col items-center group cursor-pointer">
                
                {/* Floating Top HUD Tag */}
                <div className="absolute -top-3 left-2 sm:-left-4 z-20 animate-float-badge-1">
                  <div className="px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/50 backdrop-blur-md shadow-xl shadow-cyan-950/60 flex items-center gap-2.5 transition-transform group-hover:scale-105">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5 font-mono">
                        VoicePod AI Agent
                        <span className="text-[10px] text-cyan-400 px-1.5 py-0.2 rounded bg-cyan-950 border border-cyan-500/30">
                          Active
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">Sub-300ms Conversational Latency</div>
                    </div>
                  </div>
                </div>

                {/* Floating Right HUD Tag */}
                <div className="absolute top-1/3 -right-2 sm:-right-6 z-20 animate-float-badge-2">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] font-mono text-purple-300">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                    <span>50+ Global Languages</span>
                  </div>
                </div>

                {/* The 3D AI Robot PNG with floating keyframe animation */}
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[380px] sm:h-[450px] flex items-center justify-center animate-float-robot">
                  <img
                    src={ROBOT_ASSETS.hero}
                    alt="VoicePod Autonomous AI Robot"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = ROBOT_ASSETS.avatarFallback;
                    }}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(6,182,212,0.5)] group-hover:drop-shadow-[0_25px_60px_rgba(104,59,242,0.7)] group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Floating Bottom HUD Card (Matching user screenshot with animated live stats) */}
                <div className="absolute -bottom-4 left-0 right-0 z-20 animate-float-badge-1">
                  <div className="p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/40 backdrop-blur-xl shadow-2xl shadow-cyan-950/70 space-y-2.5 transition-all group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 font-bold flex items-center gap-1.5">
                        <PhoneCall className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        Recent Inbound Call
                      </span>
                      <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                        100% Handled
                      </span>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed italic">
                      "Caller scheduled urgent consultation for tomorrow afternoon. Agent verified calendar slot, confirmed email, and pushed record to CRM."
                    </p>

                    <div className="pt-1.5 border-t border-slate-800/90 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-cyan-300">✓ Appointment Booked</span>
                      <span className="text-purple-300">✓ SMS Dispatched</span>
                      <span className="text-emerald-400 font-bold">&lt; 60s Speed</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Feature Ticker Strip */}
        <div className="mt-16 py-3.5 bg-slate-900/60 border-y border-slate-800/80 overflow-x-auto">
          <div className="flex items-center justify-around gap-6 text-xs font-mono text-slate-300 uppercase tracking-wider min-w-[750px]">
            <span>Inbound & Outbound Calls</span>
            <span className="text-cyan-500">//</span>
            <span>Custom Voices</span>
            <span className="text-cyan-500">//</span>
            <span>Multiple Accents</span>
            <span className="text-cyan-500">//</span>
            <span>Multi-Language Support</span>
            <span className="text-cyan-500">//</span>
            <span>Schedule Appointments</span>
            <span className="text-cyan-500">//</span>
            <span>Lead Qualification</span>
          </div>
        </div>
      </section>

      {/* 2. Core Features (Automate Phone Calls) */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AUTOMATE PHONE CALLS WITH HUMAN-LIKE AI REPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Customize AI Voice Assistants that work for you 24/7
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Empowering Businesses with Intelligent AI Voice Automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover-lift group hover:border-cyan-400 hover:shadow-[0_20px_40px_-5px_rgba(6,182,212,0.35)] transition-all duration-300"
              >
                <div>
                  {/* 3D Visual Header Banner */}
                  <div className="relative h-40 w-full overflow-hidden bg-slate-950/80 border-b border-slate-800/80">
                    <img
                      src={feat.image}
                      alt={feat.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-cyan-950">
                      {feat.icon === 'PhoneCall' && <PhoneCall className="w-5 h-5" />}
                      {feat.icon === 'Mic' && <Mic className="w-5 h-5" />}
                      {feat.icon === 'Globe' && <Globe className="w-5 h-5" />}
                      {feat.icon === 'Languages' && <Languages className="w-5 h-5" />}
                    </div>
                    <span className="absolute bottom-2.5 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-sm">
                      {feat.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {feat.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                    {feat.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. Dedicated 3D AI Robot Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-[#07090e] via-[#090d18] to-[#080b12] border-t border-slate-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: 3D Robot Character with Holographic Rings */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/25 to-teal-400/20 rounded-full blur-[80px] animate-pulse-aura pointer-events-none" />
              
              <div className="relative w-full max-w-[380px] flex flex-col items-center group cursor-pointer">
                {/* Floating Telemetry Badge 1 */}
                <div className="absolute top-4 -left-4 z-20 animate-float-badge-1">
                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Neural Audio Engine v4.2</span>
                  </div>
                </div>

                {/* Floating Telemetry Badge 2 */}
                <div className="absolute bottom-8 -right-4 z-20 animate-float-badge-2">
                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono text-purple-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Zero Hallucination Guardrails</span>
                  </div>
                </div>

                {/* 3D Robot Image */}
                <div className="relative w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-slate-950/80 p-2 flex items-center justify-center animate-float-robot group-hover:border-cyan-400 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-500">
                  <img
                    src={ROBOT_ASSETS.architecture}
                    alt="VoicePod 3D AI Robot Architecture"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = ROBOT_ASSETS.hero;
                    }}
                    className="w-full h-full object-cover rounded-2xl filter drop-shadow-[0_20px_40px_rgba(6,182,212,0.45)] group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-2xl" />
                </div>
              </div>
            </div>

            {/* Right: Architecture Highlights & Metrics */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-purple-500/40 text-xs font-mono text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>NEXT-GEN AUTONOMOUS ARCHITECTURE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Built from the ground up for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                  Instant, Natural AI Conversations
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                VoicePod pairs deep neural speech synthesis with proprietary sub-second LLM orchestration. Your callers never experience awkward delays, robotic speech cadence, or disconnected responses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="text-cyan-400 font-mono text-sm font-bold mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>&lt; 300ms Real-Time Turn</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Fast response latency matching real human conversation cadence without pauses.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors">
                  <div className="text-purple-400 font-mono text-sm font-bold mb-1 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4" />
                    <span>Adaptive Interruption Handling</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Callers can interject or change subjects naturally; the agent pauses instantly to listen.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('features')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-950/50 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
                >
                  <span>Explore All Features</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm cursor-pointer transition-colors"
                >
                  <span>View Pricing Plans</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Pillar Capabilities */}
      <section className="py-24 bg-[#080b12] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Powerful AI Voice Features Built to Scale Your Business
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Turn complex phone workflows into reliable automated conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLAR_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover-lift group hover:border-purple-400 hover:shadow-[0_20px_40px_-5px_rgba(104,59,242,0.35)] transition-all cursor-pointer"
              >
                <div>
                  {/* 3D Visual Artwork for Each Pillar Capability */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-md flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-purple-950">
                      {cap.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                      {cap.icon === 'Clock' && <Clock className="w-5 h-5" />}
                      {cap.icon === 'Cpu' && <Cpu className="w-5 h-5" />}
                      {cap.icon === 'UserCheck' && <UserCheck className="w-5 h-5" />}
                    </div>
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
                    <span>Explore integration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industry Solutions */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              AI Voice Solutions Transforming Businesses Across Industries
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Explore how real-world teams deploy VoicePod to multiply output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS_PROJECTS.map((sol, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover-lift group hover:border-cyan-400 hover:shadow-[0_20px_40px_-5px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-cyan-500/40">
                      {sol.tag}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono font-semibold">{sol.metrics}</span>
                    <button
                      onClick={() => onNavigate('features')}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      View Capabilities <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Grid on Homepage */}
      <section className="py-24 bg-[#080b12] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Flexible Pricing Plans Built To Scale With Your Business Needs
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Starter, Pro and Scale plans include a 14-day free trial, calendar integrations, and multi-language support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_DATA.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 flex flex-col justify-between hover-lift group transition-all duration-300 relative ${
                  tier.popular
                    ? 'bg-gradient-to-b from-slate-900 via-[#0a0f1e] to-slate-950 border-2 border-cyan-500/60 shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] lg:-translate-y-2'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_15px_35px_-5px_rgba(6,182,212,0.25)]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase bg-cyan-400 text-slate-950">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{tier.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[32px] leading-relaxed mb-4">{tier.subtitle}</p>

                  <div className="pb-4 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">{tier.price}</span>
                      <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                    </div>
                    <div className="text-xs text-cyan-400 font-mono mt-1 font-semibold">{tier.agents}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{tier.minutes}</div>
                  </div>

                  <div className="py-4 space-y-2">
                    {tier.features.slice(0, 8).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => {
                      if (tier.id === 'enterprise') {
                        onNavigate('contact-sales');
                      } else {
                        onNavigate('pricing');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 hover:from-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Carousel */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-xs font-mono text-cyan-400 mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>TESTED & PROVEN IN PRODUCTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Trusted by Businesses Worldwide
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
              See what our customers say about VoicePod AI voice automation, sub-second latency, and calendar integration.
            </p>
          </div>

          {/* Responsive Touch-Friendly Carousel with Custom 3D Avatars */}
          <TestimonialCarousel />
        </div>
      </section>

      {/* 7. Blog Highlights */}
      <section className="py-24 bg-[#080b12] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                // OUR LATEST BLOG //
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-xl">
                Your Hub for Smart Reads on Artificial Intelligence And Future Technologies
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-cyan-300 text-xs font-semibold flex items-center gap-2 shrink-0 cursor-pointer transition-all hover:scale-105"
            >
              <span>View All Blogs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOGS_DATA.slice(0, 2).map((b) => (
              <div
                key={b.id}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden hover-lift group hover:border-cyan-400 hover:shadow-[0_20px_40px_-5px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate('blog')}
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={b.image}
                    alt={b.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900/90 text-cyan-300 border border-cyan-500/40">
                    {b.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-xs text-slate-400 font-mono">{b.date} · {b.readTime}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {b.excerpt}
                  </p>
                  <div className="pt-2 text-cyan-400 text-xs font-semibold flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Stay Informed Newsletter Banner with 3D AI Robot */}
      <section className="py-20 bg-gradient-to-b from-[#07090e] via-slate-950 to-[#07090e] border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 3D Robot Visual */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-[280px] h-[280px] sm:h-[320px] flex items-center justify-center animate-float-robot">
                <div className="absolute w-[220px] h-[220px] bg-cyan-500/20 rounded-full blur-[60px] animate-pulse-aura" />
                <img
                  src={ROBOT_ASSETS.newsletter}
                  alt="VoicePod AI Assistant"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = ROBOT_ASSETS.avatarFallback;
                  }}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(6,182,212,0.45)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Form & Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/40 text-xs font-mono text-cyan-400">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>EXPERIENCE REALISTIC AI CONVERSATIONS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Stay Informed with the Latest AI Updates
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Get product updates, newly released accents, CRM integrations, and industry case studies delivered straight to your inbox.
              </p>

              {isSubscribed ? (
                <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Thank you! You are subscribed to VoicePod updates and engineering releases.</span>
                </div>
              ) : (
                <div className="space-y-3 pt-2 max-w-lg">
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row items-center gap-3"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your corporate email address"
                      disabled={isSubscribing}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors disabled:opacity-60"
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer shadow-lg shadow-cyan-950 hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubscribing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <span>Subscribe</span>
                      )}
                    </button>
                  </form>
                  {newsletterError && (
                    <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{newsletterError}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-400 pt-1">
                <span>✓ Zero spam guarantee</span>
                <span>✓ Unsubscribe anytime</span>
                <span>✓ Weekly AI Voice digest</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
