import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Calendar, Clock, BookOpen, X } from 'lucide-react';
import { BLOGS_DATA, BlogPost, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { useDialogA11y } from '../hooks/useDialogA11y';
import { MediaFrame } from '../components/MediaFrame';
import { ScrollReveal } from '../components/ScrollReveal';
import { SvgVoiceCoreIcon } from '../components/ModernSvgVisuals';

interface BlogPageProps {
  initialArticleId?: string | null;
  onConsumeInitialArticle?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  initialArticleId,
  onConsumeInitialArticle
}) => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const articleModalRef = useRef<HTMLDivElement | null>(null);
  useDialogA11y(Boolean(activeArticle), () => setActiveArticle(null), articleModalRef);

  useEffect(() => {
    if (!initialArticleId) return;
    const match = BLOGS_DATA.find((post) => post.id === initialArticleId);
    if (match) {
      setActiveArticle(match);
    }
    onConsumeInitialArticle?.();
  }, [initialArticleId, onConsumeInitialArticle]);

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400">
            <SvgVoiceCoreIcon className="w-5 h-5" />
            <span>VoicePod Insights &amp; Intelligence</span>
          </div>
          <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-black text-white tracking-tight [text-wrap:balance]">
            Strategies and Solutions for Modern Voice Automation
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Your hub for smart reads on artificial intelligence, voice automation, and real-time customer journeys.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOGS_DATA.map((post, idx) => (
            <ScrollReveal key={post.id} variant="slide-up" delay={idx * 90} className="h-full">
              <article
                role="button"
                tabIndex={0}
                aria-label={`Read article: ${post.title}`}
                onClick={() => setActiveArticle(post)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveArticle(post);
                  }
                }}
                className="h-full rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="h-60 w-full overflow-hidden relative border-b border-slate-800/80">
                    <MediaFrame
                      src={post.image}
                      fallbackSrc={ROBOT_ASSETS.bannerFallback}
                      alt={post.title}
                      className="w-full h-full"
                      imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className="text-cyan-300">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {post.date}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
        >
          <div
            ref={articleModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl overflow-y-auto space-y-6 focus:outline-none"
          >
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              aria-label="Close article"
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase">{activeArticle.category}</span>
              <h2 id="blog-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">{activeArticle.title}</h2>
              <div className="text-xs text-slate-400 font-mono">{activeArticle.date} · {activeArticle.readTime}</div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ROBOT_ASSETS.bannerFallback;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">{activeArticle.excerpt}</p>
              <p>
                Modern businesses that connect conversational AI voice models directly to instant messaging channels like SMS and WhatsApp achieve up to 3.4x higher appointment confirmation rates. Instead of leaving passive voicemails, automated multi-channel sequences trigger an instant text with a calendar link the moment a customer hangs up.
              </p>
              <p>
                VoicePod enables zero-latency bidirectional triggers: when a caller completes a phone qualification with an AI agent, the conversation summary, booking code, and next steps are dispatched immediately through Twilio or WhatsApp Business API.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">Published by VoicePod Engineering</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
