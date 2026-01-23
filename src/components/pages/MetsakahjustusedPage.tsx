import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Bug, 
  Wind, 
  Trees, 
  AlertTriangle, 
  Search, 
  Axe, 
  ShieldAlert, 
  Phone,
  Mail,
  ArrowRight,
  Info,
  ChevronRight,
  Sprout
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsakahjustusedPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kuidas ma tunnen ära üraskikahjustuse?",
      answer: "Üraski rünnakut reedavad väikesed sissepouurimisavad puutüvel ja tüve jalamile kogunev pruun 'puurimisjahu'. Hilisemas staadiumis koor lahti ja okkad muutuvad punakaks/halliks. Kui märkad neid märke, tuleb tegutseda kohe."
    },
    {
      question: "Mida teha tormimurruga?",
      answer: "Tormimurd (jalalt murdunud) ja tormiheide (juurtega ümber kukkunud) tuleks metsast eemaldada esimesel võimalusel. Maas lebavad toored puud on ideaalne paljunemispaik kahjuritele (eriti üraskitele), kes ründavad seejärel terveid puid."
    },
    {
      question: "Kuidas kaitsta noort metsa ulukite eest?",
      answer: "Kõige tõhusam on kasutada repellente (nt Trico), mis pritsitakse taimede latvadele. See muudab taime ulukile ebameeldivaks. Kallim alternatiiv on tarastamine või üksikute taimede kaitsed."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Metsakahjustused ja nende tõrje',
        'description': 'Ülevaade levinumatest metsakahjustustest Eestis: ürask, torm, ulukid ja haigused. Kuidas oma metsa kaitsta?',
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
            'name': 'Metsakahjustused',
            'item': 'https://metsamaakler.ee/metsakahjustused/'
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
    title: "Metsakahjustused – Ürask, torm ja ulukid | Metsamaakler",
    description: "Kuidas tunda ära metsakahjustusi ja mida ette võtta? Info kuuse-kooreüraski, tormimurru, juurepessu ja ulukikahjustuste kohta.",
    canonical: "https://metsamaakler.ee/metsakahjustused/",
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
          title="Metsakahjustused"
          subtitle="Terve mets on väärtuslik vara. Õigeaegne reageerimine kahjustustele – olgu selleks torm, ürask või haigused – päästab metsa väärtuse ja peatab kahju leviku."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsakahjustused", href: "/metsakahjustused/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Tunne vaenlast: Levinumad ohud metsas
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Eesti metsades tekitavad enim majanduslikku kahju tormid, putukkahjurid (eelkõige üraskid), ulukid ja seenhaigused. Kahjustuse varajane avastamine on kriitilise tähtsusega.
                </p>

                {/* Damage Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   
                   {/* Card 1: Ürask */}
                   <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
                          <Bug size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Kuuse-kooreürask</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Viimaste aastate suurim oht. Ründab eelkõige nõrgestatud kuusikuid. Kahjustus levib koldeliselt väga kiiresti.
                      </p>
                      <ul className="text-sm space-y-2 mb-4 text-[#1a0f00]/60">
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0"/> Pruun puurimisjahu tüvel</li>
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0"/> Koor lahti, okkad pudenevad</li>
                      </ul>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-red-600 font-bold text-sm">
                        Lahendus: Sanitaarraie (kiire!)
                      </div>
                   </div>

                   {/* Card 2: Torm */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <Wind size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Tormikahjustused</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Tugevad tuuled murravad puid või lükkavad neid juurtega ümber. Tekitab "puidu laoseisu", mis on magnetiks kahjuritele.
                      </p>
                      <ul className="text-sm space-y-2 mb-4 text-[#1a0f00]/60">
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-orange-500 mt-0.5 shrink-0"/> Ohtlik liikumine metsas</li>
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-orange-500 mt-0.5 shrink-0"/> Puidu kvaliteedi langus</li>
                      </ul>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-[#347D4E] font-bold text-sm">
                        Lahendus: Tormimurru koristus
                      </div>
                   </div>

                   {/* Card 3: Ulukid */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                          <Trees size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Ulukikahjustused</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Põdrad ja kitsed söövad noorte puude latvu ja koort. Eriti haavatavad on noored männikud, haavapuu ja kask.
                      </p>
                      <ul className="text-sm space-y-2 mb-4 text-[#1a0f00]/60">
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0"/> Ära söödud ladvad</li>
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0"/> Näritud tüved</li>
                      </ul>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-[#347D4E] font-bold text-sm">
                        Lahendus: Repellent (Trico)
                      </div>
                   </div>

                   {/* Card 4: Haigused */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          <ShieldAlert size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Juurepess</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Seenhaigus, mis levib juurestiku kaudu ja mädandab puud seestpoolt. Raske avastada enne raiet.
                      </p>
                      <ul className="text-sm space-y-2 mb-4 text-[#1a0f00]/60">
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-purple-500 mt-0.5 shrink-0"/> Kasvu pidurdumine</li>
                         <li className="flex gap-2 items-start"><AlertTriangle size={16} className="text-purple-500 mt-0.5 shrink-0"/> Tüvemädanik</li>
                      </ul>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-[#347D4E] font-bold text-sm">
                        Lahendus: Õige puuliigi valik
                      </div>
                   </div>

                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mida teha kahjustuse korral?
                </h2>
                
                {/* Steps Visualization - Clean */}
                <div className="space-y-6 not-prose mb-12">
                  {[
                    { 
                      icon: Search,
                      title: "1. Tuvasta ulatus", 
                      desc: "Käi mets läbi ja hinda, kui palju puid on kahjustatud. Kas tegemist on üksikute puudega või grupiga?" 
                    },
                    { 
                      icon: Phone,
                      title: "2. Konsulteeri spetsialistiga", 
                      desc: "Saada meile pilt või kutsu metsameister kohale. Vale otsus (nt liiga hiline raie) võib kahju mitmekordistada." 
                    },
                    { 
                      icon: Axe,
                      title: "3. Likvideeri kolded", 
                      desc: "Üraski ja tormi puhul on kiirus oluline. Teostame vajadusel sanitaarraie ja realiseerime materjali." 
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
                    <strong className="block text-[#B45309] mb-2 text-base">Metsateatis on vajalik</strong>
                    Ka sanitaarraie ja tormimurru koristus nõuab enamasti Keskkonnaameti luba (metsateatist). Erandiks on vaid üksikute surnud puude koristamine. Aitame loa taotlemisel.
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
                    <a href="/sanitaarraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Axe size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Sanitaarraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas eemaldada haigeid puid?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Search size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Regulaarne inventuur aitab ennetada.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsa-istutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa istutamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Asenda hukkunud mets uuega.
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
                <div className="bg-gradient-to-br from-white to-[#FFF0F0] rounded-2xl p-8 border border-red-100 shadow-[0_20px_40px_-10px_rgba(220,38,38,0.05)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.1)] transition-shadow duration-300">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-50 rounded-full blur-3xl group-hover:bg-red-100 transition-colors duration-500" />

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10 flex items-center gap-3">
                    <AlertTriangle className="text-red-500" />
                    Märkasid kahjustust?
                  </h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Ära jää ootama. Iga nädal loeb. Kutsu meid olukorda hindama, et vältida kahju laienemist.
                  </p>

                  <div className="space-y-4 relative z-10">
                    <a href="tel:+3725551234" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-[#347D4E] group-hover/item:scale-105 transition-transform duration-200">
                        <Phone size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-[#347D4E] transition-colors duration-200">Helista kohe</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">+372 555 1234</span>
                      </div>
                    </a>

                    <a href="mailto:info@eestimetsamaakler.ee" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out group/item">
                      <div className="text-blue-600 group-hover/item:scale-105 transition-transform duration-200">
                        <Mail size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block group-hover/item:text-blue-600 transition-colors duration-200">Saada pilt</span>
                        <span className="font-bold text-[#1a0f00] transition-colors">info@eestimetsamaakler.ee</span>
                      </div>
                    </a>
                  </div>

                  <button 
                    onClick={handleCtaClick}
                    className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] transition-all duration-200 ease-out flex items-center justify-center gap-2 group/btn relative overflow-hidden"
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
