import React from 'react';
import { Send } from 'lucide-react';
import { LoadingDots } from '../LoadingDots';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={`w-full bg-[#995a7d] text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 transform hover:scale-[1.02]'
    }`}
  >
    {isSubmitting ? (
      <>
        <LoadingDots />
        <span>Sending...</span>
      </>
    ) : (
      <>
        <Send className="h-5 w-5" />
        <span>Send Message</span>
      </>
    )}
  </button>
);