export interface NavLink {
  label: string;
  href: string;
  description?: string;
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

export interface FeaturedService {
  id: string;
  title: string;
  problem: string;
  approach: string;
  deliverable: string;
  href: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  outcomes: string[];
  href: string;
  icon: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  clientExpectation: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  subtitle: string;
  heroDescription: string;
  problem: string;
  audience: string[];
  warningSigns: string[];
  included: string[];
  process: { title: string; description: string }[];
  deliverables: string[];
  frameworks: string[];
  platforms: string[];
  faqs: FAQ[];
}

export interface FormData {
  fullName: string;
  businessEmail: string;
  company: string;
  phone?: string;
  serviceNeeded: string;
  message: string;
  preferredDate?: string;
  consent: boolean;
  website?: string;
}
