import React, { useState } from 'react';
import { Ban, X } from 'lucide-react';

export const DebugMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Note: These are standard <a href> tags! The App.tsx interceptor makes them fast.
  const links = [
    { href: '/', label: 'Avaleht (Home)' },
    { href: '/kontakt/', label: 'Kontakt' },
    { href: '/ettevottest/', label: 'Ettevõttest' },
    { href: '/raieoiguse-muuk/', label: 'Raieõiguse müük' },
    { href: '/metsateatis/', label: 'Metsateatis' },
    { href: '/raieteatis/', label: 'Raieteatis' },
    { href: '/pollumaa-ost/', label: 'Põllumaa ost' },
    { href: '/pollumaa-muuk/', label: 'Põllumaa müük' },
    { href: '/pollumaa-rent/', label: 'Põllumaa rent' },
    { href: '/pollumaa-pria-toetused/', label: 'Põllumaa PRIA toetused' },
    { href: '/tihumeetri-arvutamine/', label: 'Tihumeetri arvutamine' },
    { href: '/kuupmeetri-arvutus/', label: 'Kuupmeetri arvutus' },
    { href: '/puidu-hinnad/', label: 'Puidu hinnad' },
    { href: '/palgi-hinnad/', label: 'Palgi hinnad' },
    { href: '/ruumimeetri-arvutamine/', label: 'Ruumimeetri arvutamine' },
    { href: '/kinnistu-hindamine/', label: 'Kinnistu hindamine' },
    { href: '/katastritunnus/', label: 'Katastritunnus' },
    { href: '/metsaregister/', label: 'Metsaregister' },
    { href: '/erametsakeskus/', label: 'Erametsakeskus' },
    { href: '/metsa-uuendamise-toetus/', label: 'Metsa uuendamise toetus' },
    { href: '/metsa-uhisomandi-kasutuskord/', label: 'Ühisomandi kasutuskord' },
    { href: '/metsateede-toetus/', label: 'Metsateede toetus' },
    { href: '/harvendusraie/', label: 'Harvendusraie' },
    { href: '/valgustusraie/', label: 'Valgustusraie' },
    { href: '/sanitaarraie/', label: 'Sanitaarraie' },
    { href: '/uuendusraie/', label: 'Uuendusraie' },
    { href: '/raadamine/', label: 'Raadamine' },
    { href: '/pinnase-mineraliseerimine/', label: 'Pinnase mineraliseerimine' },
    { href: '/valikraie/', label: 'Valikraie' },
    { href: '/turberaie/', label: 'Turberaie' },
    { href: '/natura-2000-alade-piirangud/', label: 'Natura 2000 piirangud' },
    { href: '/uraskikahjustused/', label: 'Üraskikahjustused' },
    { href: '/juurepessi-kasutamine/', label: 'Juurepessu tõrje' },
    { href: '/keskkonnamoju-hindamine-kmh/', label: 'KMH' },
    { href: '/metsa-muuk-ja-tulumaks/', label: 'Mets ja tulumaks' },
    { href: '/raieoiguse-volaoiguslik-leping/', label: 'Raieõiguse leping' },
    { href: '/metsa-inventeerimise-toetus/', label: 'Metsa inv. toetus' },
    { href: '/raiemahtude-planeerimine/', label: 'Raiemahud' },
    { href: '/metsa-hindamine/', label: 'Metsa hindamine' },
    { href: '/metsauuendus/', label: 'Metsauuendus' },
    { href: '/metsa-kasvukohatuubid/', label: 'Kasvukohatüübid' },
    { href: '/metsa-muugi-notaritasud/', label: 'Notaritasud' },
    { href: '/vosaloikus/', label: 'Võsalõikus' },
    // Removed duplicate /ruumimeetri-arvutamine/
    { href: '/raieoiguse-muuk-ja-tulumaks/', label: 'Raieõiguse maksud' },
    { href: '/maa-muuk/', label: 'Maa müük' },
    { href: '/hooldusraied/', label: 'Hooldusraied' },
    { href: '/metsamajandamiskava/', label: 'Metsamajandamiskava' },
    { href: '/metsa-istutamine/', label: 'Metsa istutamine' },
    { href: '/metsa-hind/', label: 'Metsa hind' },
    { href: '/raieoiguse-hind/', label: 'Raieõiguse hind' },
    { href: '/pollumaa-hind/', label: 'Põllumaa hind' },
    { href: '/istikute-hind/', label: 'Istikute hind' },
    { href: '/metsamajandus/', label: 'Metsamajandus' },
    { href: '/raieoiguse-ost/', label: 'Raieõiguse ost' },
    { href: '/lemeks/', label: 'Lemeks' },
    { href: '/metsa-muuk-ou/', label: 'Metsa Müük OÜ' },
    { href: '/lignamets/', label: 'Lignamets' },
    { href: '/eesti-metsameister/', label: 'Eesti Metsameister' },
    { href: '/eesti-maavara/', label: 'Eesti Maavara' },
    { href: '/marrek-puit/', label: 'Marrek Puit' },
    { href: '/valga-puu/', label: 'Valga Puu' },
    { href: '/timber/', label: 'Timber' },
    { href: '/karo-mets/', label: 'Karo Mets' },
    { href: '/tehingukeskus/', label: 'Tehingukeskus' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* The Menu: Conditionally rendered */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-200">
           <div className="bg-[#163823] text-white px-4 py-2 text-sm font-semibold flex justify-between items-center">
            <span>Navigation</span>
            <span className="text-xs opacity-70">{links.length} pages</span>
          </div>
          <div className="max-h-96 overflow-y-auto py-2">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#347D4E] transition-colors border-l-2 border-transparent hover:border-[#347D4E]"
              >
                {link.label}
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">{link.href}</div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* The Toggle Button (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-xl shadow-lg flex items-center justify-center text-white hover:scale-105 transition-all duration-300 ${
           isOpen ? 'bg-red-500 rotate-90' : 'bg-[#163823]'
        }`}
      >
        {isOpen ? <X size={24} /> : <Ban size={24} />}
      </button>
    </div>
  );
};
