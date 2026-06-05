"use client";

import { useMemo, useState } from "react";

export default function EventMediaSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;
  const current = useMemo(() => activeIndex % total, [activeIndex, total]);

  const goPrevious = () => {
    setActiveIndex((value) => (value - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((value) => (value + 1) % total);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-xl shadow-slate-900/5 transition duration-500 hover:shadow-2xl hover:shadow-slate-900/20">
        <img
          src={images[current]}
          alt={`${title} image ${current + 1}`}
          className="h-[520px] w-full object-cover transition duration-700 ease-in-out"
        />

        {total > 1 ? (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-slate-950/85 to-transparent px-4 py-4 backdrop-blur-sm">
            <button
              type="button"
              onClick={goPrevious}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg transition duration-300 hover:-translate-x-0.5 hover:bg-white"
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="rounded-full bg-slate-950/80 px-4 py-2 text-sm font-semibold text-white shadow-sm">
              {current + 1} / {total}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg transition duration-300 hover:translate-x-0.5 hover:bg-white"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === current ? "bg-slate-950 w-8" : "bg-slate-300"
              }`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
