import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { ServiceHero } from '../layout/ServiceHero';
import { ServiceLayout } from '../layout/ServiceLayout';
import { ContactCTASection } from '../ContactCTASection';
import { RelatedContent } from '../common/RelatedContent';
import { useSeo } from '../../hooks/useSeo';
import { Shovel, Sprout, Tractor, Droplets, Sun, HelpCircle, ArrowRight, Layers } from 'lucide-react';
import HERO_IMAGE from "../assets/b950c2e029e2e195de310c3ce12771f9b7c17625.png";

export const PinnaseMineraliseeriminePage: React.FC = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Millal on õige aeg maapinda ette valmistada?",
      answer: "Parim aeg on sügisel, enne kevadist istutust. Siis jõuab pinnas vajuda ja tiheneda, mis tagab istikule parema kontakti mullaga. Võib teha ka vahetult enne istutamist kevadel."
    },
    {
      question: "Kas ilma mineraliseerimiseta ei või istutada?",
      answer: "Võib, aga see on riskantne. Ilma ettevalmistuseta lämmatab heinataimestik noored puud kiiresti ning juurte kontakt mineraalmullaga jääb kehvaks. Taimede suremus on hooldamata maal oluliselt suurem."
    },
    {
      question: "Milline meetod valida – vaod või mättad?",
      answer: "See sõltub pinnasest. Kuivemates ja kergemates muldades sobib hästi ketasadraga tehtud vagu. Märjemates kohtades (kus on liigniiskuse oht) on parem kasutada mätastust, et tõsta taim veepinnast kõrgemale."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Pinnase mineraliseerimine',
        'description': 'Mis on maapinna ettevalmistamine ehk mineraliseerimine? Info ketastamise, mätastamise ja istutuseelse maapinna töötlemise kohta.',
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
            'name': 'Pinnase mineraliseerimine',
            'item': 'https://metsamaakler.ee/pinnase-mineraliseerimine/'
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
    title: "Pinnase mineraliseerimine – Maapinna ettevalmistus | Metsamaakler",
    description: "Kuidas tagada metsaistutuse edu? Pinnase mineraliseerimine loob taimedele soodsad kasvutingimused. Loe ketastamisest ja mätastamisest.",
    canonical: "https://metsamaakler.ee/pinnase-mineraliseerimine/",
    ogImage: HERO_IMAGE,
    schema: schema
  });

  return (
    <div className="min-h-screen relative bg-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10">
        <ServiceHero 
          image={HERO_IMAGE}
          title="Pinnase mineraliseerimine"
          subtitle="Tugev mets algab heast vundamendist. Maapinna ettevalmistamine ehk mineraliseerimine on kriitiline eeltöö, mis tagab istikutele eduka juurdumise ja kiire stardi."
          onCtaClick={handleCtaClick}
          breadcrumbs={[
            { label: "Avaleht", href: "/" },
            { label: "Teenused", href: "/" },
            { label: "Pinnase mineraliseerimine", href: "/pinnase-mineraliseerimine/" }
          ]}
        />

        <ServiceLayout>
          {/* Main Content Article */}
          <article className="prose prose-lg max-w-none text-[#1a0f00]/80 font-sans">
            
            <h2 className="text-[29px] md:text-[36px] font-bold text-[#163823] mb-6 leading-tight font-inter">
              Mis on pinnase mineraliseerimine?
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              <strong>Pinnase mineraliseerimine</strong> (tuntud ka kui maapinna ettevalmistamine) on metsamajanduslik võte, kus mehaaniliselt eemaldatakse või pööratakse ümber maapinna pealmine kiht (huumus, rohi, sammal), et paljastada mineraalmaa.
            </p>

            <p className="mb-8 leading-relaxed">
              See ei ole lihtsalt "maa songimine", vaid vajalik agrotehniline võte. Paljas mineraalmuld on vaba konkureerivatest umbrohtudest, hoiab paremini niiskust ja kaitseb noort taime teatud määral ka kahjurite eest.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Miks on see vajalik?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Sprout size={20} className="text-[#347D4E]" />
                  Vähem konkurentsi
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Rohukasv on noorele puule suurim vaenlane, võttes ära valguse ja toitained. Mineraliseeritud vaos või mättal ei kasva esimestel aastatel rohi nii agressiivselt.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Droplets size={20} className="text-[#347D4E]" />
                  Parem niiskusrežiim
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Mineraalmuld seob niiskust paremini kui kohev metsakõdu. See aitab istikul põuaperioodidel ellu jääda.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Sun size={20} className="text-[#347D4E]" />
                  Soojem kasvupinnas
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Tume mineraalmuld soojeneb päikese käes kiiremini, mis soodustab juurte kasvu algust kevadel.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#163823] mb-3 flex items-center gap-2">
                  <Shovel size={20} className="text-[#347D4E]" />
                  Lihtsam istutada
                </h4>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">
                  Istutaja tööjõudlus on ettevalmistatud maal kordades suurem, sest ei pea iga kord jalaga kamarat lahti lööma. Töö on kiirem ja kvaliteetsem.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#163823] mt-12 mb-6">
              Levinumad meetodid
            </h2>
            <p className="mb-6">
              Valik sõltub kasvukohatüübist ja niiskusest.
            </p>

            <div className="bg-[#F0F7F4] p-8 rounded-xl border border-[#163823]/10 mb-10 not-prose">
              <ul className="list-none pl-0 space-y-6">
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm">
                    <Tractor size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Ketastamine (Ketasader)</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Kõige levinum viis. Traktori järel veetav ketasader tõmbab maasse vaod, pöörates kamara kõrvale. Taim istutatakse vao põhja või servale (olenevalt niiskusest). Sobib keskmise niiskusega ja kuivadele aladele.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Mätastamine (Kopp)</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Ekskavaator pöörab kopa abil kamara ümber ja tekitab mätta. Taim istutatakse mätta otsa. See on parim viis liigniisketel aladel, kuna tõstab taime veest välja ja mätas on toitainerikas.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 font-bold text-[#347D4E] shadow-sm">
                    <Shovel size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#163823] mb-1">Lapimeetod</h4>
                    <p className="text-gray-700 text-sm m-0">
                      Kooritakse kamarat vaid istutuskohtadelt (lapikestena). Vähem levinud masintöös, pigem kasutatakse käsitsi väikesemahulistel töödel või loodusliku uuenduse soodustamiseks.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8 not-prose flex items-start gap-4">
              <Tractor className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-[#163823] mb-1">Teenuse tellimine</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-0">
                  Maapinna ettevalmistamine on spetsiifiline teenus, mis nõuab võimsat tehnikat. Tavapõllutööriistad (nt tavaader) metsa ei sobi, kuna kännud ja juured lõhuvad need kiiresti. Kasuta alati spetsiaalset metsatehnikat.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-[#F8FAF9] p-8 rounded-2xl border border-gray-200 not-prose text-center">
               <h3 className="text-2xl font-bold text-[#163823] mb-4">Plaanid metsa istutada?</h3>
               <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
                 Korralik maapinna ettevalmistus on pool võitu. Metsamaakler aitab organiseerida maapinna mineraliseerimist ja sellele järgnevat istutust.
               </p>
               <button 
                 onClick={handleCtaClick}
                 className="inline-flex items-center gap-2 bg-[#347D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2c6b41] transition-all duration-300 shadow-lg shadow-green-900/20"
               >
                 Küsi pakkumist
                 <ArrowRight size={20} />
               </button>
            </div>

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

            <RelatedContent currentPath="/pinnase-mineraliseerimine/" />

          </article>
        </ServiceLayout>
        <ContactCTASection showCTA={false} transparentBg={true} />
      </main>

      <Footer />
    </div>
  );
};
