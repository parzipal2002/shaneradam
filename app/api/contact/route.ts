import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, message, company } = body;

    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
  from: "Portfolio Contact <onboarding@resend.dev>",
  to: "shaneradam3@gmail.com",
  subject: `New message from ${name}`,
  replyTo: email,
  html: `
    <h2>New Portfolio Contact</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});

console.log("Resend data:", data);
console.log("Resend error:", error);

if (error) {
  return NextResponse.json(
    {
      ok: false,
      error: error.message,
    },
    {
      status: 500,
    }
  );
}

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send email.",
      },
      {
        status: 500,
      }
    );
  }
}