import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatYouGet } from './components/WhatYouGet';
import { WhoItsFor } from './components/WhoItsFor';
import { Membership } from './components/Membership';
import { HowItWorks } from './components/HowItWorks';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ThreeCanvas } from './components/ThreeCanvas';
import { LegalDocType } from './types';

export default function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  useEffect(() => {
    // Handle direct hash navigation to legal policies if present
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#privacy-policy') {
        setActiveLegalDoc('privacy');
      } else if (hash === '#terms' || hash === '#terms-and-conditions') {
        setActiveLegalDoc('terms');
      } else if (
        hash === '#refund' ||
        hash === '#refund-policy' ||
        hash === '#return' ||
        hash === '#returns' ||
        hash === '#return-policy'
      ) {
        setActiveLegalDoc('refund');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openLegal = (doc: 'terms' | 'privacy' | 'refund') => {
    setActiveLegalDoc(doc);
  };

  const closeLegal = () => {
    setActiveLegalDoc(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-blue-500/30 selection:text-white relative">
      {/* Interactive 3D WebGL Three.js Particle & Constellation Canvas */}
      <ThreeCanvas />

      <Navbar />

      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <WhatYouGet />
        <WhoItsFor />
        <Membership />
        <HowItWorks />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>

      <Footer onOpenLegal={openLegal} />

      {activeLegalDoc && (
        <LegalModal
          currentDoc={activeLegalDoc}
          onClose={closeLegal}
          onSelectDoc={openLegal}
        />
      )}
    </div>
  );
}
