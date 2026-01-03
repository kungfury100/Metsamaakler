import React, { memo } from 'react';
import { TreePine, Axe, ClipboardCheck, ArrowRight, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { Reveal } from './utils/Reveal';
import { Parallax } from './utils/Parallax';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE SERVICES CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Performance optimized, zero-state architecture.
// Styles migrated to native Tailwind for better CSSOM performance (no style injection).
// ═══════════════════════════════════════════════════════════════════════════════════════════════

interface ServiceCardPremiumProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  highlight?: string;
}

const ServiceCardPremium = memo(({ 
  title, 
  description, 
  features,
  icon,
  ctaText,
  ctaLink,
  highlight,
}: ServiceCardPremiumProps) => {
  return (
    <article 
      className="group relative flex flex-col h-full bg-white rounded-[10px] border border-[rgba(52,125,78,0.18)] shadow-[0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform hover:border-[rgba(52,125,78,0.4)] hover:shadow-[0_12px_32px_rgba(52,125,78,0.16)] hover:-translate-y-1.5"
    >
      <div className="flex flex-col flex-grow p-[clamp(28px,4.5vw,40px)] pt-[clamp(32px,5vw,44px)]">
        
        {/* Highlight Badge */}
        {highlight && (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-4 bg-gradient-to-br from-[rgba(255,149,0,0.12)] to-[rgba(255,149,0,0.08)] border border-[rgba(255,149,0,0.25)] rounded-md text-xs font-bold text-[rgb(204,102,0)] uppercase tracking-wider">
            <TrendingUp size={13} strokeWidth={2.8} className="text-[rgb(255,149,0)]" aria-label="metsa müük - populaarne teenus" />
            <span>{highlight}</span>
          </div>
        )}

        {/* Icon */}
        <Parallax offset={8} className="inline-block">
          <div className="inline-flex self-start mb-[clamp(22px,3.5vw,28px)] text-[rgb(52,125,78)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform group-hover:text-[rgb(68,145,95)] group-hover:scale-105 group-hover:rotate-1">
            {icon}
          </div>
        </Parallax>

        {/* Title */}
        <h3 className="font-['Inter'] text-[clamp(1.375rem,3.2vw,1.625rem)] font-bold text-[rgb(22,56,35)] tracking-tight leading-[1.2] mb-[clamp(14px,2.2vw,16px)]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-['Inter'] text-[clamp(0.875rem,1.6vw,0.938rem)] text-[rgb(45,45,45)] leading-[1.68] mb-[clamp(22px,3.5vw,28px)]">
          {description}
        </p>

        {/* Features List */}
        <div className="flex flex-col gap-[clamp(10px,1.8vw,12px)] mb-[clamp(28px,4vw,36px)] flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2.5 opacity-90 transition-opacity duration-250 group-hover:opacity-100">
              <CheckCircle2 
                size={18} 
                strokeWidth={2.2} 
                className="text-[rgb(52,125,78)] flex-shrink-0 mt-[2px]"
                aria-label="metsa müük - teenuse omadus"
              />
              <span className="font-['Inter'] text-[clamp(0.813rem,1.5vw,0.875rem)] text-[rgb(50,50,50)] leading-normal">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href={ctaLink}
          className="relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-br from-[rgb(52,125,78)] to-[rgb(68,145,95)] rounded-lg border-none shadow-[0_4px_12px_rgba(52,125,78,0.25)] overflow-hidden transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-[0_6px_20px_rgba(52,125,78,0.35)] group-hover:from-[rgb(68,145,95)] group-hover:to-[rgb(52,125,78)]"
        >
          {/* Shine Effect */}
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transition-[left] duration-500 ease-out group-hover:left-[100%]" />
          
          <span className="font-['Inter'] text-[clamp(0.875rem,1.6vw,0.938rem)] font-bold text-white tracking-wide z-10">
            {ctaText}
          </span>
          <ArrowRight 
            size={18} 
            strokeWidth={2.8} 
            className="text-white transition-transform duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1 z-10"
            style={{ flexShrink: 0 }} 
            aria-label="metsa müük - vaata lähemalt"
          />
        </a>
      </div>
    </article>
  );
});

