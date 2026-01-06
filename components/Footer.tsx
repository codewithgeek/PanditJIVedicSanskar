import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { OmIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 border-t-8 border-vedic-saffron">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-vedic-deepSaffron">
                <OmIcon className="w-8 h-8" />
              </div>
              <div>
                 <h3 className="font-serif text-2xl font-bold text-vedic-saffron">Pandit Ji</h3>
                 <p className="text-xs text-gray-400">Vedic Sanskar Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing the sanctity of Vedic rituals to the modern world. 
              We are committed to authenticity, punctuality, and spiritual satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vedic-saffron hover:text-white transition-colors"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vedic-saffron hover:text-white transition-colors"><Facebook size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vedic-saffron hover:text-white transition-colors"><Youtube size={18}/></a>
            </div>
          </div>

          {/* Direct Connect */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-vedic-saffron">Direct Connect</h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center gap-4 group p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Phone className="text-vedic-saffron group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">Call Anytime</p>
                  <p className="text-lg font-bold group-hover:text-vedic-gold transition-colors">+91 98765 43210</p>
                </div>
              </a>
              
              <a href="mailto:booking@panditji.com" className="flex items-center gap-4 group p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Mail className="text-vedic-saffron group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">Email Us</p>
                  <p className="text-lg font-bold group-hover:text-vedic-gold transition-colors">info@panditji.com</p>
                </div>
              </a>

              <a href="https://wa.me/919876543210" className="flex items-center gap-4 group p-3 rounded-lg bg-green-900/30 border border-green-800 hover:bg-green-900/50 transition-colors cursor-pointer">
                <MessageCircle className="text-green-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">WhatsApp</p>
                  <p className="text-lg font-bold text-green-400">Chat Now</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Request */}
          <div className="space-y-6">
             <h4 className="font-serif text-xl font-bold text-vedic-saffron">Request Callback</h4>
             <form className="space-y-3">
               <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:border-vedic-saffron focus:outline-none transition-colors" />
               <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white focus:border-vedic-saffron focus:outline-none transition-colors" />
               <button className="w-full bg-vedic-saffron text-white font-bold py-2 rounded hover:bg-vedic-deepSaffron transition-colors">Submit Request</button>
             </form>
          </div>

          {/* Map Area */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-vedic-saffron">Service Area</h4>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden relative group">
               {/* Static Map Image Placeholder */}
               <img src="https://picsum.photos/seed/map_delhi/400/300" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" alt="Service Map" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 backdrop-blur-sm p-3 rounded-lg flex items-center gap-2">
                    <MapPin className="text-red-500" />
                    <span className="text-sm font-bold">Serving Delhi NCR</span>
                  </div>
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pandit Ji Vedic Sanskar. All rights reserved. | <span className="hover:text-white cursor-pointer">Privacy Policy</span></p>
        </div>
      </div>
    </footer>
  );
};