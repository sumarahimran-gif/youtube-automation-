import React from 'react';
import { Compass, FileText, MessageSquareShare, BellRing, Network } from 'lucide-react';
import { ThreeDTiltCard } from './ThreeDTiltCard';

export const WhatYouGet: React.FC = () => {
  const offerings = [
    {
      number: '01',
      title: 'YouTube Automation Guidance',
      desc: 'Develop a practical understanding of channel positioning, content workflows, production systems, delegation, publishing, and analytics.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Resources & SOPs',
      desc: 'Access templates, standard operating procedures, workflow resources, tool recommendations, and other materials designed to support efficient execution.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Community Support',
      desc: 'Connect with creators pursuing similar objectives. Share ideas, ask questions, and receive feedback on content, scripts, thumbnails, workflows, and strategy.',
      icon: MessageSquareShare,
    },
    {
      number: '04',
      title: 'Ongoing Updates',
      desc: 'YouTube is constantly evolving. Creator Hub facilitates ongoing discussions and provides updates regarding tools, workflows, platform changes, and strategies relevant to creators.',
      icon: BellRing,
    },
    {
      number: '05',
      title: 'Networking',
      desc: 'Build meaningful professional relationships with creators who are actively learning and working in the same space.',
      icon: Network,
    },
  ];

  return (
    <section id="what-you-get" className="py-20 md:py-28 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 font-mono">
            WHAT MEMBERS GET
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            The resources and support you need to move forward with confidence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <ThreeDTiltCard
                key={item.number}
                intensity={12}
                className={`h-full ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                        {item.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ThreeDTiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
