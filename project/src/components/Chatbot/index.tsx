import React from 'react';
import { ChatbotButton } from './ChatbotButton';
import { ChatWindow } from './ChatWindow';
import { useChatbot } from '../../hooks/useChatbot';

const Chatbot: React.FC = () => {
  const { messages, isOpen, isTyping, toggleChat, sendMessage } = useChatbot();

  return (
    <>
      <ChatbotButton isOpen={isOpen} onClick={toggleChat} />
      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onSendMessage={sendMessage}
        />
      )}
    </>
  );
};

export default Chatbot;