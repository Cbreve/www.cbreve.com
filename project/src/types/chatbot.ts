export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatbotState {
  messages: Message[];
  isOpen: boolean;
  isTyping: boolean;
}