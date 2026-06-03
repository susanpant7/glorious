import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Shop beauty</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Product listing
          </h1>
          <p className="max-w-3xl text-base leading-7 text-slate-600">
            Browse our curated makeup and skincare collection with fast purchase actions and product details.
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
