import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Trees, 
  Wind, 
  Sprout, 
  Sun, 
  Clock, 
  Shield, 
  HelpCircle, 
  ArrowRight, 
  LayoutGrid, 
  GripVertical, 
  GripHorizontal,
  Phone,
  Mail,
  ChevronRight,
  Info,
  Leaf
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const TurberaiePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui kaua turberaie protsess kestab?",
      answer: "Turberaie on pikaajaline protsess, mis kestab tavaliselt 10–20 aastat. Selle aja jooksul tehakse mitu raiejärku, kuni vana mets on täielikult asendunud uue põlvkonnaga."
    },
    {
      question: "Kas turberaie järel tuleb metsa istutada?",
      answer: "Turberaie peamine eesmärk on looduslik uuenemine – vanad puud külvavad seemned ja pakuvad noortele taimedele kaitset. Siiski võib osutuda vajalikuks maapinna mineraliseerimine või lisaplantimine, kui looduslik uuendus on ebaühtlane."
    },
    {
      question: "Miks mitte teha lihtsalt lageraiet?",
      answer: "Turberaie on loodussõbralikum ja sotsiaalselt vastuvõetavam. See sobib hästi puhkemetsadesse, kaitsealadele või koduümbruse metsadesse, kus on oluline säilitada metsa ilme ja kaitsta pinnast."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Turberaie',
        'description': 'Mis on turberaie? Aegjärkne raie, häilraie ja veerraie. Looduslähedane viis metsa uuendamiseks vana metsa turbe all.',
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
            'name': 'Turberaie',
            'item': 'https://metsamaakler.ee/turberaie/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Turberaie – Aegjärkne, häil- ja veerraie | Metsamaakler",
    description: "Turberaie on metsa uuendamise viis, kus uus põlvkond kasvab vana metsa kaitse all. Loe lähemalt aegjärksest raiest, häilraiest ja veerraiest.",
    canonical: "https://metsamaakler.ee/turberaie/",
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
          title="Turberaie"
          subtitle="Tark kesktee lageraie ja valikraie vahel. Turberaie võimaldab kasvatada uut metsapõlve vana metsa kaitsva katuse all, säilitades metsa ilme pikkadeks aastateks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Turberaie", href: "/turberaie/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on turberaie?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Turberaie</strong> on uuendusraie liik, mida tehakse perioodi jooksul korduvate raietega. Vana metsa ei raiuta maha korraga (nagu lageraie puhul), vaid järk-järgult.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Selle eesmärk on võimaldada uuel metsapõlvel tekkida ja kasvada vanade puude "turbe" ehk kaitse all. Vana mets pakub noortele taimedele seemneid, varju liigse päikese eest ning kaitset tuule ja külma eest.
                </p>

                {/* Types Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Turberaie liigid
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Aegjärkne raie", 
                      desc: "Metsa hõrendatakse ühtlaselt üle kogu ala. Puid raiutakse hajusalt, jättes alles ühtlase võrastiku.",
                      icon: LayoutGrid
                    },
                    { 
                      title: "Häilraie", 
                      desc: "Raiutakse sisse väikesed lagedad grupid ehk 'häilud'. Aja jooksul häile laiendatakse servadest.",
                      icon: GripHorizontal
                    },
                    { 
                      title: "Veerraie", 
                      desc: "Metsa raiutakse kitsaste ribade kaupa servast serva liikudes. Järgmine riba raiutakse siis, kui eelmisel on uuendus tekkinud.",
                      icon: GripVertical
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
                  Miks valida turberaie?
                </h2>
                
                {/* Benefits List - Visual */}
                <div className="space-y-4 not-prose mb-12">
                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Sprout size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Looduslik uuenemine</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed">
                        Turberaie kasutab ära looduse enda jõudu. Puid ei pea istutama, sest seemned tulevad vanadelt puudelt. See säästab kulusid.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Shield size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Stabiilne mikrokliima</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed">
                        Vana mets kaitseb noori puid äärmuslike temperatuuride, öökülmade ja tugeva tuule eest. Samuti püsib mullas parem niiskus.
                      </p>
                    </div>
                  </div>

                   <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Leaf size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Visuaalne ilu</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed">
                        Mets ei muutu kunagi täiesti lagedaks kännustikuks. See on oluline argument puhkemetsades ja koduümbruses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Warning Block */}
                <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 my-12 not-prose flex gap-4">
                  <div className="shrink-0 mt-1 text-amber-600">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] mb-1">Ajakulukas protsess</h3>
                    <p className="text-gray-700 m-0 text-sm leading-relaxed">
                      Turberaie nõuab kannatust. Tulu jaotub 10–20 aasta peale. Samuti on raietööd keerukamad kui lageraie puhul, sest tuleb vältida jäävate puude vigastamist.
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
                    <a href="/uuendusraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Leaf size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Uuendusraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Ülevaade kõigist raieliikidest.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-uuendamise-toetus/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa uuendamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Toetused istutamiseks.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsamajandamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Trees size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsamajandus
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Terviklik lähenemine.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Kas turberaie sobib?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Metsamaakler aitab hinnata metsa seisukorda ja otsustada, kas turberaie on mõistlik.
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
