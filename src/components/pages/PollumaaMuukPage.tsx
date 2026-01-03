import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Sprout, Wallet, BadgeCheck, Tractor, ArrowRightCircle, HelpCircle, Info, LineChart } from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PollumaaMuukPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kuidas toimub põllumaa müük Metsamaakleri abil?",
      answer: "Protsess on lihtne: võtke meiega ühendust ja edastage kinnistu andmed. Teostame tasuta hinnaanalüüsi. Seejärel otsustame koos, kas teeme teile kohese ostupakkumise või paneme maa oksjonile/müüki, et leida kõrgeim pakkuja turult."
    },
    {
      question: "Kas ma pean maksma tulumaksu põllumaa müügilt?",
      answer: "Jah, kinnisasja müügist saadud kasu on reeglina maksustatav (20%). Erandiks on omandireformi käigus tagastatud maa esmavõõrandamine, mis on tulumaksuvaba. Samuti on maksuvabad teatud vahetustehingud."
    },
    {
      question: "Mis vahe on põllumaa rendil ja müügil?",
      answer: "Rendi korral jääte maa omanikuks ja saate iga-aastast renditasu, kuid peate tegelema maa haldamisega. Müügi korral saate koheselt suurema summa raha kätte, mida saate investeerida mujale, kuid loobute omandiõigusest."
    },
    {
      question: "Kuidas ma tean, et saan õiglase hinna?",
      answer: "Metsamaakler kasutab hindamisel reaalseid turuandmeid ja võrdlustehinguid teie piirkonnas. Kui kahtlete hinnas, on alati võimalus korraldada enampakkumine, kus turuhind selgub konkurentsis."
    },
    {
      question: "Kas võsastunud põllumaad saab ka müüa?",
      answer: "Jah, ostame ja vahendame ka võsastunud või söötis põllumaad. Sellisel juhul arvestatakse hinnast maha hinnanguline võsaraiumise ja kändude juurimise kulu."
    }
  ];

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Põllumaa müük',
        'description': 'Põllumaa müük parimatel tingimustel. Ostame teie põllumaa või aitame leida parima ostja läbi enampakkumise.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Metsamaakler'
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
            'name': 'Põllumaa müük',
            'item': 'https://metsamaakler.ee/pollumaa-muuk/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Põllumaa müük – Parim hind Sinu maa eest | Metsamaakler",
    description: "Soovid müüa põllumaad? Metsamaakler pakub parimat hinda ja kiiret tehingut. Küsi pakkumist juba täna ja hinda oma maa väärtust.",
    canonical: "https://metsamaakler.ee/pollumaa-muuk/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  const benefits = [
    {
      icon: Wallet,
      title: "Kohene ettemaks",
      description: "Vajadusel teeme teile kohese ostupakkumise ja tasume raha kiirelt. See on kiireim viis vara realiseerimiseks."
    },
    {
      icon: LineChart,
      title: "Maksimaalne tulu",
      description: "Kui aega on rohkem, korraldame enampakkumise, et leida ostja, kes väärtustab teie maad kõige kõrgemalt."
    },
    {
      icon: BadgeCheck,
      title: "Kogu asjaajamine",
      description: "Te ei pea muretsema lepingute, notariaegade ega suhtluse pärast. Korraldame kogu protsessi algusest lõpuni."
    }
  ];

  return (
    <div className="min-h-screen relative bg-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Põllumaa müük"
          subtitle="Teie usaldusväärne partner põllumaa müügil. Leiame teie maale parima hinna ja kindla ostja."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Põllumaa müük", href: "/pollumaa-muuk/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Soovite müüa põllumaad? Oleme teile abiks.
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              <strong>Põllumaa müük</strong> on suur otsus, mis vajab kaalumist ja usaldusväärset partnerit. Põllumaa on piiratud ressurss ja selle väärtus on ajas stabiilselt kasvanud. Siiski on olukordi, kus maa müük on omanikule parim lahendus – olgu see seotud elukorralduse muutuste, investeerimisvajaduse või sooviga vabaneda halduskohustusest.
            </p>

            <p className="mb-8 leading-relaxed">
              Metsamaakler on spetsialiseerunud maatulundusmaa tehingutele. Meie eesmärk on pakkuda maaomanikule selgust ja kindlustunnet. Erinevalt paljudest vahendajatest, kes vaid "proovivad müüa", on meil võimekus osta maad ka otse oma portfelli. See annab müüjale valikuvabaduse: kas eelistada kiiret ja kindlat tehingut meiega või proovida leida turult veelgi kõrgemat hinda läbi meie müügivõrgustiku.
            </p>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                    <benefit.icon className="text-[#347D4E]" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#163823] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Mis mõjutab põllumaa müügihinda?
            </h2>
            <p className="mb-6">
              Põllumaa hind ei ole fikseeritud number, vaid sõltub paljudest teguritest. Müüjana on kasulik teada, mida ostjad (põllumehed ja investorid) tegelikult hindavad.
            </p>

            <div className="space-y-6 not-prose mb-10">
              <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#163823]/10">
                <h3 className="text-xl font-bold text-[#163823] mb-2 flex items-center gap-2">
                  <Sprout className="text-[#347D4E]" size={20} />
                  Mulla viljakus ja omadused
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Kõige tähtsam näitaja on boniteet ehk mulla viljakus. Boniteet üle 50 punkti tähendab väga head ja kallist maad. Alla 30 punkti jäävad maad on vähemviljakad ja nende hind on madalam. Samuti on oluline kivisus – mida vähem kive, seda parem tehnikale.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2">
                  Massiivi suurus ja kompaktsus
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Suur ja ühes tükis põld on põllumehele "kuld". 20 hektarit ühes tükis maksab hektari kohta oluliselt rohkem kui neli 5-hektarist lappi eri külades. Väikeste lappide harimine on ebaefektiivne suure ajakulu ja kütusekulu tõttu.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2">
                  Asukoht ja logistika
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Põllumaa hind sõltub ka piirkonna konkurentsist. Kui läheduses on mitu aktiivset suurtootjat, on nõudlus (ja hind) kõrgem. Oluline on ka ligipääs teedele – kui põllule ei pääse suurte masinatega, on selle väärtus väiksem.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2">
                  Maaparandussüsteemid
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Eesti kliimas on toimiv drenaaž hädavajalik. Korras maaparandussüsteemid (kraavid, torud) tõstavad maa väärtust märgatavalt, kuna tagavad saagikindluse ka vihmastel aastatel.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kuidas müügiprotsess välja näeb?
            </h2>
            <p className="mb-6">
              Oleme teinud põllumaa müügi maaomaniku jaoks võimalikult mugavaks ja läbipaistvaks. Teie ülesanne on vaid soovist teada anda, ülejäänu teeme meie.
            </p>

            <ul className="space-y-6 mb-10 list-none pl-0">
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">1</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Päring ja eeltöö</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Saatke meile kinnistu katastritunnus. Kontrollime registritest andmeid (pindala, boniteet, piirangud) ja teeme esialgse turu-uuringu.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">2</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Hinnapakkumine</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Esitame teile konkreetse pakkumise. Kui pakutav hind sobib, saame liikuda edasi tehingusse. Kui soovite proovida enampakkumist, lepime kokku alghinna ja tingimused.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">3</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Tehingu ettevalmistus</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Metsamaakler suhtleb notariga, broneerib aja ja valmistab ette müügilepingu mustandi. Teie saate sellega eelnevalt tutvuda ja vajadusel muudatusi teha.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">4</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Notar ja raha ülekanne</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Tehing toimub notaris (võimalik ka kaugtõestamine videosilla teel). Raha laekub teie kontole koheselt pärast lepingu allkirjastamist notari deposiitkontolt.
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-green-50/50 p-6 rounded-xl border border-green-100 my-8 not-prose">
              <h3 className="text-xl font-bold text-[#163823] mb-3 flex items-center gap-2">
                <Info size={20} className="text-[#347D4E]" />
                Miks mitte müüa ise kuulutades?
              </h3>
              <p className="text-gray-700 mb-0 text-sm leading-relaxed">
                Ise kinnisvaraportaalis müües võite kaotada aega ja raha. Teil puudub ligipääs professionaalsetele põllumeeste andmebaasidele ja tehingustatistikale. Lisaks on oht langeda spekulantide ohvriks, kes pakuvad turuhinnast oluliselt vähem. Metsamaakler garanteerib, et teie maa jõuab tõsiste huvilisteni.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Sagedased küsimused põllumaa müügi kohta
            </h2>
            <p className="mb-6">
              Maa müük on juriidiline tehing, millega kaasneb mitmeid nüansse. Siin on vastused levinumatele küsimustele, mida maaomanikud meilt küsivad.
            </p>

            {/* FAQ Section */}
            <div className="mt-8 bg-[#F8FAF9] rounded-2xl p-8 md:p-12 border border-gray-100 not-prose">
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

            <div className="mt-12">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Küsi tasuta konsultatsiooni</h3>
               <p className="text-lg mb-6">
                 Ei ole kindel, kas müüa või rentida? Või soovid teada oma maa hetkeväärtust? Võta meiega ühendust ja arutame võimalusi. Konsultatsioon on alati tasuta ja ei kohusta teid tehinguks.
               </p>
               <button 
                 onClick={handleCtaClick}
                 className="inline-flex items-center gap-2 bg-[#347D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c6b41] transition-all duration-300 shadow-lg shadow-green-900/20"
               >
                 Küsi pakkumist
                 <ArrowRightCircle size={20} />
               </button>
            </div>

            <RelatedContent currentPath="/pollumaa-muuk/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
