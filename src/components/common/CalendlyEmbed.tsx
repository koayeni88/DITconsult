'use client';

import { useEffect } from 'react';

export default function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url={`${url}?hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=6366f1`}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
