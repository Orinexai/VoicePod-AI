import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PILLAR_CAPABILITIES, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { PageId } from '../components/Navbar';
import { MediaFrame } from '../components/MediaFrame';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  SvgVoiceCoreIcon,
  SvgTelephonyNodeIcon,
  SvgGlobalDialectIcon,
  SvgNeuralSyncIcon,
  SvgWorkflowCalendarIcon,
  SvgAnalyticsPulseIcon,
  SvgShieldGuardIcon,
  SvgHeroAcousticRings,
  SvgAcousticWaveform
} from '../components/ModernSvgVisuals';

interface FeaturesPageProps {
  onNavigate: (page: PageId) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      {/* 1. Page Header with Studio Hardware Visual & SVG Acoustic Rings */}
      <section className="py-16 sm:py-20 bg-[#080b18] border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left">
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
              <SvgNeuralSyncIcon className="w-5 h-5" />
              <span>Platform Architecture &amp; Capabilities</span>
            </div>

            <h1 className="text-[clamp(2.25rem,4.2vw,3.5rem)] font-black text-white tracking-tight leading-[1.1] [text-wrap:balance]">
              Powerful AI Voice Features Built to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300">
                Scale Your Business
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Customize AI Voice Assistants that work around the clock. Handle inbound queries, conduct autonomous outbound workflows, qualify prospects, and sync instantly with your CRM.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-950/60 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Deploy AI Voice Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Request Custom Demo</span>
              </button>
            </div>
          </div>

