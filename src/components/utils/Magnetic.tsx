import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // How far it moves (default ~0.2)
  active?: boolean;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({ 
  children, 
  strength = 0.2,
  active = true,
  className = "" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (!active) return <div className={className}>{children}</div>;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ display: 'inline-block', touchAction: 'none' }}
    >
      {children}
    </motion.div>
  );
};
