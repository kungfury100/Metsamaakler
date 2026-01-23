import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Trees, 
  Axe, 
  TrendingUp, 
  Sun, 
  Wind, 
  ArrowRight, 
  Euro,
  Phone,
  Mail,
  ChevronRight,
  Info,
  CheckCircle2,
  TreePine,
  Sprout,
  AlertTriangle,
  Leaf
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const HarvendusraiePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Millal on õige aeg harvendusraieks?",
      answer: "Harvendusraiet tehakse tavaliselt keskealises metsas (30–60 aastat), kui puude võrad on kokku kasvanud ja valguskonkurents on suur. Täpse vajaduse määrab metsaspetsialist või metsakorralduskava."
    },
    {
      question: "Kas harvendusraie on tulus?",
      answer: "Harvendusraie annab metsaomanikule tulu (paberipuu ja küttepuit), kuid peamine kasum tuleb tulevikus. Õigeaegne harvendus võib tõsta lõppraie väärtust 15–20% tänu jämedamale palgile."
    },
    {
      question: "Kas harvendusraie suurendab tormiohtu?",
      answer: "Vahetult pärast raiet võib mets olla tormidele veidi vastuvõtlikum, sest tuul pääseb puude vahele. Seetõttu ei tohi metsa liiga hõredaks raiuda. Aja jooksul muutuvad aga allesjäänud puud tugevamaks ja tormikindlamaks."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Harvendusraie',
        'description': 'Mis on harvendusraie ja miks see on vajalik? Info metsa kasvutingimuste parandamisest, tulust ja õigest ajastusest.',
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
            'name': 'Harvendusraie',
            'item': 'https://metsamaakler.ee/harvendusraie/'
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
    title: "Harvendusraie – Metsa väärtuse kasvatamine | Metsamaakler",
    description: "Miks teha harvendusraiet? See parandab metsa valgustingimusi, kiirendab väärtusliku palgi kasvu ja annab vahetulu. Loe lähemalt.",
    canonical: "https://metsamaakler.ee/harvendusraie/",
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
          title="Harvendusraie"
          subtitle="Harvendusraie on investeering metsa tulevikuväärtusesse. Anname parimatele puudele ruumi kasvada, et saaksid tulevikus kvaliteetset palki."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Harvendusraie", href: "/harvendusraie/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on harvendusraie eesmärk?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsa kasvades muutub puude vaheline konkurents valguse ja toitainete pärast järjest tihedamaks. Nõrgemad puud jäävad kängu ja surevad, takistades samal ajal tugevamate kasvu.
                </p>

                <p className="mb-10 leading-[1.5]">
                  <strong>Harvendusraie</strong> on hooldusraie liik, mille käigus eemaldatakse metsast kehvema kvaliteediga, haiged või kasvus järele jäänud puud, et anda "tulevikupuudele" rohkem kasvuruumi. See on nagu porgandipeenra harvendamine – kui harvendad õigesti, saad suured ja mahlakad porgandid.
                </p>

                {/* Benefits Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Miks on harvendusraie kasulik?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Rohkem valgust ja toitu", 
                      desc: "Allesjäänud puude võrad saavad rohkem valgust ja juured toitaineid. See kiirendab jämeduskasvu, mis tähendab tulevikus rohkem kallist palki.",
                      icon: Sun
                    },
                    { 
                      title: "Vahetulu omanikule", 
                      desc: "Harvendusraie annab müügikõlblikku materjali (paberipuu, küttepuu), mis katab raiekulud ja toob omanikule vahetulu.",
                      icon: Euro
                    },
                    { 
                      title: "Metsa sanitaarne seisund", 
                      desc: "Välja raiutakse haiged ja vigastatud puud. See vähendab metsakahjurite ja seenhaiguste leviku ohtu.",
                      icon: TrendingUp
                    },
                    { 
                      title: "Liigiline koosseis", 
                      desc: "Saab kujundada metsa liigilist koosseisu, eelistades väärtuslikumaid puuliike (nt kask, kuusk) vähemväärtuslike arvelt.",
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
                  Mida silmas pidada?
                </h2>
                <p className="mb-6">
                  Harvendusraie on vastutusrikas töö. Valesti tehtud raie võib metsa jäädavalt kahjustada.
                </p>
                
                {/* Process List - Enhanced Visuals */}
                <div className="space-y-4 not-prose mb-12">
                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-amber-50 rounded-full text-amber-600 group-hover:bg-amber-100 transition-colors duration-200">
                      <AlertTriangle size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Ära hiline</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Kui harvendusraiega hilineda, on puude võrad juba liiga väikeseks jäänud ja nad ei suuda enam piisavalt jämedust kasvatada.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">
                      <Wind size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Rinnaspindala ja täius</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Seadus määrab piirid, kui hõredaks tohib metsa raiuda. Liiga hõre mets ei kasuta kasvupotentsiaali ära ja on tormiohtlik.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-green-50 rounded-full text-[#347D4E] group-hover:bg-[#347D4E] group-hover:text-white transition-colors duration-200">
                      <CheckCircle2 size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Kvaliteetne töö</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Oluline on mitte vigastada kasvama jäävaid puid ja vältida sügavaid roopaid maapinnal. Kasutame professionaalseid operaatoreid.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Fact Block */}
                <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#347D4E]/10 my-12 not-prose flex gap-5 items-start">
                  <div className="shrink-0 mt-1 text-[#347D4E]">
                    <TrendingUp size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163823] text-lg mb-2">Tulevikuväärtus</h3>
                    <p className="text-[#1a0f00]/70 m-0 text-sm leading-relaxed">
                      Uuringud näitavad, et hooldatud mets võib lõppraie eas anda 15–20% rohkem tulu kui hooldamata mets, sest seal on rohkem jämedat ja kvaliteetset palki.
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
                        Noore metsa hooldus.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/uuendusraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Leaf size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Uuendusraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Küpse metsa raie.
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
                        Raiete planeerimine.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Mets vajab harvendamist?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Metsamaakler aitab hinnata metsa seisukorda ja teostada tööd parima hinnaga. Küsi pakkumist.
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
