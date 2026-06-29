"use client";

import { memo, useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { Maximize2, ChevronDown } from "lucide-react";

import { ImageModal } from "@/components/gallery/ImageModal";
import type { GalleryImage } from "@/lib/gallery";

type GalleryProps = {
  images: GalleryImage[];
};

type GalleryCardProps = {
  image: GalleryImage;
  index: number;
  onOpen: (index: number) => void;
};

const GalleryCard = memo(function GalleryCard({ image, index, onOpen }: GalleryCardProps) {
  return (
    <button
      type="button"
      aria-label="Open image in viewer"
      onClick={() => onOpen(index)}
      className="group relative block h-80 w-full cursor-zoom-in overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#eea504]/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eea504]"
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        priority={index < 4}
        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-end p-4">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/90 text-slate-950 opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
          <Maximize2 className="size-4" />
        </span>
      </div>
    </button>
  );
});

export function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const hasImages = images.length > 0;

  const openImage = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const galleryItems = useMemo(() => {
    const items = images.slice(0, visibleCount).map((image, i) => {
      const originalIndex = i; // using sliced index for viewer order
      return <GalleryCard key={image.id} image={image} index={originalIndex} onOpen={openImage} />;
    });
    return items;
  }, [images, openImage, visibleCount]);

  const canLoadMore = visibleCount < images.length;

  const handleLoadMore = useCallback(() => {
    if (!canLoadMore || isLoadingMore) return;
    setIsLoadingMore(true);
    // Simulate loading for a smooth animation; replace with real data fetch if needed
    setTimeout(() => {
      setVisibleCount((v) => Math.min(images.length, v + 8));
      setIsLoadingMore(false);
    }, 500);
  }, [canLoadMore, images.length, isLoadingMore]);

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#eea504]">Gallery</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            GlowRious visual gallery
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Browse product moments, campaign visuals, and skincare imagery in a polished full-screen viewer.
          </p>
        </div>

        {hasImages ? (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryItems}
            </div>

            {canLoadMore ? (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="btn-train inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme)]/40"
                >
                  {isLoadingMore ? (
                    <svg className="h-5 w-5 animate-spin text-[#eea504]" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#eea504]" />
                  )}
                  <span className="">{isLoadingMore ? "Loading..." : "Load more"}</span>
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-sm text-slate-500">
            No gallery images are available.
          </div>
        )}
      </div>

      {selectedIndex !== null ? (
        <ImageModal images={images} selectedIndex={selectedIndex} onClose={closeModal} onSelect={setSelectedIndex} />
      ) : null}
    </section>
  );
}
