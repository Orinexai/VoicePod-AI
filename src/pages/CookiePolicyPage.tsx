import React from 'react';
import { Cookie, Info, ArrowLeft, CheckCircle2, Shield } from 'lucide-react';
import { PageId } from '../components/Navbar';

interface CookiePolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onNavigate }) => {
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
            <Cookie className="w-3.5 h-3.5" />
            <span>Cookie Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Effective Date: March 2026 · Tech Future Solutions Ltd
          </p>
        </div>
      </section>

      {/* Main Cookie Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-slate-300 text-sm leading-relaxed font-light">
        
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>1. What Are Cookies?</span>
          </h2>
          <p>
            Cookies are small text files placed on your computer, tablet, or smartphone when you visit a website. They are widely used by service operators to make websites function efficiently, retain your preferences, and provide aggregated analytics to site administrators.
          </p>
          <p>
            This Cookie Policy explains how <strong className="text-white">Tech Future Solutions Ltd</strong> (registered in England and Wales, company number [NUMBER], registered office [ADDRESS]) utilizes cookies on voicepod.ai.
          </p>
        </section>

        {/* Categories of Cookies */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>2. Categories of Cookies We Use</span>
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white font-mono uppercase">A. Strictly Necessary / Essential Cookies</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">Always Active</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                These cookies are necessary for the basic operation of the website, such as page routing, load balancing, user authentication state, and session security. The website cannot function correctly without these cookies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white font-mono uppercase">B. Performance & Analytics Cookies</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">Optional (Consent Based)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                These cookies help us analyze visitor volume, geographic origins, and page navigation patterns so we can optimize load times, feature discovery, and responsiveness.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white font-mono uppercase">C. Functional & Preference Cookies</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">Optional</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Used to remember your UI choices, language settings, or whether you have previously accepted or declined the cookie consent notice.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Managing Cookies */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>3. How to Control or Delete Cookies</span>
          </h2>
          <p>
            You can modify your browser settings to refuse some or all cookies, or to alert you when a cookie is placed. Most browsers provide detailed guidance on cookie management in their "Settings" or "Preferences" menus:
          </p>
          <ul className="space-y-2 pl-4 list-disc marker:text-cyan-400 text-xs text-slate-300">
            <li>Google Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
            <li>Mozilla Firefox: Options &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection</li>
            <li>Apple Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
            <li>Microsoft Edge: Settings &gt; Site permissions &gt; Cookies and site data</li>
          </ul>
          <p className="text-xs text-slate-400 pt-2">
            Please note that blocking essential cookies may affect the proper loading or functionality of interactive site demos and customer forms.
          </p>
        </section>

        {/* Section 4: Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-5 bg-cyan-400 rounded-full" />
            <span>4. Contact Information</span>
          </h2>
          <p>
            If you have questions regarding our use of cookies or privacy practices, please contact our team at{' '}
            <a href="mailto:support@voicepod.ai" className="text-cyan-400 underline font-mono">
              support@voicepod.ai
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
};
