import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Coins, ScrollText, AlertTriangle, Sprout, ArrowRightCircle, HelpCircle, Info, Calculator } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PollumaaRentPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui suur on keskmine põllumaa rendihind?",
      answer: "Rendihinnad kõiguvad Eestis väga suures vahemikus, alates 50 eurost kuni 250+ euroni hektari eest aastas. Kõrgeimad hinnad on Kesk- ja Lõuna-Eesti viljakatel muldadel (Järvamaa, Tartumaa), madalamad Lääne-Eestis ja saartel."
    },
    {
      question: "Kuidas maksustatakse renditulu?",
      answer: "Eraisikust maaomaniku jaoks on renditulu maksustatav tulumaksuga (20%). Erinevalt metsamaterjali müügist ei saa renditulust maha arvata kulusid. Ettevõtete puhul lisandub tulu ettevõtte kasumisse."
    },
    {
      question: "Kas suuline rendileping kehtib?",
      answer: "Seaduse silmis on suuline leping kehtiv, kuid vaidluste korral on seda väga raske tõestada. Soovitame alati sõlmida kirjaliku lepingu, kus on fikseeritud hind, tähtaeg ja poolte kohustused."
    },
    {
      question: "Mis on lühiajaline vs pikaajaline rent?",
      answer: "Põllumajanduses eelistatakse pikaajalisi lepinguid (5+ aastat), kuna see annab rentnikule kindluse investeerida väetistesse ja maaparandusse. Lühiajalised lepingud (1 aasta) on pigem erandlikud."
    },
    {
      question: "Kas ma saan maad müüa, kui see on välja renditud?",
      answer: "Jah, renditud maad saab müüa. Rendileping läheb üle uuele omanikule samadel tingimustel. Küll aga on rentnikul sageli ostueesõigus (kui lepingus pole teisiti kokku lepitud)."
    }
  ];

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Põllumaa rent – Info ja hinnad',
        'description': 'Informatiivne ülevaade põllumaa renditurust Eestis. Hinnad, lepingud ja maksustamine.',
        'author': {
          '@type': 'Organization',
          'name': 'Metsamaakler'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Metsamaakler',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://metsamaakler.ee/logo.png' // Placeholder
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
            'name': 'Põllumaa rent',
            'item': 'https://metsamaakler.ee/pollumaa-rent/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Põllumaa rent – Info hindade ja lepingute kohta | Metsamaakler",
    description: "Loe lähemalt põllumaa rendihindadest ja tingimustest Eestis. Informatiivne artikkel maaomanikule.",
    canonical: "https://metsamaakler.ee/pollumaa-rent/",
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
          title="Põllumaa rent"
          subtitle="Informatiivne ülevaade põllumaa renditurust. Mida peaks maaomanik teadma enne rendilepingu sõlmimist?"
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Põllumaa rent", href: "/pollumaa-rent/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8 not-prose flex items-start gap-4 shadow-sm">
              <Info className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-1">Oluline teada</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  See leht on <strong>informatiivne</strong>. Metsamaakler <strong>ei tegele põllumaa rentimisega ega vahendamisega</strong>. Meie põhitegevuseks on metsa- ja põllumaa ost. Kui kaalute rendi asemel müüki, võtke meiega julgelt ühendust.
                </p>
              </div>
            </div>

            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Põllumaa rentimine Eestis
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Põllumaa rentimine on Eestis väga levinud praktika. Paljud maaomanikud, kes ise põllumajandusega ei tegele (nt pärijad või linnas elavad omanikud), annavad oma maa kasututusse kohalikele põllumeestele. See tagab, et maa püsib heas korras, ei võsastu ning omanik teenib passiivset tulu.
            </p>

            <p className="mb-8 leading-relaxed">
              Enne rendilepingu sõlmimist on aga oluline mõista, kuidas kujuneb rendihind ja millised on lepinguga kaasnevad õigused ja kohustused. Valesti koostatud leping võib siduda maaomaniku aastateks ebasoodsate tingimustega.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Millest sõltub rendihind?
            </h2>
            <p className="mb-6">
              Rendihind on kokkuleppe küsimus, kuid turul on välja kujunenud teatud hinnatasemed, mis sõltuvad peamiselt maa tootlikkusest.
            </p>

            <div className="space-y-6 not-prose mb-10">
              <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#163823]/10">
                <h3 className="text-xl font-bold text-[#163823] mb-2 flex items-center gap-2">
                  <Sprout className="text-[#347D4E]" size={20} />
                  Mulla viljakus
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Nagu müügihinna puhul, on ka rendihinna aluseks boniteet. Viljakas maa annab suuremat saaki, seega suudab põllumees selle eest maksta kõrgemat renti.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2 flex items-center gap-2">
                  <Coins className="text-[#347D4E]" size={20} />
                  PRIA toetused
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Rendihind on sageli seotud PRIA ühtse pindalatoetuse suurusega. Levinud on mudel, kus rendihind on teatud protsent toetusest või võrdne sellega. Siiski, väga hea maa puhul võib rent olla toetusest kõrgem, kehvema maa puhul madalam.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2 flex items-center gap-2">
                  <Calculator className="text-[#347D4E]" size={20} />
                  Asukoht ja konkurents
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Kui piirkonnas on mitu tugevat põllumajandusettevõtet, kes võitlevad maaressursi pärast, tõusevad rendihinnad kiiresti. Monopoolses seisus olev rentnik võib dikteerida madalamat hinda.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Lepingud ja juriidika
            </h2>
            <p className="mb-6">
              Korrektne paberimajandus on maaomaniku parim kaitse.
            </p>

            <ul className="space-y-6 mb-10 list-none pl-0">
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <ScrollText className="text-[#347D4E]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Kirjalik vs suuline leping</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Kuigi "mehe sõna maksab", ei tasu pikaajalistes suhetes sellele lootma jääda. Kirjalik leping fikseerib rendisumma, maksmise tähtaja (sageli kord aastas sügisel) ja lepingu kestuse.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <AlertTriangle className="text-[#347D4E]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Tähtajaline vs tähtajatu</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Tähtajaline leping lõpeb kindlal kuupäeval ja seda on vahepeal raskem üles öelda. Tähtajatut lepingut saab korraliselt üles öelda, teatades sellest ette (tavaliselt 1 aasta). Põllumehed eelistavad 5+ aastaseid lepinguid, et tasuks ära maaparandus ja väetamine.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Info className="text-[#347D4E]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Maa korrashoid</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Lepingusse tuleks märkida, millises seisukorras peab maa olema lepingu lõppedes. See kaitseb omanikku olukorra eest, kus rentnik kurnab maa välja või laseb kraavidel ummistuda.
                  </p>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Rent vs Müük – kumba eelistada?
            </h2>
            <p className="mb-6">
              See on strateegiline otsus. Rent sobib, kui soovite säilitada sidet maaga ja teile sobib väike, kuid stabiilne iga-aastane tulu. Müük sobib, kui vajate suuremat summat koheselt (nt koduostuks, ettevõtluseks) või ei soovi tegeleda maa haldamisega (maamaks, lepingute uuendamine).
            </p>
            <p className="mb-6">
              Tasub arvestada, et renditulu on maksustatav 20% tulumaksuga, millest kulusid maha arvata ei saa. Põllumaa müügi korral on saadud tulu samuti maksustatav, kuid suurema summa investeerimine võib toota rohkem kui iga-aastane rent.
            </p>

            <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200 not-prose text-center">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Soovid rendi asemel hoopis müüa?</h3>
               <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
                 Kui tundub, et renditulu ei ole piisav või haldamine on tülikas, küsi meilt põllumaa ostupakkumist. Hindamine on tasuta.
               </p>
               <button 
                 onClick={handleCtaClick}
                 className="inline-flex items-center gap-2 bg-[#347D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c6b41] transition-all duration-300 shadow-lg shadow-green-900/20"
               >
                 Küsi ostupakkumist
                 <ArrowRightCircle size={20} />
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

            <RelatedContent currentPath="/pollumaa-rent/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
