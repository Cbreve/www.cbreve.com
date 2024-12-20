import React, { useState } from 'react';
import { ContactFormFields } from './ContactFormFields';
import { SubmitButton } from './SubmitButton';
import { StatusMessage } from './StatusMessage';
import type { ContactFormData } from '../../../types';

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
      <ContactFormFields formData={formData} onChange={handleChange} />
      <SubmitButton isSubmitting={isSubmitting} />
      <StatusMessage status={submitStatus} />
    </form>
  );
};