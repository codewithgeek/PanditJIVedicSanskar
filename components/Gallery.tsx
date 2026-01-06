import React from 'react';
import { PlayCircle } from 'lucide-react';

const galleryImages = [
  'https://picsum.photos/seed/wedding1/400/600',
  'https://picsum.photos/seed/wedding2/400/300',
  'https://picsum.photos/seed/wedding3/400/400',
  'https://picsum.photos/seed/wedding4/400/500',
  'https://picsum.photos/seed/wedding5/400/300',
  'https://picsum.photos/seed/wedding6/400/400',
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-vedic-cream/30">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-vedic-deepSaffron">The Vedic Trust Gallery</h2>
          <p className="text-vedic-text mt-2">Moments of divine union and sacred traditions.</p>
        </div>

        {/* Masonry-style Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-lg cursor-pointer border-2 border-transparent hover:border-vedic-saffron transition-all">
              <img 
                src={src} 
                alt={`Ritual ${idx + 1}`} 
                className="w-full h-auto object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-vedic-deepSaffron/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic text-lg border-b border-white pb-1">View Full Size</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Feature Section - Saffron Theme */}
        <div className="bg-gradient-to-r from-vedic-deepSaffron to-vedic-saffron text-white rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }}></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="w-full md:w-1/2 p-10 md:p-16">
               <span className="text-vedic-gold uppercase tracking-widest text-xs font-bold mb-2 block">Experience the Vibe</span>
               <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Watch "Musical Phere" Live</h3>
               <p className="text-white/90 mb-8 leading-relaxed">
                 See how we blend the solemnity of Vedic mantras with the joy of classical music. 
                 It is not just a ritual; it is a spiritual celebration that engages every guest.
               </p>
               <button className="flex items-center gap-3 bg-white text-vedic-deepSaffron px-6 py-3 rounded-full font-bold hover:bg-vedic-gold hover:text-vedic-text transition-colors shadow-lg">
                  <PlayCircle size={24} /> Watch Highlights
               </button>
            </div>
            
            <div className="w-full md:w-1/2 h-[300px] md:h-[450px] bg-black/20 relative">
               {/* Video Placeholder */}
               <img 
                 src="https://picsum.photos/seed/video_thumb/800/600" 
                 className="w-full h-full object-cover opacity-80 mix-blend-overlay" 
                 alt="Video Thumbnail"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform border border-white/50">
                     <PlayCircle size={48} className="text-white fill-current" />
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};