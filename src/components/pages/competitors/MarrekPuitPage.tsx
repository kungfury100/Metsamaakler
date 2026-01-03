import React from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { GlobalBackground } from '../../layout/GlobalBackground';
import { ServiceHero } from '../../layout/ServiceHero';
import { ContactCTASection } from '../../ContactCTASection';
import { useSeo } from '../../../hooks/useSeo';
import { 
  Truck, 
  Trees, 
  Axe, 
  Handshake, 
  ArrowRight, 
  Phone, 
  Mail, 
  Scale, 
  CheckCircle2,
  Info 
} from 'lucide-react';
import HERO_IMAGE from "figma:asset/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const MarrekPuitPage: React.FC = () => {
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
        'name': 'Marrek Puit OÜ',
        'description': 'Pikaajalise kogemusega Eesti metsandusettevõte, mis tegeleb metsakinnistute ja raieõiguse ostuga.',
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
            'name': 'Marrek Puit',
            'item': 'https://metsamaakler.ee/marrek-puit/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Marrek Puit OÜ – Info ja hinnapakkumised | Metsamaakler",
    description: "Marrek Puit OÜ on kogenud metsandusettevõte. Uuri nende teenuste kohta ja küsi võrdlevat hinnapakkumist oma metsale metsamaakler.ee kaudu.",
    canonical: "https://metsamaakler.ee/marrek-puit/",
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
          title="Marrek Puit"
          subtitle="Pikaajalise kogemusega metsandusettevõte, mis pakub lahendusi metsaomanikele üle Eesti."
          onCtaClick={handleCtaClick}
          ctaText="Küsi võrdlevat pakkumist"
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsafirmad", href: "/" },
            { label: "Marrek Puit", href: "/marrek-puit/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a0f00] mb-6 leading-tight tracking-tight">
                  Marrek Puit OÜ
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Stabiilne partner metsanduses.</strong> Marrek Puit OÜ on Eesti kapitalil põhinev ettevõte, mis on tegutsenud metsandussektoris juba pikka aega. Nende põhitegevuseks on metsakinnistute ja raieõiguse ost, pakkudes metsaomanikele konkurentsivõimelisi hindu ja korrektset asjaajamist. Ettevõte on tuntud oma stabiilsuse ja usaldusväärsuse poolest, olles aastate jooksul kujunenud kindlaks partneriks paljudele metsaomanikele.
                </p>

                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Lisaks ostutegevusele tegeleb Marrek Puit OÜ ka metsamaterjali transpordi ja logistikaga, tagades puidu kiire ja efektiivse jõudmise töötlemiskohtadesse. Nende meeskond koosneb oma ala asjatundjatest, kes oskavad hinnata metsa väärtust ning pakkuda lahendusi ka keerukamate metsanduslike küsimuste korral. Ettevõtte eesmärk on pakkuda kvaliteetset teenust, mis rahuldab nii müüja kui ka ostja vajadusi.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12 mt-8">
                   {[
                    { title: "Raieõiguse ost", desc: "Ostavad kasvava metsa raieõigust üle kogu Eesti.", icon: Axe },
                    { title: "Metsakinnistud", desc: "Huvitatud nii suurtest kui väikestest metsamaadest.", icon: Trees },
                    { title: "Transport", desc: "Kaasaegne autopark metsamaterjali veoks.", icon: Truck },
                    { title: "Kiire tehing", desc: "Võimaldavad kiireid notariaalseid tehinguid.", icon: Handshake }
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
                  Miks valida Marrek Puit OÜ?
                </h3>
                
                <p className="mb-6">
                  Marrek Puit on valik neile, kes hindavad lihtsust ja konkreetsust. Nad on orienteeritud tulemusele ja püüavad hoida asjaajamise kliendi jaoks võimalikult bürokraatiavabana. Nende eelised on:
                </p>

                <ul className="space-y-4 not-prose mb-12">
                   <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Kogemus:</strong> Pikaajaline turulolek annab neile hea tunnetuse hinna ja turuolukorra osas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Finantsvõimekus:</strong> Ettevõte on majanduslikult tugev, mis tagab müüjale raha kiire laekumise.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Paindlikkus:</strong> Nad on valmis läbi rääkima erinevate maksetingimuste ja tehinguvormide osas, et leida mõlemale poolele sobiv lahendus.</span>
                  </li>
                </ul>

                <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a0f00] mt-12 mb-6">
                   Turuolukord ja konkurents
                </h3>

                <p className="mb-6">
                  Kuigi Marrek Puit OÜ on usaldusväärne partner, on metsa müük alati seotud suurte summadega, mistõttu on oluline mitte kiirustada. Üks pakkumine ei anna kunagi täielikku pilti turu tegelikust seisust. Metsamaakler soovitab alati küsida võrdlevaid pakkumisi, et välistada võimalus, kus mets müüakse alla selle tegeliku turuväärtuse.
                </p>

                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Info size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight mb-2">Võrdle pakkumisi tasuta!</h3>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Metsamaakler.ee platvorm on loodud selleks, et metsaomanik saaks oma vara eest parima hinna. Vahendame teie soovi korraga mitmele suurfirmale, sealhulgas investeerimisfondidele ja metsatööstustele. See tekitab konkurentsi ja kergitab hinda. Teenus on teile täiesti tasuta ja riskivaba.
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
                    Küsi tasuta ja kohustusevaba võrdlevat pakkumist. See on lihtsaim viis veenduda, et Sinu metsa hind on õiglane.
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

        <ContactCTASection showCTA={false} transparentBg={true} title="Võta pakkumine" />
      </main>

      <Footer />
    </div>
  );
};
