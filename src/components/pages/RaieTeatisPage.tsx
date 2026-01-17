import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { FileText, Calendar, AlertCircle, CheckCircle2, HelpCircle, Info, ChevronRight, ArrowRight } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RaieTeatisPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui palju maksab raieteatise esitamine?",
      answer: "Raieteatise esitamine Keskkonnaametile on riigilõivuvaba ehk tasuta. Küll aga võib kulutusi tekitada vajaliku metsamajandamiskava tellimine, kui see puudub või on aegunud."
    },
    {
      question: "Kas ma võin ise raieteatise esitada?",
      answer: "Jah, metsaomanik saab raieteatise esitada iseseisvalt metsaregistri veebikeskkonnas, logides sisse ID-kaardi, Mobiil-ID või Smart-ID-ga."
    },
    {
      question: "Mis juhtub, kui teen raiet ilma raieteatiseta?",
      answer: "Raietööde teostamine ilma kehtiva raieteatiseta (kui see on nõutud) on seaduserikkumine. Selle eest võivad järgneda rahatrahvid ning kohustus hüvitada keskkonnale tekitatud kahju."
    },
    {
      question: "Kas raieteatis on vajalik ka tuulemurru koristamiseks?",
      answer: "Üldjuhul jah. Sanitaarraie (sh tormimurru koristus) vajab samuti raieteatist, et Keskkonnaamet saaks hinnata kahjustuse ulatust ja raie vajalikkust."
    },
    {
      question: "Kui kaua raieteatis kehtib?",
      answer: "Raieteatis kehtib raietöödeks üldjuhul 12 kuud alates registreerimisest. Kui selle aja jooksul töid ei teostata, tuleb esitada uus teatis."
    }
  ];

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Raieteatis – kõik, mida pead teadma',
        'description': 'Mis on raieteatis, millal see esitada ja kuidas protsess käib? Loe põhjalikku juhendit.',
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
            'name': 'Metsaomanikule',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Raieteatis',
            'item': 'https://metsamaakler.ee/raieteatis/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Raieteatis – Info esitamise, kehtivuse ja nõuete kohta",
    description: "Raieteatis on dokument, mis on vajalik raietööde teostamiseks. Loe siit, kuidas esitada raieteatist, millal seda vaja on ja kui kaua see kehtib.",
    canonical: "https://metsamaakler.ee/raieteatis/",
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
          title="Raieteatis"
          subtitle="Ametlik luba metsatöödeks. Kõik, mida pead teadma taotlemisest, tähtaegadest ja seadusandlusest."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsaomanikule", href: "/" },
            { label: "Raieteatis", href: "/raieteatis/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Mis on raieteatis ja miks see on vajalik?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              <strong>Raieteatis</strong> (sageli nimetatakse ka metsateatiseks) on metsaomaniku või tema esindaja poolt Keskkonnaametile esitatav dokument, mis teavitab kavandatavatest raietöödest või olulistest metsakahjustustest. 
              Sisuliselt toimib see riikliku loana – ilma registreeritud raieteatiseta on enamik raieid Eestis keelatud.
            </p>

            <p className="mb-8 leading-relaxed text-gray-700">
              Riiklik järelevalve on vajalik selleks, et tagada metsade säästlik majandamine ning kaitsta elurikkust. 
              Raieteatise menetlemise käigus kontrollib Keskkonnaamet, kas planeeritud tegevus on kooskõlas metsaseaduse ja looduskaitseliste piirangutega. 
              Dokumendi korrektsus on omaniku kaitseks – see annab kindlustunde, et tegevus on seaduslik.
            </p>

            <div className="bg-green-50/50 p-6 md:p-8 rounded-2xl border border-green-100 my-8 not-prose shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#163823] mb-3 flex items-center gap-2">
                <Info size={22} className="text-[#347D4E]" />
                Kas teadsid?
              </h3>
              <p className="text-gray-700 mb-0 text-base leading-relaxed">
                Kui müüte raieõigust Metsamaaklerile, ei pea te raieteatise bürokraatia pärast muretsema. 
                Meie spetsialistid vormistavad kõik vajalikud dokumendid teie eest ja suhtlevad Keskkonnaametiga.
              </p>
            </div>

            <h2 className="text-[26px] md:text-[32px] font-bold text-[#163823] mt-12 mb-6 font-inter">
              Millal on raieteatis kohustuslik?
            </h2>
            <p className="mb-6 text-gray-700">
              Metsaseadus sätestab konkreetsed juhud, millal tuleb teatis esitada. Üldreeglina on see nõutud alati, kui puidu maht või raie iseloom ületab teatud piiri.
            </p>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8 not-prose">
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50/50 transition-colors">
                  <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="text-[#347D4E]" size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-[#163823] block mb-1">Uuendusraie</span>
                    <span className="text-gray-600 text-sm">Lageraie ja turberaie küpses metsas uue metsapõlve rajamiseks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50/50 transition-colors">
                  <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="text-[#347D4E]" size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-[#163823] block mb-1">Harvendusraie</span>
                    <span className="text-gray-600 text-sm">Keskealise metsa tiheduse reguleerimiseks ja kasvutingimuste parandamiseks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50/50 transition-colors">
                  <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="text-[#347D4E]" size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-[#163823] block mb-1">Sanitaarraie</span>
                    <span className="text-gray-600 text-sm">Haigete, kahjustatud või surnud puude eemaldamiseks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50/50 transition-colors">
                  <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="text-[#347D4E]" size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-[#163823] block mb-1">Valikraie</span>
                    <span className="text-gray-600 text-sm">Püsimetsana majandatavas metsas üksikute puude või gruppide raiumiseks.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-12 flex items-start gap-4 p-6 bg-amber-50 rounded-xl border border-amber-100 text-amber-900/80 not-prose">
              <Info className="shrink-0 text-amber-600 mt-1" size={24} />
              <div className="text-sm leading-relaxed">
                <strong>Erand:</strong> Raieteatist ei ole vaja esitada kuni 20 aasta vanuses puistus valgustusraie tegemiseks (kui rinnasdiameeter on alla teatud normi) või kui raiutakse kuni 20 tihumeetrit puitu kinnistu kohta aastas oma tarbeks. Siiski tasub kahtluse korral alati konsulteerida spetsialistiga.
              </div>
            </div>

            <h2 className="text-[26px] md:text-[32px] font-bold text-[#163823] mt-12 mb-8 font-inter">
              Raieteatise esitamise protsess
            </h2>
            <p className="mb-8 text-gray-700">
              Tänapäeval on asjaajamine tehtud võimalikult digitaalseks ja kiireks. Protsess koosneb järgmistest etappidest:
            </p>

            <div className="space-y-4 not-prose mb-12">
              {[
                {
                  title: "Metsamajandamiskava kontroll",
                  desc: "Veenduge, et teie metsa kohta on olemas kehtiv inventeerimisandmestik (metsamajandamiskava). Ilma selleta ei saa enamikku raieid teostada."
                },
                {
                  title: "Teatise esitamine",
                  desc: "Kõige mugavam on esitada teatis metsaregistri veebikeskkonnas (register.metsad.ee). Alternatiivina saab seda teha e-posti teel digiallkirjastatult."
                },
                {
                  title: "Menetlus",
                  desc: "Keskkonnaamet vaatab taotluse läbi. Tavapärane menetlusaeg on kuni 15 päeva. Kui mets asub kaitsealal, võib aeg pikeneda kuni 30 päevani."
                },
                {
                  title: "Otsus ja kehtivus",
                  desc: "Positiivse otsuse korral registreeritakse raieteatis metsaregistris. Luba kehtib üldjuhul 12 kuud. Selle aja jooksul peab raietööd teostama."
                }
              ].map((step, idx) => (
                <div key={idx} className="group relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 group-hover:bg-[#347D4E] transition-colors duration-300 flex items-center justify-center text-[#347D4E] group-hover:text-white font-bold text-lg border border-green-100">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] text-lg mb-2 group-hover:text-[#347D4E] transition-colors">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-0">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="absolute left-[2.2rem] top-[4.5rem] bottom-[-1.5rem] w-px bg-green-100 group-hover:bg-green-200 transition-colors hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-[26px] md:text-[32px] font-bold text-[#163823] mt-12 mb-8 font-inter">
              Olulised tähelepanekud
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-16">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-[#163823] text-xl mb-3">Kehtivusaeg</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Raieteatis kehtib 1 aasta. Kui te ei jõua selle ajaga töid teha, kaotab luba kehtivuse ja tuleb esitada uus taotlus. Pikendada vana teatist ei saa.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle className="text-amber-600" size={24} />
                </div>
                <h3 className="font-bold text-[#163823] text-xl mb-3">Linnurahu</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pidage meeles kevadsuvist linnurahu (tavaliselt 15. aprill – 15. juuli). Isegi kui raieteatis on kehtiv, on sel perioodil raietööd enamasti piiratud või ebasoovitatavad.
                </p>
              </div>
            </div>

            <div className="bg-[#163823] rounded-3xl p-8 md:p-12 text-white not-prose mb-16 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Miks valida Metsamaakler?
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed text-lg">
                  Bürokraatia võib olla keeruline ja aeganõudev. Metsamaakler on partner, kes teeb metsaomaniku elu lihtsaks. 
                  Ostes teie raieõiguse või metsakinnistu, võtame kogu paberimajanduse enda kanda.
                </p>
                <button 
                  onClick={handleCtaClick}
                  className="bg-white text-[#163823] px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
                >
                  Küsi pakkumist
                  <ArrowRight size={20} />
                </button>
              </div>
              
              {/* Decorative patterns */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* FAQ Section */}
            <div className="mt-16 bg-[#F8FAF9] rounded-3xl p-8 md:p-12 border border-green-100/50 not-prose">
              <div className="text-center mb-10">
                <h2 className="text-[29px] font-bold text-[#163823] mb-4">Korduma kippuvad küsimused</h2>
                <p className="text-gray-600">Levinumad küsimused raieteatise kohta</p>
              </div>
              
              <div className="grid gap-4 max-w-4xl mx-auto">
                {faqData.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-green-200 transition-colors">
                    <h4 className="font-bold text-lg text-[#163823] mb-3 flex items-start gap-3">
                      <HelpCircle className="text-[#347D4E] mt-1 shrink-0" size={20} />
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 ml-8 leading-relaxed mb-0 text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <RelatedContent currentPath="/raieteatis/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
