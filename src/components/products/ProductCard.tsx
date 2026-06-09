"use client";

import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/lib/products";
import { SHOP_URL } from "@/lib/shop";
import React from "react";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleNavigate();
      }}
      className="group block"
    >
      <Card className="relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] cursor-pointer">
        <div className={`relative h-72 overflow-hidden rounded-t-[1.5rem] bg-slate-100 ${product.colorClass}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-white/90 backdrop-blur-sm"
            >
              Buy
            </a>
            <p className="mt-4 text-3xl font-semibold text-white drop-shadow-lg">{product.name}</p>
          </div>
        </div>

        <CardContent className="space-y-5 px-6 pb-0 pt-6">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm leading-7 text-slate-600">{product.description}</p>
            {product.badge ? (
              <Badge variant="secondary" className="uppercase tracking-[0.24em]">
                {product.badge}
              </Badge>
            ) : null}
          </div>

          <div className="grid gap-3 text-sm">
            <div className="rounded-[1.5rem] bg-slate-50 px-4 py-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Shades</p>
              <p className="mt-2 font-semibold text-slate-950">{product.shades}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 px-6 py-4">
          <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition duration-300 group-hover:bg-slate-800">
            View details
          </span>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-amber-600 font-semibold"
          >
            Buy
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
