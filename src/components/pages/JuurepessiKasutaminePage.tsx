import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Biohazard, 
  SprayCan, 
  Sprout, 
  ShieldAlert, 
  Calendar, 
  ArrowRight, 
  TreePine,
  Phone,
  Mail,
  ChevronRight,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const JuurepessiKasutaminePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis on Rotstop?",
      answer: "Rotstop on biopreparaat, mis sisaldab hiidkooriku (Phlebiopsis gigantea) eoseid. See seen on juurepessu looduslik konkurent, mis asustab värske kännupinna ja takistab juurepessu seene sisenemist."
    },
    {
      question: "Millal on kännude töötlemine kohustuslik?",
      answer: "Eestis on okaspuumetsades (kuusikud ja männikud) raietöödel kännude töötlemine kohustuslik soojal ajal, kui ööpäevane keskmine temperatuur on üle +5 °C (tavaliselt aprillist novembrini)."
    },
    {
      question: "Kas juurepessust saab täielikult lahti?",
      answer: "Kui juurepess on juba metsa sees (levinud juurekontaktide kaudu), on sellest väga raske vabaneda. Seetõttu ongi ennetamine (värskete kändude töötlemine) kriitilise tähtsusega, et haigus ei pääseks uutesse puistutesse."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Juurepessu tõrje',
        'description': 'Kuidas kaitsta metsa juurepessu eest? Kändude töötlemine Rotstopiga ja ennetusmeetmed raietöödel.',
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
            'name': 'Juurepessu tõrje',
            'item': 'https://metsamaakler.ee/juurepessi-kasutamine/'
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
    title: "Juurepessu tõrje – Kännude töötlemine ja Rotstop | Metsamaakler",
    description: "Juurepess on ohtlik metsahaigus. Loe, kuidas kaitsta oma metsa kändude töötlemisega raietööde käigus. Rotstopi kasutamine ja nõuded.",
    canonical: "https://metsamaakler.ee/juurepessi-kasutamine/",
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
          title="Juurepessu tõrje"
          subtitle="Juurepess on okaspuumetsade salakaval vaenlane. Selle tõrjumine raietööde käigus on lihtsaim ja odavaim viis hoida oma mets tervena."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Juurepessu tõrje", href: "/juurepessi-kasutamine/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on juurepess?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Juurepess</strong> (<em>Heterobasidion annosum</em>) on seenhaigus, mis põhjustab okaspuude juure- ja tüvemädanikku. See on üks majanduslikult kahjulikumaid haigusi Eesti metsades, eriti kuusikutes ja männikutes.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Haigus levib kahel viisil:
                  <br />
                  1. <strong>Eostega õhu kaudu:</strong> Eosed langevad värsketele kändudele, idanevad ja seeneniidistik tungib juurtesse.
                  <br />
                  2. <strong>Juurekontaktide kaudu:</strong> Nakatunud puu juured annavad haiguse edasi naaberpuudele mulla all.
                </p>

                {/* Methods Grid */}
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Miks ja kuidas teha tõrjet?
                </h2>
                <p className="mb-6">
                  Kõige tõhusam hetk juurepessu peatamiseks on raietööde ajal. Kui me kaitseme värsket kännupinda, ei saa haigus metsa siseneda.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { 
                      title: "Bioloogiline tõrje (Rotstop)", 
                      desc: "Värskele kännule pritsitakse Rotstopi lahust. See 'hea seen' vallutab kännu pinna enne juurepessu ja ei lase pahalasel kasvama hakata.",
                      icon: SprayCan
                    },
                    { 
                      title: "Keemiline tõrje (Karbamiid)", 
                      desc: "Kände võib töödelda karbamiidilahusega (uurea). See muudab kännu pinna pH-taset nii, et juurepessu eosed ei suuda seal idaneda.",
                      icon: Biohazard
                    },
                    { 
                      title: "Puuliigi vahetus", 
                      desc: "Kui mets on juba tugevalt kahjustatud, on ainus lahendus vahetada puuliiki – istutada okaspuude asemele lehtpuid (nt kask).",
                      icon: TreePine
                    },
                    { 
                      title: "Talvine raie", 
                      desc: "Külmal ajal, kui temperatuur on püsivalt alla nulli, juurepessu eosed ei levi. Seetõttu on talvine raie looduslikult kõige ohutum viis.",
                      icon: Calendar
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
                  Nõuded metsaomanikule
                </h2>
                
                {/* Requirements List - Visual */}
                <div className="space-y-4 not-prose mb-12">
                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-red-50 rounded-full text-red-600 group-hover:bg-red-100 transition-colors duration-200">
                      <ShieldAlert size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Kohustuslik tõrje</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Kuusikute ja männikute harvendus- ja lageraietel on kännude töötlemine kohustuslik perioodil, mil ööpäevane keskmine temperatuur on üle +5 kraadi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="shrink-0 mt-1 p-3 bg-green-50 rounded-full text-[#347D4E] group-hover:bg-green-100 transition-colors duration-200">
                      <Sprout size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">Kuidas seda tehakse?</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                        Tänapäeval teeb harvester (langetustraktor) seda tööd automaatselt. Saeplaadi juures on düüsid, mis pritsivad kännule kaitsevahendit kohe langetamise hetkel.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Alert Block */}
                <div className="bg-[#FFFBF0] p-8 rounded-xl border border-[#FDE68A] my-12 not-prose flex gap-5 items-start">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <AlertTriangle size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#92400E] text-lg mb-2">Tervisekontroll</h3>
                    <p className="text-[#92400E]/80 m-0 text-sm leading-relaxed">
                      Kui plaanid raietöid soojal ajal, veendu kindlasti, et tööde teostaja kasutab kännukaitsevahendit. Ilma selleta riskid oma (ja naabrite) metsa pikaajalise haigestumisega.
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
                    <a href="/harvendusraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <TreePine size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Harvendusraie
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Hooldusraie liik.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/uuendusraie/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
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
                  
                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Soovid kindlustunnet?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Metsamaakler teostab raietöid vastutustundlikult. Kasutame suvisel perioodil alati juurepessutõrjet.
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
                      Telli metsatööd
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
