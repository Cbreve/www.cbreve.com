import React from 'react';
import type { ContactFormData } from '../../../types';

interface ContactFormFieldsProps {
  formData: ContactFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({ formData, onChange }) => (
  <>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
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
          onChange={onChange}
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
        onChange={onChange}
        required
        rows={6}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#995a7d] focus:border-transparent transition-all resize-none"
        placeholder="How can we help you?"
      />
    </div>
  </>
);