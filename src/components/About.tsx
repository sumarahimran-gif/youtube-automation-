import React from 'react';
import { AlertCircle, BookOpen, Layers, RefreshCw, TrendingUp } from 'lucide-react';
import { ThreeDTiltCard } from './ThreeDTiltCard';

export const About: React.FC = () => {
  const loopSteps = [
    { title: 'Learn', icon: BookOpen, desc: 'Positioning & systems' },
    { title: 'Implement', icon: Layers, desc: 'Production & delegation' },
    { title: 'Improve', icon: RefreshCw, desc: 'Analytics & iteration' },
    { title: 'Grow', icon: TrendingUp, desc: 'Sustainable channel scale' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 font-mono">
            ABOUT CREATOR HUB
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            More than just another course.
          </h2>
        </div>

        <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Creator Hub is a private community for individuals interested in YouTube Automation and
            digital content creation.
          </p>
          <p>
            Rather than providing a collection of pre-recorded lessons without ongoing support,
            Creator Hub offers a continuous environment where members can learn, ask questions,
            exchange ideas, access resources, and connect with other creators.
          </p>
        </div>

        {/* The 4-step framework: Learn → Implement → Improve → Grow */}
        <div className="my-14 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
              The objective is straightforward:
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {loopSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ThreeDTiltCard key={step.title} intensity={14} className="h-full">
                  <div className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center group hover:border-blue-500/40 transition-colors h-full">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-blue-500 mb-1">STEP 0{index + 1}</span>
                    <h3 className="text-lg font-heading font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-400">{step.desc}</p>
                  </div>
                </ThreeDTiltCard>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
            Creator Hub is designed for individuals who are prepared to take action and apply what
            they learn, rather than simply consume information.
          </p>
        </div>

        {/* Important notice banner */}
        <div
          id="about-important-notice"
          className="max-w-3xl mx-auto p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-gray-400 text-sm leading-relaxed"
        >
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-1">Important:</strong>
              <p className="text-gray-400">
                Creator Hub is an educational and community-based service. It is not a get-rich-quick
                scheme, investment opportunity, or done-for-you agency. No specific income, views,
                subscribers, or monetization results are guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
