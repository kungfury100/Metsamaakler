import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Landmark, Handshake, Gavel, Tractor, CheckCircle2, HelpCircle, Info, TrendingUp } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PollumaaOstPage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Mis määrab põllumaa hinna?",
      answer: "Põllumaa hinda mõjutavad enim mulla viljakus (boniteet), põllumassiivi suurus ja kuju (mida suurem ja kandilisem, seda parem), ligipääsetavus teedele, maaparandussüsteemide seisukord ning PRIA toetusteõigus."
    },
    {
      question: "Kas müüa saab ka renditud põllumaad?",
      answer: "Jah, rendilepinguga koormatud põllumaad saab müüa. Rendileping jääb kehtima ka uue omaniku puhul (kui lepingus pole teisiti sätestatud), kuid see võib mõjutada müügihinda ja ostjate ringi."
    },
    {
      question: "Kui kiiresti tehing toimub?",
      answer: "Kui me ostame maa otse endale, saame tehingu notaris vormistada sageli juba mõne päeva jooksul. Kui otsime parimat pakkujat läbi enampakkumise, võib protsess võtta 1-3 nädalat, et leida kõrgeim hind."
    },
    {
      question: "Kas müügist saadud tulu on maksustatav?",
      answer: "Füüsilise isiku puhul on kinnisasja müügist saadud kasu üldjuhul tulumaksuga maksustatav (20%). On erandeid, näiteks omandireformi käigus tagastatud maa esmane võõrandamine on maksuvaba. Soovitame alati konsulteerida maksuspetsialistiga."
    },
    {
      question: "Mis on põllumaa boniteet ja miks see on tähtis?",
      answer: "Boniteet on mulla viljakuse näitaja (hinne 0-100). Mida kõrgem boniteet, seda suurem on saagikuspotentsiaal ja seda kõrgem on maa turuhind. Eestis loetakse heaks maaks boniteeti üle 40-50 punkti."
    }
  ];

  // JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Põllumaa ost',
        'description': 'Ostame põllumaad üle Eesti parima hinnaga. Kiire tehing, aus hindamine ja professionaalne asjaajamine.',
        'provider': {
          '@type': 'LocalBusiness',
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
            'name': 'Teenused',
            'item': 'https://metsamaakler.ee/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Põllumaa ost',
            'item': 'https://metsamaakler.ee/pollumaa-ost/'
          }
        ]
      }
    ]
  };

  useSeo({
    title: "Põllumaa ost – Parim hind ja kindel tehing | Metsamaakler",
    description: "Metsamaakler ostab põllumaad või leiab parima ostja. Hinnake oma põllumaa väärtust tasuta. Kiire tehing ja aus asjaajamine.",
    canonical: "https://metsamaakler.ee/pollumaa-ost/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  const features = [
    {
      icon: Handshake,
      title: "Otseost või vahendus",
      description: "Pakume paindlikkust: ostame maa otse välja kiireks tehinguks või korraldame enampakkumise maksimaalse turuhinna saamiseks."
    },
    {
      icon: Gavel,
      title: "Konkurentsivõimeline hind",
      description: "Tänu laiale koostöövõrgustikule põllumajandusettevõtetega suudame pakkuda või leida turu parima hinna."
    },
    {
      icon: Landmark,
      title: "Juriidiline korrektsus",
      description: "Korrastame paberimajanduse, suhtleme notari ja ametiasutustega. Teie jaoks on protsess lihtne ja stressivaba."
    }
  ];

  return (
    <div className="min-h-screen relative bg-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Põllumaa ost"
          subtitle="Müüge oma põllumaa parima hinnaga. Ostame ise või leiame parima ostja ilma vahendajateta."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Põllumaa ost", href: "/pollumaa-ost/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Soovite müüa põllumaad? Leiame parima lahenduse.
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Põllumaa on Eestis üks stabiilsemaid ja väärtuslikumaid varasid, mille hind on viimastel aastakümnetel järjepidevalt kasvanud. Siiski tuleb ette olukordi, kus omanikul on mõistlikum maa müüa – olgu põhjuseks rahaliste vahendite vajadus investeeringuteks, pärandiküsimused või soov loobuda maa haldamisega seotud kohustustest.
            </p>

            <p className="mb-8 leading-relaxed">
              <strong>Metsamaakler</strong> on teie usaldusväärne partner põllumaa tehingutes. Meie lähenemine on lihtne: pakume omanikule alati kahte võimalust. Me kas ostame põllumaa otse oma portfelli, tagades teile kohese ettemaksu ja kiire tehingu, või leiame teie maale parima võimaliku ostja meie laialdasest koostöövõrgustikust (suurtalunikud, investeerimisfondid). Meie eesmärk on, et tehing oleks läbipaistev ja teeksite otsuse, mis on teile majanduslikult kõige kasulikum.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                    <feature.icon className="text-[#347D4E]" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#163823] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Kuidas kujuneb põllumaa hind?
            </h2>
            <p className="mb-6">
              Erinevalt elukondlikust kinnisvarast, kus loeb "asukoht, asukoht, asukoht", on põllumaa puhul määravaks teguriks mulla tootlikkus ja harimise efektiivsus. Hind võib piirkonniti erineda kordades.
            </p>

            <div className="space-y-6 not-prose mb-10">
              <div className="bg-[#F0F7F4] p-6 rounded-xl border border-[#163823]/10">
                <h3 className="text-xl font-bold text-[#163823] mb-2 flex items-center gap-2">
                  <TrendingUp className="text-[#347D4E]" size={20} />
                  Mulla viljakus ehk boniteet
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  See on kõige olulisem näitaja. Viljakam muld (kõrgem boniteet) annab suuremat saaki vähema väetisekuluga. Eestis loetakse väga heaks põllumaaks alasid, kus boniteet on üle 45-50 punkti (nt Järvamaal, Lääne-Virumaal). Madalama viljakusega (liivased, kivised) maad on odavamad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2">
                  Põllumassiivi suurus ja kuju
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Kaasaegne põllutehnika on suur ja võimas. Mida suurem ja korrapärasem on põld, seda odavam on seda harida (vähem manööverdamist ja tühisõite). Seetõttu maksab 50-hektarine tervikmassiiv hektari kohta rohkem kui 2-hektarine ebakorrapärane lapp metsa servas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2">
                  Maaparandus ja ligipääs
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Toimiv drenaažisüsteem on Eesti kliimas kriitilise tähtsusega, et vältida liigniiskust. Samuti on oluline, et põllule pääseks ligi avalikult teelt rasketehnikaga. Ligipääsu puudumine või lagunenud maaparandus alandab hinda.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#163823] mb-2">
                  PRIA toetused
                </h3>
                <p className="text-gray-700 text-sm mb-0 leading-relaxed">
                  Põllumaa väärtus on tihedalt seotud Euroopa Liidu pindalatoetustega. Kui maa on PRIAs arvel ja "toetusõiguslik", on see ostjale kindlam investeering. Võsastunud põllumaa, mis tuleb esmalt puhastada, on madalama hinnaga.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Müügiprotsess samm-sammult
            </h2>
            <p className="mb-6">
              Metsamaakleriga on põllumaa müük tehtud võimalikult lihtsaks. Teie ei pea muretsema paberimajanduse ega kuulutamise pärast.
            </p>

            <ul className="space-y-6 mb-10 list-none pl-0">
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">1</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Hinnapäringu esitamine</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Võtke meiega ühendust ja edastage kinnistu katastritunnus. See on tasuta ega kohusta teid millekski.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">2</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Analüüs ja pakkumine</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Analüüsime maa väärtust, võrdleme tehinguinfot piirkonnas ja teeme teile konkreetse hinnapakkumise. Vajadusel tuleme kohapeale olukorraga tutvuma.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">3</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Tehingu vormistamine</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Sobiva hinna korral valmistame ette notariaalse müügilepingu. Lepime kokku notari aja teile sobivas asukohas.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#347D4E]/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E]">4</div>
                <div>
                  <h4 className="font-bold text-lg text-[#163823] mb-1">Raha laekumine</h4>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Raha kantakse teie kontole vastavalt notariaalsele lepingule, enamasti kohe pärast tehingu allkirjastamist deposiitkontolt.
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-green-50/50 p-6 rounded-xl border border-green-100 my-8 not-prose">
              <h3 className="text-xl font-bold text-[#163823] mb-3 flex items-center gap-2">
                <Info size={20} className="text-[#347D4E]" />
                Otseost vs. vahendus
              </h3>
              <p className="text-gray-700 mb-0 text-sm leading-relaxed">
                Kui müüte meile otse, on hind fikseeritud ja raha saate kiiresti. See sobib, kui hindate kiirust ja mugavust. 
                Kui valite vahendusteenuse, otsime ostjat laiemalt turult. See võib võtta rohkem aega, kuid konkurentsiolukorras võib lõpphind kujuneda kõrgemaks, eriti atraktiivsete maatulundusmaade puhul.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Miks valida partneriks Metsamaakler?
            </h2>
            <p className="mb-6">
              Põllumaa turg on spetsiifiline. Kohalikud põllumehed teavad sageli maa tegelikku väärtust kõige paremini, kuid nendeni jõudmine võib olla keeruline. Metsamaakler omab pikaajalisi kontakte üle Eesti. Me teame, kes teie piirkonnas maad harib ja kes on huvitatud laienemisest.
            </p>
            <p className="mb-6">
              Lisaks hindame kõrgelt korrektsust ja läbipaistvust. Ei mingeid varjatud tasusid ega peidetud tingimusi. Meie pakkumine on selge: kas ostame ise või leiame ostja, kes maksab ausa hinna.
            </p>

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

            <RelatedContent currentPath="/pollumaa-ost/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
