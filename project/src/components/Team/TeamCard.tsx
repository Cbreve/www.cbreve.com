import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { BehanceIcon } from '../icons/BehanceIcon';
import type { TeamMember } from '../../types';
import { getSocialLinks } from '../../utils/social';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const socialLinks = getSocialLinks(member);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
      style={{ 
        animationDelay: `${index * 200}ms`,
        animation: 'scaleIn 0.5s ease-out forwards',
        opacity: 0 
      }}
    >
      <div className="relative h-64 overflow-hidden group">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              className="text-gray-600 hover:text-[#995a7d] transition-colors transform hover:scale-110"
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