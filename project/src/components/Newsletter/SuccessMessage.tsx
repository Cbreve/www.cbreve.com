import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SuccessMessage: React.FC = () => (
  <div className="flex items-center justify-center gap-2 mt-4 text-green-600 animate-fadeIn">
    <CheckCircle className="h-5 w-5" />
    <span>Thank you for subscribing!</span>
  </div>
);