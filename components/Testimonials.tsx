import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh & Simran Gupta",
    event: "Wedding Ceremony",
    text: "Pandit Ji made our wedding truly magical. The explanation of every mantra in English helped our guests understand the significance. The Musical Phere were the highlight!",
    rating: 5,
    image: "https://picsum.photos/seed/c1/100/100"
  },
  {
    name: "Mrs. Sharma",
    event: "Griha Pravesh",
    text: "Very professional and punctual. The Havan was conducted with such purity and devotion. Our new home feels blessed.",
    rating: 5,
    image: "https://picsum.photos/seed/c2/100/100"
  },
  {
    name: "Vikram Malhotra",
    event: "Naming Ceremony",
    text: "Authentic Vedic vidhi. He brought all the samagri and managed everything perfectly. Highly recommended for hassle-free poojas.",
    rating: 5,
    image: "https://picsum.photos/seed/c3/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-serif text-3xl font-bold text-vedic-deepSaffron mb-12">Words of Blessing</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="relative w-full md:w-[350px]">
              {/* Scroll Styling Top */}
              <div className="h-4 bg-vedic-deepSaffron rounded-full shadow-md relative z-20 mx-2"></div>
              
              {/* Scroll Body */}
              <div className="bg-vedic-cream p-8 shadow-xl relative mx-4 -mt-2 min-h-[300px] flex flex-col items-center text-center border-l-4 border-r-4 border-vedic-saffron">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper.png')" }}></div>
                
                <Quote className="text-vedic-saffron w-8 h-8 mb-4 opacity-70" />
                
                <p className="font-serif italic text-vedic-text mb-6 z-10 relative">"{t.text}"</p>
                
                <div className="mt-auto flex flex-col items-center z-10">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-vedic-deepSaffron mb-2" />
                  <h4 className="font-bold text-vedic-deepSaffron">{t.name}</h4>
                  <span className="text-xs text-vedic-saffron uppercase tracking-widest">{t.event}</span>
                  <div className="flex text-vedic-gold mt-1 gap-1">
                    {[...Array(t.rating)].map((_, r) => <span key={r}>★</span>)}
                  </div>
                </div>
              </div>

              {/* Scroll Styling Bottom */}
              <div className="h-4 bg-vedic-deepSaffron rounded-full shadow-md relative z-20 mx-2 -mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};