export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  behance?: string;
}

export interface TeamMember extends SocialLinks {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}