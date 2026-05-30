export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  href: string;
  benefits?: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricValue: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FormData {
  fullName: string;
  businessEmail: string;
  company: string;
  phone: string;
  serviceNeeded: string;
  message: string;
  preferredDate?: string;
}
