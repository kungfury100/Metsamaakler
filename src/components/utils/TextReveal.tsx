import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
  type?: 'word' | 'char'; // 'word' splits by spaces, 'char' splits by characters
  tag?: keyof JSX.IntrinsicElements; // e.g., 'h1', 'h2', 'p'
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
  text, 
  className = "", 
  style,
  delay = 0, 
  duration = 0.5,
  stagger = 0.02,
  type = 'char',
  tag: Tag = 'div' 
}) => {
  // Split text based on type
  const items = type === 'char' ? text.split('') : text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      filter: 'blur(4px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9], // Smooth easing
      },
    },
  };

  return (
    <Tag className={className} style={style}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
      >
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {item}{type === 'word' && index !== items.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};
