import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Certificates() {
  return (
    <section id="certificates" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading path="certificates" title="Certifications" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <a
                href={cert.url ?? "#"}
                target={cert.url ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col gap-3 rounded-2xl border hairline bg-paper-surface p-5 transition-colors hover:border-accent dark:bg-ink-surface"
              >
                <div className="flex items-center justify-between">
                  <Award className="h-5 w-5 text-warm" />
                  {cert.url && (
                    <ExternalLink className="h-3.5 w-3.5 text-ink/30 transition-colors group-hover:text-accent dark:text-paper/30" />
                  )}
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug">{cert.name}</h3>
                <p className="mt-auto font-mono text-xs text-ink/50 dark:text-paper/50">
                  {cert.issuer} · {cert.date}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
