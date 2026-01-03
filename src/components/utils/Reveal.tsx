import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  blur?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 0.5,
  yOffset = 24,
  className = "",
  blur = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Optimization for Mobile:
  // Detect if viewport is mobile (<768px) and disable animations or delays
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveDelay = isMobile ? 0 : delay;
  const effectiveDuration = isMobile ? 0.3 : duration;

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 10 : yOffset, // Reduce motion distance on mobile
      filter: blur ? "blur(4px)" : "blur(0px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: effectiveDuration,
        ease: [0.21, 0.47, 0.32, 0.98], 
        delay: effectiveDelay
      }
    }
  };

  // On mobile, we might just want to skip the animation entirely if it causes layout shifts?
  // But "remove entry animations" implies we should just show it.
  // If we set initial="visible" on mobile, it renders immediately.
  const initialVariant = isMobile ? "visible" : "hidden";

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={initialVariant}
      animate={mainControls}
      className={className}
      style={{ width, position: 'relative' }}
    >
      {children}
    </motion.div>
  );
};
