import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Loader2,
  AlertCircle
} from 'lucide-react';
import {
  CORE_FEATURES,
  PILLAR_CAPABILITIES,
  SOLUTIONS_PROJECTS,
  PRICING_DATA,
  BLOGS_DATA,
  ROBOT_ASSETS,
  SITE_METRICS
} from '../data/voicepodSiteData';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { PageId } from '../components/Navbar';
import { submitToWebhook } from '../utils/webhook';
import { MediaFrame } from '../components/MediaFrame';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  SvgVoiceCoreIcon,
  SvgTelephonyNodeIcon,
  SvgGlobalDialectIcon,
  SvgNeuralSyncIcon,
  SvgWorkflowCalendarIcon,
  SvgShieldGuardIcon,
  SvgAnalyticsPulseIcon,
  SvgHeroAcousticRings,
  SvgAcousticWaveform
} from '../components/ModernSvgVisuals';

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
        message: ''
      });
      setIsSubscribed(true);
      setNewsletterEmail('');
    } catch {
      setNewsletterError('Could not subscribe right now. Please try again in a moment.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const renderFeatureSvg = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <SvgTelephonyNodeIcon className="w-7 h-7" />;
      case 'Mic':
        return <SvgVoiceCoreIcon className="w-7 h-7" />;
      case 'Globe':
        return <SvgGlobalDialectIcon className="w-7 h-7" />;
      case 'Languages':
      default:
        return <SvgNeuralSyncIcon className="w-7 h-7" />;
    }
  };

  const renderPillarSvg = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <SvgVoiceCoreIcon className="w-6 h-6" />;
      case 'Clock':
        return <SvgTelephonyNodeIcon className="w-6 h-6" />;
      case 'Cpu':
        return <SvgNeuralSyncIcon className="w-6 h-6" />;
      case 'UserCheck':
      default:
        return <SvgWorkflowCalendarIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-circuit-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
              <div className="flex items-center gap-2.5 text-xs font-medium text-cyan-300 tracking-wide">
                <SvgVoiceCoreIcon className="w-5 h-5 shrink-0" />
                <span>Autonomous Business Voice Automation</span>
              </div>

              <h1 className="text-[clamp(2.25rem,4.4vw,3.75rem)] font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
                Deploy{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300">
                  Intelligent AI Voice Assistants
                </span>{' '}
                for 24/7 Operations
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Answer inbound customer calls on the first ring, run compliant outbound campaigns, qualify prospects, and book real-time calendar appointments without hold queues.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-950/60 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact-sales')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Contact Sales</span>
                </button>
              </div>
            </div>

            {/* Right Visual Stage: Generated 3D Acoustic Studio Hardware + Custom SVG Rings */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full h-full min-h-[380px] rounded-3xl bg-[#090d18] border border-slate-800/90 overflow-hidden flex flex-col justify-between shadow-2xl">
                <SvgHeroAcousticRings className="absolute inset-0 w-full h-full opacity-75" />

                <div className="relative flex-1 flex items-center justify-center p-4">
                  <MediaFrame
                    src={ROBOT_ASSETS.hero}
                    fallbackSrc={ROBOT_ASSETS.brandMarkPng}
                    alt="VoicePod Acoustic AI Hardware Unit"
                    className="w-full h-72 sm:h-80 rounded-2xl border border-slate-800/60"
                    imgClassName="w-full h-full object-cover"
                    label="VoicePod Acoustic Core"
                  />
                </div>

                {/* Single Clean Bottom Waveform & Session Summary Bar */}
                <div className="relative z-10 p-5 bg-slate-950/90 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={ROBOT_ASSETS.brandMarkPng}
                        alt="VOICEPOD"
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-xs font-semibold text-white">Live Call Orchestration</span>
                    </div>
                    <span className="text-xs font-mono tabular-nums text-cyan-300">
                      &lt; 300ms Latency
                    </span>
                  </div>

                  <SvgAcousticWaveform className="w-full h-7" />

                  <div className="flex items-center justify-between text-[11px] font-mono tabular-nums text-slate-400">
                    <span>Calendar &amp; CRM Sync</span>
                    <span>50+ Global Languages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Proof KPI Strip Directly Below Hero Split */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SITE_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-normal">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Features Bento Grid */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
              <SvgTelephonyNodeIcon className="w-5 h-5" />
              <span>01. Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Automate phone calls with human-like AI voice agents
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Purpose-built voice models engineered for natural turn-taking, regional accents, and direct workflow automation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_FEATURES.map((feat, idx) => (
              <ScrollReveal key={feat.id} variant="slide-up" delay={idx * 85} className="h-full">
                <div className="h-full rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-between hover-lift group hover:border-cyan-500/50 transition-all duration-300">
                  <div>
                    <div className="relative h-44 w-full border-b border-slate-800/80">
                      <MediaFrame
                        src={feat.image}
                        fallbackSrc={ROBOT_ASSETS.bannerFallback}
                        alt={feat.title}
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-slate-950/90 border border-slate-700/80 flex items-center justify-center">
                          {renderFeatureSvg(feat.icon)}
                        </div>
                        <span className="text-xs font-mono text-cyan-300">{feat.tag}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-2.5">
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="pt-3.5 border-t border-slate-800/80 space-y-2">
                      {feat.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Neural Audio Architecture Showcase */}
      <section className="py-24 bg-[#090d18] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Image Frame */}
            <ScrollReveal variant="slide-left" className="lg:col-span-5 flex flex-col">
              <div className="relative flex-1 min-h-[340px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl">
                <MediaFrame
                  src={ROBOT_ASSETS.architecture}
                  fallbackSrc={ROBOT_ASSETS.bannerFallback}
                  alt="VoicePod Neural Acoustic Waveform Architecture"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Neural Stream Engine</span>
                  <span className="text-cyan-300 tabular-nums">&lt; 300ms Turn Latency</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Architecture Prose */}
            <ScrollReveal variant="slide-right" delay={100} className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
                <SvgNeuralSyncIcon className="w-5 h-5" />
                <span>02. Conversational Architecture</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                Engineered from the ground up for natural, real-time voice conversations
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                VoicePod pairs deep neural speech synthesis with sub-second conversational orchestration so callers never encounter awkward pauses, robotic cadence, or dropped turns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-white">
                    <SvgVoiceCoreIcon className="w-6 h-6 shrink-0" />
                    <span className="font-mono tabular-nums">&lt; 300ms Turn Response</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Low-latency streaming response speed aligned with human conversational timing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-white">
                    <SvgShieldGuardIcon className="w-6 h-6 shrink-0" />
                    <span>Adaptive Interruption Control</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Callers can interject or pivot naturally while the agent pauses immediately to listen.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('features')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] whitespace-nowrap shrink-0"
                >
                  <span>Explore All Features</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm cursor-pointer transition-colors whitespace-nowrap shrink-0"
                >
                  <span>View Pricing Plans</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Pillar Capabilities */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
              <SvgWorkflowCalendarIcon className="w-5 h-5" />
              <span>03. Platform Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Built to scale across your telephony and CRM workflows
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLAR_CAPABILITIES.map((cap, idx) => (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 85} className="h-full">
                <div
                  onClick={() => onNavigate('features')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onNavigate('features');
                    }
                  }}
                  className="h-full rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-between hover-lift group hover:border-cyan-500/50 transition-all cursor-pointer"
                >
                  <div>
                    <div className="relative h-44 w-full border-b border-slate-800/80">
                      <MediaFrame
                        src={cap.image}
                        fallbackSrc={ROBOT_ASSETS.bannerFallback}
                        alt={cap.title}
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-slate-950/90 border border-slate-700 flex items-center justify-center">
                        {renderPillarSvg(cap.icon)}
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Explore integration</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industry Solutions & Proof Outcomes */}
      <section className="py-24 bg-[#090d18] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
              <SvgAnalyticsPulseIcon className="w-5 h-5" />
              <span>04. Production Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Voice workflows transforming response times across industries
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS_PROJECTS.map((sol, idx) => (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 85} className="h-full">
                <div className="h-full rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-between hover-lift group hover:border-cyan-500/50 transition-all">
                  <div>
                    <div className="relative h-44 w-full border-b border-slate-800/80">
                      <MediaFrame
                        src={sol.image}
                        fallbackSrc={ROBOT_ASSETS.bannerFallback}
                        alt={sol.title}
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 text-xs font-mono text-cyan-300">
                        {sol.tag}
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs gap-2">
                      <span className="text-emerald-400 font-mono tabular-nums font-semibold">
                        {sol.metrics}
                      </span>
                      <button
                        onClick={() => onNavigate('features')}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>View details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Grid Overview */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Flexible pricing plans built to scale with your volume
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Starter, Pro and Scale plans include a 14-day free trial, calendar integrations, and multi-language support.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_DATA.map((tier, idx) => (
              <ScrollReveal key={tier.id} variant="slide-up" delay={idx * 80} className="h-full">
                <div
                  className={`h-full rounded-2xl p-6 flex flex-col justify-between hover-lift group transition-all duration-300 relative ${
                    tier.popular
                      ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/60 shadow-xl shadow-cyan-950/30'
                      : 'bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {tier.name}
                      </h3>
                      {tier.popular && (
                        <span className="text-[11px] font-mono font-semibold text-cyan-300">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 min-h-[32px] leading-relaxed mb-4">
                      {tier.subtitle}
                    </p>

                    <div className="pb-4 border-b border-slate-800">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums">
                          {tier.price}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                      </div>
                      <div className="text-xs text-cyan-400 font-mono tabular-nums mt-1.5 font-semibold">
                        {tier.agents}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono tabular-nums">
                        {tier.minutes}
                      </div>
                    </div>

                    <div className="py-4 space-y-2">
                      {tier.features.slice(0, 8).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
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
                      className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 hover:from-cyan-300'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials Carousel */}
      <section className="py-24 bg-[#090d18] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Trusted by organizations worldwide
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Verified results from operations teams deploying VoicePod for customer intake, qualification, and scheduling.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={100}>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Latest Editorial Insights */}
      <section className="py-24 bg-[#07090e] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div className="space-y-2">
              <div className="text-xs font-medium text-cyan-400">Editorial &amp; Field Notes</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-xl [text-wrap:balance]">
                Strategies and guides for modern voice automation
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-cyan-300 text-xs font-semibold flex items-center gap-2 shrink-0 cursor-pointer transition-all whitespace-nowrap"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOGS_DATA.slice(0, 2).map((b, idx) => (
              <ScrollReveal key={b.id} variant="slide-up" delay={idx * 100} className="h-full">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Read article: ${b.title}`}
                  className="h-full rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover-lift group hover:border-cyan-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  onClick={() => onNavigate('blog')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onNavigate('blog');
                    }
                  }}
                >
                  <div>
                    <div className="h-60 overflow-hidden relative border-b border-slate-800/80">
                      <MediaFrame
                        src={b.image}
                        fallbackSrc={ROBOT_ASSETS.bannerFallback}
                        alt={b.title}
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <span className="text-cyan-300">{b.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{b.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{b.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {b.excerpt}
                      </p>
                      <div className="pt-2 text-cyan-400 text-xs font-semibold flex items-center gap-1.5">
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter Lead Capture */}
      <section className="py-20 bg-[#090d18] border-t border-slate-800">
        <ScrollReveal variant="slide-up" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 sm:h-72 relative">
                <MediaFrame
                  src={ROBOT_ASSETS.newsletter}
                  fallbackSrc={ROBOT_ASSETS.brandMarkPng}
                  alt="VoicePod Acoustic AI Hardware Unit"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-950/85 border border-slate-800 backdrop-blur-sm">
                  <img
                    src={ROBOT_ASSETS.brandMarkPng}
                    alt="VOICEPOD Mark"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[11px] font-mono text-cyan-300">VOICEPOD Releases</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
                <SvgVoiceCoreIcon className="w-5 h-5" />
                <span>Product &amp; Engineering Updates</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white [text-wrap:balance]">
                Stay informed on new voice models and integrations
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Receive release notes on newly launched accents, telephony connectors, and enterprise case studies delivered straight to your inbox.
              </p>

              {isSubscribed ? (
                <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Thank you! You are subscribed to VoicePod updates and engineering releases.</span>
                </div>
              ) : (
                <div className="space-y-3 pt-1 max-w-lg">
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row items-center gap-3"
                  >
                    <input
                      type="email"
                      required
                      aria-label="Corporate email address for newsletter"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your work email address"
                      disabled={isSubscribing}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors disabled:opacity-60"
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 cursor-pointer transition-all flex items-center justify-center gap-2"
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

              <div className="flex flex-wrap items-center gap-5 text-[11px] font-mono text-slate-400 pt-1">
                <span>Zero spam</span>
                <span aria-hidden="true">·</span>
                <span>Unsubscribe anytime</span>
                <span aria-hidden="true">·</span>
                <span>Monthly product digest</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
