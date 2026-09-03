import React from 'react';
import { LEGAL_DOCS } from '../legalContent';
import { LegalDocType } from '../types';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';

interface LegalModalProps {
  currentDoc: LegalDocType;
  onClose: () => void;
  onSelectDoc: (doc: 'terms' | 'privacy' | 'refund') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ currentDoc, onClose, onSelectDoc }) => {
  if (!currentDoc) return null;

  const docData = LEGAL_DOCS[currentDoc];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {currentDoc === 'terms' && <FileText className="w-4 h-4 text-blue-400" />}
              {currentDoc === 'privacy' && <ShieldCheck className="w-4 h-4 text-blue-400" />}
              {currentDoc === 'refund' && <RefreshCw className="w-4 h-4 text-blue-400" />}
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                Official Policy
              </span>
            </div>
            <h2 id="legal-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-white">
              {docData.title}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5 font-mono">
              Last Updated: <span className="text-gray-200">{docData.lastUpdated}</span>
            </p>
          </div>

          <button
            id="close-legal-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch bar for quick browsing */}
        <div className="flex border-b border-white/10 bg-black px-6 gap-2 sm:gap-4 overflow-x-auto text-xs py-2.5">
          <button
            type="button"
            onClick={() => onSelectDoc('terms')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
              currentDoc === 'terms'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Terms &amp; Conditions
          </button>
          <button
            type="button"
            onClick={() => onSelectDoc('privacy')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
              currentDoc === 'privacy'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onSelectDoc('refund')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
              currentDoc === 'refund'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Return &amp; Refund Policy
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm md:text-base text-gray-300 leading-relaxed font-sans">
          {docData.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2 border-b border-white/5 pb-4 last:border-b-0">
              <h3 className="text-base font-heading font-semibold text-white tracking-wide">
                {sec.heading}
              </h3>
              {sec.content.map((p, pIdx) => (
                <p key={pIdx} className="text-gray-400 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <span className="text-xs text-gray-500 font-mono">© 2026 Creator Hub</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
