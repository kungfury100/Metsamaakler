import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Sprout, ExternalLink, AlertCircle, CheckCircle2, Leaf, Coins, Tractor, Info, HelpCircle } from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PollumaaPriaToetusedPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kes võib taotleda PRIA toetusi?",
      answer: "Üldjuhul saavad toetust taotleda aktiivsed põllumajandustootjad, kellel on kasutusõigus maale (omanik või rentnik) ja kes hoiavad maad heas põllumajanduslikus korras. Täpsed nõuded sõltuvad konkreetsest meetmest."
    },
    {
      question: "Millal toetusi makstakse?",
      answer: "Pindalatoetuste taotlemine toimub tavaliselt kevadel (mais-juunis). Väljamaksed algavad enamasti detsembris ja võivad jätkuda järgmise aasta kevadeni."
    },
    {
      question: "Mis juhtub toetustega maa müügi korral?",
      answer: "Kui maa müüakse toetusperioodi jooksul, on oluline ostu-müügilepingus või eraldi avaldusega fikseerida toetusõiguste üleminek, et vältida toetuse tagasinõudmist."
    }
  ];

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Põllumaa PRIA toetused – Ülevaade',
        'description': 'Informatiivne ülevaade levinumatest PRIA toetustest põllumaale. Ühtne pindalatoetus ja keskkonnameetmed.',
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
            'name': 'Põllumaa PRIA toetused',
            'item': 'https://metsamaakler.ee/pollumaa-pria-toetused/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Põllumaa PRIA toetused – Ülevaade ja info | Metsamaakler",
    description: "Mis on PRIA toetused ja kes neid saavad? Lühike ülevaade levinumatest põllumaa toetusmeetmetest ja link ametlikule infole.",
    canonical: "https://metsamaakler.ee/pollumaa-pria-toetused/",
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
          title="Põllumaa PRIA toetused"
          subtitle="Üldine informatsioon põllumajandustoetuste kohta. Toetame teadlikku maakasutust ja jätkusuutlikku põllumajandust."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Põllumaa PRIA toetused", href: "/pollumaa-pria-toetused/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 not-prose flex items-start gap-4">
              <Info className="text-blue-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-1">Pane tähele</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  Toetusmeetmete tingimused, määrad ja nõuded võivad aastati muutuda. Kõige ajakohasema info saamiseks külastage alati PRIA ametlikku kodulehte. Käesolev artikkel on vaid üldine kokkuvõte.
                </p>
              </div>
            </div>

            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Põllumaa toetused Eestis
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Euroopa Liidu ja Eesti riigi ühine põllumajanduspoliitika toetab maaomanikke ja põllumehi erinevate toetustega. Nende eesmärk on tagada stabiilne toidutootmine, säilitada maaelu ja soodustada keskkonnasõbralikke tootmisviise. Põllumaa väärtus turul on sageli otseselt seotud sellega, kas maa on PRIAs arvel ja toetusõiguslik.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Levinumad toetusmeetmed
            </h2>
            <p className="mb-6">
              Põllumajandustoetuste süsteem on lai, kuid enamik maaomanikke ja rentnikke puutub kokku peamiselt pindalapõhiste toetustega.
            </p>

            <ul className="space-y-6 mb-10 list-none pl-0">
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Sprout className="text-[#347D4E]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Põhisissetuleku toetus (endine ÜPT)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    See on kõige levinum toetus, mida makstakse hektaripõhiselt kõigile nõuetele vastavatele taotlejatele. Eesmärk on tagada põllumeestele stabiilne sissetulek. Nõudeks on maa hoidmine heas põllumajanduslikus korras (nt niitmine või karjatamine).
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Leaf className="text-[#347D4E]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Keskkonnasõbralik majandamine (KSM)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Lisatoetus neile, kes võtavad endale täiendavaid keskkonnakohustusi. Näiteks külvikorra järgimine, talvine taimkate, väetiste piiratud kasutamine ja elurikkuse soodustamine põlluservades.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Tractor className="text-[#347D4E]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Mahetoetus</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Mõeldud tootjatele, kes on läbinud mahetunnustuse ja kasvatavad kultuure mahepõllumajanduse reegleid järgides (keelatud on mineraalväetised ja sünteetilised taimekaitsevahendid).
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Coins className="text-[#347D4E]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Noore taluniku toetus</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Investeeringutoetus alustavatele põllumajandusettevõtjatele (kuni 40-aastased), aitamaks neil tegevust alustada või tootmist moderniseerida.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8 shadow-sm not-prose text-center">
              <h3 className="text-xl font-bold text-[#163823] mb-4">
                Otsid ametlikku infot ja taotlusvorme?
              </h3>
              <p className="text-gray-600 mb-6">
                Kõige täpsema info taotlusvoorude, tähtaegade ja tingimuste kohta leiad alati Põllumajanduse Registrite ja Informatsiooni Ameti (PRIA) kodulehelt.
              </p>
              <a 
                href="https://www.pria.ee/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#005AA3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004a85] transition-colors"
              >
                Mine PRIA kodulehele
                <ExternalLink size={18} />
              </a>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Mida maaomanik peab teadma?
            </h2>
            <p className="mb-6">
              Isegi kui te ise põllumajandusega ei tegele, vaid rendite maad välja, on kasulik teada, millised kohustused toetustega kaasnevad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-10">
              <div className="bg-[#F8FAF9] p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-[#347D4E]" size={24} />
                  <h3 className="text-lg font-bold text-[#163823] m-0">Niitmiskohustus</h3>
                </div>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Püsirohumaid tuleb üldjuhul vähemalt kord aastas (tavaliselt suve keskel) niita või seal loomi karjatada, et vältida toetuste vähendamist.
                </p>
              </div>
              
              <div className="bg-[#F8FAF9] p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="text-amber-600" size={24} />
                  <h3 className="text-lg font-bold text-[#163823] m-0">Purustamise keeld</h3>
                </div>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Paljudel juhtudel ei ole lubatud niidet lihtsalt purustada ja maha jätta, vaid see tuleb koristada, et vältida kulu teket ja soodustada liigirikkust.
                </p>
              </div>
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

            <RelatedContent currentPath="/pollumaa-pria-toetused/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
