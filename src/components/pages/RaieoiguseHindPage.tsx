import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Calculator, TrendingUp, Trees, Axe, DollarSign, Scale, AlertCircle, CheckCircle2, HelpCircle, FileBarChart, PieChart } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const RaieoiguseHindPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis on kännuraha?",
      answer: "Kännuraha on summa, mis jääb metsaomanikule kätte pärast kõikide kulude mahaarvamist. See arvutatakse valemiga: Materjali müügihind (kokkuostus) miinus ülestöötamise kulud (raie + transport) miinus maanteetransport."
    },
    {
      question: "Kui palju maksab 1 hektar raieõigust?",
      answer: "Raieõiguse hektari hind võib varieeruda 1000 eurost (väheväärtuslik võsa) kuni 20 000+ euroni (jäme palgimets). Hinda ei määra pindala, vaid sellel kasvava puidu maht ja kvaliteet."
    },
    {
      question: "Kas oksjonil saab parema hinna kui otsepakkumisega?",
      answer: "Mitte alati. Oksjonil pakuvad sageli vahendajad, kes võtavad oma vaheltkasu. Müües otse lõpptarbijale või suurele metsafirmale nagu Metsamaakler (kellel on pikaajalised lepingud), võite saada parema hinna tänu väiksematele vahenduskuludele."
    },
    {
      question: "Kuidas mõjutab aastaaeg hinda?",
      answer: "Talvine raie on sageli odavam teostada (pinnas kannab), kuid nõudlus võib olla suur. Kevadine teedelagunemine peatab transpordi, mis võib hinda mõjutada. Parim aeg müügiks on siis, kui tööstustel on tooraine puudus – jälgime turgu igapäevaselt."
    },
    {
      question: "Kas raieõiguse müügilt tuleb maksta tulumaksu?",
      answer: "Jah, eraisikuna raieõigust müües on tulumaks 20%. Siiski saab sellest summast maha arvata metsa majandamisega seotud tõendatud kulud (istutamine, valgustusraie, tehnika rent jne) viimase kolme aasta jooksul."
    },
    {
      question: "Mis vahe on fikseeritud hinnal ja väljatuleku alusel maksmisel?",
      answer: "Fikseeritud hind on kindel summa enne tööde algust (risk ostjal). Väljatuleku alusel maksmine tähendab, et lõpphind selgub pärast materjali mõõtmist (risk ja võimalus omanikul). Kui mets on hea, on väljatuleku alusel müük sageli tulusam."
    }
  ];

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Raieõiguse hindamine ja ost',
        'description': 'Raieõiguse hinna kujunemine ja parima pakkumise saamine. Uuri, kuidas arvutatakse kännuraha ja küsi pakkumist.',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Metsamaakler'
        }
      },
      {
        '@type': 'Article',
        'headline': 'Raieõiguse hind ja kännuraha arvutamine',
        'description': 'Kuidas kujuneb raieõiguse hind? Loe detailset juhendit sortimendi hindadest, ülestöötamise kuludest ja turusituatsioonist.',
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
            'name': 'Metsaomanikule',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Raieõiguse hind',
            'item': 'https://metsamaakler.ee/raieoiguse-hind/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Raieõiguse hind – Kännuraha kalkulaator ja hinnainfo",
    description: "Soovid müüa raieõigust? Loe siit, millest sõltub raieõiguse hind, kuidas arvutatakse kännuraha ja millal on parim aeg tehinguks.",
    canonical: "https://metsamaakler.ee/raieoiguse-hind/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Maksimaalne tulu",
      description: "Optimeerime järkamist (palgi pikkust), et saada igast puust kätte kõige kallim sortiment."
    },
    {
      icon: Scale,
      title: "Ausad kaalud",
      description: "Kogu puit mõõdetakse sertifitseeritud ja taadeldud mõõtesüsteemidega. Tulemused on teile nähtavad."
    },
    {
      icon: TrendingUp,
      title: "Turu tipphinnad",
      description: "Tänu suurtele mahtudele on meil saeveskites erilepingud, mis tagavad parema hinna kui väike-müüjale."
    }
  ];

  return (
    <div className="min-h-screen relative bg-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Raieõiguse hind"
          subtitle="Kuidas saada oma metsa eest õiglast tasu? Selgitame lahti kännuraha valemi ja aitame teil teenida maksimaalset tulu."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Metsaomanikule", href: "/" },
            { label: "Raieõiguse hind", href: "/raieoiguse-hind/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Raieõiguse hind – mis see on ja kuidas seda arvutatakse?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Kui metsaomanik otsustab müüa kasvavat metsa, puutub ta kokku terminiga <strong>raieõiguse hind</strong> (sageli nimetatud ka kännurahaks). Lihtsustatult on see summa, mis jääb metsaomanikule taskusse pärast seda, kui puit on maha võetud, metsast välja veetud ja saeveskisse müüdud. Kuid selle numbri taga peitub keeruline matemaatika.
            </p>

            <p className="mb-8 leading-relaxed">
              Paljud omanikud eeldavad ekslikult, et raieõiguse hind võrdub puidu turuhinnaga. Tegelikkuses on puidu lõpphind (see, mida maksab saeveski väravas) vaid üks osa võrrandist. Sellest tuleb lahutada kõik kulud, mis kaasnevad puu muutmisega palgiks. Mida efektiivsem on töö ja mida parem on metsa kvaliteet, seda suurem osa jääb omanikule.
            </p>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                    <benefit.icon className="text-[#347D4E]" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#163823] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kännuraha valem: Kuhu kaob raha?
            </h2>
            <p className="mb-6">
              Selleks, et mõista pakkumiste sisu, tuleb vaadata "kapoti alla". Raieõiguse hind kujuneb järgmise loogika alusel:
            </p>

            <div className="bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose mb-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-[#347D4E] text-xl shrink-0">+</div>
                  <div>
                    <h4 className="font-bold text-[#163823] text-lg">Puidu müügihind</h4>
                    <p className="text-sm text-gray-600 m-0">Summa, mida maksavad saeveskid, katlamajad ja paberitehased materjali eest.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600 text-xl shrink-0">–</div>
                  <div>
                    <h4 className="font-bold text-[#163823] text-lg">Ülestöötamise kulu (Raie + Kokkuvedu)</h4>
                    <p className="text-sm text-gray-600 m-0">Harvesteri ja forvarderi töö. Tavaliselt 15-20 €/tm, sõltub metsa tihedusest ja puude jämedusest.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600 text-xl shrink-0">–</div>
                  <div>
                    <h4 className="font-bold text-[#163823] text-lg">Transpordikulu</h4>
                    <p className="text-sm text-gray-600 m-0">Puidu vedu metsast lõpplaohoonesse. Hind sõltub vahemaast (nt 8-15 €/tm).</p>
                  </div>
                </div>

                <div className="h-px bg-gray-300 w-full my-2"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#347D4E] flex items-center justify-center font-bold text-white text-xl shrink-0">=</div>
                  <div>
                    <h4 className="font-bold text-[#163823] text-xl">Raieõiguse hind (Kännuraha)</h4>
                    <p className="text-sm text-gray-600 m-0">See on summa, mis makstakse metsaomanikule.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Miks on palk kordades kallim kui paberipuu?
            </h2>
            <p className="mb-6">
              Metsa väärtuse kuldreegel on: <strong>sortiment määrab hinna</strong>. Üks tihumeeter (1 m³) puitu ei ole võrdne teisega. Hinnad erinevad drastiliselt:
            </p>

            <div className="space-y-6 not-prose mb-10">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-[#163823] text-lg">Oksavaba palk</h4>
                  <div className="text-3xl font-bold text-[#347D4E] my-2">~90-120 €</div>
                  <div className="text-xs text-gray-500">per tihumeeter (tm)</div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-sm text-gray-700 leading-relaxed mb-0">
                    See on metsa "fileetükk". Sirge, jäme ja oksavaba männi- või kuusepalk. Sellest tehakse ehitusmaterjali, liimpuitu, mööblit. Iga metsaomaniku eesmärk peaks olema kasvatada võimalikult palju palki. Iga sentimeeter diameetrit ja iga meeter sirget tüve tõstab hinda.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 text-center p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-bold text-[#163823] text-lg">Paberipuit</h4>
                  <div className="text-3xl font-bold text-yellow-700 my-2">~40-60 €</div>
                  <div className="text-xs text-gray-500">per tihumeeter (tm)</div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-sm text-gray-700 leading-relaxed mb-0">
                    Kõverad, peenemad või okslikud tüved. Kasutatakse tselluloosi ja paberi tootmiseks. Kuigi hind on madalam, moodustab see sageli suure osa metsa mahust (eriti harvendusraietel). Turuhind kõigub palju, sõltudes maailmaturu nõudlusest.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#163823] text-lg">Küttepuit</h4>
                  <div className="text-3xl font-bold text-gray-600 my-2">~25-35 €</div>
                  <div className="text-xs text-gray-500">per tihumeeter (tm)</div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-sm text-gray-700 leading-relaxed mb-0">
                    Madalaima kvaliteediga puit (mädanikuga, kõver, peenike). Kasutatakse hakkepuiduks või halupuuks. Sageli katab küttepuidu müügihind vaevu ülestöötamise kulud, mistõttu metsaomanikule jääb sellest kätte väga vähe ("nulli minek").
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kuidas saada raieõiguse eest parim hind?
            </h2>
            <p className="mb-6">
              Hinna maksimeerimine ei tähenda alati "kõige kallima pakkuja" valimist. Sageli peitub kurat detailides – millised on lisatingimused, mõõtmismeetodid ja varjatud kulud. Siin on mõned strateegiad:
            </p>

            <ul className="space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                <span><strong>Õige ajastus:</strong> Jälgige puiduturgu. Kui ehitussektor on buumis, on palgi hind laes. Kui talv on soe ja teed lagunevad, võib puidu väljavedu olla kallis või võimatu, mis surub hinda alla.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                <span><strong>Sortimendi optimeerimine (Järkamine):</strong> Harvesteri operaatori oskusest sõltub palju. Kui ta suudab ühest puust välja lõigata maksimaalselt palki (nt 4.3m, 5.1m pikkused), on tulu suurem. Metsamaakler kasutab vaid kogenud operaatoreid.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                <span><strong>Mahtude koondamine:</strong> Kui müüte korraga suurema koguse (või naabritega koos), on transpordi ja tehnika ühikukulu väiksem, mis jätab teile rohkem raha kätte.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#347D4E] mt-1 shrink-0" size={20} />
                <span><strong>Usaldusväärne partner:</strong> Väldi "musta turgu". Ametlik partner tagab, et kõik kogused mõõdetakse ausalt ja maksud saavad makstud. Pettuse korral kaotate rohkem kui "sularaha võit".</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kas müüa fikseeritud hinnaga või väljatuleku alusel?
            </h2>
            <p className="mb-6">
              See on üks olulisemaid otsuseid lepingu sõlmimisel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <FileBarChart size={20} className="text-[#347D4E]" />
                  Fikseeritud hind
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Hind lepitakse kokku enne raiet (nt 15 000 € kogu langi eest).
                </p>
                <div className="bg-green-50 p-3 rounded text-sm text-green-800 mb-2"><strong>Pluss:</strong> Kindlus. Teate täpselt, kui palju raha saate, sõltumata ilmast või puidu tegelikust kvaliteedist (nt kui selgub, et puud on seest mädad).</div>
                <div className="bg-red-50 p-3 rounded text-sm text-red-800"><strong>Miinus:</strong> Ostja arvestab pakkumises riskimarginaali. Kui puitu tuleb rohkem või see on parem, jääb see tulu ostjale, mitte teile.</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <PieChart size={20} className="text-[#347D4E]" />
                  Väljatuleku alusel
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Hind kujuneb reaalselt raiutud koguste ja kokkulepitud ühiku hindade alusel.
                </p>
                <div className="bg-green-50 p-3 rounded text-sm text-green-800 mb-2"><strong>Pluss:</strong> Õiglane. Saate tasu iga tihumeetri eest. Kui mets on kvaliteetne, teenite maksimaalselt. Läbipaistev protsess.</div>
                <div className="bg-red-50 p-3 rounded text-sm text-red-800"><strong>Miinus:</strong> Risk. Kui puidus on varjatud rikkeid (mädanik) või turg kukub raie ajal, on lõppsumma väiksem kui loodetud.</div>
              </div>
            </div>

            <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 my-8 not-prose">
              <h3 className="text-xl font-bold text-[#163823] mb-3 flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-600" />
                Soovitus
              </h3>
              <p className="text-gray-700 mb-0 text-sm leading-relaxed">
                Kui olete oma metsa kvaliteedis kindel (hooldatud mets), soovitame valida <strong>väljatuleku alusel</strong> müügi. See on statistiliselt tulusam. Kui mets on vana, hooldamata või kahtlase tervisega, võib <strong>fikseeritud hind</strong> pakkuda paremat turvatunnet.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Maksustamine – mida peab teadma?
            </h2>
            <p className="mb-6">
              Raieõiguse müük on tulu, mida riik maksustab. Eraisikule kehtib tulumaks 20%. Siiski ei pea maksu maksma kogu summalt.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li><strong>Kulude mahaarvamine:</strong> Teil on õigus tulust maha arvata metsa majandamiseks tehtud kulud. Nendeks võivad olla metsaistutusmaterjal, maapinna ettevalmistus, valgustusraie, metsatehnika ost või rent, metsamajandamiskava tellimine jne.</li>
              <li><strong>Kolme aasta reegel:</strong> Kulusid saab maha arvata tulu saamise aastal ja sellele järgneval kolmel aastal. Samuti saab kulusid "edasi kanda" – kui tegite kulutusi varem, aga tulu saate täna.</li>
              <li><strong>FIE vs Eraisik:</strong> FIE-dele kehtivad erireeglid ja sotsiaalmaks. Eraisikuna (kasutades metsamajandamise erikorda) on asjaajamine sageli lihtsam.</li>
            </ul>

            {/* FAQ Section */}
            <div className="mt-16 bg-[#F8FAF9] rounded-2xl p-8 md:p-12 border border-gray-100 not-prose">
              <h2 className="text-[29px] font-bold text-[#163823] mb-8 text-center">Korduma kippuvad küsimused</h2>
              <div className="space-y-6">
                {faqData.map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg text-[#163823] mb-2 flex items-start gap-3">
                      <HelpCircle className="text-[#347D4E] mt-1 shrink-0" size={20} />
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 ml-8 leading-relaxed mb-0">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <RelatedContent currentPath="/raieoiguse-hind/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
