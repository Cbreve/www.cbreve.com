import React from 'react';

export const LoadingDots: React.FC = () => {
  return (
    <div className="loading-dots flex space-x-1">
      <div className="w-2 h-2 bg-white rounded-full" />
      <div className="w-2 h-2 bg-white rounded-full" />
      <div className="w-2 h-2 bg-white rounded-full" />
    </div>
  );
};