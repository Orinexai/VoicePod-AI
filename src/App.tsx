import React, { useState, useEffect, useRef, useCallback, Suspense, lazy } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { SidebarDrawer } from './components/SidebarDrawer';
import { CookieBanner } from './components/CookieBanner';
import { PageSkeleton } from './components/PageSkeleton';
import { SearchModal } from './components/SearchModal';
import { ArrowUp } from 'lucide-react';

const FeaturesPage = lazy(() => import('./pages/FeaturesPage').then((m) => ({ default: m.FeaturesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then((m) => ({ default: m.PricingPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then((m) => ({ default: m.FaqPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const TutorialsPage = lazy(() => import('./pages/TutorialsPage').then((m) => ({ default: m.TutorialsPage })));
const ResourceCenterPage = lazy(() => import('./pages/ResourceCenterPage').then((m) => ({ default: m.ResourceCenterPage })));
const ContactSalesPage = lazy(() => import('./pages/ContactSalesPage').then((m) => ({ default: m.ContactSalesPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage').then((m) => ({ default: m.CookiePolicyPage })));

const PAGE_SEO: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'VOICEPOD | Autonomous AI Voice Assistants for Business',
    description: 'Customize 24/7 AI Voice Assistants that handle inbound calls, run outbound campaigns, qualify leads, and schedule appointments with sub-300ms latency.'
  },
  features: {
    title: 'Features & Architecture | VOICEPOD',
    description: 'Explore ultra-low sub-300ms latency conversational voice technology, 50+ global languages, adaptive interruption handling, and two-way CRM sync.'
  },
  pricing: {
    title: 'Pricing & Plans | VOICEPOD',
    description: 'Transparent monthly subscription plans with bundled minutes, 14-day free trial, and enterprise custom voice cloning.'
  },
  faq: {
    title: 'Frequently Asked Questions | VOICEPOD',
    description: 'Everything you need to know about setting up VoicePod AI voice agents, PBX/SIP telephony integrations, and enterprise security.'
  },
  blog: {
    title: 'AI Voice Intelligence & Insights | VOICEPOD',
    description: 'Discover strategies, frameworks, and stories for modern businesses adopting conversational voice automation.'
  },
  tutorials: {
    title: 'Step-by-Step Video Tutorials | VOICEPOD',
    description: 'Hands-on practical guides for creating AI voice assistants, connecting calendar integrations, and configuring CRM webhooks.'
  },
  'resource-center': {
    title: 'Resource Center & Implementation Playbooks | VOICEPOD',
    description: 'Free comprehensive AI voice implementation playbooks, interactive ROI models, and developer API references.'
  },
  'contact-sales': {
    title: 'Contact Sales & Enterprise Solutions | VOICEPOD',
    description: 'Speak directly with our solutions engineering team to build custom enterprise voice agents for your organization.'
  },
  'privacy-policy': {
    title: 'Privacy Policy | VOICEPOD',
    description: 'Official privacy policy and UK GDPR data processing disclosures for Tech Future Solutions Ltd.'
  },
  'cookie-policy': {
    title: 'Cookie Policy | VOICEPOD',
    description: 'Detailed cookie compliance notice outlining essential, analytics, and functional cookies on voicepod.ai.'
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [pendingBlogId, setPendingBlogId] = useState<string | null>(null);
  const [pendingTutorialId, setPendingTutorialId] = useState<string | null>(null);
  const [isPageTransitioning, setIsPageTransitioning] = useState<boolean>(false);
  const transitionTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  // Global Cmd+K / Ctrl+K shortcut for real-time site search modal
  useEffect(() => {
    const handleGlobalSearchShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalSearchShortcut);
    return () => window.removeEventListener('keydown', handleGlobalSearchShortcut);
  }, []);

  // Track scroll progress for top slim indicator & back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
      setShowBackToTop(window.scrollY > 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Dynamic SEO metadata updates per page (canonical, OpenGraph, Twitter)
  useEffect(() => {
    const seo = PAGE_SEO[currentPage] || PAGE_SEO.home;
    const cleanPath = currentPage === 'home' ? '/' : `/${currentPage}`;
    const canonicalUrl = `${window.location.origin}${cleanPath}`;

    document.title = seo.title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
  }, [currentPage]);

  // Handle clean pathname routing (e.g. /pricing instead of /#pricing) + legacy hash redirects
  useEffect(() => {
    const validPages: PageId[] = [
      'home',
      'features',
      'pricing',
      'faq',
      'blog',
      'tutorials',
      'resource-center',
      'contact-sales',
      'privacy-policy',
      'cookie-policy'
    ];

    const resolveRoute = () => {
      const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      const rawHash = window.location.hash.toLowerCase();
      const combined = `${rawPath} ${rawHash}`;

      // Security measure: disable and redirect any author archive or user enumeration URLs
      if (combined.includes('author') || combined.includes('hamdan') || combined.includes('user')) {
        window.history.replaceState({ page: 'blog' }, '', '/blog');
        setCurrentPage('blog');
        return;
      }

      // Redirect legacy demo pages & Elementor template fragments
      const legacyDemoPages = [
        'sample-page',
        'home-2',
        'home-3',
        'blog-2',
        'project',
        'project-2',
        'team',
        'testimonial',
        'single-service',
        'single-project',
        'aivora_template',
        'header-1',
        'footer-1',
        'footer-2',
        'footer-2-2',
        'about-us'
      ];
      if (legacyDemoPages.some((demo) => combined.includes(demo))) {
        if (combined.includes('blog')) {
          window.history.replaceState({ page: 'blog' }, '', '/blog');
          setCurrentPage('blog');
        } else if (combined.includes('service') || combined.includes('project') || combined.includes('about')) {
          window.history.replaceState({ page: 'features' }, '', '/features');
          setCurrentPage('features');
        } else {
          window.history.replaceState({ page: 'home' }, '', '/');
          setCurrentPage('home');
        }
        return;
      }

      // Backwards compatibility: normalize legacy /#pricing hash URLs to /pricing
      if (rawHash) {
        const cleanHash = rawHash.replace(/^#\/?/, '').replace(/\/+$/, '') as PageId;
        if (validPages.includes(cleanHash)) {
          const targetPath = cleanHash === 'home' ? '/' : `/${cleanHash}`;
          window.history.replaceState({ page: cleanHash }, '', targetPath);
          setCurrentPage(cleanHash);
          return;
        }
      }

      const pathSlug = (rawPath.replace(/^\//, '') || 'home') as PageId;
      if (validPages.includes(pathSlug)) {
        setCurrentPage(pathSlug);
      } else {
        window.history.replaceState({ page: 'home' }, '', '/');
        setCurrentPage('home');
      }
    };

    const handlePopOrHash = () => {
      triggerSkeletonTransition();
      resolveRoute();
    };

    resolveRoute();
    window.addEventListener('popstate', handlePopOrHash);
    window.addEventListener('hashchange', handlePopOrHash);
    return () => {
      window.removeEventListener('popstate', handlePopOrHash);
      window.removeEventListener('hashchange', handlePopOrHash);
    };
  }, []);

  const triggerSkeletonTransition = () => {
    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
    }
    setIsPageTransitioning(true);
    transitionTimerRef.current = window.setTimeout(() => {
      setIsPageTransitioning(false);
      transitionTimerRef.current = null;
    }, 200);
  };

  const handleNavigate = (page: PageId) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState({ page }, '', targetPath);
    }
    if (page !== currentPage) {
      triggerSkeletonTransition();
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSearchResult = (page: PageId, itemId?: string) => {
    if (page === 'blog' && itemId) {
      setPendingBlogId(itemId);
    } else if (page === 'tutorials' && itemId) {
      setPendingTutorialId(itemId);
    }
    handleNavigate(page);
  };

  const consumePendingBlogId = useCallback(() => setPendingBlogId(null), []);
  const consumePendingTutorialId = useCallback(() => setPendingTutorialId(null), []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 font-['Sora',sans-serif]">
      {/* Keyboard Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-cyan-400 focus:text-slate-950 focus:font-bold focus:text-xs focus:shadow-2xl"
      >
        Skip to main content
      </a>

      {/* Slim Animated Brand-Cyan Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[70] bg-slate-900/20 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.9)] transition-[width] duration-150 ease-out origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Left Slide-out Sidebar Drawer (About Us, Capabilities, Direct Contact) */}
      <SidebarDrawer
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Real-Time Site Search Modal (Cmd+K / Ctrl+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* VoicePod Navigation Menu */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSidebar={() => setSidebarOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Dynamic Page Router with Code-Split Suspense & Skeleton Transitions */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        {isPageTransitioning ? (
          <PageSkeleton page={currentPage} />
        ) : (
          <Suspense fallback={<PageSkeleton page={currentPage} />}>
            <div key={currentPage} className="animate-page-enter">
              {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
              {currentPage === 'features' && <FeaturesPage onNavigate={handleNavigate} />}
              {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigate} />}
              {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
              {currentPage === 'blog' && (
                <BlogPage
                  initialArticleId={pendingBlogId}
                  onConsumeInitialArticle={consumePendingBlogId}
                />
              )}
              {currentPage === 'tutorials' && (
                <TutorialsPage
                  initialTutorialId={pendingTutorialId}
                  onConsumeInitialTutorial={consumePendingTutorialId}
                />
              )}
              {currentPage === 'resource-center' && <ResourceCenterPage />}
              {currentPage === 'contact-sales' && <ContactSalesPage />}
              {currentPage === 'privacy-policy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
              {currentPage === 'cookie-policy' && <CookiePolicyPage onNavigate={handleNavigate} />}
            </div>
          </Suspense>
        )}
      </main>

      {/* Cookie Consent Banner */}
      <CookieBanner
        onNavigate={handleNavigate}
        forceOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
      />

      {/* Floating Back to Top Control (offset above Typebot chat bubble) */}
      <div className="fixed bottom-24 right-6 z-40 pointer-events-none">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`group w-11 h-11 rounded-2xl bg-slate-900/90 hover:bg-cyan-950/80 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-cyan-200 backdrop-blur-md shadow-xl shadow-cyan-950/50 flex items-center justify-center transition-all duration-300 transform active:scale-90 pointer-events-auto cursor-pointer ${
            showBackToTop
              ? 'opacity-100 translate-y-0 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-1'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Back to top of page"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Exact VoicePod Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />

    </div>
  );
}
