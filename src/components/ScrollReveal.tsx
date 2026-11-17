import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant = 'fade-up' | 'slide-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -36px 0px',
  className = '',
  as = 'div'
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    if (typeof IntersectionObserver === 'undefined') return true;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return true;
    return false;
  });

  useEffect(() => {
    if (isRevealed) return;
    const node = ref.current;
    if (!node) return;

    const reveal = () => setIsRevealed(true);

    // Reveal immediately if already within initial viewport on mount
    const rect = node.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.96 && rect.bottom >= 0) {
      const rafId = window.requestAnimationFrame(reveal);
      return () => window.cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            reveal();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isRevealed, threshold, rootMargin]);

  const Component = as;

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      data-reveal={variant}
      data-revealed={isRevealed ? 'true' : 'false'}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal-base ${className}`}
    >
      {children}
    </Component>
  );
};
