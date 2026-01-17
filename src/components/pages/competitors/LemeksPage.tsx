import React from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { GlobalBackground } from '../../layout/GlobalBackground';
import { ServiceHero } from '../../layout/ServiceHero';
import { ContactCTASection } from '../../ContactCTASection';
import { useSeo } from '../../../hooks/useSeo';
import { 
  Building2, 
  Trees, 
  Tractor, 
  Globe2, 
  ArrowRight,
  Phone,
  Mail,
  Info,
  CheckCircle2
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const LemeksPage: React.FC = () => {
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
        'name': 'Lemeks Grupp',
        'description': 'Eesti suurim metsatööstuskontsern, mis tegeleb puidutöötlemise, metsamajanduse ja põllumajandusega.',
        'foundingDate': '1993'
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
            'name': 'Lemeks',
            'item': 'https://metsamaakler.ee/lemeks/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Lemeks Grupp – Ülevaade ja info | Metsamaakler",
    description: "Lemeks Grupp on Eesti suurim metsatööstuskontsern. Loe lähemalt nende tegevusvaldkondadest ja küsi võrdlevat pakkumist metsamaakler.ee kaudu.",
    canonical: "https://metsamaakler.ee/lemeks/",
    ogImage: "https://images.unsplash.com/photo-1623520228354-00d94a485531?auto=format&fit=crop&q=80&w=1080",
    schema: schema
  });

  return (
    <div className="min-h-screen relative bg-white font-inter selection:bg-[#347D4E] selection:text-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Lemeks"
          subtitle="Eesti suurim ja edukaim metsatööstuskontsern, mis ühendab endas pikaajalise kogemuse ja kaasaegse tehnoloogia."
          onCtaClick={handleCtaClick}
          ctaText="Küsi võrdlevat pakkumist"
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsafirmad", href: "/" },
            { label: "Lemeks", href: "/lemeks/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a0f00] mb-6 leading-tight tracking-tight">
                  Lemeks Grupp
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Eesti metsanduse teerajaja.</strong> Lemeks Grupp on 1993. aastal asutatud Eesti kapitalil põhinev ettevõte, mis on tänaseks kasvanud Eesti suurimaks metsatööstuskontserniks. Ettevõtte tegevus on laiahaardeline, hõlmates kogu puidu väärindamise ahelat alates metsa istutamisest kuni lõpptoodangu valmistamiseni. Tänu pikaajalisele kogemusele ja strateegilisele juhtimisele on Lemeksist saanud usaldusväärne partner nii metsaomanikele kui ka rahvusvahelistele klientidele, pakkudes kvaliteetset toorainet ja valmistoodangut.
                </p>

                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  Grupi edu taga on pidev investeerimine kaasaegsetesse tehnoloogiatesse ja jätkusuutlikku majandamisse. Lemeks Grupp ei tegele mitte ainult metsa raiumisega, vaid panustab aktiivselt ka metsade uuendamisse ja hooldamisse, tagades seeläbi Eesti metsade elujõulisuse ka tulevastele põlvedele. Nende portfelli kuulub kümneid tütarettevõtteid, mis spetsialiseeruvad erinevatele metsanduse ja puidutööstuse valdkondadele, luues sünergia, mis on unikaalne kogu Baltikumis.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12 mt-8">
                   {[
                    { title: "34+ tütarettevõtet", desc: "Gruppi kuulub üle 30 tütar- ja sidusettevõtte.", icon: Building2 },
                    { title: "Rahvusvaheline", desc: "Tegevus toimub Eestis, Lätis, Rootsis, Prantsusmaal ja Suurbritannias.", icon: Globe2 },
                    { title: "1000+ töötajat", desc: "Üks suurimaid tööandjaid Eesti metsasektoris.", icon: Trees },
                    { title: "Lai tegevusala", desc: "Metsamajandus, puidutööstus ja põllumajandus.", icon: Tractor }
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
                  Miks valida partneriks Lemeks Grupp?
                </h3>
                
                <p className="mb-6">
                  Lemeks Grupi edu aluseks on vertikaalne integratsioon. See tähendab, et ettevõte kontrollib protsesse alates toorme varumisest kuni valmistoodanguni. Nende peamised tegevussuunad on:
                </p>

                <ul className="space-y-4 not-prose mb-12">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Metsamajandus ja puidu varumine:</strong> Metsade jätkusuutlik majandamine, raieõiguste ja metsakinnistute ost on grupi tegevuse alustala. Läbi tütarettevõtete tagatakse efektiivne ja keskkonnasäästlik metsade majandamine.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Saetööstus:</strong> Kvaliteetse saematerjali tootmine ehituse ja mööblitööstuse jaoks (nt Palmako, Imprest). Grupi saeveskid on varustatud tipptasemel seadmetega, mis võimaldavad toota täpsete mõõtudega ja kõrge kvaliteediga materjali.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Põllumajandus:</strong> Lisaks metsandusele tegeleb grupp ka teraviljakasvatuse ja põllumajandusteenustega, hajutades riske ja pakkudes tööd maapiirkondades.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 text-[#347D4E] mt-1" size={20} />
                    <span><strong>Vineeritööstus:</strong> Kasevineeri tootmine (Estonian Plywood AS) on üks uuemaid ja kiiremini kasvavaid suundi, mis väärindab kohalikku kaske.</span>
                  </li>
                </ul>

                <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a0f00] mt-12 mb-6">
                  Lemeks Grupi roll Eesti majanduses
                </h3>

                <p className="mb-6">
                  Olles üks suurimaid tööandjaid väljaspool Tallinna, on Lemeks Grupil oluline roll regionaalarengus. Ettevõte pakub stabiilset tööd ja sissetulekut sadadele peredele Lõuna-Eestis ja mujal. Lisaks otsesele tööhõivele toetab grupp ka kohalikku kogukonda ja kultuuri, olles vastutustundlik suurettevõte. Nende rahvusvaheline haare aitab tutvustada Eestit kui kvaliteetse puidu ja nutikate lahenduste riiki, aidates kaasa ekspordimahu kasvule.
                </p>

                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <Info size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight mb-2">Võrdle pakkumisi!</h3>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Lemeks Grupp on kindel ja suur tegija. Siiski soovitame metsaomanikul alati võtta pakkumine ka Metsamaakleri kaudu. Meie võrgustik võimaldab küsida hinda korraga paljudelt usaldusväärsetelt ostjatelt, tagades sulle parima võimaliku tehingu. Konkurents on ainus viis tagada, et saate oma vara eest turu parima hinna, olenemata sellest, kui suur või väike on teie metsakinnistu.
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
                    Küsi tasuta ja kohustusevaba pakkumist Metsamaaklerilt. Teeme kindlaks, et saad oma metsa eest turu parima hinna.
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
