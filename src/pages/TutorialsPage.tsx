import React, { useState } from 'react';
import { PlayCircle, Clock, BookOpen, CheckCircle, ArrowRight, X } from 'lucide-react';
import { TUTORIALS_DATA, TutorialItem, ROBOT_ASSETS } from '../data/voicepodSiteData';

export const TutorialsPage: React.FC = () => {
  const [activeTutorial, setActiveTutorial] = useState<TutorialItem | null>(null);
  const [onboardingRequested, setOnboardingRequested] = useState(false);

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="py-16 bg-[#080b18] border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-600/10 blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Developer & Operator Academy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
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
          {TUTORIALS_DATA.map((tut) => (
            <div
              key={tut.id}
              onClick={() => setActiveTutorial(tut)}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 text-[11px] font-mono border border-slate-700">
                    {tut.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {tut.duration}
                    </span>
                    <span>•</span>
                    <span className="text-purple-400">{tut.level}</span>
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
                <span className="text-slate-400 font-mono">{tut.stepsCount} Interactive Steps</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  Start Tutorial <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Assistance Callout with 3D Robot Visual */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-cyan-950/30 text-left">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center animate-float-robot">
              <img
                src={ROBOT_ASSETS.hero}
                alt="VoicePod Onboarding Engineer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = ROBOT_ASSETS.avatarFallback;
                }}
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(6,182,212,0.45)]"
              />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-500/30 uppercase">
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
                ✓ Onboarding team notified! An engineer will reach out.
              </div>
            ) : (
              <button
                onClick={() => setOnboardingRequested(true)}
                className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 font-bold text-xs whitespace-nowrap cursor-pointer shadow-lg shadow-cyan-950 hover:scale-105 transition-all"
              >
                Request 1-on-1 Walkthrough
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tutorial Viewer Modal */}
      {activeTutorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setActiveTutorial(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase">{activeTutorial.category} · {activeTutorial.duration}</span>
              <h2 className="text-2xl font-bold text-white mt-1">{activeTutorial.title}</h2>
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
