export function FooterLinkGroup({
  title,
  links,
  align = "left",
}: {
  title: string;
  links: { label: string; href: string }[];
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "md:text-right" : undefined}>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
