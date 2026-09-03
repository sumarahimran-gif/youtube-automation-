import React from 'react';
import { APPLICATION_FORM_URL } from '../constants';
import { Check } from 'lucide-react';
import { ThreeDTiltCard } from './ThreeDTiltCard';

export const Membership: React.FC = () => {
  const perks = [
    'Private Discord community access',
    'YouTube Automation discussions and guidance',
    'Digital resources, templates, and SOPs',
    'Strategy discussions',
    'Community networking',
    'Peer support',
    'Ongoing resources and updates',
  ];

  return (
    <section id="membership" className="py-20 md:py-28 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 font-mono">
            CREATOR HUB ACCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            One community. Everything you need in one place.
          </h2>
        </div>

        {/* Membership 3D Tilt Card */}
        <ThreeDTiltCard intensity={8} className="w-full">
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background 3D Logo Watermark */}
            <img
              src="/creator-hub-logo.jpg"
              alt=""
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none filter contrast-125 select-none"
            />
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8 relative z-10">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                Your Creator Hub membership includes:
              </h3>
              <p className="text-sm text-gray-400">
                Complete access to our collaborative creator network and operational toolkits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 relative z-10">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm md:text-base text-gray-200">{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 text-center relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 font-mono">
                READY TO JOIN?
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <a
                  id="membership-apply-cta"
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span>Apply to Join</span>
                  <span aria-hidden="true">→</span>
                </a>

                {/* Reassurance */}
                <p className="text-xs text-gray-400 font-mono">
                  Digital access only. No physical products are shipped.
                </p>
              </div>
            </div>
          </div>
        </ThreeDTiltCard>
      </div>
    </section>
  );
};
