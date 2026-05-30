import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';

export const metadata: Metadata = {
  title: 'Insights & Blog | DITconsult',
  description: 'Cybersecurity insights, best practices, and industry updates from DITconsult.',
  keywords: ['blog', 'insights', 'cybersecurity news', 'security updates', 'best practices'],
};

export default function BlogPage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom text-center">
          <SectionHeading
            title="Insights & Resources"
            subtitle="Coming Soon"
            description="Check back soon for cybersecurity insights, best practices, and industry updates from our team of experts."
            centered
            size="lg"
          />
          <Button
            asLink
            href="/contact"
            variant="primary"
            size="lg"
            className="mt-8"
          >
            Subscribe for Updates
          </Button>
        </div>
      </section>
    </>
  );
}
