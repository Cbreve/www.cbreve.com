import { useState } from 'react';

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

export const useNewsletter = () => {
  const [status, setStatus] = useState<NewsletterStatus>('idle');
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (email: string) => {
    setIsLoading(true);
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, always succeed
      setStatus('success');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    subscribe,
    isLoading,
    status
  };
};