import { site } from "@/lib/site";

export function HeroIntro() {
  const h = site.hero;

  return (
    <div className="space-y-3">
      <span className="inline-flex rounded-full bg-[#eea504]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#eea504] sm:text-sm">
        {h.badge}
      </span>
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]">{h.title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{h.description}</p>
      </div>
    </div>
  );
}
