"use client";

import { useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryModal({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[760px] overflow-hidden rounded-3xl bg-transparent"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-[520px] overflow-hidden rounded-3xl bg-slate-950/80 sm:h-[560px]">
          <img
            src={image.src}
            alt={image.title}
            className="absolute inset-0 m-auto h-full w-full object-contain transition-transform duration-300"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        <div className="flex items-center justify-center gap-3 px-4 py-4">
          <button
            type="button"
            onClick={() => setZoom((current) => Math.max(1, current - 0.25))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100 transition hover:text-white"
            aria-label="Zoom out"
          >
            <span className="text-xl">–</span>
          </button>
          <button
            type="button"
            onClick={() => setZoom((current) => Math.min(2.5, current + 0.25))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100 transition hover:text-white"
            aria-label="Zoom in"
          >
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
