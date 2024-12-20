import { Github, Linkedin, Twitter } from 'lucide-react';
import { BehanceIcon } from '../components/icons/BehanceIcon';
import type { TeamMember } from '../types';

interface SocialLink {
  icon: React.FC<{ className?: string }>;
  url: string;
  label: string;
}

export const getSocialLinks = (member: TeamMember): SocialLink[] => {
  const links: SocialLink[] = [];

  if (member.github) {
    links.push({
      icon: Github,
      url: member.github,
      label: 'GitHub'
    });
  }

  if (member.linkedin) {
    links.push({
      icon: Linkedin,
      url: member.linkedin,
      label: 'LinkedIn'
    });
  }

  if (member.twitter) {
    links.push({
      icon: Twitter,
      url: member.twitter,
      label: 'Twitter'
    });
  }

  if (member.behance) {
    links.push({
      icon: BehanceIcon,
      url: member.behance,
      label: 'Behance'
    });
  }

  return links;
};