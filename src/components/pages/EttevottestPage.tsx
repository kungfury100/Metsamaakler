import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  ShieldCheck, 
  Users, 
  TreePine, 
  Target, 
  Leaf,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { MicroInteractive } from '../MicroInteractive';
import { OptimizedImage } from '../ui/OptimizedImage';
import metsaMuuk6 from '../assets/4b2e194a21319b2ceec94f7dc877528470a8fcf4.png';

// Use same image as in AboutSection ("põlvkondade tarkus" section)
const HERO_IMAGE_SRC = `${metsaMuuk6.split('#')[0]}#filename=metsa-muuk-6.png`;

export const EttevottestPage: React.FC = () => {
  useSeo({
    title: "Ettevõttest | Metsamaakler - Usaldusväärne metsapartner",
    description: "Metsamaakler on Eesti kapitalil põhinev metsandusettevõte. Meie eesmärk on pakkuda metsaomanikele läbipaistvat, kiiret ja tulusat metsa majandamise teenust.",
    canonical: "https://metsamaakler.ee/ettevottest/"
  });

  const stats = [
    { label: "Aastat kogemust", value: "15+" },
    { label: "Hinnatud hektarit", value: "50 000+" },
    { label: "Rahulolevat klienti", value: "1200+" },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Usaldusväärsus",
      desc: "Oleme tegutsenud metsandusturul üle 15 aasta. Meie sõna maksab ja lepingud on vettpidavad. Tagame tehingute juriidilise korrektsuse ja läbipaistvuse."
    },
    {
      icon: Target,
      title: "Täpsus ja kiirus",
      desc: "Hindame teie aega. Teeme pakkumise 24 tunni jooksul ja vormistame tehingud notaris ilma liigse viivituseta. Raha laekub kontole koheselt."
    },
    {
      icon: Users,
      title: "Personaalne lähenemine",
      desc: "Iga mets ja iga omanik on erinev. Läheneme igale projektile individuaalselt, et leida just teile sobivaim lahendus – olgu see raieõiguse või kinnistu müük."
    },
    {
      icon: TreePine,
      title: "Säästlik majandamine",
      desc: "Jälgime rangelt häid metsandustavasid ja keskkonnanõudeid. Meie eesmärk on, et mets oleks elujõuline ja väärtuslik ka järeltulevatele põlvedele."
    }
  ];

  return (
    <div className="min-h-screen relative bg-white font-inter selection:bg-[#347D4E] selection:text-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        {/* Custom Hero Section */}
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className="relative z-10">
                <MicroInteractive>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#347D4E]/10 text-[#347D4E] text-sm font-bold tracking-wider uppercase mb-6">
                    <Leaf size={14} strokeWidth={2.5} />
                    <span>Meie lugu</span>
                  </div>
                </MicroInteractive>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-[#1a0f00] mb-6 leading-[1.1] tracking-tight">
                  Eesti metsa <span className="text-[#347D4E]">usaldusväärne</span> hoidja ja majandaja.
                </h1>
                
                <p className="text-xl text-[#1a0f00]/70 mb-8 leading-relaxed max-w-xl">
                  Metsamaakler on loodud eesmärgiga tuua metsandussektorisse selgust ja ausust. Oleme partneriks nii erametsaomanikele kui ka suurtele metsafirmadele.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#kontakt" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#347D4E] text-white font-bold text-lg hover:bg-[#2d6e43] hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
                    Võta ühendust
                  </a>
                  <a href="/teenused/" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#1a0f00] border border-gray-200 font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
                    Meie teenused
                  </a>
                </div>
              </div>

              {/* Right Image Composition */}
              <div className="relative lg:h-[600px] hidden lg:block">
                <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-2 duration-700 ease-out border-4 border-white">
                  <OptimizedImage 
                    src={HERO_IMAGE_SRC} 
                    alt="Metsamaakleri meeskond" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-12 left-0 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#347D4E]/10 flex items-center justify-center text-[#347D4E]">
                      <Award size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1a0f00] text-lg">Tipptasemel</div>
                      <div className="text-sm text-gray-500">Kvaliteet ja kogemus</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed m-0">
                    Oleme uhked oma meeskonna üle, kes omab pikaajalist kogemust Eesti metsanduses.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#163823] text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 text-[#4ade80] group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.value}
                  </div>
                  <div className="text-white/70 font-medium text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content & Values */}
        <div className="py-20 lg:py-32 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a0f00] mb-6">Miks valida Metsamaakler?</h2>
            <p className="text-lg text-[#1a0f00]/60 leading-relaxed">
              Me ei ole lihtsalt tehingupartner, vaid nõustaja. Meie eesmärk on aidata teil teha tarku otsuseid, mis kasvatavad teie vara väärtust pikas perspektiivis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-[#F0F7F4] text-[#347D4E] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#347D4E] group-hover:text-white transition-all duration-300">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#1a0f00] mb-4">{item.title}</h3>
                <p className="text-[#1a0f00]/60 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team/Process Split Section */}
        <div className="bg-[#F8FAF9] py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1a0f00] mb-8">Kuidas me töötame?</h2>
                <div className="space-y-8">
                  {[
                    { title: "Kuulame", desc: "Kaardistame teie soovid ja vajadused. Iga mets on unikaalne." },
                    { title: "Analüüsime", desc: "Teeme põhjaliku hinnaanalüüsi, arvestades turu hetkeseisu ja metsa eripärasid." },
                    { title: "Teostame", desc: "Vormistame korrektsed lepingud ja korraldame kõik vajalikud toimingud." },
                    { title: "Vastutame", desc: "Tagame, et kõik tööd tehakse vastavalt kokkuleppele ja seadustele." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#347D4E] text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#1a0f00] mb-2">{step.title}</h4>
                        <p className="text-[#1a0f00]/60">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-[#347D4E] rounded-3xl rotate-3 opacity-10 transform translate-x-4 translate-y-4"></div>
                 <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative z-10">
                    <h3 className="text-2xl font-bold text-[#1a0f00] mb-6">Meie põhimõtted</h3>
                    <ul className="space-y-4">
                      {['Aus hinnastamine', 'Kiire asjaajamine', 'Sularahavabad tehingud', 'Professionaalne meeskond', 'Jätkusuutlik metsandus'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg text-[#1a0f00]/80">
                          <CheckCircle2 size={24} className="text-[#347D4E]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-500">
                          "Meie missioon on olla metsaomanikule partneriks, keda saab usaldada silmad kinni."
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <ContactCTASection title="Valmis koostööks?" subtitle="Võta meiega ühendust ja leiame sinu metsale parima lahenduse." />
      </main>

      <Footer />
    </div>
  );
};
