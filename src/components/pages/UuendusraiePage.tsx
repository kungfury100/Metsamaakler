import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Axe, 
  Sprout, 
  Timer, 
  Scale, 
  HelpCircle, 
  ArrowRight, 
  LayoutGrid, 
  Sun,
  Phone,
  Mail,
  ChevronRight,
  Leaf,
  Trees,
  Info
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const UuendusraiePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Millal võib uuendusraiet teha?",
      answer: "Uuendusraiet võib teha siis, kui mets on saavutanud seaduses ettenähtud küpsusvanuse või küpsusdiameetri. Samuti võib seda teha, kui mets on halvas sanitaarses seisundis ja ei parane."
    },
    {
      question: "Mis vahe on lageraiel ja turberaiel?",
      answer: "Lageraie puhul raiutakse langil peaaegu kõik puud korraga maha (jäetakse vaid seemne- ja säilikpuud). Turberaie on järk-järguline raie pika perioodi jooksul, mis soodustab looduslikku uuenemist vana metsa turbe all."
    },
    {
      question: "Kas pärast raiet peab metsa istutama?",
      answer: "Jah, Metsaseadus kohustab metsaomanikku tagama metsa uuenemise. See tähendab, et hiljemalt 5 aasta jooksul (teatud juhtudel kiiremini) peab raielangil kasvama uus ja elujõuline noor mets."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Uuendusraie',
        'description': 'Mis on uuendusraie? Info lageraie ja turberaie erinevuste, metsa küpsuse ning metsaomaniku kohustuste kohta.',
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
            'name': 'Uuendusraie',
            'item': 'https://metsamaakler.ee/uuendusraie/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Uuendusraie – Lageraie ja turberaie | Metsamaakler",
    description: "Kuidas majandada küpset metsa? Uuendusraie (sh lageraie) võimaldab vana metsa asendada uue ja elujõulisega. Loe reeglitest ja uuenemiskohustusest.",
    canonical: "https://metsamaakler.ee/uuendusraie/",
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
          title="Uuendusraie"
          subtitle="Iga mets saab ükskord valmis. Uuendusraie on metsa eluringi loomulik osa, kus vana põlvkond asendatakse uuega, et tagada metsa kestlikkus ja majanduslik tulu."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Uuendusraie", href: "/uuendusraie/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on uuendusraie?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Uuendusraie</strong> on raieliik, mida tehakse küpses metsas. Selle peamine eesmärk on puidu varumine ja tingimuste loomine uue metsapõlve tekkeks.
                </p>

                <p className="mb-10 leading-[1.5]">
                   Erinevalt hooldusraietest, kus metsa vaid harvendatakse, on uuendusraie tulemuseks vana metsa kadumine ja uue metsa algus. See on metsa uue eluringi alguspunkt.
                </p>

                {/* Types Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Uuendusraie liigid
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Lageraie", 
                      desc: "Kõige levinum viis. Langil raiutakse maha enamik puid. See loob head valgustingimused uue metsa istutamiseks.",
                      icon: LayoutGrid
                    },
                    { 
                      title: "Turberaie", 
                      desc: "Aegjärkne raie. Metsa raiutakse hõredamaks pika perioodi jooksul, lootes looduslikule uuenemisele vana metsa varjus.",
                      icon: Sun
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
                  Millal võib uuendusraiet teha?
                </h2>
                <p className="mb-6">
                  Metsaomanik ei saa otsustada suvalisel hetkel, et teeb lageraie. Mets peab olema ametlikult "küps".
                </p>
                
                {/* Conditions List - Visual */}
                <div className="space-y-4 not-prose mb-12">
                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Timer size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Küpsusvanus</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed">
                        Igal puuliigil on seadusega määratud vanus. Näiteks männikud 90-100 aastat, kuusikud 80 aastat, kaasikud 60-70 aastat.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Scale size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Küpsusdiameeter</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed">
                        Kui puud on jämedad, võib raiet teha enne vanuse täitumist, kui keskmine rinnasdiameeter ületab normi (nt männil 28 cm).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Warning Block */}
                <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#347D4E]/10 my-12 not-prose flex gap-4">
                  <div className="shrink-0 mt-1 text-[#347D4E]">
                    <Sprout size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] mb-1">Metsa uuendamise kohustus</h3>
                    <p className="text-[#1a0f00]/70 m-0 text-sm leading-relaxed">
                      See on kõige olulisem reegel: <strong>kes raiub, see peab ka uue metsa asemele tagama.</strong> Pärast lageraiet on omanikul aega 5 aastat, et langile tekiks noor mets.
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
                    <a href="/turberaie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sun size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Turberaie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Looduslähedane alternatiiv.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-uuendamise-toetus/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa uuendamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Toetused uue metsa rajamiseks.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/raieoiguse-ost/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Axe size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Raieõiguse müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Tee oma raie rahaks.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Plaanis uuendusraie?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Metsamaakler aitab kontrollida metsa küpsust, vormistada metsateatise ja leida parima ostja.
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
