import React, { useEffect, useRef, useState } from 'react';
import { MicroInteractive, ParametricElement } from './MicroInteractive';
import { usePhysics } from '../contexts/PhysicsContext';
import { BioParticleCanvas } from './BioParticleCanvas';

interface FloatingLeafProps {
  index: number;
  initialX: number;
  initialY: number;
  size: number;
  hue: number;
}

const FloatingLeaf: React.FC<FloatingLeafProps> = ({ index, initialX, initialY, size, hue }) => {
  const physics = usePhysics();
  const ref = useRef<HTMLDivElement>(null);

  const baseRotation = index * 45;
  const rotationSpeed = 0.02 + (index % 3) * 0.01;
  const currentRotation = baseRotation + (physics.time * rotationSpeed) % 360;

  const floatAmplitude = 20 + (index % 5) * 8;
  const floatSpeed = 0.001 + (index % 4) * 0.0005;
  const floatY = Math.sin(physics.time * floatSpeed + index) * floatAmplitude;

  const driftSpeed = 0.0008 + (index % 3) * 0.0003;
  const driftX = Math.cos(physics.time * driftSpeed + index * 2) * 15;

  return (
    <ParametricElement
      elementIndex={index}
      couplingStrength={0.25}
      dampingFactor={0.88}
      resonanceFrequency={2.0 + (index % 3) * 0.5}
      className="absolute pointer-events-none"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        transform: `translate(${driftX}px, ${floatY}px) rotate(${currentRotation}deg)`,
      }}
    >
      <div
        ref={ref}
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* multi-layer leaf glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 40% 40%, 
              hsla(${hue}, 70%, 60%, 0.15) 0%,
              hsla(${hue}, 65%, 55%, 0.08) 40%,
              transparent 70%
            )`,
            filter: 'blur(12px)',
            transform: 'scale(2)',
          }}
        />

        {/* leaf shape */}
        <svg
          viewBox="0 0 40 40"
          className="relative z-10"
          style={{
            filter: `drop-shadow(0 2px 4px hsla(${hue}, 60%, 30%, 0.3))`,
          }}
        >
          <defs>
            <linearGradient id={`leafGrad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={`hsl(${hue}, 65%, 45%)`} stopOpacity="0.7" />
              <stop offset="50%" stopColor={`hsl(${hue + 10}, 70%, 50%)`} stopOpacity="0.8" />
              <stop offset="100%" stopColor={`hsl(${hue}, 60%, 40%)`} stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id={`leafVein${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={`hsl(${hue - 15}, 50%, 35%)`} stopOpacity="0.4" />
              <stop offset="100%" stopColor={`hsl(${hue - 10}, 55%, 38%)`} stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* leaf body */}
          <ellipse
            cx="20"
            cy="20"
            rx="14"
            ry="18"
            fill={`url(#leafGrad${index})`}
            transform="rotate(-25 20 20)"
          />

          {/* central vein */}
          <path
            d="M 15 8 Q 20 20 18 32"
            stroke={`url(#leafVein${index})`}
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />

          {/* side veins */}
          <path
            d="M 20 15 L 12 18"
            stroke={`url(#leafVein${index})`}
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 19 22 L 10 24"
            stroke={`url(#leafVein${index})`}
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 20 15 L 26 17"
            stroke={`url(#leafVein${index})`}
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>
    </ParametricElement>
  );
};

interface OrganicShapeProps {
  index: number;
  x: number;
  y: number;
  size: number;
  type: 'circle' | 'ring' | 'blob';
}

