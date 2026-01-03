import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Axe, 
  Sun, 
  Droplets, 
  Zap, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Scissors, 
  Phone,
  Mail,
  ChevronRight,
  Info,
  TreePine,
  Hammer
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const VosaLoikusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Millal on õige aeg võsa lõigata?",
      answer: "Võsa võib lõigata aastaringselt, kuid kõige efektiivsem on seda teha puhkeperioodil (sügis-talv), kui lehti pole. Siis on nähtavus parem ja juurestik kurnatum, mis vähendab uue võsa pealekasvu kiirust."
    },
    {
      question: "Mis vahe on valgustusraiel ja võsalõikusel?",
      answer: "Valgustusraie on spetsiifiline võsalõikuse liik noorendikus, mille eesmärk on vabastada tulevikupuud konkurentsist. Üldine võsalõikus võib hõlmata ka kraavikallaste, teeäärte või liinialuste puhastamist, kus eesmärgiks on lihtsalt ala avatuna hoidmine."
    },
    {
      question: "Kui palju maksab hektari puhastamine?",
      answer: "Hind sõltub võsa tihedusest, läbimõõdust ja maastiku keerukusest. Keskmine hind jääb vahemikku 250-450 €/ha, kuid täpse pakkumise saamiseks on vaja objekt üle vaadata."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Võsalõikus ja metsaaluste puhastamine',
        'description': 'Professionaalne võsalõikuse teenus: noorendike hooldus, kraavide ja teeäärte puhastamine. Telli kogenud töömehed.',
        'provider': {
          '@type': 'Organization',
          'name': 'Metsamaakler'
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
            'name': 'Võsalõikus',
            'item': 'https://metsamaakler.ee/vosaloikus/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Võsalõikus – Noorendike ja kraavide hooldus | Metsamaakler",
    description: "Võsalõikus parandab metsa valgustingimusi ja hoiab kraavid toimivana. Pakume professionaalset puhastusteenust üle Eesti.",
    canonical: "https://metsamaakler.ee/vosaloikus/",
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
          title="Võsalõikus"
          subtitle="Õigeaegne võsalõikus on investeering metsa tervisesse. See annab väärtuslikele puudele ruumi kasvada ja hoiab kinnistu heakorras."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Võsalõikus", href: "/vosaloikus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks on võsalõikus vajalik?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Võsa on metsas nagu umbrohi peenras – see kasvab kiiresti ja agressiivselt, võttes ära valguse ja toitained aeglasema kasvuga väärispuudelt (kuusk, mänd, kask, tamm).
                </p>

                <p className="mb-10 leading-[1.5]">
                  Regulaarne võsalõikus ei ole ainult esteetika küsimus. See on hädavajalik metsamajanduslik võte, mis tagab, et Sinu metsast kasvab kunagi kvaliteetne ja raieküps puistu, mitte läbitungimatu rägastik.
                </p>

                {/* Benefits Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Võsalõikuse liigid ja kasud
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Valgustingimuste parandamine", 
                      desc: "Noorendikes eemaldatakse kiirekasvuline lehtpuuvõsa (paju, sarapuu), et see ei lämmataks istutatud puid. See kiirendab metsa kasvu oluliselt.",
                      icon: Sun
                    },
                    { 
                      title: "Kraavide ja kallaste hooldus", 
                      desc: "Kraavikallastele kasvanud võsa takistab veevoolu. Puhastatud kraavid tagavad liigniiskuse äravoolu ja hoiavad metsaaluse kuivemana.",
                      icon: Droplets
                    },
                    { 
                      title: "Liinialused ja teeääred", 
                      desc: "Elektri- ja sideliinide alused tuleb hoida puhtana ohutuse tagamiseks. Teeäärte puhastamine parandab nähtavust.",
                      icon: Zap
                    },
                    { 
                      title: "Põlluäärte puhastamine", 
                      desc: "Võsastunud põlluservad vähendavad kasulikku põllupinda. Puhastamine taastab põllu piirid ja suurendab saagikust servades.",
                      icon: Axe
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
                  Kuidas tööd tehakse?
                </h2>
                
                {/* Process List - Visual */}
                <div className="space-y-4 not-prose mb-12">
                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Scissors size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Käsitsi (Võsalõikurid)</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed">
                        Kõige levinum meetod metsas. Töömees liigub võsalõikuriga puude vahel, valides hoolikalt, mida lõigata ja mida jätta. Parim kvaliteet noorendike hooldamisel.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 transition-colors">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Hammer size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Mehhaniseeritult (Giljotiinid)</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed">
                        Kasutatakse suurema ja jämedama võsa korral (nt kraavikallastel või söötis põldudel). Ekskavaatorile kinnitatud giljotiin lõikab puud ja kogub need kokku.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Funding Block */}
                <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#347D4E]/10 my-12 not-prose flex gap-4">
                  <div className="shrink-0 mt-1 text-[#347D4E]">
                    <Info size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] mb-1">Kas ma saan toetust?</h3>
                    <p className="text-[#1a0f00]/70 m-0 text-sm leading-relaxed">
                      Jah, Erametsakeskus maksab toetust noore metsa hooldamiseks (kuni 30-aastases metsas). Toetuse saamiseks peab olema kehtiv metsamajandamiskava.
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
                        Noorendiku hooldus.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/kraavide-hooldus/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Droplets size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Kraavide hooldus
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Metsakuivendus.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <TreePine size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Toetuste alus.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Võsa kasvab üle pea?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Meie kogenud mehed teevad platsi puhtaks kiirelt ja korralikult. Küsi pakkumist.
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
                      Telli võsalõikus
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
