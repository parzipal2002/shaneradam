import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t hairline bg-paper-surface py-24 dark:bg-ink-surface sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading path="testimonials" title="What people say" />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border hairline bg-paper p-6 font-mono text-[13px] leading-relaxed dark:bg-ink">
                <span className="text-ink/30 dark:text-paper/30">{"/**"}</span>
                <blockquote className="my-2 flex-1 text-ink/80 dark:text-paper/80">
                  {t.quote.split("\n").map((line, j) => (
                    <p key={j} className="before:content-['*_'] before:text-ink/30 dark:before:text-paper/30">
                      {line}
                    </p>
                  ))}
                </blockquote>
                <span className="text-ink/30 dark:text-paper/30">{"*/"}</span>
                <figcaption className="mt-3 border-t hairline pt-3">
                  <span className="text-accent">{t.name}</span>
                  <span className="text-ink/50 dark:text-paper/50"> — {t.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
