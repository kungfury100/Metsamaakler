import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Calculator, 
  TrendingUp, 
  Trees, 
  Map as MapIcon, 
  BadgeEuro, 
  Scale, 
  AlertCircle, 
  CheckCircle2, 
  BarChart3, 
  FileSearch,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Info,
  FileText,
  FileSignature,
  Landmark,
  Gavel,
  Truck,
  Leaf
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaHindPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui palju maksab keskmine metsahektar 2024. aastal?",
      answer: "Keskmine metsa hektari hind Eestis kõigub vahemikus 2000 € kuni 30 000 €. See on nii suur vahemik, et 'keskmine' number on sageli eksitav. Hinda mõjutab eelkõige raieküpse puidu tagavara – lagedaks raiutud maa maksab vähe (ca 2000-3000 €/ha), samas kui tihe palkmets võib maksta üle 25 000 €/ha."
    },
    {
      question: "Kuidas ma saan teada oma metsa täpse hinna?",
      answer: "Täpse hinna saamiseks on vaja kehtivat metsamajandamiskava või värskeid inventeerimisandmeid. Metsamaakler pakub tasuta hinnaarvutust, kus meie eksperdid analüüsivad teie metsa koosseisu, sortimenti ja logistilist asukohta, et arvutada välja reaalne turuväärtus."
    },
    {
      question: "Mis on kõige kallim puuliik?",
      answer: "Eestis on stabiilselt kõige kallimad okaspuupalgid, eriti mänd ja kuusk, mis sobivad ehitusmaterjaliks. Lehtpuudest on kõrges hinnas kvaliteetne kask (vineeripakk). Küttepuiduks minev lepp või haab on madalama väärtusega, kuigi energiakriisi ajal tõusis ka nende hind."
    },
    {
      question: "Kas metsa hind on praegu tipus?",
      answer: "Puiduturg on tsükliline. Pärast 2022. aasta tipu on hinnad stabiliseerunud, kuid pikaajaline trend on tõusev. Metsamaa on inflatsioonikindel vara. Praegu on hind hea, kuid müügiotsus sõltub teie investeerimisalternatiividest ja metsa bioloogilisest seisundist."
    },
    {
      question: "Kuidas mõjutab Natura 2000 ala hinda?",
      answer: "Rangete piirangutega (sihtkaitsevöönd) Natura alal on majandustegevus keelatud, kuid riik maksab kompensatsiooni või ostab maa ära. Piiranguvööndis on majandamine lubatud teatud tingimustel. Mõnel juhul võib looduskaitseline väärtus olla rahaliselt samaväärne või kindlam sissetulek kui raie."
    },
    {
      question: "Kas müügihind sisaldab käibemaksu?",
      answer: "See sõltub müüjast. Eraisikust müüja tehing on reeglina käibemaksuvaba (rakendub tulumaks). Kui müüja on käibemaksukohustuslane ettevõte, lisandub hinnale käibemaks. Hinnapakkumistes ja lepingutes tuleb see alati selgelt fikseerida."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsa hindamine ja ost',
        'description': 'Põhjalik ja professionaalne metsa hindamine. Uuri, millest sõltub metsa hind ja küsi tasuta hinnapakkumist oma kinnistule.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Metsamaakler',
          'image': 'https://metsamaakler.ee/logo.png',
          'telephone': '+37255555555',
          'email': 'info@eestimetsamaakler.ee',
          'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'EE'
          }
        }
      },
      {
        '@type': 'Article',
        'headline': 'Metsa hind ja väärtuse kujunemine – Täielik teejuht',
        'description': 'Põhjalik ülevaade metsa hinna kujunemisest Eestis. Loe, kuidas arvutatakse metsamaa ja raieõiguse väärtust, millised on turu trendid ja kuidas vältida pettusi.',
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
            'name': 'Metsaomanikule',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Metsa hind',
            'item': 'https://metsamaakler.ee/metsa-hind/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Metsa hind 2024 – Põhjalik teejuht ja kalkulaator | Metsamaakler",
    description: "Kui palju maksab sinu mets? Loe detailset analüüsi hinna kujunemisest, maksudest ja turuolukorrast. Tasuta eksperthinnang 24h jooksul.",
    canonical: "https://metsamaakler.ee/metsa-hind/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  return (
    <div className="min-h-screen relative bg-white font-inter selection:bg-[#347D4E] selection:text-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Metsa hind ja väärtus"
          subtitle="Täielik ülevaade metsa hinna kujunemisest. Lugege, millised tegurid määravad teie metsa tegeliku turuväärtuse ja kuidas saada parim pakkumine."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsaomanikule", href: "/" },
            { label: "Metsa hind", href: "/metsa-hind/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Metsa hind – rohkem kui vaid puud ja maa
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  "Kui palju minu mets maksab?" on kahtlemata kõige levinum küsimus, mida metsaomanikud küsivad. Ja see on õigustatud küsimus, sest metsamaa on sageli pere kõige väärtuslikum vara. Paraku on sellele küsimusele võimatu vastata ühe lihtsa numbriga, vaatamata kinnistule otsa.
                </p>

                <p className="mb-6 leading-[1.5]">
                  Erinevalt korteriturust, kus ruutmeetri hind on piirkonniti üsna standardne ja võrreldav, on mets elav ja äärmiselt mitmekesine ökosüsteem. Kaks kõrvuti asuvat metsatükki võivad hinna poolest erineda kümneid kordi. Üks võib olla väärtuslik küps männik kuival pinnasel, teine aga ligipääsmatu soine lepik.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Selles põhjalikus juhendis lahkame detailselt lahti kõik komponendid, mis moodustavad metsa hinna. Me ei räägi vaid palkidest ja hektaritest, vaid ka logistikast, maksundusest, globaalsest majandusest ja juriidilistest nüanssidest. Meie eesmärk on anda teile teadmised, et saaksite teha kaalutletud ja kasulikke otsuseid oma vara haldamisel või müügil.
                </p>

                {/* Expert Advice / Key Benefit */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Calculator size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Eksperthinnang on võti</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Soovitus
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Interneti kalkulaatorid annavad vaid indikatiivse vahemiku. Tegelik turuhind selgub detailse analüüsi käigus, kus arvestatakse sortimenti, väljatulekut ja logistikat. Metsamaakler pakub teile tasuta professionaalset hinnastamist – see on kindlaim viis teada saada oma vara tegelik väärtus.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  1. Puit – Hinna vundament
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Ilmselgelt on metsa kõige väärtuslikum osa seal kasvav puit. Kuid "puit" on liiga üldine mõiste. Metsanduslikus mõttes jaguneb puit sortimentideks, mille hinnad erinevad üksteisest drastiliselt.
                </p>

                <h3 className="text-xl font-bold text-[#1a0f00] mt-8 mb-6">Palk vs muu puit</h3>
                
                {/* List Item Cards - Clean Grid - Replacing UL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 not-prose">
                  {[
                    { title: "Okaspuupalk", desc: "Mänd ja kuusk. Eesti metsade kõige väärtuslikum vara. Sirge ja oksavaba palk on maailmaturul väga nõutud.", icon: Trees },
                    { title: "Lehtpuupalk", desc: "Kask ja haab. Eriti väärtuslik on kasepakk vineeri tootmiseks. Haaba kasutatakse siseviimistluses.", icon: Leaf },
                    { title: "Paberipuit", desc: "Tselluloosi tooraine. Hind on keskmine ja sõltub tugevalt Skandinaavia tehaste nõudlusest.", icon: FileText },
                    { title: "Küttepuit", desc: "Madalaima kvaliteediga puit. Hind sõltub energia hinnast ja ilmastikust.", icon: TrendingUp }
                  ].map((item, idx) => (
                    <div key={idx} className="group relative bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/40 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 ease-out">
                      <div className="relative z-10">
                        <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                          <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-bold text-[#1a0f00] text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-[#1a0f00]/60 leading-normal m-0 group-hover:text-[#1a0f00]/80 transition-colors duration-200">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  2. Asukoht ja logistika – Peidetud kulud
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Võite omada maailma ilusaimat männikut, aga kui see asub soosare peal, kuhu ligipääs puudub, võib selle reaalne turuväärtus olla ootamatult madal. Logistika on metsa hinna kujunemisel tihti alahinnatud faktor.
                </p>

                {/* Feature blocks for Logistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#347D4E]/30 transition-all duration-200">
                      <div className="flex items-center gap-3 mb-3">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Truck size={20} /></div>
                         <h4 className="font-bold text-[#1a0f00] text-lg">Kaugus teedest</h4>
                      </div>
                      <p className="text-sm text-[#1a0f00]/70 leading-normal m-0">
                         Puidu väljavedu metsast vahelattu (kokkuveo tee äärde) on kallis teenus. Mida pikem on see distants, seda kallim on teenus ja seda väiksem on metsaomaniku lõpptulu.
                      </p>
                   </div>
                   
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#347D4E]/30 transition-all duration-200">
                      <div className="flex items-center gap-3 mb-3">
                         <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><MapIcon size={20} /></div>
                         <h4 className="font-bold text-[#1a0f00] text-lg">Pinnas ja aastaajad</h4>
                      </div>
                      <p className="text-sm text-[#1a0f00]/70 leading-normal m-0">
                         Kõva pinnas (nõmm) võimaldab raiuda aastaringselt. Pehme pinnas (soo) nõuab külma talve, mis piirab müügiakent ja võib nõuda kallimat eritehnikat.
                      </p>
                   </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  3. Raieõigus vs Metsakinnistu
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Müügiotsust tehes on oluline mõista kahe peamise tehinguliigi fundamentaalset erinevust.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#347D4E]/30 transition-all duration-200 ease-out flex flex-col h-full">
                    <div className="mb-6 text-[#347D4E]">
                      <FileSignature size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-[#1a0f00] text-xl mb-3">Raieõiguse müük</h3>
                    <p className="text-[#1a0f00]/60 text-sm leading-normal mb-6">
                      Müüakse ainult "puud jalalt". Maa jääb omanikule alles. See on hea valik, kui soovite säilitada sidet oma maaga, kasutada seda jahipidamiseks või jätta päranduseks, kuid vajate hetkel rahalist tulu.
                    </p>
                    <div className="mt-auto">
                       <strong className="block text-sm text-[#1a0f00] mb-1">Hind koosneb:</strong>
                       <p className="text-xs text-gray-500">Puidu müügitulu miinus ülestöötamise kulud.</p>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#347D4E]/30 transition-all duration-200 ease-out flex flex-col h-full">
                    <div className="mb-6 text-[#347D4E]">
                      <BadgeEuro size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-[#1a0f00] text-xl mb-3">Metsakinnistu müük</h3>
                    <p className="text-[#1a0f00]/60 text-sm leading-normal mb-6">
                      Müüakse nii puud kui ka maa. Omanik loobub kogu varast. See on levinud valik, kui omanikul puudub aeg, oskused või tahe tegeleda metsa uuendamise ja hooldamisega pärast raiet.
                    </p>
                    <div className="mt-auto">
                       <strong className="block text-sm text-[#1a0f00] mb-1">Hind koosneb:</strong>
                       <p className="text-xs text-gray-500">Raieõiguse väärtus + Maa hind + Noorendike tulevikuväärtus.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  4. Maksud ja juriidika
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Metsa müügist saadud tulu on maksustatav, kuid siin on olulisi erisusi, mida iga omanik peab teadma.
                </p>

                {/* Info Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Metsanduse erikord</strong>
                    Füüsiline isik saab metsamaterjali ja raieõiguse müügist saadud tulust maha arvata metsa majandamisega seotud dokumentaalselt tõendatud kulud. Samuti on võimalik tulumaksukohustust edasi lükata kuni 3 aastat, kui raha kantakse spetsiaalsele kontole, eesmärgiga see uuesti metsa investeerida.
                  </div>
                </div>

                <p className="mb-6 leading-[1.5]">
                  Kui müüja on käibemaksukohustuslane (näiteks ettevõte või FIE), lisandub tehinguhinnale käibemaks. Eraisikust müüja puhul käibemaksu ei lisandu. Hinnapakkumisi võrreldes jälgige alati, kas hind on esitatud koos või ilma käibemaksuta, et võrdlus oleks aus.
                </p>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  5. Turu hetkeseis ja tulevik
                </h2>
                <p className="mb-8 leading-[1.5]">
                  Puiduturg on globaalne ja tsükliline. Seda mõjutavad ehitusmahud Euroopas ja USAs, Hiina majandus, energiahinnad ja isegi kliimamuutused.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-12 not-prose">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E] bg-green-50 p-2 rounded-lg"><TrendingUp size={20} /></div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-base mb-1">Pikaajaline kasv</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0">Ajalooliselt on metsamaa hind Eestis olnud stabiilses tõusus (ca 5-10% aastas), ületades sageli inflatsiooni. See teeb metsast suurepärase vahendi kapitali säilitamiseks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E] bg-green-50 p-2 rounded-lg"><BarChart3 size={20} /></div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-base mb-1">Volatiilsus</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0">Lühiajaliselt võivad hinnad kõikuda. Näiteks 2021-2022 oli puiduhindade "buum", millele järgnes korektsioon. Tark omanik ajastab müügi turu kõrghetkele.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E] bg-green-50 p-2 rounded-lg"><Landmark size={20} /></div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-base mb-1">Süsinikukaubandus</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0">Tulevikus võib metsa väärtust oluliselt tõsta süsinikukrediitide turg. Metsad, mis seovad süsinikku, võivad hakata omanikule tulu tooma ka ilma raieta.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kuidas vältida pettusi ja vigu?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Kahjuks liigub metsaäris ka ebaausaid tegijaid. Kuidas tunda ära ohtlik tehing?
                </p>
                
                {/* Warning List - Clean */}
                <div className="space-y-4 mb-12 not-prose">
                  {[
                    { title: '"Kiire raha sularahas"', text: "See on suurim ohumärk. Ausad tehingud käivad läbi panga ja on lepinguliselt fikseeritud. Sularahatehingud jätavad sageli omaniku ilma õiguskaitseta." },
                    { title: "Telefoni teel survestamine", text: "\"Müüge kohe, homme hind langeb!\" on klassikaline manipuleerimine. Ärge alluge survele. Võtke aega mõtlemiseks." },
                    { title: "Ebamäärane leping", text: "Lepingus peab olema täpselt kirjas, mis on hind, millal see makstakse, millal tööd tehakse ja kes vastutab metsateede korrastamise eest." },
                    { title: "Peidetud kulud", text: "Veenduge, et pakutud hind on \"lõplik\" või on kulud (transport, mõõtmine) selgelt välja toodud." }
                  ].map((warn, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="shrink-0 mt-1 text-red-500"><AlertCircle size={20} /></div>
                      <div>
                        <strong className="block text-[#1a0f00] text-sm">{warn.title}</strong>
                        <p className="text-[#1a0f00]/70 text-sm m-0 leading-normal">{warn.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kokkuvõte: Kuidas saada parim hind?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Metsa müük on enamiku inimeste jaoks elu suurim tehing. Selleks, et see õnnestuks, järgige neid lihtsaid samme:
                </p>

                {/* Steps Timeline - Clean */}
                <div className="space-y-6 not-prose mb-12">
                   {[
                    { icon: FileSearch, title: "1. Inventuur", desc: "Tehke oma metsale inventuur (tellige metsamajandamiskava)." },
                    { icon: Phone, title: "2. Küsige pakkumist", desc: "Küsige pakkumist usaldusväärsetelt partneritelt, nagu Metsamaakler." },
                    { icon: Scale, title: "3. Võrrelge", desc: "Võrrelge pakkumisi detailselt – vaadake sortimente ja tingimusi, mitte ainult lõppnumbrit." },
                    { icon: FileText, title: "4. Leping", desc: "Sõlmige korralik kirjalik leping." },
                    { icon: CheckCircle2, title: "5. Järelevalve", desc: "Jälgige tööde teostamist või usaldage see professionaalile." }
                   ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group cursor-default items-start">
                      <div className="mt-1 text-gray-400 group-hover:text-[#347D4E] group-hover:scale-110 transition-all duration-200 ease-out">
                         <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="pb-4 border-b border-gray-50 last:border-0 w-full">
                        <h4 className="font-bold text-[#1a0f00] text-xl mb-1 group-hover:text-[#347D4E] transition-colors duration-200">{step.title}</h4>
                        <p className="text-[#1a0f00]/60 leading-normal text-base">{step.desc}</p>
                      </div>
                    </div>
                   ))}
                </div>

                <p className="text-lg leading-normal font-normal text-[#1a0f00]/80">
                  Metsamaakler on teie partner selles protsessis. Meie eesmärk on läbipaistvus ja ausus. Me selgitame teile iga sammu, hindame teie metsa õiglaselt ja aitame teil vormistada kõik vajalikud dokumendid. Teie mets väärib parimat peremeest ja parimat hinda.
                </p>

                {/* FAQ Section - Snappy */}
                <div className="mt-20 not-prose">
                  <h2 className="text-[28px] font-bold text-[#1a0f00] mb-8">Korduma kippuvad küsimused</h2>
                  <div className="space-y-4">
                    {faqData.map((faq, i) => (
                      <div key={i} className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#347D4E]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer active:scale-[0.99]">
                        <h4 className="font-bold text-lg text-[#1a0f00] mb-3 flex items-start justify-between gap-4 group-hover:text-[#347D4E] transition-colors duration-200">
                          {faq.question}
                          <div className="mt-1 text-gray-300 group-hover:text-[#347D4E] transition-colors duration-200">
                             <ChevronRight size={18} className="group-hover:rotate-90 transition-transform duration-200" />
                          </div>
                        </h4>
                        <p className="text-[#1a0f00]/70 leading-relaxed mb-0 text-[15px] max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Related Content - Clean Icons */}
                <div className="mt-20 pt-12 border-t border-gray-100 not-prose">
                  <h3 className="text-[24px] font-bold text-[#1a0f00] mb-8">Vaadake ka:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <a href="/raieoiguse-muuk/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileSignature size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Raieõiguse müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Müüge oma raieõigus parima hinnaga. Kiire protsess.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsateatis/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileText size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsateatis
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas vormistada raieks vajalikke dokumente?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/kontakt/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Mail size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Võta ühendust
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Tasuta konsultatsioon meie ekspertidega.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>
                  </div>
                </div>

              </article>
            </div>

            {/* SIDEBAR COLUMN (Right 4/12) - STICKY */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Sticky Contact Card */}
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-[#F0F7F4] rounded-2xl p-8 border border-[#347D4E]/10 shadow-[0_20px_40px_-10px_rgba(52,125,78,0.15)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(52,125,78,0.2)] transition-shadow duration-300">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#347D4E]/5 rounded-full blur-3xl group-hover:bg-[#347D4E]/10 transition-colors duration-500" />
                  
                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Kui palju sinu mets maksab?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Ära müü oma metsa pimesi. Telli meilt tasuta eksperthinnang ja saa teada oma metsa tegelik turuväärtus.
                  </p>

                  <div className="space-y-4 relative z-10">
                    <a href="tel:+3725551234" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-[#347D4E] group-hover/item:scale-105 transition-transform duration-200">
                        <Phone size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-[#347D4E] transition-colors duration-200">Helista meile</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">+372 555 1234</span>
                      </div>
                    </a>

                    <a href="mailto:info@eestimetsamaakler.ee" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-blue-600 group-hover/item:scale-105 transition-transform duration-200">
                        <Mail size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-blue-600 transition-colors duration-200">Kirjuta meile</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">info@eestimetsamaakler.ee</span>
                      </div>
                    </a>
                  </div>

                  <button 
                    onClick={handleCtaClick}
                    className="w-full mt-8 bg-[#347D4E] hover:bg-[#2d6e43] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] transition-all duration-200 ease-out flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Küsi pakkumist
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
