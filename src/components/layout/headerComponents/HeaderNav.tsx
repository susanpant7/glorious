import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Featured", href: "#featured", hiddenOnMobile: true },
];

export function HeaderNav() {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={link.hiddenOnMobile ? "hidden sm:inline-block" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
