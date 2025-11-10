import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 50,
  duration = 0.6,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: 'easeOut' }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
