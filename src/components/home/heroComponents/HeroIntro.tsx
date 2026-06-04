import { site } from "@/lib/site";

export function HeroIntro() {
  const h = site.hero;

  return (
    <div className="space-y-8">
      <span className="inline-flex rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-amber-200">
        {h.badge}
      </span>
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{h.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{h.description}</p>
      </div>
    </div>
  );
}
