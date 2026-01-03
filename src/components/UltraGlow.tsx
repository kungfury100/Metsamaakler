import React, { useEffect, useState } from 'react';

interface UltraGlowProps {
  baseHue: number;
  animated?: boolean;
  intensity?: number;
}

export const useUltraGlowSystem = ({
  baseHue,
  animated = false,
  intensity = 1,
}: UltraGlowProps): string => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!animated) return;

    let frame: number;
    const animate = () => {
      setTime(Date.now());
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [animated]);

  const layers: string[] = [];
  const currentHue = animated ? (baseHue + (time / 100) % 60) : baseHue;

  // inner core with chromatic aberration
  layers.push(`0 0 0.5px hsl(${currentHue - 10}, 100%, 70%)`);
  layers.push(`0 0 1px hsl(${currentHue}, 100%, 65%)`);
  layers.push(`0 0 1.5px hsl(${currentHue + 10}, 100%, 70%)`);

  // mid glow with exponential progression
  const midLayers = [
    { radius: 2, lightness: 60, alpha: 0.8 },
    { radius: 4, lightness: 58, alpha: 0.6 },
    { radius: 8, lightness: 56, alpha: 0.4 },
    { radius: 16, lightness: 54, alpha: 0.25 },
  ];

  midLayers.forEach((layer) => {
    const actualAlpha = layer.alpha * intensity;
    layers.push(
      `0 0 ${layer.radius}px hsla(${currentHue}, 100%, ${layer.lightness}%, ${actualAlpha})`
    );
  });

  // outer halo with multiple color temperatures
  const outerLayers = [
    { radius: 32, hueShift: -5, lightness: 52, alpha: 0.15 },
    { radius: 48, hueShift: 0, lightness: 50, alpha: 0.1 },
    { radius: 64, hueShift: 5, lightness: 48, alpha: 0.06 },
    { radius: 96, hueShift: 0, lightness: 45, alpha: 0.03, saturation: 90 },
    { radius: 128, hueShift: 0, lightness: 40, alpha: 0.015, saturation: 80 },
  ];

  outerLayers.forEach((layer) => {
    const actualAlpha = layer.alpha * intensity;
    const saturation = layer.saturation || 100;
    layers.push(
      `0 0 ${layer.radius}px hsla(${currentHue + layer.hueShift}, ${saturation}%, ${layer.lightness}%, ${actualAlpha})`
    );
  });

  return layers.join(', ');
};

interface BreathingGlowProps {
  baseHue: number;
  intensity?: number;
  breathSpeed?: number;
  children: React.ReactNode;
  className?: string;
}

export const BreathingGlow: React.FC<BreathingGlowProps> = ({
  baseHue,
  intensity = 1,
  breathSpeed = 2000,
  children,
  className = '',
}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setTime(Date.now());
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const breathCycle = Math.sin((time / breathSpeed) * Math.PI * 2) * 0.3 + 0.7;
  const currentIntensity = intensity * breathCycle;

  const dynamicShadow = Array.from({ length: 12 }, (_, i) => {
    const radius = Math.pow(2, i * 0.5);
    const baseOpacity = Math.pow(0.7, i);
    const pulsePhase = (time / 1000 + i * 0.2) * Math.PI * 2;
    const pulse = Math.sin(pulsePhase) * 0.2 + 0.8;
    const opacity = baseOpacity * pulse * currentIntensity;
    const hue = (baseHue + i * 3 + time / 100) % 360;

    return `0 0 ${radius.toFixed(3)}px hsla(${hue}, 100%, ${60 - i * 2}%, ${opacity.toFixed(4)})`;
  }).join(', ');

  return (
    <div className={className} style={{ boxShadow: dynamicShadow }}>
      {children}
    </div>
  );
};
