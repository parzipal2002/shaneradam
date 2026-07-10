import { about, site } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading path="about" title="A little about me" />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.1} className="space-y-5">
            {about.story.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
                {p}
              </p>
            ))}
            <p className="text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
              {about.goals}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border hairline bg-paper-surface dark:bg-ink-surface">
              <div className="flex items-center gap-1.5 border-b hairline px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#EB5757]/70" />
                <span className="h-2 w-2 rounded-full bg-[#F2C94C]/70" />
                <span className="h-2 w-2 rounded-full bg-[#2ECC71]/70" />
                <span className="ml-2 font-mono text-[10px] text-ink/40 dark:text-paper/40">profile.json</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-6">
                <p className="text-ink/50 dark:text-paper/50">{"{"}</p>
                <p className="pl-4">
                  <span className="text-accent">&quot;location&quot;</span>:{" "}
                  <span className="text-warm">&quot;{site.location}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-accent">&quot;education&quot;</span>: [
                </p>
                {about.education.map((ed, i) => (
                  <p key={i} className="pl-8 text-ink/70 dark:text-paper/70">
                    {"{ "}
                    <span className="text-warm">&quot;{ed.degree}&quot;</span>,{" "}
                    <span className="text-ink/50 dark:text-paper/50">{ed.school} · {ed.period}</span>
                    {" }"}
                    {i < about.education.length - 1 ? "," : ""}
                  </p>
                ))}
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-accent">&quot;interests&quot;</span>: [
                </p>
                <p className="pl-8 text-warm">
                  {about.interests.map((it) => `"${it}"`).join(", ")}
                </p>
                <p className="pl-4">]</p>
                <p className="text-ink/50 dark:text-paper/50">{"}"}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
