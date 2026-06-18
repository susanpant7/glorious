"use client";

import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
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
      className="group block h-full"
    >
      <Card className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] cursor-pointer">
        <div className={`relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem] bg-slate-100 ${product.colorClass}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <CardContent className="flex-1 space-y-5 px-6 pb-0 pt-6">
          <h3 className="text-xl font-semibold text-slate-950">{product.name}</h3>

          <div className="flex flex-col gap-3">
            <p className="text-sm leading-7 text-slate-600">{product.description}</p>
            {product.badge ? (
              <Badge variant="secondary" className="uppercase tracking-[0.24em]">
                {product.badge}
              </Badge>
            ) : null}
          </div>
        </CardContent>

        <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 bg-slate-50 px-6 py-4">
          <span className="text-sm font-semibold text-slate-950 transition duration-300 group-hover:text-amber-600">
            View details
          </span>
          <Button asChild size="sm">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2"
            >
              <ShoppingBag className="size-4" />
              Buy
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
