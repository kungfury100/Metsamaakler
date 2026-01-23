import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Trees, 
  Sun, 
  ShieldAlert, 
  Sprout, 
  CheckCircle2, 
  Info,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Axe,
  TrendingUp
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const HooldusraiedPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Millal tuleks teha esimene hooldusraie?",
      answer: "Esimene hooldusraie ehk valgustusraie tehakse tavaliselt, kui puistu on 10–20 aasta vanune. Õige ajastus on kriitiline, et vältida väärtuslike puude väljasuremist konkurentsi tõttu."
    },
    {
      question: "Kas hooldusraie on tulus?",
      answer: "Noore metsa hooldus (valgustusraie) on investeering, mis maksab kulu. Harvendusraie vanemas metsas annab juba puidutulu, kuid peamine kasum tuleb tulevikus kvaliteetsema metsa lõppraiest."
    },
    {
      question: "Kuidas eristada harvendusraiet ja sanitaarraiet?",
      answer: "Harvendusraie eesmärk on anda kasvuruumi parimatele puudele. Sanitaarraie eesmärk on eemaldada haiged ja kahjustatud puud, et takistada haiguste levikut."
    },
    {
      question: "Kas hooldusraieteks saab toetust?",
      answer: "Jah, Erametsakeskus pakub toetusi kuni 30-aastase metsa hooldamiseks (valgustusraie ja harvendusraie). Aitame teil toetuste taotlemisega."
    },
    {
      question: "Mis juhtub, kui jätta hooldusraie tegemata?",
      answer: "Hooldamata mets kasvab liiga tihedaks, puud jäävad peenikesed ja nõrgaks (ridva-efekt) ning on vastuvõtlikumad tormidele ja haigustele. Metsa väärtus langeb oluliselt."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Hooldusraied',
        'description': 'Professionaalsed hooldusraied: valgustusraie, harvendusraie ja sanitaarraie. Tõsta oma metsa väärtust.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Metsamaakler'
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
            'name': 'Teenused',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Hooldusraied',
            'item': 'https://metsamaakler.ee/hooldusraied/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Hooldusraied – Valgustusraie, harvendusraie ja metsa väärtuse kasvatamine",
    description: "Miks on hooldusraied vajalikud? Loe valgustus-, harvendus- ja sanitaarraie kohta. Korrektne hooldus tõstab metsa väärtust ja tagab tulu.",
    canonical: "https://metsamaakler.ee/hooldusraied/",
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
          title="Hooldusraied"
          subtitle="Investeering metsa tulevikku. Valgustus- ja harvendusraied tagavad tervema metsa ja suurema tulu."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Hooldusraied", href: "/hooldusraied/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Hooldusraied – võti tervisliku metsa majandamiseks
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsa majandamine ei ole ainult raieküpse metsa lõikamine. Kõige suurem töö metsa väärtuse loomisel tehakse ära vahepealsetel aastatel.
                </p>

                <p className="mb-10 leading-[1.5]">
                  <strong>Hooldusraied</strong> on metsamajanduse tsükli kriitiline osa, mille eesmärk on suunata puistu arengut, parandada selle tervist ja kasvatada tulevast puiduressurssi.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Parem kasv", 
                      desc: "Eemaldame konkureerivad puud, et väärtuslikud tüved saaksid valgust ja toitaineid.",
                      icon: Sprout
                    },
                    { 
                      title: "Metsa tervis", 
                      desc: "Vähendame haiguste ja kahjurite riski, eemaldades nõrgad ja kahjustatud puud.",
                      icon: ShieldAlert
                    },
                    { 
                      title: "Kõrgem hind", 
                      desc: "Hästi hooldatud mets annab tulevikus jämedamat ja sirgemat palki, mis maksab rohkem.",
                      icon: TrendingUp
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
                  Peamised hooldusraiete liigid
                </h2>
                <p className="mb-6">
                  Sõltuvalt metsa vanusest ja seisukorrast rakendatakse erinevaid hooldusvõtteid. Igal raieliigil on oma kindel eesmärk ja aeg.
                </p>

                {/* Types List - Visual */}
                <div className="space-y-4 not-prose mb-12">
                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-yellow-50 rounded-full text-yellow-600 group-hover:bg-yellow-100 transition-colors duration-200">
                      <Sun size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Valgustusraie (kuni 20a)</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Anda valgust ja ruumi peapuuliigile (nt kuusele või männile), eemaldades kiirekasvulised lehtpuud ja põõsad, mis neid lämmatavad.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-green-50 rounded-full text-[#347D4E] group-hover:bg-green-100 transition-colors duration-200">
                      <Axe size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Harvendusraie (20-40+ a)</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Vähendada puude konkurentsi. Eemaldatakse kasvu poolest mahajäänud või vigased puud. Siit saab metsaomanik juba ka esimest puidutulu.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-red-50 rounded-full text-red-600 group-hover:bg-red-100 transition-colors duration-200">
                      <ShieldAlert size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Sanitaarraie (vajadusel)</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Metsa "ravimine". Eemaldatakse haiged, surnud või kahjuritega (nt ürask) asustatud puud, et takistada kahjustuse levikut.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Funding Block */}
                <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#347D4E]/10 my-12 not-prose flex gap-5 items-start">
                  <div className="shrink-0 mt-1 text-[#347D4E]">
                    <Info size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] text-lg mb-2">Toetused hooldusraieteks</h3>
                    <p className="text-[#1a0f00]/70 m-0 text-sm leading-relaxed">
                      Riik toetab erametsaomanikke noore metsa hooldamisel. Erametsakeskuse kaudu on võimalik taotleda toetust kuni 30-aastase metsa valgustus- ja harvendusraieks.
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
                    <a href="/valgustusraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sun size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Valgustusraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuni 20-aastane mets.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/harvendusraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Trees size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Harvendusraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Keskealine mets.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/sanitaarraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <ShieldAlert size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Sanitaarraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Haige mets.
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
                  
                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Mets vajab hooldust?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Hooldatud mets on investeering. Aitame hinnata vajadusi, taotleda toetusi ja teostada tööd.
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
