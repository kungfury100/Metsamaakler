import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Coins, Calendar, FileText, TrendingDown, ShieldCheck, HelpCircle, ArrowRight, Wallet } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RaieoiguseMuukJaTulumaksPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui suur on tulumaks raieõiguse müügilt?",
      answer: "Tulumaks on üldjuhul 20% (või vastavalt kehtivale maksumäärale) saadud kasumilt. Kasum leitakse müügihinna ja soetusmaksumuse (ning dokumentaalselt tõendatud kulude) vahena."
    },
    {
      question: "Kas ma saan maksukohustust edasi lükata?",
      answer: "Jah, eraisikuna on võimalik raieõiguse ja metsamaterjali müügist saadud tulu maksustamist edasi lükata kuni 3 aastat, kui plaanite raha kasutada metsa majandamise kulude katmiseks."
    },
    {
      question: "Milliseid kulusid saab tulust maha arvata?",
      answer: "Maha saab arvata metsa majandamisega seotud dokumentaalselt tõendatud kulud, näiteks metsamajandamiskava koostamine, metsauuendus, valgustusraie, metsateede korrashoid jne."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Raieõiguse müük ja tulumaks',
        'description': 'Kuidas maksustatakse raieõiguse müüki? Info tulumaksu, kulude mahaarvamise ja maksukohustuse edasilükkamise kohta.',
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
            'name': 'Raieõiguse müük ja tulumaks',
            'item': 'https://metsamaakler.ee/raieoiguse-muuk-ja-tulumaks/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Raieõiguse müük ja tulumaks – Kohustused ja soodustused | Metsamaakler",
    description: "Raieõiguse müügitulu on maksustatav, kuid teatud tingimustel saab maksmist edasi lükata ja kulusid maha arvata. Loe lähemalt.",
    canonical: "https://metsamaakler.ee/raieoiguse-muuk-ja-tulumaks/",
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
          title="Raieõiguse müük ja tulumaks"
          subtitle="Metsa majandamisest saadav tulu on maksustatav, kuid riik pakub metsaomanikele mitmeid erisusi ja soodustusi. Tee oma rahaasjad targalt korda."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Raieõiguse müük ja tulumaks", href: "/raieoiguse-muuk-ja-tulumaks/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Kas raieõiguse müük on maksustatav?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Jah, raieõiguse ja metsamaterjali müügist saadav tulu kuulub maksustamisele tulumaksuga. See kehtib nii eraisikutele kui ka ettevõtetele. 
              Erinevalt kinnistu müügist, mis võib teatud juhtudel olla maksuvaba (nt omandireformi käigus tagastatud maa esmane võõrandamine), on <strong>raieõiguse müük alati ettevõtlustulu või kasu vara võõrandamisest</strong>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Võimalused maksukoormuse optimeerimiseks
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <TrendingDown size={20} className="text-[#347D4E]" />
                  Kulude mahaarvamine
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Müügitulust on lubatud maha arvata metsa majandamisega seotud dokumentaalselt tõendatud kulud. Näiteks metsamajandamiskava tegemine, metsauuendus, istikute ost, valgustusraie teenus jne.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Calendar size={20} className="text-[#347D4E]" />
                  Maksukohustuse edasilükkamine
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Füüsilisest isikust metsaomanik võib metsamaterjali ja raieõiguse müügist saadud kasu maksustamist edasi lükata kuni <strong>kolm aastat</strong>. See annab võimaluse kasutada saadud raha uue metsa istutamiseks ilma vahepeal makse tasumata.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Wallet size={20} className="text-[#347D4E]" />
                  Erimikonto (FIE)
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  FIE-d saavad kasutada erimikontot, kuhu kantud tulu on maksuvaba seni, kuni seda sealt välja ei võeta. See võimaldab hajutada maksukoormust mitme aasta peale.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#347D4E]" />
                  Maksuvaba tuluosa
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Pea meeles, et aastane üldine maksuvaba tulu kehtib ka metsatulule. Kui Sinu aastane sissetulek on väike, võib osa metsatulust jääda maksuvaba miinimumi sisse.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kuidas deklareerida?
            </h2>

            <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#163823]/10 mb-10 not-prose">
              <ul className="list-none pl-0 space-y-6">
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 text-[#347D4E] shadow-sm">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Tuludeklaratsioon</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Metsatulu deklareeritakse iga-aastases füüsilise isiku tuludeklaratsioonis (tavaliselt vorm E). FIE-d deklareerivad ettevõtlustulu vormil E.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 text-[#347D4E] shadow-sm">
                    <Coins size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Käibemaks</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Kui oled käibemaksukohustuslane, lisandub müügihinnale käibemaks, mille peab ostja Sulle tasuma ja mille Sina pead riigile edasi kandma. Eraisikud tavaliselt käibemaksukohustuslased ei ole.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8 not-prose flex items-start gap-4">
              <HelpCircle className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-1">Oluline nüanss!</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  Maksukohustuse edasilükkamist (kuni 3 a) saab kasutada vaid juhul, kui esitad tuludeklaratsioonis vastava sooviavalduse. Ära unusta seda märkimast!
                </p>
              </div>
            </div>

            <div className="mt-12 bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose text-center">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Maksud tunduvad keerulised?</h3>
               <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
                 Metsamaakler nõustab Sind hea meelega tehingu juriidilises ja maksunduslikus pooles. Meie eesmärk on, et Sulle jääks tehingust võimalikult palju kätte.
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

            <RelatedContent currentPath="/raieoiguse-muuk-ja-tulumaks/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
