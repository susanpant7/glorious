"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from "lucide-react";
import type { PointerEvent } from "react";
import { useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { SHOP_URL } from "@/lib/shop";
import { cn } from "@/lib/utils";

const accents = [
  "from-amber-300/35 via-orange-300/15 to-transparent",
  "from-emerald-300/25 via-cyan-200/15 to-transparent",
  "from-sky-300/30 via-amber-200/15 to-transparent",
  "from-violet-300/25 via-rose-200/15 to-transparent",
  "from-orange-300/35 via-yellow-200/15 to-transparent",
  "from-indigo-300/30 via-fuchsia-200/15 to-transparent",
  "from-pink-300/25 via-slate-100/10 to-transparent",
];

export function HeroProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const activeProduct = products[activeIndex];
  const productHref = `/products/${activeProduct.id}`;
  const slideKey = useMemo(() => activeProduct.id, [activeProduct.id]);

  const showSlide = useCallback((index: number) => {
    setActiveIndex((index + products.length) % products.length);
    setDragOffset(0);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + products.length) % products.length);
    setDragOffset(0);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % products.length);
    setDragOffset(0);
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragStart(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart === null) return;
    setDragOffset(event.clientX - dragStart);
  };

  const handlePointerEnd = () => {
    if (Math.abs(dragOffset) > 70) {
      if (dragOffset < 0) {
        showNext();
      } else {
        showPrevious();
      }
      setDragStart(null);
      return;
    }

    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-[390px] select-none overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.09] p-3.5 shadow-2xl shadow-slate-950/30 ring-1 ring-white/10 backdrop-blur-md">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100 transition-opacity duration-1000 bg-[#2b313f]",
          accents[activeIndex % accents.length],
        )}
      />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      <div
        key={slideKey}
        className="relative transition-transform duration-700 ease-out"
        style={{ transform: `translateX(${dragOffset * 0.12}px)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <div className="relative flex flex-col items-stretch gap-4">
          <div className="rounded-lg p-3 bg-[#3f414d]">
            <div className="relative flex min-h-[165px] items-center justify-center sm:min-h-[195px]">
              <div className="absolute inset-8 rounded-full bg-white/12 blur-3xl" />
              <div className="absolute bottom-5 h-9 w-3/4 rounded-full bg-slate-950/40 blur-2xl" />
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                width={360}
                height={360}
                priority={activeIndex === 0}
                className="relative z-10 h-auto max-h-[190px] w-full max-w-[220px] animate-[heroImage_950ms_120ms_ease-out_both] object-contain drop-shadow-[0_28px_54px_rgba(0,0,0,0.42)] transition duration-700 hover:scale-[1.04] sm:max-h-[220px] sm:max-w-[250px]"
              />
            </div>

            <div className="relative px-1 pb-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
                <Sparkles className="size-3.5" />
                {activeProduct.category}
              </span>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
                {activeProduct.name}
              </h2>
              <p className="mt-2 max-h-12 overflow-hidden text-sm leading-6 text-slate-200">
                {activeProduct.description}
              </p>
            </div>
          </div>

          <div className="relative px-1 pb-1">
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-10 cursor-pointer rounded-full px-5 text-sm font-semibold shadow-lg shadow-amber-950/20 transition duration-500 hover:-translate-y-0.5"
              >
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <ShoppingBag className="mr-2 size-4" />
                  Shop Now
                </a>
              </Button>
              <Link
                href={productHref}
                onPointerDown={(e) => e.stopPropagation()}
                className="cursor-pointer text-sm font-semibold text-white/85 underline-offset-4 transition duration-500 hover:text-amber-100 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              aria-label={`Show ${product.name}`}
              aria-current={index === activeIndex}
              onClick={() => showSlide(index)}
              onPointerDown={(event) => event.stopPropagation()}
              className={cn(
                "h-2.5 cursor-pointer rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#febe11]",
                index === activeIndex
                  ? "w-9 bg-[linear-gradient(90deg,#cd7d01_0%,#eea504_100%)] shadow-[0_8px_20px_-12px_rgba(205,125,1,0.9)]"
                  : "w-2.5 bg-white/35 hover:bg-white/70",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous product"
            onClick={showPrevious}
            onPointerDown={(event) => event.stopPropagation()}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-500 hover:-translate-y-0.5 hover:border-amber-200/60 hover:bg-amber-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next product"
            onClick={showNext}
            onPointerDown={(event) => event.stopPropagation()}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-500 hover:-translate-y-0.5 hover:border-amber-200/60 hover:bg-amber-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
