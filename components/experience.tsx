import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const typeColor: Record<string, string> = {
  Job: "text-accent",
  Internship: "text-warm",
  Freelance: "text-ok",
  Volunteer: "text-accent-2",
};

export function Experience() {
  return (
    <section id="experience" className="border-t hairline bg-paper-surface py-24 dark:bg-ink-surface sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading path="experience" title="Where I've worked" />
        <p className="mt-3 font-mono text-xs text-ink/40 dark:text-paper/40"></p>

        <div className="relative mt-12 space-y-10 border-l hairline pl-8">
          {experience.map((item, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper-surface dark:bg-ink-surface" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold">
                  {item.role} <span className="text-ink/40 dark:text-paper/40">@ {item.org}</span>
                </h3>
                <span className="font-mono text-xs text-ink/50 dark:text-paper/50">{item.period}</span>
              </div>
              <span className={`mt-1 inline-block font-mono text-[11px] ${typeColor[item.type]}`}>
                {item.type}
              </span>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                    <span className="text-accent">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
