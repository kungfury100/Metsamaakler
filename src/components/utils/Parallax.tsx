import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number; // Total pixel distance to move. Positive = moves up as you scroll down (slower).
  damping?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({ 
  children, 
  offset = 40, 
  damping = 15,
  className = "" 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Optimization: Disable parallax effect on mobile to improve scroll performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Track when the element enters and leaves the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth the scroll value
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: damping,
    mass: 0.1
  });

  // Map scroll progress to offset. If mobile, map to 0 (no movement).
  const y = useTransform(springScroll, [0, 1], isMobile ? [0, 0] : [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, width: '100%', height: '100%' }}>
        {children}
      </motion.div>
    </div>
  );
};
