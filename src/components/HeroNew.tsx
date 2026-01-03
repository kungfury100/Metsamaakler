import React, { useState, memo, useMemo } from 'react';
import { Parallax } from './utils/Parallax';
import { MicroInteractive } from './MicroInteractive';
import { TextReveal } from './utils/TextReveal';
import { OptimizedImage } from './ui/OptimizedImage';
import metsaMuukKlient1 from 'figma:asset/4c712585da1b4b9fbe2ba1a7295b58aaa2ba6813.png';
import metsaMuukKlient2 from 'figma:asset/200dbd6af8d7ed82ca500c8263b23c6fed4e8a97.png';
import metsaMuukKlient3 from 'figma:asset/b51955e50938bbde26efd2e38adab0bce951399b.png';
import { HeroContactForm } from './hero/HeroContactForm';
import { StarIcon, EvaluationIcon, CertifiedIcon, BestPriceIcon } from './hero/HeroIcons';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE HERO COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Optimized for performance:
// - Form state isolated in HeroContactForm
// - SVGs memoized in HeroIcons
// - Critical images prioritized via OptimizedImage
// - Static styles extracted
// ═══════════════════════════════════════════════════════════════════════════════════════════════

const titleStyle: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 'clamp(2.75rem, 11vw, 4.5rem)',
  fontWeight: 800,
  lineHeight: 1.05,
  letterSpacing: '-0.045em',
  background: 'linear-gradient(180deg, rgb(22, 56, 35) 0%, rgb(28, 82, 48) 15%, rgb(34, 95, 58) 30%, rgb(42, 112, 68) 50%, rgb(52, 125, 78) 70%, rgb(68, 145, 95) 85%, rgb(88, 165, 118) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1, 'ss01' 1",
  filter: 'contrast(1.05) brightness(1.02)',
  wordBreak: 'break-word', // Ensure long words don't overflow on very small screens
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 'clamp(1rem, 4vw, 1.1875rem)',
  fontWeight: 400,
  color: 'rgb(55, 45, 35)',
  lineHeight: 1.6,
  maxWidth: '560px',
  letterSpacing: '-0.015em',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
};

const ctaButtonStyleBase: React.CSSProperties = {
  padding: '16px 32px',
  borderRadius: '10px',
  color: 'rgb(255, 255, 255)',
  fontSize: '1rem',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  transition: 'background 200ms ease',
};

const LeftContent = memo(() => {
  const [hoveredCTA, setHoveredCTA] = useState(false);
  
  const clientImages = [
    { src: metsaMuukKlient1, alt: 'metsa müük - rahulolev klient 1' },
    { src: metsaMuukKlient2, alt: 'metsa müük - rahulolev klient 2' },
    { src: metsaMuukKlient3, alt: 'metsa müük - rahulolev klient 3' }
  ];

  const features = useMemo(() => [
    {
      text: 'Tasuta metsa hindamine ja turuanalüüs',
      icon: <EvaluationIcon />,
    },
    {
      text: 'Sertifitseeritud hindajad ja kogemus',
      icon: <CertifiedIcon />,
    },
    {
      text: 'Parim hind ja läbipaistev protsess',
      icon: <BestPriceIcon />,
    },
  ], []);

  const ctaStyle = useMemo(() => ({
    ...ctaButtonStyleBase,
    background: hoveredCTA ? 'rgb(42, 105, 65)' : 'rgb(52, 125, 78)',
    boxShadow: hoveredCTA 
      ? '0 6px 16px rgba(52, 125, 78, 0.15), 0 2px 4px rgba(52, 125, 78, 0.1)' 
      : '0 4px 10px rgba(52, 125, 78, 0.15), 0 2px 4px rgba(52, 125, 78, 0.1)',
    transform: hoveredCTA ? 'translateY(-1px)' : 'translateY(0)',
  }), [hoveredCTA]);

  return (
    <div className="space-y-6 lg:pr-0 lg:pt-5 pt-0">
      <MicroInteractive scaleAmount={0.005} opacityRange={[0.98, 1]} proximityRadius={400}>
        <h1 className="relative" style={titleStyle}>
          Metsamaakler
        </h1>
      </MicroInteractive>

      <MicroInteractive scaleAmount={0.01} opacityRange={[0.9, 1]} proximityRadius={280}>
        <p style={subtitleStyle}>
          Metsa müük, raieõiguse müük, metsakinnistutega seotud tehingud. Ostame teie kinnistu või leiame parima hinnaga ostja ilma ebaprofessionaalsete vahendajateta.
        </p>
      </MicroInteractive>

      <div className="flex flex-col items-start gap-6 pt-3">
        <button
          onMouseEnter={() => setHoveredCTA(true)}
          onMouseLeave={() => setHoveredCTA(false)}
          className="transition-transform duration-300 ease-out active:scale-[0.98] w-full sm:w-auto flex justify-center items-center text-center"
          style={ctaStyle}
        >
          Küsi tasuta hindamist
        </button>

        <Parallax offset={10} className="inline-block w-full sm:w-auto">
          <div className="flex items-center gap-4 px-5 py-3 bg-[#F0F5F2] rounded-2xl border border-[rgba(52,125,78,0.05)] w-full sm:w-fit justify-center sm:justify-start">
            <div className="flex -space-x-3">
              {clientImages.map((img, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center relative z-0 overflow-hidden"
                  style={{
                    boxShadow: '0 2px 4px rgba(88, 78, 68, 0.06)',
                  }}
                >
                  <OptimizedImage
                    src={`${img.src.split('#')[0]}#filename=metsa-muuk-klient-${i+1}.png`}
                    alt={img.alt} 
                    priority={true}
                    width={40}
                    height={40}
                    fit="cover"
                    aspectRatio={1}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'rgb(88, 78, 68)', marginTop: '2px', fontWeight: 500 }}>
                <span style={{ fontWeight: 800, color: 'rgb(34, 75, 48)' }}>500+</span> rahulolevat klienti
              </p>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="space-y-4 pt-4">
        {features.map((item, index) => (
          <MicroInteractive key={index} scaleAmount={0.025} opacityRange={[0.9, 1]} proximityRadius={160}>
            <div className="flex items-center gap-4 group cursor-default rounded-lg hover:bg-white/40 transition-colors">
              <div className="flex-shrink-0 transition-all duration-350 group-hover:scale-105 bg-[#E8F5E9] border border-[#C8E6C9] w-12 h-12 flex items-center justify-center rounded-xl shadow-sm text-[rgb(52,125,78)]">
                {item.icon}
              </div>

              <p
                className="transition-all duration-300"
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'rgb(25, 18, 12)',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                }}
              >
                {item.text}
              </p>
            </div>
          </MicroInteractive>
        ))}
      </div>
    </div>
  );
});

export const HeroNew: React.FC = () => {
  return (
    <section 
      className="relative w-full flex items-center" 
      style={{ 
        background: 'transparent', 
        paddingTop: 'clamp(90px, 15vh, 120px)', 
        paddingBottom: '20px',
        zIndex: 10,
        isolation: 'isolate',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Left Content Column - Memoized to prevent re-renders on form interaction */}
          <LeftContent />

          {/* Right Form Column - Isolated State */}
          <div className="relative flex justify-center lg:justify-end pt-4 lg:pt-[30px] pb-8 lg:pb-0">
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
