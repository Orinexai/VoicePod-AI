import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OFFICE_INFO, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { submitToWebhook } from '../utils/webhook';

export const ContactSalesPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    useCase: 'Inbound Customer Support & Triage',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitToWebhook({
        path: 'demo',
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        useCase: formData.useCase,
      });

      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f5d4', '#06b6d4', '#683BF2']
        });
      } catch {
        // ignore
      }
    } catch {
      setSubmitError('Unable to send your request right now. Please try again or email support@voicepod.ai.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact Sales — Let’s Start Creating Together!
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Ready to transform your phone operations? Talk directly with our AI solutions engineering team to build a tailored voice automation system.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Empower Your Business With VoicePod AI
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need a single 24/7 virtual receptionist or a high-concurrency multi-agent call center deployment, our team provides complete turnkey implementation.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Office Address</h3>
                  <p className="text-xs text-cyan-400 font-semibold mt-0.5">{OFFICE_INFO.name}</p>
                  <a
                    href={OFFICE_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-cyan-400 hover:underline transition-colors block"
                  >
                    {OFFICE_INFO.address}
                  </a>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">England and Wales · Registered Entity</p>
                </div>
              </div>

              {/* Office Location Interactive Map Widget */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-lg">
                <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Tech Future Solutions Ltd · Registered Office
                  </span>
                  <a
                    href={OFFICE_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    London, UK
                  </a>
                </div>
                <div className="relative h-56 w-full bg-[#0a0d17]">
                  <iframe
                    title="Tech Future Solutions Ltd Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9223146672093!2d-0.052997023120662554!3d51.51464121017445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876032b2e7cb155%3A0x8dacc773f4a77e37!2s5%20Brayford%20Sq%2C%20Stepney%20Green%2C%20London%20E1%200SG!5e0!3m2!1sen!2suk!4v1794942835568!5m2!1sen!2suk"
                    className="w-full h-full border-0 filter invert-[0.88] hue-rotate-180 contrast-[1.2] opacity-85 hover:opacity-100 transition-opacity"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                  <a
                    href={OFFICE_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md hover:border-cyan-400 transition-colors"
                  >
                    📍 Tech Future Solutions Ltd
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Email Address</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Get in Touch!</p>
                  <a href={`mailto:${OFFICE_INFO.email}`} className="text-xs text-cyan-400 font-mono hover:underline">
                    {OFFICE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* 3D AI Robot Assistant Visual Card */}
            <div className="rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-6 relative overflow-hidden shadow-xl shadow-cyan-950/30">
              <div className="relative w-full h-52 flex items-center justify-center animate-float-robot">
                <div className="absolute w-[180px] h-[180px] bg-cyan-500/20 rounded-full blur-[50px] animate-pulse-aura" />
                <img
                  src={ROBOT_ASSETS.hero}
                  alt="VoicePod AI Concierge"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = ROBOT_ASSETS.avatarFallback;
                  }}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(6,182,212,0.45)] hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center pt-2">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Solutions Engineering Team Ready</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono">
                <ShieldCheck className="w-4 h-4" />
                Data Protection & Privacy Notice
              </div>
              <p className="text-slate-300 leading-relaxed font-light">
                We take data protection seriously. Please contact us at{' '}
                <a href="mailto:support@voicepod.ai" className="text-cyan-400 underline font-mono">
                  support@voicepod.ai
                </a>{' '}
                for details of our security and data-protection measures.
              </p>
              <p className="text-[11px] text-slate-500 font-mono pt-1">
                {OFFICE_INFO.legalEntity}.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 shadow-2xl relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="David"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Vance"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Realty Corp"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Primary Objective</label>
                      <select
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/60"
                      >
                        <option>Inbound Customer Support & Triage</option>
                        <option>Outbound Speed-to-Lead Qualification</option>
                        <option>Appointment Scheduling & Calendar Sync</option>
                        <option>Custom Telephony & High Concurrency</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message / Workflows You Wish to Automate</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your current call volume, CRM, and required integrations..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 resize-none leading-relaxed"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-950 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message to Sales Team</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-400 font-semibold">{formData.firstName}</span>. An enterprise representative has received your request and will reach out to <span className="text-white font-mono">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
