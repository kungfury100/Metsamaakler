import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface ServiceHeroProps {
  image: string;
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  onCtaClick?: () => void;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  image,
  title,
  subtitle,
  breadcrumbs,
  onCtaClick,
}) => {
  return (
    <div className="relative w-full h-[560px] md:h-[580px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.45) 100%)' 
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left pt-[74px]">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] mb-6 font-medium tracking-wide">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={`${item.href}-${index}`}>
              {index > 0 && <ChevronRight size={12} className="text-white/60" />}
              <a 
                href={item.href} 
                className={`transition-colors ${
                  index === breadcrumbs.length - 1 
                    ? 'text-[#4ade80] pointer-events-none' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </React.Fragment>
          ))}
        </nav>

        {/* Heading */}
        <h1 
          className="text-white mb-[15px] font-bold leading-[1.1]"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)' 
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p 
          className="text-white/90 text-base md:text-lg mb-[40px] max-w-2xl leading-relaxed font-light"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {subtitle}
        </p>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="group flex items-center gap-3 bg-[#347D4E] hover:bg-[#2d6e43] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold"
        >
          Küsi pakkumist
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};