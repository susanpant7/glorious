"use client";

import { memo } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";

type ImageControlsProps = {
  canZoomIn: boolean;
  canZoomOut: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onReset: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
};

function ImageControlsComponent({
  canZoomIn,
  canZoomOut,
  onClose,
  onNext,
  onPrevious,
  onReset,
  onZoomIn,
  onZoomOut,
}: ImageControlsProps) {
  const buttonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl shadow-black/15 backdrop-blur-md transition duration-200 hover:scale-105 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eea504] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-white/10 disabled:hover:text-white";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button type="button" title="Previous image" aria-label="Previous image" onClick={onPrevious} className={buttonClass}>
        <ChevronLeft className="size-4" />
      </button>
      <button type="button" title="Next image" aria-label="Next image" onClick={onNext} className={buttonClass}>
        <ChevronRight className="size-4" />
      </button>
      <button type="button" title="Zoom out" aria-label="Zoom out" onClick={onZoomOut} disabled={!canZoomOut} className={buttonClass}>
        <ZoomOut className="size-4" />
      </button>
      <button type="button" title="Reset zoom" aria-label="Reset zoom" onClick={onReset} className={buttonClass}>
        <RotateCcw className="size-4" />
      </button>
      <button type="button" title="Zoom in" aria-label="Zoom in" onClick={onZoomIn} disabled={!canZoomIn} className={buttonClass}>
        <ZoomIn className="size-4" />
      </button>
      <button type="button" title="Close popup" aria-label="Close popup" onClick={onClose} className={buttonClass}>
        <X className="size-4" />
      </button>
    </div>
  );
}

export const ImageControls = memo(ImageControlsComponent);
