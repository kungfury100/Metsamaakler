import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Sprout, 
  Wind, 
  Tractor, 
  Shovel, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Info,
  ListChecks,
  TreePine,
  Calendar
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaUuendusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui kiiresti peab metsa uuendama?",
      answer: "Metsaseadus nõuab, et mets oleks uuenenud hiljemalt 5 aastat pärast raiet (või hukkumist). Teatud kasvukohatüüpides (nt soostuvad metsad) on tähtaeg pikem, kuni 10 aastat."
    },
    {
      question: "Kas ma võin jätta metsa looduslikule uuendusele?",
      answer: "Jah, kui on olemas eeldused (nt seemnepuud, sobiv kasvukoht) ja kui see tagab seadusega nõutud puuliikide ja taimede arvu ettenähtud aja jooksul. Sageli on vaja looduslikku uuendust kombineerida istutamisega."
    },
    {
      question: "Kas metsa uuendamiseks saab toetust?",
      answer: "Jah, Erametsakeskusest (KIK) saab taotleda toetust taimede ostmiseks, istutamiseks ja maapinna ettevalmistamiseks. Taotluste vastuvõtt toimub tavaliselt kaks korda aastas."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsauuendus',
        'description': 'Metsa uuendamise teenused: istutamine, maapinna ettevalmistus ja hooldus. Taga oma metsa järelkasv seadusega kooskõlas.',
        'provider': {
          '@type': 'Organization',
          'name': 'Metsamaakler'
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
            'name': 'Metsauuendus',
            'item': 'https://metsamaakler.ee/metsauuendus/'
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
    title: "Metsauuendus – Istutamine ja hooldus | Metsamaakler",
    description: "Metsa uuendamine on investeering tulevikku. Pakume terviklahendust: maapinna ettevalmistus, taimede istutamine ja hilisem hooldus.",
    canonical: "https://metsamaakler.ee/metsauuendus/",
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
          title="Metsauuendus"
          subtitle="Tark omanik mõtleb ette. Metsauuendus tagab, et Sinu lank kattub kiiresti uue ja väärtusliku metsaga, täites seaduse nõuded ja kasvatades vara väärtust."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsauuendus", href: "/metsauuendus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks ja kuidas metsa uuendada?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Metsauuendus</strong> on protsess, millega pannakse alus uuele metsapõlvele. See ei ole pelgalt seadusest tulenev kohustus (mets peab olema uuenenud 5 aasta jooksul pärast raiet), vaid majanduslikult kõige olulisem otsus metsa eluringis.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Õigesti valitud puuliigid ja kvaliteetne töö tagavad, et tulevane mets on terve, kiirekasvuline ja väärtuslik. Ebaõnnestunud uuendus tähendab aastaid kaotatud aega ja lisakulusid.
                </p>

                {/* Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { title: "Istutamine", desc: "Kõige kindlam viis. Kasutatakse kvaliteetseid poti- või avajuurseid taimi (kuusk, mänd, kask). Tagab kiirema algarengu ja ühtlasema puistu.", icon: Sprout },
                    { title: "Külvamine", desc: "Odavam kui istutamine, kuid sobib peamiselt männikute uuendamiseks kuivematel liivastel muldadel.", icon: Wind },
                    { title: "Maapinna ettevalmistus", desc: "Kriitiline eeldus. Pinnase mineraliseerimine parandab taimede veevarustust ja vähendab konkurentsi umbrohuga.", icon: Tractor },
                    { title: "Looduslik uuendus", desc: "Mets jäetakse uuenema ümbritsevate puude seemnetest. Odavaim, kuid tulemus on sageli ebaühtlane ja aeglasem.", icon: TreePine }
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
                  Metsauuenduse etapid
                </h2>

                {/* Timeline Visualization - Clean */}
                <div className="space-y-6 not-prose mb-12">
                  {[
                    { 
                      icon: ListChecks,
                      title: "1. Planeerimine", 
                      desc: "Kohe pärast raiet tuleb otsustada, milline puuliik alale sobib ja kust hankida taimed." 
                    },
                    { 
                      icon: Tractor,
                      title: "2. Maapinna ettevalmistus", 
                      desc: "Teostatakse tavaliselt sügisel enne kevadist istutust, et pinnas jõuaks vajuda." 
                    },
                    { 
                      icon: Sprout,
                      title: "3. Istutamine/Külv", 
                      desc: "Parim aeg on kevad (aprill-mai), kui mullas on niiskust. Potiistikuid saab istutada ka sügisel." 
                    },
                    { 
                      icon: Shovel,
                      title: "4. Kultuurihooldus", 
                      desc: "Esimestel aastatel tuleb tõrjuda heina, et see noori puid ei lämmataks (valgustusraie)." 
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
                    <Clock size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Ära jäta viimasele minutile!</strong>
                    Metsataimede nõudlus on kevadel väga suur ja kvaliteetseid istikuid ei pruugi jätkuda. Soovitame taimed broneerida juba pool aastat ette.
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
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Uuendamise toetus
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Info riiklike toetuste kohta.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <ListChecks size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kava näitab, millal ja kuidas uuendada.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsa-istutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Shovel size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Istutusteenus
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Telli professionaalne istutus.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vajad abi metsa uuendamisel?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Metsamaakler aitab Sul kogu protsessi korraldada – alates taimede tellimisest kuni istutuse ja järelhoolduseni.
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
                      Telli metsauuendus
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
