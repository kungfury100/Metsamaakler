import React from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { GlobalBackground } from '../../layout/GlobalBackground';
import { ServiceHero } from '../../layout/ServiceHero';
import { ContactCTASection } from '../../ContactCTASection';
import { useSeo } from '../../../hooks/useSeo';
import { 
  Tractor, 
  Trees, 
  Sprout, 
  Handshake, 
  ArrowRight, 
  Phone, 
  Mail, 
  Scale, 
  CheckCircle2,
  Info 
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const EestiMaavaraPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'Eesti Maavara OÜ',
        'description': 'Eesti kapitalil põhinev ettevõte, mis tegeleb põllu- ja metsamaa ostu ning haldamisega.',
        'areaServed': 'Estonia'
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
            'name': 'Metsafirmad',
            'item': 'https://metsamaakler.ee/metsafirmad/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Eesti Maavara',
            'item': 'https://metsamaakler.ee/eesti-maavara/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Eesti Maavara OÜ – Info ja hinnapakkumised | Metsamaakler",
    description: "Eesti Maavara OÜ on juhtiv põllu- ja metsamaa haldaja. Loe nende tegevusest ja küsi võrdlevat hinnapakkumist oma kinnistule metsamaakler.ee kaudu.",
    canonical: "https://metsamaakler.ee/eesti-maavara/",
    ogImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1080",
    schema: schema
  });

  return (
    <div className="min-h-screen relative bg-white font-inter selection:bg-[#347D4E] selection:text-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Eesti Maavara"
          subtitle="Põllu- ja metsamaa haldamisele ning väärindamisele spetsialiseerunud ettevõte."
          onCtaClick={handleCtaClick}
          ctaText="Küsi võrdlevat pakkumist"
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsafirmad", href: "/" },
            { label: "Eesti Maavara", href: "/eesti-maavara/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a0f00] mb-6 leading-tight tracking-tight">
                  Eesti Maavara OÜ
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Pühendunud maaelu edendamisele.</strong> Eesti Maavara OÜ on kodumaine ettevõte, mis on seadnud eesmärgiks Eesti maaelu ja põllumajanduse arendamise läbi maaressursi efektiivse kasutamise. Nende põhitegevuseks on põllu- ja metsamaa ostmine, rentimine ning jätkusuutlik majandamine, pakkudes maaomanikele usaldusväärset partnerlust.
                </p>

                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Ettevõte eristub turul oma tervikliku lähenemise poolest – nad ei näe maad vaid kui investeeringut, vaid kui tootmisvahendit, mis peab teenima nii omanikku kui ka ühiskonda. Eesti Maavara OÜ teeb tihedat koostööd kohalike põllumeeste ja metsaühistutega, tagades, et iga maatükk leiaks parima võimaliku rakenduse, olgu selleks siis viljakasvatus või metsamajandus.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12 mt-8">
                   {[
                    { title: "Põllumaa ost", desc: "Ostavad põllumaad üle Eesti, pakkudes konkurentsivõimelist hinda.", icon: Tractor },
                    { title: "Metsamaa investeeringud", desc: "Huvitatud nii kasvavast metsast kui ka raiutud kinnistutest.", icon: Trees },
                    { title: "Maade rent", desc: "Annavad põllumaad rendile aktiivsetele tootjatele.", icon: Sprout },
                    { title: "Kiired tehingud", desc: "Professionaalne asjaajamine ja notaritehingute ettevalmistus.", icon: Handshake }
                   ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-200 ease-out group">
                      <div className="mb-4 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <item.icon size={24} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-[#1a0f00]/60 m-0">{item.desc}</p>
                    </div>
                   ))}
                </div>

                <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a0f00] mt-12 mb-6">
                  Miks kaaluda müüki Eesti Maavara OÜ-le?
                </h3>
                
                <p className="mb-6">
                  Eesti Maavara OÜ on tuntud kui stabiilne ja kindel ostja. Nende finantsvõimekus võimaldab teha pakkumisi ka suurematele kinnistute portfellidele. Lisaks on nad valmis ostma maad, mis on koormatud rendilepingutega, austades olemasolevaid kokkuleppeid rentnikega. See teeb neist atraktiivse partneri neile, kes soovivad müüa maad, kuid tahavad tagada, et praegune rentnik saaks tegevust jätkata.
                </p>

                <ul className="space-y-4 not-prose mb-12">
                   <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Õiglane hindamine:</strong> Hindavad maad selle tootlikkuse ja potentsiaali, mitte vaid hetke turu keskmise järgi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Paindlikkus:</strong> Valmis leidma lahendusi ka juriidiliselt keerukatele olukordadele (nt kaasomand).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Kohalik kapital:</strong> Müües neile, jääb maa kodumaise ettevõtte haldusesse.</span>
                  </li>
                </ul>

                <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a0f00] mt-12 mb-6">
                   Võrdlus annab kindlustunde
                </h3>

                <p className="mb-6">
                  Kinnisvara müük on suur otsus. Isegi kui Eesti Maavara OÜ pakkumine tundub ahvatlev, soovitame alati võtta pakkumisi ka teistelt turuosalistelt. Eriti metsamaa puhul võib hindade varieeruvus olla suur. Metsamaakler aitab sul kiirelt ja mugavalt saada võrdlevaid pakkumisi, et saaksid olla kindel – sinu vara müüakse parima võimaliku hinnaga.
                </p>

                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Info size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight mb-2">Kas teadsid?</h3>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Metsamaakler.ee kaudu pakkumist küsides jõuab sinu soov korraga paljude usaldusväärsete ostjateni, sealhulgas suurte investeerimisfondide ja metsafirmadeni. Konkurents on parim viis hinna kergitamiseks. Teenus on müüjale tasuta ja ei kohusta müüma.
                      </p>
                    </div>
                  </div>
                </div>

              </article>
            </div>

            {/* SIDEBAR COLUMN - STICKY */}
            <div className="lg:col-span-4 space-y-8">
              
              <div className="sticky top-24" id="kontakt">
                <div className="bg-gradient-to-br from-white to-[#F0F7F4] rounded-2xl p-8 border border-[#347D4E]/10 shadow-[0_20px_40px_-10px_rgba(52,125,78,0.15)] relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(52,125,78,0.2)] transition-shadow duration-300">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#347D4E]/5 rounded-full blur-3xl group-hover:bg-[#347D4E]/10 transition-colors duration-500" />
                  
                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Võta pakkumine</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Küsi meilt tasuta ja kohustusevaba võrdlevat pakkumist. See on lihtsaim viis veenduda, et Sinu maa hind on õiglane.
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

        <ContactCTASection showCTA={false} transparentBg={true} title="Võta pakkumine" />
      </main>

      <Footer />
    </div>
  );
};
