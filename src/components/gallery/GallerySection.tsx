"use client";

import { useState } from "react";
import { ImageModal } from "@/components/gallery/ImageModal";
import type { GalleryImage } from "@/lib/gallery";

export function GallerySection({
  images,
  maxItems = 4,
  showViewMore = true,
}: {
  images: GalleryImage[];
  maxItems?: number;
  showViewMore?: boolean;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(maxItems);
  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const handleLoadMore = () => {
    setVisibleCount((current) => Math.min(current + 8, images.length));
  };

  return (
    <section className="bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Gallery</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Visual inspiration from our latest collection
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Explore a curated gallery of premium beauty imagery. Hover over any image to preview and click to enlarge.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              aria-label="Open image in viewer"
              onClick={() => setSelectedIndex(index)}
              className="group cursor-zoom-in overflow-hidden rounded-[2rem] bg-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/40 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/90 text-slate-950 shadow-lg transition duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M2.05 12a9.95 9.95 0 011.88-5.7A10 10 0 0112 2.05" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>

      {selectedIndex !== null ? (
        <ImageModal
          images={images}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onSelect={setSelectedIndex}
        />
      ) : null}
    </section>
  );
}
