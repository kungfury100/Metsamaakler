import React from 'react';
import { 
  Search, 
  ClipboardCheck, 
  Map as MapIcon, 
  FileText, 
  Handshake, 
  ArrowDown,
  CheckCircle2,
  Trees
} from 'lucide-react';
import { Reveal } from './utils/Reveal';
import { Parallax } from './utils/Parallax';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// SALES PROCESS SECTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════

const PROCESS_STEPS = [
  {
    id: 'inquiry',
    icon: Search,
    title: "Hinnapäring ja esmane konsultatsioon",
    description: "Protsess algab lihtsa päringuga. Analüüsime teie metsakinnistu andmeid avalikest registritest ja anname esmase hinnangu. See on täiesti tasuta ja ei kohusta teid müügiks.",
  },
  {
    id: 'valuation',
    icon: ClipboardCheck,
    title: "Põhjalik metsa hindamine",
    description: "Meie eksperdid teostavad detailse analüüsi, arvestades puidu sortimenti, kasvukohta ja turusituatsiooni. Vajadusel kaasame sertifitseeritud taksaatori täpse metsamajandamiskava koostamiseks.",
  },
  {
    id: 'visit',
    icon: MapIcon,
    title: "Metsakinnistu ülevaatus kohapeal",
    description: "Parima hinna tagamiseks külastab meie metsaspetsialist kinnistut. Kontrollime ligipääsetavust, metsa tervislikku seisundit ja tegelikke piire looduses.",
  },
  {
    id: 'offer',
    icon: FileText,
    title: "Lõplik hinnapakkumine ja lepingu ettevalmistus",
    description: "Esitame teile siduva ostupakkumise. Kui hind sobib, valmistame ette kogu vajaliku dokumentatsiooni ja kooskõlastame tehingu detailid (maksetingimused, notariaeg).",
  },
  {
    id: 'deal',
    icon: Handshake,
    title: "Tehingu sõlmimine notaris",
    description: "Ost-müük vormistatakse alati notari juures, et tagada juriidiline korrektsus ja turvalisus mõlemale osapoolele. Raha laekub teie kontole koheselt pärast tehingut (deposiitkonto kaudu).",
  }
];

export const SalesProcessSection: React.FC = () => {
  const forestImage = "https://images.unsplash.com/photo-1592859600984-0c7af3712e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjb250cmFjdCUyMGhhbmRzaGFrZSUyMGVzdG9uaWF8ZW58MXx8fHwxNzY0OTU2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <section 
      id="metsa-myyk" 
      className="relative z-10 w-full py-12 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* MOBILE CARD LAYOUT WRAPPER */}
        <div className="rounded-[2.5rem] bg-[#E4EFE9] p-8 lg:p-0 lg:bg-transparent overflow-hidden lg:overflow-visible">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* 
               LEFT COLUMN: HEADER & INTRO
            */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal width="100%" delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(52,125,78,0.1)] border border-[rgba(52,125,78,0.15)] mb-6">
                    <Handshake size={14} className="text-[rgb(42,90,60)]" />
                    <span className="text-xs font-bold tracking-widest uppercase text-[rgb(42,90,60)]">
                      Müügiprotsess
                    </span>
                  </div>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                  <h2 className="font-bold text-[#163823] mb-6 leading-[1.1] tracking-tight text-[clamp(2.25rem,5vw,3rem)]">
                    Kuidas toimub <br/>
                    metsa müük?
                  </h2>
                </Reveal>

                <Reveal width="100%" delay={0.3}>
                  <p className="text-base lg:text-lg text-[#3A4D40] leading-relaxed mb-8">
                    Metsa müük on suur otsus. Teeme selle protsessi teie jaoks võimalikult lihtsaks, 
                    läbipaistvaks ja turvaliseks. Meie kogemus tagab, et iga samm on juriidiliselt korrektne 
                    ja teie huvid on kaitstud.
                  </p>
                </Reveal>

                {/* Key Benefits List */}
                <div className="space-y-4 mb-12">
                  {[
                    "Kiire ja professionaalne asjaajamine",
                    "Notariaalne tehingu turvalisus",
                    "Raha kätte kohe tehingu päeval"
                  ].map((benefit, i) => (
                    <Reveal key={i} width="100%" delay={0.4 + (i * 0.1)}>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                          <CheckCircle2 size={20} className="text-[rgb(52,125,78)] fill-[rgba(52,125,78,0.1)]" />
                        </div>
                        <p className="text-[#2C3E32] font-medium">{benefit}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Visual Image (Desktop Only) */}
                <Reveal width="100%" delay={0.6} className="hidden lg:block">
                  <Parallax offset={20}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-[#163823]/10 mix-blend-multiply z-10" />
                      <img
                        src={forestImage}
                        alt="metsa müük tehing"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </Parallax>
                </Reveal>
              </div>
            </div>

            {/* 
               RIGHT COLUMN: PROCESS STEPS
            */}
            <div className="lg:col-span-7 lg:pt-4">
              <div className="relative space-y-6 lg:space-y-12">
                {/* Vertical Timeline Line (Desktop Only) */}
                <div 
                  className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[rgb(52,125,78)]/50 via-[rgb(52,125,78)]/20 to-transparent hidden lg:block" 
                />

                {PROCESS_STEPS.map((step, index) => (
                  <Reveal key={step.id} width="100%" delay={index * 0.15}>
                    <div className="group relative lg:pl-24">
                      
                      {/* Desktop Icon Bubble */}
                      <div className="hidden lg:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border border-[rgba(52,125,78,0.2)] items-center justify-center z-10 shadow-sm group-hover:scale-110 group-hover:border-[rgb(52,125,78)] transition-all duration-300">
                        <step.icon className="text-[rgb(52,125,78)]" size={24} strokeWidth={1.5} />
                      </div>

                      {/* Mobile Layout Container */}
                      <div className="flex flex-col gap-4">
                        {/* Mobile Icon Box */}
                        <div className="lg:hidden w-14 h-14 rounded-2xl bg-[rgba(168,208,188,0.3)] flex items-center justify-center text-[#163823]">
                          <step.icon size={24} strokeWidth={1.5} />
                        </div>

                        {/* Content Card */}
                        <div className="p-8 rounded-[1.5rem] bg-[#F3F8F5] lg:bg-white/60 lg:border lg:border-white/60 lg:hover:bg-white/90 lg:hover:shadow-xl lg:hover:border-[rgba(52,125,78,0.2)] transition-all duration-300">
                          <h3 className="text-xl font-bold text-[#163823] mb-3">
                            {step.title}
                          </h3>
                          
                          <p className="text-[#4A5D52] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Mobile Connector Arrow */}
                      {index !== PROCESS_STEPS.length - 1 && (
                        <div className="lg:hidden flex justify-center py-2 text-[#A8D0BC]">
                          <ArrowDown size={24} />
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}

                {/* Bottom Arrow (Mobile) */}
                <div className="lg:hidden flex justify-center pt-2 text-[#A8D0BC]">
                  <ArrowDown size={24} className="animate-bounce" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
