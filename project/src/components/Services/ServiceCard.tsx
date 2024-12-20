import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#f3c3d2] to-[#995a7d] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
        <div className="relative bg-white p-6 rounded-lg">
          <Icon className="h-12 w-12 text-[#995a7d] mb-4 transform group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};