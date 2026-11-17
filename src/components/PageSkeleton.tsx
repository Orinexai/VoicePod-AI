import React from 'react';
import { PageId } from './Navbar';

interface PageSkeletonProps {
  page: PageId;
}

const SkeletonBlock: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`skeleton-shimmer rounded-xl border border-slate-800/70 ${className}`} aria-hidden="true" />
);

const SectionHeaderSkeleton: React.FC = () => (
  <section className="py-16 bg-[#080b18] border-b border-slate-800 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
      <SkeletonBlock className="h-6 w-48 rounded-full" />
      <SkeletonBlock className="h-10 sm:h-12 w-full max-w-2xl" />
      <SkeletonBlock className="h-4 w-full max-w-xl" />
      <SkeletonBlock className="h-4 w-2/3 max-w-md" />
    </div>
  </section>
);

export const PageSkeleton: React.FC<PageSkeletonProps> = ({ page }) => {
  if (page === 'home') {
    return (
      <div className="space-y-0" role="status" aria-label="Loading VoicePod home content">
        {/* Hero Skeleton */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-circuit-glow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <SkeletonBlock className="h-7 w-72 rounded-full" />
                <div className="space-y-3">
                  <SkeletonBlock className="h-12 sm:h-14 w-full max-w-xl" />
                  <SkeletonBlock className="h-12 sm:h-14 w-4/5 max-w-lg" />
                </div>
                <div className="space-y-2.5 pt-1">
                  <SkeletonBlock className="h-4 w-full max-w-xl" />
                  <SkeletonBlock className="h-4 w-5/6 max-w-lg" />
                </div>
                <div className="flex flex-wrap gap-4 pt-3">
                  <SkeletonBlock className="h-12 w-52 rounded-xl" />
                  <SkeletonBlock className="h-12 w-36 rounded-xl" />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center space-y-4">
                <SkeletonBlock className="w-72 h-72 sm:w-80 sm:h-80 rounded-full" />
                <SkeletonBlock className="w-full max-w-sm h-28 rounded-2xl" />
              </div>
            </div>
          </div>

          <div className="mt-16 py-4 bg-slate-900/60 border-y border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-around gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonBlock key={i} className="h-4 w-32" />
              ))}
            </div>
          </div>
        </section>

        {/* Core Features 4-Column Skeleton */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3 mb-14">
            <SkeletonBlock className="h-6 w-64 rounded-full" />
            <SkeletonBlock className="h-10 w-full max-w-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden p-5 space-y-4">
                <SkeletonBlock className="h-36 w-full rounded-2xl" />
                <SkeletonBlock className="h-5 w-3/4" />
                <SkeletonBlock className="h-3.5 w-full" />
                <SkeletonBlock className="h-3.5 w-5/6" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (page === 'pricing') {
    return (
      <div className="pt-28 pb-20" role="status" aria-label="Loading pricing plans">
        <SectionHeaderSkeleton />
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-3xl p-7 border space-y-5 ${
                  i === 1
                    ? 'bg-slate-900/90 border-cyan-500/40 lg:-translate-y-3'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="space-y-2">
                  <SkeletonBlock className="h-7 w-28" />
                  <SkeletonBlock className="h-3.5 w-full" />
                </div>
                <div className="py-4 border-y border-slate-800 space-y-2">
                  <SkeletonBlock className="h-10 w-32" />
                  <SkeletonBlock className="h-3.5 w-40" />
                  <SkeletonBlock className="h-3 w-36" />
                </div>
                <div className="space-y-2.5">
                  {Array.from({ length: 6 }).map((__, j) => (
                    <SkeletonBlock key={j} className="h-3.5 w-full" />
                  ))}
                </div>
                <SkeletonBlock className="h-11 w-full rounded-xl mt-4" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (page === 'faq') {
    return (
      <div className="pt-28 pb-20" role="status" aria-label="Loading frequently asked questions">
        <SectionHeaderSkeleton />
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-5">
              <SkeletonBlock className="h-52 w-full rounded-2xl" />
              <SkeletonBlock className="h-5 w-48" />
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-5/6" />
              <SkeletonBlock className="h-11 w-full rounded-xl" />
            </div>
            <div className="lg:col-span-8 space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 flex items-center justify-between gap-4">
                  <SkeletonBlock className="h-5 w-3/4" />
                  <SkeletonBlock className="h-5 w-5 rounded-md shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'contact-sales') {
    return (
      <div className="pt-28 pb-20" role="status" aria-label="Loading contact sales form">
        <SectionHeaderSkeleton />
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <SkeletonBlock className="h-7 w-64" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
              <SkeletonBlock className="h-56 w-full rounded-2xl" />
              <SkeletonBlock className="h-48 w-full rounded-3xl" />
            </div>
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/60 border border-slate-800 p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SkeletonBlock className="h-11 w-full" />
                <SkeletonBlock className="h-11 w-full" />
                <SkeletonBlock className="h-11 w-full" />
                <SkeletonBlock className="h-11 w-full" />
                <SkeletonBlock className="h-11 w-full" />
                <SkeletonBlock className="h-11 w-full" />
              </div>
              <SkeletonBlock className="h-28 w-full" />
              <SkeletonBlock className="h-12 w-full rounded-xl" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'privacy-policy' || page === 'cookie-policy') {
    return (
      <div className="pt-28 pb-24" role="status" aria-label="Loading legal documentation">
        <SectionHeaderSkeleton />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <SkeletonBlock className="h-32 w-full rounded-2xl" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <SkeletonBlock className="h-6 w-56" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-11/12" />
              <SkeletonBlock className="h-4 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default rich card-grid skeleton for features, blog, tutorials, resource-center
  const columnsClass = page === 'resource-center' ? 'md:grid-cols-3' : 'md:grid-cols-2';
  const cardCount = page === 'resource-center' ? 6 : 4;

  return (
    <div className="pt-28 pb-20" role="status" aria-label="Loading page content">
      <SectionHeaderSkeleton />
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${columnsClass} gap-8`}>
          {Array.from({ length: cardCount }).map((_, i) => (
            <div key={i} className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden p-6 space-y-4">
              <SkeletonBlock className="h-48 w-full rounded-2xl" />
              <div className="flex items-center gap-3">
                <SkeletonBlock className="h-5 w-24 rounded-full" />
                <SkeletonBlock className="h-4 w-20" />
              </div>
              <SkeletonBlock className="h-6 w-4/5" />
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-5/6" />
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <SkeletonBlock className="h-4 w-28" />
                <SkeletonBlock className="h-4 w-5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
