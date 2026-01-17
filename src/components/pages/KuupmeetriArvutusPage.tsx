import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Calculator, 
  Box, 
  Ruler, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight,
  Scale,
  Package,
  CircleDot
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const KuupmeetriArvutusPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kuidas arvutada ristküliku kujulise eseme ruumala?",
      answer: "Korruta omavahel pikkus, laius ja kõrgus. Veendu, et kõik mõõdud on samas ühikus (näiteks meetrites). Valem: Pikkus × Laius × Kõrgus."
    },
    {
      question: "Kuidas arvutada silindri (nt palgi) ruumala?",
      answer: "Silindri ruumala = Põhja pindala × Kõrgus (V = π · r² · h). Praktikas on palgi puhul lihtsam kasutada keskmist diameetrit või spetsiaalseid valemeid."
    },
    {
      question: "Mitu liitrit on ühes kuupmeetris?",
      answer: "Ühes kuupmeetris (1 m³) on täpselt 1000 liitrit. See on kasulik teadmine näiteks veemahutite või basseinide mahu arvutamisel."
    },
    {
      question: "Mis vahe on tihumeetril ja ruumimeetril?",
      answer: "Tihumeeter on 1 m³ puhast puitu ilma õhuvahedeta. Ruumimeeter on 1 m³ virnastatud puitu koos õhuvahedega. Üks ruumimeeter on tavaliselt ca 0.5-0.6 tihumeetrit."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Kuupmeetri arvutus – Lihtne juhend',
        'description': 'Kuidas arvutada ruumala kuupmeetrites? Lihtsad valemid ja näited erinevate kujundite jaoks.',
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
            'name': 'Kuupmeetri arvutus',
            'item': 'https://metsamaakler.ee/kuupmeetri-arvutus/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Kuupmeetri arvutus – Valemid ja näited | Metsamaakler",
    description: "Kuidas arvutada kuupmeetreid? Lihtne ja arusaadav juhend ruumala arvutamiseks erinevatele kujunditele. Vaata valemeid siit.",
    canonical: "https://metsamaakler.ee/kuupmeetri-arvutus/",
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
          title="Kuupmeetri arvutus"
          subtitle="Lihtne teejuht ruumala arvutamise maailma. Õpi selgeks valemid, mida läheb vaja nii ehituses, transpordis kui ka metsanduses."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Kuupmeetri arvutus", href: "/kuupmeetri-arvutus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Mis on kuupmeeter ja kuidas seda leida?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Kuupmeeter (tähis <strong>m³</strong>) on rahvusvaheline ruumalaühik, mis väljendab kolmemõõtmelise ruumi mahtu. Kõige lihtsam on seda ette kujutada kui kuubikut, mille iga külg (pikkus, laius ja kõrgus) on täpselt 1 meeter.
                </p>

                <p className="mb-10 leading-[1.5]">
                  Kuupmeetri arvutamine on vajalik oskus paljudes eluvaldkondades – olgu selleks betooni tellimine vundamendi jaoks, küttepuude ostmine, korteri õhuvahetuse planeerimine või pakiauto kaubaruumi mahu hindamine. Allpool toome välja lihtsad valemid, mis aitavad sul igas olukorras hakkama saada.
                </p>

                {/* Expert Advice / Key Benefit */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Ruler size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Kuldreegel</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Meelespea
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Enne arvutamist teisenda alati kõik mõõdud samasse ühikusse (meetritesse). Kui korrutad cm ja m läbisegi, on tulemus vale. Näiteks 50 cm on 0.5 m.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  1. Risttahuka ruumala
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Kõige sagedamini puutume kokku esemetega, mis on kasti ehk risttahuka kujulised (nt tuba, pruss, veepaak). Selle ruumala arvutamine on äärmiselt lihtne.
                </p>

                {/* Formula Block - Clean */}
                <div className="bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose mb-10 text-center">
                   <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm text-[#347D4E] mb-4">
                      <Box size={32} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-xl font-bold text-[#1a0f00] mb-2">Valem</h3>
                   <div className="text-2xl md:text-3xl font-mono font-bold text-[#347D4E] mb-6">
                      Pikkus × Laius × Kõrgus
                   </div>
                   <div className="text-sm text-gray-500 bg-white p-4 rounded-xl border border-gray-100 max-w-lg mx-auto">
                      <strong>Näide:</strong> Teil on vaja valada betoonplaat mõõtudega 5m x 4m ja paksusega 15cm (0.15m).<br/>
                      <span className="text-[#347D4E] font-bold">5 × 4 × 0.15 = 3 m³</span>
                   </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  2. Silindri ruumala (ümarad esemed)
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Kui on vaja arvutada palgi, toru või ümmarguse basseini mahtu, on valem pisut keerulisem, sest mängu tuleb ringi pindala.
                </p>

                {/* Steps Timeline - Clean */}
                <div className="space-y-6 not-prose mb-12">
                   {[
                    { icon: CircleDot, title: "1. Mõõda raadius (r)", desc: "Raadius on pool läbimõõdust ehk diameetrist. Kui läbimõõt on 1m, siis raadius on 0.5m." },
                    { icon: Calculator, title: "2. Arvuta põhja pindala", desc: "Valem on π × r² (ehk 3.14 × raadius × raadius)." },
                    { icon: Scale, title: "3. Korruta kõrgusega", desc: "Korruta saadud pindala silindri kõrguse (või pikkusega)." }
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
                  Kasulikud teisendused
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Igapäevaelus võib tekkida vajadus teisendada kuupmeetreid teistesse ühikutesse. Siin on väike spikker.
                </p>

                {/* Conversions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><CheckCircle2 size={20} /></div>
                         <h4 className="font-bold text-[#1a0f00] text-lg">Vedelikud</h4>
                      </div>
                      <p className="text-2xl font-bold text-[#1a0f00] mb-1">1 m³ = 1000 l</p>
                      <p className="text-sm text-gray-500 m-0">Kasulik veemahutite ja basseinide puhul.</p>
                   </div>
                   
                   <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Box size={20} /></div>
                         <h4 className="font-bold text-[#1a0f00] text-lg">Väiksed detailid</h4>
                      </div>
                      <p className="text-2xl font-bold text-[#1a0f00] mb-1">1 m³ = 1M cm³</p>
                      <p className="text-sm text-gray-500 m-0">Miljon kuupsentimeetrit.</p>
                   </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Puit ja "Metsakuup"
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Metsanduses on asi veidi nüansirikkam. Puidu puhul eristatakse <strong>tihumeetrit</strong> ja <strong>ruumimeetrit</strong>. See on oluline vahe, mida iga metsaomanik peab teadma.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#347D4E]/30 transition-all">
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 text-[#347D4E]">Tihumeeter (tm)</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                         See on 1 m³ puhast puitu ilma õhuvahedeta. Metsamaterjali müüakse ja ostetakse tavaliselt tihumeetrites, sest see näitab tegelikku puidu kogust.
                      </p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-amber-200 transition-all">
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 text-amber-600">Ruumimeeter (rm)</h4>
                      <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                         See on 1 m³ virnastatud puitu koos õhuvahedega (nt k��ttepuud riidas). 1 ruumimeeter küttepuid on tavaliselt ca 0.6 tihumeetrit.
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
                    <a href="/tihumeetri-arvutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Scale size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Tihumeetri arvutamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas arvutada palgi mahtu täpselt?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/ruumimeetri-arvutamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Package size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Ruumimeeter
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Mida tähendab ruumimeeter küttepuude puhul?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsa-hindamine/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <Calculator size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsa hindamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Lase oma mets professionaalidel üle hinnata.
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
                  
                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vajad abi metsa hindamisega?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Meie eksperdid aitavad arvutada metsa tagavara ja turuväärtust. Küsi tasuta konsultatsiooni.
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
