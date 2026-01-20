import React, { useState } from "react";
import { PlayCircle, Maximize2, X } from "lucide-react";

const galleryImages = [
  "https://picsum.photos/seed/vedic1/600/600",
  "https://picsum.photos/seed/vedic2/600/600",
  "https://picsum.photos/seed/vedic3/600/600",
  "https://picsum.photos/seed/vedic4/600/600",
  "https://picsum.photos/seed/vedic5/600/600",
  "https://picsum.photos/seed/vedic6/600/600",
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-vedic-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-vedic-saffron font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
            Visual Darshan
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vedic-deepSaffron">
            Sacred Moments
          </h2>
          <div className="w-24 h-1 bg-vedic-gold mx-auto mt-4"></div>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(src)}
              className="group relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-xl cursor-pointer"
            >
              {/* Gold Inner Border Overlay */}
              <div className="absolute inset-0 border-8 border-transparent group-hover:border-vedic-gold/20 transition-all duration-300 z-10 pointer-events-none"></div>

              <img
                src={src}
                alt={`Sacred Ritual ${idx + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Refined Overlay - Fades in Maximize Icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <Maximize2 className="text-white w-10 h-10 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Video Feature Section - Deep Saffron Theme with Gold Accents */}
        <div className="bg-gradient-to-br from-vedic-deepSaffron via-[#D84315] to-vedic-deepSaffron text-white rounded-2xl overflow-hidden shadow-2xl relative border border-vedic-gold/30">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/black-scales.png')",
            }}
          ></div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="w-full md:w-1/2 p-10 md:p-16">
              <span className="text-vedic-gold uppercase tracking-widest text-xs font-bold mb-2 block">
                Experience the Vibe
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-shadow-md">
                Watch "Musical Phere" Live
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed text-sm md:text-base font-light">
                See how we blend the solemnity of Vedic mantras with the joy of
                classical music. It is not just a ritual; it is a spiritual
                celebration that engages every guest.
              </p>
              <button className="flex items-center gap-3 bg-white text-vedic-deepSaffron px-8 py-3 rounded-full font-bold border-2 border-vedic-gold hover:bg-vedic-gold hover:text-vedic-text transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(255,215,0,0.4)] group">
                <PlayCircle
                  size={24}
                  className="text-vedic-deepSaffron group-hover:text-vedic-text transition-colors"
                />
                Watch Highlights
              </button>
            </div>

            <div className="w-full md:w-1/2 h-[300px] md:h-[450px] bg-black/20 relative group overflow-hidden">
              <img
                src="https://picsum.photos/seed/video_thumb/800/600"
                className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                alt="Video Thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 border-2 border-vedic-gold shadow-[0_0_25px_rgba(255,215,0,0.4)]">
                  <PlayCircle
                    size={48}
                    className="text-vedic-gold fill-vedic-gold/10 ml-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-vedic-gold transition-colors z-50"
              aria-label="Close Gallery"
            >
              <X size={48} />
            </button>
            <img
              src={selectedImage}
              alt="Sacred Ritual Fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-vedic-gold/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};
