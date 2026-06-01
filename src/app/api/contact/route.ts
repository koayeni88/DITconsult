import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'support@ditconsult.com';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { fullName, businessEmail, company, phone, serviceNeeded, message, preferredDate } =
    body as Record<string, string>;

  if (!fullName || !businessEmail || !company || !serviceNeeded || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(businessEmail)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const html = `
    <h2>New consultation request from ${fullName}</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
      <tr><td><strong>Email</strong></td><td>${businessEmail}</td></tr>
      <tr><td><strong>Company</strong></td><td>${company}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
      <tr><td><strong>Service</strong></td><td>${serviceNeeded}</td></tr>
      ${preferredDate ? `<tr><td><strong>Preferred date</strong></td><td>${preferredDate}</td></tr>` : ''}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${message}</p>
  `;

  const { error } = await resend.emails.send({
    from: 'DITconsult Contact Form <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: businessEmail,
    subject: `Security consultation — ${company}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
