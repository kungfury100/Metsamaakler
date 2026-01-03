import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Sprout, 
  Sun, 
  Droplets, 
  Leaf, 
  TreePine, 
  Trees, 
  ArrowRight, 
  Layers, 
  Phone,
  Mail,
  ChevronRight,
  Info,
  Map as MapIcon
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaKasvukohatuubidPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kuidas ma tean, mis kasvukohatüüp minu metsas on?",
      answer: "Kasvukohatüüp on märgitud Sinu metsamajandamiskavas (takseerkirjelduses). Selle määramisel vaadatakse alustaimestikku (samblad, rohttaimed) ja mullastiku omadusi."
    },
    {
      question: "Miks on kasvukohatüübi teadmine oluline?",
      answer: "See määrab, millised puuliigid seal kõige paremini kasvavad. Näiteks nõmmemetsas kasvab hästi mänd, aga kuusk jääb kiratsema. Vale liigi istutamine on majanduslikult kahjulik."
    },
    {
      question: "Kas ma saan kasvukohatüüpi muuta?",
      answer: "Kasvukohatüüp sõltub mulla ja veerežiimi püsivatest omadustest, mida on raske muuta. Küll aga saab veerežiimi mõjutada kuivendamisega (metsaparandus), mis võib pikema aja jooksul muuta kasvutingimusi."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Metsa kasvukohatüübid',
        'description': 'Ülevaade Eesti metsa kasvukohatüüpidest: nõmm, palu, laane, salu ja soo. Kuidas määrata sobivat puuliiki ja majandamisviisi?',
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
            'name': 'Metsa kasvukohatüübid',
            'item': 'https://metsamaakler.ee/metsa-kasvukohatuubid/'
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
    title: "Metsa kasvukohatüübid – Nõmmest saluni | Metsamaakler",
    description: "Kasvukohatüüp määrab metsa väärtuse ja majandamise viisid. Loe lähemalt nõmme-, palu-, laane-, salu- ja soometsadest ning neile sobivatest puudest.",
    canonical: "https://metsamaakler.ee/metsa-kasvukohatuubid/",
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
          title="Metsa kasvukohatüübid"
          subtitle="Mets ei ole ainult puud, vaid terviklik ökosüsteem. Kasvukohatüüp räägib mulla viljakusest ja niiskusest, aidates teha tarku majandamisotsuseid."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsa kasvukohatüübid", href: "/metsa-kasvukohatuubid/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on kasvukohatüüp ja miks see loeb?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Metsa kasvukohatüüp</strong> on sarnaste mullastiku- ja niiskustingimustega metsaalade rühm. Igal tüübil on oma iseloomulik alustaimestik ja seal kasvavad kõige paremini kindlad puuliigid.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Kasvukohatüübi tundmine on metsaomanikule otsekui "kompass". See ütleb ette, kui kiiresti mets kasvab (boniteet), millal on pinnas kandev rasketehnika jaoks ja milliseid puid tasub sinna pärast raiet istutada.
                </p>

                {/* Info Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Kasulik teada</strong>
                    Kasvukohatüüp on märgitud sinu metsamajandamiskavas. Kui sul kava puudub, saab seda määrata alustaimestiku ja mulla järgi.
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Peamised kasvukohatüübid Eestis
                </h2>
                
                <div className="space-y-6 not-prose mb-12">
                  
                  {/* Nõmmemetsad */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                        <Sun size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] mb-2 group-hover:text-[#347D4E] transition-colors duration-200">Nõmmemetsad (Kuiv ja vaene)</h3>
                      <p className="text-[#1a0f00]/70 mb-4 leading-relaxed">
                        Kasvavad kuivadel ja toitainevaestel liivmuldadel. Alustaimestikus domineerivad samblikud, kanarbik ja pohlad. Muld on happeline.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <TreePine size={14} className="text-[#347D4E]" /> Peapuuliik: Mänd
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <Sprout size={14} className="text-[#347D4E]" /> Uuendamine: Külv või istutus
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Palumetsad */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-[#347D4E] group-hover:scale-110 transition-transform duration-300">
                        <Trees size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] mb-2 group-hover:text-[#347D4E] transition-colors duration-200">Palumetsad (Kuiv ja viljakam)</h3>
                      <p className="text-[#1a0f00]/70 mb-4 leading-relaxed">
                        Eesti levinuim tüüp. Muld on viljakam kui nõmmemetsas. Alustaimestikus pohlad, mustikad ja samblad.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <TreePine size={14} className="text-[#347D4E]" /> Peapuuliigid: Mänd, kuusk, kask
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <Sprout size={14} className="text-[#347D4E]" /> Kasv: Väga hea
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Laanemetsad */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                        <Layers size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] mb-2 group-hover:text-[#347D4E] transition-colors duration-200">Laanemetsad (Parasniiske)</h3>
                      <p className="text-[#1a0f00]/70 mb-4 leading-relaxed">
                        Väga tootlikud metsad huumusrikkal mullal. Alustaimestikus jänesekapsas, mustikas, leseleht.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <TreePine size={14} className="text-[#347D4E]" /> Peapuuliik: Kuusk
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <Sprout size={14} className="text-[#347D4E]" /> Risk: Juurepess
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Salumetsad */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-lime-50 flex items-center justify-center text-lime-600 group-hover:scale-110 transition-transform duration-300">
                        <Leaf size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] mb-2 group-hover:text-[#347D4E] transition-colors duration-200">Salumetsad (Kõige viljakam)</h3>
                      <p className="text-[#1a0f00]/70 mb-4 leading-relaxed">
                        Muld on väga rammus. Rohukasv on lopsakas (sõnajalad, naat). Looduslikult kasvaksid siin laialehised puud (tamm, pärn, vaher).
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <TreePine size={14} className="text-[#347D4E]" /> Peapuuliik: Kask, kuusk, lepp
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <Sprout size={14} className="text-[#347D4E]" /> Hooldus: Intensiivne
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Soometsad */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <Droplets size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] mb-2 group-hover:text-[#347D4E] transition-colors duration-200">Soo- ja rabametsad (Märg)</h3>
                      <p className="text-[#1a0f00]/70 mb-4 leading-relaxed">
                        Liigniisked alad ja turvasmuld. Puude kasv on aeglane. Jagunevad madalsoo- (sanglepp, kask) ja raba- (kidur mänd) metsadeks.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <TreePine size={14} className="text-[#347D4E]" /> Peapuuliik: Sanglepp, sookask
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                          <Sprout size={14} className="text-[#347D4E]" /> Ligipääs: Ainult talvel
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mida meeles pidada?
                </h2>
                
                <div className="space-y-4 not-prose mb-12">
                   {[
                    { title: "Ära võitle loodusega", desc: "Istuta puuliik, mis antud kasvukohale sobib. Kuusk ei kasva liivasel nõmmel ja mänd upub märjas madalsoos." },
                    { title: "Arvesta tehnikaga", desc: "Soometsas saab raiet teha vaid külmal talvel, kui maapind on külmunud. Nõmme- ja palumetsas saab toimetada aastaringselt." },
                    { title: "Hooldusvajadus erineb", desc: "Salumetsas kasvab hein rinnuni ja nõuab mitmekordset niitmist. Nõmmemetsas on hooldusvajadus minimaalne." }
                   ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="mt-1 text-[#347D4E] shrink-0">
                        <ArrowRight size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#1a0f00] mb-1">{item.title}</strong>
                        <span className="text-[#1a0f00]/70 text-sm leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                   ))}
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
                        Kava määrab ära kasvukohatüübi ja vajalikud tööd.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-istutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa istutamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Vali õiged taimed vastavalt kasvukohale.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsa-hindamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Layers size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hindamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kasvukoht mõjutab oluliselt metsa turuväärtust.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Kahtled oma metsa väärtuses?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Kasvukohatüüp on metsa hinna alus. Telli tasuta hindamine ja saa teada tegelik väärtus.
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
