import React from 'react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';
import { Instagram, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-3 font-mono">
              HAVE QUESTIONS?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
              Speak with us before joining.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              If you have questions about Creator Hub, YouTube Automation, membership, or the
              joining process, please contact us before purchasing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto">
            {/* Instagram Contact card */}
            <div className="w-full sm:w-auto flex-1 p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-3 shadow-md shadow-blue-900/20">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-400 mb-1 font-mono">Direct Message</span>
              <span className="text-base font-semibold text-white mb-3 font-heading">
                {INSTAGRAM_HANDLE}
              </span>
              <a
                id="contact-instagram-btn"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all shadow"
              >
                <span>Message Us</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Support Hours Card */}
            <div className="w-full sm:w-auto flex-1 p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col items-center justify-between min-h-[170px]">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 mb-3">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block font-mono">
                  SUPPORT HOURS
                </span>
                <p className="text-sm font-semibold text-white">Monday – Saturday</p>
                <p className="text-xs text-gray-400 font-mono mt-0.5">10:00 AM – 6:00 PM IST</p>
              </div>
              <div className="text-[11px] text-gray-500 mt-2 font-mono">Typical reply within few hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
