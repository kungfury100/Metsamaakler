import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ContactCTASection } from '../ContactCTASection';
import { useSeo } from '../../hooks/useSeo';
import { 
  TrendingUp, 
  ShieldCheck, 
  Trees, 
  CheckCircle2, 
  Leaf, 
  Coins, 
  Scale, 
  ArrowRight, 
  Phone, 
  Mail, 
  ChevronRight,
  Info,
  Truck,
  Axe,
  FileCheck,
  BadgeEuro,
  FileSignature,
  Map as MapIcon,
  FileText,
  Calendar,
  AlertCircle
} from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RaieoiguseMuukPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Kuidas kujuneb raieõiguse hind?",
      answer: "Raieõiguse hind sõltub peamiselt metsa liigilisest koosseisust ja sortimendist – kui palju saab metsast hinnalist palki ja kui palju odavamat paberipuitu. Samuti mõjutavad hinda raie ja väljaveo keerukus, asukoht ning turu hetkeseis."
    },
    {
      question: "Kas raieõiguse müük tähendab maa müüki?",
      answer: "Ei, see on oluline erinevus. Raieõiguse müügi korral jääb maa teie omandisse. Te müüte vaid õiguse raiuda kindlaksmääratud puidukogus. Maaomanikuna on teil kohustus metsa pärast raiet uuendada."
    },
    {
      question: "Millal on õige aeg raieõigust müüa?",
      answer: "Õige aeg sõltub metsa bioloogilisest küpsusest ja turuolukorrast. Ülevalminud mets hakkab kaotama väärtust. Talvine aeg on sageli parim pehmemate pinnaste raieks."
    },
    {
      question: "Kas raieõiguse müügilt tuleb maksta tulumaksu?",
      answer: "Jah, eraisikuna raieõiguse võõrandamisest saadud tulu kuulub maksustamisele. Siiski on metsaomanikel võimalik kasutada soodsat erikorda, mis lubab kulud maha arvata ja maksukohustust edasi lükata."
    },
    {
      question: "Mis saab, kui metsas on kahjustused?",
      answer: "Kahjustatud mets (nt ürask) tuleks raiuda esimesel võimalusel, et vältida puidu kvaliteedi langust. Ka kahjustatud puidul on väärtus, kuigi madalam kui tervel palgimetsal."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Raieõiguse müük',
        'description': 'Professionaalne raieõiguse ost ja metsa ülestöötamine. Metsamaakler pakub parimat hinda, kindlat lepingut ja kvaliteetset teostust.',
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
        'serviceType': 'Forest Management'
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
            'name': 'Raieõiguse müük',
            'item': 'https://metsamaakler.ee/raieoiguse-muuk/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Raieõiguse müük – Parim hind ja kindel tehing | Metsamaakler",
    description: "Planeerid raieõiguse müüki? Metsamaakler pakub põhjalikku analüüsi, parimat turuhinda ja kvaliteetset teostust. Loe täpsemalt protsessist ja hindadest.",
    canonical: "https://metsamaakler.ee/raieoiguse-muuk/",
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
          title="Raieõiguse müük"
          subtitle="Realiseerige oma metsa väärtus targalt. Pakume metsaomanikule kindlustunnet, parimat hinda ja professionaalset raieteostust üle Eesti."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Raieõiguse müük", href: "/raieoiguse-muuk/" }
          ]}
        />

        <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* MAIN CONTENT COLUMN (Left 8/12) */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none text-[#1a0f00]/70">
                
                {/* Introduction Section */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a0f00] mb-8 leading-[1.1] tracking-tight">
                  Miks valida raieõiguse müük?
                </h2>
                
                <p className="mb-6 text-lg md:text-xl leading-snug font-normal text-[#1a0f00]/80">
                  <strong>Raieõiguse müük</strong> on metsaomaniku jaoks üks olulisemaid ja strateegilisemaid otsuseid metsamajandamise elutsüklis. See on protsess, kus te realiseerite aastakümneid kasvanud metsa väärtuse, loovutamata sealjuures omandiõigust maale. Erinevalt metsakinnistu müügist, kus loobute kogu varast, võimaldab raieõiguse müük teil teenida tulu küpsest metsast, säilitades samal ajal maa kui pikaajalise investeeringu endale ja oma perele.
                </p>

                <p className="mb-6 leading-[1.6]">
                  Raieõiguse võõrandamine on juriidiline tehing, millega omanik annab metsa ülestöötajale õiguse teostada metsas raietöid kokkulepitud mahus ja tingimustel. See on ideaalne lahendus neile, kes soovivad vabaneda raieküpsest või kahjustatud metsast, kuid tahavad jätkata maapinna majandamist ja uue metsapõlve kasvatamist. Metsamaakler on teie usaldusväärne partner selles protsessis, pakkudes terviklikku teenust alates metsa hindamisest kuni tööde lõpliku teostuseni, tagades tehingu turvalisuse ja parima võimaliku hinna.
                </p>

                <p className="mb-10 leading-[1.6]">
                  Paljud metsaomanikud kardavad raieõiguse müügiga seotud bürokraatiat ja riske. Kas hind on õiglane? Kas mets saab raiutud korrektselt? Kas raha laekub õigeaegselt? Need on õigustatud küsimused. Meie eesmärk on muuta see protsess läbipaistvaks ja lihtsaks. Meie pikaajaline kogemus ja lai koostööpartnerite võrgustik võimaldavad meil pakkuda turu parimaid hindu ja kvaliteetset teostust, mis vastab rangetele keskkonnanõuetele.
                </p>

                {/* Expert Advice Block - Clean */}
                <div className="relative overflow-hidden bg-white rounded-2xl p-8 mb-12 border border-gray-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#347D4E]/30 transition-all duration-200 ease-out">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-[#347D4E] shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
                      <TrendingUp size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#1a0f00] m-0 tracking-tight">Maksimaalne tulu läbi sortimendi</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#347D4E]/10 text-[#347D4E]">
                          Eelis
                        </span>
                      </div>
                      <p className="text-[#1a0f00]/70 m-0 leading-normal text-base">
                        Metsa väärtus ei sõltu ainult tihumeetritest, vaid eelkõige sortimendist – ehk sellest, mida puidust teha saab. Palk on kordades kallim kui küttepuit. Analüüsime teie metsa sortimenti detailselt. Tänu täpsele järkamisele ja kaasaegsele tehnikale suudame optimeerida iga puu väärtuse, suunates selle just sinna, kus selle eest kõige rohkem makstakse – olgu see vineeritehas, saeveski või paberivabrik.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Millal on õige aeg raieõigust müüa?
                </h2>
                
                <p className="mb-6 leading-[1.6]">
                  Ajastus on metsanduses kriitilise tähtsusega. Õigeaegne raie tagab metsaomanikule suurima tulu ja metsale parima tervise. Liiga vara raiudes jääb saamata puidu juurdekasv ja kvaliteet. Liiga hilja raiudes aga hakkab puidu kvaliteet langema (nt südamemädanik, üraskikahjustused), mis viib hinna drastiliselt alla.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 not-prose">
                  <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#A8D0BC]/30">
                    <h4 className="font-bold text-[#163823] text-lg mb-3 flex items-center gap-2">
                      <Calendar size={20} />
                      Bioloogiline küpsus
                    </h4>
                    <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                      Igal puuliigil on oma optimaalne raievanus. Küps mets enam juurde ei kasva, vaid hakkab "seisma" või hääbuma. Raie vabastab ressursi uue metsa kasvuks.
                    </p>
                  </div>
                  <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#A8D0BC]/30">
                    <h4 className="font-bold text-[#163823] text-lg mb-3 flex items-center gap-2">
                      <TrendingUp size={20} />
                      Turuolukord
                    </h4>
                    <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                      Puiduhinnad kõiguvad maailmaturu nõudluse tõttu. Metsamaakler jälgib turgu igapäevaselt ja oskab soovitada hetke, millal hinnad on tipus, et tehing oleks teile võimalikult kasumlik.
                    </p>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Raieõiguse müügi kasud
                </h2>
                <p className="mb-8 leading-[1.5]">
                  Lisaks otsesele rahalisele tulule on raieõiguse müügil ka selge metsanduslik ja ökoloogiline eesmärk. Läbimõeldud raie on osa metsade loomulikust uuenemise tsüklist.
                </p>
                
                {/* Benefits Grid - Clean */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
                  {[
                    { 
                      title: "Uuendamine ja elujõud", 
                      desc: "Vana metsa eemaldamine annab ruumi ja valgust uuele metsapõlvele. See tagab, et mets püsib elujõuline ja toodab hapnikku ka tulevikus.", 
                      icon: Leaf 
                    },
                    { 
                      title: "Haiguste ja kahjurite tõrje", 
                      desc: "Õigeaegne raie, eriti sanitaarraie, peatab juurepessi, üraskite ja teiste ohtlike kahjurite leviku naabermetsadesse.", 
                      icon: ShieldCheck 
                    },
                    { 
                      title: "Süsiniku sidumine", 
                      desc: "Noor ja kiiresti kasvav mets seob atmosfäärist süsinikku intensiivsemalt kui vana ja lagunev mets. Puidu kasutamine ehituses talletab süsinikku pikaks ajaks.", 
                      icon: Trees 
                    },
                    { 
                      title: "Pärandvara säilimine", 
                      desc: "Maa jääb perekonnale. Raie on vaid üks etapp metsa pikas eluringis. Tark majandamine tõstab kinnistu väärtust pikas perspektiivis.", 
                      icon: MapIcon 
                    }
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

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Raieõiguse müügiprotsess samm-sammult
                </h2>
                
                <p className="mb-8 leading-[1.6]">
                  Metsamaakler on teinud müügiprotsessi võimalikult lihtsaks ja turvaliseks. Meie spetsialistid hoolitsevad kogu asjaajamise eest, alates dokumentidest kuni logistikani.
                </p>

                {/* Timeline Visualization - Detailed */}
                <div className="space-y-8 not-prose mb-16">
                  {[
                    { 
                      icon: FileCheck,
                      title: "1. Analüüs ja hindamine", 
                      desc: "Esimene samm on metsaressursi hindamine. Kontrollime metsaregistri andmeid ja teie kinnistu eripärasid. Vajadusel saadame metsaspetsialisti kohapeale, et hinnata puistu tegelikku seisu, ligipääsetavust ja maapinna tingimusi. Selle põhjal koostame esialgse hinnapakkumise, mis on teile tasuta ja kohustustevaba." 
                    },
                    { 
                      icon: FileText,
                      title: "2. Metsateatis ja planeerimine", 
                      desc: "Raieõiguse müügiks on vajalik kehtiv metsateatis. Kui teil seda pole, aitame selle taotlemisel Keskkonnaametist. Samuti kontrollime, kas on vaja kehtivat metsamajandamiskava. Planeerime raietööd, arvestades ilmastikuolusid ja pinnase kandevõimet." 
                    },
                    { 
                      icon: FileSignature,
                      title: "3. Leping ja kokkulepped", 
                      desc: "Sõlmime kirjaliku raieõiguse võõrandamise lepingu, kus on fikseeritud kõik olulised tingimused: hind, maksetähtajad, raie teostamise aeg, sortimendi nõuded ja metsa sanitaarne seisund pärast raiet. See tagab mõlemale poolele juriidilise kindluse." 
                    },
                    { 
                      icon: Axe,
                      title: "4. Raietööd ja logistika", 
                      desc: "Meie kogenud partnerid teostavad raie kaasaegse metsatehnikaga. Pöörame suurt rõhku metsapinnase säästmisele ja naaberkinnistute austamisele. Korraldame puidu väljaveo ja transpordi töötlemiskohtadesse." 
                    },
                    { 
                      icon: Coins,
                      title: "5. Mõõtmine ja lõpparve", 
                      desc: "Raiutud puit mõõdetakse täpselt (enamasti VMF meetodil või tehase vastuvõtmise aktide alusel). Koostame detailse raporti ja akti. Tasumine toimub vastavalt lepingule, kas ettemaksuna või materjali väljatuleku alusel." 
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group cursor-default items-start">
                      <div className="mt-1 text-gray-400 group-hover:text-[#347D4E] group-hover:scale-110 transition-all duration-200 ease-out shrink-0">
                         <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="pb-8 border-b border-gray-100 last:border-0 w-full">
                        <h4 className="font-bold text-[#1a0f00] text-xl mb-2 group-hover:text-[#347D4E] transition-colors duration-200">{step.title}</h4>
                        <p className="text-[#1a0f00]/70 leading-relaxed text-base">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-12 mb-8 leading-tight">
                  Hinnastamise mudelid: Kuidas valida?
                </h2>
                
                <p className="mb-8 leading-[1.6]">
                  Raieõiguse müügil on peamiselt kaks hinnastamise viisi. Mõlemal on oma eelised sõltuvalt metsaomaniku riskitaluvusest ja metsa iseloomust.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                  {/* Model 1 */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-lg transition-all duration-200 group flex flex-col h-full">
                    <div className="mb-6 text-green-600 group-hover:scale-105 transition-transform duration-200">
                      <Coins size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-[#1a0f00] text-xl mb-3">Fikseeritud hind (Kogusumma)</h3>
                    <p className="text-[#1a0f00]/60 text-sm leading-relaxed mb-6">
                      See on lihtsaim ja riskivabaim valik omanikule. Lepime kokku konkreetse lõpphinna kogu raieõiguse eest enne tööde algust. Teate täpselt, kui palju raha saate, sõltumata sellest, kui palju puitu tegelikult metsast välja tuleb või mis juhtub puiduhindadega.
                    </p>
                    <ul className="mt-auto space-y-3">
                      <li className="flex gap-3 items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#347D4E]" />
                        <span>Kindel summa kontol enne tööde lõppu</span>
                      </li>
                      <li className="flex gap-3 items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#347D4E]" />
                        <span>Kogu risk (ilm, hinnad) jääb ostjale</span>
                      </li>
                      <li className="flex gap-3 items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#347D4E]" />
                        <span>Sobib, kui vajate raha kiiresti</span>
                      </li>
                    </ul>
                  </div>

                  {/* Model 2 */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#347D4E]/30 hover:shadow-lg transition-all duration-200 group flex flex-col h-full">
                    <div className="mb-6 text-green-600 group-hover:scale-105 transition-transform duration-200">
                      <Scale size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-[#1a0f00] text-xl mb-3">Väljatuleku alusel (Ühikuhind)</h3>
                    <p className="text-[#1a0f00]/60 text-sm leading-relaxed mb-6">
                      Valik teadlikumale omanikule. Lepime kokku hinnad iga sortimendi (palk, paberipuu, küttepuu) tihumeetri kohta. Lõplik summa selgub pärast raietöid mõõtmisaktide alusel. Kui mets on kvaliteetne ja palki tuleb oodatust rohkem, teenite rohkem.
                    </p>
                    <ul className="mt-auto space-y-3">
                      <li className="flex gap-3 items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#347D4E]" />
                        <span>Potentsiaalselt suurim võimalik tulu</span>
                      </li>
                      <li className="flex gap-3 items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#347D4E]" />
                        <span>Täiesti läbipaistev, aktipõhine arveldus</span>
                      </li>
                      <li className="flex gap-3 items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#347D4E]" />
                        <span>Tasumine toimub järk-järgult</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#F0FDF4] border border-[#347D4E]/20 rounded-xl p-6 mb-12 not-prose">
                  <h4 className="font-bold text-[#163823] text-lg mb-3 flex items-center gap-2">
                    <AlertCircle size={20} className="text-[#347D4E]" />
                    Metsamaakleri soovitus
                  </h4>
                  <p className="text-sm text-[#1a0f00]/70 m-0 leading-relaxed">
                    Kui teie mets on väga kvaliteetne ja hästi hooldatud, soovitame sageli <strong>väljatuleku alusel</strong> müüki, sest see premeerib teid palgi suure osakaalu eest. Kui aga mets on ebaühtlane või soovite vältida igasugust ebakindlust, on <strong>fikseeritud hind</strong> turvalisem valik.
                  </p>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a0f00] mt-16 mb-8 leading-tight">
                  Miks eelistada Metsamaaklerit?
                </h2>
                
                <p className="mb-6 leading-[1.6]">
                  Metsamaakler ei ole lihtsalt vahendaja, vaid teie partner. Meie tugevus seisneb sõltumatuses ja laias kontaktvõrgustikus. Me ei esinda ühte kindlat saeveskit, vaid otsime teie puidule ostjaid üle kogu turu. See konkurents tagab teile parima hinna.
                </p>

                <ul className="space-y-4 mb-12 not-prose">
                  {[
                    "Kogenud meeskond ja personaalne lähenemine igale metsaomanikule.",
                    "Korrektsed ja juriidiliselt pädevad lepingud, mis kaitsevad teie huve.",
                    "Kiire asjaajamine ja operatiivne suhtlus – hindamine 24h jooksul.",
                    "Paindlikud maksetingimused ja vajadusel ettemaksu võimalus.",
                    "Vastutustundlik suhtumine metsa ja keskkonda."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#1a0f00]/80">
                      <CheckCircle2 size={20} className="text-[#347D4E] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Info Block - Tax Info */}
                <div className="group mb-12 p-6 rounded-xl bg-[#FFFBF0] border border-[#FDE68A] flex gap-5 not-prose">
                  <div className="shrink-0 mt-1 text-[#F59E0B]">
                    <Info size={24} strokeWidth={2} />
                  </div>
                  <div className="text-[#92400E] text-sm leading-relaxed">
                    <strong className="block text-[#B45309] mb-2 text-base">Oluline teada tulumaksust</strong>
                    Füüsilisest isikust metsaomanikul on õigus raieõiguse müügist saadud tulust maha arvata metsa majandamise kulud (nt metsakava koostamine, istutamine, valgustusraie). See vähendab oluliselt maksukoormust. Samuti saab tulumaksu tasumist edasi lükata kuni 3 aastat, kui kasutate tulu investeerimiskontole kandmist. Küsi meilt täpsemat nõu!
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
                        Milline on hetkel raieõiguse turuhind?
                      </p>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#347D4E] group-hover:text-[#2d6e43] transition-colors duration-200">
                        Loe lähemalt <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </a>

                    {/* Card 2 */}
                    <a href="/metsateatis/" className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#347D4E]/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 ease-out flex flex-col items-start h-full">
                      <div className="mb-6 text-[#347D4E] group-hover:scale-105 transition-transform duration-200">
                        <FileText size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-[#1a0f00] text-lg mb-2 group-hover:text-[#347D4E] transition-colors duration-200">
                        Metsateatis
                      </h4>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Kuidas taotleda raieluba?
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
                        Kehtiv kava on müügi eelduseks.
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

                  <h3 className="text-2xl font-bold text-[#1a0f00] mb-2 relative z-10">Soovid müüa raieõigust?</h3>
                  <p className="text-[#1a0f00]/60 mb-8 relative z-10 leading-relaxed">
                    Küsi tasuta hinnapakkumist. Teeme metsa hindamise 24h jooksul ja garanteerime parima turuhinna.
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
