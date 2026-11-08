import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, X, PhoneCall, User, Mail, Building } from 'lucide-react';
import { PRICING_DATA, PricingTier, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { PageId } from '../components/Navbar';

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

  const handlePlanCta = (tier: PricingTier) => {
    if (tier.id === 'enterprise') {
      onNavigate('contact-sales');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setSelectedPlanForTrial(tier);
      setTrialSuccess(false);
    }
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrialSuccess(true);
  };

  const handleCloseTrialModal = () => {
    setSelectedPlanForTrial(null);
    setTrialSuccess(false);
    setTrialFormData({ fullName: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="pt-28 pb-20 font-['Sora',sans-serif]">
      
      {/* 1. Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
            Transparent Subscription & Usage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Flexible Pricing Built To Scale With Your Business
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed font-light">
            Starter, Pro and Scale plans include a 14-day risk-free trial, two-way calendar sync, CRM integrations, and 50+ global languages.
          </p>
        </div>
      </section>

      {/* 2. Pricing Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {PRICING_DATA.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 flex flex-col justify-between hover-lift group transition-all duration-300 relative ${
                tier.popular
                  ? 'bg-gradient-to-b from-slate-900 via-[#0a0f1e] to-slate-950 border-2 border-cyan-500/70 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:border-cyan-400 hover:shadow-[0_0_55px_rgba(6,182,212,0.45)] lg:-translate-y-3'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_15px_35px_-5px_rgba(6,182,212,0.25)]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase bg-cyan-400 text-slate-950 shadow-md">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-400 min-h-[34px] leading-relaxed mb-6 font-light">
                  {tier.subtitle}
                </p>

                <div className="pb-5 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">{tier.price}</span>
                    <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mt-2 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{tier.agents}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{tier.minutes}</div>
                </div>

                <div className="py-5 space-y-2.5">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Included Features:</div>
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
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 hover:from-cyan-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-[1.02]'
                      : tier.id === 'enterprise'
                      ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/40'
                      : 'bg-cyan-950/80 hover:bg-cyan-900/90 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400'
                  }`}
                >
                  <span>{tier.id === 'enterprise' ? 'Contact Sales' : `Start 14-Day Trial (${tier.name})`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Highlights Strip with 3D Robot Visual */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950 border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-cyan-600/10 blur-[100px] pointer-events-none" />

          <div className="lg:col-span-8 space-y-4 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-mono border border-cyan-500/40">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>ENTERPRISE & HIGH VOLUME CUSTOM ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need custom telephony infrastructure or 10,000+ daily call concurrency?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-light">
              We offer bespoke dedicated SIP trunking, dedicated telephony infrastructure, custom fine-tuning on your knowledge base, and SLA response guarantees.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> 99.99% Guaranteed SLA
              </span>
              <span>✓ Dedicated Engineering Support</span>
              <span>✓ Custom Voice Cloning</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact-sales')}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer shadow-lg shadow-cyan-950 hover:scale-105 transition-all"
              >
                Talk to Enterprise Team
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center relative">
            <div className="relative w-full max-w-[260px] h-[260px] sm:h-[300px] flex items-center justify-center animate-float-robot">
              <div className="absolute w-[200px] h-[200px] bg-purple-600/20 rounded-full blur-[60px] animate-pulse-aura" />
              <img
                src={ROBOT_ASSETS.hero}
                alt="VoicePod Enterprise AI Assistant"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ROBOT_ASSETS.avatarFallback;
                }}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(6,182,212,0.45)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 14-Day Free Trial Account Setup Modal (Item 14) */}
      {selectedPlanForTrial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0c0f1d] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              onClick={handleCloseTrialModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!trialSuccess ? (
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Selected Plan: {selectedPlanForTrial.name}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Start Your 14-Day Free Trial
                  </h3>
                  <p className="text-xs text-slate-300 font-light">
                    Instant setup for <span className="text-cyan-400 font-semibold">{selectedPlanForTrial.name}</span> ({selectedPlanForTrial.price}{selectedPlanForTrial.period}). No credit card required to start.
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
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
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
                        <span>Phone (For AI Test Call) *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={trialFormData.phone}
                        onChange={(e) => setTrialFormData({ ...trialFormData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
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

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <div className="text-white font-semibold">What happens next?</div>
                  <div>✓ Instant dashboard access & API keys</div>
                  <div>✓ Receive your first inbound test call within 2 minutes</div>
                  <div>✓ Full access to {selectedPlanForTrial.agents} & {selectedPlanForTrial.minutes}</div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-950 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Activate Free 14-Day Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Trial Account Activated!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed font-light">
                  Welcome aboard, <span className="text-cyan-400 font-semibold">{trialFormData.fullName}</span>! Your 14-day free trial on the <strong className="text-white">{selectedPlanForTrial.name}</strong> has been provisioned. Login instructions have been sent to <span className="text-white font-mono">{trialFormData.email}</span>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleCloseTrialModal}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    Close & Return to Plans
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
