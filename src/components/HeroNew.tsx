import React, { useState, memo, useMemo } from 'react';
import { Parallax } from './utils/Parallax';
import { MicroInteractive } from './MicroInteractive';
import { OptimizedImage } from './ui/OptimizedImage';
import metsaMuukKlient1 from 'figma:asset/4c712585da1b4b9fbe2ba1a7295b58aaa2ba6813.png';
import metsaMuukKlient2 from 'figma:asset/200dbd6af8d7ed82ca500c8263b23c6fed4e8a97.png';
import metsaMuukKlient3 from 'figma:asset/b51955e50938bbde26efd2e38adab0bce951399b.png';
import { HeroContactForm } from './hero/HeroContactForm';
import { StarIcon, EvaluationIcon, CertifiedIcon, BestPriceIcon } from './hero/HeroIcons';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// STANDALONE HERO COMPONENT WITH VIDEO BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════════════════════════

const VIDEO_URL = "https://res.cloudinary.com/dnkeephh0/video/upload/v1767452586/metsa-muuk-taust_yzdxr4.mp4";

const titleStyle: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 'clamp(2.75rem, 11vw, 4.5rem)',
  fontWeight: 800,
  lineHeight: 1.05,
  letterSpacing: '-0.045em',
  color: '#FFFFFF',
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1, 'ss01' 1",
  wordBreak: 'break-word',
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 'clamp(1rem, 4vw, 1.1875rem)',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.95)',
  lineHeight: 1.6,
  maxWidth: '560px',
  letterSpacing: '-0.015em',
  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
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
  transition: 'background 200ms ease, transform 200ms ease',
};

const LeftContent = memo(({ title }: { title?: string }) => {
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
      ? '0 6px 16px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.2)' 
      : '0 4px 10px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.2)',
    transform: hoveredCTA ? 'translateY(-1px)' : 'translateY(0)',
  }), [hoveredCTA]);

  return (
    <div className="space-y-6 lg:pr-0 lg:pt-5 pt-0">
      <MicroInteractive scaleAmount={0.005} opacityRange={[0.98, 1]} proximityRadius={400}>
        <h1 className="relative" style={titleStyle}>
          {title || "Metsamaakler"}
        </h1>
      </MicroInteractive>

      <MicroInteractive scaleAmount={0.01} opacityRange={[0.9, 1]} proximityRadius={280}>
        <p style={subtitleStyle}>
          Metsa müük, raieõiguse müük, metsakinnistutega seotud tehingud. Ostame teie kinnistu või leiame parima hinnaga ostja ilma ebaprofessionaalsete vahendajateta.
        </p>
      </MicroInteractive>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-3">
        <button
          onMouseEnter={() => setHoveredCTA(true)}
          onMouseLeave={() => setHoveredCTA(false)}
          className="active:scale-[0.98] w-full sm:w-auto flex justify-center items-center text-center"
          style={ctaStyle}
        >
          Tasuta hindamine
        </button>

        <Parallax offset={10} className="inline-block w-full sm:w-auto">
          {/* Changed background to be semi-transparent white/glassmorphism */}
          <div className="flex items-center gap-4 px-5 py-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-white/20 w-full sm:w-fit justify-center sm:justify-start shadow-lg">
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
            <div className="flex items-center gap-4 group cursor-default rounded-lg hover:bg-white/10 transition-colors p-2 -ml-2">
              <div className="flex-shrink-0 transition-all duration-350 group-hover:scale-105 bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-xl text-[rgb(52,125,78)]">
                {item.icon}
              </div>

              <p
                className="transition-all duration-300"
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
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

export const HeroNew: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <section 
      className="relative w-full flex items-center min-h-[85vh]" 
      style={{ 
        paddingTop: 'clamp(90px, 15vh, 120px)', 
        paddingBottom: '90px',
        zIndex: 10,
        isolation: 'isolate',
        overflow: 'hidden'
      }}
    >
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&q=80" // Fallback poster
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Left Content Column */}
          <LeftContent title={title} />

          {/* Right Form Column */}
          <div className="relative flex justify-center lg:justify-end pt-4 lg:pt-[55px] pb-8 lg:pb-0">
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
