import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/formatPrice";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <Card className="h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className={`relative flex h-64 items-center justify-center overflow-hidden bg-slate-100 ${product.colorClass}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/75 to-transparent px-6 py-4 text-white">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-200">{product.category}</span>
            <span className="text-sm font-semibold">{product.tone}</span>
          </div>
        </div>

        <CardContent className="space-y-4 px-6 pb-0 pt-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
            </div>
            {product.badge ? (
              <Badge variant="secondary" className="uppercase tracking-[0.24em]">
                {product.badge}
              </Badge>
            ) : null}
          </div>

          <div className="grid gap-3 text-sm text-slate-500">
            <span>{product.shades}</span>
            <span className="font-semibold text-slate-950">{formatPrice(product.price)}</span>
            {product.oldPrice ? (
              <span className="text-slate-400 line-through">{formatPrice(product.oldPrice)}</span>
            ) : null}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t px-6 py-4">
          <span className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition group-hover:bg-slate-800">
            View details
          </span>
          <span className="text-sm text-slate-500">{product.category}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
