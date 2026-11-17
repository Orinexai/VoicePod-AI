import React from 'react';
import { Shield, Lock, FileText, Mail, Building2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { PageId } from '../components/Navbar';
import { ScrollReveal } from '../components/ScrollReveal';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 font-['Sora',sans-serif]">
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 w-fit mx-auto">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Effective Date: March 2026 · Tech Future Solutions Ltd
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-slate-300 text-sm leading-relaxed font-light">
        
        {/* Company Registration Notice */}
        <ScrollReveal variant="fade-up" className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <span>1. Data Controller Information</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            This Privacy Policy applies to the services and websites operated by <strong className="text-white">Tech Future Solutions Ltd</strong>, registered in England and Wales, company number 16669292, registered office 5 Brayford Square, London. E1 0SG ("we", "our", or "us").
          </p>
          <p className="text-xs sm:text-sm text-slate-300">
            For inquiries regarding our data handling or to contact our data protection representative, please write to{' '}
            <a href="mailto:support@voicepod.ai" className="text-cyan-400 underline font-mono">
              support@voicepod.ai
            </a>.
          </p>
        </ScrollReveal>

        {/* Section 2 */}
        <ScrollReveal as="section" variant="fade-up" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>2. Scope & Overview</span>
          </h2>
          <p>
            We take data protection seriously. This Privacy Policy outlines how Tech Future Solutions Ltd collects, processes, stores, and protects personal data when you visit our website (voicepod.ai), evaluate our AI voice solutions, communicate with our sales and support teams, or subscribe to our software services.
          </p>
        </ScrollReveal>

        {/* Section 3 */}
        <ScrollReveal as="section" variant="fade-up" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>3. Information We Collect</span>
          </h2>
          <p>We may collect and process the following categories of information:</p>
          <ul className="space-y-2.5 pl-4 list-disc marker:text-cyan-400">
            <li>
              <strong className="text-white">Contact & Business Information:</strong> Name, work email address, telephone number, job title, and company name provided through demo bookings, sales contact forms, or newsletter subscriptions.
            </li>
            <li>
              <strong className="text-white">Voice & Telephony Data:</strong> Call metadata (call duration, timestamp, caller ID) and call transcripts generated during customer communications or when interacting with demonstration voice agents.
            </li>
            <li>
              <strong className="text-white">Technical & Usage Data:</strong> IP address, browser type, device information, operating system, pages viewed, and session timestamps collected via essential and analytics cookies.
            </li>
          </ul>
        </ScrollReveal>

        {/* Section 4 */}
        <ScrollReveal as="section" variant="fade-up" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>4. Legal Basis for Processing (UK GDPR / DPA 2018)</span>
          </h2>
          <p>We process your personal information under the following lawful bases:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-white font-bold text-xs font-mono uppercase mb-1">Contractual Necessity</h4>
              <p className="text-xs text-slate-400">To deliver voice automation services, configure integrations, and manage your billing account.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-white font-bold text-xs font-mono uppercase mb-1">Legitimate Interests</h4>
              <p className="text-xs text-slate-400">To improve conversational accuracy, prevent system abuse, and communicate service updates.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-white font-bold text-xs font-mono uppercase mb-1">Consent</h4>
              <p className="text-xs text-slate-400">Where you voluntarily opt in to optional marketing newsletters or non-essential cookies.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-white font-bold text-xs font-mono uppercase mb-1">Legal Obligations</h4>
              <p className="text-xs text-slate-400">To comply with statutory accounting, taxation, and regulatory requirements in the United Kingdom.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Section 5 */}
        <ScrollReveal as="section" variant="fade-up" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>5. Security & Data Protection Measures</span>
          </h2>
          <p>
            We take data protection seriously. Please contact us at{' '}
            <a href="mailto:support@voicepod.ai" className="text-cyan-400 underline font-mono">
              support@voicepod.ai
            </a>{' '}
            for details of our security and data-protection measures, data processing addenda (DPA), or sub-processor registers.
          </p>
          <p>
            We enforce strict access control policies, encrypted communications, regular operational reviews, and role-based permissions across our engineering and customer infrastructure.
          </p>
        </ScrollReveal>

        {/* Section 6 */}
        <ScrollReveal as="section" variant="fade-up" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>6. Your Rights</span>
          </h2>
          <p>
            Under UK data protection legislation, you have the right to request access to your personal data, request rectification of inaccurate records, request erasure ("right to be forgotten"), object to processing, or request data portability.
          </p>
          <p>
            To exercise any of these rights, please email{' '}
            <a href="mailto:support@voicepod.ai" className="text-cyan-400 font-mono">
              support@voicepod.ai
            </a>
            . We respond to all verified statutory requests within 30 calendar days.
          </p>
        </ScrollReveal>

        {/* Section 7 */}
        <ScrollReveal as="section" variant="fade-up" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>7. Updates to This Policy</span>
          </h2>
          <p>
            We may periodically revise this Privacy Policy to reflect modifications to our telephony platforms or regulatory obligations. The revised version will be indicated by an updated "Effective Date" at the top of this document.
          </p>
        </ScrollReveal>

      </div>
    </div>
  );
};
