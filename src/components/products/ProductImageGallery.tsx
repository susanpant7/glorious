"use client";

import { useEffect, useState, type TouchEvent } from "react";
import { Badge } from "@/components/ui/badge";

type ProductImageGalleryProps = {
  images: string[];
  tag?: string;
};

export function ProductImageGallery({ images, tag }: ProductImageGalleryProps) {
  const validImages = images.length > 0 ? images : ["/images/placeholder.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = validImages.length || 1;
  const selectedImage = validImages[selectedIndex] ?? validImages[0] ?? "";

  useEffect(() => {
    setLoaded(false);
  }, [selectedImage]);

  useEffect(() => {
    if (!validImages.length) {
      return;
    }

    const nextIndex = (selectedIndex + 1) % validImages.length;
    const prevIndex = (selectedIndex - 1 + validImages.length) % validImages.length;

    const preloadNext = new Image();
    preloadNext.src = validImages[nextIndex];

    const preloadPrev = new Image();
    preloadPrev.src = validImages[prevIndex];
  }, [selectedIndex, validImages]);

  const selectImage = (index: number) => {
    setSelectedIndex(index);
  };

  const showPrev = () => {
    setSelectedIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setSelectedIndex((current) => (current + 1) % total);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - touchStartX;

    if (Math.abs(deltaX) > 70) {
      if (deltaX > 0) {
        showPrev();
      } else {
        showNext();
      }
    }

    setTouchStartX(null);
  };

  return (
    <div className="group">
      <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto]">
        <div className="hidden lg:flex flex-col gap-3">
          {validImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              aria-label={`Select image ${index + 1}`}
              onClick={() => selectImage(index)}
              className={`relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border p-2 transition duration-200 hover:border-[var(--theme)] hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-[var(--theme)]/40 ${
                index === selectedIndex ? "border-[var(--theme)] shadow-lg" : "border-slate-200 bg-white"
              }`}
            >
              <img
                src={src}
                alt={`Product thumbnail ${index + 1}`}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
              {index === selectedIndex ? (
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-[var(--theme)]" />
              ) : null}
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            className="relative h-[520px] overflow-hidden rounded-[1.75rem] bg-slate-100 cursor-pointer transition duration-300 hover:scale-[1.02]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                src={selectedImage}
                alt={`Selected product image ${selectedIndex + 1}`}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                className={`absolute inset-0 m-auto h-full w-full object-contain transition-opacity duration-300 ease-out ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {!loaded ? (
              <div className="absolute inset-0 animate-pulse rounded-[1.75rem] bg-slate-200" />
            ) : null}

            <div className="absolute left-4 top-4">
              {tag ? (
                <Badge variant="secondary" className="uppercase tracking-[0.3em]">
                  {tag}
                </Badge>
              ) : null}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4">
              <span className="rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-white">
                Image {selectedIndex + 1} / {total}
              </span>
            </div>

            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-950/70 p-3 text-white opacity-0 transition duration-200 group-hover:opacity-100 hover:bg-slate-950 focus:outline-none focus-visible:ring focus-visible:ring-[var(--theme)]/50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-950/70 p-3 text-white opacity-0 transition duration-200 group-hover:opacity-100 hover:bg-slate-950 focus:outline-none focus-visible:ring focus-visible:ring-[var(--theme)]/50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-3 lg:hidden">
            {validImages.map((src, index) => (
              <button
                key={`${src}-mobile-${index}`}
                type="button"
                aria-label={`Select image ${index + 1}`}
                onClick={() => selectImage(index)}
                className={`relative h-20 min-w-[80px] overflow-hidden rounded-3xl border p-2 transition duration-200 ${
                  index === selectedIndex
                    ? "border-[var(--theme)] shadow-lg"
                    : "border-slate-200 hover:border-[var(--theme)]"
                }`}
              >
                <img
                  src={src}
                  alt={`Product thumbnail ${index + 1}`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
