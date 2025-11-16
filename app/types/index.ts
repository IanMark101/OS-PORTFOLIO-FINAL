export interface Project {
    name: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    vercelUrl: string;
    placeholderImage: string;
  }
  
  export interface Section {
    id: string;
    label: string;
    icon: JSX.Element;
  }