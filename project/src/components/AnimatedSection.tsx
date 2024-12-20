import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scaleIn';
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const animationClasses = {
    fadeIn: 'opacity-0 transition-opacity duration-1000',
    slideUp: 'opacity-0 translate-y-10 transition-all duration-1000',
    slideIn: 'opacity-0 -translate-x-10 transition-all duration-1000',
    scaleIn: 'opacity-0 scale-95 transition-all duration-1000'
  };

  const visibleClasses = {
    fadeIn: 'opacity-100',
    slideUp: 'opacity-100 translate-y-0',
    slideIn: 'opacity-100 translate-x-0',
    scaleIn: 'opacity-100 scale-100'
  };

  return (
    <div
      ref={elementRef}
      className={`${className} ${animationClasses[animation]}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...(isVisible && { transform: 'none', opacity: 1 })
      }}
    >
      {children}
    </div>
  );
};