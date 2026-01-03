import React from 'react';
import { MicroInteractive } from './MicroInteractive';

interface ServiceCardProps {
  title: string;
  animationComponent: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, animationComponent }) => {
  return (
    <MicroInteractive scaleAmount={0.012} opacityRange={[0.96, 1]} proximityRadius={180}>
      <div
        className="relative group"
        style={{
          background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(252, 254, 253) 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {/* premium animation container - primary focus */}
        <div
          className="relative w-full"
          style={{
            height: 'clamp(240px, 40vh, 323px)', // Responsive height
            background: `
              linear-gradient(to bottom, 
                rgba(248, 252, 250, 0.5) 0%, 
                rgba(252, 254, 253, 0.8) 100%
              )
            `,
            borderBottom: '1px solid rgba(168, 208, 188, 0.2)',
          }}
        >
          {/* multi-layer animation architecture */}
          <div className="absolute inset-0">
            {/* ambient background gradients - layer depth */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 35% 40%, rgba(228, 242, 235, 0.35) 0%, transparent 55%),
                  radial-gradient(circle at 65% 60%, rgba(168, 208, 188, 0.25) 0%, transparent 55%)
                `,
              }}
            />

            {/* primary animation content layer */}
            <div className="absolute inset-0 z-10">{animationComponent}</div>

            {/* particle system layer - reserved for custom animations */}
            <div className="absolute inset-0 z-15 pointer-events-none">
              {/* future: floating particles, organic movements */}
            </div>

            {/* physics interaction layer - reserved for advanced effects */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* future: physics-based interactions */}
            </div>

            {/* lighting overlay layer */}
            <div
              className="absolute inset-0 z-25 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 50% 30%, 
                    rgba(255, 255, 255, 0.15) 0%, 
                    transparent 60%
                  )
                `,
              }}
            />

            {/* depth vignette layer */}
            <div
              className="absolute inset-0 z-5 pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse at 50% 50%, 
                    transparent 0%, 
                    transparent 45%, 
                    rgba(34, 75, 48, 0.03) 100%
                  )
                `,
              }}
            />
          </div>

          {/* edge highlights for depth */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
            }}
          />
        </div>

        {/* minimal content section */}
        <div
          className="relative px-7 py-6"
          style={{
            background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(254, 255, 254) 100%)',
          }}
        >
          {/* service title */}
          <h3
            className="mb-4"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1.375rem',
              fontWeight: 600,
              color: 'rgb(22, 56, 35)',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
            }}
          >
            {title}
          </h3>

          {/* simple link */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span
              style={{
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: 'rgb(52, 125, 78)',
                letterSpacing: '-0.012em',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              vaata lähemalt
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="rgb(52, 125, 78)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* card outer frame */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: '1px solid rgba(168, 208, 188, 0.3)',
            boxShadow: `
              0 1px 2px rgba(34, 75, 48, 0.04),
              0 2px 4px rgba(34, 75, 48, 0.03),
              0 4px 8px rgba(34, 75, 48, 0.02),
              inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `,
          }}
        />
      </div>
    </MicroInteractive>
  );
};

// animation placeholder components - architectured for custom pixel-perfect animations

const MetsaMuukAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* layered structure for complex forest selling animation */}
      <div className="absolute inset-0">
        {/* background depth elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* outer ring - forest context */}
          <div
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(52, 125, 78, 0.04) 0%, rgba(88, 165, 118, 0.02) 100%)',
              border: '1.5px solid rgba(52, 125, 78, 0.12)',
              position: 'relative',
            }}
          >
            {/* middle ring - transaction layer */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(52, 125, 78, 0.06) 0%, rgba(88, 165, 118, 0.04) 100%)',
                border: '2px solid rgba(52, 125, 78, 0.18)',
                boxShadow: `
                  0 4px 12px rgba(34, 75, 48, 0.06),
                  inset 0 2px 6px rgba(255, 255, 255, 0.5)
                `,
              }}
            >
              {/* inner core - icon area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L12 8M12 8L9 5M12 8L15 5"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8C8 8 6 10 6 12C6 14 8 16 8 16"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 8C16 8 18 10 18 12C18 14 16 16 16 16"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 16L12 22M10 22L14 22"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3" stroke="rgb(52, 125, 78)" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* foreground accent elements - ready for custom animations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* placeholder for organic movement patterns */}
        </div>
      </div>
    </div>
  );
};

const RaieoiguseMuukAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* layered structure for logging rights animation */}
      <div className="absolute inset-0">
        {/* background depth elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* outer ring - rights context */}
          <div
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(52, 125, 78, 0.04) 0%, rgba(88, 165, 118, 0.02) 100%)',
              border: '1.5px solid rgba(52, 125, 78, 0.12)',
              position: 'relative',
            }}
          >
            {/* middle ring - contract layer */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(52, 125, 78, 0.06) 0%, rgba(88, 165, 118, 0.04) 100%)',
                border: '2px solid rgba(52, 125, 78, 0.18)',
                boxShadow: `
                  0 4px 12px rgba(34, 75, 48, 0.06),
                  inset 0 2px 6px rgba(255, 255, 255, 0.5)
                `,
              }}
            >
              {/* inner core - icon area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 3L9 8L4 8L12 2L20 8L15 8L15 3"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(52, 125, 78, 0.06)"
                  />
                  <path d="M12 8L12 22" stroke="rgb(52, 125, 78)" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M8 12L16 12M8 16L16 16" stroke="rgb(52, 125, 78)" strokeWidth="1.8" strokeLinecap="round" />
                  <circle
                    cx="18"
                    cy="18"
                    r="3.5"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    fill="rgba(52, 125, 78, 0.06)"
                  />
                  <path d="M16.5 18L19.5 18M18 16.5L18 19.5" stroke="rgb(52, 125, 78)" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* foreground accent elements - ready for custom animations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* placeholder for organic movement patterns */}
        </div>
      </div>
    </div>
  );
};

const MetsaHindamineAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* layered structure for forest valuation animation */}
      <div className="absolute inset-0">
        {/* background depth elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* outer ring - assessment context */}
          <div
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(52, 125, 78, 0.04) 0%, rgba(88, 165, 118, 0.02) 100%)',
              border: '1.5px solid rgba(52, 125, 78, 0.12)',
              position: 'relative',
            }}
          >
            {/* middle ring - evaluation layer */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(52, 125, 78, 0.06) 0%, rgba(88, 165, 118, 0.04) 100%)',
                border: '2px solid rgba(52, 125, 78, 0.18)',
                boxShadow: `
                  0 4px 12px rgba(34, 75, 48, 0.06),
                  inset 0 2px 6px rgba(255, 255, 255, 0.5)
                `,
              }}
            >
              {/* inner core - icon area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2.5"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    fill="rgba(52, 125, 78, 0.05)"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M4 9L20 9M12 4L12 9" stroke="rgb(52, 125, 78)" strokeWidth="1.8" strokeLinecap="round" />
                  <circle
                    cx="17"
                    cy="7"
                    r="2.5"
                    stroke="rgb(52, 125, 78)"
                    strokeWidth="1.8"
                    fill="rgba(52, 125, 78, 0.08)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* foreground accent elements - ready for custom animations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* placeholder for organic movement patterns */}
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Metsa müük',
      animationComponent: <MetsaMuukAnimation />,
    },
    {
      title: 'Raieõiguse müük',
      animationComponent: <RaieoiguseMuukAnimation />,
    },
    {
      title: 'Metsa hindamine',
      animationComponent: <MetsaHindamineAnimation />,
    },
  ];

  return (
    <section
      className="relative py-12 lg:py-24"
      style={{
        background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(250, 254, 252) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} animationComponent={service.animationComponent} />
          ))}
        </div>
      </div>
    </section>
  );
};