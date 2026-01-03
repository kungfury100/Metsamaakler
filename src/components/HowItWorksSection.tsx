import React from 'react';
import { Reveal } from './utils/Reveal';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE HOW IT WORKS COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Completely separated grid layout logic.
// Manages its own container width, padding, and internal responsive behavior.
// ═══════════════════════════════════════════════════════════════════════════════════════════════

interface StepProps {
  title: string;
  icon: React.ReactNode;
  isLast: boolean;
}

const Step: React.FC<StepProps> = ({ title, icon, isLast }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Icon Container */}
      <div
        className="relative flex items-center justify-center mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-2"
        style={{
          width: '120px',
          height: '120px',
        }}
      >
        {/* SVG Icon with Drop Shadow */}
        <div
          className="relative z-10 w-full h-full drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-xl"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(52, 125, 78, 0.1))',
          }}
        >
          {icon}
        </div>
      </div>

      {/* Step Title */}
      <h3
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '1.125rem',
          fontWeight: 600,
          color: 'rgb(22, 56, 35)',
          letterSpacing: '-0.02em',
          textAlign: 'center',
          transition: 'color 0.3s ease',
        }}
        className="group-hover:text-[rgb(52,125,78)]"
      >
        {title}
      </h3>

      {/* Decorative Connection Line (Desktop Only) */}
      {!isLast && (
        <div 
          className="hidden lg:block absolute top-[60px] left-[calc(50%+60px)] w-[calc(100%-120px)] h-[2px]"
          style={{
            background: 'linear-gradient(90deg, rgba(52,125,78,0.1) 0%, rgba(52,125,78,0.3) 50%, rgba(52,125,78,0.1) 100%)',
            zIndex: 0,
          }}
        >
          <div className="absolute top-0 left-0 h-full w-1/3 bg-[rgb(52,125,78)] opacity-20 animate-pulse" style={{ borderRadius: '1px' }} />
        </div>
      )}
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: 'Hinnapäring',
      icon: (
        <svg viewBox="0 0 120 120" fill="none">
          <title>Metsa müük - hinnapäring ja konsultatsioon</title>
          <rect
            x="20"
            y="30"
            width="80"
            height="60"
            rx="4"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <path
            d="M30 45 L50 60 L90 40"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="30" y1="70" x2="70" y2="70" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="78" x2="55" y2="78" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Hindamine',
      icon: (
        <svg viewBox="0 0 120 120" fill="none">
          <title>Metsa müük - põhjalik hindamine</title>
          <circle cx="60" cy="60" r="35" stroke="rgb(52, 125, 78)" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.5)" />
          <path
            d="M60 35 L60 60 L75 75"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="60" cy="60" r="3" fill="rgb(52, 125, 78)" />
          <line x1="60" y1="20" x2="60" y2="25" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="60" y1="95" x2="60" y2="100" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="60" x2="25" y2="60" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="95" y1="60" x2="100" y2="60" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Täpne hinnapakkumine',
      icon: (
        <svg viewBox="0 0 120 120" fill="none">
          <title>Metsa müük - täpne ja siduv hinnapakkumine</title>
          <rect
            x="30"
            y="25"
            width="60"
            height="70"
            rx="3"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <line x1="40" y1="40" x2="80" y2="40" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="50" x2="70" y2="50" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="60" x2="75" y2="60" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M40 75 L50 70 L60 80 L80 65"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="60"
            y="88"
            textAnchor="middle"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              fill: 'rgb(52, 125, 78)',
            }}
          >
            €
          </text>
        </svg>
      ),
    },
    {
      title: 'Tehingu läbiviimine',
      icon: (
        <svg viewBox="0 0 120 120" fill="none">
          <title>Metsa müük - notariaalne tehing</title>
          <rect
            x="30"
            y="20"
            width="60"
            height="80"
            rx="3"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <line x1="40" y1="35" x2="80" y2="35" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="45" x2="70" y2="45" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="55" x2="75" y2="55" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M45 70 Q50 75 55 70"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M55 75 L60 85 L75 65"
            stroke="rgb(52, 125, 78)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="67" cy="80" r="2" fill="rgb(52, 125, 78)" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        background: 'transparent',
        padding: '29px 0',
        zIndex: 2,
        isolation: 'isolate',
      }}
    >
      <div className="w-full px-6 mx-auto" style={{ maxWidth: '1180px' }}>
        {/* Steps Grid Container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {steps.map((step, index) => (
            <Reveal 
              key={index} 
              delay={index * 0.15} 
              width="100%" 
              duration={0.6}
            >
              <Step
                title={step.title}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};