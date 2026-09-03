import React from 'react';
import { Check, X } from 'lucide-react';
import { ThreeDTiltCard } from './ThreeDTiltCard';

export const WhoItsFor: React.FC = () => {
  const forYouPoints = [
    "You're a beginner seeking a structured environment to learn YouTube Automation.",
    "You're already creating content and want to improve your workflow.",
    'You value practical resources over excessive theory.',
    "You're prepared to take action and learn through implementation.",
    'You want to connect with other creators.',
    "You're focused on building something sustainable over the long term.",
  ];

  const notForYouPoints = [
    "You're expecting overnight success.",
    'You want guaranteed income or guaranteed views.',
    'You expect someone else to build and operate your channel for you.',
    "You're looking for a done-for-you agency.",
    "You don't intend to implement what you learn.",
    "You're seeking a quick shortcut without sustained effort.",
  ];

  return (
    <section id="who-its-for" className="py-20 md:py-28 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 font-mono">
            QUALIFICATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Who this community is for — and who it isn't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* THIS IS FOR YOU IF: */}
          <ThreeDTiltCard intensity={10} className="h-full">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden hover:border-blue-500/30 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-6 font-mono">
                  <Check className="w-4 h-4" />
                  <span>THIS IS FOR YOU IF:</span>
                </div>

                <ul className="space-y-4">
                  {forYouPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3.5 text-gray-300 text-sm md:text-base leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ThreeDTiltCard>

          {/* THIS IS NOT FOR YOU IF: */}
          <ThreeDTiltCard intensity={10} className="h-full">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden hover:border-white/20 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10 text-xs font-bold uppercase tracking-wider mb-6 font-mono">
                  <X className="w-4 h-4" />
                  <span>THIS IS NOT FOR YOU IF:</span>
                </div>

                <ul className="space-y-4">
                  {notForYouPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3.5 text-gray-400 text-sm md:text-base leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-white/10 text-gray-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ThreeDTiltCard>
        </div>
      </div>
    </section>
  );
};
