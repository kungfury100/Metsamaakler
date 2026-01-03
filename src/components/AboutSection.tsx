import React from 'react';
import { OptimizedImage } from './ui/OptimizedImage';
import { Quote, Award, Users, Leaf } from 'lucide-react';
import metsaMuuk6 from 'figma:asset/4b2e194a21319b2ceec94f7dc877528470a8fcf4.png';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE ABOUT SECTION - ENTERPRISE GRADE
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Architecture:
// - Inverted layout (Content Left / Image Right)
// - High-fidelity typography and whitespace
// - Interactive glassmorphism cards
// - Parallax-ready image container
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const AboutSection: React.FC = () => {
  return (
    <section
      id="meist"
      style={{
        position: 'relative',
        zIndex: 2,
        isolation: 'isolate',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* 
             LEFT COLUMN: NARRATIVE CONTENT 
             - Focused on typography and readability
             - Floating statistic cards
          */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative background line */}
            <div 
              className="absolute -left-8 top-0 bottom-0 w-px hidden lg:block"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(52, 125, 78, 0.2) 20%, rgba(52, 125, 78, 0.2) 80%, transparent)',
              }}
            />

            <div className="space-y-8">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(52,125,78,0.08)] border border-[rgba(52,125,78,0.1)]">
                <Users size={14} className="text-[rgb(52,125,78)]" aria-label="metsa müük - meie lugu" />
                <span className="text-xs font-bold tracking-widest uppercase text-[rgb(52,125,78)]">
                  Meie Lugu
                </span>
              </div>

              {/* Main Headline */}
              <h2
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  color: 'rgb(22, 56, 35)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                Põlvkondade tarkus <br/>
                <span 
                  style={{ 
                    background: 'linear-gradient(135deg, rgb(52, 125, 78) 0%, rgb(88, 165, 118) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  metsamajandamises
                </span>
              </h2>

              {/* Lead Paragraph */}
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: 'rgb(55, 65, 60)',
                  lineHeight: 1.7,
                }}
              >
                Metsamaakler on kasvanud välja sügavast austusest Eesti looduse vastu. 
                Meie meeskond ühendab endas pikaajalised metsandusteadmised ja kaasaegse 
                finantsekspertiisi, pakkudes metsaomanikele partnerlust, mis kestab põlvkondi.
              </p>

              {/* Quote Card */}
              <div 
                className="relative p-8 mt-8 rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(250, 254, 252, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Quote Icon decoration */}
                <Quote 
                  className="absolute top-6 right-6 text-[rgba(52,125,78,0.1)] transform rotate-12 group-hover:rotate-0 transition-transform duration-700" 
                  size={64} 
                  aria-label="metsa müük - eksperdi arvamus"
                />
                
                <blockquote className="relative z-10">
                  <p 
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '1.25rem',
                      fontStyle: 'italic',
                      color: 'rgb(34, 75, 48)',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                    }}
                  >
                    "Mets on enamat kui lihtsalt taastuv loodusressurss ning anname endast alati parima, et väärtustada kogu metsamajanduslikku tsüklit pikas perspektiivis."
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-10 h-px bg-[rgba(52,125,78,0.3)]" />
                    <span className="text-sm font-bold text-[rgb(22,56,35)] tracking-wide">
                      Jaanus Kask, Juhatuse liige
                    </span>
                  </footer>
                </blockquote>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[rgb(52,125,78)]">15+</span>
                  <span className="text-sm font-medium text-[rgb(88,98,90)] uppercase tracking-wide mt-1">Aastat kogemust</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[rgb(52,125,78)]">1500+</span>
                  <span className="text-sm font-medium text-[rgb(88,98,90)] uppercase tracking-wide mt-1">Õnnestunud tehingut</span>
                </div>
              </div>
            </div>
          </div>

          {/* 
             RIGHT COLUMN: VISUAL MASTERPIECE
             - Complex layering with organic shapes
             - High quality portrait
          */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
              
              {/* Main Image Frame */}
              <div 
                className="absolute inset-0 rounded-[32px] overflow-hidden z-10 shadow-2xl transition-all duration-700 group"
                style={{
                  transform: 'perspective(1000px) rotateY(-2deg)',
                  boxShadow: '20px 30px 60px rgba(22, 56, 35, 0.15)',
                }}
              >
                <div className="absolute inset-0 bg-[rgba(22,56,35,0.1)] z-10 mix-blend-multiply pointer-events-none" />
                
                <OptimizedImage
                  src={`${metsaMuuk6.split('#')[0]}#filename=metsa-muuk-6.png`}
                  alt="metsa müük ja metsaomanik"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  fit="cover"
                  // This image is below the fold, so we use default lazy loading
                  // But we ensure high aspect ratio stability
                />

                {/* Inner Border - Glass effect */}
                <div className="absolute inset-4 rounded-[24px] border border-white/20 z-20 pointer-events-none" />
              </div>

              {/* Floating Badge - Top Right */}
              <div 
                className="absolute -top-6 -right-6 z-30 bg-white p-4 rounded-2xl shadow-xl animate-[float_6s_ease-in-out_infinite]"
                style={{
                  border: '1px solid rgba(52, 125, 78, 0.1)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgb(240,250,245)] flex items-center justify-center">
                    <Award className="text-[rgb(52,125,78)]" size={20} aria-label="metsa müük - pikaajaline kogemus" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[rgb(22,56,35)]">Pikaajaline kogemus</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div 
                className="absolute -bottom-8 -left-8 z-30 bg-[rgb(22,56,35)] p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <Leaf className="text-[rgb(168,208,188)]" size={24} aria-label="metsa müük - jätkusuutlikkus" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-none">
                      Jätkusuutlik metsamajandus
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Abstract Elements */}
              <div 
                className="absolute -right-12 -bottom-12 w-64 h-64 bg-[radial-gradient(circle,rgba(255,130,67,0.15)_0%,transparent_70%)] z-0 rounded-full blur-2xl pointer-events-none" 
              />
              <div 
                className="absolute -left-12 -top-12 w-80 h-80 bg-[radial-gradient(circle,rgba(52,125,78,0.1)_0%,transparent_70%)] z-0 rounded-full blur-3xl pointer-events-none" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};
