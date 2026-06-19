export function FooterLegalLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-base font-semibold uppercase tracking-[0.25em] text-white">{title}</h4>
      <div className="mt-6 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-slate-300 transition-all duration-300 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
