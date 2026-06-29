"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/lib/products";

function titleize(segment: string) {
  return segment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumb() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    let label = titleize(seg);

    // map product id to product name when on product detail
    if (segments[0] === "products" && idx === segments.length - 1) {
      const prod = products.find((p) => p.id === seg);
      if (prod) label = prod.name;
    }

    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <ol className="flex items-center gap-3 text-sm text-slate-600">
          <li>
            <Link href="/" className="transition-colors duration-200 hover:text-[#eea504] focus:text-[#eea504]">
              Home
            </Link>
          </li>
          {crumbs.map((c, i) => (
            <li key={c.href} className="flex items-center gap-3">
              <span className="text-slate-400">/</span>
              {i === crumbs.length - 1 ? (
                <span className="text-slate-800 font-medium">{c.label}</span>
              ) : (
                <Link href={c.href} className="transition-colors duration-200 text-slate-600 hover:text-[#eea504] focus:text-[#eea504]">
                  {c.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
