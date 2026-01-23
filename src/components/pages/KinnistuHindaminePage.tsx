import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Calculator, 
  Map as MapIcon, 
  Trees, 
  TrendingUp, 
  Search, 
  ArrowRight, 
  BadgeEuro,
  Scale,
  Phone,
  Mail,
  ChevronRight,
  Info,
  AlertTriangle,
  Landmark,
  Sprout
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const KinnistuHindaminePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui kaua hindamine aega võtab?",
      answer: "Tavaliselt teeme esialgse hinnapakkumise 1-2 tööpäeva jooksul pärast päringu saamist. Keerukamate objektide puhul, mis nõuavad põhjalikku looduses käimist (nt piirivaidlused või keeruline ligipääs), võib minna veidi kauem."
    },
    {
      question: "Kas hindamine maksab midagi?",
      answer: "Metsamaakleri poolt teostatav kinnistu turuväärtuse hindamine ja ostupakkumise tegemine on omanikule täiesti tasuta ega kohusta tehinguks. See on meiepoolne investeering usaldusväärsesse koostöösse."
    },
    {
      question: "Kas hindate ka põllumaad?",
      answer: "Jah, hindame nii metsa- kui ka põllumaad. Põllumaa puhul vaatame mulla viljakust (boniteeti), PRIA toetusõiguslikkust, maaparandussüsteemide seisukorda ja rendilepingute olemasolu."
    },
    {
      question: "Kuidas erineb kinnistu hindamine raieõiguse hindamisest?",
      answer: "Raieõiguse puhul hinnatakse ainult puude väärtust. Kinnistu hindamisel lisandub sellele maa enda väärtus (potentsiaal uue metsa kasvatamiseks) ja noorendike tulevikuväärtus, mis teeb kinnistu koguhinna alati kõrgemaks."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Kinnistu hindamine',
        'description': 'Professionaalne metsa- ja põllumaa hindamine. Turuhinna analüüs ja konsultatsioon.',
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
        'serviceType': 'Real Estate Appraisal'
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
            'name': 'Kinnistu hindamine',
            'item': 'https://metsamaakler.ee/kinnistu-hindamine/'
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
    title: "Kinnistu hindamine 2024 – Tasuta metsa ja maa hindamine | Metsamaakler",
    description: "Soovid teada oma kinnistu tegelikku väärtust? Teostame professionaalset metsa- ja põllumaa hindamist. Uuri, millest sõltub Sinu maa hind ja küsi tasuta pakkumist.",
    canonical: "https://metsamaakler.ee/kinnistu-hindamine/",
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
          title="Kinnistu hindamine"
          subtitle="Iga maatükk on unikaalne. Selgitame lahti, kuidas kujuneb metsa- ja põllumaa turuväärtus ning milliseid tegureid me hindamisel arvestame."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Kinnistu hindamine", href: "/kinnistu-hindamine/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Kinnistu hindamine – selgus ja kindlustunne
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Kinnisvaraturul ringleb palju kuulujutte ja müüte "keskmistest hektarihindadest". Reaalsus on aga see, et kaks kõrvuti asuvat maatükki võivad olla väga erineva väärtusega. <strong>Kinnistu hindamine</strong> annab omanikule objektiivse pildi oma vara potentsiaalist ja hetkeväärtusest.
                </p>

                <p className="mb-10 leading-[1.5]">
                  See on esimene ja kõige olulisem samm, kui plaanite müüki, pärandi jagamist või soovite lihtsalt teada oma portfelli seisu. Metsamaakleri lähenemine on põhjalik ja andmepõhine. Me ei vaata ainult kaarti, vaid analüüsime metsa bioloogilist vara, ligipääsetavust ja juriidilisi nüansse.
                </p>

                {/* Expert Advice / Key Benefit */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Scale size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Objektiivne turuhind</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Tähtis
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Erinevalt maakleritest, kes võivad lubada utoopilisi hindu lepingu saamiseks, tugineme meie reaalsetele tehingutele. Meie hinnang on konservatiivne ja realistlik, mis tagab kiire ja eduka tehingu, mitte aastatepikkuse müügiprotsessi.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kuidas hindamisprotsess välja näeb?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Oleme muutnud hindamise kliendi jaoks võimalikult lihtsaks, tehes ise ära kogu keerulise taustatöö registrites ja looduses.
                </p>

                {/* Timeline Visualization - Clean */}
                <div className="space-y-6 not-prose mb-16">
                  {[
                    { 
                      icon: Search,
                      title: "1. Andmete kogumine registritest", 
                      desc: "Alustame \"laua taga\". Kontrollime Kinnistusraamatust omanikuandmeid ja koormatisi. Metsaregistrist vaatame metsaeraldiste andmeid (vanus, liigid, tagavara) ja kontrollime looduskaitselisi piiranguid." 
                    },
                    { 
                      icon: MapIcon,
                      title: "2. Asukoha ja ligipääsu analüüs", 
                      desc: "Kaartidel uurime logistikat. Kas kinnistule pääseb ligi avalikult teelt? Kas on vaja servituute? Logistika on üks suurimaid hinna mõjutajaid." 
                    },
                    { 
                      icon: Trees,
                      title: "3. Ülevaatus looduses", 
                      desc: "Registriandmed võivad olla vananenud. Meie spetsialist käib vajadusel kohapeal, et hinnata puistu tegelikku seisukorda, kahjustusi ja sortimendi kvaliteeti." 
                    },
                    { 
                      icon: Calculator,
                      title: "4. Analüüs ja hinnapakkumine", 
                      desc: "Kombineerime kogutud info hetke turuhindadega ja koostame detailse hinnangu. Toome välja nii kinnistu väärtuse raieõiguse müügi korral kui ka kinnistu müügihinna." 
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

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Mis mõjutab kinnistu hinda kõige rohkem?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Hind on alati paljude tegurite summa. Siin on peamised komponendid, mida me hindamisel arvesse võtame:
                </p>

                {/* Factors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   {[
                    { title: "Puidutagavara", desc: "Kõige suurem väärtus peitub tavaliselt kasvavas metsas. Hindame, kui palju on metsas kallist palki ja kui palju odavamat küttepuud.", icon: Trees },
                    { title: "Maa viljakus (Boniteet)", desc: "Maa ise on investeering. Viljakas pinnas (boniteet 1 ja 2) kasvatab uue metsa kiiremini peale, mis tõstab kinnistu pikaajalist väärtust.", icon: Sprout },
                    { title: "Piirangud", desc: "Kui kinnistul on range kaitsekord (nt sihtkaitsevöönd), võib majandamine olla keelatud, kuid riik võib maa välja osta.", icon: AlertTriangle },
                    { title: "Turuolukord", desc: "Puidu hinnad maailmaturul ja üldine majanduskeskkond määravad nõudluse. Kõrgete hindade ajal on ka metsamaa hind tipus.", icon: TrendingUp }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group flex flex-col h-full">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/60 m-0 leading-relaxed flex-grow">{item.desc}</p>
                    </div>
                   ))}
                </div>

                {/* Info Block - Clean */}
                <div className="group mb-12 p-8 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose items-start">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-lg">Hindamine on hinnang</strong>
                    Oluline on meeles pidada, et hindamine on ekspertiisipõhine arvamus turuväärtusest konkreetsel ajahetkel. Lõplik tehinguhind kujuneb alati ostja ja müüja läbirääkimiste tulemusena. Meie eesmärk on anda teile võimalikult tugev stardipositsioon.
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
                        <BadgeEuro size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hind
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Loe lähemalt, kuidas kujuneb metsa hind ja millised on turu trendid.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <MapIcon size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Inventeerimisandmed on täpse hindamise aluseks.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/kinnistu-muuk/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Landmark size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Kinnistu müük
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kui olete otsustanud müüa, aitame leida parima ostja.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Kui palju sinu kinnistu maksab?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Telli tasuta eksperthinnang. Vastame 24h jooksul ja toome välja parima võimaliku turuhinna.
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
