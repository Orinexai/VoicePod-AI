import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { ResourceCenterPage } from './pages/ResourceCenterPage';
import { ContactSalesPage } from './pages/ContactSalesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { Footer } from './components/Footer';
import { SidebarDrawer } from './components/SidebarDrawer';
import { CookieBanner } from './components/CookieBanner';
import { PhoneCall, ArrowUp } from 'lucide-react';

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

  // Dynamic SEO metadata updates per page (Yoast / RankMath equivalent)
  useEffect(() => {
    const seo = PAGE_SEO[currentPage] || PAGE_SEO.home;
    document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }
  }, [currentPage]);

  // Handle URL hash on initial load & hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.toLowerCase();

      // Security measure: disable and redirect any author archive or user enumeration URLs
      if (rawHash.includes('author') || rawHash.includes('hamdan') || rawHash.includes('user')) {
        window.location.hash = 'blog';
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
      if (legacyDemoPages.some((demo) => rawHash.includes(demo))) {
        if (rawHash.includes('blog')) {
          window.location.hash = 'blog';
          setCurrentPage('blog');
        } else if (rawHash.includes('service') || rawHash.includes('project') || rawHash.includes('about')) {
          window.location.hash = 'features';
          setCurrentPage('features');
        } else {
          window.location.hash = '';
          setCurrentPage('home');
        }
        return;
      }

      const hash = window.location.hash.replace('#', '').replace('/', '') as PageId;
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
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 font-['Sora',sans-serif]">
      
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

      {/* VoicePod Navigation Menu */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      {/* Dynamic Page Router */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'features' && <FeaturesPage onNavigate={handleNavigate} />}
        {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'tutorials' && <TutorialsPage />}
        {currentPage === 'resource-center' && <ResourceCenterPage />}
        {currentPage === 'contact-sales' && <ContactSalesPage />}
        {currentPage === 'privacy-policy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
        {currentPage === 'cookie-policy' && <CookiePolicyPage onNavigate={handleNavigate} />}
      </main>

      {/* Cookie Consent Banner */}
      <CookieBanner onNavigate={handleNavigate} />

      {/* Floating Action Controls: Back to Top & Contact Sales */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Back to Top Button */}
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

        {/* Contact Sales Action */}
        <button
          onClick={() => handleNavigate('contact-sales')}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-extrabold text-xs shadow-2xl shadow-cyan-500/40 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 border border-cyan-200 cursor-pointer pointer-events-auto"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Contact Sales</span>
        </button>
      </div>

      {/* Exact VoicePod Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
