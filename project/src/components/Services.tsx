import React from 'react';
import { Code2, Globe2, Lightbulb } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions for web, mobile, and desktop applications."
    },
    {
      icon: Globe2,
      title: "Open Source Projects",
      description: "Contributing to the global developer community with innovative solutions."
    },
    {
      icon: Lightbulb,
      title: "Technical Consultancy",
      description: "Expert guidance on software architecture and development strategies."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="slideUp"
              delay={index * 200}
              className="hover-lift"
            >
              <div className="bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-all duration-300">
                <service.icon className="h-12 w-12 text-[#995a7d] mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;