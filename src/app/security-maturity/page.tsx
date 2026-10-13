import { Metadata } from 'next';
import SecurityMaturityPage from '@/components/tools/SecurityMaturityModel';

export const metadata: Metadata = {
  title: 'Illustrative Security Maturity Model',
  alternates: { canonical: '/security-maturity' },
  description: 'An illustrative maturity model from Reactive to Resilient. The quiz result is a discussion aid, not a formal assessment or certification.',
};

export default function MaturityPage() {
  return <SecurityMaturityPage />;
}
