import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  FileSearch, 
  Scale, 
  Users, 
  Leaf, 
  AlertCircle, 
  ArrowRight, 
  BookOpen,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const KeskkonnamojuHindaminePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis on KMH ja KSH vahe?",
      answer: "KMH (Keskkonnamõju hindamine) tehakse konkreetsele arendusprojektile (nt tehas, kaevandus, tee). KSH (Keskkonnamõju strateegiline hindamine) tehakse aga strateegilistele planeeringutele (nt üldplaneering, detailplaneering), et hinnata laiemat mõju juba planeerimise varases faasis."
    },
    {
      question: "Kes tellib ja maksab KMH?",
      answer: "KMH tellib ja maksab arendaja ehk loa taotleja. Hoolimata sellest peab KMH ekspert olema erapooletu ja hindamine peab tuginema objektiivsetele andmetele."
    },
    {
      question: "Kui kaua KMH protsess aega võtab?",
      answer: "See on pikk protsess, mis kestab tavaliselt vähemalt 6 kuud, kuid keerukamate projektide puhul võib venida aastatepikkuseks. Protsess hõlmab programmi koostamist, uuringute tegemist, aruande koostamist ja avalikke arutelusid."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Keskkonnamõju hindamine (KMH)',
        'description': 'Mis on keskkonnamõju hindamine ja millal on see kohustuslik? Info KMH etappide, osaliste ja seadusandluse kohta.',
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
            'name': 'Keskkonnamõju hindamine',
            'item': 'https://metsamaakler.ee/keskkonnamoju-hindamine-kmh/'
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
    title: "Keskkonnamõju hindamine (KMH) – Protsess ja nõuded | Metsamaakler",
    description: "Mis on KMH ja millal seda vaja on? Ülevaade keskkonnamõju hindamise protsessist, etappidest ja seadusandlusest.",
    canonical: "https://metsamaakler.ee/keskkonnamoju-hindamine-kmh/",
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
          title="Keskkonnamõju hindamine (KMH)"
          subtitle="KMH on protsess, mille käigus selgitatakse välja kavandatava tegevuse võimalik mõju keskkonnale, et vältida või leevendada kahjulikke tagajärgi."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Keskkonnamõju hindamine", href: "/keskkonnamoju-hindamine-kmh/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on KMH ja milleks see vajalik on?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Keskkonnamõju hindamine (KMH)</strong> on seadusega reguleeritud menetlus, mille eesmärk on anda otsustajale (tavaliselt riigiasutusele või omavalitsusele) infot selle kohta, kuidas kavandatav tegevus mõjutab looduskeskkonda, inimeste tervist ja sotsiaalmajanduslikku olukorda.
                </p>

                <p className="mb-10 leading-[1.5]">
                  KMH ei ole lihtsalt formaalsus, vaid oluline tööriist säästva arengu tagamiseks. See aitab leida parima võimaliku asukoha ja tehnoloogilise lahenduse, mis koormaks keskkonda võimalikult vähe.
                </p>

                {/* When is it mandatory Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Millal on KMH kohustuslik?
                </h2>
                <p className="mb-6">
                  Seadus eristab tegevusi, mille puhul on KMH alati kohustuslik, ja tegevusi, mille puhul tuleb kaaluda selle vajadust (eelhinnang).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Olulise mõjuga tegevused", 
                      desc: "KMH algatatakse alati suurte projektide puhul: naftatöötlemistehased, suured maanteed, kaevandused jne. Nimekiri on toodud seaduses.",
                      icon: AlertCircle
                    },
                    { 
                      title: "Kaalutlusotsus", 
                      desc: "Väiksemate, kuid potentsiaalselt ohtlike tegevuste puhul (nt väiksemad tööstused, raadamine) teeb loa andja eelhinnangu ja otsustab KMH vajaduse.",
                      icon: Scale
                    },
                    { 
                      title: "Natura 2000 alad", 
                      desc: "Kui tegevus võib mõjutada Natura 2000 võrgustiku ala (isegi kui tegevus toimub väljaspool ala), on mõju hindamine kohustuslik erimenetluse korras.",
                      icon: Leaf
                    },
                    { 
                      title: "Avalik huvi", 
                      desc: "Sageli algatatakse KMH ka juhtudel, kus on suur avalik huvi ja sotsiaalne vastuseis, et anda kogukonnale kindlustunne ja võimalus kaasa rääkida.",
                      icon: Users
                    }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group flex flex-col h-full">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-110 transition-transform duration-200">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/60 m-0 leading-relaxed flex-grow">{item.desc}</p>
                    </div>
                   ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  KMH protsessi etapid
                </h2>
                
                {/* Steps List - Enhanced Visuals */}
                <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#347D4E]/10 mb-10 not-prose">
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">1</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Algatamine
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Arendaja esitab tegevusloa taotluse. Loa andja (nt Keskkonnaamet) otsustab KMH algatamise või algatamata jätmise.
                         </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">2</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Programm
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Juhtekspert koostab KMH programmi (tegevuskava), kus kirjeldatakse, mida ja kuidas hakatakse uurima. Programm läbib avaliku väljapaneku.
                         </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">3</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Aruanne
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Tehakse vajalikud uuringud ja koostatakse aruanne, mis sisaldab mõjude hinnangut ja leevendusmeetmeid. Ka aruanne läbib avaliku arutelu.
                         </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">4</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Heakskiitmine ja luba
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Järelevalvaja kontrollib aruande nõuetele vastavust ja kiidab selle heaks. Selle alusel otsustatakse tegevusloa andmine.
                         </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Alert Block - Amber Style */}
                <div className="bg-[#FFFBF0] p-8 rounded-xl border border-[#FDE68A] mb-12 not-prose flex gap-5 items-start">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <FileSearch size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#92400E] text-lg mb-2">Vaja litsentseeritud eksperti</h3>
                    <p className="text-[#92400E]/80 m-0 text-sm leading-relaxed">
                      Keskkonnamõju hindamist tohib juhtida ainult vastava litsentsiga juhtekspert. See tagab, et hindamine on pädev, sõltumatu ja vastab kõigile keerulistele juriidilistele nõuetele.
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
                    <a href="/metsa-hindamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <BookOpen size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hindamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Hinda oma metsa väärtust.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/natura-2000-alade-piirangud/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Leaf size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Natura 2000
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Looduskaitselised piirangud.
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
                        Konsulteeri spetsialistiga.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vajad abi loamenetluses?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Aitame hinnata, kas sinu tegevus vajab KMH-d ja kuidas protsessi sujuvalt läbida.
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
                      Küsi nõu
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
