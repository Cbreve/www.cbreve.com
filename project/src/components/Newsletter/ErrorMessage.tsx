import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage: React.FC = () => (
  <div className="flex items-center justify-center gap-2 mt-4 text-red-600 animate-fadeIn">
    <AlertCircle className="h-5 w-5" />
    <span>Oops! Something went wrong. Please try again.</span>
  </div>
);