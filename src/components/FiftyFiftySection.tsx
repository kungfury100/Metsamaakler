import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Check } from 'lucide-react';
import metsaMuuk5 from '../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png';
import { Reveal } from './utils/Reveal';
import { Parallax } from './utils/Parallax';
import { MicroInteractive } from './MicroInteractive';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE FIFTY-FIFTY SECTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Independent split layout component.
// Self-contained content and image handling.
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const FiftyFiftySection: React.FC = () => {
  const benefits = [
    'Professionaalne metsahindamine ja turuanalüüs',
    'Läbipaistev ja kiire müügiprotsess',
    'Maksimaalse hinna saavutamine teie metsale',
    'Kogu dokumentatsiooni korraldamine',
    'Õiguslik nõustamine ja tehingute tugi',
  ];

  return (
    <section className="relative py-12 lg:py-24 z-[2] isolate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image Container */}
          <Reveal width="100%" duration={0.8} delay={0.1} className="order-first lg:order-first">
            <Parallax offset={30}>
              <div className="relative h-[400px] lg:h-[640px] overflow-hidden rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src={`${metsaMuuk5.split('#')[0]}#filename=metsa-muuk-5.png`}
                  alt="metsa müük ja hooldus"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Organic Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(22,56,35,0.05)] pointer-events-none" />
              </div>
            </Parallax>
          </Reveal>

          {/* Right Side - Content Container */}
          <Reveal width="100%" duration={0.8} delay={0.3}>
            <div className="flex flex-col gap-8 lg:gap-10 p-8 lg:p-0 rounded-3xl bg-[#E9F1EC] lg:bg-transparent">
              {/* Heading Group */}
              <div className="flex flex-col gap-4 lg:gap-6">
                <h2 className="font-inter font-bold text-[rgb(22,56,35)] tracking-tight leading-[1.1] text-[clamp(2rem,5vw,2.75rem)]">
                  Metsa müük <br className="hidden lg:block" />
                  usaldage spetsialistidele
                </h2>
                
                <p className="font-inter font-normal text-[rgb(52,85,65)] tracking-tight leading-relaxed text-lg lg:text-[1.125rem]">
                  Metsamaakler pakub täisteenust metsaomanikele, kes soovivad oma 
                  metsa müüa või raieõigust realiseerida parima võimaliku hinnaga 
                  ja minimaalsete murede ja riskidega
                </p>
              </div>

              {/* Benefits List */}
              <div className="flex flex-col gap-4 lg:gap-5">
                {benefits.map((benefit, index) => (
                  <MicroInteractive
                    key={index}
                    scaleAmount={0.02}
                    opacityRange={[1, 1]}
                    proximityRadius={120}
                    intensity={0.8}
                  >
                    <div className="flex items-start gap-4 cursor-default group">
                      <div className="w-6 h-6 rounded-md bg-[rgba(68,145,95,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[rgba(68,145,95,0.25)] transition-colors">
                        <Check
                          className="w-3.5 h-3.5 text-[rgb(44,95,65)] stroke-[2.5]"
                          aria-label="metsa müük - teenuse eelis"
                        />
                      </div>
                      
                      <span className="font-inter font-medium text-[rgb(34,75,48)] tracking-tight leading-snug text-[0.9375rem] lg:text-[1rem]">
                        {benefit}
                      </span>
                    </div>
                  </MicroInteractive>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-2 w-full sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-br from-[rgb(52,125,78)] to-[rgb(42,100,60)] text-white font-inter font-semibold text-base tracking-tight shadow-lg shadow-[rgba(52,125,78,0.3)] transition-transform hover:-translate-y-0.5 active:scale-95"
                >
                  Alusta koostööd
                  <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
