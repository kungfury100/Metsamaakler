import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Sprout, 
  Trees, 
  Axe, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  Leaf, 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  Calendar,
  Map as MapIcon,
  BadgeEuro,
  FileSignature
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsamajandusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis on metsamajandamiskava ja kas see on kohustuslik?",
      answer: "Metsamajandamiskava on dokument, mis annab ülevaate metsa seisundist ja soovitab töid. See on kohustuslik, kui soovite teha raieid (üle 20 tm aastas) või taotleda toetusi."
    },
    {
      question: "Millal tuleb teha valgustusraiet?",
      answer: "Valgustusraie tehakse noorendikus (10–20 a vanuses), et vabastada tulevikupuud (nt kuused või männid) neid lämmatavast lehtvõsast. Hilinemine võib metsa väärtust oluliselt vähendada."
    },
    {
      question: "Kas ma võin oma metsas raiuda millal tahan?",
      answer: "Ei. Vajalik on kehtiv metsakava ja registreeritud metsateatis. Samuti tuleb arvestada lindude pesitsusrahuga (kevadel-suvel), mil raied on piiratud."
    },
    {
      question: "Mis vahe on lageraiel ja turberaiel?",
      answer: "Lageraie on uue metsa rajamiseks kõige efektiivsem – vana mets raiutakse lankidena. Turberaie on aeglasem protsess, kus puid raiutakse järk-järgult, võimaldades looduslikku uuenemist vana metsa all."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsamajanduse täisteenus',
        'description': 'Professionaalne metsamajandus: kavad, raied, istutamine ja hooldus. Sinu metsaomaniku käsiraamat.',
        'provider': {
          '@type': 'Organization',
          'name': 'Metsamaakler',
          'image': 'https://metsamaakler.ee/logo.png',
          'telephone': '+37255555555',
          'email': 'info@eestimetsamaakler.ee',
          'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'EE'
          }
        }
      },
      {
        '@type': 'Article',
        'headline': 'Metsamajanduse käsiraamat – kiirülevaade omanikule',
        'description': 'Põhjalik juhend metsa majandamiseks. Loe metsakavadest, hooldusraietest, uuendamisest ja seadusandlusest.',
        'author': {
          '@type': 'Organization',
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
            'name': 'Metsamajandus',
            'item': 'https://metsamaakler.ee/metsamajandus/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Metsamajandus – Omaniku käsiraamat ja teenused | Metsamaakler",
    description: "Kõik metsa majandamisest ühes kohas: planeerimine, raied, istutamine ja hooldus. Loe põhjalikku juhendit metsaomanikule.",
    canonical: "https://metsamaakler.ee/metsamajandus/",
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
          title="Metsamajandus"
          subtitle="Mets ei kasva vaid iseendale – ta vajab peremehekätt. Siin on sinu teejuht targa ja jätkusuutliku metsanduse maailma."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsamajandus", href: "/metsamajandus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Tarkusest võrsuv tulu ja elurikkus
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsa omamine on privileeg, kuid see toob kaasa ka vastutuse. Paljud värsked metsaomanikud arvavad ekslikult, et mets on midagi, mis "lihtsalt on". Tegelikkuses on <strong>metsamajandus</strong> aktiivne protsess.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Jätkusuutlikult majandatud mets seob rohkem süsinikku, pakub kvaliteetsemat puitu ja on vastupidavam tormidele ning haigustele. Oleme koostanud selle lehe kui <strong>metsaomaniku kiir-käsiraamatu</strong>, et aidata teil teha otsuseid, mis teenivad tulu nii täna kui ka tulevikus.
                </p>

                {/* Lifecycle Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { title: "1. Planeerimine", desc: "Inventeerimine ja metsamajandamiskava koostamine.", icon: FileText },
                    { title: "2. Uuendamine", desc: "Maapinna ettevalmistus ja uute puude istutamine.", icon: Sprout },
                    { title: "3. Kasvatamine", desc: "Valgustus- ja harvendusraied kvaliteedi tõstmiseks.", icon: Trees },
                    { title: "4. Küpsus", desc: "Lõppraie ja tulu realiseerimine uue ringi alguseks.", icon: Axe }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/60 m-0">{item.desc}</p>
                    </div>
                   ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  1. Kõik algab plaanist
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Metsamajandamiskava (lühidalt metsakava) on metsa pass ja tegevusjuhend üheskoos. Ilma selleta on majandamine sisuliselt külmutatud.
                </p>

                <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#347D4E]/10 mb-10 not-prose">
                  <h4 className="font-bold text-[#1a0f00] text-lg mb-4 flex items-center gap-2">
                    Mida kava sisaldab?
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 text-[#347D4E] shrink-0"><CheckCircle2 size={20} /></div>
                      <span className="text-[#1a0f00]/70 text-sm leading-relaxed"><strong>Ressursi kirjeldus:</strong> Kui palju puitu on? Mis liigid? Kui vanad on puud?</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 text-[#347D4E] shrink-0"><CheckCircle2 size={20} /></div>
                      <span className="text-[#1a0f00]/70 text-sm leading-relaxed"><strong>Soovituslikud tööd:</strong> Kus harvendada, kus teha valgustusraiet ja millised metsad on raieküpsed.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 text-[#347D4E] shrink-0"><CheckCircle2 size={20} /></div>
                      <span className="text-[#1a0f00]/70 text-sm leading-relaxed"><strong>Kitsendused:</strong> Kaardistatakse vääriselupaigad, kaitsevööndid ja piirangud.</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  2. Keskealine mets ja harvendusraie
                </h2>
                <p className="mb-6 leading-[1.5]">
                   Kui puud hakkavad üksteist segama, tuleb teha harvendusraiet. See on nagu porgandipeenra harvendamine – alles jäävad tugevaimad.
                </p>

                <div className="flex flex-col md:flex-row gap-8 mb-10 not-prose items-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-full md:w-1/2">
                    <h4 className="font-bold text-[#1a0f00] text-lg mb-3">Miks harvendada?</h4>
                    <p className="text-[#1a0f00]/70 text-sm leading-relaxed mb-0">
                      Harvendusraiega võetakse välja vigased ja mahajäänud kasvuga puud. Alles jäetakse "eliit" – kõige sirgemad ja tugevamad puud, millel on ruumi paisuda jämedaks palgiks.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 bg-[#F8FAF9] p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="text-[#347D4E]" size={24} />
                      <span className="font-bold text-[#1a0f00]">Majanduslik efekt</span>
                    </div>
                    <p className="text-sm text-[#1a0f00]/60 mb-0 leading-relaxed">
                      Harvendatud mets saavutab raieküpsuse 10-20 aastat varem ja annab rohkem kallist palki. See on investeering väärtuse kasvu.
                    </p>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  3. Küps mets ja uuendusraie
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Kui puud on saavutanud küpsuse, kasv aeglustub ja suureneb risk haigusteks. On aeg vana mets asendada uuega.
                </p>

                {/* Raie types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-200 group">
                    <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                      <Axe size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a0f00] mb-2">Lageraie</h3>
                    <p className="text-sm text-[#1a0f00]/70 mb-0 leading-relaxed">
                      Kõige efektiivsem viis uue metsapõlve rajamiseks. Vana mets raiutakse lankidena maha, jättes seemnepuud. Loob ideaalsed tingimused uue metsa istutamiseks.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 transition-all duration-200 group">
                    <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                      <Leaf size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a0f00] mb-2">Turberaie</h3>
                    <p className="text-sm text-[#1a0f00]/70 mb-0 leading-relaxed">
                      Puid raiutakse hõredamaks pika aja jooksul. Uus mets kasvab vana metsa "turbe" all. Sobib varjutaluvatele liikidele ja asulate lähedusse.
                    </p>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mets ja seadusandlus
                </h2>
                
                {/* Warnings / Rules - Clean List */}
                <div className="space-y-4 not-prose mb-12">
                   {[
                    { title: "Metsateatis", desc: "Enne raiet (v.a väikesemahuline) tuleb esitada Keskkonnaametile metsateatis. See on sisuliselt raieluba." },
                    { title: "Linnurahu", desc: "Kevadsuvisel perioodil (aprill-juuni) on raied piiratud, et mitte häirida pesitsevaid linde." },
                    { title: "Uuendamiskohustus", desc: "Pärast lageraiet on omanikul kohustus mets uuendada (istutada) hiljemalt 5 aasta jooksul." }
                   ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-amber-50/50 border border-amber-100 hover:bg-amber-50 transition-colors duration-200">
                      <div className="mt-1 text-amber-600 shrink-0">
                        <AlertTriangle size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#1a0f00] mb-1">{item.title}</strong>
                        <span className="text-[#1a0f00]/70 text-sm leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                   ))}
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
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileText size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kõik algab korrektsest kavast. Telli siit.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-istutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Sprout size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa istutamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Pane alus uuele metsapõlvele.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/raieoiguse-muuk/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileSignature size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Raieõiguse müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Realiseeri tulu parima hinnaga.
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
              
              {/* Sticky Contact Card - The Standard */}
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-[#F0F7F4] rounded-2xl p-8 border border-[#347D4E]/10 shadow-[0_20px_40px_-10px_rgba(52,125,78,0.15)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(52,125,78,0.2)] transition-shadow duration-300">
                  {/* Decorative Background Blob - Subtle Pulse */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#347D4E]/5 rounded-full blur-3xl group-hover:bg-[#347D4E]/10 transition-colors duration-500" />

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Metsaomaniku abiline</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Metsamaakler on Sinu partner. Korraldame paberimajanduse, raied ja uue metsa istutamise.
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
                      Küsi nõu
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </span>
                    {/* Button Shine Effect */}
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
