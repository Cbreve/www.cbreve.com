import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f3c3d2] via-[#52e4f3] to-[#995a7d]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#52e4f3] rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute w-96 h-96 top-1/4 right-1/4 bg-[#f3c3d2] rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute w-96 h-96 bottom-1/4 left-1/4 bg-[#995a7d] rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>
    </>
  );
};