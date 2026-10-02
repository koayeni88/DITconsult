/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

// Next's hydration bootstrap and the next-themes script are inline, so
// script-src still needs 'unsafe-inline' until a nonce-issuing middleware is added.
// 'unsafe-eval' is only required by the dev-mode React refresh runtime.
const scriptSrc = ["'self'", "'unsafe-inline'", isDev ? "'unsafe-eval'" : null]
  .filter(Boolean)
  .join(' ');

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
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://ipapi.co",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
];

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/.well-known/security.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
    ];
  },
  async redirects() {
    return [
      // Consolidate on the apex domain so link equity isn't split across hosts.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ditconsult.com' }],
        destination: 'https://ditconsult.com/:path*',
        permanent: true,
      },
      // Retired case-study URLs
      {
        source: '/case-studies/:slug*',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ditconsult.com',
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
