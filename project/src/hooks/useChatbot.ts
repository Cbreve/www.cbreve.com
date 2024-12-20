import { useState, useCallback } from 'react';
import type { Message, ChatbotState } from '../types/chatbot';

const INITIAL_MESSAGE: Message = {
  id: '1',
  content: 'Hello! How can I help you today?',
  sender: 'bot',
  timestamp: new Date(),
};

export const useChatbot = () => {
  const [state, setState] = useState<ChatbotState>({
    messages: [INITIAL_MESSAGE],
    isOpen: false,
    isTyping: false,
  });

  const toggleChat = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message. Our team will get back to you soon.',
        sender: 'bot',
        timestamp: new Date(),
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isTyping: false,
      }));
    }, 1500);
  }, []);

  return {
    ...state,
    toggleChat,
    sendMessage,
  };
};