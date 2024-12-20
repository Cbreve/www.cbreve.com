import React from 'react';
import { HeroContent } from './HeroContent';
import { ScrollIndicator } from './ScrollIndicator';
import { BackgroundAnimation } from './BackgroundAnimation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <HeroContent />
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;