import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Calculator, 
  Map as MapIcon, 
  Trees, 
  TrendingUp, 
  Search, 
  ClipboardCheck, 
  ArrowRight, 
  Banknote,
  FileText,
  BadgeEuro,
  Scale,
  Phone,
  Mail,
  ChevronRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaHindaminePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui palju metsa hindamine maksab?",
      answer: "Metsamaakleris on esmane metsa hindamine ja hinnapakkumise tegemine Sulle täiesti tasuta. See ei kohusta Sind tehinguks. Meie huvi on pakkuda Sulle parimat teenust, et saaksid teha kaalutletud otsuse."
    },
    {
      question: "Kui kaua hindamine aega võtab?",
      answer: "Tavaliselt teeme esmase hinnapakkumise 1-2 tööpäeva jooksul pärast päringu saamist. Keerukamate objektide puhul (nt suured kinnistud, kaasomand) võib minna veidi kauem, kuid hoiame Sind protsessiga kursis."
    },
    {
      question: "Kas hindamiseks on vaja metsamajandamiskava?",
      answer: "Kehtiv metsamajandamiskava kiirendab protsessi ja annab täpsema tulemuse, kuid see ei ole vältimatult vajalik. Saame hinnata metsa ka ligikaudselt metsaregistri andmete, ortofotode ja meie andmebaasi põhjal."
    },
    {
      question: "Mis vahe on hindamisel ja takseerimisel?",
      answer: "Takseerimine on metsa füüsiline mõõtmine looduses (puude kõrgus, diameeter, vanus), mille tulemusena valmib metsamajandamiskava. Hindamine on selle info põhjal rahalise väärtuse arvutamine, arvestades turuhindu."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsa hindamine',
        'description': 'Professionaalne ja tasuta metsa hindamise teenus. Saa teada oma metsakinnistu või raieõiguse tegelik turuväärtus.',
        'provider': {
          '@type': 'Organization',
          'name': 'Metsamaakler',
          'image': 'https://metsamaakler.ee/logo.png',
          'telephone': '+37255555555',
          'email': 'info@eestimetsamaakler.ee',
          'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'EE'
          }
        },
        'areaServed': 'Estonia',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'EUR',
          'description': 'Tasuta esmane konsultatsioon ja hinnapakkumine'
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
            'name': 'Metsa hindamine',
            'item': 'https://metsamaakler.ee/metsa-hindamine/'
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
    title: "Metsa hindamine – Tasuta eksperthinnang | Metsamaakler",
    description: "Soovid teada oma metsa väärtust? Teostame tasuta metsa hindamist, arvestades puidutagavara, sortimenti ja turuhindu. Küsi pakkumist.",
    canonical: "https://metsamaakler.ee/metsa-hindamine/",
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
          title="Metsa hindamine"
          subtitle="Teadlik otsus algab õigest hinnast. Hindame Sinu metsakinnistut või raieõigust professionaalselt, lähtudes hetke turusituatsioonist."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsa hindamine", href: "/metsa-hindamine/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Kuidas me metsa hindame?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsa hindamine on kompleksne protsess, kus ei piisa vaid hektarite kokkulöömisest. Iga mets on unikaalne elukooslus ja vara, mille väärtus sõltub paljudest teguritest. Meie eksperdid analüüsivad põhjalikult Sinu metsa potentsiaali, et pakkuda õiglast ja konkurentsivõimelist hinda.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Meie hindamismetoodika põhineb reaalsetel turuandmetel ja pikaajalisel kogemusel. Me ei kasuta automaatseid kalkulaatoreid, vaid vaatame iga kinnistut eraldi, arvestades selle eripärasid.
                </p>

                {/* Expert Advice / Key Benefit */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Search size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Detailne analüüs</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Tasuta
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Kasutame hindamisel metsaregistri andmeid, ortofotosid, mullastiku kaarte ja vajadusel teostame kohapealse vaatluse. See tagab, et hind peegeldab metsa tegelikku väärtust, mitte vaid statistilist keskmist.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Peamised hinna mõjutajad
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Metsa väärtus koosneb mitmest komponendist. Siin on neli peamist faktorit, mida me hindamisel arvesse võtame.
                </p>

                {/* Factors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { title: "Liigiline koosseis", desc: "Okaspuumetsad (mänd, kuusk) on reeglina kallimad kui lehtpuumetsad. Oluline on palgi osakaal.", icon: Trees },
                    { title: "Asukoht ja ligipääs", desc: "Kas metsale pääseb ligi rasketehnikaga? Kui kaugel on puidutööstused? Keeruline logistika alandab hinda.", icon: MapIcon },
                    { title: "Turuhinnad", desc: "Puiduturg on muutuv. Arvestame hetkel kehtivaid palgi, paberipuidu ja küttepuidu kokkuostuhindu.", icon: TrendingUp },
                    { title: "Piirangud", desc: "Kaitsealad ja vääriselupaigad võivad piirata majandamist, kuid mõnel juhul on võimalik saada kompensatsiooni.", icon: ClipboardCheck }
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
                  Hindamise protsess samm-sammult
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Oleme protsessi teinud Sinu jaoks võimalikult lihtsaks. Sinu ülesanne on vaid meiega ühendust võtta.
                </p>

                {/* Timeline Visualization - Clean */}
                <div className="space-y-6 not-prose mb-16">
                  {[
                    { 
                      icon: Search,
                      title: "1. Päring ja andmed", 
                      desc: "Saada meile kinnistu katastritunnus. See on aluseks esmasele analüüsile." 
                    },
                    { 
                      icon: Calculator,
                      title: "2. Analüüs ja arvutused", 
                      desc: "Eksperdid kontrollivad andmeid registritest ja arvutavad metsa väärtuse sortimendi hindade põhjal." 
                    },
                    { 
                      icon: Banknote,
                      title: "3. Hinnapakkumine", 
                      desc: "Esitame Sulle konkreetse hinnapakkumise 1-2 tööpäeva jooksul. See on tasuta ja ei kohusta millekski." 
                    },
                    { 
                      icon: FileText,
                      title: "4. Tehingu ettevalmistus", 
                      desc: "Kui hind sobib, valmistame ette kõik vajalikud lepingud ja korraldame tehingu." 
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
                    <strong className="block text-[#B45309] mb-2 text-base">Miks valida Metsamaakler?</strong>
                    Meil on otsekontaktid suurimate saeveskite ja kokkuostjatega, mis võimaldab meil pakkuda turu parimat hinda. Me ei ole lihtsalt vahendajad, vaid strateegilised partnerid Sinu metsa majandamisel.
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
                        Loe lähemalt, kuidas kujuneb metsa hind ja millised on turu trendid.
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
                        Info raietööde seaduslikuks teostamiseks vajalike lubade kohta.
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
                        Inventeerimisandmed on täpse hindamise aluseks. Telli kava siit.
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
              
              {/* Sticky Contact Card - The Standard */}
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-[#F0F7F4] rounded-2xl p-8 border border-[#347D4E]/10 shadow-[0_20px_40px_-10px_rgba(52,125,78,0.15)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(52,125,78,0.2)] transition-shadow duration-300">
                  {/* Decorative Background Blob - Subtle Pulse */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#347D4E]/5 rounded-full blur-3xl group-hover:bg-[#347D4E]/10 transition-colors duration-500" />

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Soovid tasuta hinnangut?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Saada meile oma metsa andmed. Teeme Sulle parima pakkumise 24h jooksul.
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
                    {/* Button Shine Effect */}
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
