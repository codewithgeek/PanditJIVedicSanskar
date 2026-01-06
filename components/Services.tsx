import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Home,
  Music,
  BookOpen,
  Star,
  Sparkles,
  Heart,
  Crown,
  Flower,
  Sun,
  Baby,
} from "lucide-react";
import { KalashIcon, OmIcon } from "./Icons";

interface Service {
  id: string;
  title: string;
  hindiTitle?: string;
  description: string;
  icon: React.ReactNode;
  isTrending?: boolean;
  image: string;
}

const services: Service[] = [
  {
    id: "satyanarayan",
    title: "Satyanarayan Puja",
    hindiTitle: "सत्यनारायण पूजा",
    description:
      "Invites peace, prosperity, and removes obstacles. Best performed on Purnima or Ekadashi.",
    icon: <BookOpen className="w-6 h-6" />,
    isTrending: true,
    image: "https://picsum.photos/seed/satyanarayan/400/300",
  },
  {
    id: "griha-pravesh",
    title: "Griha Pravesh",
    hindiTitle: "गृह प्रवेश",
    description:
      "Auspicious entry into a new home with Vastu Shanti to ensure happiness and positive energy.",
    icon: <Home className="w-6 h-6" />,
    isTrending: true,
    image: "https://picsum.photos/seed/home_puja/400/300",
  },
  {
    id: "marriage",
    title: "Vivah Sanskar",
    hindiTitle: "विवाह संस्कार",
    description:
      "Complete Vedic wedding ceremony including Jai Mala, Kanyadaan, Phere, and Saptapadi.",
    icon: <Heart className="w-6 h-6" />,
    image: "https://picsum.photos/seed/wedding_phere/400/300",
  },
  {
    id: "engagement",
    title: "Sagai / Engagement",
    hindiTitle: "सगाई समारोह",
    description:
      "The formal promise to wed. Ring exchange ceremony with Ganesh Puja and blessings.",
    icon: <Crown className="w-6 h-6" />,
    image: "https://picsum.photos/seed/rings/400/300",
  },
  {
    id: "mahamrityunjaya",
    title: "Maha Mrityunjaya Jaap",
    hindiTitle: "महामृत्युंजय जाप",
    description:
      "Powerful Shiva mantra chanting for health, longevity, and conquering fear of death.",
    icon: <OmIcon className="w-6 h-6" />,
    image: "https://picsum.photos/seed/shiva/400/300",
  },
  {
    id: "rudrabhishek",
    title: "Rudrabhishek",
    hindiTitle: "रुद्राभिषेक",
    description:
      "Ceremonial bathing of Shiva Lingam to remove evils and attain desires.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://picsum.photos/seed/shivalinga/400/300",
  },
  {
    id: "sunderkand",
    title: "Sunderkand Path",
    hindiTitle: "सुंदरकांड पाठ",
    description:
      "Recitation of the fifth chapter of Ramayana to remove afflictions and gain confidence.",
    icon: <BookOpen className="w-6 h-6" />,
    image: "https://picsum.photos/seed/hanuman/400/300",
  },
  {
    id: "namkaran",
    title: "Namkaran Sanskar",
    hindiTitle: "नामकरण संस्कार",
    description:
      "Naming ceremony for the newborn to bless them with a long, fulfilling life.",
    icon: <Baby className="w-6 h-6" />,
    image: "https://picsum.photos/seed/baby_puja/400/300",
  },
  {
    id: "mundan",
    title: "Mundan Sanskar",
    hindiTitle: "मुंडन संस्कार",
    description:
      "First head shaving ceremony for the child to promote mental and physical growth.",
    icon: <Flower className="w-6 h-6" />,
    image: "https://picsum.photos/seed/barber/400/300",
  },
  {
    id: "navagraha",
    title: "Navagraha Shanti",
    hindiTitle: "नवग्रह शांति",
    description:
      "Pacifying the nine planets to remove doshas and bring harmony to life events.",
    icon: <Sun className="w-6 h-6" />,
    image: "https://picsum.photos/seed/planets/400/300",
  },
  {
    id: "havan",
    title: "Havan / Yajna",
    hindiTitle: "हवन / यज्ञ",
    description:
      "Fire ritual for purification of the environment and spiritual upliftment.",
    icon: <Flame className="w-6 h-6" />,
    image: "https://picsum.photos/seed/fire_havan/400/300",
  },
  {
    id: "laxmi",
    title: "Laxmi / Office Puja",
    hindiTitle: "लक्ष्मी पूजन",
    description:
      "Worship of Goddess Laxmi for wealth and prosperity in home or new business.",
    icon: <KalashIcon className="w-6 h-6" />,
    image: "https://picsum.photos/seed/laxmi/400/300",
  },
];

export const Services: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 8 items initially, or all if button clicked
  const displayedServices = showAll ? services : services.slice(0, 8);

  return (
    <section
      id="services"
      className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-vedic-cream relative"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <KalashIcon className="w-10 h-10 md:w-12 md:h-12 text-vedic-saffron opacity-100" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-vedic-deepSaffron mb-2">
            Divine Services
          </h2>
          <h3 className="font-sans text-xl text-vedic-saffron mb-4 font-bold">
            || शुभ कार्यं कुरु ||
          </h3>
          <div className="w-24 h-1 bg-vedic-saffron mx-auto mb-6"></div>
          <p className="font-sans text-vedic-text max-w-2xl mx-auto text-sm md:text-base px-4 font-medium">
            We provide experienced Pandits for all Vedic rituals. Our services
            are authentic, punctual, and performed with absolute devotion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 bg-vedic-saffron text-white rounded-full font-bold shadow-xl hover:bg-vedic-deepSaffron transition-colors text-lg"
            >
              View All Puja Categories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-vedic-saffron hover:border-vedic-deepSaffron hover:scale-[1.02]"
    >
      {/* Trending Badge */}
      {service.isTrending && (
        <div className="absolute top-4 right-4 z-20 bg-vedic-gold text-vedic-text text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg border border-yellow-200">
          <Star size={10} fill="currentColor" /> POPULAR
        </div>
      )}

      {/* Image Area */}
      <div className="h-40 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-vedic-deepSaffron/80 to-transparent z-10 opacity-70"></div>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-3 left-4 z-20 text-white">
          <h4 className="font-serif text-lg font-bold text-shadow-sm">
            {service.hindiTitle}
          </h4>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 relative">
        <div className="absolute -top-8 right-4 w-12 h-12 bg-vedic-saffron rounded-full flex items-center justify-center text-white border-4 border-white z-20 shadow-md group-hover:bg-vedic-deepSaffron transition-colors">
          {service.icon}
        </div>

        <h3 className="font-sans text-lg font-bold text-vedic-deepSaffron mb-2 mt-1">
          {service.title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 min-h-[60px]">
          {service.description}
        </p>

        {/* Action */}
        <div className="flex justify-between items-center border-t border-orange-100 pt-3">
          <span className="text-xs text-vedic-saffron font-bold">
            Dakshina: On Request
          </span>
          <button className="text-xs font-bold text-white bg-vedic-saffron px-3 py-1.5 rounded hover:bg-vedic-deepSaffron transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};
