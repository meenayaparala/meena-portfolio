export interface Skill {
  name: string;
  percentage: number;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
  longDescription: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  link?: string;
}