import React, { useState, useEffect } from 'react';
import { APPLICATION_FORM_URL, NAV_LINKS } from '../constants';
import { Menu, X, ArrowUpRight, Youtube } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/60 py-3.5'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="nav-logo"
            className="flex items-center gap-3 text-white font-heading font-bold text-lg md:text-xl tracking-tighter uppercase group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-white/30 via-blue-500/40 to-white/20 shadow-md shadow-blue-600/20 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all">
              <img
                src="/creator-hub-logo.jpg"
                alt="Creator Hub Metallic Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="tracking-tight leading-none">CREATOR HUB</span>
              <span className="text-[8px] font-mono text-blue-400 tracking-widest uppercase">YT AUTOMATION</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              id="navbar-cta-button"
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Join Creator Hub</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden mt-3 pt-3 pb-5 border border-white/10 bg-[#0D0D11]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10">
              <a
                id="mobile-navbar-cta-button"
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-black bg-white hover:bg-gray-200 transition-colors shadow-lg"
              >
                <span>Join Creator Hub</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
