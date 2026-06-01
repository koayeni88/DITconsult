import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'support@ditconsult.com';

// ── Rate limiting (in-memory, per IP) ────────────────────────────────────────
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max 5 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

// ── Input length limits ───────────────────────────────────────────────────────
const LIMITS: Record<string, number> = {
  fullName: 120,
  businessEmail: 254,
  company: 200,
  phone: 30,
  serviceNeeded: 100,
  preferredDate: 30,
  message: 4000,
};

// ── HTML escaping — prevent injected HTML in email client ─────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export async function POST(req: NextRequest) {
  // ── Rate limit by IP ────────────────────────────────────────────────────────
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // ── Parse body ──────────────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { fullName, businessEmail, company, phone, serviceNeeded, message, preferredDate } =
    body as Record<string, unknown>;

  // ── Type-check: all values must be strings if present ──────────────────────
  for (const [key, val] of Object.entries({ fullName, businessEmail, company, phone, serviceNeeded, message, preferredDate })) {
    if (val !== undefined && typeof val !== 'string') {
      return NextResponse.json({ error: `Invalid value for ${key}.` }, { status: 400 });
    }
  }

  // ── Required fields ─────────────────────────────────────────────────────────
  if (!fullName || !businessEmail || !company || !serviceNeeded || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // ── Length limits ────────────────────────────────────────────────────────────
  const fields: Record<string, string> = {
    fullName: fullName as string,
    businessEmail: businessEmail as string,
    company: company as string,
    phone: (phone as string) || '',
    serviceNeeded: serviceNeeded as string,
    preferredDate: (preferredDate as string) || '',
    message: message as string,
  };

  for (const [key, val] of Object.entries(fields)) {
    if (val && val.length > (LIMITS[key] ?? 500)) {
      return NextResponse.json(
        { error: `${key} exceeds maximum allowed length.` },
        { status: 400 }
      );
    }
  }

  // ── Email format ─────────────────────────────────────────────────────────────
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fields.businessEmail)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  // ── Build escaped HTML email ─────────────────────────────────────────────────
  const e = (s: string) => escapeHtml(s);
  const html = `
    <h2>New consultation request from ${e(fields.fullName)}</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${e(fields.fullName)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${e(fields.businessEmail)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${e(fields.company)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${e(fields.phone) || '—'}</td></tr>
      <tr><td><strong>Service</strong></td><td>${e(fields.serviceNeeded)}</td></tr>
      ${fields.preferredDate ? `<tr><td><strong>Preferred date</strong></td><td>${e(fields.preferredDate)}</td></tr>` : ''}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${e(fields.message)}</p>
  `;

  const { error } = await resend.emails.send({
    from: 'DITconsult Contact Form <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: fields.businessEmail,
    subject: `Security consultation — ${e(fields.company)}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

