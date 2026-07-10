import { skills } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="border-t hairline bg-paper-surface py-24 dark:bg-ink-surface sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading path="skills" title="What I work with" />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="rounded-2xl border hairline bg-paper p-6 dark:bg-ink">
                <span className="font-mono text-xs text-accent">{`// ${group.label}`}</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border hairline px-3.5 py-1.5 font-mono text-xs text-ink/80 transition-colors hover:border-accent hover:text-accent dark:text-paper/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
