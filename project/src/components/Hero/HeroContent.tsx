import React from 'react';
import { HeroButtons } from './HeroButtons';

export const HeroContent: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
        Innovating the Future Through Code
      </h1>
      <p className="text-xl text-white mb-8 animate-slideUp">
        We create open-source solutions for global challenges
      </p>
      <HeroButtons />
    </div>
  );
};