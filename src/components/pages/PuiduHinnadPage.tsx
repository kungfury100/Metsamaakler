import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { TrendingUp, Euro, Trees, ExternalLink, HelpCircle, BarChart3, Globe, AlertTriangle, ArrowRight } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PuiduHinnadPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui tihti puidu hinnad muutuvad?",
      answer: "Puiduturg on väga dünaamiline. Hinnad võivad muutuda igakuiselt ja vahel isegi iganädalaselt, sõltudes nõudlusest saeveskites, ekspordivõimalustest ja ilmastikuoludest."
    },
    {
      question: "Milline puuliik on hetkel kõige kallim?",
      answer: "Traditsiooniliselt on kõige kallimad okaspuupalgid (mänd ja kuusk) ning kõrgekvaliteediline kasepakk, mida kasutatakse vineeritööstuses."
    },
    {
      question: "Kas internetis nähtud hinnakirjad kehtivad kõigile?",
      answer: "Tavaliselt on avalikud hinnakirjad indikatiivsed 'väravahinnad' saeveskites. Teie metsa tegelik hind sõltub sellest, kui kaugel on mets tehasest (transpordikulu) ja kui keeruline on raie."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Puidu hinnad Eestis – Turuülevaade ja trendid',
        'description': 'Millised on hetkel puidu hinnad? Loe lähemalt turusituatsioonist, hinna kujunemisest ja vaata indikatiivseid hinnatasemeid.',
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
            'name': 'Puidu hinnad',
            'item': 'https://metsamaakler.ee/puidu-hinnad/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Puidu hinnad Eestis – Turuülevaade ja trendid | Metsamaakler",
    description: "Soovid teada puidu hetkehinda? Anname ülevaate puiduturu trendidest, palgi, paberipuu ja küttepuu hindadest ning teguritest, mis mõjutavad Sinu metsa väärtust.",
    canonical: "https://metsamaakler.ee/puidu-hinnad/",
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
          title="Puidu hinnad"
          subtitle="Puiduturg on pidevas muutumises. Anname ausa ja läbipaistva ülevaate hetkeolukorrast ning selgitame, kuidas kujuneb hind just Sinu metsale."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Puidu hinnad", href: "/puidu-hinnad/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10 not-prose flex items-start gap-4">
              <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-2">Oluline teada hindadest</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  Alljärgnev info on üldistav ja illustratiivne. Puidu hinnad muutuvad ajas kiiresti ning sõltuvad piirkonnast, mahtudest ja kvaliteedist. 
                  Täpsema info saamiseks soovitame alati küsida personaalset pakkumist või jälgida ametlikku statistikat.
                </p>
              </div>
            </div>

            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Milline on puidu hind täna?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Metsaomanikud küsivad tihti: "Mis on praegu metsa hind?" Sellele küsimusele ühest vastust anda on sama keeruline kui ennustada homset aktsiaturgu. 
              Puit on globaalne tooraine, mille hinda mõjutavad ehitussektori aktiivsus Skandinaavias ja Kesk-Euroopas, energiahinnad, intressimäärad ja isegi ilmastikuolud, mis määravad raietööde keerukuse.
            </p>

            <p className="mb-8 leading-relaxed">
              Sellegipoolest saab välja tuua teatud trendid ja suurusjärgud, mis aitavad metsaomanikul orienteeruda. 
              Metsamaakler hoiab turul igapäevaselt kätt pulsil, suheldes suurimate saeveskite ja kokkuostjatega üle Eesti.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Indikatiivsed hinnatasemed (Seisuga 2024/2025)
            </h2>
            <p className="mb-6">
              Järgnevad numbrid on <strong>hinnangulised keskmised</strong> ja võivad erineda tegelikest pakkumistest. 
              Hinnad on toodud tihumeetri (tm) kohta saeveski väravas (s.t. transpordikulu on veel maha arvamata).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Okaspuupalk</h3>
                  <div className="bg-green-100 text-[#347D4E] px-3 py-1 rounded-full text-sm font-bold">~70 - 95 €/tm</div>
                </div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Mänd ja kuusk on ehitussektori alustalad. Hinda mõjutab tugevalt palgi läbimõõt ja pikkus. Jämedam ja sirgem palk on alati hinnas. Peenem palk (peenpalk) on odavam.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Kasepakk (Vineer)</h3>
                  <div className="bg-green-100 text-[#347D4E] px-3 py-1 rounded-full text-sm font-bold">~90 - 120+ €/tm</div>
                </div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Kvaliteetne kasepakk on "Eesti kuld". Nõuded kvaliteedile on aga väga kõrged – palk peab olema sirge, oksavaba ja ilma südamemädanikuta.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Paberipuu</h3>
                  <div className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold">~35 - 55 €/tm</div>
                </div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Kõige volatiilsem sortiment. Sõltub tselluloositehaste nõudlusest. Kask ja haab on sageli veidi kallimad kui okaspuu paberipuu.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Küttepuu</h3>
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">~30 - 45 €/tm</div>
                </div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Madalaima väärtusega puit (sageli lepp, haab, praakpuit). Hinda mõjutab kütteperiood ja hakkepuidu nõudlus katlamajades.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kust vaadata ametlikku statistikat?
            </h2>
            <p className="mb-6">
              Kuna hinnad muutuvad pidevalt, on kõige targem jälgida sõltumatuid allikaid, kes koguvad andmeid regulaarselt. 
              Eesti Erametsakeskus avaldab igakuiselt põhjalikke puiduturu ülevaateid, kus on toodud välja keskmised hinnad sortimentide lõikes.
            </p>

            <a 
              href="https://www.eramets.ee/puiduhinnad/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#F0F7F4] text-[#163823] px-6 py-4 rounded-lg font-bold hover:bg-[#e0efe8] transition-colors border border-[#347D4E]/20 not-prose no-underline"
            >
              <ExternalLink size={20} className="text-[#347D4E]" />
              Vaata Erametsakeskuse puiduhinna statistikat
            </a>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Miks Sinu metsa hind võib erineda keskmisest?
            </h2>
            <p className="mb-6">
              On oluline mõista, et tabelis toodud hind on "ideaalhind". Tegelik tulu, mis jõuab metsaomaniku taskusse (kännuraha), sõltub kuludest, mis tuleb teha puidu kättesaamiseks ja transpordiks.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 not-prose mb-10">
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm shrink-0 h-10 w-10 flex items-center justify-center">
                    <Globe className="text-[#347D4E]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823]">Asukoht ja logistika</h4>
                    <p className="text-sm text-gray-700 m-0">
                      Kui mets asub saeveskist kaugel (nt Lõuna-Eesti mets ja tehas asub Pärnus), kulub suur osa hinnast transpordile. Iga lisakilomeeter vähendab kännuraha.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm shrink-0 h-10 w-10 flex items-center justify-center">
                    <Trees className="text-[#347D4E]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823]">Raie tingimused</h4>
                    <p className="text-sm text-gray-700 m-0">
                      Pehme pinnas nõuab eritehnikat või külma ilma ootamist. Raskesti ligipääsetav lank tõstab ülestöötamise hinda ja vähendab omaniku tulu.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm shrink-0 h-10 w-10 flex items-center justify-center">
                    <BarChart3 className="text-[#347D4E]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823]">Maht ja kvaliteet</h4>
                    <p className="text-sm text-gray-700 m-0">
                      Suurema raiemahu puhul on püsikulud (tehnika treilimine) ühiku kohta väiksemad. Samuti maksab jäme palk oluliselt rohkem kui peenike.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-12 bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose text-center">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Soovid teada oma metsa täpset väärtust?</h3>
               <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
                 Keskmine statistika ei ütle Sulle, kui palju on väärt Sinu mets. Teeme Sulle personaalse arvutuse, võttes arvesse kõiki nüansse.
               </p>
               <button 
                 onClick={handleCtaClick}
                 className="inline-flex items-center gap-2 bg-[#347D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c6b41] transition-all duration-300 shadow-lg shadow-green-900/20"
               >
                 Küsi personaalset hinnapakkumist
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

            <RelatedContent currentPath="/puidu-hinnad/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
