import React from 'react';
import { Phone, Mail, ArrowRight, MessageSquare } from 'lucide-react';

interface ServiceSidebarProps {
  title?: string;
  phone?: string;
  email?: string;
  onCtaClick?: () => void;
}

export const ServiceSidebar: React.FC<ServiceSidebarProps> = ({
  title = "Alustame koostööd",
  phone = "+372 55 555 555",
  email = "info@eestimetsamaakler.ee",
  onCtaClick,
}) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
    } else {
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const formattedPhone = phone.replace(/\s/g, '');

  return (
    <aside className="w-full sticky top-32 z-20">
      <div 
        className="relative overflow-hidden rounded-[24px] bg-[#F0F7F4] border-2 border-[#163823] shadow-[0_20px_40px_-12px_rgba(22,56,35,0.1)] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(22,56,35,0.15)]"
      >
        {/* Background decorative elements for premium feel */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <h3 
            className="text-[24px] md:text-[28px] font-bold text-[#163823] mb-8 tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {title}
          </h3>

          <div className="w-full flex flex-col gap-4 mb-8">
            <a 
              href={`tel:${formattedPhone}`} 
              className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-transparent hover:border-[#347D4E]/20 transition-all duration-300 group w-full"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-[#E6F0EB] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#347D4E]/30 transition-all duration-300">
                <Phone size={18} className="text-[#347D4E]" />
              </div>
              <span className="font-bold text-base text-[#163823] font-inter tracking-tight group-hover:text-[#347D4E] transition-colors whitespace-nowrap">
                {phone}
              </span>
            </a>

            <a 
              href={`mailto:${email}`} 
              className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-transparent hover:border-[#347D4E]/20 transition-all duration-300 group w-full"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-[#E6F0EB] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#347D4E]/30 transition-all duration-300">
                <Mail size={18} className="text-[#347D4E]" />
              </div>
              <span className="font-bold text-base text-[#163823] font-inter tracking-tight group-hover:text-[#347D4E] transition-colors whitespace-nowrap">
                {email}
              </span>
            </a>
          </div>

          <button
            onClick={scrollToContact}
            className="w-full bg-[#347D4E] text-white py-4 px-6 rounded-xl font-bold text-[17px] shadow-lg shadow-[#347D4E]/25 hover:bg-[#2a6640] hover:shadow-xl hover:shadow-[#347D4E]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Küsi pakkumist
            <ArrowRight size={18} className="opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Trust micro-copy */}
          <p className="mt-5 text-xs font-medium text-[#58625A]/80 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#347D4E] animate-pulse"></span>
            Vastame 1 tööpäeva jooksul
          </p>
        </div>
      </div>
    </aside>
  );
};