import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Bookmark, Sparkles, Copy, Check, Calculator, ShieldCheck } from 'lucide-react';
import { ResourceArticle, RESOURCE_ARTICLES } from '../data/resourceArticlesData';
import { ROBOT_ASSETS } from '../data/voicepodSiteData';
import { MediaFrame } from './MediaFrame';
import { ScrollReveal } from './ScrollReveal';
import { SvgAvatarMonogram } from './ModernSvgVisuals';

interface ResourceArticleReaderProps {
  article: ResourceArticle;
  onBack: () => void;
  onSelectResource: (id: string) => void;
}

export const ResourceArticleReader: React.FC<ResourceArticleReaderProps> = ({
  article,
  onBack,
  onSelectResource
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // ROI Calculator interactive state
  const [inboundCallsPerMonth, setInboundCallsPerMonth] = useState<number>(350);
  const [missedCallPercent, setMissedCallPercent] = useState<number>(28);
  const [avgLeadValue, setAvgLeadValue] = useState<number>(450);

  // Checklist interactive state
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const handleCopyCode = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedCode(snippet);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Calculations for interactive ROI
  const missedCallsCount = Math.round((inboundCallsPerMonth * missedCallPercent) / 100);
  const recoveredBookings = Math.round(missedCallsCount * 0.42); // 42% conversion
  const monthlyRecoveredRevenue = recoveredBookings * avgLeadValue;
  const annualRecoveredRevenue = monthlyRecoveredRevenue * 12;
  const softwareCost = 449 * 12;
  const netAnnualProfit = annualRecoveredRevenue - softwareCost;

  // Other resource recommendations
  const otherResources = Object.values(RESOURCE_ARTICLES)
    .filter((res) => res.id !== article.id)
    .slice(0, 3);

  return (
    <article className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-['Sora',sans-serif]">
      
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Resources Catalog</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
              bookmarked
                ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
            <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
          </button>
        </div>
      </div>

      {/* Header Info */}
      <header className="py-10 space-y-5">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-wider">
            {article.tag}
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            {article.publishedDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-light">
          {article.subtitle}
        </p>

        {/* Author metadata card */}
        <div className="pt-2 flex items-center gap-3.5">
          <SvgAvatarMonogram name={article.author.name} accent="cyan" className="w-11 h-11 shrink-0" />
          <div>
            <div className="text-sm font-bold text-white">{article.author.name}</div>
            <div className="text-xs text-slate-400">{article.author.role}</div>
          </div>
        </div>
      </header>

      {/* Hero Banner Visual */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl mb-12 group">
        <MediaFrame
          src={article.heroBanner}
          fallbackSrc={ROBOT_ASSETS.bannerFallback}
          alt={article.title}
          className="w-full h-64 sm:h-96"
          imgClassName="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Key Metrics / Highlights Strip */}
      {article.stats && article.stats.length > 0 && (
        <section className="mb-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {article.stats.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 flex flex-col justify-between"
            >
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-2xl sm:text-3xl font-black text-white">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1">{s.detail}</div>
            </div>
          ))}
        </section>
      )}

      {/* Article Executive Overview */}
      <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0b0e1a] border border-cyan-500/20 shadow-lg relative">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Executive Abstract</span>
        </div>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
          {article.overview}
        </p>
      </section>

      {/* Interactive Tool: Embedded In-Browser ROI Calculator */}
      {article.interactiveType === 'roi-calculator' && (
        <section className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-900 border border-cyan-500/40 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Interactive In-Browser ROI Simulator</h2>
              <p className="text-xs text-slate-300">Adjust the parameters below to compute your business's financial recovery in real time.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Slider 1: Total monthly inbound calls */}
            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Monthly Inbound Calls</span>
                <span className="text-cyan-400 font-bold font-mono">{inboundCallsPerMonth.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={inboundCallsPerMonth}
                onChange={(e) => setInboundCallsPerMonth(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Typical practice: 200–800 calls</span>
            </div>

            {/* Slider 2: Current Missed Call Percentage */}
            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Estimated Missed Calls</span>
                <span className="text-purple-400 font-bold font-mono">{missedCallPercent}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="2"
                value={missedCallPercent}
                onChange={(e) => setMissedCallPercent(Number(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Industry average: 25%–35%</span>
            </div>

            {/* Slider 3: Average Lead / Customer Lifetime Value */}
            <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Average Value / Booking</span>
                <span className="text-emerald-400 font-bold font-mono">${avgLeadValue}</span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={avgLeadValue}
                onChange={(e) => setAvgLeadValue(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Dental/SaaS: $300–$1,200</span>
            </div>
          </div>

          {/* Real-Time Computed ROI Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center">
              <div className="text-[11px] font-mono text-cyan-300 uppercase">Recovered Missed Calls</div>
              <div className="text-3xl font-black text-white mt-1">+{missedCallsCount} <span className="text-xs text-cyan-400 font-normal">/ mo</span></div>
              <div className="text-[11px] text-slate-400 mt-1">~{recoveredBookings} booked appointments</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center">
              <div className="text-[11px] font-mono text-emerald-300 uppercase">Monthly Recovered Gross</div>
              <div className="text-3xl font-black text-emerald-400 mt-1">${monthlyRecoveredRevenue.toLocaleString()}</div>
              <div className="text-[11px] text-slate-400 mt-1">Direct from 24/7 AI response</div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-center">
              <div className="text-[11px] font-mono text-purple-300 uppercase">Projected Annual Upside</div>
              <div className="text-3xl font-black text-purple-300 mt-1">${annualRecoveredRevenue.toLocaleString()}</div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-1">Net: +${netAnnualProfit.toLocaleString()} / yr</div>
            </div>
          </div>
        </section>
      )}

      {/* Interactive Tool: Playbook Readiness Checklist */}
      {article.interactiveType === 'playbook-checklist' && (
        <section className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <div>
              <h2 className="text-lg font-bold text-white">Interactive Deployment Readiness Audit</h2>
              <p className="text-xs text-slate-300">Click each milestone as your team finishes audit checkpoints.</p>
            </div>
          </div>
          <div className="space-y-2.5 pt-2">
            {[
              'Audit inbound SIP trunks, toll-free lines, and peak call concurrency requirements.',
              'Define system prompt boundary rules, tone personality, and greeting scripts.',
              'Connect two-way calendar sync (Google Calendar / Microsoft Outlook) with buffer padding.',
              'Set up CRM webhook endpoints with HMAC SHA-256 validation for caller data synchronization.',
              'Configure fail-safe warm human transfer via SIP REFER with synthesized whisper summaries.'
            ].map((step, idx) => (
              <label
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={!!checkedItems[idx]}
                  onChange={() => setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                  className="mt-1 w-4 h-4 rounded text-cyan-400 focus:ring-cyan-400 accent-cyan-400 cursor-pointer"
                />
                <span className={`text-xs sm:text-sm ${checkedItems[idx] ? 'text-slate-200 line-through opacity-70' : 'text-slate-200'}`}>
                  {step}
                </span>
              </label>
            ))}
          </div>
        </section>
      )}

      {/* Main Sections */}
      <div className="space-y-12">
        {article.sections.map((section, idx) => (
          <ScrollReveal as="section" key={idx} variant="fade-up" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full inline-block" />
              <span>{section.title}</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {section.content}
            </p>

            {/* Bullet points */}
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="space-y-2.5 pl-2 pt-2">
                {section.bulletPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Callout box */}
            {section.callout && (
              <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1 my-4">
                <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{section.callout.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  {section.callout.text}
                </p>
              </div>
            )}

            {/* Custom Table Data */}
            {section.tableData && (
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 my-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950/80 border-b border-slate-800 text-cyan-400 font-mono text-[11px] uppercase tracking-wider">
                    <tr>
                      {section.tableData.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-light">
                    {section.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-3 text-slate-300 ${
                              cIdx === row.length - 1 ? 'font-semibold text-emerald-400' : ''
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Code Snippet with Copy Button */}
            {section.codeSnippet && (
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#060810] my-4 shadow-xl">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                  <span>Source Code</span>
                  <button
                    onClick={() => handleCopyCode(section.codeSnippet!)}
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {copiedCode === section.codeSnippet ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono text-cyan-200 overflow-x-auto leading-relaxed">
                  <code>{section.codeSnippet}</code>
                </pre>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>

      {/* Key Takeaways Box */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <ScrollReveal as="section" variant="slide-up" className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-cyan-950/30 border border-purple-500/40 space-y-4 shadow-xl">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Key Strategic Takeaways</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {article.keyTakeaways.map((takeaway, tIdx) => (
              <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">
                  {tIdx + 1}
                </span>
                <span className="leading-relaxed">{takeaway}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Recommended Other Resources */}
      <section className="mt-20 pt-12 border-t border-slate-800 space-y-6">
        <ScrollReveal variant="fade-up" className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">More Resources & Guides</h2>
          <button
            onClick={onBack}
            className="text-xs text-cyan-400 hover:underline cursor-pointer"
          >
            View All Resources →
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherResources.map((item, idx) => (
            <ScrollReveal key={item.id} variant="slide-up" delay={idx * 85} className="h-full">
              <div
                onClick={() => {
                  onSelectResource(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-full rounded-2xl bg-slate-900/80 border border-slate-800 p-5 hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 text-[10px] font-mono border border-slate-700">
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                  <span>Read Online Guide</span>
                  <span>→</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </article>
  );
};
