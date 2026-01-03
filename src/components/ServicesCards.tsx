import React from 'react';

interface ServiceCardProps {
  title: string;
  animation: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, animation }) => {
  return (
    <button
      className="group relative w-full text-left transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'rgb(255, 255, 255)',
        borderRadius: '12px',
        border: '1px solid rgba(52, 125, 78, 0.12)',
        padding: '32px 24px',
        boxShadow: '0 2px 8px rgba(52, 125, 78, 0.06)',
        cursor: 'pointer',
      }}
    >
      {/* animation container */}
      <div
        className="mb-6 flex items-center justify-center"
        style={{
          height: '160px',
        }}
      >
        {animation}
      </div>

      {/* title */}
      <h3
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '1.125rem',
          fontWeight: 600,
          color: 'rgb(22, 56, 35)',
          letterSpacing: '-0.02em',
          textAlign: 'center',
        }}
      >
        {title}
      </h3>

      {/* hover indicator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, rgb(52, 125, 78) 0%, rgb(68, 145, 95) 100%)',
          borderRadius: '0 0 12px 12px',
        }}
      />
    </button>
  );
};

export const ServicesCards: React.FC = () => {
  return (
    <section
      className="relative py-24"
      style={{
        background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(250, 254, 252) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* metsa müük */}
          <ServiceCard
            title="Metsa müük"
            animation={
              <svg viewBox="0 0 160 160" fill="none" style={{ width: '100%', height: '100%' }}>
                <g className="animate-property-sale">
                  {/* trees */}
                  <circle cx="60" cy="70" r="15" fill="rgba(52, 125, 78, 0.2)" className="animate-tree-1" />
                  <rect x="57" y="70" width="6" height="25" fill="rgb(88, 78, 68)" />
                  
                  <circle cx="80" cy="65" r="18" fill="rgba(52, 125, 78, 0.25)" className="animate-tree-2" />
                  <rect x="77" y="65" width="6" height="30" fill="rgb(88, 78, 68)" />
                  
                  <circle cx="100" cy="72" r="14" fill="rgba(52, 125, 78, 0.2)" className="animate-tree-3" />
                  <rect x="97" y="72" width="6" height="23" fill="rgb(88, 78, 68)" />
                  
                  {/* property boundary */}
                  <path
                    d="M40 95 L120 95 L120 50 L40 50 Z"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="animate-boundary"
                  />
                  
                  {/* location pin */}
                  <g className="animate-pin">
                    <path
                      d="M80 110 C80 110 70 100 70 92 C70 86 74 82 80 82 C86 82 90 86 90 92 C90 100 80 110 80 110 Z"
                      fill="rgb(255, 140, 90)"
                      stroke="rgb(255, 140, 90)"
                      strokeWidth="1"
                    />
                    <circle cx="80" cy="92" r="3" fill="white" />
                  </g>
                </g>

                <style>{`
                  @keyframes tree-sway-1 {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(2px); }
                  }
                  @keyframes tree-sway-2 {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(-2px); }
                  }
                  @keyframes tree-sway-3 {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(1.5px); }
                  }
                  @keyframes boundary-pulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                  }
                  @keyframes pin-bounce {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                  }
                  .animate-tree-1 { animation: tree-sway-1 3s ease-in-out infinite; transform-origin: center bottom; }
                  .animate-tree-2 { animation: tree-sway-2 3.5s ease-in-out infinite; transform-origin: center bottom; }
                  .animate-tree-3 { animation: tree-sway-3 2.8s ease-in-out infinite; transform-origin: center bottom; }
                  .animate-boundary { animation: boundary-pulse 2s ease-in-out infinite; }
                  .animate-pin { animation: pin-bounce 2s ease-in-out infinite; }
                `}</style>
              </svg>
            }
          />

          {/* raieõiguse müük */}
          <ServiceCard
            title="Raieõiguse müük"
            animation={
              <svg viewBox="0 0 160 160" fill="none" style={{ width: '100%', height: '100%' }}>
                <g className="timber-animation">
                  {/* logs stack */}
                  <ellipse cx="80" cy="110" rx="45" ry="8" fill="rgba(88, 78, 68, 0.15)" className="log-shadow" />
                  
                  {/* bottom log */}
                  <rect x="50" y="95" width="60" height="12" rx="6" fill="rgb(139, 117, 96)" className="log-1" />
                  <line x1="55" y1="95" x2="55" y2="107" stroke="rgb(115, 95, 76)" strokeWidth="1" />
                  <line x1="65" y1="95" x2="65" y2="107" stroke="rgb(115, 95, 76)" strokeWidth="1" />
                  <line x1="75" y1="95" x2="75" y2="107" stroke="rgb(115, 95, 76)" strokeWidth="1" />
                  <line x1="85" y1="95" x2="85" y2="107" stroke="rgb(115, 95, 76)" strokeWidth="1" />
                  <line x1="95" y1="95" x2="95" y2="107" stroke="rgb(115, 95, 76)" strokeWidth="1" />
                  <line x1="105" y1="95" x2="105" y2="107" stroke="rgb(115, 95, 76)" strokeWidth="1" />
                  
                  {/* middle log */}
                  <rect x="55" y="80" width="50" height="12" rx="6" fill="rgb(156, 130, 104)" className="log-2" />
                  <line x1="60" y1="80" x2="60" y2="92" stroke="rgb(130, 108, 86)" strokeWidth="1" />
                  <line x1="70" y1="80" x2="70" y2="92" stroke="rgb(130, 108, 86)" strokeWidth="1" />
                  <line x1="80" y1="80" x2="80" y2="92" stroke="rgb(130, 108, 86)" strokeWidth="1" />
                  <line x1="90" y1="80" x2="90" y2="92" stroke="rgb(130, 108, 86)" strokeWidth="1" />
                  <line x1="100" y1="80" x2="100" y2="92" stroke="rgb(130, 108, 86)" strokeWidth="1" />
                  
                  {/* top log */}
                  <rect x="60" y="65" width="40" height="12" rx="6" fill="rgb(173, 145, 118)" className="log-3" />
                  <line x1="65" y1="65" x2="65" y2="77" stroke="rgb(145, 120, 98)" strokeWidth="1" />
                  <line x1="75" y1="65" x2="75" y2="77" stroke="rgb(145, 120, 98)" strokeWidth="1" />
                  <line x1="85" y1="65" x2="85" y2="77" stroke="rgb(145, 120, 98)" strokeWidth="1" />
                  <line x1="95" y1="65" x2="95" y2="77" stroke="rgb(145, 120, 98)" strokeWidth="1" />
                  
                  {/* checkmark indicator */}
                  <circle cx="115" cy="65" r="14" fill="rgb(52, 125, 78)" className="check-circle" />
                  <path d="M108 65 L112 69 L122 59" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-mark" />
                </g>

                <style>{`
                  @keyframes log-stack-1 {
                    0% { opacity: 0; transform: translateY(-10px); }
                    20%, 100% { opacity: 1; transform: translateY(0); }
                  }
                  @keyframes log-stack-2 {
                    0%, 30% { opacity: 0; transform: translateY(-10px); }
                    50%, 100% { opacity: 1; transform: translateY(0); }
                  }
                  @keyframes log-stack-3 {
                    0%, 60% { opacity: 0; transform: translateY(-10px); }
                    80%, 100% { opacity: 1; transform: translateY(0); }
                  }
                  @keyframes check-appear {
                    0%, 70% { opacity: 0; transform: scale(0); }
                    85% { transform: scale(1.1); }
                    100% { opacity: 1; transform: scale(1); }
                  }
                  @keyframes check-draw {
                    0%, 70% { stroke-dasharray: 0 20; }
                    100% { stroke-dasharray: 20 20; }
                  }
                  .log-1 { animation: log-stack-1 3s ease-out infinite; }
                  .log-2 { animation: log-stack-2 3s ease-out infinite; }
                  .log-3 { animation: log-stack-3 3s ease-out infinite; }
                  .check-circle { animation: check-appear 3s ease-out infinite; }
                  .check-mark { animation: check-draw 3s ease-out infinite; }
                `}</style>
              </svg>
            }
          />

          {/* metsa hindamine */}
          <ServiceCard
            title="Metsa hindamine"
            animation={
              <svg viewBox="0 0 160 160" fill="none" style={{ width: '100%', height: '100%' }}>
                <g className="evaluation-animation">
                  {/* clipboard */}
                  <rect x="50" y="45" width="60" height="75" rx="4" fill="white" stroke="rgb(52, 125, 78)" strokeWidth="1.5" />
                  
                  {/* clip */}
                  <rect x="70" y="40" width="20" height="8" rx="2" fill="rgb(52, 125, 78)" />
                  
                  {/* checklist items */}
                  <g className="check-item-1">
                    <rect x="60" y="60" width="12" height="12" rx="2" stroke="rgb(52, 125, 78)" strokeWidth="1.5" fill="none" />
                    <path d="M63 66 L66 69 L69 63" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="check-1" />
                    <line x1="78" y1="66" x2="95" y2="66" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  </g>
                  
                  <g className="check-item-2">
                    <rect x="60" y="78" width="12" height="12" rx="2" stroke="rgb(52, 125, 78)" strokeWidth="1.5" fill="none" />
                    <path d="M63 84 L66 87 L69 81" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="check-2" />
                    <line x1="78" y1="84" x2="95" y2="84" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  </g>
                  
                  <g className="check-item-3">
                    <rect x="60" y="96" width="12" height="12" rx="2" stroke="rgb(52, 125, 78)" strokeWidth="1.5" fill="none" />
                    <path d="M63 102 L66 105 L69 99" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="check-3" />
                    <line x1="78" y1="102" x2="95" y2="102" stroke="rgb(52, 125, 78)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  </g>
                  
                  {/* magnifying glass */}
                  <g className="magnifier">
                    <circle cx="95" cy="95" r="18" stroke="rgb(255, 140, 90)" strokeWidth="2" fill="rgba(255, 140, 90, 0.1)" />
                    <line x1="108" y1="108" x2="120" y2="120" stroke="rgb(255, 140, 90)" strokeWidth="2.5" strokeLinecap="round" />
                  </g>
                </g>

                <style>{`
                  @keyframes check-draw-1 {
                    0%, 20% { stroke-dasharray: 0 10; opacity: 0; }
                    40% { stroke-dasharray: 10 10; opacity: 1; }
                    100% { stroke-dasharray: 10 10; opacity: 1; }
                  }
                  @keyframes check-draw-2 {
                    0%, 40% { stroke-dasharray: 0 10; opacity: 0; }
                    60% { stroke-dasharray: 10 10; opacity: 1; }
                    100% { stroke-dasharray: 10 10; opacity: 1; }
                  }
                  @keyframes check-draw-3 {
                    0%, 60% { stroke-dasharray: 0 10; opacity: 0; }
                    80% { stroke-dasharray: 10 10; opacity: 1; }
                    100% { stroke-dasharray: 10 10; opacity: 1; }
                  }
                  @keyframes magnifier-scan {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(-8px, -8px); }
                    50% { transform: translate(0, -8px); }
                    75% { transform: translate(-8px, 0); }
                  }
                  .check-1 { animation: check-draw-1 4s ease-in-out infinite; }
                  .check-2 { animation: check-draw-2 4s ease-in-out infinite; }
                  .check-3 { animation: check-draw-3 4s ease-in-out infinite; }
                  .magnifier { animation: magnifier-scan 4s ease-in-out infinite; }
                `}</style>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};