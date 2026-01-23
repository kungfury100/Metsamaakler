import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  Calculator, 
  TrendingUp, 
  Sprout, 
  TreePine, 
  Map as MapIcon, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  Leaf,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Info,
  Package,
  Truck
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MetsaistikuteHindPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kui palju maksab üks kuuseistik?",
      answer: "Kuuseistikute hind sõltub kogusest ja tüübist. Keskmiselt jääb hind vahemikku 0,25 – 0,45 € taime kohta. Potitaimed (suletud juurekavaga) on üldjuhul kallimad kui paljasjuursed taimed, kuid nende ellujäämisprotsent on kõrgem."
    },
    {
      question: "Millal on õige aeg istikuid tellida?",
      answer: "Kõige kriitilisem reegel: telli taimed varakult! Kevadiseks istutuseks tuleks broneering teha juba eelneval sügisel või hiljemalt talvel. Kevadel on puukoolide laod sageli tühjad ja kvaliteetset materjali on raske leida."
    },
    {
      question: "Mis vahe on paljasjuursetel ja potitaimedel?",
      answer: "Potitaim (suletud juurekavaga) kasvab turbakassetis. Ta juurdub kiiremini ja teda saab istutada peaaegu kogu hooaja vältel. Paljasjuurne taim on odavam ja sageli suurem, kuid tema juured on tundlikumad kuivamisele ning istutusaeg on piiratud (ainult varakevad või hilissügis)."
    },
    {
      question: "Mitu taime hektarile istutada?",
      answer: "Soovituslikud normid on: Mänd 3000–3500 taime/ha, Kuusk 1800–2200 taime/ha, Kask 1500–2000 taime/ha. Liiga tihe istutus tõstab kulusid, liiga hõre ei taga kvaliteetset tulevikumetsa."
    },
    {
      question: "Kas ma võin tuua taimi naaberriigist?",
      answer: "Jah, kuid ainult sertifitseeritud taimi. Taimed peavad omama taimepassi ja olema sobilikud Eesti kliimasse (õige päritolupiirkond). Kontrollimata taimede toomine on riskantne nii haiguste kui ka külmakindluse tõttu."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Metsaistikute müük ja hinnainfo',
        'description': 'Kvaliteetsed metsaistikud. Uuri hindasid ja telli taimed õigeaegselt. Kuusk, mänd, kask.',
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
            'name': 'Metsaistikute hind',
            'item': 'https://metsamaakler.ee/istikute-hind/'
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
    title: "Metsaistikute hind – Hinnakiri ja müügiinfo | Metsamaakler",
    description: "Vajad metsaistikuid? Loe siit, milline on kuuse, männi ja kase istikute hind, kust osta sertifitseeritud taimi ja millal on õige aeg tellimuseks.",
    canonical: "https://metsamaakler.ee/istikute-hind/",
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
          title="Metsaistikute hind"
          subtitle="Kvaliteetne istik on investeering sajandiks. Aitame leida parima hinna ja kvaliteediga istutusmaterjali Sinu metsa uuendamiseks."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Metsaistikute hind", href: "/istikute-hind/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Metsaistikute hind – millest see sõltub?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Metsa uuendamine algab kvaliteetsest seemnest ja tugevast taimest. Iga metsaomanik küsib esimesena: "Kui palju taimed maksavad?".
                </p>

                <p className="mb-10 leading-[1.5]">
                  <strong>Metsaistikute hind</strong> ei ole püsiv suurus, vaid kõigub aastati, sõltudes nõudlusest, ilmastikuoludest ja tootmismahtudest. Kuid üks reegel kehtib alati: odav ja ebakvaliteetne taim on pikas perspektiivis kõige kallim lahendus, sest hukkumise korral tuleb kogu töö uuesti teha.
                </p>

                {/* Expert Advice / Key Benefit */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <TrendingUp size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Kvaliteet tasub ära</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Soovitus
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Kasutame ja soovitame vaid ametliku taimepassiga materjali, mis on kasvatatud Eesti kliimasse sobivast seemnest. See tagab, et mets on vastupidav ja kasvab jõudsalt.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Hinnakiri ja liigid: Mida valida?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Eestis istutatakse peamiselt kolme puuliiki: kuuske, mändi ja kaske. Hinnad varieeruvad sõltuvalt sellest, kas tegemist on suletud juurekavaga (potitaim) või avajuurse taimega.
                </p>

                {/* Pricing Table - Custom Styled */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mb-12 not-prose">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#F8FAF9] text-[#1a0f00] font-bold uppercase text-xs tracking-wider border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4">Puuliik / Tüüp</th>
                        <th className="px-6 py-4">Hinnavahemik (€/tk)</th>
                        <th className="px-6 py-4">Soovituslik kasvukoht</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      <tr className="hover:bg-green-50/30 transition-colors">
                        <td className="px-6 py-4 font-bold text-[#163823]">
                          <div className="flex items-center gap-3"><div className="p-1.5 bg-green-100 rounded-lg text-green-700"><TreePine size={18}/></div> Kuusk (potitaim)</div>
                        </td>
                        <td className="px-6 py-4 font-bold text-[#347D4E]">0.30 – 0.45 €</td>
                        <td className="px-6 py-4 text-gray-600">Viljakad mineraalmullad. Parim valik endistele põllumaadele.</td>
                      </tr>
                      <tr className="hover:bg-green-50/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-[#163823]">
                          <div className="flex items-center gap-3"><div className="p-1.5 bg-gray-100 rounded-lg text-gray-600"><TreePine size={18}/></div> Kuusk (paljasjuurne)</div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">0.25 – 0.35 €</td>
                        <td className="px-6 py-4 text-gray-600">Sobib, kui on kogenud istutajad ja head niiskusolud kevadel.</td>
                      </tr>
                      <tr className="hover:bg-green-50/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-[#163823]">
                          <div className="flex items-center gap-3"><div className="p-1.5 bg-amber-100 rounded-lg text-amber-700"><TreePine size={18}/></div> Mänd (potitaim)</div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">0.30 – 0.42 €</td>
                        <td className="px-6 py-4 text-gray-600">Liivasemad, kuivemad mullad (nõmm, palu). Valgusnõudlik.</td>
                      </tr>
                      <tr className="hover:bg-green-50/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-[#163823]">
                          <div className="flex items-center gap-3"><div className="p-1.5 bg-lime-100 rounded-lg text-lime-700"><Leaf size={18}/></div> Kask (potitaim)</div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">0.35 – 0.50 €</td>
                        <td className="px-6 py-4 text-gray-600">Niiskemad alad, viljakas muld. Kiirekasvuline.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Kust osta metsaistikuid?
                </h2>
                <p className="mb-6 leading-[1.5]">
                  Metsaistikute turg on Eestis aktiivne, kuid hooajaline defitsiit on tavaline nähtus.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-[#163823] mb-3 flex items-center gap-2">
                      <Truck className="text-[#347D4E]" size={20} />
                      RMK Taimlad
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed m-0">
                      Eesti suurim taimetootja. Nende taimed on tippkvaliteediga. NB! RMK müüb taimi eraisikutele vaid siis, kui neil jääb oma vajadustest üle.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-[#163823] mb-3 flex items-center gap-2">
                      <Package className="text-[#347D4E]" size={20} />
                      Erapuukoolid
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed m-0">
                      Mitmed litsentseeritud erapuukoolid ja metsaühistud pakuvad kvaliteetset istutusmaterjali. Metsamaakler aitab leida parima pakkuja.
                    </p>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Potitaim vs Paljasjuurne taim
                </h2>
                <p className="mb-6 leading-[1.5]">
                  See on igavene debatt. Mõlemal on omad plussid ja miinused, kuid trend liigub selgelt potitaimede suunas.
                </p>

                {/* Comparison Visual */}
                <div className="space-y-4 not-prose mb-12">
                  <div className="flex gap-4 p-5 bg-[#F8FAF9] rounded-xl border border-gray-100">
                    <div className="shrink-0 mt-1 text-[#347D4E]">
                      <Sprout size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Potitaim (Suletud juurekava)</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed mb-2">
                        Kasvatatud kassetis, juured on turbapalli sees. Juurdub kiiresti (stressivaba) ja saab istutada kevadest sügiseni.
                      </p>
                      <div className="flex gap-2 text-xs font-bold text-[#347D4E]">
                        <span className="bg-white px-2 py-1 rounded border border-gray-200">Kõrgem ellujäämus</span>
                        <span className="bg-white px-2 py-1 rounded border border-gray-200">Lihtsam istutada</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-[#F8FAF9] rounded-xl border border-gray-100">
                    <div className="shrink-0 mt-1 text-gray-400">
                      <TreePine size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a0f00] mb-1">Avajuurne taim</h4>
                      <p className="text-sm text-gray-600 m-0 leading-relaxed mb-2">
                        Juured on paljad. Sageli suurem maapealne osa ja soodsam hind. Kuid juured kuivavad kiiresti ja istutusperiood on lühike.
                      </p>
                      <div className="flex gap-2 text-xs font-bold text-gray-500">
                        <span className="bg-white px-2 py-1 rounded border border-gray-200">Soodsam hind</span>
                        <span className="bg-white px-2 py-1 rounded border border-gray-200">Nõuab kogenud istutajat</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Block - Clean */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <AlertCircle size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Oluline: Taimede päritolu</strong>
                    Metsaomanik tohib kasutada vaid <strong>sertifitseeritud algmaterjali</strong> (taimepassiga). Eestis tohib kasutada Eestist, Lätist ja teatud Leedu piirkondadest pärit taimi. Kaugemalt toodud taimed ei ole meie kliimas vastupidavad.
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
                        Istutamine
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas taimi õigesti mulda panna?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsa-uuendamise-toetus/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <CheckCircle2 size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Toetused
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Saa raha tagasi taimede ostu eest.
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 3 */}
                    <a href="/metsamajandamiskava/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <MapIcon size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsakava
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Planeeri uuendust targalt.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Vajad abi taimede leidmisel?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Aitame leida kvaliteetsed istikud ja broneerida need varakult. Küsi pakkumist ka istutusteenusele.
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
