"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectFilters, projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter]
  );

  const nextImage = (slug: string, total: number) => {
  if (total === 0) return;

  setImageIndexes((prev) => ({
    ...prev,
    [slug]: ((prev[slug] ?? 0) + 1) % total,
  }));
};


const prevImage = (slug: string, total: number) => {
  if (total === 0) return;

  setImageIndexes((prev) => ({
    ...prev,
    [slug]: ((prev[slug] ?? 0) - 1 + total) % total,
  }));
};

  return (
    <section id="projects" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading path="projects" title="Selected projects" />

          <div className="flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border hairline px-3.5 py-1.5 font-mono text-xs transition-colors ${
                  filter === f
                    ? "border-accent bg-accent text-white"
                    : "text-ink/70 hover:border-accent hover:text-accent dark:text-paper/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border hairline bg-paper-surface transition-shadow hover:shadow-xl dark:bg-ink-surface">
                {/* Browser-window mockup standing in for a real screenshot */}
                <div className="border-b hairline">
                  <div className="flex items-center gap-1.5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#EB5757]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#F2C94C]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#2ECC71]/70" />
                    <span className="ml-2 truncate rounded bg-paper-surface-2 px-2 py-0.5 font-mono text-[10px] text-ink/40 dark:bg-ink-surface-2 dark:text-paper/40">
  🖥️ Electron Desktop Application
</span>
                  </div>
                  <div className="relative h-[420px] overflow-hidden bg-black/5">

  <button
  onClick={() =>
    setSelectedImage(
      project.images?.[imageIndexes[project.slug] ?? 0] ?? null
    )
  }
  className="h-full w-full cursor-zoom-in"
>
  <Image
  src={project.images?.[imageIndexes[project.slug] ?? 0] ?? "/placeholder.png"}
  alt={project.name}
  fill
  quality={100}
  sizes="(max-width:768px) 100vw, 50vw"
  className="object-contain p-4 transition duration-300 hover:scale-[1.03]"
/>
</button>

  {project.images && project.images.length > 1 && (
    <>
      <button
        onClick={() => prevImage(project.slug, project.images?.length ?? 0)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => nextImage(project.slug, project.images?.length ?? 0)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
        {(imageIndexes[project.slug] ?? 0) + 1} / {project.images?.length}
      </div>
    </>
  )}

</div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                    {project.featured && (
                      <span className="shrink-0 rounded-full bg-warm/15 px-2.5 py-1 font-mono text-[10px] text-warm">
                        featured
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border hairline px-2 py-0.5 font-mono text-[11px] text-ink/60 dark:text-paper/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">

  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
    >
      <ExternalLink className="h-4 w-4" />
      Watch Demo
    </a>
  )}

  {project.downloadUrl && (
    <a
      href={project.downloadUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border hairline px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
    >
      <Download className="h-4 w-4" />
      Download
    </a>
  )}

  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border hairline px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
    >
      <FaGithub className="h-4 w-4" />
      Source Code
    </a>
  )}

</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center font-mono text-sm text-ink/50 dark:text-paper/50">
            No projects tagged &quot;{filter}&quot; yet.
          </p>
        )}
      </div>

{selectedImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative max-h-[90vh] max-w-[95vw]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black shadow-lg"
      >
        ✕
      </button>

      <Image
  src={selectedImage}
  alt="Project Screenshot"
  width={1920}
  height={1080}
  quality={100}
  className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
/>
    </div>
  </div>
)}

    </section>
    
  );
}
