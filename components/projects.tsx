"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Download,
  Images,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectFilters, projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGallery } from "@/components/project-gallery";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const filtered = useMemo(
  () =>
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter)),
  [filter]
);

  const openGallery = (images: string[], title: string) => {
    if (!images || images.length === 0) return;
    setSelectedImages(images);
    setSelectedTitle(title);
    setCurrentImage(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % selectedImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
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
  {project.category.includes("Design")
    ? "🎨 Graphic Design Portfolio"
    : project.category.includes("Desktop")
    ? "🖥️ Electron Desktop Application"
    : "🌐 Web Development Project"}
</span>
                  </div>

                  <button
                    onClick={() => openGallery(project.images ?? [], project.name)}
                    className="relative block h-[420px] w-full cursor-zoom-in overflow-hidden bg-black/5"
                  >
                    <Image
                      src={project.images?.[0] ?? "/placeholder.png"}
                      alt={project.name}
                      fill
                      quality={100}
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                    />

                    {project.images && project.images.length > 1 && (
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
                        <Images className="h-3.5 w-3.5" />
                        {project.images.length}
                      </div>
                    )}
                  </button>
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

      <ProjectGallery
        images={selectedImages}
        title={selectedTitle}
        current={currentImage}
        open={galleryOpen}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}