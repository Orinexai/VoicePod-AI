import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/voicepodSiteData';

// Custom 3D Avatar assets matching the futuristic cybernetic design language
export const AVATAR_3D_ASSETS = [
  {
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    holoColor: 'cyan',
    badge: 'Verified Legal Practice',
    metrics: '85% Inbound Calls Handled'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    holoColor: 'purple',
    badge: 'Enterprise CEO',
    metrics: 'Zero Missed Leads'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    holoColor: 'emerald',
    badge: 'Global EdTech Founder',
    metrics: '50+ Languages Supported'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    holoColor: 'cyan',
    badge: 'Operations Director',
    metrics: '70% Cost Reduction'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    holoColor: 'amber',
    badge: 'E-Commerce Founder',
    metrics: '< 60s Speed-to-Lead'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    holoColor: 'purple',
    badge: 'Multi-Location Practice',
    metrics: 'Zero Double-Booking'
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Touch / swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // Responsive items count based on window width
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

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  // Touch Swipe Handlers
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

  // Mouse Drag Handlers for Desktop
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

  return (
    <div
      className="relative select-none font-['Sora',sans-serif]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Carousel Navigation Buttons */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
            Enterprise Client Feedback ({totalItems} Global Reviews)
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Touch & Drag Carousel Window */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing rounded-3xl"
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
            const meta = AVATAR_3D_ASSETS[idx % AVATAR_3D_ASSETS.length];
            return (
              <div
                key={idx}
                style={{ width: `${100 / itemsPerPage}%` }}
                className="shrink-0 p-3"
              >
                <div className="h-full rounded-3xl bg-gradient-to-b from-[#0b0e1b] via-[#090c17] to-[#07090e] border border-slate-800/90 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 relative group overflow-hidden">
                  
                  {/* Subtle Background Watermark Quote */}
                  <Quote className="w-20 h-20 text-cyan-500/5 absolute -bottom-4 -right-4 pointer-events-none group-hover:text-cyan-500/10 transition-colors" />

                  <div>
                    {/* Top Row: 5 Stars + Verified Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current filter drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300">
                        {t.country}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-6 font-light">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Bottom: 3D Holographic Avatar + Author Information */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Stylized 3D Avatar Container with Hologram Ring */}
                      <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-500 via-teal-400 to-purple-500 shadow-md shadow-cyan-950/80 shrink-0 group-hover:scale-105 transition-transform">
                        <img
                          src={meta.avatar}
                          alt={t.author}
                          className="w-full h-full object-cover rounded-[14px] filter contrast-110 brightness-105"
                          loading="lazy"
                        />
                        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#090c17] flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        </span>
                      </div>

                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{t.author}</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <div className="text-xs text-slate-400 font-light truncate max-w-[150px]">
                          {t.role}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block text-right">
                      <div className="text-[10px] font-mono text-cyan-400 font-bold">{meta.metrics}</div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase">{meta.badge}</div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === dotIdx
                ? 'w-8 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                : 'w-2 bg-slate-800 hover:bg-slate-700'
            }`}
            aria-label={`Jump to testimonial slide ${dotIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
