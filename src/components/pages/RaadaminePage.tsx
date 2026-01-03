import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Tractor, Home, FileSignature, AlertOctagon, HelpCircle, ArrowRight, Map } from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RaadaminePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis vahe on lageraiel ja raadamisel?",
      answer: "Lageraie on metsamajanduslik tegevus, mille järel tuleb mets uuendada (istutada uued puud). Raadamine on metsamaa muutmine muuks maaks (nt ehitusmaaks, põlluks), kus uut metsa asemele ei istutata."
    },
    {
      question: "Kas ma võin oma metsa lihtsalt põlluks teha?",
      answer: "Ei, selleks on vaja luba. Tavaliselt nõuab see kohaliku omavalitsuse nõusolekut ja Keskkonnaameti luba (metsateatis märkega 'raadamine'). Suuremate alade puhul võib olla vajalik keskkonnamõjude hindamine."
    },
    {
      question: "Kas raadamine maksab midagi?",
      answer: "Jah, lisaks tööde maksumusele võib lisanduda tasu metsamaa sihtotstarbe muutmise eest või kohustus kompenseerida keskkonnakahju mujal."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Raadamine',
        'description': 'Mis on raadamine ja kuidas muuta metsamaa ehitus- või põllumaaks? Info lubade, planeeringute ja seadusandluse kohta.',
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
            'name': 'Raadamine',
            'item': 'https://metsamaakler.ee/raadamine/'
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
    title: "Raadamine – Metsamaa muutmine ehitus- või põllumaaks | Metsamaakler",
    description: "Soovid metsa asemele maja ehitada või põldu rajada? See on raadamine. Loe, milliseid lube ja planeeringuid see protsess nõuab.",
    canonical: "https://metsamaakler.ee/raadamine/",
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
          title="Raadamine"
          subtitle="Raadamine ei ole tavaline metsaraiumine. See on juriidiline ja tehniline protsess metsamaa muutmiseks muuks maatulundusmaaks või ehitusmaaks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Raadamine", href: "/raadamine/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Mis on raadamine?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              <strong>Raadamine</strong> on raie, mida tehakse, et võimaldada maa kasutamist muul otstarbel kui metsa majandamine. 
              Lihtsamalt öeldes: kui tavalise raie järel istutatakse uus mets, siis raadamise järel sinna enam metsa ei tule. Asemele tuleb maja, tee, elektriliin, kraav või põld.
            </p>

            <p className="mb-8 leading-relaxed">
              Kuna raadamine vähendab Eesti üldist metsapindala, on see tegevus seadustega rangelt reguleeritud ja nõuab rohkem asjaajamist kui tavaline metsaraiumine.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Millal on vaja raadamist?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Home size={20} className="text-[#347D4E]" />
                  Ehitustegevus
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Kui soovid metsamaale ehitada elumaja, suvilat või abihoonet. Ehitusalune pind tuleb raadata ja sihtotstarve muuta.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Map size={20} className="text-[#347D4E]" />
                  Tehnovõrgud ja teed
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Uute teede, elektriliinide, gaasitrasside või kraavide rajamine läbi metsa nõuab trassikoridori raadamist.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Tractor size={20} className="text-[#347D4E]" />
                  Põllumaa laiendamine
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Mõnikord soovitakse võsastunud endist põllumaad (mis on registris juba metsana kirjas) uuesti põllumajanduslikku kasutusse võtta.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <AlertOctagon size={20} className="text-[#347D4E]" />
                  Karjäärid
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Maavarade kaevandamiseks (nt liiva- või kruusakarjäär) tuleb kattepinnas ja mets eemaldada.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kuidas protsess käib?
            </h2>
            <p className="mb-6">
              Raadamiseks ei piisa vaid sae metsa viimisest. Alustada tuleb paberimajandusest.
            </p>

            <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#163823]/10 mb-10 not-prose">
              <ul className="list-none pl-0 space-y-6">
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm">
                    <FileSignature size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Planeering või luba</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Esimene samm on kohalik omavalitsus. Vaja on kehtestatud detailplaneeringut, projekteerimistingimusi või ehitusluba, mis lubab metsamaa kasutust muuta.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm">
                    <FileSignature size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Metsateatis</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Keskkonnaametile esitatakse metsateatis, kus raie liigiks märgitakse "raadamine". Lisada tuleb viide planeeringule või ehitusloale.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm">
                    <Map size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Katastrimuudatus</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Pärast raietöid tuleb sageli algatada katastriüksuse sihtotstarbe muutmine ja uue kõlviku (nt õuemaa) kandmine registrisse.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8 not-prose flex items-start gap-4">
              <AlertOctagon className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-1">Tähelepanu!</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  Ilma kehtiva ehitusloa või planeeringuta raadamine on ebaseaduslik. Metsa ei tohi "igaks juhuks" lagedaks raiuda väitega, et "äkki kunagi ehitan". Sellisel juhul käsitletakse seda ebaseadusliku lageraiena või metsa uuendamise kohustuse rikkumisena.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose text-center">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Vajad abi raadamise korraldamisel?</h3>
               <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
                 Bürokraatia võib olla keeruline. Metsamaakler aitab suhelda ametiasutustega, vormistada taotlused ja teostada raietööd korrektselt.
               </p>
               <button 
                 onClick={handleCtaClick}
                 className="inline-flex items-center gap-2 bg-[#347D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c6b41] transition-all duration-300 shadow-lg shadow-green-900/20"
               >
                 Küsi nõu
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

            <RelatedContent currentPath="/raadamine/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
