import { Metadata } from 'next';
import CloudMisconfigDemo from '@/components/tools/CloudMisconfigDemo';

export const metadata: Metadata = {
  title: 'Cloud Misconfiguration Demo | DITconsult',
  description: 'See real-world cloud misconfigurations across AWS, Azure, GCP, Terraform, and Kubernetes with expert remediation guidance.',
  keywords: ['cloud misconfiguration', 'AWS security', 'Azure security', 'GCP security', 'Kubernetes security', 'Terraform security'],
};

export default function CloudMisconfigPage() {
  return <CloudMisconfigDemo />;
}
