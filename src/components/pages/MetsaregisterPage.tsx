import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Database, 
  Search, 
  FileText, 
  Map as MapIcon, 
  ExternalLink, 
  Lock, 
  UserCheck, 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronRight, 
  LogIn, 
  MousePointerClick, 
  FileCheck, 
  TrendingUp, 
  ShieldCheck,
  Info
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaregisterPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kas metsaregistri andmed on avalikud?",
      answer: "Jah, suur osa andmetest on avalikud. Igaüks saab vaadata metsaeraldiste piire, takseerandmeid ja kehtivaid metsateatisi. Isikuandmed on kaitstud ja nähtavad vaid omanikule."
    },
    {
      question: "Kuidas ma näen oma kinnistu metsateatisi?",
      answer: "Logides sisse ID-kaardi, Mobiil-ID või Smart-ID-ga, näete töölaual kõiki oma kinnistutega seotud dokumente, sealhulgas menetluses olevaid ja registreeritud metsateatisi."
    },
    {
      question: "Miks ma ei leia oma metsa andmeid registrist?",
      answer: "Kui metsa ei ole inveneeritud (puuduvad kehtivad takseerandmed), ei pruugi registris detailset infot olla. Sellisel juhul tuleb tellida metsamajandamiskava."
    },
    {
      question: "Kui tihti andmed uuenevad?",
      answer: "Andmed uuenevad reaalajas, kui Keskkonnaamet kinnitab uue metsateatise või registreerib uue metsamajandamiskava. Ortofotod (kaardipilt) uuenevad tavaliselt kord aastas."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Metsaregister – Täielik juhend metsaomanikule',
        'description': 'Põhjalik ülevaade metsaregistri võimalustest. Kuidas kontrollida andmeid, esitada teatisi ja volitada esindajat?',
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
            'name': 'Metsaregister',
            'item': 'https://metsamaakler.ee/metsaregister/'
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
    title: "Metsaregister Register.metsad.ee – Kasutusjuhend ja info",
    description: "Sinu teejuht metsaregistrisse. Õpi kasutama riiklikku andmekogu, esitama metsateatisi ja kontrollima piiranguid. Loe lähemalt.",
    canonical: "https://metsamaakler.ee/metsaregister/",
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
          title="Metsaregister"
          subtitle="Riiklik andmekogu, mis koondab infot Eesti metsade kohta. See on peamine tööriist nii metsaomanikele, ametnikele kui ka ettevõtjatele."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsaregister", href: "/metsaregister/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Eesti metsanduse digitaalne selgroog
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Metsaregister</strong> (aadressil register.metsad.ee) on keskkond, mis muudab Eesti metsanduse üheks läbipaistvamaks ja efektiivsemaks maailmas. See ei ole pelgalt staatiline andmebaas, vaid dünaamiline tööriist, kus toimub reaalne metsamajanduse planeerimine ja lubade taotlemine.
                </p>

                <p className="mb-6 leading-[1.5]">
                  Iga metsaomanik peaks olema metsaregistriga sina-peal. Sealne info on aluseks riiklikele otsustele, toetuste maksmisele ja ka maksuarvestusele. Kui andmed registris on vananenud või ebatäpsed, võib see omanikule tähendada saamata jäänud tulu või juriidilisi sekeldusi.
                </p>

                {/* External Link Block */}
                <div className="flex justify-start mb-12 not-prose">
                  <a 
                    href="https://register.metsad.ee/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-[#347D4E] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2d6e43] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] duration-200"
                  >
                    <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                    Sisene Metsaregistrisse
                  </a>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mida metsaregister täpselt sisaldab?
                </h2>
                <p className="mb-8 leading-[1.5]">
                   Registri avalik vaade pakub üllatavalt palju infot. Sisse logides avaneb aga veelgi detailsem pilt. Siin on peamised andmekihid, mida sealt leida võib:
                </p>
                
                {/* Features Grid - Expanded */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Metsakaart ja eraldised", 
                      desc: "Kõige visuaalsem osa. Metsad on jagatud eraldisteks – need on ühesuguse vanuse ja liigilise koosseisuga metsaosad. Iga eraldise kohta on näha puistu vanus, kõrgus, diameeter, tagavara ja boniteet.", 
                      icon: MapIcon 
                    },
                    { 
                      title: "Metsateatised", 
                      desc: "Siin näeb menetluses olevaid ja juba registreeritud teatisi. Teatis on sisuliselt luba raieks või muudeks metsatöödeks. Registreeritud teatis annab kindluse, et planeeritud tegevus on seaduslik.", 
                      icon: FileText 
                    },
                    { 
                      title: "Inventuuri andmed", 
                      desc: "Alusandmed, mis pärinevad metsamajandamiskavast. Need andmed kehtivad 10 aastat. Kui andmed on vanemad, kuvatakse neid arhiivsetena ja need ei anna enam õigust raieid teostada.", 
                      icon: Database 
                    },
                    { 
                      title: "Looduskaitselised piirangud", 
                      desc: "Kriitilise tähtsusega info. Register kuvab kaitsealad, hoiualad, püsielupaigad ja vääriselupaigad. Need kihid määravad otseselt, mida metsas teha tohib ja mida mitte.", 
                      icon: Lock 
                    }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group h-full flex flex-col">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-3">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed flex-grow">{item.desc}</p>
                    </div>
                   ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Miks on andmete korrektsus ülioluline?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Paljud metsaomanikud alahindavad registriandmete tähtsust. Arvatakse, et "minu mets on minu oma, paber ei loe". Tänapäeva digiriigis on aga paber (või antud juhul digikanne) sama oluline kui mets ise.
                </p>

                <div className="space-y-6 not-prose mb-12">
                   <div className="flex gap-5 items-start">
                      <div className="mt-1.5 p-2 bg-green-50 rounded-full text-[#347D4E] shrink-0">
                        <FileCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#1a0f00] mb-2">Raieõigus ja seaduslikkus</h4>
                        <p className="text-[#1a0f00]/70 m-0">
                          Ilma kehtivate inventuuriandmeteta registris ei saa te esitada metsateatist (v.a väikesemahulised raied). Seega, kui andmed on aegunud, on mets majanduslikus mõttes "lukus".
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-5 items-start">
                      <div className="mt-1.5 p-2 bg-green-50 rounded-full text-[#347D4E] shrink-0">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#1a0f00] mb-2">Kinnisvara väärtus</h4>
                        <p className="text-[#1a0f00]/70 m-0">
                          Kui otsustate metsa müüa, vaatab ostja esimese asjana registrit. Kui seal on kirjas "noorendik", aga tegelikult on mets raieküps, pakutakse teile madalamat hinda. Korras paberid tõstavad kinnistu turuväärtust.
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-5 items-start">
                      <div className="mt-1.5 p-2 bg-green-50 rounded-full text-[#347D4E] shrink-0">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#1a0f00] mb-2">Toetused ja hüvitised</h4>
                        <p className="text-[#1a0f00]/70 m-0">
                          Erametsakeskuse toetused (nt metsa uuendamine, Natura hüvitis) on seotud registriandmetega. Kui eraldis ei ole registris, ei saa sinna ka toetust küsida.
                        </p>
                      </div>
                   </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kuidas registrit kasutada?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Registri kasutajaliides on aastatega paranenud, kuid võib esmakasutajale siiski keeruline tunduda. Siin on lühike spikker põhitoiminguteks.
                </p>

                {/* Timeline Visualization */}
                <div className="space-y-6 not-prose mb-12">
                  {[
                    { 
                      icon: Search,
                      title: "1. Kinnistu otsing", 
                      desc: "Kõige lihtsam viis infot leida on otsida katastritunnuse (nt 12345:001:0000) või kinnistu nime järgi. Avalikus vaates näete asukohta ja üldandmeid." 
                    },
                    { 
                      icon: LogIn,
                      title: "2. Autentimine", 
                      desc: "Täieliku funktsionaalsuse (sh teatiste esitamine) kasutamiseks tuleb sisse logida ID-kaardi, Mobiil-ID või Smart-ID-ga. Valige rolliks 'Erametsaomanik'." 
                    },
                    { 
                      icon: MousePointerClick,
                      title: "3. Töölaud ja toimingud", 
                      desc: "Töölaual näete 'Minu kinnistud'. Valides kinnistu, avaneb kaardivaade. Klikkides eraldisele (kaardil värvilised alad), avaneb paremal infoaken, kust saab algatada metsateatist." 
                    }
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

                {/* Authorization Info Box */}
                <div className="group mb-12 p-8 rounded-2xl bg-[#FFFBF0] border border-[#FDE68A] flex flex-col md:flex-row gap-6 not-prose relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/5 rounded-bl-full -mr-8 -mt-8"></div>
                  
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <UserCheck size={32} strokeWidth={2} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#92400E] mb-3">Volitamine teeb elu lihtsamaks</h3>
                    <p className="text-[#92400E]/80 text-sm leading-relaxed mb-4">
                      Kui te ei soovi ise bürokraatiaga tegeleda või puuduvad vajalikud teadmised, saate metsaregistris anda volituse teisele isikule või ettevõttele.
                    </p>
                    <p className="text-[#92400E]/80 text-sm leading-relaxed mb-0">
                      <strong>Metsamaakler</strong> on paljude omanike usaldusväärne partner. Kui müüte meile raieõigust, saame volituse alusel ise korda ajada kõik raieks vajalikud load (metsateatised, kooskõlastused). Teie rolliks jääb vaid protsessi jälgimine.
                    </p>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Korduma kippuvad küsimused
                </h2>
                <div className="space-y-4 not-prose">
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
                
                {/* Related Content - Clean Icons */}
                <div className="mt-20 pt-12 border-t border-gray-100 not-prose">
                  <h3 className="text-[24px] font-bold text-[#1a0f00] mb-8">Vaadake ka:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <a href="/metsateatis/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileText size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsateatis
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas taotleda raieluba läbi registri? Detailne juhend.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Database size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Ilma kavata on registris vähe infot. Telli kava siit.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsa-hindamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Search size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hindamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kasutame registri andmeid tasuta hindamise alusena.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Andmed segased?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Registri lugemine võib olla keeruline. Aitame Sul aru saada, mis seisukorras Sinu mets tegelikult on ja millised on võimalused.
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

                    <a href="mailto:info@metsamaakler.ee" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-blue-600 group-hover/item:scale-105 transition-transform duration-200">
                        <Mail size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-blue-600 transition-colors duration-200">Kirjuta meile</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">info@metsamaakler.ee</span>
                      </div>
                    </a>
                  </div>

                  <button 
                    onClick={handleCtaClick}
                    className="w-full mt-8 bg-[#347D4E] hover:bg-[#2d6e43] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] transition-all duration-200 ease-out flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Küsi abi
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
