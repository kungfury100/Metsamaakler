import React from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { GlobalBackground } from '../../layout/GlobalBackground';
import { ServiceHero } from '../../layout/ServiceHero';
import { ContactCTASection } from '../../ContactCTASection';
import { useSeo } from '../../../hooks/useSeo';
import { 
  Landmark, 
  Trees, 
  Briefcase, 
  FileCheck, 
  ArrowRight, 
  Phone, 
  Mail, 
  Scale, 
  CheckCircle2,
  Info 
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const TehingukeskusPage: React.FC = () => {
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
        'name': 'Tehingukeskus OÜ',
        'description': 'Eesti kapitalil põhinev ettevõte, mis tegeleb metsa- ja põllumaa ostuga.',
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
            'name': 'Tehingukeskus',
            'item': 'https://metsamaakler.ee/tehingukeskus/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Tehingukeskus OÜ – Info ja hinnapakkumised | Metsamaakler",
    description: "Tehingukeskus OÜ on aktiivne metsa- ja põllumaa ostja. Loe lähemalt nende tegevusest ja küsi võrdlevat hinnapakkumist metsamaakler.ee kaudu.",
    canonical: "https://metsamaakler.ee/tehingukeskus/",
    ogImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80&w=1080",
    schema: schema
  });

  return (
    <div className="min-h-screen relative bg-white font-inter selection:bg-[#347D4E] selection:text-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Tehingukeskus"
          subtitle="Professionaalne partner metsa- ja põllumaa tehingutes üle terve Eesti."
          onCtaClick={handleCtaClick}
          ctaText="Küsi võrdlevat pakkumist"
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsafirmad", href: "/" },
            { label: "Tehingukeskus", href: "/tehingukeskus/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a0f00] mb-6 leading-tight tracking-tight">
                  Tehingukeskus OÜ
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Kiired ja korrektsed tehingud.</strong> Tehingukeskus OÜ on Eesti turul tegutsev ettevõte, mis on spetsialiseerunud metsa- ja põllumaa kinnistute ostmisele. Nende eesmärk on pakkuda maaomanikele kiiret ja mugavat müügiprotsessi, võttes enda kanda kogu asjaajamise keerukuse. Ettevõte ostab nii majandatavaid metsi kui ka põllumajanduslikku maad, pakkudes lahendusi erinevatele kinnisvaraobjektidele.
                </p>

                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Ettevõte on tuntud oma professionaalse lähenemise poolest. Tehingukeskus OÜ hindab kõrgelt kiirust ja täpsust, püüdes jõuda notariaalse tehinguni võimalikult lühikese ajaga peale kokkuleppe saavutamist. Nad omavad vajalikku kompetentsi, et hinnata adekvaatselt kinnistute väärtust ja pakkuda müüjale õiglast turuhinda vastavalt hetkeolukorrale.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12 mt-8">
                   {[
                    { title: "Metsamaa ost", desc: "Ostavad nii raieküpset kui ka noort metsa.", icon: Trees },
                    { title: "Põllumaa ost", desc: "Huvitatud põllumajanduslikust maast üle Eesti.", icon: Landmark },
                    { title: "Kiired tehingud", desc: "Ettevalmistus notariaalseks tehinguks sujub kiirelt.", icon: Briefcase },
                    { title: "Paberimajandus", desc: "Võtavad enda kanda tehinguga seotud bürokraatia.", icon: FileCheck }
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
                  Mille poolest Tehingukeskus OÜ silma paistab?
                </h3>
                
                <p className="mb-6">
                  Tehingukeskus on hea valik neile, kes hindavad konkreetsust ja soovivad oma kinnisvara kiiresti realiseerida.
                </p>

                <ul className="space-y-4 not-prose mb-12">
                   <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Lai haare:</strong> Nad tunnevad huvi kinnistute vastu sõltumata nende asukohast Eestis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Paindlikkus:</strong> Lähenevad igale pakkumisele personaalselt, arvestades kinnistu eripärasid.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Kogemused:</strong> Meeskonnal on pikaajaline kogemus maatehingute valdkonnas.</span>
                  </li>
                </ul>

                <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a0f00] mt-12 mb-6">
                   Turuolukord ja konkureerivad pakkumised
                </h3>

                <p className="mb-6">
                  Nagu iga tehingu puhul, on ka metsa või põllumaa müügil oluline veenduda, et pakutav hind on parim võimalik. Kuigi Tehingukeskus OÜ teeb konkurentsivõimelisi pakkumisi, on kinnisvaraturul hinnad ja ostjate huvid ajas muutuvad. Ostjate hinnangud samale kinnistule võivad erineda märkimisväärselt sõltuvalt nende hetkevajadustest ja portfelli strateegiast.
                </p>
                
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Scale size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight mb-2">Võta võrdlev pakkumine</h3>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Metsamaakler.ee aitab sul vaid ühe päringuga saada ülevaate turu tegelikust seisust. Küsi pakkumist meilt ja me edastame selle oma laiale partnerite ringile. See annab sulle kindlustunde, et Tehingukeskuse või mõne teise ostja pakutav hind on tõepoolest õiglane ja turu parim.
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
                    Küsi tasuta ja kohustusevaba võrdlevat pakkumist. See on parim viis veenduda tehingu tulususes.
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
