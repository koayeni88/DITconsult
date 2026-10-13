import { Metadata } from 'next';
import ExecutiveDashboard from '@/components/dashboard/ExecutiveDashboard';

export const metadata: Metadata = {
  title: 'Illustrative Executive Cyber Dashboard',
  alternates: { canonical: '/executive-dashboard' },
  description: 'A sample executive cybersecurity dashboard using illustrative data. It is a preview of reporting format, not a live assessment of your environment.',
};

export default function DashboardPage() {
  return <ExecutiveDashboard />;
}
