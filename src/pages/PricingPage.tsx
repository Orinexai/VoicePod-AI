import React, { useState, useRef } from 'react';
import {
  Check,
  ArrowRight,
  CheckCircle2,
  X,
  PhoneCall,
  User,
  Mail,
  Building,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { PRICING_DATA, PricingTier, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { PageId } from '../components/Navbar';
import { submitToWebhook } from '../utils/webhook';
import { useDialogA11y } from '../hooks/useDialogA11y';
import { MediaFrame } from '../components/MediaFrame';
import { ScrollReveal } from '../components/ScrollReveal';
import { SvgShieldGuardIcon, SvgVoiceCoreIcon, SvgHeroAcousticRings } from '../components/ModernSvgVisuals';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState<PricingTier | null>(null);
  const [trialFormData, setTrialFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: ''
  });
  const [trialSuccess, setTrialSuccess] = useState(false);
  const [isSubmittingTrial, setIsSubmittingTrial] = useState(false);
  const [trialError, setTrialError] = useState<string | null>(null);
  const trialModalRef = useRef<HTMLDivElement | null>(null);

  const handlePlanCta = (tier: PricingTier) => {
    if (tier.id === 'enterprise') {
      onNavigate('contact-sales');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setSelectedPlanForTrial(tier);
      setTrialSuccess(false);
      setTrialError(null);
    }
  };

  const handleTrialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlanForTrial || isSubmittingTrial) return;

    setIsSubmittingTrial(true);
    setTrialError(null);

    try {
      await submitToWebhook({
        path: 'trial',
        name: trialFormData.fullName.trim(),
        email: trialFormData.email.trim(),
        company: trialFormData.company.trim(),
        phone: trialFormData.phone.trim(),
        message: `14-day free trial request for ${selectedPlanForTrial.name} plan (${selectedPlanForTrial.price}${selectedPlanForTrial.period})`,
        plan: selectedPlanForTrial.name
      });
      setTrialSuccess(true);
    } catch {
      setTrialError('Unable to submit your trial request right now. Please try again or email support@voicepod.ai.');
    } finally {
      setIsSubmittingTrial(false);
    }
  };

  const handleCloseTrialModal = () => {
    setSelectedPlanForTrial(null);
    setTrialSuccess(false);
    setTrialError(null);
    setTrialFormData({ fullName: '', email: '', phone: '', company: '' });
  };

  useDialogA11y(Boolean(selectedPlanForTrial), handleCloseTrialModal, trialModalRef);

  return (
    <div className="pt-28 pb-20 font-['Sora',sans-serif]">
      {/* 1. Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400">
            <SvgVoiceCoreIcon className="w-5 h-5" />
            <span>Transparent Subscription &amp; Usage</span>
          </div>
          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-black text-white tracking-tight [text-wrap:balance]">
            Flexible Pricing Built To Scale With Your Business
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Starter, Pro and Scale plans include a 14-day trial, two-way calendar sync, CRM integrations, and 50+ global languages.
          </p>
        </div>
      </section>

      {/* 2. Pricing Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_DATA.map((tier, idx) => (
            <ScrollReveal key={tier.id} variant="slide-up" delay={idx * 80} className="h-full">
              <div
                className={`h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover-lift group transition-all duration-300 relative ${
                  tier.popular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/60 shadow-xl shadow-cyan-950/30'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tier.name}
                    </h2>
                    {tier.popular && (
                      <span className="text-[11px] font-mono font-semibold text-cyan-300">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 min-h-[34px] leading-relaxed mb-6">
                    {tier.subtitle}
                  </p>

                  <div className="pb-5 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums">
                        {tier.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                    </div>
                    <div className="text-xs text-cyan-400 font-mono tabular-nums mt-2 font-semibold">
                      {tier.agents}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono tabular-nums mt-0.5">
                      {tier.minutes}
                    </div>
                  </div>

                  <div className="py-5 space-y-2.5">
                    <div className="text-[11px] font-mono uppercase text-slate-400">
                      Included Features
                    </div>
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => handlePlanCta(tier)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 hover:from-cyan-300'
                        : tier.id === 'enterprise'
                        ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/40'
                        : 'bg-cyan-950/70 hover:bg-cyan-900/90 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400'
                    }`}
                  >
                    <span className="truncate">
                      {tier.id === 'enterprise' ? 'Contact Sales' : `Start 14-Day Trial (${tier.name})`}
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enterprise Custom Architecture Showcase Strip */}
        <ScrollReveal variant="slide-up" delay={100} className="mt-16 p-8 sm:p-12 rounded-3xl bg-slate-900/70 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="lg:col-span-8 space-y-4 text-left relative z-10">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium">
              <SvgShieldGuardIcon className="w-5 h-5" />
              <span>Enterprise &amp; High-Volume Custom Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white [text-wrap:balance]">
              Need custom telephony infrastructure or 10,000+ daily call concurrency?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              We offer dedicated SIP trunking, isolated telephony infrastructure, custom fine-tuning on your knowledge base, and contractual SLA response guarantees.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300 pt-2">
              <span className="text-emerald-400 tabular-nums">99.99% Guaranteed SLA</span>
              <span aria-hidden="true">·</span>
              <span>Dedicated Engineering Support</span>
              <span aria-hidden="true">·</span>
              <span>Custom Voice Cloning</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap shrink-0"
              >
                Talk to Enterprise Team
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-[300px] h-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <SvgHeroAcousticRings className="absolute inset-0 w-full h-full opacity-55" />
              <MediaFrame
                src={ROBOT_ASSETS.pricingEnterprise}
                fallbackSrc={ROBOT_ASSETS.brandMarkPng}
                alt="VoicePod Dedicated Enterprise Telephony Infrastructure"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 14-Day Free Trial Account Setup Modal */}
      {selectedPlanForTrial && (
        <div
          onClick={handleCloseTrialModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
        >
          <div
            ref={trialModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="trial-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-[#0c0f1d] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-5 focus:outline-none"
          >
            <button
              type="button"
              onClick={handleCloseTrialModal}
              aria-label="Close trial modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!trialSuccess ? (
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-cyan-300">
                    Selected Plan · {selectedPlanForTrial.name}
                  </div>
                  <h3 id="trial-modal-title" className="text-2xl font-bold text-white tracking-tight">
                    Start Your 14-Day Free Trial
                  </h3>
                  <p className="text-xs text-slate-300">
                    Request a 14-day free trial for <span className="text-cyan-400 font-semibold">{selectedPlanForTrial.name}</span> ({selectedPlanForTrial.price}{selectedPlanForTrial.period}).
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={trialFormData.fullName}
                      onChange={(e) => setTrialFormData({ ...trialFormData, fullName: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Work Email *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={trialFormData.email}
                      onChange={(e) => setTrialFormData({ ...trialFormData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={trialFormData.phone}
                        onChange={(e) => setTrialFormData({ ...trialFormData, phone: e.target.value })}
                        placeholder="+44 20 7946 0192"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Company Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={trialFormData.company}
                        onChange={(e) => setTrialFormData({ ...trialFormData, company: e.target.value })}
                        placeholder="Nexus Enterprises"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                  <div className="text-white font-semibold">What happens next?</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Our team will contact you within 1 working day to set up your trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Full access to {selectedPlanForTrial.agents} &amp; {selectedPlanForTrial.minutes}</span>
                  </div>
                </div>

                {trialError && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{trialError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingTrial}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-950 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmittingTrial ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request 14-Day Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Trial Request Received</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thanks – our team will be in touch within 1 working day to set up your trial
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleCloseTrialModal}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    Close &amp; Return to Plans
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
