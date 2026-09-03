import React from 'react';
import { APPLICATION_FORM_URL, INSTAGRAM_URL } from '../constants';
import { MessageCircle } from 'lucide-react';
import { ThreeDTiltCard } from './ThreeDTiltCard';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-24 md:py-36 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating 3D Badge Emblem */}
        <div className="flex justify-center mb-8">
          <ThreeDTiltCard intensity={20}>
            <div className="relative group cursor-pointer p-1">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[2px] bg-gradient-to-tr from-white/40 via-blue-500/60 to-white/30 shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <img
                  src="/creator-hub-logo.jpg"
                  alt="Creator Hub Metallic Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </ThreeDTiltCard>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight mb-5">
          Ready to start building?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Join a community of creators who are learning, experimenting, and building together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="final-primary-cta"
            href={APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>Apply to Join Creator Hub</span>
            <span aria-hidden="true">→</span>
          </a>

          <a
            id="final-secondary-cta"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span>Ask a Question</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
