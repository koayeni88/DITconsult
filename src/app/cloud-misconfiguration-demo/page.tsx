import { Metadata } from 'next';
import CloudMisconfigDemo from '@/components/tools/CloudMisconfigDemo';

export const metadata: Metadata = {
  title: 'Illustrative Cloud Misconfiguration Demo',
  alternates: { canonical: '/cloud-misconfiguration-demo' },
  description: 'An illustrative set of common cloud misconfigurations across AWS, Azure, Google Cloud, Terraform, and Kubernetes. Sample findings are not a scan of your environment.',
  keywords: ['cloud misconfiguration', 'AWS security', 'Azure security', 'GCP security', 'Kubernetes security', 'Terraform security'],
};

export default function CloudMisconfigPage() {
  return <CloudMisconfigDemo />;
}
