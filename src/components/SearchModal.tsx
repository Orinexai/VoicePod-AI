import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  X,
  ArrowRight,
  Cpu,
  BookOpen,
  PlayCircle,
  Sparkles,
  CornerDownLeft
} from 'lucide-react';
import { PageId } from './Navbar';
import {
  CORE_FEATURES,
  PILLAR_CAPABILITIES,
  SOLUTIONS_PROJECTS,
  BLOGS_DATA,
  TUTORIALS_DATA
} from '../data/voicepodSiteData';
import { useDialogA11y } from '../hooks/useDialogA11y';

export type SearchCategory = 'all' | 'features' | 'blog' | 'tutorials';

interface SearchIndexItem {
  uid: string;
  itemId?: string;
  page: PageId;
  category: Exclude<SearchCategory, 'all'>;
  categoryLabel: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  keywords: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (page: PageId, itemId?: string) => void;
}

const QUICK_QUERIES = ['Inbound', 'Custom Voices', 'CRM', 'WhatsApp', 'Real Estate', 'Latency'];

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function HighlightText({ text, query }: { text: string; query: string }) {
  const terms = query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 0);

  if (terms.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, idx) => {
        const isMatch = terms.some((t) => part.toLowerCase() === t.toLowerCase());
        return isMatch ? (
          <mark
            key={idx}
            className="bg-cyan-400/25 text-cyan-200 rounded px-0.5 font-semibold"
          >
            {part}
          </mark>
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        );
      })}
    </>
  );
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchCategory>('all');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const resultsContainerRef = useRef<HTMLDivElement | null>(null);

  useDialogA11y(isOpen, onClose, modalRef);

  // Build unified index across Features, Blog Posts, and Tutorials
  const searchIndex = useMemo<SearchIndexItem[]>(() => {
    const featureItems: SearchIndexItem[] = [
      ...CORE_FEATURES.map((feat) => ({
        uid: `feature-${feat.id}`,
        page: 'features' as PageId,
        category: 'features' as const,
        categoryLabel: 'Feature',
        tag: feat.tag,
        title: feat.title,
        description: feat.description,
        meta: feat.bullets.slice(0, 2).join(' · '),
        keywords: `${feat.title} ${feat.tag} ${feat.description} ${feat.bullets.join(' ')}`
      })),
      ...PILLAR_CAPABILITIES.map((pillar, idx) => ({
        uid: `pillar-${idx}`,
        page: 'features' as PageId,
        category: 'features' as const,
        categoryLabel: 'Feature',
        tag: 'Architecture Pillar',
        title: pillar.title,
        description: pillar.description,
        meta: 'Core Platform Capability',
        keywords: `${pillar.title} ${pillar.description} architecture capability`
      })),
      ...SOLUTIONS_PROJECTS.map((sol, idx) => ({
        uid: `solution-${idx}`,
        page: 'features' as PageId,
        category: 'features' as const,
        categoryLabel: 'Feature',
        tag: sol.tag,
        title: sol.title,
        description: sol.description,
        meta: sol.metrics,
        keywords: `${sol.title} ${sol.tag} ${sol.description} ${sol.metrics} solution`
      }))
    ];

    const blogItems: SearchIndexItem[] = BLOGS_DATA.map((post) => ({
      uid: `blog-${post.id}`,
      itemId: post.id,
      page: 'blog' as PageId,
      category: 'blog' as const,
      categoryLabel: 'Blog',
      tag: post.category,
      title: post.title,
      description: post.excerpt,
      meta: `${post.date} · ${post.readTime}`,
      keywords: `${post.title} ${post.category} ${post.excerpt} ${post.date} blog article`
    }));

    const tutorialItems: SearchIndexItem[] = TUTORIALS_DATA.map((tut) => ({
      uid: `tutorial-${tut.id}`,
      itemId: tut.id,
      page: 'tutorials' as PageId,
      category: 'tutorials' as const,
      categoryLabel: 'Tutorial',
      tag: tut.category,
      title: tut.title,
      description: tut.description,
      meta: `${tut.level} · ${tut.duration} · ${tut.stepsCount} steps`,
      keywords: `${tut.title} ${tut.category} ${tut.level} ${tut.description} tutorial guide`
    }));

    return [...featureItems, ...blogItems, ...tutorialItems];
  }, []);

  // Filter items by search query (ignoring category tab so tab counts stay accurate)
  const queryMatches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchIndex;
    const terms = normalized.split(/\s+/).filter(Boolean);
    return searchIndex.filter((item) => {
      const haystack = item.keywords.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [query, searchIndex]);

  // Apply category filter tab
  const filteredResults = useMemo(() => {
    if (activeTab === 'all') return queryMatches;
    return queryMatches.filter((item) => item.category === activeTab);
  }, [queryMatches, activeTab]);

  // Category counts for current query
  const counts = useMemo(() => {
    return {
      all: queryMatches.length,
      features: queryMatches.filter((i) => i.category === 'features').length,
      blog: queryMatches.filter((i) => i.category === 'blog').length,
      tutorials: queryMatches.filter((i) => i.category === 'tutorials').length
    };
  }, [queryMatches]);

  // Reset search state and focus input when opened
  useEffect(() => {
    if (!isOpen) return;
    setHighlightedIndex(0);
    const t = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 20);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  // Keep highlighted index valid when results change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [query, activeTab]);

  // Scroll highlighted list item into view during keyboard ArrowUp/ArrowDown
  useEffect(() => {
    if (!isOpen || !resultsContainerRef.current) return;
    const activeEl = resultsContainerRef.current.querySelector<HTMLElement>(
      `[data-result-index="${highlightedIndex}"]`
    );
    activeEl?.scrollIntoView({ block: 'nearest' });
  }, [highlightedIndex, isOpen]);

  if (!isOpen) return null;

  const handleSelectItem = (item: SearchIndexItem) => {
    onSelectResult(item.page, item.itemId);
    onClose();
  };

  const handleKeyDownInModal = (e: React.KeyboardEvent) => {
    if (filteredResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % filteredResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === 'Enter' && document.activeElement === inputRef.current) {
      e.preventDefault();
      const target = filteredResults[highlightedIndex];
      if (target) {
        handleSelectItem(target);
      }
    }
  };

  const tabs: { id: SearchCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Results', count: counts.all },
    { id: 'features', label: 'Features', count: counts.features },
    { id: 'blog', label: 'Blog', count: counts.blog },
    { id: 'tutorials', label: 'Tutorials', count: counts.tutorials }
  ];

  const getCategoryIcon = (category: Exclude<SearchCategory, 'all'>) => {
    if (category === 'features') return <Cpu className="w-4 h-4 text-cyan-400" />;
    if (category === 'blog') return <BookOpen className="w-4 h-4 text-purple-400" />;
    return <PlayCircle className="w-4 h-4 text-emerald-400" />;
  };

  const getBadgeStyle = (category: Exclude<SearchCategory, 'all'>) => {
    if (category === 'features') {
      return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30';
    }
    if (category === 'blog') {
      return 'bg-purple-950/80 text-purple-300 border-purple-500/30';
    }
    return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30';
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-search-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownInModal}
        className="w-full max-w-2xl rounded-3xl bg-[#0c1022] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col max-h-[80vh] focus:outline-none"
      >
        <h2 id="site-search-title" className="sr-only">
          Search VoicePod Features, Blog Posts, and Tutorials
        </h2>

        {/* Top Search Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800/90 flex items-center gap-3 bg-slate-900/70">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features, blog articles, or tutorials..."
            aria-label="Search features, blog posts, and tutorials"
            autoComplete="off"
            spellCheck={false}
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Clear search query"
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-mono transition-colors cursor-pointer shrink-0"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search modal"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Filter search results by content type"
          className="px-4 sm:px-5 py-2.5 border-b border-slate-800/70 bg-slate-950/60 flex items-center gap-2 overflow-x-auto"
        >
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-cyan-400/20 text-cyan-200' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search Chips when empty */}
        {!query.trim() && (
          <div className="px-4 sm:px-5 py-2.5 border-b border-slate-800/50 bg-[#0a0e1d] flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mr-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Popular:
            </span>
            {QUICK_QUERIES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  inputRef.current?.focus();
                }}
                className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-[11px] text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        )}

        {/* Search Results Clickable List */}
        <div
          ref={resultsContainerRef}
          role="listbox"
          aria-label="Search results"
          className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1.5"
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => {
              const isHighlighted = idx === highlightedIndex;
              return (
                <button
                  key={item.uid}
                  type="button"
                  role="option"
                  aria-selected={isHighlighted}
                  data-result-index={idx}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  onClick={() => handleSelectItem(item)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-150 flex items-start gap-3.5 group cursor-pointer ${
                    isHighlighted
                      ? 'bg-cyan-950/40 border-cyan-500/50 shadow-lg shadow-cyan-950/20'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    {getCategoryIcon(item.category)}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${getBadgeStyle(
                          item.category
                        )}`}
                      >
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 truncate">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      <HighlightText text={item.title} query={query} />
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      <HighlightText text={item.description} query={query} />
                    </p>

                    <div className="text-[11px] font-mono text-slate-400 pt-0.5">
                      {item.meta}
                    </div>
                  </div>

                  <div className="self-center shrink-0 pl-1">
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isHighlighted
                          ? 'text-cyan-400 translate-x-0.5'
                          : 'text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>
                </button>
              );
            })
          ) : (
            <div className="py-12 px-4 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                <Search className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-white">
                  No matches found for &ldquo;{query.trim()}&rdquo;
                </p>
                <p className="text-xs text-slate-400">
                  Try another keyword like &ldquo;voices&rdquo;, &ldquo;inbound&rdquo;, &ldquo;CRM&rdquo;, or switch tabs.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveTab('all');
                  inputRef.current?.focus();
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 transition-colors cursor-pointer"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          )}
        </div>

        {/* Keyboard Navigation Hints Footer */}
        <div className="px-4 sm:px-5 py-2.5 border-t border-slate-800/80 bg-slate-950/90 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                ↑↓
              </kbd>
              Navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 inline-flex items-center">
                <CornerDownLeft className="w-3 h-3" />
              </kbd>
              Open
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                Esc
              </kbd>
              Close
            </span>
          </div>
          <span>
            {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'}
          </span>
        </div>
      </div>
    </div>
  );
};
