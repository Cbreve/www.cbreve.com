import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { LoadingDots } from './LoadingDots';
import { StatusMessage } from './StatusMessage';
import type { ContactFormData } from '../../types';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isSubmitting,
  submitStatus
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    if (submitStatus === 'success') {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#995a7d] focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#995a7d] focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#995a7d] focus:border-transparent transition-all resize-none"
          placeholder="How can we help you?"
        />
      </div>
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
      <StatusMessage status={submitStatus} />
    </form>
  );
};