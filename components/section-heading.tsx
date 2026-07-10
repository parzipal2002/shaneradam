import { Reveal } from "@/components/reveal";

export function SectionHeading({
  path,
  title,
  align = "left",
}: {
  path: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-center gap-2 font-mono text-xs text-accent ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-warm">~/</span>
        <span>{path}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
