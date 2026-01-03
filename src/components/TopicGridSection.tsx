import React, { memo } from 'react';
import { Reveal } from './utils/Reveal';
import { 
  FileText, 
  Map, 
  Trees, 
  FileSignature, 
  Sprout,
  BadgeEuro,
  Coins,
  Tractor,
  Tag,
  PieChart,
  ArrowUpRight,
  LucideIcon
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE TOPIC GRID SECTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Optimization Note:
// - Components are split to isolate render cycles.
// - Memoization prevents sibling re-renders on hover states if parent state were to change.
// - Interaction performance optimized via 'transform' and 'opacity' composites.
// ═══════════════════════════════════════════════════════════════════════════════════════════════

interface TopicItem {
  title: string;
  icon: LucideIcon;
  url: string;
}

const TOPICS: TopicItem[] = [
  // Row 1
  { title: "Metsateatis", icon: FileText, url: "https://metsamaakler.ee/metsateatis/" },
  { title: "Metsakava", icon: Map, url: "https://metsamaakler.ee/metsamajandamiskava/" },
  { title: "Hooldusraied", icon: Trees, url: "https://metsamaakler.ee/hooldusraied/" },
  { title: "Raieõigus", icon: FileSignature, url: "https://metsamaakler.ee/raieoiguse-muuk/" },
  { title: "Metsa istutamine", icon: Sprout, url: "https://metsamaakler.ee/metsa-istutamine/" },
  // Row 2
  { title: "Metsa hind", icon: BadgeEuro, url: "https://metsamaakler.ee/metsa-hind/" },
  { title: "Raie hind", icon: Coins, url: "https://metsamaakler.ee/raieoiguse-hind/" },
  { title: "Põllumaa hind", icon: Tractor, url: "https://metsamaakler.ee/pollumaa-hind/" },
  { title: "Istikute hind", icon: Tag, url: "https://metsamaakler.ee/istikute-hind/" },
  { title: "Metsamajandus", icon: PieChart, url: "https://metsamaakler.ee/metsamajandus/" },
];

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// ISOLATED CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════

interface TopicCardProps {
  item: TopicItem;
  index: number;
}

const TopicCard = memo(({ item, index }: TopicCardProps) => {
  return (
    <a
      href={item.url}
      className="group relative aspect-square flex flex-col items-center justify-center p-6 transition-all duration-500 bg-white/40 hover:bg-white/80 border border-white/60 hover:border-[rgb(52,125,78)]/20 backdrop-blur-sm rounded-xl overflow-hidden will-change-transform"
      aria-label={`Loe lähemalt: ${item.title}`}
    >
      {/* Hover Background Gradient - Hardware Accelerated */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(52, 125, 78, 0.03) 0%, transparent 70%)',
          willChange: 'opacity',
        }}
      />

      {/* Icon Container */}
      <div className="relative z-10 mb-6 text-[rgb(88,98,90)] group-hover:text-[rgb(34,75,48)] transition-colors duration-300">
        <item.icon 
          strokeWidth={1} 
          size={32} 
          className="transform group-hover:scale-110 transition-transform duration-500 ease-out will-change-transform"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h4 className="text-sm md:text-base lg:text-lg font-medium lg:font-light text-[rgb(22,56,35)] tracking-wide group-hover:font-normal transition-all duration-300">
          {item.title}
        </h4>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <ArrowUpRight size={12} className="text-[rgb(52,125,78)]" />
      </div>

      {/* Bottom Line Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[rgb(52,125,78)] opacity-0 group-hover:w-1/3 group-hover:opacity-40 transition-all duration-500 delay-75 rounded-full" />
    </a>
  );
});

// Display name for dev tools
TopicCard.displayName = 'TopicCard';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// MAIN SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const TopicGridSection: React.FC = () => {
  return (
    <section
      className="relative z-10 py-12 lg:py-24"
      id="teenused-grid"
      aria-labelledby="topic-grid-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-24 text-center max-w-3xl mx-auto">
           <h2
            id="topic-grid-title"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'rgb(22, 56, 35)',
              marginBottom: '1rem',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
           >
             Metsa müük ning metsandusalased infopostitused
           </h2>
           <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'rgb(88, 98, 90)',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
           >
             Lühikokkuvõtted metsaomanikule metsandusalastel teemadel
           </p>
        </div>

        {/* 
          GRID LAYOUT 
          - 2 cols mobile, 3 cols tablet, 5 cols desktop
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {TOPICS.map((item, index) => (
            <Reveal 
              key={item.title} 
              delay={index * 0.05} 
              duration={0.5} 
              width="100%"
            >
              <TopicCard 
                item={item} 
                index={index} 
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
