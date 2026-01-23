import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  FileText, 
  Map as MapIcon, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  HelpCircle, 
  AlertCircle, 
  ArrowRight, 
  FileCheck,
  ChevronRight,
  Phone,
  Mail,
  BadgeEuro,
  FileSignature
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsamajandamiskavaPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui kaua metsamajandamiskava kehtib?",
      answer: "Metsamajandamiskava kehtib reeglina 10 aastat. Pärast seda tuleb teha uus inventuur ja koostada uus kava."
    },
    {
      question: "Kas ma võin oma metsas raiuda ilma kavata?",
      answer: "Ilma kehtiva kavata tohib metsaomanik raiuda kuni 20 tihumeetrit puitu aastas kinnistu kohta. Suuremateks raieteks on kava kohustuslik."
    },
    {
      question: "Kui kaua kava koostamine aega võtab?",
      answer: "Protsess võtab tavaliselt aega 1-3 kuud, sõltuvalt metsa suurusest ja Keskkonnaagentuuri töökoormusest kava kontrollimisel."
    },
    {
      question: "Kas kava koostamiseks saab toetust?",
      answer: "Jah, Erametsakeskusest on võimalik taotleda metsamajandamiskava koostamise toetust. Aitame teil toetuse saamise tingimustega tutvuda."
    },
    {
      question: "Mis on inventeerimisandmed?",
      answer: "Need on metsas kohapeal kogutud andmed puistu liigilise koosseisu, vanuse, kõrguse, diameetri ja tagavara kohta, mis on kava aluseks."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsamajandamiskava',
        'description': 'Metsamajandamiskava koostamine ja metsa inventeerimine. Kohustuslik dokument raiete planeerimiseks ja toetuste saamiseks.',
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
        },
        'serviceType': 'Forest Management Plan'
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
            'name': 'Metsamajandamiskava',
            'item': 'https://metsamaakler.ee/metsamajandamiskava/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Metsamajandamiskava – Metsa inventeerimine ja kava koostamine",
    description: "Tellige metsamajandamiskava kogenud taksaatoritelt. Kava on vajalik raieõiguse müügiks ja toetuste taotlemiseks. Kehtib 10 aastat.",
    canonical: "https://metsamaakler.ee/metsamajandamiskava/",
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
          title="Metsamajandamiskava"
          subtitle="Metsaomaniku tähtsaim dokument. Strateegiline plaan metsa targaks majandamiseks järgnevaks kümneks aastaks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsamajandamiskava", href: "/metsamajandamiskava/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                   Miks on metsamajandamiskava vaja?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-relaxed font-normal text-[#1a0f00]/80">
                  <strong>Metsamajandamiskava</strong> on metsaomaniku jaoks kõige olulisem dokument. See ei ole lihtsalt paberimajandus, vaid põhjalik audit ja tegevuskava. Kava annab detailse ülevaate metsa hetkeolukorrast ning soovitused selle säästlikuks ja tulusaks majandamiseks järgmiseks 10 aastaks.
                </p>

                <p className="mb-10 leading-loose">
                  Kava koostamiseks viib litsentseeritud metsakorraldaja (taksaator) läbi metsa inventeerimise, mõõtes puid, hinnates pinnast ja kaardistades loodusväärtused. Tulemuseks on dokument, mis on aluseks nii raieotsustele kui ka riiklikele toetustele.
                </p>

                {/* Expert Advice / Key Benefit */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <MapIcon size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Strateegiline eelis</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Soovitus
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-relaxed text-base">
                        Ilma kehtiva kavata ei saa te taotleda raieluba suuremateks töödeks ega metsanduslikke toetusi. Kava on teie metsa "pass", mis avab uksed targaks majandamiseks.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Millal on kava kohustuslik?
                </h2>
                <p className="mb-8">
                  Kuigi väiksemate tööde tegemiseks ei ole kava alati kohustuslik, on see hädavajalik enamiku metsamajanduslike tegevuste jaoks.
                </p>
                
                {/* List Item Cards - Clean Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 not-prose">
                  {[
                    { 
                      title: "Raiete planeerimine", 
                      desc: "Raieõiguse müügiks ja raieteks (v.a väikesemahuline) on kava nõutav.", 
                      icon: CheckCircle2 
                    },
                    { 
                      title: "Toetuste taotlemine", 
                      desc: "Erametsakeskuse toetuste ja Natura hüvitiste saamiseks peavad andmed olema registris.", 
                      icon: FileCheck 
                    },
                    { 
                      title: "Maksuoptimeerimine", 
                      desc: "Kava on aluseks kulude tõendamiseks ja tulumaksusoodustuste kasutamiseks.", 
                      icon: TrendingUp 
                    },
                    { 
                      title: "Müügitehingud", 
                      desc: "Kinnistu müügil tõstab kehtiv kava oluliselt metsa turuväärtust ja usaldusväärsust.", 
                      icon: BadgeEuro 
                    }
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
                  Kava koostamise protsess
                </h2>
                <p className="mb-6">
                  Tellimine on lihtne. Meie litsentseeritud taksaatorid teevad kogu töö ära, teie vaid kinnitate tulemuse.
                </p>

                {/* Timeline Visualization - Clean Style */}
                <div className="space-y-6 not-prose mb-16">
                  {[
                    { 
                      icon: Calendar,
                      title: "1. Tellimus ja kokkulepe", 
                      desc: "Võtke meiega ühendust. Lepime kokku aja ja hinna vastavalt metsa suurusele." 
                    },
                    { 
                      icon: MapIcon,
                      title: "2. Välitööd metsas", 
                      desc: "Taksaator käib metsas kohapeal, mõõdab puistut, hindab juurdekasvu ja fikseerib olukorra." 
                    },
                    { 
                      icon: FileText,
                      title: "3. Kava koostamine", 
                      desc: "Andmete töötlemine ja kava vormistamine. Protsess võtab aega tavaliselt 1-3 kuud." 
                    },
                    { 
                      icon: FileCheck,
                      title: "4. Registreerimine", 
                      desc: "Kava esitatakse Keskkonnaagentuurile kontrollimiseks ja registrisse kandmiseks." 
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

                {/* Warning / Important Info */}
                <div className="group mb-16 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <AlertCircle size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Soovituslik, mitte kohustuslik</strong>
                    Metsamajandamiskava ei kohusta omanikku raieteks. See on strateegiline dokument, mis annab õiguse majandada, kuid otsused teete teie ise. Kava annab kindlustunde, et teie tegevus on seaduslik.
                  </div>
                </div>

                {/* FAQ Section */}
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
                
                {/* Related Content */}
                <div className="mt-20 pt-12 border-t border-gray-100 not-prose">
                  <h3 className="text-[24px] font-bold text-[#1a0f00] mb-8">Vaadake ka:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="/metsateatis/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileText size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsateatis
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas taotleda raieluba ja millal seda vaja on?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

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

                    <a href="/metsa-hind/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <BadgeEuro size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hind
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Uuri, milline on hetkel metsamaa ja raieõiguse turuhind.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vajad metsakava?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Meie litsentseeritud taksaatorid koostavad kava kiirelt ja professionaalselt. Küsi pakkumist!
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
