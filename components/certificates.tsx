"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Images } from "lucide-react";

import { certificates } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CertificateGallery } from "@/components/certificate-gallery";

export function Certificates() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);

  const openGallery = (images: string[], title: string) => {
    setSelectedImages(images);
    setSelectedTitle(title);
    setCurrentImage(0);
    setOpen(true);
  };

  const closeGallery = () => {
    setOpen(false);
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
    <>
      <section
        id="certificates"
        className="border-t hairline py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            path="certificates"
            title="Certifications"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 0.06}>
                <button
                  onClick={() => openGallery(cert.images, cert.name)}
                  className="group w-full overflow-hidden rounded-2xl border hairline bg-paper-surface text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl dark:bg-ink-surface"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cert.images[0]}
                      alt={cert.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
                      {cert.images.length}{" "}
                      {cert.images.length === 1 ? "page" : "pages"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <Award className="h-5 w-5 text-warm" />

                      <Images className="h-4 w-4 text-ink/40 transition group-hover:text-accent dark:text-paper/40" />
                    </div>

                    <h3 className="font-display text-base font-semibold">
                      {cert.name}
                    </h3>

                    <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
                      {cert.issuer}
                    </p>

                    <p className="mt-3 font-mono text-xs text-ink/50 dark:text-paper/50">
                      {cert.date}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CertificateGallery
        images={selectedImages}
        title={selectedTitle}
        current={currentImage}
        open={open}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}