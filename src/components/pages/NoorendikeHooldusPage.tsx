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
  Trees, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight, 
  Info,
  CalendarDays,
  XCircle,
  Clock
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const NoorendikeHooldusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Millal on õige aeg noorendikku hooldada?",
      answer: "Esimene hooldus (kultuuride hooldus) tehakse tavaliselt 1.-3. aastal pärast istutamist, et vabastada taimed heina ja võsa varjust. Valgustusraie järgneb 5.-15. eluaastal, kui puud hakkavad võrade osas konkureerima."
    },
    {
      question: "Mis juhtub, kui noorendik jääb hooldamata?",
      answer: "Hooldamata noorendikus lämmatab kiirekasvuline lehtpuuvõsa (lepp, kask, paju) väärtuslikud okaspuutaimed. Tulemuseks on väheväärtuslik võsastik, mitte korralik palkmets. Kaotate tuleviku tulus."
    },
    {
      question: "Kas noorendike hoolduseks saab toetust?",
      answer: "Jah, Erametsakeskusest saab taotleda toetust kuni 30-aastase metsa hooldamiseks (valgustusraie). Toetuse määr on olnud ca 159 €/ha. Aitame toetuse vormistamisel."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Noorendike hooldus',
        'description': 'Professionaalne noorendike hooldus ja valgustusraie. Tagame metsa kiire kasvu ja kvaliteetse puidu tulevikus.',
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
            'name': 'Noorendike hooldus',
            'item': 'https://metsamaakler.ee/noorendike-hooldus/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Noorendike hooldus – Valgustusraie ja kultuuride hooldus",
    description: "Telli noorendike hooldus asjatundjatelt. Õigeaegne valgustusraie ja heina niitmine tagab elujõulise metsa. Küsi pakkumist ja uuri toetuste kohta.",
    canonical: "https://metsamaakler.ee/noorendike-hooldus/",
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
          title="Noorendike hooldus"
          subtitle="Tuleviku mets luuakse täna. Professionaalne hooldus esimestel kasvuaastatel on kriitilise tähtsusega, et tagada metsa väärtus ja tervis aastakümneteks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Noorendike hooldus", href: "/noorendike-hooldus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks noor mets vajab abi?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Looduslik konkurents on karm. Pärast metsa istutamist või looduslikku uuenemist algab võidujooks valguse ja toitainete pärast. Kiirekasvuline rohi ja lehtpuuvõsa (sarapuu, toomingas, lepp) kasvavad sageli noortest okaspuudest üle, võttes neilt elujõu.
                </p>

                <p className="mb-10 leading-[1.5]">
                  <strong>Noorendike hooldus</strong> on sisuliselt metsa koosseisu kujundamine. Me eemaldame segavad ja väheväärtuslikud taimed, et anda ruumi tuleviku palgipuudele (kuusk, mänd, kask).
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   
                   {/* Card 1: Kultuuride hooldus */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#347D4E] group-hover:scale-110 transition-transform duration-300">
                          <Sprout size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Kultuuride hooldus</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Väikeste (kuni 1,5m) taimede vabastamine heina ja vaarika varjust. Tehakse tavaliselt kettsae või võsalõikuriga.
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-[#347D4E] font-bold text-sm flex items-center gap-2">
                        <Clock size={16} /> Vanus: 1-4 aastat
                      </div>
                   </div>

                   {/* Card 2: Valgustusraie */}
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                          <Sun size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a0f00]">Valgustusraie</h3>
                      </div>
                      <p className="text-[#1a0f00]/70 mb-4 text-sm leading-relaxed flex-grow">
                        Liigilise koosseisu ja tiheduse reguleerimine. Eemaldatakse "metsaumbrohi", et põhiliik saaks valgust ja ruumi.
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-50 text-amber-600 font-bold text-sm flex items-center gap-2">
                        <Clock size={16} /> Vanus: 5-20 aastat
                      </div>
                   </div>

                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Hooldatud vs hooldamata mets
                </h2>
                
                {/* Comparison Visualization - Clean */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12 not-prose">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    
                    {/* Left: Hooldatud */}
                    <div className="p-8 hover:bg-green-50/50 transition-colors duration-200">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-green-100 rounded-lg text-[#347D4E]">
                           <CheckCircle2 size={24} />
                         </div>
                         <h3 className="font-bold text-lg text-[#1a0f00]">Hooldatud noorendik</h3>
                      </div>
                      <ul className="space-y-4">
                        <li className="flex gap-3 text-sm text-[#1a0f00]/70">
                          <CheckCircle2 className="text-[#347D4E] shrink-0" size={18} />
                          <span>Peapuuliik (nt kuusk) domineerib</span>
                        </li>
                        <li className="flex gap-3 text-sm text-[#1a0f00]/70">
                          <CheckCircle2 className="text-[#347D4E] shrink-0" size={18} />
                          <span>Tüved on sirged ja tugevad</span>
                        </li>
                        <li className="flex gap-3 text-sm text-[#1a0f00]/70">
                          <CheckCircle2 className="text-[#347D4E] shrink-0" size={18} />
                          <span>Metsa väärtus kasvab kiiresti</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right: Hooldamata */}
                    <div className="p-8 hover:bg-red-50/50 transition-colors duration-200">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-red-100 rounded-lg text-red-600">
                           <XCircle size={24} />
                         </div>
                         <h3 className="font-bold text-lg text-[#1a0f00]">Hooldamata padrik</h3>
                      </div>
                      <ul className="space-y-4">
                        <li className="flex gap-3 text-sm text-[#1a0f00]/70">
                          <XCircle className="text-red-500 shrink-0" size={18} />
                          <span>Väärtuslikud puud känguvad varjus</span>
                        </li>
                        <li className="flex gap-3 text-sm text-[#1a0f00]/70">
                          <XCircle className="text-red-500 shrink-0" size={18} />
                          <span>Domineerib väheväärtuslik võsa</span>
                        </li>
                        <li className="flex gap-3 text-sm text-[#1a0f00]/70">
                          <XCircle className="text-red-500 shrink-0" size={18} />
                          <span>Tulevikus ainult küttepuu hind</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Info Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Toetus aitab kulusid katta</strong>
                    Riik soosib noore metsa hooldamist. Kuni 30-aastase metsa valgustusraieks on võimalik taotleda toetust, mis katab olulise osa töö maksumusest. Küsi meilt lisa!
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
                    <a href="/metsa-istutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa istutamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Pane alus uuele metsale.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/valgustusraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sun size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Valgustusraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Detailsem info raieliigi kohta.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsatoad/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Trees size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Kõik metsatööd
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Terviklik metsahooldus.
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
                    Ära lase võsal võimust võtta. Telli noorendike hooldus meilt ja kindlusta oma metsa tulevik.
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
