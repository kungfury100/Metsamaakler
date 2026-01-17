import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  FileText, 
  Coins, 
  CalendarCheck, 
  CheckCircle2, 
  ArrowRight, 
  TreeDeciduous,
  Phone,
  Mail,
  ChevronRight,
  Info,
  Users,
  Map as MapIcon,
  FileSignature
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaInventeerimiseToetusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kes saab toetust taotleda?",
      answer: "Toetust saavad taotleda erametsaomanikud – nii füüsilised isikud kui ka eraõiguslikud juriidilised isikud. Metsaühistud saavad taotleda toetust oma liikmete nimel, mis on sageli lihtsaim viis."
    },
    {
      question: "Kui suur on toetuse määr?",
      answer: "Toetuse määr on üldjuhul kuni 10-15 eurot inventeeritud metsamaa hektari kohta. Täpne summa sõltub konkreetse taotlusvooru eelarvest ja taotlejate koguarvust."
    },
    {
      question: "Millal saab toetust küsida?",
      answer: "Toetust saab taotleda üks kord 7 aasta jooksul sama metsamaa kohta (kuna metsamajandamiskava kehtib 10 aastat). Taotlusvoorud toimuvad regulaarselt, tavaliselt kord aastas Erametsakeskuse kaudu."
    },
    {
      question: "Kas toetust saab ka tagantjärele?",
      answer: "Jah, toetust makstakse kompenseerimiseks. Inventeerimisandmed peavad olema kantud metsaregistrisse toetuse taotlemise aastal või sellele eelneval kahel kalendriaastal."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsa inventeerimise toetus',
        'description': 'Kuidas saada toetust metsa inventeerimiseks ja metsamajandamiskava koostamiseks? Info tingimuste, tähtaegade ja taotlemise kohta.',
        'provider': {
          '@type': 'Organization',
          'name': 'Metsamaakler',
          'image': 'https://metsamaakler.ee/logo.png',
          'telephone': '+37255555555',
          'email': 'info@metsamaakler.ee',
          'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'EE'
          }
        },
        'areaServed': 'Estonia'
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
            'name': 'Metsa inventeerimise toetus',
            'item': 'https://metsamaakler.ee/metsa-inventeerimise-toetus/'
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
    title: "Metsa inventeerimise toetus – Tingimused ja taotlemine | Metsamaakler",
    description: "Saa hüvitist metsamajandamiskava koostamise kuludele. Loe metsa inventeerimise toetuse tingimustest, määradest ja taotlemise protsessist.",
    canonical: "https://metsamaakler.ee/metsa-inventeerimise-toetus/",
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
          title="Metsa inventeerimise toetus"
          subtitle="Riik toetab erametsaomanikke metsaandmete uuendamisel. Küsi toetust metsamajandamiskava koostamise kulude osaliseks katmiseks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsa inventeerimise toetus", href: "/metsa-inventeerimise-toetus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks on inventeerimine vajalik?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Metsa inventeerimine</strong> on alus korrektsele metsamajandamisele. Selle tulemusena valmib metsamajandamiskava, mis annab omanikule detailse ülevaate metsa tagavarast, juurdekasvust ja vajalikest töödest järgnevaks 10 aastaks.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Riik peab oluliseks, et erametsad oleksid inventeeritud ja andmed metsaregistris ajakohased. Seepärast pakub Keskkonnainvesteeringute Keskus (KIK) toetust, et vähendada omaniku kulutusi kava tellimisel. See on suurepärane võimalus saada osa kuludest tagasi.
                </p>

                {/* Expert Advice / Key Benefit */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Coins size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Rahaline võit</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Toetus
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Toetust makstakse kuni 15 eurot hektari kohta. Keskmise suurusega metsakinnistu puhul katab see arvestatava osa inventeerimise kuludest. Lisaks on kehtiv metsakava eelduseks tulumaksusoodustuste kasutamisel.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Toetuse saamise tingimused
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Toetuse taotlemiseks peavad olema täidetud teatud kriteeriumid. Siin on peamised nõuded:
                </p>

                {/* Conditions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { title: "Kehtivad andmed", desc: "Andmed peavad olema kantud metsaregistrisse ja olema taotluse hetkel kehtivad.", icon: CheckCircle2 },
                    { title: "Metsamaa pindala", desc: "Inventeeritav metsamaa peab olema vähemalt 0,1 hektarit. Toetust makstakse tegeliku pindala alusel.", icon: TreeDeciduous },
                    { title: "Ajastus", desc: "Andmed ei tohi olla kantud registrisse varem kui kaks aastat enne taotluse esitamise aastat.", icon: CalendarCheck },
                    { title: "Metsaühistu liige", desc: "Lihtsaim on taotleda läbi metsaühistu. Ühistu teeb paberimajanduse Sinu eest.", icon: Users }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <item.icon size={24} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/60 m-0">{item.desc}</p>
                    </div>
                   ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kuidas protsess välja näeb?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Kogu teekond metsakava tellimisest kuni toetuse laekumiseni on lihtne ja loogiline.
                </p>

                {/* Timeline Visualization - Clean */}
                <div className="space-y-6 not-prose mb-12">
                  {[
                    { 
                      icon: FileText,
                      title: "1. Telli metsakava", 
                      desc: "Telli litsentseeritud metsakorraldajalt inventeerimine. Metsamaakler saab aidata usaldusväärse partneri leidmisel." 
                    },
                    { 
                      icon: CheckCircle2,
                      title: "2. Andmed registrisse", 
                      desc: "Korraldaja teostab välitööd ja esitab andmed. Oota, kuni andmed on metsaregistris kinnitatud." 
                    },
                    { 
                      icon: FileSignature,
                      title: "3. Esita taotlus", 
                      desc: "Kui voor avaneb (tavaliselt aasta lõpus), esita taotlus Erametsakeskusele (e-PRIA kaudu) või läbi metsaühistu." 
                    },
                    { 
                      icon: Coins,
                      title: "4. Toetuse laekumine", 
                      desc: "Pärast taotluste kontrollimist (tavaliselt järgmise aasta kevadel) makstakse toetus otse Sinu pangakontole." 
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

                {/* Info Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Kasulik teada</strong>
                    Kehtiv metsamajandamiskava ei ole vajalik mitte ainult toetuste saamiseks, vaid see on kohustuslik dokument, kui soovid teostada raieid kinnistul, mis on suurem kui 5 hektarit.
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
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <MapIcon size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Loe täpsemalt, mis on metsakava ja miks seda vaja on.
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
                        Kuidas taotleda raieluba pärast kava valmimist?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsa-uuendamise-toetus/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Coins size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa uuendamise toetus
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Toetus uue metsa istutamiseks ja hooldamiseks.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vajad uut metsakava?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Aitame leida litsentseeritud metsakorraldaja ja taotleda toetust. Küsi pakkumist juba täna.
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
                      Telli metsakava
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
