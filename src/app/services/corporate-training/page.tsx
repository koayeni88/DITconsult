import { Metadata } from 'next';
import DivisionPageTemplate from '@/components/services/DivisionPageTemplate';
import { getDivision } from '@/lib/divisions';

const division = getDivision('corporate-training')!;

export const metadata: Metadata = {
  title: division.metaTitle,
  description: division.metaDescription,
  alternates: { canonical: division.href },
};

export default function CorporateTrainingDivisionPage() {
  return <DivisionPageTemplate division={division} />;
}
