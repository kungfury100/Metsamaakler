import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  MapPin, 
  Search, 
  FileText, 
  Globe, 
  ArrowRight, 
  Info,
  Phone,
  Mail,
  ChevronRight,
  Calculator
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const KatastritunnusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kust ma leian oma katastritunnuse?",
      answer: "Kõige lihtsam on seda leida Maa-ameti kaardirakendusest (X-GIS) aadressi järgi otsides või oma kinnistusraamatu väljavõttelt."
    },
    {
      question: "Kas katastritunnus võib muutuda?",
      answer: "Jah, katastritunnus võib muutuda, kui toimub kinnistu jagamine, liitmine või piiride muutmine. Iga sellise toimingu tulemusena tekivad uued katastriüksused uute tunnustega."
    },
    {
      question: "Mis vahe on katastritunnusel ja kinnistu registriosal?",
      answer: "Katastritunnus identifitseerib maatükki kaardil (asukoht ja piirid), registriosa number aga omandit kinnistusraamatus (kes on omanik, hüpoteegid). Ühel kinnistul võib olla mitu katastriüksust."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Mis on katastritunnus?',
        'description': 'Kõik, mida pead teadma katastritunnusest: mis see on, kust seda leida ja milleks seda vaja läheb kinnisvaratehingutes.',
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
            'name': 'Katastritunnus',
            'item': 'https://metsamaakler.ee/katastritunnus/'
          }
        ]
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
      }
    ]
  };

  useSeo({
    title: "Katastritunnus – Mis see on ja kust seda leida? | Metsamaakler",
    description: "Mis on katastritunnus? Lihtne selgitus kinnistu ID-koodi kohta. Õpi, kuidas leida katastritunnust Maa-ameti kaardilt ja miks seda vaja on.",
    canonical: "https://metsamaakler.ee/katastritunnus/",
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
          title="Katastritunnus"
          subtitle="See on Sinu maa ID-kaart. Selgitame, mis peitub selle numbrikombinatsiooni taga ja miks on see oluline igasuguse kinnisvaratehingu puhul."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Katastritunnus", href: "/katastritunnus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on katastritunnus?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Katastritunnus</strong> on unikaalne numbriline kood, mis antakse igale Eestis asuvale katastriüksusele (maatükile). 
                  Seda võib võrrelda inimese isikukoodiga – see identifitseerib kindla maatüki asukoha, piirid ja sihtotstarbe riiklikes registrites.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Tavaliselt koosneb katastritunnus numbritest ja koolonitest (näiteks <code>12345:001:0001</code>). 
                  Iga number selles jadas kannab kindlat tähendust, viidates maakonnale, vallale ja konkreetsele piirkonnale.
                </p>

                {/* Necessity Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Milleks katastritunnust vaja on?
                </h2>
                <p className="mb-6">
                  Ilma katastritunnuseta on pea võimatu teha mingeid ametlikke toiminguid. Seda läheb vaja:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Ost-müük ja tehingud", 
                      desc: "Notar vajab katastritunnust müügilepingu ettevalmistamiseks. Samuti on see aluseks, et Metsamaakler saaks teha täpse hinnapakkumise.",
                      icon: FileText
                    },
                    { 
                      title: "Ehitus ja planeerimine", 
                      desc: "Ehitusloa taotlemisel, elektriliitumise tegemisel või detailplaneeringu algatamisel on katastritunnus alati esimene asi, mida küsitakse.",
                      icon: MapPin
                    },
                    { 
                      title: "Toetused ja maksud", 
                      desc: "PRIA põllumajandustoetuste taotlemisel ja maamaksu arvestamisel on see aluseks, mille järgi määratakse toetuskõlblik pind ja maksumäär.",
                      icon: Calculator
                    },
                    { 
                      title: "Info otsimine", 
                      desc: "Selle abil saate Maa-ameti kaardirakendusest vaadata oma maa täpseid piire, kitsendusi (nt kaitsevööndid) ja muid piiranguid.",
                      icon: Search
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
                  Kuidas leida oma katastritunnust?
                </h2>
                
                {/* Steps List - Enhanced Visuals */}
                <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#347D4E]/10 mb-10 not-prose">
                  <h3 className="text-xl font-bold text-[#163823] mb-8 flex items-center gap-3">
                    <Globe className="text-[#347D4E]" size={28} strokeWidth={1.5} />
                    Samm-sammult juhis
                  </h3>
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">1</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Ava Maa-ameti kaart
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Minge aadressile <strong>xgis.maaamet.ee</strong> ja avage "Maainfo" kaardirakendus.
                         </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">2</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Otsi aadressi järgi
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Sisestage otsingusse oma talu nimi või aadress (nt "Kase talu, Mulgi vald").
                         </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">3</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Leia tunnus infopaneelist
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Klõpsake kaardil oma kinnistu peale. Avanenud infoaknas ongi kirjas "Katastritunnus" (nt 89701:001:0180).
                         </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Did You Know Block - Amber Style */}
                <div className="bg-[#FFFBF0] p-8 rounded-xl border border-[#FDE68A] mb-12 not-prose flex gap-5 items-start">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#92400E] text-lg mb-2">Kas teadsid?</h3>
                    <p className="text-[#92400E]/80 m-0 text-sm leading-relaxed">
                      Katastritunnus ei ole sama mis aadress. Aadressid (tänava nimed, majanumbrid) võivad muutuda kohaliku omavalitsuse otsusega, kuid katastritunnus on püsivam ja seotud konkreetse maapinnaga.
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
                    <a href="/metsa-hindamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Calculator size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hindamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kui palju Su mets maksab?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/kasvava-metsa-ost/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <MapPin size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Kasvava metsa ost
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Raieõiguse müük.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/kontakt/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Mail size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Võta ühendust
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Küsi nõu ekspertidelt.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Müüd maad või metsa?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Saada meile oma katastritunnus ja teeme Sulle tasuta hinnapakkumise. Nii lihtne see ongi.
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
