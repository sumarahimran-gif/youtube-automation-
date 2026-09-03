import React from 'react';
import { APPLICATION_FORM_URL, INSTAGRAM_URL } from '../constants';
import { ShieldCheck, MessageCircle, Users, Workflow, Sparkles } from 'lucide-react';
import { Interactive3DBadge } from './Interactive3DBadge';
import { ThreeDTiltCard } from './ThreeDTiltCard';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/5"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[350px] h-[300px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-sm bg-blue-500/5 font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>PRIVATE YOUTUBE AUTOMATION COMMUNITY</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              Build your channel alongside creators who are{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
                actively building theirs.
              </span>
            </h1>

            {/* Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8"
            >
              Creator Hub is a structured private community for creators committed to YouTube Automation.
              Receive practical guidance, valuable resources, proven workflows, and access to a
              network of individuals working toward similar goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              {/* Primary CTA */}
              <a
                id="hero-primary-cta"
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>Request Access</span>
                <span aria-hidden="true">→</span>
              </a>

              {/* Secondary CTA */}
              <a
                id="hero-secondary-cta"
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

            {/* Trust Line */}
            <div
              id="hero-trust-line"
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-gray-400 leading-relaxed text-left"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 hidden sm:inline" />
              <span>
                No misleading guarantees or promises of overnight success. Just practical guidance,
                valuable resources, and a community of creators committed to consistent effort.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Metallic Badge Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center py-4">
            <Interactive3DBadge />
          </div>
        </div>

        {/* 3D Interactive Feature Preview Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 text-left">
          <ThreeDTiltCard intensity={12} className="h-full">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 shadow-sm flex items-start gap-4 hover:border-blue-500/30 transition-colors h-full">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5 font-heading">
                  Standard Operating Procedures
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Tested production frameworks, thumbnail briefs, and delegation templates.
                </p>
              </div>
            </div>
          </ThreeDTiltCard>

          <ThreeDTiltCard intensity={12} className="h-full">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 shadow-sm flex items-start gap-4 hover:border-blue-500/30 transition-colors h-full">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5 font-heading">
                  Active Peer Network
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Connect with creators sharing real feedback on scripts, edits, and retention.
                </p>
              </div>
            </div>
          </ThreeDTiltCard>

          <ThreeDTiltCard intensity={12} className="h-full">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 shadow-sm flex items-start gap-4 hover:border-blue-500/30 transition-colors h-full">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5 font-heading">
                  Continuous Execution
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  A structured environment focused on implementation rather than passive theory.
                </p>
              </div>
            </div>
          </ThreeDTiltCard>
        </div>
      </div>
    </section>
  );
};
