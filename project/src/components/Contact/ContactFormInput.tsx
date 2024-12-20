import React from 'react';

interface ContactFormInputProps {
  type?: 'text' | 'email';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const ContactFormInput: React.FC<ContactFormInputProps> = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-sm font-medium text-gray-700 capitalize">
      {name}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#995a7d] focus:border-transparent transition-all"
      placeholder={placeholder}
    />
  </div>
);