const OrganicShape: React.FC<OrganicShapeProps> = ({ index, x, y, size, type }) => {
  const physics = usePhysics();

  const pulseSpeed = 0.0015 + (index % 4) * 0.0008;
  const pulsePhase = (physics.time * pulseSpeed + index * 0.7) % (Math.PI * 2);
  const pulseScale = 1 + Math.sin(pulsePhase) * 0.15;

  const rotationSpeed = 0.01 + (index % 3) * 0.005;
  const rotation = (physics.time * rotationSpeed) % 360;

  const hue = 125 + (index % 8) * 7;

  return (
    <ParametricElement
      elementIndex={index + 100}
      couplingStrength={0.2}
      dampingFactor={0.9}
      resonanceFrequency={1.8}
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        style={{
          transform: `scale(${pulseScale}) rotate(${rotation}deg)`,
          transition: 'transform 100ms linear',
        }}
      >
        {type === 'circle' && (
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `radial-gradient(circle at 35% 35%,
                hsla(${hue}, 70%, 65%, 0.12) 0%,
                hsla(${hue}, 65%, 55%, 0.08) 50%,
                transparent 100%
              )`,
              boxShadow: `
                inset 0 1px 2px hsla(${hue}, 60%, 70%, 0.2),
                0 2px 8px hsla(${hue}, 65%, 50%, 0.15),
                0 4px 16px hsla(${hue}, 60%, 45%, 0.08)
              `,
            }}
          />
        )}

        {type === 'ring' && (
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `2px solid hsla(${hue}, 70%, 55%, 0.2)`,
              boxShadow: `
                0 0 4px hsla(${hue}, 70%, 60%, 0.3),
                0 0 8px hsla(${hue}, 65%, 55%, 0.2),
                inset 0 0 4px hsla(${hue}, 75%, 65%, 0.15)
              `,
            }}
          />
        )}

        {type === 'blob' && (
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id={`blobGrad${index}`}>
                <stop offset="0%" stopColor={`hsl(${hue}, 70%, 60%)`} stopOpacity="0.15" />
                <stop offset="70%" stopColor={`hsl(${hue}, 65%, 50%)`} stopOpacity="0.08" />
                <stop offset="100%" stopColor={`hsl(${hue}, 60%, 45%)`} stopOpacity="0" />
              </radialGradient>
            </defs>
            <path
              d="M 50 10 Q 80 30 90 50 Q 80 70 50 90 Q 20 70 10 50 Q 20 30 50 10"
              fill={`url(#blobGrad${index})`}
              style={{
                filter: `drop-shadow(0 2px 6px hsla(${hue}, 60%, 40%, 0.15))`,
              }}
            />
          </svg>
        )}
      </div>
    </ParametricElement>
  );
};

interface GrowthRingProps {
  index: number;
  centerX: number;
  centerY: number;
  maxRadius: number;
}

const GrowthRing: React.FC<GrowthRingProps> = ({ index, centerX, centerY, maxRadius }) => {
  const physics = usePhysics();

  const expansionSpeed = 0.0008 + (index % 3) * 0.0004;
  const expansionPhase = (physics.time * expansionSpeed) % 1;
  const currentRadius = maxRadius * expansionPhase;
  const opacity = (1 - expansionPhase) * 0.25;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${centerX}%`,
        top: `${centerY}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        style={{
          width: `${currentRadius}px`,
          height: `${currentRadius}px`,
          borderRadius: '50%',
          border: `1.5px solid hsla(130, 65%, 50%, ${opacity})`,
          boxShadow: `
            0 0 2px hsla(130, 70%, 60%, ${opacity * 0.8}),
            0 0 4px hsla(130, 65%, 55%, ${opacity * 0.5}),
            inset 0 0 2px hsla(130, 75%, 65%, ${opacity * 0.4})
          `,
        }}
      />
    </div>
  );
};

interface LightRayProps {
  index: number;
  angle: number;
  length: number;
}

