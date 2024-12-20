import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Open Source Project 1",
    description: "Innovative solution for global development challenges",
    tech: ["React", "Node.js", "TypeScript"],
    github: "https://github.com/cbreve/project1",
    demo: "https://project1.cbreve.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Client Project 2",
    description: "Enterprise-level web application for business automation",
    tech: ["Next.js", "GraphQL", "AWS"],
    demo: "https://project2.cbreve.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Mobile App 3",
    description: "Cross-platform mobile application for productivity",
    tech: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/cbreve/project3",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];