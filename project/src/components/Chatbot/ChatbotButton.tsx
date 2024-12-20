import React from 'react';
import { MessageCircle, X } from 'lucide-react';

interface ChatbotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ChatbotButton: React.FC<ChatbotButtonProps> = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-4 right-4 p-4 bg-[#995a7d] text-white rounded-full shadow-lg hover:bg-opacity-90 transition-all z-50"
    aria-label={isOpen ? 'Close chat' : 'Open chat'}
  >
    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
  </button>
);