          {/* Right Studio Hardware Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full h-full min-h-[340px] rounded-3xl bg-[#0b1020] border border-slate-800 overflow-hidden flex flex-col justify-between shadow-2xl">
              <SvgHeroAcousticRings className="absolute inset-0 w-full h-full opacity-65" />
              <div className="relative flex-1 p-4 flex items-center justify-center">
                <MediaFrame
                  src={ROBOT_ASSETS.featuresHero}
                  fallbackSrc={ROBOT_ASSETS.brandMarkPng}
                  alt="VoicePod Platform AI Voice Hardware"
                  className="w-full h-64 sm:h-72 rounded-2xl border border-slate-800/70"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 px-5 py-3.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Sub-300ms Turn Latency</span>
                <span className="text-cyan-300 tabular-nums">99.9% Carrier SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep-Dive Technical Modules */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Feature 1: Inbound & Outbound Calling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal variant="slide-left" className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium">
              <SvgTelephonyNodeIcon className="w-5 h-5" />
              <span>Autonomous Telephony Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-wrap:balance]">
              Inbound &amp; Outbound AI Calling
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Never miss an opportunity with AI voice agents that manage both incoming and outgoing calls. Deliver instant responses, engage prospects, follow up on leads, and provide 24/7 call center support.
            </p>
            <div className="space-y-3 pt-1">
              {[
                'Instant qualification before CRM handoff',
                'Autonomous mass outbound notifications & survey campaigns',
                'Answer inbound calls 24/7 with zero hold queue'
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer transition-all whitespace-nowrap shrink-0"
              >
                <span>Deploy Calling Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={100} className="lg:col-span-6 rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
            <div className="h-60 w-full border-b border-slate-800/80">
              <MediaFrame
                src={ROBOT_ASSETS.featuresSip}
                fallbackSrc={ROBOT_ASSETS.bannerFallback}
                alt="VoicePod Telephony & CRM Workspace"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 font-mono text-xs space-y-3">
              <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2.5">
                <span className="text-cyan-300 font-semibold">SIP Trunk Live</span>
                <span className="text-emerald-400 tabular-nums">Latency 240ms</span>
              </div>
              <SvgAcousticWaveform className="w-full h-7" />
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
                Caller: &ldquo;Can I book a consultation for Friday at 10 AM?&rdquo;
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-200">
                VoicePod: &ldquo;I&apos;ve booked Friday at 10:00 AM on our calendar and sent your SMS confirmation.&rdquo;
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature 2: Custom Voices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal variant="slide-right" delay={100} className="lg:col-span-6 lg:order-2 space-y-5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium">
              <SvgVoiceCoreIcon className="w-5 h-5" />
              <span>Voice Personalization &amp; Cloning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-wrap:balance]">
              Custom AI Voices
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Create a unique voice experience that reflects your brand. Choose from a wide range of realistic AI voices or customize speech inflection, pacing, pitch, and conversational tone.
            </p>
            <div className="space-y-3 pt-1">
              {[
                'Adjustable tone, empathy, pacing, and speaking style',
                'Custom voice cloning matched to your brand ambassador',
                'Natural human-like breathing, cadence, and pause variations'
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-cyan-300 hover:text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all whitespace-nowrap shrink-0"
              >
                <span>View Voice Plans</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-left" className="lg:col-span-6 lg:order-1 rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
            <div className="h-60 w-full border-b border-slate-800/80">
              <MediaFrame
                src={ROBOT_ASSETS.featuresCloning}
                fallbackSrc={ROBOT_ASSETS.bannerFallback}
                alt="Studio Condenser Microphone in Dark Acoustic Suite"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-cyan-400 font-mono">Tone Presets</div>
                <div className="text-sm font-bold text-white mt-1">Professional &amp; Warm</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Legal, Finance &amp; Tech</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-teal-300 font-mono">Speed &amp; Modulation</div>
                <div className="text-sm font-bold text-white mt-1">Dynamic Cadence</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Adaptive Real-Time Control</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature 3: Regional Accents & Multi-Language */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal variant="slide-left" className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium">
              <SvgGlobalDialectIcon className="w-5 h-5" />
              <span>Global Reach &amp; Dialect Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-wrap:balance]">
              Multiple Accents &amp; 50+ Languages
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Build stronger customer connections with familiar regional accents and communicate fluently across borders with instantaneous caller language detection.
            </p>
            <div className="space-y-3 pt-1">
              {[
                'Localized accents: US, UK, Australian, Canadian, and more',
                'Automatic in-call language detection & real-time localization',
                'Support for over 50+ international languages and regional dialects'
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer transition-all whitespace-nowrap shrink-0"
              >
                <span>Request Dialect Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={100} className="lg:col-span-6 rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
            <div className="h-60 w-full border-b border-slate-800/80">
              <MediaFrame
                src={ROBOT_ASSETS.featuresDialects}
                fallbackSrc={ROBOT_ASSETS.bannerFallback}
                alt="Global Multilingual Voice Routing Network"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="text-xs font-mono text-slate-400">
                Supported Language &amp; Accent Profiles:
              </div>
              <p className="text-xs sm:text-sm text-cyan-300 font-mono leading-relaxed">
                English (UK / US / AU) · Español · Français · Deutsch · العربية · Urdu · Hindi · Italiano · Nederlands · Português · 日本語 · 한국어 · Mandarin
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Enterprise Reliability Pillars */}
      <section className="py-24 bg-[#090d18] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
              <SvgShieldGuardIcon className="w-5 h-5" />
              <span>Reliability &amp; Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-wrap:balance]">
              Enterprise foundation for mission-critical voice
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Engineered for 99.9% uptime, zero hallucination guardrails, and rapid webhook integration.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLAR_CAPABILITIES.map((cap, idx) => {
              const PillarIcon =
                idx === 0
                  ? SvgVoiceCoreIcon
                  : idx === 1
                  ? SvgAnalyticsPulseIcon
                  : idx === 2
                  ? SvgWorkflowCalendarIcon
                  : SvgShieldGuardIcon;
              return (
                <ScrollReveal key={idx} variant="slide-up" delay={idx * 85} className="h-full">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      onNavigate('contact-sales');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onNavigate('contact-sales');
                      }
                    }}
                    className="h-full rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover-lift group hover:border-cyan-500/50 transition-all cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/25 flex items-center justify-center">
                        <PillarIcon className="w-7 h-7" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Talk to engineering</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
