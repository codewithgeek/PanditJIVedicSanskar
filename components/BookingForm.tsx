import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, User, Phone, CheckCircle } from 'lucide-react';

export const CheckAvailabilityForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
  };

  if (isSubmitSuccessful) {
    return (
      <div className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-2xl border-t-4 border-vedic-gold text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <CheckCircle size={32} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-vedic-maroon mb-2">Request Received</h3>
        <p className="text-gray-600">Pandit Ji will review his Panchang and contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-2xl border-t-4 border-vedic-gold relative overflow-hidden">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
         <svg viewBox="0 0 100 100" className="fill-vedic-gold/20">
            <path d="M0 0 L100 0 L100 100 Q50 50 0 0 Z" />
         </svg>
      </div>

      <h3 className="font-serif text-2xl font-bold text-vedic-maroon mb-1">Check Availability</h3>
      <p className="text-sm text-gray-500 mb-6">Secure your auspicious date before it's taken.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Name Field */}
        <div className="space-y-1">
          <div className="relative">
            <User className="absolute left-3 top-3 text-vedic-maroon/50 w-5 h-5" />
            <input 
              {...register("name", { required: true })}
              type="text" 
              placeholder="Your Full Name"
              className="w-full pl-10 pr-4 py-3 bg-vedic-cream/30 border border-gray-200 rounded-sm focus:outline-none focus:border-vedic-gold focus:ring-1 focus:ring-vedic-gold transition-colors"
            />
          </div>
          {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
        </div>

        {/* Date Field */}
        <div className="space-y-1">
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-vedic-maroon/50 w-5 h-5" />
            <input 
              {...register("date", { required: true })}
              type="date" 
              className="w-full pl-10 pr-4 py-3 bg-vedic-cream/30 border border-gray-200 rounded-sm focus:outline-none focus:border-vedic-gold focus:ring-1 focus:ring-vedic-gold transition-colors text-gray-600"
            />
          </div>
          {errors.date && <span className="text-red-500 text-xs">Date is required</span>}
        </div>

        {/* Service Type Dropdown */}
        <div className="space-y-1">
            <select 
              {...register("service", { required: true })}
              className="w-full px-4 py-3 bg-vedic-cream/30 border border-gray-200 rounded-sm focus:outline-none focus:border-vedic-gold focus:ring-1 focus:ring-vedic-gold transition-colors text-gray-600 appearance-none"
            >
              <option value="">Select Ritual Type...</option>
              <option value="havan">Havan / Yajna</option>
              <option value="musical-phere">Musical Phere (Trending)</option>
              <option value="griha-pravesh">Griha Pravesh</option>
              <option value="naming">Naming Ceremony</option>
              <option value="katha">Satyanarayan Katha</option>
              <option value="other">Other Inquiry</option>
            </select>
          {errors.service && <span className="text-red-500 text-xs">Service selection is required</span>}
        </div>

        {/* Phone Field */}
         <div className="space-y-1">
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-vedic-maroon/50 w-5 h-5" />
            <input 
              {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
              type="tel" 
              placeholder="Mobile Number"
              className="w-full pl-10 pr-4 py-3 bg-vedic-cream/30 border border-gray-200 rounded-sm focus:outline-none focus:border-vedic-gold focus:ring-1 focus:ring-vedic-gold transition-colors"
            />
          </div>
          {errors.phone && <span className="text-red-500 text-xs">Valid 10-digit number required</span>}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-vedic-maroon to-[#600000] text-vedic-gold font-bold py-3 rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 mt-2"
        >
          {isSubmitting ? 'Checking...' : 'Check Availability'}
        </button>

      </form>
    </div>
  );
};