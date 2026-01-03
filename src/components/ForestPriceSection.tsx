import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  TrendingUp, 
  MapPin, 
  Trees, 
  AlertCircle, 
  Calculator,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award
} from 'lucide-react';
import metsaMuuk7 from 'figma:asset/0bdc61dc572f75d931930e884b22700d464aab10.png';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE FOREST PRICE SECTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Architecture:
// - Sticky Scroll Layout (Desktop): Left visual stays fixed while right content scrolls
// - Deep Dive Content: Detailed factors affecting price
// - Premium CTA: Distinctive call-to-action block at the bottom
// ══════════════════════════════════════════════════════════════════════════════���════════════════

const PRICE_FACTORS = [
  {
    id: 'timber',
    icon: Trees,
    title: "Puidu tagavara ja sortiment",
    description: "Metsamaa väärtuse peamine komponent on seal kasvav puit. Hinnastamisel on kriitilise tähtsusega, kui palju on metsas kallimat palki võrreldes odavama paberipuidu või küttepuuga. Küps mets on alati kallim kui noorendik."
  },
  {
    id: 'location',
    icon: MapPin,
    title: "Asukoht ja ligipääsetavus",
    description: "Metsa kaugus suurematest teedest ja puidu kokkuostupunktidest mõjutab otseselt transpordikulusid. Mida lähemal on mets kõvakattega teele ja saeveskile, seda kõrgem on metsa hektari hind."
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: "Boniteet ja kasvukiirus",
    description: "Boniteet näitab metsamaa viljakust. Kõrgema boniteediga (viljakam) maa toodab aastas rohkem puitu, mis tähendab omanikule suuremat tulu tulevikus ja seega kõrgemat turuhinda."
  },
  {
    id: 'restrictions',
    icon: AlertCircle,
    title: "Looduskaitselised piirangud",
    description: "Natura 2000 alad, sihtkaitsevööndid ja püsielupaigad võivad piirata või täielikult keelata majandustegevuse. Rangete piirangutega metsa hind on madalam, kuigi riik võib pakkuda kompensatsiooni."
  }
];

