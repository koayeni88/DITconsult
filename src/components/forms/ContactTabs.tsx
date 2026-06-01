'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import CalendlyEmbed from '@/components/common/CalendlyEmbed';
import { cn } from '@/lib/utils';

// Replace with your actual Calendly link
const CALENDLY_URL = 'https://calendly.com/ditconsult/consultation';

const tabs = [
  { id: 'form', label: '✉️  Send a Message' },
  { id: 'schedule', label: '📅  Schedule a Call' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function ContactTabs() {
  const [active, setActive] = useState<TabId>('form');

  return (
    <div className="w-full">
      {/* Tab switcher */}
      <div className="flex gap-2 mb-4 p-1 glass-effect rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
              active === tab.id
                ? 'bg-primary-500 text-white shadow-neon'
                : 'text-white/60 hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === 'form' && <ContactForm />}
      {active === 'schedule' && (
        <div className="glass-effect rounded-2xl overflow-hidden">
          <CalendlyEmbed url={CALENDLY_URL} />
        </div>
      )}
    </div>
  );
}
