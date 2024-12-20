import React from 'react';

interface StatusMessageProps {
  status: 'idle' | 'success' | 'error';
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  if (status === 'idle') return null;

  return status === 'success' ? (
    <p className="text-green-600 text-center mt-4 animate-fadeIn">
      Message sent successfully!
    </p>
  ) : (
    <p className="text-red-600 text-center mt-4 animate-fadeIn">
      Failed to send message. Please try again.
    </p>
  );
};