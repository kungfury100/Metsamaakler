import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Calculator, TrendingUp, Wheat, Map, Coins, Scale, AlertCircle, CheckCircle2, HelpCircle, Sprout, Landmark } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PollumaaHindPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui palju maksab 1 hektar põllumaad?",
      answer: "Eesti keskmine põllumaa hind on 2024. aastal vahemikus 5000 – 8000 €/ha. Viljakamates piirkondades (Kesk- ja Lõuna-Eesti) ulatuvad hinnad üle 10 000 €/ha, samas kui madalama viljakusega äärealadel võib hind jääda 3000 €/ha juurde."
    },
    {
      question: "Millest sõltub põllumaa rendihind?",
      answer: "Rendihind sõltub eelkõige mulla viljakusest ja konkurentsist piirkonnas. Keskmine rent on 150-300 €/ha aastas. Piirkondades, kus tegutsevad suured agroettevõtted, on konkurents maadele tihe ja rendihinnad kõrgemad."
    },
    {
      question: "Kas PRIA toetused mõjutavad hinda?",
      answer: "Jah, otseselt. Kuna põllumaa omanikul või rentnikul on õigus saada pindalatoetusi, on see kindel iga-aastane tuluallikas, mis hoiab põllumaa hinda stabiilselt kõrgel ja kasvutrendis."
    },
    {
      question: "Mis on boniteet ja miks see oluline on?",
      answer: "Boniteet on mulla viljakuse hinne (skaalal 0-100). Mida kõrgem boniteet (nt üle 50 punkti), seda paremini vili kasvab ja seda vähem väetist on vaja. Kõrge boniteediga maa on põllumehele kõige väärtuslikum vara."
    },
    {
      question: "Kas põllumaa müük on tulumaksuvaba?",
      answer: "Üldjuhul tuleb eraisikul maa müügilt maksta 20% tulumaksu. Erandiks on omandireformi käigus tagastatud maa – selle esmamüük on maksuvaba. Ostetud maa müügil maksustatakse ostu- ja müügihinna vahe."
    },
    {
      question: "Kas ma peaksin maad rentima või müüma?",
      answer: "Müük annab koheselt suurema summa investeeringuteks. Rentimine tagab stabiilse passiivse sissetuleku, kuid nõuab tegelemist lepingutega. Kui te ise põlluharimisega ei tegele, on mõlemad variandid head – valik sõltub rahavajadusest."
    }
  ];

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Põllumaa hindamine ja ost',
        'description': 'Põllumaa hinna kujunemine Eestis. Uuri, palju maksab hektar põllumaad ja kuidas saada parim pakkumine.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Metsamaakler'
        }
      },
      {
        '@type': 'Article',
        'headline': 'Põllumaa hind ja turuülevaade',
        'description': 'Detailne ülevaade põllumaa hindadest maakondade lõikes. Loe boniteedi mõjust ja rendihindadest.',
        'author': {
          '@type': 'Organization',
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
            'name': 'Maaomanikule',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Põllumaa hind',
            'item': 'https://metsamaakler.ee/pollumaa-hind/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Põllumaa hind – Hektari hind ja turuülevaade",
    description: "Soovid teada põllumaa hinda? Loe põhjalikku analüüsi hindadest maakondade kaupa, mulla boniteedi mõjust ja renditurust.",
    canonical: "https://metsamaakler.ee/pollumaa-hind/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  const benefits = [
    {
      icon: Wheat,
      title: "Põllumehe perspektiiv",
      description: "Hindame maad läbi tootja silmade – arvestame logistikat, mulla omadusi ja põllumassiivi kuju."
    },
    {
      icon: Coins,
      title: "Renditootluse analüüs",
      description: "Arvutame hinna mitte ainult müügitehingute, vaid ka potentsiaalse renditulu (cash flow) baasil."
    },
    {
      icon: Landmark,
      title: "Otsepakkumised",
      description: "Vahendame maid otse Eesti suurimatele teraviljakasvatajatele, kes on valmis maksma turu parimat hinda."
    }
  ];

  return (
    <div className="min-h-screen relative bg-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Põllumaa hind"
          subtitle="Maa on ressurss, mida juurde ei teki. Aitame teil mõista oma põllumaa tegelikku väärtust ja potentsiaali."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Maaomanikule", href: "/" },
            { label: "Põllumaa hind", href: "/pollumaa-hind/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Põllumaa hind – investeeringukuld Eesti mullas
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Põllumaa on viimase kümnendi jooksul olnud Eestis üks stabiilsemaid ja kiiremini kasvavaid varaklasse. Kui veel 2010. aastal võis hektari põllumaad osta mõnesaja euro eest, siis tänaseks on hinnad kerkinud tuhandetesse. <strong>Põllumaa hind</strong> ei ole enam ammu pelgalt emotsionaalne number, vaid täpne majanduslik arvutus, mis baseerub maa tootlikkusel ja asukohal.
            </p>

            <p className="mb-8 leading-relaxed">
              Erinevalt metsast, kus tulu saadakse tsükliliselt raiete käigus, toodab põllumaa tulu igal aastal – kas saagina või rendituluna. See teeb põllumaast väga likviidse ja nõutud vara. Kuid nagu kinnisvaras ikka, kehtib ka siin reegel: "asukoht, asukoht, asukoht". Järgnevalt vaatame süvitsi, mis täpselt määrab ühe põllulapi hinnasildi.
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
              Millest sõltub põllumaa hektari hind?
            </h2>
            <p className="mb-6">
              Miks maksab üks põld Järvamaal 10 000 €/ha, samas kui sarnase suurusega põld Hiiumaal vaid 3000 €/ha? Hinnakujunemise taga on neli peamist faktorit.
            </p>

            <div className="space-y-8 not-prose mb-12">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#163823] mb-4 flex items-center gap-3">
                  <Sprout className="text-[#347D4E]" size={24} />
                  1. Mulla viljakus (Boniteet)
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Põllumehe jaoks on maa tootmisvahend. Mida viljakam muld, seda suurem saak ja tulu. Eestis hinnatakse mulla viljakust boniteedina (skaalal 0-100).
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-green-50 p-3 rounded-lg border border-green-100">
                    <strong className="text-[#163823] shrink-0 w-24">50+ punkti:</strong>
                    <span className="text-sm text-gray-600">Väga hea maa (nt Järvamaa, Lääne-Virumaa). Sobib nõudlikele kultuuridele nagu nisu ja raps. Kõrgeim hind.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                    <strong className="text-[#163823] shrink-0 w-24">35-50 punkti:</strong>
                    <span className="text-sm text-gray-600">Keskmine maa (nt Tartumaa, Viljandimaa). Hea saagikus, stabiilne hind.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <strong className="text-[#163823] shrink-0 w-24">Alla 35 p:</strong>
                    <span className="text-sm text-gray-600">Madal viljakus (nt saared, rannikualad). Sobib pigem rohumaaks. Madalam hind.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#163823] mb-4 flex items-center gap-3">
                  <Map className="text-[#347D4E]" size={24} />
                  2. Põllumassiivi suurus ja kuju
                </h3>
                <p className="text-gray-700 mb-0 leading-relaxed">
                  Kaasaegne põllumajandustehnika on suur ja võimas. Traktorile meeldivad suured, kandilised ja sirgete servadega põllud, kus on vähe manööverdamist.
                  <br/><br/>
                  <strong>Suur massiiv (üle 10-20 ha):</strong> Väga hinnatud. Vähem tühisõite, efektiivsem töö. Hind kõrgem.
                  <br/>
                  <strong>Väike lapp (alla 2 ha) või sopiline kuju:</strong> Ebamugav harida. Sageli jäävad nurgad harimata. Hind madalam.
                  <br/>
                  <strong>Kivised põllud:</strong> Kivid lõhuvad tehnikat. Kivikoristus on kallis töö, mis alandab maa väärtust.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#163823] mb-4 flex items-center gap-3">
                  <TrendingUp className="text-[#347D4E]" size={24} />
                  3. Konkurents piirkonnas
                </h3>
                <p className="text-gray-700 mb-0 leading-relaxed">
                  Põllumaa hind on lokaalne. Kui piirkonnas tegutseb mitu tugevat ja laienevat põllumajandusettevõtet, tekib maa pärast oksjoniolukord. Naabrid on sageli nõus maksma "emotsionaalset lisatasu", et saada maa endale ja laiendada oma valduseid. Piirkondades, kus aktiivne tootmine puudub, on hinnad oluliselt madalamad.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Põllumaa rendihind – stabiilne rahavoog
            </h2>
            <p className="mb-6">
              Paljud maaomanikud eelistavad müügile rentimist. Renditurg on Eestis väga aktiivne. Rendihinnad on korrelatsioonis maa müügihinnaga – tavaliselt jääb aastane renditootlus 3-5% vahele maa turuväärtusest.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
              <div className="bg-[#F0F7F4] p-8 rounded-2xl border border-[#163823]/10">
                <h3 className="text-xl font-bold text-[#163823] mb-4">Lühiajaline rent (1-3 a)</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Sobib, kui plaanite maad lähiajal müüa või ise kasutama hakata.
                </p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>Hinnad on paindlikumad ja reageerivad turule kiiremini.</li>
                  <li>Rentnik ei pruugi julgeda teha suuri investeeringuid (väetamine, maaparandus).</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-4">Pikaajaline rent (5+ a)</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Põllumeeste eelistus. Annab kindlustunde investeerimiseks.
                </p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>Tagab stabiilse tulu aastateks.</li>
                  <li>Rentnik hoolitseb maa eest paremini (lubjamine, kraavide hooldus), sest ta teab, et harib seda kaua.</li>
                  <li>Sageli makstakse veidi kõrgemat hinda stabiilsuse eest.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Põllumaa hinnad maakondade lõikes (2024/2025)
            </h2>
            <p className="mb-6">
              Alljärgnev tabel annab indikatiivse ülevaate keskmistest tehinguhindadest. Tuleb meeles pidada, et konkreetse tehingu hind võib erineda sõltuvalt maa spetsiifikast.
            </p>

            <div className="overflow-x-auto mb-10 not-prose rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-[#163823] font-bold uppercase text-xs">
                  <tr>
                    <th className="px-6 py-4">Piirkond</th>
                    <th className="px-6 py-4">Keskmine hind (€/ha)</th>
                    <th className="px-6 py-4">Iseloomustus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#163823]">Kesk-Eesti (Järva, Lääne-Viru)</td>
                    <td className="px-6 py-4 font-bold text-[#347D4E]">6 000 – 10 000+ €</td>
                    <td className="px-6 py-4 text-gray-600">Eesti viljakaimad mullad. Suured massiivid. Väga kõrge nõudlus.</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#163823]">Lõuna-Eesti (Tartu, Viljandi, Põlva)</td>
                    <td className="px-6 py-4">5 000 – 9 000 €</td>
                    <td className="px-6 py-4 text-gray-600">Hea viljakus, kuid maastik võib olla kuppeljas, mis raskendab harimist.</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#163823]">Lääne-Eesti (Pärnu, Lääne)</td>
                    <td className="px-6 py-4">4 000 – 7 000 €</td>
                    <td className="px-6 py-4 text-gray-600">Keskmine viljakus. Palju rohumaad ja loomakasvatust.</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#163823]">Saared (Saaremaa, Hiiumaa)</td>
                    <td className="px-6 py-4">2 500 – 5 000 €</td>
                    <td className="px-6 py-4 text-gray-600">Madalam boniteet, õhem mullakiht. Logistiline eraldatus.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              PRIA toetuste mõju hinnale
            </h2>
            <p className="mb-6">
              Põllumaa hinnast rääkides ei saa mööda vaadata Euroopa Liidu ja Eesti riigi toetustest (PRIA). Ühtne pindalatoetus ja erinevad lisatoetused (nt mahetoetus, keskkonnasõbralik majandamine) moodustavad olulise osa põllumehe sissetulekust.
            </p>
            <p className="mb-6">
              Toetused on loonud olukorra, kus maal on "baasväärtus" – isegi kui seal midagi ei kasvatata (vaid niidetakse), toodab see omanikule või rentnikule kindlat rahavoogu. See on hoidnud maahinnad langemast ja on garantiiks investoritele. Ostja jaoks tähendab see kindlustunnet – maa ost ei ole kunagi "maha visatud raha".
            </p>

            <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 my-8 not-prose">
              <h3 className="text-xl font-bold text-[#163823] mb-3 flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-600" />
                Tähelepanu müügil!
              </h3>
              <p className="text-gray-700 mb-0 text-sm leading-relaxed">
                Kui müüte maad, uurige alati, kas maal on kehtivaid PRIA kohustusi (nt 5-aastane mahekohustus). Kohustuste rikkumine (nt maa müük mitte-mahepõllumehele) võib kaasa tuua toetuste tagasinõude, mis on sageli tuhandetes eurodes. Metsamaakleri eksperdid kontrollivad alati tausta, et vältida ebameeldivaid üllatusi.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#163823] mt-10 mb-4 flex items-center gap-3">
              <Scale className="text-[#347D4E]" size={24} />
              Kokkuvõtteks: Millal on õige aeg müüa?
            </h3>
            <p className="mb-6">
              Põllumaa hind on ajaloolises tipus. Nõudlus toidu ja teravilja järele maailmas kasvab, mis hoiab huvi maa vastu kõrgel. Kui teil on maad, mida te ise ei kasuta, on praegu suurepärane aeg selle realiseerimiseks või pikaajalise ja tulusa rendilepingu sõlmimiseks. Metsamaakler aitab teil leida parima lahenduse – olgu selleks müük kõrgeima hinnaga või usaldusväärse rentniku leidmine.
            </p>

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

            <RelatedContent currentPath="/pollumaa-hind/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
