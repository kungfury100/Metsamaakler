import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Droplets, 
  Tractor, 
  Map, 
  Shovel, 
  ArrowRight, 
  Trees, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight, 
  Info,
  Construction
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaparandusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Miks on metsakuivendus vajalik?",
      answer: "Liigniiskes metsas (soostunud alad) on puude juurte hapnikuvarustus häiritud, mistõttu puud kasvavad aeglaselt või hukkuvad. Kuivendus alandab põhjavee taset, parandab mulla kandvust ja kiirendab metsa kasvu oluliselt (boniteet paraneb)."
    },
    {
      question: "Kas kraave tohib ise puhastada?",
      answer: "Oma kinnistu piires võib väiksemaid kraave puhastada, kuid suuremate maaparandussüsteemide (eesvoolud) puhul tuleb tegevus kooskõlastada Põllumajandus- ja Toiduametiga ning naabritega. Sageli on vaja maaparandusprojekti."
    },
    {
      question: "Kas metsateede ehitamiseks saab toetust?",
      answer: "Jah, Erametsakeskus (KIK) pakub toetust nii metsateede ehitamiseks ja rekonstrueerimiseks kui ka kuivendussüsteemide uuendamiseks. Toetus katab olulise osa kuludest."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsaparandus',
        'description': 'Metsaparandustööd: kraavide kaevamine, puhastamine ja metsateede ehitus. Parandame metsa kasvutingimusi ja ligipääsetavust.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Metsamaakler',
          'image': 'https://metsamaakler.ee/logo.png',
          'telephone': '+37255555555',
          'email': 'info@eestimetsamaakler.ee',
          'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'EE'
          }
        },
        'areaServed': 'Estonia'
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
            'name': 'Metsaparandus',
            'item': 'https://metsamaakler.ee/metsaparandus/'
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
    title: "Metsaparandus – Kraavid ja metsateed | Metsamaakler",
    description: "Metsakuivendus ja teede ehitus tõstab metsa väärtust. Pakume terviklahendust projekteerimisest teostuseni. Uuri toetuste kohta.",
    canonical: "https://metsamaakler.ee/metsaparandus/",
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
          title="Metsaparandus"
          subtitle="Toimiv kuivendussüsteem ja korralikud metsateed on tulusa metsamajanduse alustala. Muudame Sinu metsa ligipääsetavaks ja viljakaks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsaparandus", href: "/metsaparandus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks investeerida metsaparandusse?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Eesti kliimas on liigniiskus sageli peamine tegur, mis pidurdab metsa kasvu. <strong>Metsaparandus</strong> on meetmete kogum (kuivendus ja teedeehitus), mis tõstab metsamaa väärtust ja tootlikkust pikas perspektiivis.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Uuringud näitavad, et kuivendatud metsamaal on puidu juurdekasv kordades kiirem kui soostunud alal. Lisaks võimaldab korralik teedevõrk teha metsas töid aastaringselt, sõltumata ilmastikuoludest.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   
                   {/* Card 1: Kuivendus */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <Droplets size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Kraavide rajamine ja hooldus</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Puhastame vanad kraavid settest ja võsast või kaevame vajadusel uued. See taastab veerežiimi.
                      </p>
                      <ul className="text-sm space-y-2 mb-4 text-[#1a0f00]/60">
                         <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-[#347D4E] mt-0.5 shrink-0"/> Parem juurdekasv</li>
                         <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-[#347D4E] mt-0.5 shrink-0"/> Kandvam pinnas</li>
                      </ul>
                   </div>

                   {/* Card 2: Teed */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                          <Tractor size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Metsateede ehitus</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Rajame ja rekonstrueerime metsateid, paigaldame truupe ja tugevdame pinnast.
                      </p>
                      <ul className="text-sm space-y-2 mb-4 text-[#1a0f00]/60">
                         <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-[#347D4E] mt-0.5 shrink-0"/> Ligipääs tehnikale</li>
                         <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-[#347D4E] mt-0.5 shrink-0"/> Puidu odavam transport</li>
                      </ul>
                   </div>

                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Tööde etapid
                </h2>
                
                {/* Steps Visualization - Clean */}
                <div className="space-y-6 not-prose mb-12">
                  {[
                    { 
                      icon: Map,
                      title: "1. Projekteerimine", 
                      desc: "Maaparandussüsteemid nõuavad täpset projekti ja kooskõlastusi Keskkonnaametiga. Meie spetsialistid teevad vajalikud mõõdistused." 
                    },
                    { 
                      icon: Shovel,
                      title: "2. Trasside raiumine", 
                      desc: "Enne kaevamist tuleb kraavide ja teede trassidelt eemaldada võsa ja puud. See materjal realiseeritakse hakkepuiduna." 
                    },
                    { 
                      icon: Construction,
                      title: "3. Kaevetööd ja ehitus", 
                      desc: "Spetsiaaltehnika (ekskavaatorid, buldooserid) teostab kaevetööd, truupide paigalduse ja teede profileerimise." 
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group cursor-default items-start">
                      <div className="mt-1 text-gray-400 group-hover:text-[#347D4E] group-hover:scale-110 transition-all duration-200 ease-out">
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
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Riiklik toetus</strong>
                    Metsaparandustööd on kallid, kuid riik toetab neid kuni 50-80% ulatuses. Aitame Sul vormistada toetustaotlused ja aruandluse.
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
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Map size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kava näitab, kus on vaja parandustöid.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-uuendamise-toetus/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <CheckCircle2 size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Toetused
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Info riiklike toetuste kohta.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/raieoiguse-muuk/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Trees size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Raieõiguse müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Tee trassid puhtaks ja teeni tulu.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Mets upub vee alla?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Ära lase puidul mädaneda. Küsi pakkumist kraavide puhastamiseks või uute rajamiseks.
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
