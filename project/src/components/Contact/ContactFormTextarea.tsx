import React from 'react';

interface ContactFormTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export const ContactFormTextarea: React.FC<ContactFormTextareaProps> = ({
  value,
  onChange,
  placeholder
}) => (
  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      value={value}
      onChange={onChange}
      required
      rows={6}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#995a7d] focus:border-transparent transition-all resize-none"
      placeholder={placeholder}
    />
  </div>
);