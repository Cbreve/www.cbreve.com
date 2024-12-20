import React from 'react';

export const BehanceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 15a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 8 8H3v8h5Z" />
    <path d="M3 12h6" />
    <path d="M14 8h7" />
    <path d="M21 12h-7a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5" />
  </svg>
);