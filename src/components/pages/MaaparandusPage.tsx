import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Shovel, 
  Droplets, 
  Trees, 
  Map, 
  FileCheck, 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronRight, 
  Info,
  Waves,
  Hammer,
  Tractor,
  Sprout
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MaaparandusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Millal on vaja maaparandust teha?",
      answer: "Kui märkate, et vesi püsib kraavides või metsaall liiga kaua, puude kasv on kängus või metsateed on läbimatud. Liigniiskus takistab juurte hingamist ja põhjustab puude hukkumist."
    },
    {
      question: "Kas kraavide puhastamiseks on vaja luba?",
      answer: "Olemasolevate maaparandussüsteemide (kraavide) hoiutöödeks ehk puhastamiseks üldjuhul eraldi ehitusluba vaja ei ole, küll aga tuleb esitada metsateatis, kui tegevus toimub metsamaal. Uue süsteemi rajamiseks on vaja projekti ja luba."
    },
    {
      question: "Mis saab, kui koprad on kraavi ummistanud?",
      answer: "Kopratammid tuleb eemaldada, et taastada veevool. See on osa maaparandussüsteemi hooldusest. Pideva probleemi korral tuleks konsulteerida jahimeestega."
    },
    {
      question: "Kas maaparandusele saab toetust?",
      answer: "Jah, Erametsakeskus pakub toetust maaparandussüsteemide uuendamiseks ja metsateede korrastamiseks. Toetuse saamise eelduseks on tavaliselt maaparandusühistu olemasolu või koostöö naabritega."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Maaparandus ja kraavide hooldus',
        'description': 'Metsamaaparandustööd ja kraavide puhastamine. Liigniiskuse vähendamine ja metsa kasvutingimuste parandamine.',
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
            'name': 'Maaparandus',
            'item': 'https://metsamaakler.ee/maaparandus/'
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
    title: "Maaparandus ja kraavide hooldus – Metsa väärtuse tõstmine | Metsamaakler",
    description: "Liigniiskus rikub metsa. Telli maaparandustööd ja kraavide puhastamine Metsamaaklerist. Parandame kasvutingimusi ja ligipääsetavust.",
    canonical: "https://metsamaakler.ee/maaparandus/",
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
          title="Maaparandus"
          subtitle="Vesi on elu alus, kuid liigniiskus on metsa surm. Toimiv kuivendussüsteem on investeering, mis paneb metsa kasvama ja tõstab kinnistu hinda."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Maaparandus", href: "/maaparandus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks on maaparandus vajalik?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Maaparandus</strong> metsanduses tähendab eelkõige liigse vee ärajuhtimist kuivenduskraavide kaudu. Eesti kliimas on sademete hulk sageli suurem kui aurumine, mis muudab paljud metsad liigniiskeks või soistuvaks.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Kui puujuurte ümber on pidevalt vesi, ei saa nad hapnikku. Puud jäävad kiratsema, on vastuvõtlikumad haigustele ja tormituultele (kuna juured on pinnapealsed). Korras kraavivõrk on nagu metsa vereringe, mis hoiab pinnase elujõulisena.
                </p>

                {/* Benefits Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mida maaparandus annab?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Kiirem kasv", 
                      desc: "Kuivendatud maal kasvab mets 2-3 korda kiiremini kui soostunud maal. See tähendab kiiremat tulu omanikule.",
                      icon: Sprout
                    },
                    { 
                      title: "Parem ligipääs", 
                      desc: "Kraavide perved ja rajatud truu6bid võimaldavad tehnikal metsa pääseda ka vihmasematel perioodidel.",
                      icon: Tractor
                    },
                    { 
                      title: "Kõrgem hind", 
                      desc: "Toimiva kuivendussüsteemiga kinnistu turuväärtus on oluliselt kõrgem kui hooldamata märgalal.",
                      icon: Shovel
                    },
                    { 
                      title: "Tervem mets", 
                      desc: "Väheneb juuremädanike oht ja paraneb puistu üldine tervislik seisund.",
                      icon: Trees
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
                  Tööde teostamine
                </h2>
                
                {/* Process Steps - Visual */}
                <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#347D4E]/10 mb-10 not-prose">
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">1</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Olukorra hindamine
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Vaatame üle olemasolevad kraavid, truu6bid ja veevoolu suunad. Tuvastame ummistused ja settekohad.
                         </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">2</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Võsa eemaldamine
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Enne kaevamist tuleb kraavipervedelt ja -põhjast eemaldada võsa ja puud, mis takistavad veevoolu ja ligipääsu.
                         </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm border border-[#347D4E]/10 text-xl">3</div>
                      <div>
                         <p className="text-[#1a0f00] font-bold text-lg m-0 mb-2">
                           Kaevetööd
                         </p>
                         <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                           Ekskavaator puhastab kraavi settedest, taastab õige sügavuse ja kaldenurga, et vesi saaks vabalt voolata.
                         </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Alert Block */}
                <div className="bg-[#FFFBF0] p-8 rounded-xl border border-[#FDE68A] mb-12 not-prose flex gap-5 items-start">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#92400E] text-lg mb-2">Naabritega koostöö</h3>
                    <p className="text-[#92400E]/80 m-0 text-sm leading-relaxed">
                      Vesi ei tunne kinnistupiire. Parima tulemuse saavutamiseks on mõistlik teha koostööd naabritega ja korrastada kogu eesvool (peakraav). Ühistu kaudu tegutsedes on ka toetuste saamise võimalused suuremad.
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
                    <a href="/metsateed/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Tractor size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsateed
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Korras teed on metsa majandamise alus.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/pinnase-mineraliseerimine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Shovel size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Pinnase mineraliseerimine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Maa ettevalmistus uue metsa istutamiseks.
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
                        Küsi pakkumist maaparandustöödele.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vesi uputab metsa?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Ära lase liigniiskusel oma metsa hävitada. Telli kraavide puhastus ja taasta metsa kasvujõud.
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
                      Telli maaparandus
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
