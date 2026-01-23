import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Leaf, 
  ShieldAlert, 
  Map, 
  Banknote, 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronRight, 
  Info,
  Trees,
  Search,
  Bird,
  Handshake
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const NaturaMetsPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kas Natura alal tohib teha raiet?",
      answer: "Sõltub vööndist. Sihtkaitsevööndis on majandustegevus üldjuhul keelatud (loodusreservaat). Piiranguvööndis on säästev majandamine (nt turberaie) sageli lubatud, kuid tuleb järgida kaitse-eeskirja ja kooskõlastada tegevus Keskkonnaametiga."
    },
    {
      question: "Kui suur on Natura metsa toetus?",
      answer: "Natura 2000 erametsamaa toetus on 2024. aastal sihtkaitsevööndis 134 €/ha ja piiranguvööndis kuni 60 €/ha. Toetust tuleb taotleda igal kevadel PRIA kaudu."
    },
    {
      question: "Kas riik ostab Natura metsa ära?",
      answer: "Jah, riigil on kohustus osta sihtkaitsevööndis asuvad maad, kui omanik seda soovib. Protsess on aga pikk (võib võtta aastaid) ja hind määratakse maa korralise hindamise alusel. Metsamaakler saab pakkuda kiiremat tehingut."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Natura 2000 ja metsa majandamine',
        'description': 'Looduskaitselised piirangud metsas: mida tohib teha ja millised on toetused? Ostame Natura metsamaad.',
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
            'name': 'Natura mets',
            'item': 'https://metsamaakler.ee/natura-mets/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Natura mets – Piirangud, toetused ja müük | Metsamaakler",
    description: "Kas Sinu mets asub Natura 2000 alal? Loe piirangute ja toetuste kohta. Ostame looduskaitsealuseid metsakinnistuid parima hinnaga.",
    canonical: "https://metsamaakler.ee/natura-mets/",
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
          title="Natura mets ja piirangud"
          subtitle="Looduskaitse ei tähenda alati majandamise lõppu. Aitame mõista piiranguid, taotleda toetusi ja leida lahendusi Natura alal asuvale metsale."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Natura mets", href: "/natura-mets/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on Natura 2000?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Natura 2000 on üleeuroopaline looduskaitsealade võrgustik, mille eesmärk on säilitada haruldasi liike ja elupaiku. Eestis on suur osa metsadest määratud Natura aladeks, mis seab omanikule teatud piirangud, kuid annab ka õiguse kompensatsioonile.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Paljud metsaomanikud kardavad sõna "kaitseala", arvates, et mets muutub väärtusetuks. Tegelikult on ka sellisel metsal oma turuhind ning riik maksab iga-aastast toetust saamata jäänud tulu kompenseerimiseks.
                </p>

                {/* Zones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   
                   {/* Card 1: Sihtkaitsevöönd */}
                   <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
                          <ShieldAlert size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Sihtkaitsevöönd</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Kõige rangem kaitserežiim. Majandustegevus on keelatud. Inimene tohib metsas viibida ja marju korjata.
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-red-600 font-bold text-sm">
                        Toetus: 134 €/ha aastas
                      </div>
                   </div>

                   {/* Card 2: Piiranguvöönd */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#347D4E] group-hover:scale-110 transition-transform duration-300">
                          <Leaf size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Piiranguvöönd</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Pehmem režiim. Lubatud on turberaied ja teatud tingimustel ka lageraie (väiksema langina).
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-[#347D4E] font-bold text-sm">
                        Toetus: kuni 60 €/ha aastas
                      </div>
                   </div>

                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mida teha kaitsealuse metsaga?
                </h2>
                
                {/* Options Visualization - Clean */}
                <div className="space-y-6 not-prose mb-12">
                  {[
                    { 
                      icon: Banknote,
                      title: "1. Taotle toetust", 
                      desc: "Igal kevadel (mais) saab PRIA kaudu taotleda Natura erametsamaa toetust. See on maksuvaba tulu, mis aitab kompenseerida majandamispiiranguid." 
                    },
                    { 
                      icon: Search,
                      title: "2. Uuri majandamisvõimalusi", 
                      desc: "Vaata kaitse-eeskirja või küsi Keskkonnaametist. Piiranguvööndis on sageli võimalik teha harvendus- ja valikraiet, mis toob tulu ja parandab metsa seisundit." 
                    },
                    { 
                      icon: Handshake, // Changed from Handshake (already imported? No, need to verify) -> Handshake is not imported in NaturaMetsPage? Let me check imports. Handshake is not imported. I will assume I can add it or use another icon. I used Handshake in MetsauhistuPage. I will use ArrowRight or something else if not available, or add to imports. Wait, I will add Handshake to imports.
                      title: "3. Müü kinnistu", 
                      desc: "Kui piirangud tunduvad liiga koormavad, on võimalik metsamaa müüa. Ostame Natura alasid ja tegeleme ise suhtlusega ametiasutuste vahel." 
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group cursor-default items-start">
                      <div className="mt-1 text-gray-400 group-hover:text-[#347D4E] group-hover:scale-110 transition-all duration-200 ease-out">
                         {/* Dynamic icon rendering would need the component, but here I'm mapping. 
                             Wait, I need to make sure 'Handshake' is defined in imports. 
                             I see 'Handshake' is NOT in imports for NaturaMetsPage. 
                             I will use 'Banknote' again or add 'Handshake' to imports.
                             Let's check the import list I wrote: Leaf, ShieldAlert, Map, Banknote, ArrowRight, Phone, Mail, ChevronRight, Info, Trees, Search, Bird.
                             I will use 'Banknote' for step 3 or add Handshake. Better add Handshake to imports.
                             Actually, I will create the file with Handshake in imports.
                          */}
                         <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="pb-4 border-b border-gray-50 last:border-0 w-full">
                        <h4 className="font-bold text-[#1a0f00] text-xl mb-1 group-hover:text-[#347D4E] transition-colors duration-200">{step.title}</h4>
                        <p className="text-[#1a0f00]/60 leading-normal text-base">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Bird size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Linnurahu ja püsielupaigad</strong>
                    Lisaks Natura aladele võivad metsas asuda I, II või III kategooria kaitsealuste liikide (nt kotkad, must-toonekurg) püsielupaigad. Ka seal kehtivad ranged piirangud, mille eest on võimalik saada toetust.
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
                    <a href="/metsakinnistu-ost/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Banknote size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakinnistu ost
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Ostame ka piirangutega metsa.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-hindamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Search size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hindamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kui palju maksab Natura mets?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Map size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Vajalik toetuste taotlemiseks.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Müüd Natura metsa?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Ostame ka looduskaitseliste piirangutega kinnistuid. Küsi pakkumist ja võrdle hinda.
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
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-blue-600 transition-colors duration-200">Saada info</span>
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

// I need to update the imports to include Handshake because I used it in step 3 map.
// I see I missed adding it to imports in the previous fileText block, let me fix that in the write_tool call.
// Re-checking imports...
// imports: Leaf, ShieldAlert, Map, Banknote, ArrowRight, Phone, Mail, ChevronRight, Info, Trees, Search, Bird.
// Handshake is missing. I will add it to imports in the write_tool call.
