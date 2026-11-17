import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, Search } from 'lucide-react';
import { RESOURCES_DATA, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { RESOURCE_ARTICLES } from '../data/resourceArticlesData';
import { ResourceArticleReader } from '../components/ResourceArticleReader';
import { MediaFrame } from '../components/MediaFrame';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  SvgVoiceCoreIcon,
  SvgAnalyticsPulseIcon,
  SvgWorkflowCalendarIcon,
  SvgNeuralSyncIcon,
  SvgGlobalDialectIcon,
  SvgShieldGuardIcon
} from '../components/ModernSvgVisuals';

export const ResourceCenterPage: React.FC = () => {
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);
  const [filterTag, setFilterTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const renderResourceSvg = (id: string) => {
    switch (id) {
      case 'playbook':
        return <SvgShieldGuardIcon className="w-6 h-6" />;
      case 'roi-template':
        return <SvgAnalyticsPulseIcon className="w-6 h-6" />;
      case 'real-estate-case':
        return <SvgWorkflowCalendarIcon className="w-6 h-6" />;
      case 'saas-case':
        return <SvgVoiceCoreIcon className="w-6 h-6" />;
      case 'industry-report':
        return <SvgGlobalDialectIcon className="w-6 h-6" />;
      case 'crm-scripts':
      default:
        return <SvgNeuralSyncIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="pt-28 pb-20 font-['Sora',sans-serif]">
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400">
            <SvgNeuralSyncIcon className="w-5 h-5" />
            <span>Interactive Online Knowledge Base</span>
          </div>
          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-black text-white tracking-tight [text-wrap:balance]">
            VOICEPOD Resources &amp; Whitepapers
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Read complete implementation playbooks, financial ROI models, industry case studies, and API integration guides directly online.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              aria-label="Search guides, case studies, and API documentation"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, case studies, formulas..."
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Flagship Featured Playbook with Generated Workspace Visual */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slide-up">
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="text-xs font-mono text-cyan-400">
              Featured Flagship Playbook · Read Online Free
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-wrap:balance]">
              Complete AI Voice Implementation Playbook
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              A comprehensive blueprint for business owners and engineering leaders transitioning from manual phone trees to autonomous 24/7 AI voice workflows.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenArticle('playbook')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Online Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 sm:h-72 relative">
              <MediaFrame
                src={ROBOT_ASSETS.playbookFeatured}
                fallbackSrc={ROBOT_ASSETS.bannerFallback}
                alt="VoicePod Implementation Playbook Architecture"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-950/85 border border-slate-800 backdrop-blur-sm">
                <img
                  src={ROBOT_ASSETS.brandMarkPng}
                  alt="VOICEPOD"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[11px] font-mono text-cyan-300">Engineering Playbook</span>
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Filter Category Tabs (Interactive Controls) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl w-fit max-w-full overflow-x-auto scrollbar-none">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilterTag(t)}
              aria-pressed={filterTag === t}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                filterTag === t
                  ? 'bg-cyan-400 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Resources Cards Grid */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res, idx) => (
            <ScrollReveal key={res.id} variant="slide-up" delay={idx * 75} className="h-full">
              <div
                onClick={() => handleOpenArticle(res.id)}
                className="h-full rounded-2xl bg-[#0b0e1b] border border-slate-800/90 p-7 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-4">
                    <span className="text-cyan-300">{res.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{res.format}</span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 transition-colors">
                    {renderResourceSvg(res.id)}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenArticle(res.id);
                    }}
                    className="w-full py-3 rounded-xl bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-300 text-slate-200 group-hover:text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 border border-slate-800 group-hover:border-cyan-300 cursor-pointer whitespace-nowrap"
                  >
                    <Compass className="w-4 h-4 text-cyan-400 group-hover:text-slate-950" />
                    <span>Read Online Guide</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};
