import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { BehanceIcon } from './icons/BehanceIcon';
import type { TeamMember } from '../types';
import { getSocialLinks } from '../utils/social';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const socialLinks = getSocialLinks(member);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="relative h-64">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <p className="text-[#995a7d] mb-2">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#995a7d] transition-colors"
              aria-label={`${label} profile`}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;