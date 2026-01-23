import React, { useState, useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Calculator, 
  Box, 
  Ruler, 
  HelpCircle, 
  Info, 
  Layers, 
  Scale, 
  ArrowRight, 
  RefreshCw,
  Phone,
  Mail,
  ChevronRight,
  TrendingUp,
  Truck
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RuumimeetriArvutaminePage: React.FC = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  
  useEffect(() => {
    const l = parseFloat(length.replace(',', '.'));
    const w = parseFloat(width.replace(',', '.'));
    const h = parseFloat(height.replace(',', '.'));

    if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
      setResult(l * w * h);
    } else {
      setResult(null);
    }
  }, [length, width, height]);

  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis on ruumimeeter (rm)?",
      answer: "Ruumimeeter on küttepuude ja paberipuu mõõtühik, mis tähistab 1x1x1 meetri suurust puiduvirna koos sinna vahele jääva õhuga. See erineb tihumeetrist, mis mõõdab vaid puhast puitu."
    },
    {
      question: "Mitu ruumimeetrit on ühes tihumeetris?",
      answer: "See sõltub puidu liigist ja ladumise tihedusest. Keskmine koefitsient on umbes 0.5–0.6. Ehk 1 ruumimeeter virnastatud puid on umbes 0.5–0.6 tihumeetrit puhast puitu."
    },
    {
      question: "Kuidas mõõta puistepuitu?",
      answer: "Puistepuit (korrapäratult hunnikusse kallatud) sisaldab veelgi rohkem õhku. Selle koefitsient on madalam, tavaliselt 0.33–0.4. Seega 1 puisteruum on oluliselt vähem puitu kui 1 laotud ruumimeeter."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Ruumimeetri arvutamine ja teisendamine',
        'description': 'Mis on ruumimeeter ja kuidas seda arvutada? Loe lähemalt virnastatud puidu mõõtmisest ja teisendamisest tihumeetriteks.',
        'author': {
          '@type': 'Organization',
          'name': 'Metsamaakler'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Metsamaakler',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://metsamaakler.ee/logo.png'
          }
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqData.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Avaleht',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Teenused',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Ruumimeetri arvutamine',
            'item': 'https://metsamaakler.ee/ruumimeetri-arvutamine/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Ruumimeetri arvutamine – Valemid ja kalkulaator | Metsamaakler",
    description: "Kuidas arvutada küttepuude kogust ruumimeetrites? Kasuta meie lihtsat kalkulaatorit ja loe ruumimeetri ning tihumeetri erinevustest.",
    canonical: "https://metsamaakler.ee/ruumimeetri-arvutamine/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  return (
    <div className="min-h-screen relative bg-white font-inter selection:bg-[#347D4E] selection:text-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Ruumimeetri arvutamine"
          subtitle="Küttepuude ja paberipuu koguse määramine võib olla segadust tekitav. Kasuta meie kalkulaatorit virna mahu leidmiseks ja teisenda see puhtaks puiduks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Ruumimeetri arvutamine", href: "/ruumimeetri-arvutamine/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on ruumimeeter ja miks seda kasutatakse?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsanduses ja küttepuude müügis kohtame tihti mõistet <strong>ruumimeeter (rm)</strong>. See on mahuühik, mida kasutatakse virnastatud puidu mõõtmiseks.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Erinevalt tihumeetrist, mis mõõdab vaid puidu enda mahtu ilma õhuvahedeta, arvestab ruumimeeter kogu virna väliseid mõõtmeid – puitu koos õhuga, mis jääb halgude või nottide vahele. Ruumimeetrit on lihtne ette kujutada kastina, mille mõõdud on 1m x 1m x 1m.
                </p>

                {/* Calculator Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-16 not-prose ring-1 ring-black/5">
                  <h2 className="text-2xl font-bold text-[#163823] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#347D4E]/10 flex items-center justify-center text-[#347D4E]">
                      <Calculator size={20} strokeWidth={2} />
                    </div>
                    Ruumimeetri kalkulaator
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-bold text-[#1a0f00] mb-2">Virna pikkus (m)</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          placeholder="0.0"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#347D4E] focus:border-transparent outline-none transition-all font-medium text-[#1a0f00] placeholder-gray-400"
                        />
                        <span className="absolute right-4 top-3 text-gray-400 font-medium">m</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-[#1a0f00] mb-2">Virna laius (m)</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          placeholder="0.0"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#347D4E] focus:border-transparent outline-none transition-all font-medium text-[#1a0f00] placeholder-gray-400"
                        />
                        <span className="absolute right-4 top-3 text-gray-400 font-medium">m</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1a0f00] mb-2">Virna kõrgus (m)</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          placeholder="0.0"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#347D4E] focus:border-transparent outline-none transition-all font-medium text-[#1a0f00] placeholder-gray-400"
                        />
                        <span className="absolute right-4 top-3 text-gray-400 font-medium">m</span>
                      </div>
                    </div>
                  </div>

                  {result !== null ? (
                    <div className="bg-[#F0F7F4] rounded-xl p-6 border border-[#347D4E]/20 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                          <div className="text-sm font-medium text-[#163823]/70 mb-1">Virna maht (ruumimeetrites)</div>
                          <div className="text-4xl font-bold text-[#163823] tracking-tight">{result.toFixed(2)} rm</div>
                        </div>
                        
                        <div className="h-px md:h-12 w-full md:w-px bg-[#347D4E]/20"></div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-[#163823]/70">Hinnanguline puhas puit</span>
                            <div className="group relative">
                              <HelpCircle size={16} className="text-[#347D4E]/60 cursor-help" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#163823] text-white text-xs p-3 rounded-lg hidden group-hover:block z-50 shadow-xl">
                                Arvutatud koefitsiendiga 0.6 (korralikult laotud halupuud).
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#163823]"></div>
                              </div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-[#347D4E] tracking-tight">≈ {(result * 0.6).toFixed(2)} tm</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                     <div className="text-center text-gray-400 py-8 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
                       <p className="m-0 font-medium">Sisesta mõõdud, et näha tulemust</p>
                     </div>
                  )}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Ruumimeeter vs Tihumeeter
                </h2>
                <p className="mb-6">
                  See on koht, kus tekib kõige rohkem arusaamatusi. Ostja soovib teada, kui palju ta "päris" puitu saab, mitte kui palju õhku ta ostab.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Ruumimeeter (rm)", 
                      desc: "Sisaldab puitu + õhku. Kasutatakse virnastatud metsamaterjali ja küttepuude mõõtmiseks. Lihtne mõõta metsas või hoovis mõõdulindiga.",
                      icon: Layers
                    },
                    { 
                      title: "Tihumeeter (tm)", 
                      desc: "Sisaldab 100% puitu, ilma õhuvahedeta. Kasutatakse palgi müügil ja metsamajanduse statistikas. 1 tm on alati rohkem puitu kui 1 rm.",
                      icon: Box
                    }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-110 transition-transform duration-200">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-xl mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/60 m-0 leading-relaxed">{item.desc}</p>
                    </div>
                   ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kuidas teisendada: Koefitsiendid
                </h2>
                
                <div className="bg-white overflow-hidden border border-gray-200 rounded-xl mb-10 not-prose shadow-sm ring-1 ring-black/5">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#163823] text-white">
                      <tr>
                        <th className="p-5 font-bold text-base">Puidu liik / Olek</th>
                        <th className="p-5 font-bold text-base w-1/3">Koefitsient</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: "Korralikult laotud halupuud", value: "0.60 – 0.70" },
                        { name: "Virnastatud paberipuu (3m)", value: "0.52 – 0.58" },
                        { name: "Puistepuit (kallatud hunnik)", value: "0.33 – 0.40" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="p-5 font-bold text-[#1a0f00]">{row.name}</td>
                          <td className="p-5 text-gray-600 font-medium">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-4 bg-gray-50 text-xs font-medium text-gray-500 border-t border-gray-100 flex items-center gap-2">
                    <Info size={14} />
                    * Koefitsiendid on indikatiivsed. Täpne number sõltub nottide kõverusest ja ladumise tihedusest.
                  </div>
                </div>

                {/* Tip Block */}
                <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 my-12 not-prose flex gap-4">
                  <div className="shrink-0 mt-1 text-amber-600">
                    <Info size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] mb-1">Rusikareegel koduseks kasutamiseks</h3>
                    <p className="text-gray-700 m-0 text-sm leading-relaxed">
                      1 ruumimeeter laotud puid ≈ 0.6 tihumeetrit. <br/>
                      Ehk kui ostad 10 ruumi puid, saad tegelikult umbes 6 tihumeetrit puitmaterjali.
                    </p>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Korduma kippuvad küsimused
                </h2>
                <div className="space-y-4 not-prose">
                  {faqData.map((faq, i) => (
                    <div key={i} className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#347D4E]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer active:scale-[0.99]">
                      <h4 className="font-bold text-lg text-[#1a0f00] mb-3 flex items-start justify-between gap-4 group-hover:text-[#347D4E] transition-colors duration-200">
                        {faq.question}
                        <div className="mt-1 text-gray-300 group-hover:text-[#347D4E] transition-colors duration-200">
                           <ChevronRight size={18} className="group-hover:rotate-90 transition-transform duration-200" />
                        </div>
                      </h4>
                      <p className="text-[#1a0f00]/70 leading-relaxed mb-0 text-[15px] max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Related Content - Clean Icons */}
                <div className="mt-20 pt-12 border-t border-gray-100 not-prose">
                  <h3 className="text-[24px] font-bold text-[#1a0f00] mb-8">Vaadake ka:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <a href="/tihumeetri-arvutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Box size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Tihumeeter
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas arvutada?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/puidu-hinnad/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <TrendingUp size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Puidu hinnad
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Vaata hinnakirja.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsateatis/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Truck size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsateatis
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Raieloa taotlemine.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>
                  </div>
                </div>

              </article>
            </div>

            {/* SIDEBAR COLUMN (Right 4/12) - STICKY */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Sticky Contact Card */}
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-[#F0F7F4] rounded-2xl p-8 border border-[#347D4E]/10 shadow-[0_20px_40px_-10px_rgba(52,125,78,0.15)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(52,125,78,0.2)] transition-shadow duration-300">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#347D4E]/5 rounded-full blur-3xl group-hover:bg-[#347D4E]/10 transition-colors duration-500" />

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vajad abi mõõtmisel?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Metsamaakler aitab hinnata metsamaterjali mahtu ja väärtust. Küsi tasuta konsultatsiooni.
                  </p>

                  <div className="space-y-4 relative z-10">
                    <a href="tel:+3725551234" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-[#347D4E] group-hover/item:scale-105 transition-transform duration-200">
                        <Phone size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-[#347D4E] transition-colors duration-200">Helista meile</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">+372 555 1234</span>
                      </div>
                    </a>

                    <a href="mailto:info@eestimetsamaakler.ee" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-blue-600 group-hover/item:scale-105 transition-transform duration-200">
                        <Mail size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-blue-600 transition-colors duration-200">Kirjuta meile</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">info@eestimetsamaakler.ee</span>
                      </div>
                    </a>
                  </div>

                  <button 
                    onClick={handleCtaClick}
                    className="w-full mt-8 bg-[#347D4E] hover:bg-[#2d6e43] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] transition-all duration-200 ease-out flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Küsi pakkumist
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