export const ForestPriceSection: React.FC = () => {
  const valuationImage = "https://images.unsplash.com/photo-1592859600984-0c7af3712e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBzdXJ2ZXlvciUyMHZhbHVhdGlvbiUyMGVzdG9uaWF8ZW58MXx8fHwxNzY0OTU2MDI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
  const droneImage = "https://images.unsplash.com/photo-1561418047-96d83cab3c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBkcm9uZSUyMHNob3QlMjBlc3RvbmlhJTIwbmF0dXJlfGVufDF8fHx8MTc2NDE5MjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <section 
      id="metsamaa-hind" 
      className="relative z-10 w-full py-12 lg:py-24"
      style={{ isolation: 'isolate' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 
           STICKY LAYOUT CONTAINER 
           - Uses grid for layout structure
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          
          {/* 
             LEFT COLUMN (Sticky on Desktop)
             - Contains Headlines and Visual
          */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-6 lg:space-y-12">
              
              {/* Text Block */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(52,125,78,0.08)] border border-[rgba(52,125,78,0.1)] mb-4 lg:mb-6">
                  <Calculator size={14} className="text-[rgb(52,125,78)]" aria-label="metsa müük - hinnakujunemine" />
                  <span className="text-xs font-bold tracking-widest uppercase text-[rgb(52,125,78)]">
                    Hinnakujunemine
                  </span>
                </div>
                
                <h2 
                  className="text-[clamp(2rem,5vw,3rem)] font-bold text-[rgb(22,56,35)] mb-4 lg:mb-6 leading-[1.1]"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Kuidas metsamaa <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(52,125,78)] to-[rgb(88,165,118)]">
                    hind kujuneb?
                  </span>
                </h2>
                
                <p className="text-base lg:text-lg text-[rgb(88,98,90)] leading-relaxed">
                  Metsa hindamine ei ole pelgalt numbrite kokkulöömine. See on kompleksne analüüs, 
                  kus arvestame nii hetkeväärtust kui ka bioloogilist potentsiaali. 
                  Iga mets on unikaalne ökosüsteem ja investeering.
                </p>
              </div>

              {/* Visual Card */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group hidden lg:block">
                <div className="absolute inset-0 bg-[rgb(22,56,35)]/20 mix-blend-multiply z-10" />
                <img
                  src={valuationImage}
                  alt="metsa müük hindamine"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Data Point Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-lg z-20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[rgb(88,98,90)] uppercase tracking-wider">Turuanalüüs</span>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[rgb(52,125,78)] h-1.5 rounded-full w-[85%]" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 
             RIGHT COLUMN (Scrollable Content)
             - Detailed Cards
          */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-8">
            {PRICE_FACTORS.map((factor, index) => (
              <div 
                key={factor.id}
                className="group relative p-6 lg:p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-[rgba(52,125,78,0.1)] hover:border-[rgba(52,125,78,0.3)] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                  {/* Icon Box */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgba(52,125,78,0.1)] flex items-center justify-center text-[rgb(52,125,78)] group-hover:scale-110 transition-transform duration-300">
                    <factor.icon size={24} strokeWidth={1.5} aria-label={`metsa müük - ${factor.title.toLowerCase()}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                      <h3 className="text-lg lg:text-xl font-bold text-[rgb(22,56,35)]">
                        {factor.title}
                      </h3>
                      {/* REMOVED STAT BADGE HERE */}
                    </div>
                    
                    <p className="text-sm lg:text-base text-[rgb(88,98,90)] leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Image (Visible only on mobile/tablet) */}
            <div className="lg:hidden relative aspect-video rounded-2xl overflow-hidden shadow-xl my-6">
               <img
                  src={valuationImage}
                  alt="metsa müük hindamine"
                  className="w-full h-full object-cover"
                />
            </div>

          </div>
        </div>

        {/* 
           CTA SECTION 
           - Dedicated distinct block at bottom
        */}
        <div className="mt-16 lg:mt-32">
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-[rgb(22,56,35)] shadow-2xl isolation-auto">
            
            {/* 
                REMOVED TEXTURE AND GRADIENTS FOR SOLID GREEN LOOK
                TO MATCH THE LIFECYCLE SEPARATOR SECTION
            */}

            <div className="relative z-10 px-6 py-8 md:px-12 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
              
              {/* Left Content */}
              <div className="flex flex-col justify-between lg:w-[55%] space-y-8 lg:space-y-10">
                <div className="space-y-6 lg:space-y-8">
                  <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-tight tracking-tight">
                    Soovid teada oma metsa <br className="hidden md:block" />
                    täpset väärtust?
                  </h3>
                  
                  {/* Text with padding-right 60px on desktop */}
                  <p className="text-base lg:text-lg text-[rgba(228,242,235,0.9)] leading-relaxed max-w-xl lg:pr-[60px]">
                    Meie eksperdid koostavad sulle põhjaliku hinnaanalüüsi tasuta. 
                    See on esimene samm targa otsuse suunas.
                  </p>

                  {/* Trust Badge */}
                  <div className="inline-flex items-center gap-4 p-3 pr-6 bg-white rounded-2xl shadow-lg w-full sm:w-auto">
                    <img 
                      src={`${metsaMuuk7.split('#')[0]}#filename=metsa-muuk-7.png`}
                      alt="metsa müük usaldusväärne partner" 
                      className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="text-[14px] lg:text-[15px] font-bold text-[rgb(22,56,35)] leading-tight">
                        Usaldusväärne ettevõte
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 text-[rgba(228,242,235,0.9)]">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[rgb(88,165,118)] flex items-center justify-center text-[rgb(88,165,118)]">
                      <CheckCircle2 size={14} strokeWidth={3} aria-label="metsa müük - tasuta konsultatsioon" />
                    </div>
                    <span className="font-medium text-sm lg:text-base">Tasuta konsultatsioon</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[rgb(88,165,118)] flex items-center justify-center text-[rgb(88,165,118)]">
                      <CheckCircle2 size={14} strokeWidth={3} aria-label="metsa müük - müügikohustus puudub" />
                    </div>
                    <span className="font-medium text-sm lg:text-base">Müügikohustus puudub</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Image & Buttons */}
              <div className="lg:w-[45%] flex flex-col justify-between gap-8">
                
                {/* Drone Shot Image */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-white/10 hidden lg:block">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                   <img 
                     src={droneImage}
                     alt="metsa müük kinnistu"
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                </div>

                {/* Buttons Row - Centered below image */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                   <a 
                     href="#hind" 
                     className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white text-[rgb(22,56,35)] font-bold text-[15px] leading-none hover:bg-[rgb(240,250,245)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 min-w-[160px]"
                   >
                     Metsamaa hind
                   </a>
                   <a 
                     href="#hindamine" 
                     className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] text-white font-semibold text-[15px] leading-none hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 group min-w-[200px]"
                   >
                     Metsamaa hindamine
                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
