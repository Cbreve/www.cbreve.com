import React from 'react';
import NewsletterForm from './NewsletterForm';
import { NewsletterBackground } from './NewsletterBackground';

const Newsletter: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <NewsletterBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with CBreve
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on open-source projects, 
            tech insights, and industry news.
          </p>
        </div>
        <NewsletterForm />
        <div className="mt-8 text-center">
          <p className="text-sm text-white/80">
            Join our growing community of developers and tech enthusiasts.
            We respect your privacy and won't spam your inbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;