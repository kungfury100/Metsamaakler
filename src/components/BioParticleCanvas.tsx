import React, { useEffect, useRef } from 'react';
import { usePhysics } from '../contexts/PhysicsContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  charge: number;
  hue: number;
  size: number;
  energy: number;
  trail: Array<{ x: number; y: number; alpha: number }>;
}

interface BioParticleCanvasProps {
  particleCount?: number;
  className?: string;
}

export const BioParticleCanvas: React.FC<BioParticleCanvasProps> = ({
  particleCount = 120,
  className = '',
}) => {
  const canvasBackgroundRef = useRef<HTMLCanvasElement>(null);
  const canvasParticlesRef = useRef<HTMLCanvasElement>(null);
  const canvasInteractionRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const physics = usePhysics();

  // initialize particles
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      mass: 0.5 + Math.random() * 1.5,
      charge: Math.random() > 0.5 ? 1 : -1,
      hue: 120 + Math.random() * 60,
      size: 1.5 + Math.random() * 2.5,
      energy: Math.random(),
      trail: [],
    }));
  }, [particleCount]);

  // background layer - slowest update, static gradient field
  useEffect(() => {
    const canvas = canvasBackgroundRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let frame: number;
    let lastUpdate = 0;
    const fps30 = 1000 / 30;

    const render = (timestamp: number) => {
      if (timestamp - lastUpdate < fps30) {
        frame = requestAnimationFrame(render);
        return;
      }
      lastUpdate = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // create organic gradient field resembling forest light filtering
      const gradientCount = 8;
      for (let i = 0; i < gradientCount; i++) {
        const centerX = canvas.width * (0.2 + Math.sin(physics.time / 5000 + i) * 0.3);
        const centerY = canvas.height * (0.3 + Math.cos(physics.time / 4000 + i) * 0.3);
        const radius = canvas.width * 0.6;

        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);

        const hue = 130 + i * 8 + (physics.time / 200) % 60;
        gradient.addColorStop(0, `hsla(${hue}, 65%, 55%, 0.03)`);
        gradient.addColorStop(0.3, `hsla(${hue}, 60%, 50%, 0.02)`);
        gradient.addColorStop(0.6, `hsla(${hue - 10}, 55%, 45%, 0.01)`);
        gradient.addColorStop(1, `hsla(${hue - 20}, 50%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [physics.time]);

  // particle layer - 60fps update with electromagnetic physics
  useEffect(() => {
    const canvas = canvasParticlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let frame: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouseInfluenceRadius = 250;
      const neighborRadius = 150;

      // update physics
      particles.forEach((particle, index) => {
        // mouse attraction/repulsion based on charge
        const dx = physics.mouseX - particle.x;
        const dy = physics.mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseInfluenceRadius && distance > 0) {
          const force = (1 - distance / mouseInfluenceRadius) * 0.15 * particle.charge;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }

        // electromagnetic interactions with neighbors
        particles.forEach((other, otherIndex) => {
          if (index === otherIndex) return;

          const ndx = other.x - particle.x;
          const ndy = other.y - particle.y;
          const ndist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (ndist < neighborRadius && ndist > 0) {
            // coulomb-like force: opposite charges attract, same charges repel
            const forceMagnitude = (particle.charge * other.charge) / (ndist * ndist) * 0.5;
            const angle = Math.atan2(ndy, ndx);

            particle.vx -= Math.cos(angle) * forceMagnitude / particle.mass;
            particle.vy -= Math.sin(angle) * forceMagnitude / particle.mass;
          }
        });

        // scroll influence - particles drift with scroll like pollen in wind
        particle.vy += physics.scrollVelocity * 0.02;
        particle.vx += physics.scrollVelocity * 0.01 * (Math.random() - 0.5);

        // damping
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        // update position with sub-pixel precision
        particle.x += particle.vx;
        particle.y += particle.vy;

        // wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // update trail
        particle.trail.unshift({ x: particle.x, y: particle.y, alpha: 1 });
        if (particle.trail.length > 8) particle.trail.pop();
        particle.trail.forEach((point, i) => {
          point.alpha *= 0.85;
        });

        // update energy based on velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        particle.energy = Math.min(1, speed / 3);
      });

      // render connection lines (mycelium-like network)
      ctx.strokeStyle = 'rgba(52, 125, 78, 0.08)';
      ctx.lineWidth = 0.5;

      particles.forEach((particle, index) => {
        particles.forEach((other, otherIndex) => {
          if (index >= otherIndex) return;

          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < neighborRadius) {
            const alpha = (1 - distance / neighborRadius) * 0.15;
            ctx.strokeStyle = `rgba(52, 125, 78, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // render particles with motion blur trails
      particles.forEach((particle) => {
        // render trail
        particle.trail.forEach((point, i) => {
          if (i === 0) return;

          const prevPoint = particle.trail[i - 1];
          const alpha = point.alpha * 0.2;

          ctx.strokeStyle = `hsla(${particle.hue}, 70%, 60%, ${alpha})`;
          ctx.lineWidth = particle.size * 0.6;
          ctx.lineCap = 'round';

          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
        });

        // render particle core with multi-layer glow
        const glowLayers = [
          { radius: particle.size * 3, alpha: 0.08 },
          { radius: particle.size * 2, alpha: 0.15 },
          { radius: particle.size * 1.5, alpha: 0.3 },
          { radius: particle.size, alpha: 0.6 },
          { radius: particle.size * 0.6, alpha: 0.9 },
        ];

        glowLayers.forEach((layer) => {
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            layer.radius
          );

          const brightness = 60 + particle.energy * 20;
          gradient.addColorStop(0, `hsla(${particle.hue}, 85%, ${brightness}%, ${layer.alpha})`);
          gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, ${brightness - 5}%, ${layer.alpha * 0.6})`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 75%, ${brightness - 10}%, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, layer.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [physics.mouseX, physics.mouseY, physics.scrollVelocity]);

  // interaction layer - 120fps update, cursor effects
  useEffect(() => {
    const canvas = canvasInteractionRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let frame: number;
    let lastUpdate = 0;
    const fps120 = 1000 / 120;

    const render = (timestamp: number) => {
      if (timestamp - lastUpdate < fps120) {
        frame = requestAnimationFrame(render);
        return;
      }
      lastUpdate = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // cursor influence field visualization
      const influenceRadius = 250;
      const gradient = ctx.createRadialGradient(
        physics.mouseX,
        physics.mouseY,
        0,
        physics.mouseX,
        physics.mouseY,
        influenceRadius
      );

      gradient.addColorStop(0, 'rgba(255, 145, 77, 0.06)');
      gradient.addColorStop(0.3, 'rgba(255, 145, 77, 0.03)');
      gradient.addColorStop(0.6, 'rgba(52, 125, 78, 0.02)');
      gradient.addColorStop(1, 'rgba(52, 125, 78, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(physics.mouseX, physics.mouseY, influenceRadius, 0, Math.PI * 2);
      ctx.fill();

      // velocity indicator (shows cursor movement direction)
      const velocityMagnitude = Math.sqrt(
        physics.mouseVelocityX * physics.mouseVelocityX +
        physics.mouseVelocityY * physics.mouseVelocityY
      );

      if (velocityMagnitude > 10) {
        const angle = Math.atan2(physics.mouseVelocityY, physics.mouseVelocityX);
        const length = Math.min(velocityMagnitude * 0.3, 80);

        ctx.strokeStyle = `rgba(255, 145, 77, ${Math.min(velocityMagnitude / 1000, 0.4)})`;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(physics.mouseX, physics.mouseY);
        ctx.lineTo(
          physics.mouseX + Math.cos(angle) * length,
          physics.mouseY + Math.sin(angle) * length
        );
        ctx.stroke();

        // arrowhead
        const arrowSize = 8;
        ctx.fillStyle = `rgba(255, 145, 77, ${Math.min(velocityMagnitude / 1000, 0.4)})`;
        ctx.beginPath();
        ctx.moveTo(
          physics.mouseX + Math.cos(angle) * length,
          physics.mouseY + Math.sin(angle) * length
        );
        ctx.lineTo(
          physics.mouseX + Math.cos(angle) * length + Math.cos(angle + 2.5) * arrowSize,
          physics.mouseY + Math.sin(angle) * length + Math.sin(angle + 2.5) * arrowSize
        );
        ctx.lineTo(
          physics.mouseX + Math.cos(angle) * length + Math.cos(angle - 2.5) * arrowSize,
          physics.mouseY + Math.sin(angle) * length + Math.sin(angle - 2.5) * arrowSize
        );
        ctx.closePath();
        ctx.fill();
      }

      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [physics.mouseX, physics.mouseY, physics.mouseVelocityX, physics.mouseVelocityY]);

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasBackgroundRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'normal' }}
      />
      <canvas
        ref={canvasParticlesRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen' }}
      />
      <canvas
        ref={canvasInteractionRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'normal' }}
      />
    </div>
  );
};
