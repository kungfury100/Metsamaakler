import React, { useState, useEffect } from 'react';
import { PhysicsProvider } from './contexts/PhysicsContext';
import { FontLoader } from './components/utils/FontLoader';
import { DebugMenu } from './components/utils/DebugMenu';
import './styles/globals.css';

// Import Pages
import { HomePage } from './components/pages/HomePage';
import { RaieoiguseMuukPage } from './components/pages/RaieoiguseMuukPage';
import { MetsateatisPage } from './components/pages/MetsateatisPage';
import { HooldusraiedPage } from './components/pages/HooldusraiedPage';
import { MetsamajandamiskavaPage } from './components/pages/MetsamajandamiskavaPage';
import { RaieoiguseOstPage } from './components/pages/RaieoiguseOstPage';
import { MetsaIstutaminePage } from './components/pages/MetsaIstutaminePage';
import { MetsaHindPage } from './components/pages/MetsaHindPage';
import { RaieoiguseHindPage } from './components/pages/RaieoiguseHindPage';
import { PollumaaHindPage } from './components/pages/PollumaaHindPage';
import { MetsaistikuteHindPage } from './components/pages/MetsaistikuteHindPage';
import { MetsamajandusPage } from './components/pages/MetsamajandusPage';
import { RaieTeatisPage } from './components/pages/RaieTeatisPage';
import { PollumaaOstPage } from './components/pages/PollumaaOstPage';
import { PollumaaMuukPage } from './components/pages/PollumaaMuukPage';
import { PollumaaRentPage } from './components/pages/PollumaaRentPage';
import { PollumaaPriaToetusedPage } from './components/pages/PollumaaPriaToetusedPage';
import { TihumeetriArvutaminePage } from './components/pages/TihumeetriArvutaminePage';
import { PuiduHinnadPage } from './components/pages/PuiduHinnadPage';
import { PalgiHinnadPage } from './components/pages/PalgiHinnadPage';
import { RuumimeetriArvutaminePage } from './components/pages/RuumimeetriArvutaminePage';
import { KinnistuHindaminePage } from './components/pages/KinnistuHindaminePage';
import { KatastritunnusPage } from './components/pages/KatastritunnusPage';
import { MetsaregisterPage } from './components/pages/MetsaregisterPage';
import { ErametsakeskusPage } from './components/pages/ErametsakeskusPage';
import { MetsaUuendamiseToetusPage } from './components/pages/MetsaUuendamiseToetusPage';
import { MetsaUhisomandiKasutuskordPage } from './components/pages/MetsaUhisomandiKasutuskordPage';
import { MetsateedeToetusPage } from './components/pages/MetsateedeToetusPage';
import { HarvendusraiePage } from './components/pages/HarvendusraiePage';
import { ValgustusraiePage } from './components/pages/ValgustusraiePage';
import { SanitaarraiePage } from './components/pages/SanitaarraiePage';
import { UuendusraiePage } from './components/pages/UuendusraiePage';
import { ValikraiePage } from './components/pages/ValikraiePage';
import { TurberaiePage } from './components/pages/TurberaiePage';
import { Natura2000AladePiirangudPage } from './components/pages/Natura2000AladePiirangudPage';
import { UraskikahjustusedPage } from './components/pages/UraskikahjustusedPage';
import { JuurepessiKasutaminePage } from './components/pages/JuurepessiKasutaminePage';
import { KeskkonnamojuHindaminePage } from './components/pages/KeskkonnamojuHindaminePage';
import { MetsaMuukJaTulumaksPage } from './components/pages/MetsaMuukJaTulumaksPage';
import { RaieoiguseVolaoiguslikLepingPage } from './components/pages/RaieoiguseVolaoiguslikLepingPage';
import { MetsaInventeerimiseToetusPage } from './components/pages/MetsaInventeerimiseToetusPage';
import { RaiemahtudePlaneeriminePage } from './components/pages/RaiemahtudePlaneeriminePage';
import { MetsaHindaminePage } from './components/pages/MetsaHindaminePage';
import { MetsaUuendusPage } from './components/pages/MetsaUuendusPage';
import { MetsaKasvukohatuubidPage } from './components/pages/MetsaKasvukohatuubidPage';
import { MetsaMuugiNotaritasudPage } from './components/pages/MetsaMuugiNotaritasudPage';
import { VosaLoikusPage } from './components/pages/VosaLoikusPage';
import { RaadaminePage } from './components/pages/RaadaminePage';
import { RaieoiguseMuukJaTulumaksPage } from './components/pages/RaieoiguseMuukJaTulumaksPage';
import { NoorendikeHooldusPage } from './components/pages/NoorendikeHooldusPage';
import { OstameKasvavatMetsaPage } from './components/pages/OstameKasvavatMetsaPage';
import { PinnaseMineraliseeriminePage } from './components/pages/PinnaseMineraliseeriminePage';
import { MaaMuukPage } from './components/pages/MaaMuukPage';
import { KuupmeetriArvutusPage } from './components/pages/KuupmeetriArvutusPage';
import { LemeksPage } from './components/pages/competitors/LemeksPage';
import { MetsaMuukOUPage } from './components/pages/competitors/MetsaMuukOUPage';
import { LignametsPage } from './components/pages/competitors/LignametsPage';
import { EestiMetsameisterPage } from './components/pages/competitors/EestiMetsameisterPage';
import { EestiMaavaraPage } from './components/pages/competitors/EestiMaavaraPage';
import { MarrekPuitPage } from './components/pages/competitors/MarrekPuitPage';
import { ValgaPuuPage } from './components/pages/competitors/ValgaPuuPage';
import { TimberPage } from './components/pages/competitors/TimberPage';
import { KaroMetsPage } from './components/pages/competitors/KaroMetsPage';
import { TehingukeskusPage } from './components/pages/competitors/TehingukeskusPage';
import { KontaktPage } from './components/pages/KontaktPage';

