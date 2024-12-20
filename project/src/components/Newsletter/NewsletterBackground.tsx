import React from 'react';

export const NewsletterBackground: React.FC = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-r from-[#995a7d] to-[#52e4f3]" />
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80')] opacity-10 bg-center bg-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#995a7d]/90 to-[#52e4f3]/90 backdrop-blur-sm" />
    </div>
    <div className="absolute inset-0">
      <svg
        className="absolute left-0 top-0 h-full w-48 text-white/5 transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  </>
);