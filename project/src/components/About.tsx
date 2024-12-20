import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At CBreve, we're committed to leveraging technology to create positive change globally through innovative software solutions and expert consultancy.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="slideIn" delay={200} className="hover-lift">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#995a7d] mb-4">Mission</h3>
              <p className="text-gray-600">
                To develop cutting-edge open-source solutions that address real-world challenges while providing exceptional software development and consultancy services to businesses worldwide.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slideIn" delay={400} className="hover-lift">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#995a7d] mb-4">Vision</h3>
              <p className="text-gray-600">
                To be a leading force in technological innovation, fostering a global community of developers and businesses united in creating positive technological impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;