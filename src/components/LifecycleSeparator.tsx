import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sprout, Trees, Leaf } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// LIFECYCLE SEPARATOR SECTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Purpose: Visual break between heavy information sections
// Design: Dark immersive theme to contrast with light sections
// Content: Emphasizes the "Full Cycle" partnership approach
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const LifecycleSeparator: React.FC = () => {
  return (
    <section className="relative w-full z-20 my-8 md:my-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#163823] shadow-2xl isolation-auto">
          
          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 p-6 sm:p-8 md:p-16 items-start lg:items-center">
            
            {/* Left: Headline & CTA */}
            <div className="space-y-6 md:space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                  <Leaf size={14} className="text-[#A8D0BC]" aria-label="metsa müük - terviklik lähenemine" />
                  <span className="text-xs font-bold tracking-widest uppercase text-[#A8D0BC]">
                    Terviklik lähenemine
                  </span>
                </div>

                <h2 className="font-bold text-white leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                  Partner kogu metsa <br/>
                  <span className="text-[#A8D0BC]">
                    eluringiks
                  </span>
                </h2>

                <p className="text-base md:text-lg text-[rgba(228,242,235,0.8)] leading-relaxed max-w-lg">
                  Metsamaakler ei ole vaid vahendaja. Oleme teie strateegiline partner alates 
                  uue metsa rajamisest ja hooldamisest kuni väärika realiseerimiseni.
                  Üks kontakt, terviklik lahendus.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
                  <a 
                    href="#kontakt" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#163823] font-bold text-lg hover:bg-[#F0FAF5] transition-all duration-300 shadow-lg hover:shadow-white/20 hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Küsi nõu
                  </a>
                  <a 
                    href="#teenused" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 group w-full sm:w-auto"
                  >
                    Kõik teenused
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </div>
            </div>

            {/* Right: Visual Stats/Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-0 lg:mt-0">
               {/* Card 1 */}
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-[rgba(168,208,188,0.1)] flex items-center justify-center mb-4">
                    <Sprout className="text-[#A8D0BC]" size={24} aria-label="metsa müük - kasv ja hooldus" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Kasv ja Hooldus</h4>
                  <p className="text-[rgba(228,242,235,0.6)] text-sm leading-relaxed">
                    Noorendike hooldus, valgustusraied ja metsakultuuride rajamine tuleviku nimel.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 sm:translate-y-8">
                  <div className="w-12 h-12 rounded-full bg-[rgba(168,208,188,0.1)] flex items-center justify-center mb-4">
                    <Trees className="text-[#A8D0BC]" size={24} aria-label="metsa müük - majandamine" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Majandamine</h4>
                  <p className="text-[rgba(228,242,235,0.6)] text-sm leading-relaxed">
                    Professionaalne metsakava koostamine, raieõiguse võõrandamine ja harvendusraied.
                  </p>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
