import { Metadata } from 'next';
import SecurityMaturityPage from '@/components/tools/SecurityMaturityModel';

export const metadata: Metadata = {
  title: 'Security Maturity Model | DITconsult',
  description: 'Identify your organization\'s security maturity level — Reactive, Developing, Managed, Optimized, or Resilient — and get a tailored improvement roadmap.',
};

export default function MaturityPage() {
  return <SecurityMaturityPage />;
}
