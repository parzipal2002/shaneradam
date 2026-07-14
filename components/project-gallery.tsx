"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  images: string[];
  title: string;
  current: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function ProjectGallery({
  images,
  title,
  current,
  open,
  onClose,
  onNext,
  onPrev,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-6 right-6 z-50 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {/* Image */}
          <motion.div
            key={`${title}-${current}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="relative z-0 h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`${title} ${current + 1}`}
              fill
              priority
              sizes="100vw"
              className="rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>

          {/* Bottom Controls */}
<div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl">
  <div className="flex items-center gap-5">

    {images.length > 1 && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
      >
        <ChevronLeft size={22} />
      </button>
    )}

    <div className="min-w-[220px] text-center">
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-white/70">
        Image {current + 1} of {images.length}
      </p>
    </div>

    {images.length > 1 && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
      >
        <ChevronRight size={22} />
      </button>
    )}

  </div>
</div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}