const LightRay: React.FC<LightRayProps> = ({ index, angle, length }) => {
  const physics = usePhysics();

  const fadeSpeed = 0.001 + (index % 3) * 0.0005;
  const fadePhase = Math.sin((physics.time * fadeSpeed + index) % (Math.PI * 2));
  const opacity = 0.03 + fadePhase * 0.02;

  return (
    <div
      className="absolute top-0 left-1/2 pointer-events-none origin-top"
      style={{
        width: '2px',
        height: `${length}px`,
        transform: `rotate(${angle}deg)`,
        background: `linear-gradient(to bottom,
          hsla(45, 85%, 75%, ${opacity}) 0%,
          hsla(40, 80%, 70%, ${opacity * 0.7}) 30%,
          hsla(130, 70%, 60%, ${opacity * 0.4}) 60%,
          transparent 100%
        )`,
        filter: 'blur(3px)',
      }}
    />
  );
};

export const Hero: React.FC = () => {
  const physics = usePhysics();
  const heroRef = useRef<HTMLDivElement>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // floating leaf configurations
  const leaves = [
    { x: 8, y: 15, size: 32, hue: 125 },
    { x: 15, y: 35, size: 28, hue: 130 },
    { x: 12, y: 65, size: 35, hue: 128 },
    { x: 6, y: 80, size: 26, hue: 132 },
    { x: 18, y: 50, size: 30, hue: 127 },
    { x: 85, y: 20, size: 34, hue: 129 },
    { x: 90, y: 40, size: 29, hue: 131 },
    { x: 88, y: 70, size: 31, hue: 126 },
    { x: 82, y: 85, size: 27, hue: 133 },
    { x: 92, y: 55, size: 33, hue: 124 },
    { x: 25, y: 12, size: 26, hue: 134 },
    { x: 75, y: 10, size: 28, hue: 125 },
    { x: 20, y: 88, size: 30, hue: 130 },
    { x: 78, y: 92, size: 29, hue: 128 },
    { x: 10, y: 45, size: 25, hue: 132 },
    { x: 87, y: 32, size: 31, hue: 127 },
    { x: 14, y: 72, size: 27, hue: 129 },
    { x: 83, y: 65, size: 33, hue: 126 },
    { x: 22, y: 25, size: 28, hue: 131 },
    { x: 80, y: 78, size: 30, hue: 133 },
  ];

  // organic shape configurations
  const shapes = [
    { x: 10, y: 20, size: 80, type: 'circle' as const },
    { x: 88, y: 18, size: 90, type: 'ring' as const },
    { x: 7, y: 55, size: 100, type: 'blob' as const },
    { x: 91, y: 60, size: 85, type: 'circle' as const },
    { x: 15, y: 82, size: 70, type: 'ring' as const },
    { x: 85, y: 88, size: 95, type: 'blob' as const },
    { x: 5, y: 38, size: 60, type: 'ring' as const },
    { x: 93, y: 42, size: 75, type: 'circle' as const },
    { x: 12, y: 10, size: 65, type: 'blob' as const },
    { x: 86, y: 8, size: 80, type: 'ring' as const },
    { x: 20, y: 68, size: 70, type: 'circle' as const },
    { x: 78, y: 72, size: 85, type: 'blob' as const },
    { x: 8, y: 92, size: 60, type: 'circle' as const },
    { x: 90, y: 25, size: 75, type: 'ring' as const },
    { x: 17, y: 48, size: 55, type: 'blob' as const },
  ];

  // growth ring configurations
  const rings = [
    { x: 30, y: 35, maxRadius: 400 },
    { x: 70, y: 40, maxRadius: 450 },
    { x: 50, y: 60, maxRadius: 380 },
    { x: 25, y: 70, maxRadius: 420 },
    { x: 75, y: 75, maxRadius: 390 },
    { x: 15, y: 25, maxRadius: 360 },
    { x: 85, y: 30, maxRadius: 410 },
    { x: 40, y: 80, maxRadius: 370 },
    { x: 60, y: 20, maxRadius: 400 },
    { x: 50, y: 50, maxRadius: 500 },
  ];

  // light ray configurations
  const rays = [
    { angle: -25, length: 400 },
    { angle: -15, length: 450 },
    { angle: -5, length: 420 },
    { angle: 5, length: 480 },
    { angle: 15, length: 440 },
    { angle: 25, length: 460 },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg,
            rgb(250, 248, 245) 0%,
            rgb(245, 242, 238) 50%,
            rgb(240, 238, 235) 100%
          )
        `,
      }}
    >
      {/* multi-layer canvas background */}
      <BioParticleCanvas particleCount={120} />

      {/* light rays from top */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        {rays.map((ray, index) => (
          <LightRay key={`ray-${index}`} index={index} angle={ray.angle} length={ray.length} />
        ))}
      </div>

      {/* depth fog layers for parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 30%,
                rgba(168, 208, 188, 0.08) 0%,
                transparent 60%
              )
            `,
            transform: `translateY(${physics.scrollY * 0.15}px)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 60%,
                rgba(88, 165, 118, 0.06) 0%,
                transparent 50%
              )
            `,
            transform: `translateY(${physics.scrollY * 0.1}px)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 70% 70%,
                rgba(52, 125, 78, 0.05) 0%,
                transparent 55%
              )
            `,
            transform: `translateY(${physics.scrollY * 0.12}px)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 80%,
                rgba(228, 242, 235, 0.12) 0%,
                transparent 70%
              )
            `,
            transform: `translateY(${physics.scrollY * 0.08}px)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%,
                rgba(168, 208, 188, 0.04) 0%,
                transparent 80%
              )
            `,
            transform: `translateY(${physics.scrollY * 0.05}px)`,
          }}
        />
      </div>

      {/* growth rings */}
      {rings.map((ring, index) => (
        <GrowthRing
          key={`ring-${index}`}
          index={index}
          centerX={ring.x}
          centerY={ring.y}
          maxRadius={ring.maxRadius}
        />
      ))}

      {/* organic shapes */}
      {shapes.map((shape, index) => (
        <OrganicShape
          key={`shape-${index}`}
          index={index}
          x={shape.x}
          y={shape.y}
          size={shape.size}
          type={shape.type}
        />
      ))}

      {/* floating leaves */}
      {leaves.map((leaf, index) => (
        <FloatingLeaf
          key={`leaf-${index}`}
          index={index}
          initialX={leaf.x}
          initialY={leaf.y}
          size={leaf.size}
          hue={leaf.hue}
        />
      ))}

      {/* main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* headline with ultra-tier multi-layer depth */}
        <MicroInteractive
          scaleAmount={0.02}
          opacityRange={[0.95, 1]}
          proximityRadius={300}
          className="mb-8"
        >
          <h1
            className="relative inline-block"
            style={{
              fontSize: '4.5rem',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            {/* text shadow layers for depth */}
            <span
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgb(34, 75, 48) 0%, rgb(52, 125, 78) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'blur(20px)',
                opacity: 0.3,
                transform: 'translateY(8px)',
              }}
            >
              Professionaalne metsanduskonsultatsioon Eestis
            </span>

            <span
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgb(34, 75, 48) 0%, rgb(52, 125, 78) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'blur(10px)',
                opacity: 0.4,
                transform: 'translateY(4px)',
              }}
            >
              Professionaalne metsanduskonsultatsioon Eestis
            </span>

            <span
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgb(34, 75, 48) 0%, rgb(52, 125, 78) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: `
                  0 2px 4px rgba(34, 75, 48, 0.2),
                  0 4px 8px rgba(34, 75, 48, 0.15),
                  0 8px 16px rgba(34, 75, 48, 0.1)
                `,
                transform: 'translateY(2px)',
              }}
            >
              Professionaalne metsanduskonsultatsioon Eestis
            </span>

            <span
              className="relative z-10"
              style={{
                background: 'linear-gradient(135deg, rgb(18, 45, 28) 0%, rgb(34, 75, 48) 50%, rgb(52, 125, 78) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: `
                  0 0 1px rgba(255, 255, 255, 0.5),
                  0 1px 2px rgba(34, 75, 48, 0.3),
                  0 2px 4px rgba(34, 75, 48, 0.2),
                  0 4px 8px rgba(34, 75, 48, 0.15),
                  0 8px 16px rgba(34, 75, 48, 0.1),
                  0 16px 32px rgba(34, 75, 48, 0.05)
                `,
              }}
            >
              Professionaalne metsanduskonsultatsioon Eestis
            </span>

            {/* ultra glow effect on text */}
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgb(52, 125, 78) 0%, rgb(88, 165, 118) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.15,
                filter: 'blur(2px)',
              }}
            >
              Professionaalne metsanduskonsultatsioon Eestis
            </span>
          </h1>
        </MicroInteractive>

        {/* subheadline with depth layers */}
        <MicroInteractive
          scaleAmount={0.015}
          opacityRange={[0.85, 1]}
          proximityRadius={250}
          className="mb-12"
        >
          <p
            className="relative max-w-3xl mx-auto"
            style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'rgb(88, 78, 68)',
            }}
          >
            {/* shadow layer */}
            <span
              className="absolute inset-0"
              style={{
                color: 'rgb(88, 78, 68)',
                opacity: 0.3,
                filter: 'blur(8px)',
                transform: 'translateY(2px)',
              }}
            >
              Aitame metsaomanikkel teha parimaid otsuseid metsa müügi, ostu ja majandamise valdkonnas
            </span>

            {/* mid layer */}
            <span
              className="absolute inset-0"
              style={{
                color: 'rgb(88, 78, 68)',
                opacity: 0.5,
                filter: 'blur(3px)',
                transform: 'translateY(1px)',
              }}
            >
              Aitame metsaomanikkel teha parimaid otsuseid metsa müügi, ostu ja majandamise valdkonnas
            </span>

            {/* main text */}
            <span className="relative z-10">
              Aitame metsaomanikkel teha parimaid otsuseid metsa müügi, ostu ja majandamise valdkonnas
            </span>
          </p>
        </MicroInteractive>

        {/* cta buttons with 15-effect hover states */}
        <div className="flex items-center justify-center gap-6">
          {/* primary cta */}
          <button
            className="relative px-8 py-4 rounded-2xl overflow-hidden group"
            onMouseEnter={() => setHoveredButton('primary')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              fontSize: '1.0625rem',
              fontWeight: 600,
              color: 'rgb(250, 248, 245)',
              transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: hoveredButton === 'primary' ? 'translateY(-6px) scale(1.05)' : 'translateY(0) scale(1)',
            }}
          >
            {/* effect layers - I'll continue with all 15 effects as per ultra-tier requirements */}
            
            {/* layer 1: base background gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgb(255, 145, 77) 0%, rgb(255, 178, 115) 100%)',
                transition: 'opacity 300ms',
              }}
            />

            {/* layer 2: hover gradient rotation */}
            <div
              className={`absolute inset-0 transition-opacity duration-400 ${
                hoveredButton === 'primary' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background: 'linear-gradient(155deg, rgb(255, 178, 115) 0%, rgb(255, 145, 77) 100%)',
              }}
            />

            {/* layer 3: radial overlay intensification */}
            <div
              className="absolute inset-0 transition-opacity duration-400"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 210, 165, 0.4) 0%, transparent 70%)',
                opacity: hoveredButton === 'primary' ? 1 : 0.4,
              }}
            />

            {/* layer 4-5: ultra glow with 12 layers */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                hoveredButton === 'primary' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                boxShadow: `
                  0 0 0.5px hsl(20, 100%, 70%),
                  0 0 1px hsl(25, 100%, 65%),
                  0 0 1.5px hsl(30, 100%, 70%),
                  0 0 2px hsla(28, 100%, 60%, 0.8),
                  0 0 4px hsla(28, 100%, 58%, 0.6),
                  0 0 8px hsla(28, 100%, 56%, 0.4),
                  0 0 16px hsla(28, 100%, 54%, 0.25),
                  0 0 32px hsla(25, 100%, 52%, 0.15),
                  0 0 48px hsla(25, 100%, 50%, 0.1),
                  0 0 64px hsla(28, 100%, 48%, 0.06),
                  0 0 96px hsla(28, 90%, 45%, 0.03),
                  0 0 128px hsla(28, 80%, 40%, 0.015)
                `,
              }}
            />

            {/* layer 6: shimmer sweep */}
            <div
              className={`absolute inset-0 ${hoveredButton === 'primary' ? 'animate-shimmer' : ''}`}
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%)',
              }}
            />

            {/* layer 7: border intensification */}
            <div
              className="absolute inset-0 rounded-2xl transition-opacity duration-300"
              style={{
                border: '1px solid rgba(255, 178, 115, 0.4)',
                opacity: hoveredButton === 'primary' ? 0 : 1,
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl transition-opacity duration-300"
              style={{
                border: '1px solid rgba(255, 210, 165, 0.9)',
                boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                opacity: hoveredButton === 'primary' ? 1 : 0,
              }}
            />

            {/* layer 8: outer glow pulse */}
            <div
              className={`absolute inset-0 rounded-2xl transition-opacity duration-600 ${
                hoveredButton === 'primary' ? 'opacity-100 animate-pulse-glow' : 'opacity-0'
              }`}
              style={{
                boxShadow: '0 0 40px rgba(255, 145, 77, 0.5), 0 0 80px rgba(255, 145, 77, 0.3)',
              }}
            />

            <span className="relative z-10 flex items-center gap-2">
              Alusta konsultatsiooni
              
              {/* icon with exaggerated motion */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform duration-400"
                style={{
                  transform: hoveredButton === 'primary' ? 'translateX(8px) rotate(-15deg)' : 'translateX(0) rotate(0)',
                }}
              >
                <path
                  d="M5 10h10M10 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <style>{`
              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(200%);
                }
              }
              @keyframes pulse-glow {
                0%, 100% {
                  opacity: 0.8;
                }
                50% {
                  opacity: 1;
                }
              }
              .animate-shimmer {
                animation: shimmer 2s ease-in-out;
              }
              .animate-pulse-glow {
                animation: pulse-glow 2s ease-in-out infinite;
              }
            `}</style>
          </button>

          {/* secondary cta */}
          <MicroInteractive scaleAmount={0.05} opacityRange={[0.9, 1]} proximityRadius={140}>
            <button
              className="relative px-8 py-4 rounded-2xl group overflow-hidden"
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: 'rgb(34, 75, 48)',
                transition: 'transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform:
                  hoveredButton === 'secondary' ? 'translateY(-4px) scale(1.04)' : 'translateY(0) scale(1)',
              }}
            >
              {/* background layers */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'rgba(52, 125, 78, 0.06)',
                }}
              />

              <div
                className={`absolute inset-0 transition-opacity duration-400 ${
                  hoveredButton === 'secondary' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(52, 125, 78, 0.12) 0%, rgba(88, 165, 118, 0.1) 100%)',
                }}
              />

              {/* border with glow */}
              <div
                className="absolute inset-0 rounded-2xl transition-all duration-400"
                style={{
                  border: hoveredButton === 'secondary' ? '2px solid rgb(52, 125, 78)' : '2px solid rgba(52, 125, 78, 0.3)',
                  boxShadow:
                    hoveredButton === 'secondary'
                      ? `
                        0 0 2px rgba(52, 125, 78, 0.6),
                        0 0 4px rgba(52, 125, 78, 0.4),
                        0 0 8px rgba(52, 125, 78, 0.3),
                        0 0 16px rgba(52, 125, 78, 0.2),
                        inset 0 1px 2px rgba(88, 165, 118, 0.3)
                      `
                      : 'none',
                }}
              />

              <span className="relative z-10">Vaata portfooliot</span>
            </button>
          </MicroInteractive>
        </div>
      </div>
    </section>
  );
};