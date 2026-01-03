import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalBackground } from '../layout/GlobalBackground';
import { HeroNew } from '../HeroNew';
import { useSeo } from '../../hooks/useSeo';

export const KontaktPage: React.FC = () => {
  useSeo({
    title: "Võta ühendust | Metsamaakler",
    description: "Võta meiega ühendust ja küsi tasuta hinnapakkumist metsa või raieõiguse müügiks.",
    canonical: "https://metsamaakler.ee/kontakt/"
  });

  return (
    <div className="min-h-screen relative bg-white font-inter selection:bg-[#347D4E] selection:text-white">
      <GlobalBackground />
      <Header />
      
      <main className="relative z-10 pb-20">
        <HeroNew />
      </main>

      <Footer />
    </div>
  );
};
