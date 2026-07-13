"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { site } from "@/lib/data";

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, 0);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(site.roles);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Ambient background grid, subtle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line-light) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line-light) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div className="dark:hidden absolute inset-0 pointer-events-none" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs text-ink/60 dark:text-paper/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            {site.availability}
          </p>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {site.name}.
            <br />
            <span className="text-accent">{typed}</span>
            <span className="animate-blink text-accent">_</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 font-mono text-sm text-paper transition-transform hover:-translate-y-0.5 dark:bg-accent dark:text-white"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border hairline px-5 py-3 font-mono text-sm transition-colors hover:bg-paper-surface-2 dark:hover:bg-ink-surface-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-ink/50 dark:text-paper/50">
            <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-accent">
              <FaFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-float">
          {/* Decorative code card behind photo */}
          <div className="absolute -right-4 -top-4 w-full rounded-2xl border hairline bg-ink-surface p-4 font-mono text-[11px] leading-5 text-paper/40 shadow-xl dark:bg-ink-surface -rotate-3">
            <span className="text-accent-2">const</span> dev = {"{"}
            <br />
            &nbsp;&nbsp;name: <span className="text-warm">&quot;{site.name}&quot;</span>,
            <br />
            &nbsp;&nbsp;stack: [<span className="text-warm">&quot;TS&quot;</span>, <span className="text-warm">&quot;React&quot;</span>],
            <br />
            &nbsp;&nbsp;shipping: <span className="text-ok">true</span>,
            <br />
            {"}"};
          </div>

          <div className="relative overflow-hidden rounded-2xl border hairline bg-paper-surface shadow-2xl dark:bg-ink-surface">
            <div className="flex items-center gap-1.5 border-b hairline px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#EB5757]/70" />
              <span className="h-2 w-2 rounded-full bg-[#F2C94C]/70" />
              <span className="h-2 w-2 rounded-full bg-[#2ECC71]/70" />
              <span className="ml-2 font-mono text-[10px] text-ink/40 dark:text-paper/40">profile</span>
            </div>
            <div className="aspect-[4/5] w-full">
              {site.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={site.photo} alt={site.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-accent-2">
                  <span className="font-display text-6xl font-bold text-white/90">
                    {site.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
