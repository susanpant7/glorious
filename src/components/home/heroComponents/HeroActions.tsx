import Link from "next/link";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/products"
        className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/20 transition hover:bg-slate-100"
      >
        Shop products
      </Link>
      <a
        href="#featured"
        className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        View listings
      </a>
    </div>
  );
}
