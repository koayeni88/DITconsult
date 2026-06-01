/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'DENY' },
  // Stop MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Referrer policy — don't leak full URL to third parties
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable browser features not needed by a consulting site
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Force HTTPS (1 year, include subdomains)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js inline scripts + Calendly widget script
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com",
      // Styles: self + inline (Tailwind/framer-motion inject inline styles)
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs (favicon) + any HTTPS (for potential future images)
      "img-src 'self' data: https:",
      // API calls: self + Resend (handled server-side, not from browser) + Calendly embed + ipapi geolocation
      "connect-src 'self' https://ipapi.co https://calendly.com",
      // Calendly iframe
      "frame-src https://calendly.com",
      // No plugins
      "object-src 'none'",
      // Upgrade insecure requests
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      // Restrict to HTTPS only — no wildcard protocol
      {
        protocol: 'https',
        hostname: '**.ditconsult.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.calendly.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 425, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

module.exports = nextConfig;
