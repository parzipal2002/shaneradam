import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
// This route currently just validates and logs the message.
// To actually send yourself an email, pick one:
//
// Option A — Resend (recommended, generous free tier):
//   npm install resend
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "portfolio@yourdomain.com",
//     to: "you@yourdomain.com",
//     subject: `New message from ${name}`,
//     text: message,
//   });
//
// Option B — a form backend like Formspree/Web3Forms: skip this
//   route entirely and point the <form action> at their endpoint.
//
// Remember to add any API keys to .env.local (never commit them).
// ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, company } = body as {
      name?: string;
      email?: string;
      message?: string;
      company?: string; // honeypot field — real users leave this blank
    };

    if (company) {
      // Likely a bot. Pretend it worked so it doesn't retry.
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
    }

    // TODO: replace with a real email send (see comment above).
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }
}
