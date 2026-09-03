'use client';

import { useState } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import { HOMEPAGE_FAQS } from '@/lib/content';
import { cn } from '@/lib/utils';
import CyberAtmosphere from './CyberAtmosphere';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="cyber-section section-padding" aria-labelledby="faq-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom max-w-3xl relative z-10">
        <SectionHeading
          id="faq-heading"
          title="Frequently asked questions"
          subtitle="Security FAQ"
          centered
          size="lg"
        />
        <dl className="mt-12 space-y-3">
          {HOMEPAGE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="cyber-panel !rounded-xl overflow-hidden">
                <dt>
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left text-white font-semibold text-sm hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-inset"
                  >
                    {faq.question}
                    <span className={cn('text-primary-400 transition-transform shrink-0', isOpen && 'rotate-45')} aria-hidden="true">
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-white/65 text-sm leading-relaxed"
                >
                  {faq.answer}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
