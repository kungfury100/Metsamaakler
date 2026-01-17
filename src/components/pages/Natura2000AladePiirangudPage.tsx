import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  ShieldAlert, 
  Bird, 
  Euro, 
  Ban, 
  TreeDeciduous, 
  Info, 
  ArrowRight, 
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  Leaf,
  Sprout,
  Coins
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const Natura2000AladePiirangudPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kas Natura alal tohib üldse metsa raiuda?",
      answer: "Jah ja ei. Sihtkaitsevööndis on majandustegevus keelatud. Piiranguvööndis on see lubatud, kuid kehtivad piirangud (nt lageraie keeld või langi suuruse piirang)."
    },
    {
      question: "Kui suur on Natura metsa toetus?",
      answer: "Toetuse määrad muutuvad, kuid üldjuhul makstakse sihtkaitsevööndis rangete piirangute eest kõrgemat toetust (u 134 €/ha) ja piiranguvööndis madalamat (u 60 €/ha)."
    },
    {
      question: "Kas Natura metsa saab müüa?",
      answer: "Jah, Natura metsa saab vabalt osta ja müüa. See on väärtuslik investeering tänu stabiilsele toetustulule, isegi kui puitu raiuda ei saa."
    },
    {
      question: "Mis on linnurahu?",
      answer: "Linnurahu on periood (15. aprill – 15. juuli), mil metsaraiet ei tehta. Natura aladel on see nõue sageli kohustuslik."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Natura 2000 alade piirangud',
        'description': 'Mida tähendab metsaomanikule Natura 2000 ala? Ülevaade piirangutest, sihtkaitsevööndist, piiranguvööndist ja makstavatest kompensatsioonidest.',
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
            'name': 'Natura 2000 piirangud',
            'item': 'https://metsamaakler.ee/natura-2000-alade-piirangud/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Natura 2000 alade piirangud ja toetused | Metsamaakler",
    description: "Sinu mets asub Natura 2000 alal? Loe, millised piirangud kehtivad sihtkaitsevööndis ja piiranguvööndis ning millist hüvitist on võimalik taotleda.",
    canonical: "https://metsamaakler.ee/natura-2000-alade-piirangud/",
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
          title="Natura 2000 piirangud"
          subtitle="Natura 2000 on üle-euroopaline kaitsealade võrgustik. Metsaomanikule tähendab see sageli piiranguid, aga ka stabiilset iga-aastast tulu."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Natura 2000 piirangud", href: "/natura-2000-alade-piirangud/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on Natura 2000?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Natura 2000</strong> on Euroopa Liidu algatusel loodud kaitsealade võrgustik, mille eesmärk on säilitada haruldasi ja ohustatud liike ning nende elupaiku. Eestis katab see võrgustik märkimisväärse osa metsamaadest.
                </p>

                <p className="mb-10 leading-[1.5]">
                   Metsaomaniku jaoks on oluline teada, et Natura ala ei tähenda alati täielikku majanduskeeldu. Piirangute rangus sõltub konkreetsest vööndist.
                </p>

                {/* Zones Comparison Grid - Visual Cards */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Vööndid ja piirangud
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                  {/* Sihtkaitsevöönd Card */}
                  <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 hover:border-red-200 hover:shadow-lg transition-all duration-200 ease-out group">
                    <div className="mb-6 text-red-600 group-hover:scale-105 transition-transform duration-200">
                      <Ban size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a0f00] mb-2">Sihtkaitsevöönd</h3>
                    <p className="text-sm text-[#1a0f00]/60 mb-6 leading-relaxed">
                      Kõige rangem kaitserežiim. Looduslik seisund peab säilima puutumatuna.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-[#1a0f00]/80">
                        <CheckCircle2 size={18} className="text-red-600 mt-0.5 shrink-0" />
                        <span>Majandustegevus keelatud</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-[#1a0f00]/80">
                        <CheckCircle2 size={18} className="text-red-600 mt-0.5 shrink-0" />
                        <span>Kõrgem toetus (u 134 €/ha)</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Piiranguvöönd Card */}
                  <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100 hover:border-green-200 hover:shadow-lg transition-all duration-200 ease-out group">
                    <div className="mb-6 text-green-600 group-hover:scale-105 transition-transform duration-200">
                      <TreeDeciduous size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a0f00] mb-2">Piiranguvöönd</h3>
                    <p className="text-sm text-[#1a0f00]/60 mb-6 leading-relaxed">
                      Leebem režiim. Majandamine on lubatud, kui see ei kahjusta kaitse-eesmärke.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-[#1a0f00]/80">
                        <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                        <span>Lageraie piiratud (langi suurus)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-[#1a0f00]/80">
                        <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                        <span>Madalam toetus (u 60 €/ha)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Metsamajandamise eripärad
                </h2>

                {/* Features Grid - Clean Icons */}
                <div className="grid grid-cols-1 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Linnurahu ja liigikaitse", 
                      desc: "Natura aladel on eriti oluline jälgida lindude pesitsusrahu (15. aprill – 15. juuli). Kaitsealuse liigi leidmisel võidakse kehtestada püsielupaik.",
                      icon: Bird,
                      color: "text-blue-600"
                    },
                    { 
                      title: "Keskkonnamõjude hindamine", 
                      desc: "Enne raieteatise kinnitamist teeb Keskkonnaamet eelhindamise. Kui tegevus ohustab kaitse-eesmärke, võidakse nõuda põhjalikumat hindamist.", 
                      icon: ShieldAlert,
                      color: "text-amber-600"
                    },
                    { 
                      title: "Natura metsa toetus", 
                      desc: "Piirangute kompenseerimiseks maksab riik iga-aastast toetust. Toetuse saamiseks peab ala olema Natura 2000 võrgustikus.", 
                      icon: Euro,
                      color: "text-emerald-600"
                    }
                   ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group">
                      <div className={`mt-1 ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a0f00] text-lg mb-2">{item.title}</h4>
                        <p className="text-[#1a0f00]/70 text-[15px] leading-relaxed m-0">{item.desc}</p>
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
                    <strong className="block text-[#B45309] mb-2 text-base">Kas teadsid?</strong>
                    Natura 2000 ala ei teki üleöö – see määratakse riiklikult. Kui sinu metsa leitakse uus kaitsealune liik, võidakse kaitsekorda muuta. Sellisel juhul on sul õigus nõuda piirangute kompenseerimist.
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mida teha Natura metsaga?
                </h2>
                <p className="mb-8 leading-[1.5]">
                  Natura mets ei ole "kasutu maa". Sellel on mitmeid väärtusi, mida tasub silmas pidada:
                </p>

                {/* Value Cards - Clean */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:border-[#347D4E]/30 hover:shadow-md transition-all duration-200 group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 text-green-600 rounded-full mb-4 group-hover:bg-green-100 transition-colors">
                      <Coins size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#1a0f00] mb-2">Stabiilne tulu</h4>
                    <p className="text-sm text-[#1a0f00]/60">Iga-aastane toetus on garanteeritud, sõltumata puiduhinnast.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:border-[#347D4E]/30 hover:shadow-md transition-all duration-200 group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
                      <Sprout size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#1a0f00] mb-2">Müügiväärtus</h4>
                    <p className="text-sm text-[#1a0f00]/60">Fondid hindavad Natura maid kõrgelt just stabiilse tootluse tõttu.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:border-[#347D4E]/30 hover:shadow-md transition-all duration-200 group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 text-amber-600 rounded-full mb-4 group-hover:bg-amber-100 transition-colors">
                      <Leaf size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#1a0f00] mb-2">Loodusväärtus</h4>
                    <p className="text-sm text-[#1a0f00]/60">Isiklik panus Eesti liigirikkuse ja looduse säilimisse.</p>
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
                    <a href="/metsa-hind/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Euro size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hind
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas kujuneb Natura metsa hind?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsakinnistu-muuk/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakinnistu müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Müüge oma Natura mets parima hinnaga.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Ban size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kava aitab tuvastada piirangud.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Müüd Natura metsa?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Ostame Natura 2000 sihtkaitse- ja piiranguvööndi metsi. Küsi pakkumist!
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
