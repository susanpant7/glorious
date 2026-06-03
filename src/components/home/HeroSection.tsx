import { HeroActions, HeroFeatureCard, HeroIntro } from "./heroComponents";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.35),_transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <HeroIntro />
            <HeroActions />
          </div>

          <HeroFeatureCard />
        </div>
      </div>
    </section>
  );
}
