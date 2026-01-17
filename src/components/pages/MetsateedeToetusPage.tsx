import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Truck, 
  Construction, 
  Map as MapIcon, 
  FileCheck, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  TreePine,
  Phone,
  Mail,
  ChevronRight,
  Info,
  Ruler,
  Users
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsateedeToetusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kes saavad metsateede toetust taotleda?",
      answer: "Toetust saavad taotleda erametsaomanikud, kuid sageli on mõistlikum ja lihtsam teha seda ühiselt läbi maaparandusühistu või metsaühistu."
    },
    {
      question: "Kas toetatakse ainult uute teede ehitamist?",
      answer: "Ei, toetatakse ka olemasolevate metsateede rekonstrueerimist ja uuendamist. Samuti võib toetust saada teedega seotud rajatiste (nt sillad, truubid) kordategemiseks."
    },
    {
      question: "Kui suur on toetuse määr?",
      answer: "Toetuse määr sõltub vooru tingimustest, kuid tavaliselt kaetakse teatud protsent abikõlblikest kuludest. Täpne protsent kinnitatakse igaks vooruks eraldi."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Metsateede toetus',
        'description': 'Info metsateede ehitamise ja rekonstrueerimise toetuse kohta. Tingimused, taotlemine ja nõuded.',
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
            'name': 'Metsateede toetus',
            'item': 'https://metsamaakler.ee/metsateede-toetus'
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
    title: "Metsateede toetus – Ehitus ja hooldus | Metsamaakler",
    description: "Kuidas saada toetust metsatee ehitamiseks või korrastamiseks? Info maaparanduse, ligipääsetavuse ja toetusmeetmete kohta.",
    canonical: "https://metsamaakler.ee/metsateede-toetus",
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
          title="Metsateede toetus"
          subtitle="Korras metsatee tõstab metsa väärtust ja tagab ligipääsu igal aastaajal. Uuri lähemalt, kuidas riik toetab teede ehitust ja rekonstrueerimist."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsateede toetus", href: "/metsateede-toetus" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks on metsateed olulised?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsatee ei ole lihtsalt rada läbi metsa. See on strateegiline infrastruktuur, mis määrab, kas ja millal on võimalik metsa majandada. Korras teedevõrk võimaldab puidu väljavedu ka vihmasel perioodil.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Riik on huvitatud metsade heast majandamisest, mistõttu pakutakse <strong>metsateede toetust</strong> teede ehitamiseks ja uuendamiseks. See on võimalus oma kinnistu väärtust tõsta väiksemate kuludega.
                </p>

                {/* Expert Advice Block - Clean */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Truck size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Väärtuse kasv</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Fakt
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Kinnistu, millele on hea ligipääs, on turul tunduvalt hinnatum. Investeering teedesse tasub ennast ära mitte ainult toetuse kaudu, vaid ka kinnisvara väärtuse tõusu näol.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mida toetus katab?
                </h2>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { title: "Uusehitus", desc: "Toetust saab uue metsatee rajamiseks kohtadesse, kus ligipääs puudub. Eeldab ehitusprojekti.", icon: Construction },
                    { title: "Rekonstrueerimine", desc: "Vana ja lagunenud tee kordategemine, et see kannataks rasketehnikat.", icon: Truck },
                    { title: "Rajatised", desc: "Truupide ja sildade ehitus või vahetus, et veerežiim toimiks ja tee püsiks.", icon: MapIcon },
                    { title: "Projekteerimine", desc: "Ettevalmistavad tööd, nagu projekti koostamine ja omanikujärelevalve.", icon: FileCheck }
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
                  Nõuded ja tingimused
                </h2>
                
                {/* Timeline Visualization - Clean */}
                <div className="space-y-6 not-prose mb-16">
                  {[
                    { 
                      icon: Ruler,
                      title: "1. Ehitusprojekt", 
                      desc: "Tee ehitamiseks on vaja pädeva spetsialisti koostatud projekti ja ehitusluba kohalikust omavalitsusest." 
                    },
                    { 
                      icon: Users,
                      title: "2. Koostöö naabritega", 
                      desc: "Toetuse saamine on lihtsam ja kulud väiksemad, kui naabrid teevad koostööd (nt maaparandusühistu)." 
                    },
                    { 
                      icon: ShieldCheck,
                      title: "3. Keskkonnanõuded", 
                      desc: "Tee ehitus ei tohi kahjustada looduskeskkonda, eriti veerežiimi ega kaitsealuseid liike." 
                    },
                    { 
                      icon: FileCheck,
                      title: "4. Kasutusluba", 
                      desc: "Toetuse väljamakse eelduseks on valminud tee nõuetekohane vastuvõtmine ja kasutusloa saamine." 
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

                {/* Info Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Tee peab olema kasutatav</strong>
                    Toetuse saamise tingimuseks on, et valmis tee peab olema kasutatav metsaveoks (piisav kandevõime) ja seda tuleb teatud perioodi jooksul korras hoida.
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
                    <a href="/metsa-uuendamise-toetus/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <TreePine size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Uuendamise toetus
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Toetused uue metsa rajamiseks ja hooldamiseks.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileCheck size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kava on sageli toetuste taotlemise eelduseks.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsa-hind/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Truck size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hind
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Hea ligipääs tõstab metsa turuhinda.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Metsatee vajab remonti?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Aitame hinnata tööde mahtu ja leida sobiva toetuse. Võta meiega ühendust.
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
