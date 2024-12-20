export interface VolunteerApplication {
  fullName: string;
  email: string;
  github?: string;
  linkedin?: string;
  skills: string[];
  experience: string;
  motivation: string;
  cvFile?: File;
}