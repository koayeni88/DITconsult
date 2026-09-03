import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { COMPANY_EMAIL, COMPANY_NAME } from '@/lib/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

/** All contact form submissions go here */
const TO_EMAIL = (process.env.CONTACT_EMAIL?.trim() || COMPANY_EMAIL).toLowerCase();
const FROM_EMAIL =
  process.env.FROM_EMAIL?.trim() ||
  `${COMPANY_NAME} Contact Form <onboarding@resend.dev>`;

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
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

const LIMITS: Record<string, number> = {
  fullName: 120,
  businessEmail: 254,
  company: 200,
  phone: 30,
  serviceNeeded: 100,
  preferredDate: 30,
  message: 4000,
  website: 0,
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function normalizeString(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ');
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Honeypot — bots fill hidden fields
  if (typeof raw.website === 'string' && raw.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('[Contact API] RESEND_API_KEY is not configured');
    return NextResponse.json({ error: 'Unable to send message at this time.' }, { status: 503 });
  }

  const fullName = normalizeString(raw.fullName);
  const businessEmail = normalizeString(raw.businessEmail).toLowerCase();
  const company = normalizeString(raw.company);
  const phone = normalizeString(raw.phone);
  const serviceNeeded = normalizeString(raw.serviceNeeded);
  const preferredDate = normalizeString(raw.preferredDate);
  const message = typeof raw.message === 'string' ? raw.message.trim() : '';
  const consent = raw.consent === true;

  if (!fullName || !businessEmail || !company || !serviceNeeded || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: 'Privacy policy consent is required.' }, { status: 400 });
  }

  const fields = { fullName, businessEmail, company, phone, serviceNeeded, preferredDate, message };

  for (const [key, val] of Object.entries(fields)) {
    if (val && val.length > (LIMITS[key] ?? 500)) {
      return NextResponse.json({ error: 'One or more fields exceed the maximum length.' }, { status: 400 });
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(businessEmail)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const e = escapeHtml;
  const html = `
    <h2>New consultation request</h2>
    <p>Submitted via the contact form on the ${e(COMPANY_NAME)} website.</p>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${e(fullName)}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${e(businessEmail)}">${e(businessEmail)}</a></td></tr>
      <tr><td><strong>Company</strong></td><td>${e(company)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${e(phone) || '—'}</td></tr>
      <tr><td><strong>Service</strong></td><td>${e(serviceNeeded)}</td></tr>
      ${preferredDate ? `<tr><td><strong>Preferred date</strong></td><td>${e(preferredDate)}</td></tr>` : ''}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${e(message)}</p>
  `;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: businessEmail,
    subject: `Security consultation — ${company}`,
    html,
  });

  if (error) {
    console.error('[Contact API] Resend error');
    return NextResponse.json(
      { error: `Unable to send message. Please try again or email us directly at ${COMPANY_EMAIL}.` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
