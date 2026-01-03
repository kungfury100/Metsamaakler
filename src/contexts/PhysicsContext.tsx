import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// OPTIMIZED PHYSICS ENGINE
// ═══════════════════════════════════════════════════════════════════════════════════════════════
// Architecture:
// - Uses a "Pull" based architecture via Mutable Refs to avoid React Render Cycles.
// - 0 re-renders when mouse moves or page scrolls.
// - Consumers run their own rAF loops and read from the shared physics state.
// ═══════════════════════════════════════════════════════════════════════════════════════════════

interface PhysicsState {
  mouseX: number;
  mouseY: number;
  scrollY: number;
  scrollVelocity: number;
  scrollAcceleration: number;
  time: number;
  sectionEnergy: number;
  viewportWidth: number;
  viewportHeight: number;
  mouseVelocityX: number;
  mouseVelocityY: number;
}

interface PhysicsContextValue {
  // The mutable ref that holds the latest physics state
  // Components should read from this in their animation loops
  physicsState: React.MutableRefObject<PhysicsState>;
  isReady: boolean;
}

const PhysicsContext = createContext<PhysicsContextValue | null>(null);

export const usePhysics = (): PhysicsContextValue => {
  const context = useContext(PhysicsContext);
  if (!context) {
    throw new Error('usePhysics must be used within PhysicsProvider');
  }
  return context;
};

interface PhysicsProviderProps {
  children: ReactNode;
}

export const PhysicsProvider: React.FC<PhysicsProviderProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  
  // The "Source of Truth" living outside React's render cycle
  const physicsStateRef = useRef<PhysicsState>({
    mouseX: 0,
    mouseY: 0,
    scrollY: 0,
    scrollVelocity: 0,
    scrollAcceleration: 0,
    time: 0,
    sectionEnergy: 0.5,
    viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1920,
    viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 1080,
    mouseVelocityX: 0,
    mouseVelocityY: 0,
  });

  // Internal refs for calculation
  const lastScrollRef = useRef(0);
  const lastVelocityRef = useRef(0);
  const lastMouseRef = useRef({ x: 0, y: 0, time: 0 });
  const energyDecayRef = useRef(0.5);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    let startTime = Date.now();

    // High-performance event listeners that ONLY update the ref
    // No setState calls here!
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = (now - lastMouseRef.current.time) / 1000;
      
      const state = physicsStateRef.current;

      if (dt > 0) {
        const dx = e.clientX - lastMouseRef.current.x;
        const dy = e.clientY - lastMouseRef.current.y;
        
        state.mouseVelocityX = dx / dt;
        state.mouseVelocityY = dy / dt;
      }
      
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      
      lastMouseRef.current = { x: e.clientX, y: e.clientY, time: now };
      
      // increase energy on mouse movement
      energyDecayRef.current = Math.min(1, energyDecayRef.current + 0.05);
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const velocity = currentScroll - lastScrollRef.current;
      const acceleration = velocity - lastVelocityRef.current;

      const state = physicsStateRef.current;
      state.scrollY = currentScroll;
      state.scrollVelocity = velocity;
      state.scrollAcceleration = acceleration;

      lastScrollRef.current = currentScroll;
      lastVelocityRef.current = velocity;

      // increase energy on scroll
      energyDecayRef.current = Math.min(1, energyDecayRef.current + 0.08);
    };

    const handleResize = () => {
      const state = physicsStateRef.current;
      state.viewportWidth = window.innerWidth;
      state.viewportHeight = window.innerHeight;
    };

    // The Master Loop - Updates the Physics State at 60fps
    // But does NOT trigger React renders
    const updatePhysics = () => {
      const elapsed = Date.now() - startTime;
      const state = physicsStateRef.current;
      state.time = elapsed;

      // decay energy over time
      energyDecayRef.current *= 0.995;
      state.sectionEnergy = energyDecayRef.current;

      // decay velocities
      state.scrollVelocity *= 0.95;
      state.scrollAcceleration *= 0.9;
      state.mouseVelocityX *= 0.92;
      state.mouseVelocityY *= 0.92;

      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    // Bind listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Start loop
    animationFrameRef.current = requestAnimationFrame(updatePhysics);
    setIsReady(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Stable value object
  const value = {
    physicsState: physicsStateRef,
    isReady
  };

  return (
    <PhysicsContext.Provider value={value}>
      {children}
    </PhysicsContext.Provider>
  );
};
