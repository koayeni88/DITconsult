import { Metadata } from 'next';
import ExecutiveDashboard from '@/components/dashboard/ExecutiveDashboard';

export const metadata: Metadata = {
  title: 'Executive Cyber Dashboard | DITconsult',
  description: 'Preview the kind of executive cybersecurity dashboard DITconsult delivers — risk metrics, compliance gaps, remediation progress, and cloud exposure.',
};

export default function DashboardPage() {
  return <ExecutiveDashboard />;
}
