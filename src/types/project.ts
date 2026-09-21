export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned' | 'production';
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  startDate?: string;
  endDate?: string;
}

export interface ProjectComponent extends React.FC {
  title: string;
  description: string;
  production?: boolean;
}