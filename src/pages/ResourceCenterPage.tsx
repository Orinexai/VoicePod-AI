import React, { useState } from 'react';
import { ArrowRight, BookOpen, Sparkles, Compass, Search } from 'lucide-react';
import { RESOURCES_DATA, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { RESOURCE_ARTICLES } from '../data/resourceArticlesData';
import { ResourceArticleReader } from '../components/ResourceArticleReader';

export const ResourceCenterPage: React.FC = () => {
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);
  const [filterTag, setFilterTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // If a resource is selected, render the full online blog-style reader
  if (selectedResourceId && RESOURCE_ARTICLES[selectedResourceId]) {
    return (
      <ResourceArticleReader
        article={RESOURCE_ARTICLES[selectedResourceId]}
        onBack={() => {
          setSelectedResourceId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectResource={(id) => {
          setSelectedResourceId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  const tags = ['All', 'Implementation', 'Financial Planning', 'Case Study', 'Research', 'Technical'];

  const filteredResources = RESOURCES_DATA.filter((res) => {
    const matchesTag = filterTag === 'All' || res.tag.toLowerCase() === filterTag.toLowerCase();
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const handleOpenArticle = (id: string) => {
    setSelectedResourceId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 font-['Sora',sans-serif]">
      
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Interactive Online Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            VOICEPOD Resources & Whitepapers
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed font-light">
            Read complete implementation playbooks, financial ROI models, healthcare clinical case studies, and API integration guides directly online.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, case studies, formulas..."
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Flagship Featured Playbook with 3D Robot Visual */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40 border border-cyan-500/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-cyan-600/10 blur-[110px] pointer-events-none" />

          <div className="lg:col-span-8 space-y-5 relative z-10 text-left">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider inline-block">
                Featured Flagship Playbook
              </span>
              <span className="text-xs font-mono text-cyan-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Read Online Free</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Complete AI Voice Implementation Playbook
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-light">
              A comprehensive blueprint for business owners and engineering leaders transitioning from manual phone trees to autonomous 24/7 AI voice workflows. Read the full step-by-step framework, conversation scripts, CRM webhook architectures, and security benchmarks directly in your browser.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenArticle('playbook')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-950 hover:scale-105 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Online Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center relative">
            <div className="relative w-full max-w-[260px] h-[260px] sm:h-[300px] flex items-center justify-center animate-float-robot">
              <div className="absolute w-[200px] h-[200px] bg-cyan-500/20 rounded-full blur-[60px] animate-pulse-aura" />
              <img
                src={ROBOT_ASSETS.hero}
                alt="VoicePod Playbook Guide Character"
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

      {/* Filter Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilterTag(t)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filterTag === t
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Resources Cards Grid (matching image_32da162a.png) */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              onClick={() => handleOpenArticle(res.id)}
              className="rounded-3xl bg-[#0b0e1b] border border-slate-800/90 p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 group cursor-pointer"
            >
              <div>
                {/* Top Badge & Format */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800/90 text-cyan-300 text-[11px] font-mono border border-cyan-500/20">
                    {res.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{res.format}</span>
                </div>

                {/* Purple Icon Container matching user screenshot */}
                <div className="w-11 h-11 rounded-2xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors leading-snug">
                  {res.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                  {res.description}
                </p>
              </div>

              {/* Bottom CTA Button matching user screenshot */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  className="w-full py-3 rounded-xl bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-300 text-slate-200 group-hover:text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 border border-slate-800 group-hover:border-cyan-300"
                >
                  <Compass className="w-4 h-4 text-cyan-400 group-hover:text-slate-950" />
                  <span>Access Asset (Read Online)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
