import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('reveal-visible');
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'reveal-up';
      case 'down':
        return 'reveal-down';
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      default:
        return 'reveal-up';
    }
  };

  return (
    <div ref={elementRef} className={`reveal ${getDirectionClass()} ${className}`}>
      {children}
    </div>
  );
}
