import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Banknote, 
  Scale, 
  FileCheck, 
  TreeDeciduous, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  TrendingUp, 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronRight, 
  Info,
  Truck,
  FileSignature,
  Coins,
  ShieldCheck,
  BadgeEuro,
  Map as MapIcon,
  FileText
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RaieoiguseOstPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kuidas kujuneb raieõiguse hind?",
      answer: "Hind sõltub puidu turuhinnast, metsa koosseisust (palgi osakaal), raie ja väljaveo keerukusest ning asukohast. Mida rohkem on kvaliteetset palki ja mida lihtsam on ligipääs, seda kõrgem on hind."
    },
    {
      question: "Millal on õige aeg raieõigust müüa?",
      answer: "Õige aeg sõltub nii puiduturu seisust kui ka metsa bioloogilisest vanusest. Ülevalminud mets kaotab iga aastaga väärtust (mädanikud), seega tasub küpse metsa puhul tegutseda pigem kiiremini."
    },
    {
      question: "Kas raieõiguse müügilt tuleb maksta tulumaksu?",
      answer: "Jah, eraisikuna raieõigust müües tuleb tasuda tulumaksu. Samas on lubatud tulust maha arvata metsa majandamisega seotud kulud (nt maamaks, istutamine, hooldus) viimase 3 aasta jooksul."
    },
    {
      question: "Mis vahe on raieõiguse müügil ja kinnistu müügil?",
      answer: "Raieõiguse müügi korral jääb maa teile alles. Te müüte vaid õiguse raiuda kindlaksmääratud puud. Kinnistu müügi korral loobute ka maa omandiõigusest."
    },
    {
      question: "Kuidas ma tean, kui palju puitu tegelikult saadi?",
      answer: "Kogu materjal mõõdetakse sertifitseeritud mõõtjate poolt või harvesteris elektrooniliselt. Esitame teile detailsed raporteid iga koorma ja sortimendi kohta."
    },
    {
      question: "Kas teete ka metsa uuendustöid?",
      answer: "Jah, soovi korral pakume täisteenust: teostame raie ja hiljem istutame uue metsa asemele. See on omanikule mugavaim lahendus."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Raieõiguse ost',
        'description': 'Ostame kasvava metsa raieõigust üle Eesti. Parim hind, kiire asjaajamine ja ettemaksu võimalus.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Metsamaakler',
          'image': 'https://metsamaakler.ee/logo.png',
          'telephone': '+37255555555',
          'email': 'info@metsamaakler.ee',
          'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'EE'
          }
        },
        'serviceType': 'Forest Management'
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
            'name': 'Raieõiguse ost',
            'item': 'https://metsamaakler.ee/raieoiguse-ost/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Raieõiguse ost – Parim hind ja kindel tehing",
    description: "Metsamaakler ostab raieõigust parimatel tingimustel. Professionaalne hindamine, ettemaks ja kiire teostus. Loe lähemalt protsessist ja hindadest.",
    canonical: "https://metsamaakler.ee/raieoiguse-ost/",
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
          title="Raieõiguse ost"
          subtitle="Usaldusväärne partner teie metsa realiseerimisel. Pakume parimat hinda, professionaalset teostust ja kindlustunnet."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Raieõiguse ost", href: "/raieoiguse-ost/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Raieõiguse ost – miks ja kuidas see toimub?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsaomanikuna seisate varem või hiljem küsimuse ees: kuidas oma metsa tulu realiseerida? Üks levinumaid ja paindlikumaid viise selleks on <strong>raieõiguse müük</strong>.
                </p>

                <p className="mb-10 leading-[1.5]">
                  See tähendab, et te müüte ettevõttele õiguse raiuda kindlaksmääratud mahus ja viisil puitu, kuid maa jääb teile alles. See on ideaalne lahendus omanikule, kes soovib säilitada kinnistu tulevasteks põlvedeks või investeeringuks, kuid vajab praegu rahalisi vahendeid.
                </p>

                {/* Benefits Cards - Visual */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
                  {[
                    {
                      icon: Banknote,
                      title: "Konkurentsivõimeline hind",
                      description: "Maksame ausat hinda, mis põhineb reaalajas uuenevatel puiduturu andmetel ja täpsel sortimendi arvestusel."
                    },
                    {
                      icon: Scale,
                      title: "Läbipaistev mõõtmine",
                      description: "Kasutame vaid sertifitseeritud mõõtmismeetodeid. Iga tihumeeter on arvel ja omanikule kontrollitav."
                    },
                    {
                      icon: FileCheck,
                      title: "Juriidiline korrektsus",
                      description: "Vormistame kõik lepingud, aktid ja teatised korrektselt, et vältida hilisemaid vaidlusi või maksuprobleeme."
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group">
                      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                        <benefit.icon className="text-[#347D4E]" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-[#163823] mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed m-0">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Millest sõltub hind?
                </h2>
                
                {/* Price Factors - List Style */}
                <div className="space-y-4 not-prose mb-12">
                   {[
                    { 
                      title: "Sortiment ja kvaliteet", 
                      desc: "Jäme ja sirge okaspuupalk on kõige kallim. Kui mets on hooldatud ja puud kvaliteetsed, on ka raieõiguse hind oluliselt kõrgem.",
                      icon: TreeDeciduous
                    },
                    { 
                      title: "Asukoht ja logistika", 
                      desc: "Lõpphind on 'müügihind miinus kulud'. Hea ligipääs ja lühike vahemaa saeveskisse tähendab omanikule suuremat tulu.",
                      icon: Truck
                    },
                    { 
                      title: "Maht ja koosseis", 
                      desc: "Suurema mahuga lankide puhul on ühikukulu väiksem. Segametsad on sageli keerukamad sorteerida kui puhtpuistud.",
                      icon: TrendingUp
                    }
                   ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                      <div className="shrink-0 mt-1 text-[#347D4E]">
                        <item.icon size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a0f00] mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 m-0 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                   ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Müügiprotsess samm-sammult
                </h2>
                
                {/* Timeline Visualization - Clean */}
                <div className="space-y-6 not-prose mb-16">
                  {[
                    { 
                      icon: FileCheck,
                      title: "1. Analüüs", 
                      desc: "Vaatame üle teie metsa andmed metsaregistris. Vajadusel aitame kava tellimisel." 
                    },
                    { 
                      icon: MapIcon,
                      title: "2. Ülevaatus", 
                      desc: "Spetsialist käib kohapeal, et hinnata kvaliteeti. Koostame personaalse pakkumise." 
                    },
                    { 
                      icon: FileSignature,
                      title: "3. Leping", 
                      desc: "Sõlmime notariaalse või lihtkirjaliku lepingu. Esitame metsateatise." 
                    },
                    { 
                      icon: Coins,
                      title: "4. Tasumine", 
                      desc: "Maksame ettemaksu või tasume vastavalt kokkuleppele tööde käigus." 
                    },
                    { 
                      icon: CheckCircle2,
                      title: "5. Teostus", 
                      desc: "Teostame raie ja veame materjali ära. Mõõdame kogused ja esitame lõpparve." 
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group cursor-default items-start">
                      <div className="mt-1 text-gray-400 group-hover:text-[#347D4E] group-hover:scale-110 transition-all duration-200 ease-out">
                         <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="pb-4 border-b border-gray-50 last:border-0 w-full">
                        <h4 className="font-bold text-[#1a0f00] text-xl mb-1 group-hover:text-[#347D4E] transition-colors duration-200">{step.title}</h4>
                        <p className="text-[#1a0f00]/60 leading-relaxed text-base">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warning Block */}
                <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 my-12 not-prose flex gap-4">
                  <div className="shrink-0 mt-1 text-amber-600">
                    <AlertTriangle size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] mb-1">Miks vältida "musta turgu"?</h3>
                    <p className="text-gray-700 m-0 text-sm leading-relaxed">
                      Ebaausad pakkujad, kes lubavad utoopilisi hindu sularahas, on suur risk. Ametliku lepinguta võite jääda ilma nii puidust kui rahast. Metsamaakler tegutseb 100% ametlikult ja läbipaistvalt.
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
                    <a href="/metsa-hind/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <BadgeEuro size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hind
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas kujuneb turuhind?
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
                        Raieloa taotlemine.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <MapIcon size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Inventeerimisandmed on aluseks.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Müüd raieõigust?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Küsi tasuta hinnapakkumist. Teeme metsa hindamise 24h jooksul ja garanteerime parima turuhinna.
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
