import React, { useState, useRef, useEffect } from 'react';
import { PlayCircle, Clock, ArrowRight, X } from 'lucide-react';
import { TUTORIALS_DATA, TutorialItem, ROBOT_ASSETS } from '../data/voicepodSiteData';
import { useDialogA11y } from '../hooks/useDialogA11y';
import { MediaFrame } from '../components/MediaFrame';
import { ScrollReveal } from '../components/ScrollReveal';
import { SvgWorkflowCalendarIcon } from '../components/ModernSvgVisuals';

interface TutorialsPageProps {
  initialTutorialId?: string | null;
  onConsumeInitialTutorial?: () => void;
}

export const TutorialsPage: React.FC<TutorialsPageProps> = ({
  initialTutorialId,
  onConsumeInitialTutorial
}) => {
  const [activeTutorial, setActiveTutorial] = useState<TutorialItem | null>(null);
  const [onboardingRequested, setOnboardingRequested] = useState(false);
  const tutorialModalRef = useRef<HTMLDivElement | null>(null);
  useDialogA11y(Boolean(activeTutorial), () => setActiveTutorial(null), tutorialModalRef);

  useEffect(() => {
    if (!initialTutorialId) return;
    const match = TUTORIALS_DATA.find((tut) => tut.id === initialTutorialId);
    if (match) {
      setActiveTutorial(match);
    }
    onConsumeInitialTutorial?.();
  }, [initialTutorialId, onConsumeInitialTutorial]);

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400">
            <SvgWorkflowCalendarIcon className="w-5 h-5" />
            <span>Developer &amp; Operator Academy</span>
          </div>
          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-black text-white tracking-tight [text-wrap:balance]">
            VoicePod Tutorials
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Master the VoicePod platform with step-by-step video walkthroughs, telephony configurations, and best practices.
          </p>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TUTORIALS_DATA.map((tut, idx) => (
            <ScrollReveal key={tut.id} variant="slide-up" delay={idx * 90} className="h-full">
              <div
                role="button"
                tabIndex={0}
                aria-label={`Start tutorial: ${tut.title}`}
                onClick={() => setActiveTutorial(tut)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveTutorial(tut);
                  }
                }}
                className="h-full rounded-2xl bg-slate-900/60 border border-slate-800 p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs font-mono">
                    <span className="text-cyan-300">{tut.category}</span>
                    <div className="flex items-center gap-2.5 text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        {tut.duration}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-300">{tut.level}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {tut.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-16">
                    {tut.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono tabular-nums">{tut.stepsCount} Interactive Steps</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1">
                    Start Tutorial <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Personalized Assistance Callout with Generated Studio Visual */}
        <ScrollReveal variant="slide-up" delay={100} className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MediaFrame
              src={ROBOT_ASSETS.onboarding}
              fallbackSrc={ROBOT_ASSETS.brandMarkPng}
              alt="VoicePod Acoustic Engineering Workbench"
              className="w-28 h-24 rounded-2xl border border-slate-800 shrink-0"
              imgClassName="w-full h-full object-cover"
            />
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-cyan-400">
                Enterprise Onboarding
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">Need Personalized Setup Assistance?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Our solutions engineering team offers 1-on-1 white-glove onboarding, CRM webhook mapping, and custom accent tuning.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            {onboardingRequested ? (
              <div className="px-5 py-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                Onboarding team notified. An engineer will reach out shortly.
              </div>
            ) : (
              <button
                onClick={() => setOnboardingRequested(true)}
                className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs whitespace-nowrap shrink-0 cursor-pointer transition-all"
              >
                Request 1-on-1 Walkthrough
              </button>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* Tutorial Viewer Modal */}
      {activeTutorial && (
        <div
          onClick={() => setActiveTutorial(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
        >
          <div
            ref={tutorialModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="tutorial-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6 focus:outline-none"
          >
            <button
              type="button"
              onClick={() => setActiveTutorial(null)}
              aria-label="Close tutorial"
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase">{activeTutorial.category} · {activeTutorial.duration}</span>
              <h2 id="tutorial-modal-title" className="text-2xl font-bold text-white mt-1">{activeTutorial.title}</h2>
              <p className="text-xs text-slate-300 mt-2">{activeTutorial.description}</p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Module Step-by-Step Checklist:</div>
              {[
                'Step 1: Accessing the VoicePod Console & API Keys',
                'Step 2: Defining Prompt Roles and Boundary Rules',
                'Step 3: Ingesting Custom Website URLs and Document FAQs',
                'Step 4: Connecting Twilio / Carrier SIP Phone Trunks',
                'Step 5: Verifying Real-Time Calendar Sync & Live Dial Testing'
              ].slice(0, activeTutorial.stepsCount).map((stepText, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-200">{stepText}</span>
                  <span className="text-cyan-400 font-mono">Ready</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveTutorial(null)}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
