import React, { useState, useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Calculator, 
  Ruler, 
  Trees, 
  Scale, 
  HelpCircle, 
  FileText,
  Phone,
  Mail,
  ChevronRight,
  Info,
  Box,
  TrendingUp,
  ArrowRight,
  Truck
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const TihumeetriArvutaminePage: React.FC = () => {
  const [ruumimeetrid, setRuumimeetrid] = useState<string>('');
  const [koefitsient, setKoefitsient] = useState<number>(0.6);
  const [tulemus, setTulemus] = useState<number | null>(null);

  useEffect(() => {
    const rm = parseFloat(ruumimeetrid.replace(',', '.'));
    if (!isNaN(rm) && rm > 0) {
      setTulemus(rm * koefitsient);
    } else {
      setTulemus(null);
    }
  }, [ruumimeetrid, koefitsient]);

  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis on tihumeetri ja ruumimeetri vahe?",
      answer: "Tihumeeter (tm) on 1x1x1 meetrit puhast puitu ilma õhuvahedeta. Ruumimeeter (rm) on sama suur ruumala, kuid sisaldab ka virnastatud halgude või palkide vahele jäävat õhku. Suhe sõltub virnastamise tihedusest."
    },
    {
      question: "Kuidas teisendada ruumimeetreid tihumeetriteks?",
      answer: "Kasutatakse koefitsienti, mis on tavaliselt vahemikus 0.5 kuni 0.65. Näiteks 10 ruumimeetrit küttepuid on ligikaudu 5-6 tihumeetrit. Täpne koefitsient sõltub puuliigist, halu pikkusest ja virnastamise kvaliteedist."
    },
    {
      question: "Kuidas mõõdetakse kasvavat metsa?",
      answer: "Kasvava metsa tagavara (tihumeetrites) arvutatakse puistu keskmise kõrguse, diameetri ja täiuse põhjal. Täpse tulemuse saamiseks kasutatakse kluppi ja kõrgusmõõtjat ning spetsiaalseid tabeleid."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Tihumeetri arvutamine – Juhend',
        'description': 'Kuidas arvutada puidu mahtu tihumeetrites? Lihtne juhend metsaomanikule. Tihumeeter vs ruumimeeter valemid.',
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
            'name': 'Tihumeetri arvutamine',
            'item': 'https://metsamaakler.ee/tihumeetri-arvutamine/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Tihumeetri arvutamine – Valemid ja teisendused | Metsamaakler",
    description: "Kuidas käib tihumeetri arvutamine ja mis vahe on sellel ruumimeetriga? Praktiline juhend puidu mahu määramiseks metsaomanikule.",
    canonical: "https://metsamaakler.ee/tihumeetri-arvutamine/",
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
          title="Tihumeetri arvutamine"
          subtitle="Praktiline juhend puidu koguse mõõtmiseks. Õpi selgeks tihumeetri ja ruumimeetri erinevused."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Tihumeetri arvutamine", href: "/tihumeetri-arvutamine/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on tihumeeter ja miks seda arvutatakse?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsaomanikuna puutute kindlasti kokku terminiga <strong>tihumeeter (tm)</strong>. See on metsanduses peamine mahuühik, mis tähistab ühte kuupmeetrit (1 m³) puhast puitu ilma koore ja õhuvahedeta.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Täpne tihumeetrite arvestus on kriitilise tähtsusega nii metsa müügil, raietööde planeerimisel kui ka küttepuude ostmisel, et vältida arusaamatusi ja rahalist kahju.
                </p>

                 {/* Calculator Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-16 not-prose ring-1 ring-black/5">
                  <h2 className="text-2xl font-bold text-[#163823] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#347D4E]/10 flex items-center justify-center text-[#347D4E]">
                      <Calculator size={20} strokeWidth={2} />
                    </div>
                    Teisenda ruumid tihudeks
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="block text-sm font-bold text-[#1a0f00] mb-2">Ruumimeetrite arv (rm)</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={ruumimeetrid}
                          onChange={(e) => setRuumimeetrid(e.target.value)}
                          placeholder="0.0"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#347D4E] focus:border-transparent outline-none transition-all font-medium text-[#1a0f00] placeholder-gray-400"
                        />
                        <span className="absolute right-4 top-3 text-gray-400 font-medium">rm</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-[#1a0f00] mb-2">Materjali tüüp (koefitsient)</label>
                      <select 
                        value={koefitsient}
                        onChange={(e) => setKoefitsient(parseFloat(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#347D4E] focus:border-transparent outline-none transition-all font-medium text-[#1a0f00] cursor-pointer appearance-none"
                      >
                        <option value="0.65">Halupuu, korralik (0.65)</option>
                        <option value="0.6">Halupuu, keskmine (0.60)</option>
                        <option value="0.55">Paberipuu 3m (0.55)</option>
                        <option value="0.4">Hakkepuit (0.40)</option>
                        <option value="0.25">Oksad/raiejäätmed (0.25)</option>
                      </select>
                    </div>
                  </div>

                  {tulemus !== null ? (
                    <div className="bg-[#F0F7F4] rounded-xl p-6 border border-[#347D4E]/20 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                          <div className="text-sm font-medium text-[#163823]/70 mb-1">Ruumimeetrit kokku</div>
                          <div className="text-xl font-bold text-[#1a0f00]/70 tracking-tight">{ruumimeetrid} rm</div>
                        </div>
                        
                        <div className="h-px md:h-12 w-full md:w-px bg-[#347D4E]/20"></div>
                        
                        <div>
                          <div className="text-sm font-medium text-[#163823]/70 mb-1">Tihumeetrit (puhas puit)</div>
                          <div className="text-4xl font-bold text-[#347D4E] tracking-tight">≈ {tulemus.toFixed(2)} tm</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                     <div className="text-center text-gray-400 py-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
                       <p className="m-0 font-medium">Sisesta kogus, et näha tulemust</p>
                     </div>
                  )}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Peamised mõõtühikud
                </h2>
                
                {/* Units Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Tihumeeter (tm)", 
                      desc: "Teoreetilne kuupmeeter (1x1x1 m) puhast puitu ilma õhuvahedeta. Kõige täpsem ühik palgi ja paberipuidu jaoks.",
                      icon: Box
                    },
                    { 
                      title: "Ruumimeeter (rm)", 
                      desc: "Virnastatud puidu mahuühik koos õhuvahedega. 1x1x1m kast täis laotud puid.",
                      icon: Trees
                    },
                    { 
                      title: "Puistekuup", 
                      desc: "Ebakorrapäraselt kuhjatud puit (mitte laotud). Siin on õhu osakaal veelgi suurem kui ruumimeetris.",
                      icon: Scale
                    }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group flex flex-col h-full">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-110 transition-transform duration-200">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/60 m-0 leading-relaxed flex-grow">{item.desc}</p>
                    </div>
                   ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kuidas teisendada?
                </h2>
                
                {/* Info Box */}
                <div className="bg-white border border-gray-200 rounded-xl mb-10 not-prose shadow-sm p-6 ring-1 ring-black/5">
                  <h3 className="font-bold text-[#1a0f00] mb-4 flex items-center gap-2">
                     <Ruler className="text-[#347D4E]" size={20} />
                     Valem
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-center text-[#163823] text-lg mb-4 border border-gray-200">
                    Tihumeetrid = Ruumimeetrid × Koefitsient
                  </div>
                  <p className="text-gray-600 text-sm m-0">
                    Näide: Kui teil on 10 ruumimeetrit küttepuid ja koefitsient on 0.6, siis puhast puitu on 10 × 0.6 = 6 tihumeetrit.
                  </p>
                </div>

                {/* Coefficients Table */}
                <h3 className="text-xl font-bold text-[#1a0f00] mb-4">Levinumad koefitsiendid</h3>
                <div className="bg-white overflow-hidden border border-gray-200 rounded-xl mb-10 not-prose shadow-sm ring-1 ring-black/5">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#163823] text-white">
                      <tr>
                        <th className="p-4 font-bold text-base">Materjal</th>
                        <th className="p-4 font-bold text-base w-1/3">Koefitsient</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { name: "Halupuu (korralikult laotud)", value: "0.60 – 0.65" },
                        { name: "3m paberipuu", value: "0.55 – 0.60" },
                        { name: "Hakkepuit (puistes)", value: "0.35 – 0.40" },
                        { name: "Oksad ja raiejäätmed", value: "0.20 – 0.30" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-bold text-[#1a0f00]">{row.name}</td>
                          <td className="p-4 text-gray-600 font-medium">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 my-12 not-prose flex gap-4">
                  <div className="shrink-0 mt-1 text-amber-600">
                    <Info size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] mb-1">Elektrooniline mõõtmine on täpseim</h3>
                    <p className="text-gray-700 m-0 text-sm leading-relaxed">
                      Tänapäeval toimub metsamaterjali mõõtmine harvesteri lõikepea abil automaatselt. See on kõige täpsem meetod, mida usaldavad nii ostjad kui müüjad.
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
                    <a href="/ruumimeetri-arvutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Trees size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Ruumimeeter
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kalkulaator virna mõõtmiseks.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-hind/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <TrendingUp size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hind
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas kujuneb väärtus?
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Soovid täpset hindamist?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Teooria on hea, aga praktika parem. Metsamaakler aitab hinnata sinu metsa tagavara professionaalselt.
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

                    <a href="mailto:info@metsamaakler.ee" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-blue-600 group-hover/item:scale-105 transition-transform duration-200">
                        <Mail size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-blue-600 transition-colors duration-200">Kirjuta meile</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">info@metsamaakler.ee</span>
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
