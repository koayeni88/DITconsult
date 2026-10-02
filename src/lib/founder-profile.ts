/**
 * Verified founder credentials and education, shared by the founder page UI and
 * its Person structured data so the two cannot drift apart.
 */

export interface Credential {
  name: string;
  org: string;
}

export interface Degree {
  degree: string;
  focus: string;
  level: string;
}

export const CREDENTIALS: Credential[] = [
  { name: 'Certified Information Security Manager (CISM)', org: 'ISACA' },
  { name: 'Certified Ethical Hacker (CEH)', org: 'EC-Council' },
  { name: 'Criminal Justice Information Services (CJIS) Certification', org: 'FBI' },
  { name: 'Microsoft Certified: Security Operations Analyst Associate', org: 'Microsoft' },
  { name: 'Microsoft Certified: Azure Administrator Associate', org: 'Microsoft' },
  { name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals', org: 'Microsoft' },
  { name: 'Microsoft Certified: Azure Fundamentals', org: 'Microsoft' },
  { name: 'AWS Certified Solutions Architect – Associate', org: 'Amazon Web Services' },
];

/** Listed in order of study. Graduation years are intentionally omitted. */
export const EDUCATION: Degree[] = [
  {
    degree: 'B.S., Computer Science',
    focus: 'Computing foundations · software · systems',
    level: 'Undergraduate',
  },
  {
    degree: 'M.S., Information Technology',
    focus: 'Systems · infrastructure · enterprise IT',
    level: 'Graduate',
  },
  {
    degree: 'M.S., Information Assurance and Cybersecurity',
    focus: 'Security strategy · risk · enterprise defense',
    level: 'Graduate',
  },
];
