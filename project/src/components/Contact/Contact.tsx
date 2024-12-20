import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactHeader } from './ContactHeader';
import { ContactBackground } from './ContactBackground';
import { useContactForm } from './useContactForm';

const Contact: React.FC = () => {
  const { handleSubmit, isSubmitting, submitStatus } = useContactForm();

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <ContactBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <ContactForm 
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
        />
      </div>
    </section>
  );
};

export default Contact;