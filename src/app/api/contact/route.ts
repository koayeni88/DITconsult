import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { COMPANY_EMAIL } from '@/lib/constants';

const DEFAULT_FROM = 'DITconsult Website <website@ditconsult.com>';
const MAIL_KEYS = ['RESEND_API_KEY', 'CONTACT_EMAIL', 'FROM_EMAIL'] as const;

function cleanEnvValue(value: string): string {
  return value.replace(/^\uFEFF/, '').replace(/\r/g, '').trim().replace(/^['"]|['"]$/g, '').trim();
}

/** Prefer .env / .env.local on disk so a stale Next/PM2 process.env cannot win. */
function fileEnv(): Record<string, string> {
  const found: Record<string, string> = {};
  for (const filename of ['.env', '.env.local']) {
    const path = join(process.cwd(), filename);
    if (!existsSync(path)) continue;
    for (const line of readFileSync(path, 'utf8').split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
      const index = trimmed.indexOf('=');
      const key = trimmed.slice(0, index).trim();
      if ((MAIL_KEYS as readonly string[]).includes(key)) {
        found[key] = cleanEnvValue(trimmed.slice(index + 1));
      }
    }
  }
  return found;
}

function mailEnv() {
  const files = fileEnv();
  const apiKey = files.RESEND_API_KEY || cleanEnvValue(process.env['RESEND_API_KEY'] ?? '');
  const to = (files.CONTACT_EMAIL || cleanEnvValue(process.env['CONTACT_EMAIL'] ?? '') || COMPANY_EMAIL).toLowerCase();
  const rawFrom = files.FROM_EMAIL || cleanEnvValue(process.env['FROM_EMAIL'] ?? '');
  const from = rawFrom.includes('@') ? rawFrom : DEFAULT_FROM;
  return { apiKey, to, from };
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
/** Emails actually dispatched per IP per hour */
const SEND_LIMIT_MAX = 5;
/** Total requests per IP per hour, so rejected attempts can't be hammered either */
const REQUEST_LIMIT_MAX = 30;
const MAX_BODY_BYTES = 32_768;

type Bucket = { requests: number; sends: number; resetAt: number };
const rateLimitMap = new Map<string, Bucket>();

function getBucket(ip: string): Bucket {
  const now = Date.now();
  const existing = rateLimitMap.get(ip);
  if (!existing || now > existing.resetAt) {
    const fresh: Bucket = { requests: 0, sends: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, fresh);
    return fresh;
  }
  return existing;
}

/**
 * Counts the request and reports whether the caller is over either limit.
 * Validation failures only consume the looser request budget, so a visitor who
 * mistypes a few times is not locked out of sending for an hour.
 */
function checkRateLimit(ip: string): { requestsExceeded: boolean; sendsExceeded: boolean; bucket: Bucket } {
  const bucket = getBucket(ip);
  bucket.requests += 1;
  return {
    requestsExceeded: bucket.requests > REQUEST_LIMIT_MAX,
    sendsExceeded: bucket.sends >= SEND_LIMIT_MAX,
    bucket,
  };
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
  trainingTopic: 160,
  otherTrainingTopic: 2000,
  participantCount: 40,
  deliveryFormat: 40,
  timeframe: 40,
  learningGoals: 2000,
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

function rowHtml(label: string, value: string, multiline = false): string {
  if (!value) return '';
  const style = multiline ? ' style="white-space:pre-wrap"' : '';
  return `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#555555;"><strong>${escapeHtml(label)}</strong></td><td style="padding:6px 0;color:#111111;"${style}>${escapeHtml(value)}</td></tr>`;
}

const GENERIC_SEND_ERROR =
  `We couldn't send your message right now. Please try again shortly or email ${COMPANY_EMAIL} directly.`;

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const rate = checkRateLimit(ip);
  if (rate.requestsExceeded || rate.sendsExceeded) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Honeypot — bots fill hidden fields; pretend success so they stop.
  if (typeof raw.website === 'string' && raw.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const { apiKey, to: TO_EMAIL, from: FROM_EMAIL } = mailEnv();

  if (!apiKey) {
    console.error('[Contact API] RESEND_API_KEY is not configured');
    return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const fullName = normalizeString(raw.fullName);
  const businessEmail = normalizeString(raw.businessEmail).toLowerCase();
  const company = normalizeString(raw.company);
  const phone = normalizeString(raw.phone);
  const serviceNeeded = normalizeString(raw.serviceNeeded);
  const preferredDate = normalizeString(raw.preferredDate);
  const message = typeof raw.message === 'string' ? raw.message.trim() : '';
  const consent = raw.consent === true;
  const trainingTopic = normalizeString(raw.trainingTopic);
  const otherTrainingTopic = typeof raw.otherTrainingTopic === 'string' ? raw.otherTrainingTopic.trim() : '';
  const participantCount = normalizeString(raw.participantCount);
  const deliveryFormat = normalizeString(raw.deliveryFormat);
  const timeframe = normalizeString(raw.timeframe);
  const learningGoals = typeof raw.learningGoals === 'string' ? raw.learningGoals.trim() : '';

  if (!fullName || !businessEmail || !company || !serviceNeeded || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: 'Privacy policy consent is required.' }, { status: 400 });
  }

  const fields = {
    fullName,
    businessEmail,
    company,
    phone,
    serviceNeeded,
    preferredDate,
    message,
    trainingTopic,
    otherTrainingTopic,
    participantCount,
    deliveryFormat,
    timeframe,
    learningGoals,
  };

  for (const [key, val] of Object.entries(fields)) {
    if (val && val.length > (LIMITS[key] ?? 500)) {
      return NextResponse.json({ error: 'One or more fields exceed the maximum length.' }, { status: 400 });
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(businessEmail)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const isTraining =
    /corporate cybersecurity|corporate training|it training|educational training/i.test(serviceNeeded) ||
    Boolean(trainingTopic || otherTrainingTopic || participantCount || deliveryFormat || timeframe || learningGoals);

  const inquiryId = `dit-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  // Bracketed system-style subjects are less likely to look like spoofed personal mail
  // when Reply-To is a different domain than From (a common contact-form pattern).
  const subject = `[DITconsult Contact Form] Inquiry from ${fullName}`;

  const detailRows = [
    rowHtml('Name', fullName),
    rowHtml('Email', businessEmail),
    rowHtml('Phone', phone),
    rowHtml('Company', company),
    rowHtml('Service', serviceNeeded),
    preferredDate ? rowHtml('Preferred consultation date', preferredDate) : '',
    isTraining ? rowHtml('Training topic', trainingTopic) : '',
    isTraining ? rowHtml('Other topic details', otherTrainingTopic, true) : '',
    isTraining ? rowHtml('Approx. participants', participantCount) : '',
    isTraining ? rowHtml('Preferred format', deliveryFormat) : '',
    isTraining ? rowHtml('Preferred timeframe', timeframe) : '',
    isTraining ? rowHtml('Learning goals', learningGoals, true) : '',
  ].join('');

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#ffffff;color:#111111;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;">
    <div style="max-width:640px;margin:0 auto;padding:24px;">
      <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.02em;color:#666666;text-transform:uppercase;">
        Automated notification · ditconsult.com contact form
      </p>
      <h1 style="margin:0 0 12px;font-size:18px;font-weight:bold;color:#111111;">
        New website inquiry
      </h1>
      <p style="margin:0 0 16px;color:#333333;">
        This message was generated automatically by the DITconsult website contact form.
        It is not a direct email from the visitor. The visitor&apos;s address is set as Reply-To
        so you can respond with one click.
      </p>
      <p style="margin:0 0 20px;padding:12px 14px;background:#f7f7f7;border:1px solid #e5e5e5;color:#222222;">
        <strong>From address:</strong> website@ditconsult.com<br />
        <strong>Reply goes to visitor:</strong> ${escapeHtml(businessEmail)}
      </p>
      <h2 style="margin:0 0 8px;font-size:15px;font-weight:bold;color:#111111;">Visitor details</h2>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;">
        ${detailRows}
      </table>
      <h2 style="margin:24px 0 8px;font-size:15px;font-weight:bold;color:#111111;">Message</h2>
      <p style="margin:0;white-space:pre-wrap;color:#111111;">${escapeHtml(message)}</p>
      <hr style="border:none;border-top:1px solid #dddddd;margin:28px 0;" />
      <p style="margin:0;font-size:12px;line-height:1.6;color:#666666;">
        DITconsult · https://ditconsult.com<br />
        Support mailbox: ${escapeHtml(COMPANY_EMAIL)}<br />
        Inquiry ID: ${escapeHtml(inquiryId)}
      </p>
    </div>
  </body>
</html>`;

  const textParts = [
    'AUTOMATED NOTIFICATION — ditconsult.com contact form',
    '',
    'This message was generated automatically by the DITconsult website contact form.',
    'It is not a direct email from the visitor.',
    "The visitor's address is set as Reply-To so you can respond with one click.",
    '',
    'From address: website@ditconsult.com',
    `Reply goes to visitor: ${businessEmail}`,
    '',
    'Visitor details',
    `Name: ${fullName}`,
    `Email: ${businessEmail}`,
    phone ? `Phone: ${phone}` : '',
    company ? `Company: ${company}` : '',
    serviceNeeded ? `Service: ${serviceNeeded}` : '',
    preferredDate ? `Preferred consultation date: ${preferredDate}` : '',
    isTraining && trainingTopic ? `Training topic: ${trainingTopic}` : '',
    isTraining && otherTrainingTopic ? `Other topic details:\n${otherTrainingTopic}` : '',
    isTraining && participantCount ? `Approx. participants: ${participantCount}` : '',
    isTraining && deliveryFormat ? `Preferred format: ${deliveryFormat}` : '',
    isTraining && timeframe ? `Preferred timeframe: ${timeframe}` : '',
    isTraining && learningGoals ? `Learning goals:\n${learningGoals}` : '',
    '',
    'Message:',
    message,
    '',
    '—',
    'DITconsult · https://ditconsult.com',
    `Support mailbox: ${COMPANY_EMAIL}`,
    `Inquiry ID: ${inquiryId}`,
  ].filter((line, index, arr) => !(line === '' && arr[index - 1] === ''));

  const text = textParts.join('\n');

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: businessEmail,
      subject,
      html,
      text,
      headers: {
        'X-Entity-Ref-ID': inquiryId,
        'Auto-Submitted': 'auto-generated',
        'X-Auto-Response-Suppress': 'All',
        'X-Mailer': 'DITconsult Contact Form',
      },
      tags: [
        { name: 'category', value: 'contact_form' },
        { name: 'source', value: 'ditconsult_website' },
      ],
    });

    if (error) {
      const resendMessage = error.message || 'no message';
      console.error(
        '[Contact API] Resend rejected send:',
        error.name || 'unknown',
        resendMessage,
        'from_has_at=' + String(FROM_EMAIL.includes('@')),
        'to=' + TO_EMAIL,
        'key_len=' + String(apiKey.length)
      );
      const testingOnly = /only send testing emails|domain is not verified/i.test(resendMessage);
      return NextResponse.json(
        {
          error: testingOnly
            ? 'Email delivery is limited until ditconsult.com is verified in Resend. Add the SPF/DKIM records from the Resend Domains page, then try again.'
            : GENERIC_SEND_ERROR,
        },
        { status: 500 }
      );
    }

    rate.bucket.sends += 1;
  } catch (err) {
    const messageText = err instanceof Error ? err.message : 'unknown error';
    console.error('[Contact API] Unexpected send failure:', messageText);
    return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
