import React, { lazy } from 'react';
import { Header } from '../Header';
import { HeroNew } from '../HeroNew';
import { LazySection } from '../utils/LazySection';
import { GlobalBackground } from '../layout/GlobalBackground';
import { Footer } from '../Footer';
import { useSeo } from '../../hooks/useSeo';

// Lazy load below-the-fold sections
const HowItWorksSection = lazy(() => import('../HowItWorksSection').then(module => ({ default: module.HowItWorksSection })));
const ServicesCardsPremium = lazy(() => import('../ServicesCardsPremium').then(module => ({ default: module.ServicesCardsPremium })));
const FiftyFiftySection = lazy(() => import('../FiftyFiftySection').then(module => ({ default: module.FiftyFiftySection })));
const AboutSection = lazy(() => import('../AboutSection').then(module => ({ default: module.AboutSection })));
const TopicGridSection = lazy(() => import('../TopicGridSection').then(module => ({ default: module.TopicGridSection })));
const SalesProcessSection = lazy(() => import('../SalesProcessSection').then(module => ({ default: module.SalesProcessSection })));
const LifecycleSeparator = lazy(() => import('../LifecycleSeparator').then(module => ({ default: module.LifecycleSeparator })));
const ContactCTASection = lazy(() => import('../ContactCTASection').then(module => ({ default: module.ContactCTASection })));
const ForestPriceSection = lazy(() => import('../ForestPriceSection').then(module => ({ default: module.ForestPriceSection })));
const FAQSection = lazy(() => import('../FAQSection').then(module => ({ default: module.FAQSection })));

export const HomePage: React.FC = () => {
  useSeo({
    title: "Metsamaakler - Metsa müük ja raieõiguse müük | Parim hind",
    description: "Metsa müük ja raieõiguse müük usaldusväärselt partnerilt. Küsi tasuta hinnapakkumist! Ostame metsakinnistuid ja raieõigust üle Eesti parima hinnaga.",
    canonical: "https://metsamaakler.ee/",
    ogImage: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&q=80",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Metsamaakler",
      "url": "https://metsamaakler.ee/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://metsamaakler.ee/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  });

  return (
    <div className="min-h-screen relative">
      <GlobalBackground />
      
      <Header />
      
      <div className="relative w-full flex flex-col" style={{ zIndex: 1 }}>
        <main className="w-full flex flex-col gap-24 md:gap-32">
          {/* Critical Path - Rendered Immediately */}
          <HeroNew />

          {/* Below the Fold - Lazy Loaded */}
          <LazySection height={350} rootMargin="200px" variant="grid">
            <HowItWorksSection />
          </LazySection>

          <LazySection height={850} variant="cards">
            <ServicesCardsPremium />
          </LazySection>

          <LazySection height={700} variant="split">
            <FiftyFiftySection />
          </LazySection>

          <LazySection height={700} variant="split">
            <AboutSection />
          </LazySection>

          <LazySection height={900} variant="text">
            <SalesProcessSection />
          </LazySection>

          <LazySection height={300}>
            <LifecycleSeparator />
          </LazySection>

          <LazySection height={800} variant="cards">
            <ForestPriceSection />
          </LazySection>

          <LazySection height={800} variant="grid">
            <TopicGridSection />
          </LazySection>

          <LazySection height={600} variant="text">
            <FAQSection />
          </LazySection>

          <LazySection height={500} rootMargin="400px" variant="split">
            <ContactCTASection />
          </LazySection>
        </main>

        <LazySection height={400} rootMargin="200px">
          <Footer />
        </LazySection>
      </div>
    </div>
  );
};