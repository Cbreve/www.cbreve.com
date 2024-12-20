import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';
import { SuccessMessage } from './SuccessMessage';
import { ErrorMessage } from './ErrorMessage';
import { useNewsletter } from '../../hooks/useNewsletter';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const { subscribe, isLoading, status } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
    if (status === 'success') {
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-6 py-4 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#995a7d] text-gray-800 pr-36"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#995a7d] text-white rounded-full font-medium transition-all flex items-center gap-2 hover:bg-opacity-90 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <span>Subscribe</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === 'success' && <SuccessMessage />}
      {status === 'error' && <ErrorMessage />}
    </form>
  );
};

export default NewsletterForm;