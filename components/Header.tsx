import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { OmIcon } from './Icons';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b-4 border-vedic-gold
        ${isScrolled 
          ? 'bg-gradient-to-r from-vedic-deepSaffron via-orange-600 to-vedic-deepSaffron shadow-2xl py-2' 
          : 'bg-gradient-to-r from-vedic-deepSaffron to-vedic-saffron py-3 md:py-4'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-white">
        
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-vedic-deepSaffron shadow-lg group-hover:rotate-12 transition-transform duration-500 border-2 border-vedic-gold">
            <OmIcon className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div>
            <h1 className="font-serif text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-md leading-none">
              Pandit Ji
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/90 block mt-0.5 font-semibold">
              Vedic Sanskar
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Services', href: '#services' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans text-sm tracking-widest uppercase hover:text-vedic-gold transition-colors duration-300 relative py-2 font-bold drop-shadow-md
                ${activeSection === link.href.substring(1) ? 'text-white border-b-2 border-white' : 'text-white/90 hover:text-white'}
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <a 
            href="tel:+919876543210" 
            className="hidden md:flex items-center gap-2 bg-white text-vedic-deepSaffron px-6 py-2 rounded-full font-bold shadow-lg hover:bg-vedic-gold hover:text-vedic-deepSaffron transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Phone size={18} fill="currentColor" />
            <span>Call Now</span>
          </a>

          <button 
            className="md:hidden text-white p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-vedic-deepSaffron to-vedic-saffron border-b-4 border-vedic-gold shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300 max-h-[85vh] overflow-y-auto">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Services', href: '#services' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center font-serif text-lg text-white hover:text-vedic-gold py-3 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+919876543210" 
            className="flex items-center justify-center gap-2 bg-white text-vedic-deepSaffron px-6 py-4 rounded-full font-bold shadow-lg mt-4"
          >
            <Phone size={18} fill="currentColor" />
            <span>Call Pandit Ji</span>
          </a>
        </div>
      )}
    </header>
  );
};