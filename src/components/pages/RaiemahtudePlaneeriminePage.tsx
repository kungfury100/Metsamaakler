import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { BarChart3, Scale, TreePine, AlertCircle, TrendingUp, HelpCircle, ArrowRight, CalendarClock } from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RaiemahtudePlaneeriminePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kuidas määratakse lubatud raiemaht?",
      answer: "Lubatud raiemaht sõltub metsa vanusest, puuliigist ja kasvukohatüübist. See määratakse kindlaks metsamajandamiskavaga, arvestades seaduslikke piiranguid ja metsa juurdekasvu."
    },
    {
      question: "Kas ma võin kogu oma metsa korraga maha raiuda?",
      answer: "Tavaliselt mitte. Lageraie pindalale on seatud piirangud (nt maksimaalne langi suurus) ja tihti tuleb jätta seemnepuid või säilikpuid. Samuti tuleb arvestada naaberkinnistute ja rohevõrgustikuga."
    },
    {
      question: "Millal on kõige tulusam raiuda?",
      answer: "Tulusaim aeg sõltub puiduturu hindadest ja metsa küpsusest. Õige planeerimine aitab ajastada raie hetkele, mil nõudlus ja hinnad on kõrged, maksimeerides seeläbi tulu."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Raiemahtude planeerimine',
        'description': 'Professionaalne abi metsa raiemahtude planeerimisel. Maksimeeri tulu ja taga metsa jätkusuutlikkus.',
        'provider': {
          '@type': 'Organization',
          'name': 'Metsamaakler'
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
            'name': 'Raiemahtude planeerimine',
            'item': 'https://metsamaakler.ee/raiemahtude-planeerimine/'
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
    title: "Raiemahtude planeerimine – Tasuta konsultatsioon | Metsamaakler",
    description: "Kuidas planeerida raieid targalt? Optimeeri oma metsa majandamist, arvestades seadusi, turuhindu ja metsa juurdekasvu. Telli tasuta nõustamine.",
    canonical: "https://metsamaakler.ee/raiemahtude-planeerimine/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  return (
    <div className="min-h-screen relative bg-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Raiemahtude planeerimine"
          subtitle="Tark metsaomanik ei raiuhopiga, vaid planeerib. Aitame Sul koostada strateegia, mis tagab maksimaalse tulu täna ja elujõulise metsa tulevikus."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Raiemahtude planeerimine", href: "/raiemahtude-planeerimine/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Miks on raiemahtude planeerimine oluline?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Metsa majandamine on pikaajaline protsess, kus tänased otsused mõjutavad tulemusi aastakümneteks. <strong>Raiemahtude planeerimine</strong> ei ole lihtsalt otsus, mitu tihumeetrit puitu metsast välja tuua, vaid strateegiline valik, kuidas ja millal seda teha.
            </p>

            <p className="mb-8 leading-relaxed">
              Õigesti planeeritud raied tagavad stabiilse rahavoo, vähendavad riske (nt tormi- või putukakahjustused) ja hoiavad metsa tervena. Samuti aitab see vältida seadusega vastuollu minemist ja optimeerida maksukohustust.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Mida tuleb arvestada?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <TreePine size={20} className="text-[#347D4E]" />
                  Metsa küpsus ja seisukord
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Kas mets on saavutanud raieküpsuse? Kas on märke haigustest või kahjuritest, mis nõuavad kiiret sekkumist (sanitaarraie)? Üleküpsenud mets kaotab väärtust.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Scale size={20} className="text-[#347D4E]" />
                  Seaduslikud piirangud
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Metsaseadus seab piirangud lageraie suurusele ja sagedusele. Lisaks võivad kehtida looduskaitselised piirangud (Natura 2000, püsielupaigad), mis vähendavad lubatud raiemahtu.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <TrendingUp size={20} className="text-[#347D4E]" />
                  Turuolukord
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Puidu hinnad kõiguvad. Tark planeerimine tähendab raiete ajastamist perioodile, mil turul on nõudlus just Sinu metsas kasvava sortimendi järele.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <CalendarClock size={20} className="text-[#347D4E]" />
                  Uuenduskohustus
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Iga lageraiega kaasneb kohustus mets uuendada. Raiemahtude planeerimisel tuleb arvestada ka tulevaste kuludega istikutele ja maapinna ettevalmistusele.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8 not-prose flex items-start gap-4">
              <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-1">Risk üle raiuda</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  Liiga intensiivne raie võib rikkuda ökoloogilist tasakaalu ja tekitada probleeme naabritega või ametiasutustega. Samas, liiga vähene raie võib tähendada saamata jäänud tulu ja puidu kvaliteedi langust.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Metsamaakler aitab leida tasakaalu
            </h2>

            <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#163823]/10 mb-10 not-prose">
              <ul className="list-none pl-0 space-y-4">
                <li className="flex items-start gap-3">
                  <BarChart3 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                  <span className="text-gray-700">Analüüsime Sinu metsa seisukorda ja potentsiaali.</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                  <span className="text-gray-700">Koostame optimaalse raiekava, arvestades turuhindu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                  <span className="text-gray-700">Nõustame maksuküsimustes ja toetuste taotlemisel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                  <span className="text-gray-700">Aitame korraldada raietöid ja materjali müüki parima hinnaga.</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose text-center">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Küsi tasuta nõu eksperdilt!</h3>
               <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
                 Ära jäta otsuseid juhuse hooleks. Konsulteeri meiega ja pane paika plaan, mis teenib Sinu huve parimal viisil. Esimene konsultatsioon on tasuta.
               </p>
               <button 
                 onClick={handleCtaClick}
                 className="inline-flex items-center gap-2 bg-[#347D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c6b41] transition-all duration-300 shadow-lg shadow-green-900/20"
               >
                 Telli tasuta konsultatsioon
                 <ArrowRight size={20} />
               </button>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 bg-[#F8FAF9] rounded-2xl p-8 md:p-12 border border-gray-100 not-prose">
              <h2 className="text-[29px] font-bold text-[#163823] mb-8 text-center">Korduma kippuvad küsimused</h2>
              <div className="space-y-6">
                {faqData.map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg text-[#163823] mb-2 flex items-start gap-3">
                      <HelpCircle className="text-[#347D4E] mt-1 shrink-0" size={20} />
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 ml-8 leading-relaxed mb-0">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <RelatedContent currentPath="/raiemahtude-planeerimine/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
