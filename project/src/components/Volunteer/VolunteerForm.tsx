import React, { useState } from 'react';
import { Send, Upload } from 'lucide-react';
import type { VolunteerApplication } from '../../types/volunteer';

const SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
  'Java', 'Mobile Development', 'UI/UX Design', 'DevOps',
  'Cloud Computing', 'Data Science', 'Machine Learning'
];

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<VolunteerApplication>>({
    skills: [],
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ skills: [] });
      setFile(null);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            required
            value={formData.fullName || ''}
            onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#995a7d] focus:ring focus:ring-[#995a7d] focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            value={formData.email || ''}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#995a7d] focus:ring focus:ring-[#995a7d] focus:ring-opacity-50"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">GitHub Profile (optional)</label>
          <input
            type="url"
            value={formData.github || ''}
            onChange={e => setFormData(prev => ({ ...prev, github: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#995a7d] focus:ring focus:ring-[#995a7d] focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn Profile (optional)</label>
          <input
            type="url"
            value={formData.linkedin || ''}
            onChange={e => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#995a7d] focus:ring focus:ring-[#995a7d] focus:ring-opacity-50"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {SKILLS.map(skill => (
            <button
              key={skill}
              type="button"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  skills: prev.skills?.includes(skill)
                    ? prev.skills.filter(s => s !== skill)
                    : [...(prev.skills || []), skill]
                }));
              }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                formData.skills?.includes(skill)
                  ? 'bg-[#995a7d] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Experience</label>
        <textarea
          required
          value={formData.experience || ''}
          onChange={e => setFormData(prev => ({ ...prev, experience: e.target.value }))}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#995a7d] focus:ring focus:ring-[#995a7d] focus:ring-opacity-50"
          placeholder="Tell us about your relevant experience..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Motivation</label>
        <textarea
          required
          value={formData.motivation || ''}
          onChange={e => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#995a7d] focus:ring focus:ring-[#995a7d] focus:ring-opacity-50"
          placeholder="Why do you want to volunteer with us?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">CV/Resume</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#995a7d] hover:text-[#995a7d] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#995a7d]">
                <span>Upload a file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx"
                  onChange={e => setFile(e.target.files?.[0] || null)}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
          </div>
        </div>
        {file && (
          <p className="mt-2 text-sm text-gray-600">
            Selected file: {file.name}
          </p>
        )}
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
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Submit Application</span>
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-center animate-fadeIn">
          Application submitted successfully! We'll be in touch soon.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center animate-fadeIn">
          Failed to submit application. Please try again.
        </p>
      )}
    </form>
  );
};