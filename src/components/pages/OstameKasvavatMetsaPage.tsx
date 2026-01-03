import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Trees, 
  TrendingUp, 
  Coins, 
  Handshake, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight, 
  Info,
  BadgeEuro,
  FileSignature,
  Clock
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const OstameKasvavatMetsaPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis on kasvava metsa ost?",
      answer: "See tähendab, et ostame teie metsamaa (kinnistu) koos seal kasvava metsaga. Erinevalt raieõiguse müügist läheb omand üle ostjale ja müüja vabaneb edasistest kohustustest."
    },
    {
      question: "Kuidas kujuneb kasvava metsa hind?",
      answer: "Hind sõltub puidu tagavarast (mitu tihumeetrit on hektaril), puuliikidest (palk on kallim kui paberipuu), asukohast ja ligipääsetavusest. Samuti arvestame maa väärtust peale raiet."
    },
    {
      question: "Kui kiiresti tehing toimub?",
      answer: "Tavaliselt teeme hinnapakkumise 1-2 tööpäeva jooksul. Kui hind sobib, saab notariaalse tehingu vormistada 1-2 nädala jooksul, sõltuvalt notari aegadest."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Ostame kasvavat metsa',
        'description': 'Ostame metsakinnistuid üle Eesti. Parim hind kasvava metsa eest. Kiire tehing ja kohene tasumine.',
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
        'areaServed': 'Estonia'
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
            'name': 'Ostame kasvavat metsa',
            'item': 'https://metsamaakler.ee/ostame-kasvavat-metsa/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Ostame kasvavat metsa – Parim hind ja kiire tehing | Metsamaakler",
    description: "Soovid müüa metsa? Ostame kasvavat metsa ja metsakinnistuid üle Eesti. Teeme tasuta hindamise ja pakume konkurentsivõimelist hinda. Küsi pakkumist!",
    canonical: "https://metsamaakler.ee/ostame-kasvavat-metsa/",
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
          title="Ostame kasvavat metsa"
          subtitle="Muuda oma mets rahaliseks väärtuseks. Ostame metsakinnistuid, pakkudes ausat hinda ja kiiret asjaajamist. Võtame üle kõik kohustused."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Ostame kasvavat metsa", href: "/ostame-kasvavat-metsa/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks müüa kasvavat metsa?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsa omamine on vastutus. See nõuab aega, teadmisi ja raha (maamaks, hooldus). Paljud omanikud otsustavad <strong>kasvava metsa müügi</strong> kasuks, et vabastada vahendeid muudeks investeeringuteks või vabaneda majandamise koormast.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Meie eesmärk on teha müügiprotsess Sinu jaoks võimalikult lihtsaks. Hinnastame metsa ausalt, lähtudes selle tegelikust potentsiaalist, ja vormistame tehingu korrektselt notaris.
                </p>

                {/* Benefits/Key Factors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   
                   {/* Card 1: Raha kohe */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#347D4E] group-hover:scale-110 transition-transform duration-300">
                          <Coins size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Raha kohe kätte</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Metsakinnistu müügi korral saate kogu summa kätte kohe pärast notariaalset tehingut. Ei mingit ootamist raie tulemuste järel.
                      </p>
                   </div>

                   {/* Card 2: Null bürokraatiat */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <FileSignature size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Vabaned murest</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Metsateatised, uuendamiskohustus, tormimurru koristus – kõik need kohustused lähevad üle uuele omanikule.
                      </p>
                   </div>

                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Millist metsa me ostame?
                </h2>
                
                {/* List Item Cards - Clean */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 not-prose">
                  {[
                    { title: "Raieküps mets", desc: "Mets, mis on valmis lõppraieks (valdavalt okaspuu või kask).", icon: Trees },
                    { title: "Noorendikud", desc: "Tulevikumetsad, kuhu on tehtud investeeringuid.", icon: TrendingUp },
                    { title: "Läraiutud kinnistud", desc: "Maa, kus raie on tehtud ja vajab uut metsa.", icon: CheckCircle2 },
                    { title: "Kaasomand", desc: "Ostame ka mõttelisi osi metsakinnistutest.", icon: Handshake }
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

                {/* Steps Visualization - Clean */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Müügitehingu käik
                </h2>
                <div className="space-y-6 not-prose mb-12">
                  {[
                    { 
                      icon: Coins,
                      title: "1. Hinnapakkumine", 
                      desc: "Saada meile kinnistu andmed. Teeme taustakontrolli ja saadame pakkumise 1-2 päevaga." 
                    },
                    { 
                      icon: Handshake,
                      title: "2. Kokkulepe", 
                      desc: "Kui hind sobib, valmistame ette müügidokumendid ja lepime kokku notari aja." 
                    },
                    { 
                      icon: FileSignature,
                      title: "3. Tehing notaris", 
                      desc: "Allkirjastame ostu-müügilepingu. Raha kantakse Sinu kontole koheselt (deposiit) või paari päeva jooksul." 
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
                    <strong className="block text-[#B45309] mb-2 text-base">Tulumaksuvabastus</strong>
                    Kui olete kinnistut omanud vähemalt 2 aastat ja müüte seda eraisikuna, võib teatud juhtudel (näiteks elamumaa puhul või maareformi käigus tagastatud maa) olla müük tulumaksuvaba. Konsulteeri maksunõustajaga või küsi meilt.
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
                    <a href="/raieoiguse-muuk/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Coins size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Raieõiguse müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Müü ainult puud, jäta maa alles.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-hindamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <BadgeEuro size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hindamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Uuri oma metsa väärtust.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsakinnistu-ost/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Trees size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Kinnistu ost
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Üldine info ostuprotsessist.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Müü oma mets kindlale partnerile</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Küsi pakkumist juba täna. See on tasuta ega kohusta Sind millekski.
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
                      Küsi hinnapakkumist
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
