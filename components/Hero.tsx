import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-12">
      
      {/* Visual Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full"
        >
            <img 
              src="https://picsum.photos/seed/havan_fire/1920/1080" 
              alt="Sacred Fire Havan Ritual" 
              className="w-full h-full object-cover"
            />
        </motion.div>
        
        {/* Saffron Overlay Gradients - Strong Saffron Theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-vedic-deepSaffron/80 via-vedic-saffron/70 to-vedic-deepSaffron/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Container - Centered */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center justify-center text-center">
        
        {/* Divine Symbols Row */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-6 mb-8"
        >
          {/* Lord Ganesh Image */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-vedic-gold/50 bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(255,153,51,0.6)]">
             <img 
               src="https://img.icons8.com/color/144/ganesh.png" 
               alt="Lord Ganesh" 
               className="w-full h-full object-contain p-2"
             />
          </div>

          {/* Mantra */}
          <div className="text-center px-4 max-w-3xl">
             <p className="font-serif text-lg md:text-2xl text-white font-semibold leading-relaxed drop-shadow-lg tracking-wide">
               || त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनं <br className="hidden md:block"/>
               उर्वारुकमिव बन्धनान् मृत्योर्मोक्षिय मामृतात ||
             </p>
             <p className="text-vedic-gold text-xs md:text-sm mt-2 tracking-widest uppercase opacity-90">
               Om Namah Shivaya
             </p>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block px-4 py-1.5 border border-vedic-gold rounded-full text-vedic-gold text-xs md:text-sm tracking-[0.2em] uppercase bg-black/20 backdrop-blur-md shadow-lg">
            || Shubh Aarambh ||
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-4 drop-shadow-2xl text-white">
            Experience the Divinity of <br/>
            <span className="gold-gradient-text italic">Vedic Rituals</span>
          </h1>
          
          <p className="font-sans text-lg md:text-2xl text-vedic-cream max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            From <span className="text-vedic-gold font-bold">Griha Pravesh</span> to <span className="text-vedic-gold font-bold">Vivah Sanskar</span>, we bring the sanctity of authentic traditions to your life's most important moments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a 
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-vedic-gold to-yellow-500 text-vedic-deepSaffron font-serif font-bold text-lg rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Book a Pandit Ji
            </a>
            <a 
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans font-bold text-lg rounded-full hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Social Proof Mini-Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-2 pt-12"
        >
             <div className="flex -space-x-3 mb-2">
               {[1,2,3,4,5].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/person${i}/50/50`} className="w-10 h-10 rounded-full border-2 border-vedic-gold" alt="client" />
               ))}
             </div>
             <div className="text-center">
               <p className="text-vedic-gold font-bold text-lg">★★★★★</p>
               <p className="text-white/80 text-xs tracking-wide">Trusted by 5000+ Families in Delhi NCR</p>
             </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <span className="block text-[10px] uppercase tracking-widest mb-2 text-center text-vedic-gold">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-vedic-gold to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};