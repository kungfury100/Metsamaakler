import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { TrendingUp, Ruler, Trees, ExternalLink, HelpCircle, AlertTriangle, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PalgiHinnadPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis vahe on palgil ja peenpalgil?",
      answer: "Peamine erinevus on ladva läbimõõdus. Tavapalk (saepalk) algab tavaliselt 18 cm läbimõõdust, samas kui peenpalk jääb vahemikku 8–18 cm. Tavapalk on alati kallim, sest sellest saab lõigata laiemat saematerjali."
    },
    {
      question: "Miks männi hind on sageli kõrgem kui kuusel?",
      answer: "Mänd on puidutööstuses hinnatum oma vastupidavuse ja väiksema oksalisuse tõttu, eriti tisleritöödes ja ehituses. Samuti on mänd vähem vastuvõtlik mädanikele kui kuusk, mis tõstab kvaliteetse palgi väljatulekut."
    },
    {
      question: "Mis on vineeripakk?",
      answer: "See on kõige kvaliteetsem kasepalk, millest toodetakse vineeri. Nõuded on väga ranged: pakk peab olema sirge, oksavaba ja ilma südamemädanikuta. Selle hind on puiduturul reeglina kõige kõrgem."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Palgi hinnad ja kvaliteedinõuded',
        'description': 'Ülevaade saepalgi ja vineeripaku hindadest Eestis. Mis määrab palgi kvaliteedi ja kuidas kujuneb hind?',
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
            'name': 'Palgi hinnad',
            'item': 'https://metsamaakler.ee/palgi-hinnad/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Palgi hinnad – Saepalk, vineeripakk ja kvaliteet | Metsamaakler",
    description: "Milline on kvaliteetse palgi hind? Vaata männi-, kuuse- ja kasepalgi hinnatasemeid ning loe, millised vead muudavad palgi küttepuuks.",
    canonical: "https://metsamaakler.ee/palgi-hinnad/",
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
          title="Palgi hinnad"
          subtitle="Palk on metsa kõige väärtuslikum sortiment. Teeme selgeks, mis vahe on saepalgil, peenpalgil ja vineeripakul ning millised on hetke hinnatrendid."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Palgi hinnad", href: "/palgi-hinnad/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10 not-prose flex items-start gap-4">
              <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-2">Hinnad on muutuvad</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  Palgi hind sõltub otseselt saeveskite tellimustest ja maailmaturu olukorrast. Allpool toodud numbrid on hinnangulised keskmised ega kujuta endast siduvat pakkumist. 
                  Täpse hinna saamiseks on vajalik metsa ülevaatus.
                </p>
              </div>
            </div>

            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Mis teeb palgist palgi?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Metsaomaniku jaoks on kõige suurem majanduslik võit see, kui võimalikult suur osa langetatud puudest kvalifitseerub palgiks. 
              Palk ei ole lihtsalt jäme puutükk – see on toormaterjal, mis peab vastama kindlatele kvaliteedinõuetele (sirgus, oksalisus, mädaniku puudumine), et sellest saaks toota ehitusmaterjali, mööblit või vineeri.
            </p>

            <p className="mb-8 leading-relaxed">
              Palgi ja paberipuu hinnavahe võib olla kahe- kuni kolmekordne. Seega on metsa majandamisel ja raietööde planeerimisel kriitiline oskus maksimeerida palgi väljatulekut.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Umbkaudsed palgi hinnad (2024/2025)
            </h2>
            <p className="mb-6">
              Hinnad on toodud tihumeetri (tm) kohta lõpplaos (saeveskis). Kännuraha (omanikule kätte jääv summa) saamiseks tuleb sellest lahutada raie- ja transpordikulud.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors border-l-4 border-l-[#347D4E]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Männipalk</h3>
                  <div className="text-[#347D4E] font-bold text-lg">~75 - 95 €/tm</div>
                </div>
                <div className="h-px bg-gray-100 my-3"></div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Kõige nõutum okaspuumaterjal. Hind sõltub diameetrist – jämedam palk (üle 18cm) on kallim kui peenpalk. Eriti hinnatud on männi I sort.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors border-l-4 border-l-[#347D4E]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Kuusepalk</h3>
                  <div className="text-[#347D4E] font-bold text-lg">~70 - 90 €/tm</div>
                </div>
                <div className="h-px bg-gray-100 my-3"></div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Veidi odavam kui mänd, kuna on oksalisem ja kuivab teistmoodi. Kasutatakse peamiselt ehituskonstruktsioonides (prussid, talad).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors border-l-4 border-l-amber-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Kasepakk (Vineer)</h3>
                  <div className="text-amber-600 font-bold text-lg">~100 - 130+ €/tm</div>
                </div>
                <div className="h-px bg-gray-100 my-3"></div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Kõrgeim hinnaklass. Nõuab väga head kvaliteeti. Kui kask on kõver või südamemädanikuga, langeb see kohe küttepuu või paberipuu klassi (~40-50 €/tm).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#347D4E]/30 transition-colors border-l-4 border-l-gray-400">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#163823] text-xl m-0">Haavapalk</h3>
                  <div className="text-gray-600 font-bold text-lg">~45 - 60 €/tm</div>
                </div>
                <div className="h-px bg-gray-100 my-3"></div>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                  Nišitoode, mida kasutatakse näiteks saunalavade ja sisevoodrilaudade tootmiseks. Peab olema oksavaba ja terve.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Mis alandab palgi hinda?
            </h2>
            <p className="mb-6">
              Miks saab naaber oma metsa eest rohkem raha? Tihti on asi palgi kvaliteedis. Saeveskid on kehtestanud ranged nõuded ja iga viga viib palgi madalamasse hinnaklassi või praaki.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
              <div className="bg-[#F8FAF9] p-6 rounded-xl">
                <h4 className="font-bold text-[#163823] mb-4 flex items-center gap-2">
                   <XCircle className="text-red-500" size={20} />
                   Levinumad vead (Praak)
                </h4>
                <ul className="space-y-3 list-none pl-0">
                  <li className="text-sm text-gray-700 flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span><strong>Südamemädanik:</strong> Eriti levinud vanal kuusel ja haaval. Muudab puidu kasutuskõlbmatuks kandvates konstruktsioonides.</span>
                  </li>
                  <li className="text-sm text-gray-700 flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span><strong>Kõverus:</strong> Palk peab olema sirge. "Vibu" või "konksuga" palgist ei saa saagida sirget lauda ilma suurte kadudeta.</span>
                  </li>
                  <li className="text-sm text-gray-700 flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span><strong>Sine ja putukakahjustused:</strong> Seismisest tingitud värvimuutus või üraski augud viivad palgi automaatselt küttepuu klassi.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#163823]/10">
                 <h4 className="font-bold text-[#163823] mb-4 flex items-center gap-2">
                   <CheckCircle2 className="text-[#347D4E]" size={20} />
                   Kuidas tagada kvaliteet?
                </h4>
                <ul className="space-y-3 list-none pl-0">
                  <li className="text-sm text-gray-700 flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#347D4E] mt-2 shrink-0"></span>
                    <span><strong>Õigeaegne raie:</strong> Ära lase metsal üle valmida. Mädanik levib vanas metsas kiiresti.</span>
                  </li>
                  <li className="text-sm text-gray-700 flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#347D4E] mt-2 shrink-0"></span>
                    <span><strong>Professionaalne järkamine:</strong> Harvesterijuhi oskusest sõltub, kas palgist lõigatakse välja maksimaalne väärtus või läheb hea materjal praaki.</span>
                  </li>
                  <li className="text-sm text-gray-700 flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#347D4E] mt-2 shrink-0"></span>
                    <span><strong>Kiire väljavedu:</strong> Palk ei tohi jääda metsa seisma, eriti soojal ajal, et vältida sinetamist.</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Ametlik hinnastatistika
            </h2>
            <p className="mb-6">
              Et olla kursis kõige värskemate turuhindadega, soovitame vaadata Eesti Erametsakeskuse regulaarseid ülevaateid. Seal kajastuvad reaalsed tehinguhinnad ja turuülevaated.
            </p>

            <a 
              href="https://www.eramets.ee/puiduhinnad/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#163823] px-6 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm not-prose no-underline"
            >
              <ExternalLink size={20} className="text-[#347D4E]" />
              Vaata Erametsakeskuse palgihindade statistikat
            </a>

            <div className="mt-12 bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose text-center">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Kas Sinu mets peidab endas palki või kütet?</h3>
               <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
                 Tihti on metsast eemalt vaadates raske hinnata selle tegelikku sortimenti. Kutsu Metsamaakler hindama – teeme kindlaks Sinu metsa tegeliku väärtuse.
               </p>
               <button 
                 onClick={handleCtaClick}
                 className="inline-flex items-center gap-2 bg-[#347D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c6b41] transition-all duration-300 shadow-lg shadow-green-900/20"
               >
                 Telli tasuta metsa hindamine
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

            <RelatedContent currentPath="/palgi-hinnad/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
