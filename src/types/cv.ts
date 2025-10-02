export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface CVData {
  contact: ContactInfo;
  summary: string;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
}

