import React, { useEffect, useRef, useState, CSSProperties } from 'react';
import { usePhysics } from '../contexts/PhysicsContext';

interface MicroInteractiveProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  scaleAmount?: number;
  opacityRange?: [number, number];
  rotationMax?: number;
  proximityRadius?: number;
}

export const MicroInteractive: React.FC<MicroInteractiveProps> = ({
  children,
  className = '',
  intensity = 1,
  scaleAmount = 0.04,
  opacityRange = [0.75, 1],
  rotationMax = 0,
  proximityRadius = 200,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { physicsState } = usePhysics();
  const [isVisible, setIsVisible] = useState(false);

  // We use a ref for local animation state to avoid React re-renders during the animation loop
  // The 'transform' is applied directly to the DOM node
  const localState = useRef({
    distanceToMouse: 1000,
    isNearMouse: false,
    angleToMouse: 0,
    currentScale: 1,
    currentOpacity: opacityRange[0],
    currentRotation: 0,
  });

  // Intersection Observer to pause animation when off-screen
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '100px' }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!isVisible || !ref.current) return;

    let animationFrame: number;

    const update = () => {
      const el = ref.current;
      if (!el) return;

      const physics = physicsState.current;
      const state = localState.current;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = physics.mouseX - centerX;
      const dy = physics.mouseY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Optimization: Skip heavy logic if far away, but we must ensure we reset smoothly
      const isNear = distance < proximityRadius;

      if (!isNear && !state.isNearMouse) {
        // Already far away and settled, check if we need to reset style once
        if (state.currentScale !== 1) {
            el.style.transform = `scale(1) rotate(0deg)`;
            el.style.opacity = `${opacityRange[0]}`;
            state.currentScale = 1;
            state.currentOpacity = opacityRange[0];
            state.currentRotation = 0;
        }
        // Poll less frequently if far away? No, we stick to rAF for smoothness when re-entering
        animationFrame = requestAnimationFrame(update);
        return;
      }

      state.distanceToMouse = distance;
      state.isNearMouse = isNear;
      
      let targetScale = 1;
      let targetOpacity = opacityRange[0];
      let targetRotation = 0;

      if (isNear) {
         const angle = Math.atan2(dy, dx);
         const proximityFactor = (1 - distance / proximityRadius) * intensity;
         
         targetScale = 1 + proximityFactor * scaleAmount;
         targetOpacity = opacityRange[0] + proximityFactor * (opacityRange[1] - opacityRange[0]);
         targetRotation = proximityFactor * rotationMax * (Math.cos(angle) * 0.5);
      }

      // Linear interpolation (Lerp) for smoothness
      // We lerp the values to create a 'lag' effect which feels more organic
      state.currentScale += (targetScale - state.currentScale) * 0.1;
      state.currentOpacity += (targetOpacity - state.currentOpacity) * 0.1;
      state.currentRotation += (targetRotation - state.currentRotation) * 0.1;

      // Apply to DOM
      // Using toFixed(4) to avoid sub-pixel jitter
      el.style.transform = `scale(${state.currentScale.toFixed(4)}) rotate(${state.currentRotation.toFixed(3)}deg)`;
      el.style.opacity = `${state.currentOpacity.toFixed(4)}`;

      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, intensity, scaleAmount, rotationMax, proximityRadius, opacityRange, physicsState]);

  // Initial style
  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ 
        transform: 'scale(1) rotate(0deg)',
        opacity: opacityRange[0],
        willChange: isVisible ? 'transform, opacity' : 'auto',
        // No transition property in CSS because we drive it with JS physics!
      }}
    >
      {children}
    </div>
  );
};

interface ParametricElementProps {
  children: React.ReactNode;
  className?: string;
  elementIndex: number;
  couplingStrength?: number;
  dampingFactor?: number;
  resonanceFrequency?: number;
}

export const ParametricElement: React.FC<ParametricElementProps> = ({
  children,
  className = '',
  elementIndex,
  couplingStrength = 0.3,
  dampingFactor = 0.85,
  resonanceFrequency = 2.5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { physicsState } = usePhysics();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '100px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stateRef = useRef({
    rotation: 0,
    rotationVelocity: 0,
    scale: 1,
    scaleVelocity: 0,
    translateX: 0,
    translateY: 0,
  });

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame: number;
    const state = stateRef.current;

    const simulate = () => {
      const el = ref.current;
      if (!el) return;

      const physics = physicsState.current;
      
      const rect = el.getBoundingClientRect();
      const myPosition = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      // scroll influence
      const scrollRotationForce = physics.scrollVelocity * 0.05;
      const scrollScaleForce = Math.abs(physics.scrollAcceleration) * 0.001;

      // mouse influence with inverse square falloff
      const dx = physics.mouseX - myPosition.x;
      const dy = physics.mouseY - myPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence = Math.max(0, 1 - distance / 400);
      const mouseForce = mouseInfluence * mouseInfluence;

      // resonance oscillation
      const resonancePhase = (physics.time / 1000) * resonanceFrequency * 2 * Math.PI;
      const resonanceForce = Math.sin(resonancePhase + elementIndex * 0.5) * physics.sectionEnergy * 0.2;

      // combine forces for rotation
      const totalRotationForce = scrollRotationForce + mouseForce * 10 + resonanceForce;

      state.rotationVelocity += totalRotationForce;
      state.rotationVelocity *= dampingFactor;
      state.rotation += state.rotationVelocity;

      // combine forces for scale
      const targetScale = 1 + mouseForce * 0.3 + Math.abs(resonanceForce) * 0.5;
      const scaleSpringForce = (targetScale - state.scale) * 0.4;
      const scaleDampingForce = state.scaleVelocity * -0.7;

      state.scaleVelocity += scaleSpringForce + scaleDampingForce;
      state.scale += state.scaleVelocity;

      // mouse-based translation
      if (distance < 300) {
        const pushForce = (1 - distance / 300) * 5;
        const angle = Math.atan2(dy, dx);
        state.translateX += Math.cos(angle) * pushForce * 0.1;
        state.translateY += Math.sin(angle) * pushForce * 0.1;
      }

      // return to center
      state.translateX *= 0.92;
      state.translateY *= 0.92;

      // apply transforms with sub-pixel precision
      el.style.transform = `
        translate(${state.translateX.toFixed(3)}px, ${state.translateY.toFixed(3)}px)
        rotate(${state.rotation.toFixed(3)}deg)
        scale(${state.scale.toFixed(4)})
      `;

      animationFrame = requestAnimationFrame(simulate);
    };

    animationFrame = requestAnimationFrame(simulate);
    return () => cancelAnimationFrame(animationFrame);
  }, [
    isVisible,
    elementIndex,
    couplingStrength,
    dampingFactor,
    resonanceFrequency,
    physicsState // physicsState ref is stable, so this dependency is fine
  ]);

  return (
    <div ref={ref} className={className} style={{ willChange: isVisible ? 'transform' : 'auto' }}>
      {children}
    </div>
  );
};
