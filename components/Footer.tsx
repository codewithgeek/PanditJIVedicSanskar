import React from 'react';
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { OmIcon } from "./Icons";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white pt-20 pb-10 border-t-8 border-vedic-saffron"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-16 items-start">
          {/* Brand Column - Occupies half space */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-vedic-deepSaffron shadow-xl border-2 border-vedic-gold">
                <OmIcon className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-vedic-saffron tracking-wide">
                  Pandit Ji
                </h3>
                <p className="text-sm text-vedic-gold font-sans tracking-[0.2em] uppercase">
                  Vedic Sanskar Services
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-xl">
              Bringing the sanctity of Vedic rituals to the modern world. We are
              committed to authenticity, punctuality, and spiritual satisfaction
              for every family we serve.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Instagram size={24} />, label: "Instagram" },
                { icon: <Facebook size={24} />, label: "Facebook" },
                { icon: <Youtube size={24} />, label: "Youtube" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-vedic-saffron hover:text-white transition-all duration-300 hover:-translate-y-1 border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Connect - Occupies half space */}
          <div className="space-y-8">
            <h4 className="font-serif text-2xl font-bold text-vedic-saffron border-l-4 border-vedic-gold pl-4">
              Direct Connect
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+919876543210"
                className="flex flex-col items-center justify-center text-center gap-3 group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-vedic-saffron hover:bg-white/10 transition-all duration-300"
              >
                <Phone
                  className="text-vedic-saffron group-hover:scale-110 transition-transform"
                  size={28}
                />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Call Anytime
                  </p>
                  <p className="text-xl font-bold group-hover:text-vedic-gold transition-colors whitespace-nowrap">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@panditji.com"
                className="flex flex-col items-center justify-center text-center gap-3 group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-vedic-saffron hover:bg-white/10 transition-all duration-300"
              >
                <Mail
                  className="text-vedic-saffron group-hover:scale-110 transition-transform"
                  size={28}
                />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Email Us
                  </p>
                  <p className="text-xl font-bold group-hover:text-vedic-gold transition-colors whitespace-nowrap">
                    info@panditji.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/+919876543210"
                className="flex flex-col items-center justify-center text-center gap-3 group p-6 rounded-xl bg-green-900/20 border border-green-800/50 hover:bg-green-900/30 transition-all duration-300 sm:col-span-2"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Instant WhatsApp Support
                  </p>
                  <p className="text-xl font-bold text-green-400 whitespace-nowrap">
                    Chat with Pandit Ji
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pandit Ji Vedic Sanskar. Crafted
            with Devotion.
          </p>
          <div className="flex gap-8 text-xs text-gray-400 font-medium uppercase tracking-widest">
            <span className="hover:text-vedic-gold cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-vedic-gold cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-vedic-gold cursor-pointer transition-colors">
              Refund Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
