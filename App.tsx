import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  // Simple scroll spy logic for active navigation state
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-vedic-text bg-vedic-cream relative overflow-x-hidden">
      {/* Decorative Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/floral-linen.png")` }}>
      </div>

      <Header activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
      </main>

      <Footer />
      
      {/* Floating Action Button (Mobile) - Visible only on small screens */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a href="tel:+919876543210" className="flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-lg text-white hover:bg-green-700 transition-transform hover:scale-110">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </div>
  );
}