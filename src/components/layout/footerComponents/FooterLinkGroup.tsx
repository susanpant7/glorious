export function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-slate-400 transition hover:text-white hover:translate-x-1">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
