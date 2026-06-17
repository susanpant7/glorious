"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import type { WheelEvent } from "react";
import Image from "next/image";

import { ImageControls } from "@/components/gallery/ImageControls";
import type { GalleryImage } from "@/lib/gallery";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

type ImageModalProps = {
  images: GalleryImage[];
  selectedIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
};

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(value.toFixed(2))));
}

function ImageModalComponent({ images, selectedIndex, onClose, onSelect }: ImageModalProps) {
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [isLoading, setIsLoading] = useState(true);
  const image = images[selectedIndex];

  const prepareImageChange = useCallback(() => {
    setZoom(MIN_ZOOM);
    setIsLoading(true);
  }, []);

  const showPrevious = useCallback(() => {
    prepareImageChange();
    onSelect((selectedIndex - 1 + images.length) % images.length);
  }, [images.length, onSelect, prepareImageChange, selectedIndex]);

  const showNext = useCallback(() => {
    prepareImageChange();
    onSelect((selectedIndex + 1) % images.length);
  }, [images.length, onSelect, prepareImageChange, selectedIndex]);

  const zoomIn = useCallback(() => {
    setZoom((current) => clampZoom(current + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((current) => clampZoom(current - ZOOM_STEP));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(MIN_ZOOM);
  }, []);

  const handleWheel = useCallback((event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setZoom((current) => clampZoom(current + (event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP)));
  }, []);

  const handleDoubleClick = useCallback(() => {
    setZoom((current) => (current > MIN_ZOOM ? MIN_ZOOM : 2));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, showNext, showPrevious]);

  const imageCounter = useMemo(() => `${selectedIndex + 1} / ${images.length}`, [images.length, selectedIndex]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex animate-in fade-in duration-250 items-center justify-center bg-slate-950/92 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div
        className="relative flex h-[86vh] w-full max-w-7xl animate-in zoom-in-95 duration-250 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/60 sm:h-[88vh]"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_58%)] p-4 sm:p-8"
          onWheel={handleWheel}
          onDoubleClick={handleDoubleClick}
        >
          {isLoading ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="h-11 w-11 animate-spin rounded-full border-2 border-white/20 border-t-amber-200" />
            </div>
          ) : null}
          <div
            key={image.id}
            className="relative h-full w-full transition duration-300 ease-out"
            style={{
              opacity: isLoading ? 0 : 1,
              transform: `scale(${zoom})`,
            }}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              priority
              sizes="100vw"
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              className="cursor-zoom-in rounded-3xl object-contain transition duration-300 drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        <div className="shrink-0 border-t border-white/10 bg-slate-950/85 px-4 py-4 sm:px-6">
          <div className="mx-auto flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="text-sm text-slate-300">{imageCounter}</div>
            <ImageControls
              canZoomIn={zoom < MAX_ZOOM}
              canZoomOut={zoom > MIN_ZOOM}
              onClose={onClose}
              onNext={showNext}
              onPrevious={showPrevious}
              onReset={resetZoom}
              onZoomIn={zoomIn}
              onZoomOut={zoomOut}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const ImageModal = memo(ImageModalComponent);
