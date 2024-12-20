import React from 'react';

export const HeroButtons: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-0 sm:space-x-4">
      <a 
        href="#contact" 
        className="inline-block bg-white text-[#995a7d] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
      >
        Get Started
      </a>
      <a 
        href="#services" 
        className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#995a7d] transition-all transform hover:scale-105"
      >
        Our Services
      </a>
    </div>
  );
};