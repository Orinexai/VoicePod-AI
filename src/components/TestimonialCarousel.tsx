import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/voicepodSiteData';
import { SvgAvatarMonogram } from './ModernSvgVisuals';

export const AVATAR_META: Array<{
  accent: 'cyan' | 'indigo' | 'teal';
  badge: string;
  metrics: string;
}> = [
  {
    accent: 'cyan',
    badge: 'Verified Legal Practice',
    metrics: '85% Inbound Handled'
  },
  {
    accent: 'indigo',
    badge: 'Enterprise CEO',
    metrics: 'Zero Missed Leads'
  },
  {
    accent: 'teal',
    badge: 'Global EdTech Founder',
    metrics: '50+ Languages'
  },
  {
    accent: 'cyan',
    badge: 'Operations Director',
    metrics: '70% Cost Reduction'
  },
  {
    accent: 'teal',
    badge: 'E-Commerce Founder',
    metrics: '< 60s Speed-to-Lead'
  },
  {
    accent: 'indigo',
    badge: 'Multi-Location Practice',
    metrics: 'Zero Double-Booking'
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalItems = TESTIMONIALS_DATA.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 45) {
        handleNext();
      } else if (diff < -45) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (isDragging.current && touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 45) {
        handleNext();
      } else if (diff < -45) {
        handlePrev();
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative select-none font-['Sora',sans-serif] rounded-3xl focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Top Carousel Controls */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-mono tabular-nums text-slate-400">
          Enterprise Client Outcomes · {totalItems} Global Reviews
        </span>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Touch & Drag Carousel Window */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
          }}
        >
          {TESTIMONIALS_DATA.map((t, idx) => {
            const meta = AVATAR_META[idx % AVATAR_META.length];
            return (
              <div
                key={idx}
                style={{ width: `${100 / itemsPerPage}%` }}
                className="shrink-0 p-2.5"
              >
                <div className="h-full rounded-2xl bg-[#0b0f1e] border border-slate-800/90 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 relative group overflow-hidden">
                  <Quote className="w-16 h-16 text-cyan-500/5 absolute -bottom-3 -right-3 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {t.country}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <SvgAvatarMonogram
                        name={t.author}
                        accent={meta.accent}
                        className="w-11 h-11 shrink-0"
                      />
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{t.author}</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <div className="text-xs text-slate-400 truncate max-w-[150px]">
                          {t.role}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block text-right">
                      <div className="text-[11px] font-mono tabular-nums text-cyan-400 font-semibold">
                        {meta.metrics}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">
                        {meta.badge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === dotIdx
                ? 'w-8 bg-cyan-400'
                : 'w-2 bg-slate-800 hover:bg-slate-700'
            }`}
            aria-label={`Jump to testimonial slide ${dotIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
