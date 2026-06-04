import { footerData } from "@/lib/footer";

export function FooterBrand() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">{footerData.company.name}</h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
        {footerData.company.description}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        {footerData.company.tagline}
      </p>
    </div>
  );
}