import { EttevottestPage } from './components/pages/EttevottestPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    // 1. Handle Browser "Back/Forward" buttons
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);

    // 2. The "Instant Click" Interceptor
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a"); // Find the parent link

      // Check if it's an internal link (same domain)
      if (link && link.href && link.origin === window.location.origin) {
        // Ignore links with target="_blank" or specific ignores
        if (!link.hasAttribute("target") && !link.hasAttribute("download")) {
          e.preventDefault(); // STOP the full page reload (The "Instant" part)
          
          const path = new URL(link.href).pathname;
          
          // Only update if path changed
          if (path !== window.location.pathname) {
            window.history.pushState({}, "", path); // Change URL bar
            setCurrentRoute(path); // Trigger React re-render
            window.scrollTo(0, 0); // Reset scroll
          }
        }
      }
    };

    // Attach to the entire document
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const renderRoute = () => {
    // Remove trailing slash for consistent matching, unless it is root
    const path = currentRoute.length > 1 && currentRoute.endsWith('/') 
      ? currentRoute.slice(0, -1) 
      : currentRoute;

    // Helper to match paths with or without trailing slash
    const match = (p: string) => path === p || path === p + '/';

    if (match('/')) return <HomePage />;
    if (match('/raieoiguse-muuk')) return <RaieoiguseMuukPage />;
    if (match('/metsateatis')) return <MetsateatisPage />;
    if (match('/raieteatis')) return <RaieTeatisPage />;
    if (match('/pollumaa-ost')) return <PollumaaOstPage />;
    if (match('/pollumaa-muuk')) return <PollumaaMuukPage />;
    if (match('/pollumaa-rent')) return <PollumaaRentPage />;
    if (match('/pollumaa-pria-toetused')) return <PollumaaPriaToetusedPage />;
    if (match('/tihumeetri-arvutamine')) return <TihumeetriArvutaminePage />;
    if (match('/kuupmeetri-arvutus')) return <KuupmeetriArvutusPage />;
    if (match('/puidu-hinnad')) return <PuiduHinnadPage />;
    if (match('/palgi-hinnad')) return <PalgiHinnadPage />;
    if (match('/ruumimeetri-arvutamine')) return <RuumimeetriArvutaminePage />;
    if (match('/kinnistu-hindamine')) return <KinnistuHindaminePage />;
    if (match('/katastritunnus')) return <KatastritunnusPage />;
    if (match('/metsaregister')) return <MetsaregisterPage />;
    if (match('/erametsakeskus')) return <ErametsakeskusPage />;
    if (match('/metsa-uuendamise-toetus')) return <MetsaUuendamiseToetusPage />;
    if (match('/metsa-uhisomandi-kasutuskord')) return <MetsaUhisomandiKasutuskordPage />;
    if (match('/metsateede-toetus')) return <MetsateedeToetusPage />;
    if (match('/harvendusraie')) return <HarvendusraiePage />;
    if (match('/valgustusraie')) return <ValgustusraiePage />;
    if (match('/sanitaarraie')) return <SanitaarraiePage />;
    if (match('/uuendusraie')) return <UuendusraiePage />;
    if (match('/raadamine')) return <RaadaminePage />;
    if (match('/raieoiguse-muuk-ja-tulumaks')) return <RaieoiguseMuukJaTulumaksPage />;
    if (match('/noorendike-hooldus')) return <NoorendikeHooldusPage />;
    if (match('/ostame-kasvavat-metsa')) return <OstameKasvavatMetsaPage />;
    if (match('/pinnase-mineraliseerimine')) return <PinnaseMineraliseeriminePage />;
    if (match('/maa-muuk')) return <MaaMuukPage />;
    if (match('/valikraie')) return <ValikraiePage />;
    if (match('/turberaie')) return <TurberaiePage />;
    if (match('/natura-2000-alade-piirangud')) return <Natura2000AladePiirangudPage />;
    if (match('/uraskikahjustused')) return <UraskikahjustusedPage />;
    if (match('/juurepessi-kasutamine')) return <JuurepessiKasutaminePage />;
    if (match('/keskkonnamoju-hindamine-kmh')) return <KeskkonnamojuHindaminePage />;
    if (match('/metsa-muuk-ja-tulumaks')) return <MetsaMuukJaTulumaksPage />;
    if (match('/raieoiguse-volaoiguslik-leping')) return <RaieoiguseVolaoiguslikLepingPage />;
    if (match('/metsa-inventeerimise-toetus')) return <MetsaInventeerimiseToetusPage />;
    if (match('/hooldusraied')) return <HooldusraiedPage />;
    if (match('/metsamajandamiskava')) return <MetsamajandamiskavaPage />;
    if (match('/raieoiguse-ost')) return <RaieoiguseOstPage />;
    if (match('/metsa-istutamine')) return <MetsaIstutaminePage />;
    if (match('/metsa-hind')) return <MetsaHindPage />;
    if (match('/raieoiguse-hind')) return <RaieoiguseHindPage />;
    if (match('/pollumaa-hind')) return <PollumaaHindPage />;
    if (match('/istikute-hind')) return <MetsaistikuteHindPage />;
    if (match('/metsamajandus')) return <MetsamajandusPage />;
    if (match('/raiemahtude-planeerimine')) return <RaiemahtudePlaneeriminePage />;
    if (match('/metsa-hindamine')) return <MetsaHindaminePage />;
    if (match('/metsauuendus')) return <MetsaUuendusPage />;
    if (match('/metsa-kasvukohatuubid')) return <MetsaKasvukohatuubidPage />;
    if (match('/metsa-muugi-notaritasud')) return <MetsaMuugiNotaritasudPage />;
    if (match('/vosaloikus')) return <VosaLoikusPage />;
    if (match('/lemeks')) return <LemeksPage />;
    if (match('/metsa-muuk-ou')) return <MetsaMuukOUPage />;
    if (match('/lignamets')) return <LignametsPage />;
    if (match('/eesti-metsameister')) return <EestiMetsameisterPage />;
    if (match('/eesti-maavara')) return <EestiMaavaraPage />;
    if (match('/marrek-puit')) return <MarrekPuitPage />;
    if (match('/valga-puu')) return <ValgaPuuPage />;
    if (match('/timber')) return <TimberPage />;
    if (match('/karo-mets')) return <KaroMetsPage />;
    if (match('/tehingukeskus')) return <TehingukeskusPage />;
    if (match('/kontakt')) return <KontaktPage />;
    if (match('/ettevottest')) return <EttevottestPage />;

    // Default to 404 or Home - for now Home
    return <HomePage />;
  };

  return (
    <PhysicsProvider>
      <FontLoader />
      <DebugMenu />
      {renderRoute()}
    </PhysicsProvider>
  );
}
