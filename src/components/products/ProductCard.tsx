import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl">
      <div className={`flex h-64 items-center justify-center p-6 ${product.colorClass}`}>
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-3xl bg-white/90 p-4 text-center text-slate-950 shadow-lg shadow-slate-900/10 transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{product.category}</span>
          <span className="mt-3 text-sm font-semibold">{product.tone}</span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-slate-500">
          <span>{product.shades}</span>
          <span className="font-semibold text-slate-950">{product.price}</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
            {product.badge ? (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
                {product.badge}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
          <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Buy now
          </button>
          {product.oldPrice ? (
            <span className="text-sm text-slate-400 line-through">{product.oldPrice}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
