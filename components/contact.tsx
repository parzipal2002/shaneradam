"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { site } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading path="contact" title="Let's build something" align="center" />
        <p className="mx-auto mt-4 max-w-xl text-center text-ink/70 dark:text-paper/70">
          Have a role, project, or just want to talk shop? My inbox is open.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal delay={0.1} className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-xl border hairline bg-paper-surface p-4 transition-colors hover:border-accent dark:bg-ink-surface"
            >
              <Mail className="h-4 w-4 text-accent" />
              <span className="font-mono text-sm">{site.email}</span>
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-xl border hairline bg-paper-surface p-4 transition-colors hover:border-accent dark:bg-ink-surface"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span className="font-mono text-sm">{site.phone}</span>
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border hairline bg-paper-surface p-4 transition-colors hover:border-accent dark:bg-ink-surface"
            >
              <FaLinkedin className="h-4 w-4 text-accent" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <div className="flex gap-4 pt-2">
              <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink/50 transition-colors hover:text-accent dark:text-paper/50">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-ink/50 transition-colors hover:text-accent dark:text-paper/50">
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border hairline bg-paper-surface dark:bg-ink-surface">
              <div className="flex items-center gap-1.5 border-b hairline px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#EB5757]/70" />
                <span className="h-2 w-2 rounded-full bg-[#F2C94C]/70" />
                <span className="h-2 w-2 rounded-full bg-[#2ECC71]/70" />
                <span className="ml-2 font-mono text-[10px] text-ink/40 dark:text-paper/40">send-message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 p-6">
                {/* Honeypot — hidden from real users, catches simple bots */}
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

                <div>
                  <label htmlFor="name" className="font-mono text-xs text-ink/50 dark:text-paper/50">
                    name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Ada Lovelace"
                    className="mt-1.5 w-full rounded-lg border hairline bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-accent dark:bg-ink"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-ink/50 dark:text-paper/50">
                    email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="ada@example.com"
                    className="mt-1.5 w-full rounded-lg border hairline bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-accent dark:bg-ink"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-xs text-ink/50 dark:text-paper/50">
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Let's talk about..."
                    className="mt-1.5 w-full resize-none rounded-lg border hairline bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-accent dark:bg-ink"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 font-mono text-sm text-paper transition-opacity hover:opacity-90 disabled:opacity-60 dark:bg-accent dark:text-white"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                {status === "sent" && (
                  <p className="font-mono text-xs text-ok">✓ Message sent — I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && <p className="font-mono text-xs text-[#EB5757]">✗ {errorMsg}</p>}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
