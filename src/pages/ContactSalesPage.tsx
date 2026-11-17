import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OFFICE_INFO, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { submitToWebhook } from '../utils/webhook';
import { MediaFrame } from '../components/MediaFrame';
import { ScrollReveal } from '../components/ScrollReveal';
import { SvgShieldGuardIcon, SvgTelephonyNodeIcon } from '../components/ModernSvgVisuals';

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
        useCase: formData.useCase
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
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400">
            <SvgTelephonyNodeIcon className="w-5 h-5" />
            <span>Solutions Engineering &amp; Enterprise Sales</span>
          </div>
          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-black text-white tracking-tight [text-wrap:balance]">
            Contact Sales — Let&apos;s Build Your Voice Pipeline
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Ready to automate your phone operations? Speak directly with our engineering team to design a custom AI voice system for your business.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office & Contact Info */}
          <ScrollReveal variant="fade-up" className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                Partner With VoicePod Engineering
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need a 24/7 virtual receptionist or high-concurrency call center deployment, our team handles end-to-end architecture and integration.
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
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    England and Wales · Registered Entity
                  </p>
                </div>
              </div>

              {/* Office Location Interactive Map Widget */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-lg">
                <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-300">
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
                    className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md hover:border-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>Tech Future Solutions Ltd</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Email Address</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Direct Engineering Desk</p>
                  <a href={`mailto:${OFFICE_INFO.email}`} className="text-xs text-cyan-400 font-mono hover:underline">
                    {OFFICE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* London Office Visual Showcase Card */}
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-lg">
              <div className="h-48 w-full relative">
                <MediaFrame
                  src={ROBOT_ASSETS.concierge}
                  fallbackSrc={ROBOT_ASSETS.bannerFallback}
                  alt="VoicePod London Solutions Engineering Studio"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-200">
                  <span>London Solutions Team</span>
                  <span className="text-cyan-300">24h Response SLA</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono">
                <SvgShieldGuardIcon className="w-5 h-5" />
                <span>Data Protection &amp; Privacy Notice</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
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
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal variant="slide-up" delay={100} className="lg:col-span-7">
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
                        placeholder="+44 20 7946 0192"
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
                        <option>Inbound Customer Support &amp; Triage</option>
                        <option>Outbound Speed-to-Lead Qualification</option>
                        <option>Appointment Scheduling &amp; Calendar Sync</option>
                        <option>Custom Telephony &amp; High Concurrency</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Message / Workflows You Wish to Automate
                    </label>
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
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-950 transition-all cursor-pointer"
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
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