ServiceCardPremium.displayName = 'ServiceCardPremium';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE SERVICES SECTION WRAPPER
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const ServicesCardsPremium: React.FC = () => {
  return (
    <section id="teenused" className="relative py-[clamp(18px,3vw,29px)] bg-transparent z-10 isolate">
      <div className="max-w-[1320px] mx-auto px-[clamp(18px,4.5vw,36px)]">
        
        {/* Section Header */}
        <div className="text-center mb-[clamp(48px,8vw,72px)] max-w-[880px] mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-br from-[rgba(52,125,78,0.1)] to-[rgba(68,145,95,0.08)] border border-[rgba(52,125,78,0.2)] mb-6 shadow-[0_2px_8px_rgba(52,125,78,0.08)]">
            <Sparkles 
              size={16} 
              strokeWidth={2.6} 
              className="text-[rgb(52,125,78)]" 
              aria-label="metsa müük - tõestatud lahendused"
            />
            <span className="font-['Inter'] text-[clamp(0.813rem,1.5vw,0.875rem)] font-bold text-[rgb(52,125,78)] lowercase tracking-wide">
              tõestatud lahendused
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-['Inter'] text-[clamp(2rem,5.5vw,2.875rem)] font-extrabold text-[rgb(22,56,35)] tracking-tighter leading-tight mb-6">
            Metsa müük ja meie teenused
          </h2>

          {/* Subheadline */}
          <p className="font-['Inter'] text-[clamp(1rem,2.1vw,1.125rem)] text-[rgb(30,30,30)] leading-relaxed max-w-[720px] mx-auto mb-[clamp(39.2px,6.3vw,56px)]">
            Metsa müük otse meile või aitame teil leida parima hinnaga kokkuostja meie partnerite seas vältides vahendajaid!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[36px]">
          <Reveal delay={0.1} width="100%" duration={0.6} className="h-full">
            <ServiceCardPremium
              title="Metsa müük"
              description="müüme teie metsaomandit turvaliselt ja tõhusalt, kasutades laia ostjatevõrgustikku ja turunduskogemust parima hinna saavutamiseks"
              features={[
                'Tasuta hindamine ja konsultatsioon',
                'Lai ostjatevõrgustik ja turundus',
                'Juriidiline tugi läbi protsessi',
              ]}
              icon={<TreePine size={40} className="lg:w-[52px] lg:h-[52px]" strokeWidth={0.5} aria-label="metsa müük - teenus" />}
              ctaText="Metsa müük"
              ctaLink="/ostame-kasvavat-metsa/"
            />
          </Reveal>

          <Reveal delay={0.2} width="100%" duration={0.6} className="h-full">
            <ServiceCardPremium
              title="Raieõiguse müük"
              description="müüme teie metsa raieõiguse otse puidutööstusele, säilitades maaomandiõiguse ja vabastades teid organiseerimise koormusest"
              features={[
                'Otsemüük ilma vahendajateta',
                'Kiire protsess ja turuhind',
                'Maaomandiõigus jääb teile',
              ]}
              icon={<Axe size={40} className="lg:w-[52px] lg:h-[52px]" strokeWidth={0.5} aria-label="metsa müük - raieõiguse võõrandamine" />}
              ctaText="Raieõiguse müük"
              ctaLink="/raieoiguse-muuk/"
            />
          </Reveal>

          <Reveal delay={0.3} width="100%" duration={0.6} className="h-full">
            <ServiceCardPremium
              title="Metsa hindamine"
              description="anname teile täpse ja objektiivse ülevaate oma metsa tegelikust väärtusest, kasutades kaasaegseid hindamismeetodeid ja turuanalüüsi"
              features={[
                'Põhjalik varu ja maa-analüüs',
                'Objektiivne turuhinna määramine',
                'Detailne aruanne ja soovitused',
              ]}
              icon={<ClipboardCheck size={40} className="lg:w-[52px] lg:h-[52px]" strokeWidth={0.5} aria-label="metsa müük - hindamine" />}
              ctaText="Metsa hindamine"
              ctaLink="/metsa-hindamine/"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
