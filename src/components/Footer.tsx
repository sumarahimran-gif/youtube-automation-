import React from 'react';
import { NAV_LINKS, APPLICATION_FORM_URL } from '../constants';
import { LegalDocType } from '../types';
import { Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (doc: 'terms' | 'privacy' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-black border-t border-white/10 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Logo & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white font-heading font-bold text-xl tracking-tighter uppercase group"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-white/30 via-blue-500/40 to-white/20 shadow-md shadow-blue-600/20 group-hover:scale-105 transition-all">
                <img
                  src="/creator-hub-logo.jpg"
                  alt="Creator Hub Metallic Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="tracking-tight leading-none">CREATOR HUB</span>
                <span className="text-[9px] font-mono text-blue-400 tracking-widest uppercase">YT AUTOMATION</span>
              </div>
            </a>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed font-normal">
              Helping digital creators learn, connect, and build through practical guidance and a
              structured community.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Community Status: Active</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold font-mono text-white uppercase tracking-widest mb-4">
              LINKS
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold font-mono text-white uppercase tracking-widest mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('refund')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Return &amp; Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© 2026 Creator Hub. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
