import React from 'react';

export const ContactBackground: React.FC = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-[#f3c3d2]/10 to-[#52e4f3]/10" />
    <div className="absolute inset-0">
      <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#52e4f3]/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
      <div className="absolute w-96 h-96 top-1/4 right-1/4 bg-[#f3c3d2]/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '-1s' }} />
      <div className="absolute w-96 h-96 bottom-1/4 left-1/4 bg-[#995a7d]/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '-2s' }} />
    </div>
  </>
);