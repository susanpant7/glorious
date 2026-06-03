"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX.current === null) {
      return;
    }

    setDragOffset(event.clientX - dragStartX.current);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX.current === null) {
      return;
    }

    const distance = event.clientX - dragStartX.current;
    dragStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(distance) < 40) {
      return;
    }

    if (distance < 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our clients say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Real customer feedback gives this page personality and trust. Swipe or use the arrows to browse each testimonial.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div
            className="relative overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onPointerLeave={handlePointerEnd}
          >
            <div
              className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-out"}`}
              style={{ transform: `translateX(calc(${-activeIndex * 100}% + ${dragOffset}px))` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 py-8 text-center sm:px-6 md:px-8">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full">
                      <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>

                    <p className="max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">"{testimonial.quote}"</p>

                    <div>
                      <p className="text-xl font-semibold tracking-tight text-white">{testimonial.name}</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-amber-300">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 py-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    index === activeIndex ? "bg-amber-400" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={handlePrev}
            className="absolute -left-6 top-1/3 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:-left-8 sm:p-4"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={handleNext}
            className="absolute -right-6 top-1/3 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:-right-8 sm:p-4"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
