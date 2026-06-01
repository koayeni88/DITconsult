import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founder | David Idowu – Principal Consultant',
  description: 'Meet David Idowu, founder and principal consultant at DITconsult. Cloud architect, threat hunter, and trusted cybersecurity advisor with CISSP, CCSP, and AWS Security certifications.',
  keywords: ['David Idowu', 'DITconsult founder', 'cybersecurity consultant', 'CISSP', 'CCSP', 'cloud security expert'],
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
