import React from 'react';
import { VolunteerForm } from './VolunteerForm';

const Volunteer: React.FC = () => {
  return (
    <section id="volunteer" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Want to contribute to meaningful open-source projects and make a difference? 
            Join our volunteer program and help us create innovative solutions for global challenges.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <VolunteerForm />
        </div>
      </div>
    </section>
  );
};

export default Volunteer;