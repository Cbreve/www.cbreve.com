import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToAbout}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      aria-label="Scroll to about section"
    >
      <ChevronDown size={32} />
    </button>
  );
};