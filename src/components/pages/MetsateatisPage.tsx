import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  FileText, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  MousePointerClick, 
  Clock, 
  CheckSquare,
  Shield,
  Phone,
  Mail,
  BadgeEuro,
  FileSignature,
  Map as MapIcon,
  ChevronRight,
  Gavel,
  ShieldAlert
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsateatisPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui palju maksab metsateatise esitamine?",
      answer: "Metsateatise esitamine on riigilõivuvaba. Küll aga võib kulutusi tekitada vajaliku metsamajandamiskava tellimine."
    },
    {
      question: "Kas ma võin ise metsateatise esitada?",
      answer: "Jah, metsaomanik saab metsateatise esitada iseseisvalt metsaregistri veebikeskkonnas, logides sisse ID-kaardi või Mobiil-ID-ga."
    },
    {
      question: "Mis juhtub, kui teen raiet ilma teatiseta?",
      answer: "Raietööd ilma nõutud metsateatiseta on seaduserikkumine. Järgnevad rahatrahvid ja kohustus hüvitada keskkonnakahju."
    },
    {
      question: "Kui kaua metsateatis kehtib?",
      answer: "Metsateatis kehtib raietöödeks üldjuhul 12 kuud alates registreerimisest. Kui selle aja jooksul töid ei teostata, tuleb esitada uus teatis."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Metsateatis – kõik, mida pead teadma',
        'description': 'Mis on metsateatis, millal see esitada ja kuidas protsess käib? Loe põhjalikku juhendit.',
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
            'name': 'Metsateatis',
            'item': 'https://metsamaakler.ee/metsateatis/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Metsateatis – Info esitamise, kehtivuse ja nõuete kohta",
    description: "Metsateatis on dokument, mis on vajalik raietööde teostamiseks. Loe siit, kuidas esitada metsateatist, millal seda vaja on ja kui kaua see kehtib.",
    canonical: "https://metsamaakler.ee/metsateatis/",
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
          title="Metsateatis"
          subtitle="Ametlik luba metsatöödeks. Kõik, mida pead teadma taotlemisest, tähtaegadest ja seadusandlusest."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsaomanikule", href: "/" },
            { label: "Metsateatis", href: "/metsateatis/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on metsateatis?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Metsateatis</strong> on metsaomaniku või tema esindaja poolt Keskkonnaametile esitatav dokument, mis teavitab kavandatavatest raietöödest või olulistest metsakahjustustest.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Sisuliselt toimib see riikliku loana – ilma registreeritud metsateatiseta on enamik raieid Eestis keelatud. Dokumendi korrektsus on omaniku kaitseks – see annab kindlustunde, et tegevus on seaduslik.
                </p>

                {/* Expert Advice Block - Clean */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Shield size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Lihtne lahendus</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Soovitus
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Kui müüte raieõigust Metsamaaklerile, ei pea te metsateatise bürokraatia pärast muretsema. Meie spetsialistid vormistavad kõik vajalikud dokumendid ja suhtlevad Keskkonnaametiga.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Millal on metsateatis kohustuslik?
                </h2>
                <p className="mb-8 leading-[1.5]">
                  Üldreeglina on see nõutud alati, kui puidu maht või raie iseloom ületab teatud piiri. Siin on peamised tööd:
                </p>
                
                {/* List Item Cards - Clean */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 not-prose">
                  {[
                    { title: "Uuendusraie", desc: "Lageraie ja turberaie küpses metsas.", icon: CheckCircle2 },
                    { title: "Harvendusraie", desc: "Keskealise metsa tiheduse reguleerimiseks.", icon: CheckCircle2 },
                    { title: "Sanitaarraie", desc: "Haigete või surnud puude eemaldamiseks.", icon: ShieldAlert },
                    { title: "Valikraie", desc: "Püsimetsana majandatavas metsas.", icon: CheckCircle2 }
                  ].map((item, idx) => (
                    <div key={idx} className="group relative bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                      <div className="relative z-10">
                        <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                          <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-bold text-[#1a0f00] text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-[#1a0f00]/60 leading-normal m-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Exception Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Erandjuhud</strong>
                    Metsateatist ei ole vaja esitada kuni 20 aasta vanuses puistus valgustusraie tegemiseks või kui raiutakse kuni 20 tihumeetrit puitu kinnistu kohta aastas oma tarbeks.
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kuidas protsess välja näeb?
                </h2>
                
                {/* Timeline Visualization - Clean */}
                <div className="space-y-6 not-prose mb-16">
                  {[
                    { 
                      icon: FileText,
                      title: "1. Kontroll", 
                      desc: "Veenduge, et teie metsa kohta on olemas kehtiv metsamajandamiskava." 
                    },
                    { 
                      icon: MousePointerClick,
                      title: "2. Esitamine", 
                      desc: "Kõige mugavam on esitada teatis metsaregistri veebikeskkonnas." 
                    },
                    { 
                      icon: Gavel,
                      title: "3. Menetlus", 
                      desc: "Keskkonnaamet vaatab taotluse läbi. Tavapärane aeg on kuni 15 päeva." 
                    },
                    { 
                      icon: CheckSquare,
                      title: "4. Otsus", 
                      desc: "Positiivse otsuse korral registreeritakse luba, mis kehtib 12 kuud." 
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

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mb-8 leading-tight">
                  Tähelepanekud
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-lg transition-all duration-200 group">
                    <div className="mb-4 text-blue-600 group-hover:scale-105 transition-transform duration-200">
                      <Clock size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-[#1a0f00] text-lg mb-2">Kehtivusaeg</h3>
                    <p className="text-[#1a0f00]/60 text-sm leading-relaxed mb-4">
                      Metsateatis kehtib 1 aasta. Kui te ei jõua selle ajaga töid teha, kaotab luba kehtivuse.
                    </p>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div className="h-full bg-blue-500 w-[30%] group-hover:w-full transition-all duration-1000 ease-out" />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#F59E0B]/30 hover:shadow-lg transition-all duration-200 group">
                    <div className="mb-4 text-amber-600 group-hover:scale-105 transition-transform duration-200">
                      <AlertCircle size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-[#1a0f00] text-lg mb-2">Linnurahu</h3>
                    <p className="text-[#1a0f00]/60 text-sm leading-relaxed mb-4">
                      Pidage meeles kevadsuvist linnurahu (15. aprill – 15. juuli). Sel perioodil on raietööd piiratud.
                    </p>
                    <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Piirang
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 not-prose">
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
                
                {/* Related Content */}
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
                        Kuidas kujuneb metsa hind?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/raieoiguse-muuk/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileSignature size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Raieõiguse müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Müüge oma raieõigus parima hinnaga.
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
                        Kava on teatise eelduseks.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Paberimajandus hirmutab?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Aitame vormistada kõik vajalikud dokumendid tasuta, kui müüte raieõigust meile.
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
