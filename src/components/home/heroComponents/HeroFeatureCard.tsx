export function HeroFeatureCard() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
      <div className="space-y-6">
        <div className="rounded-3xl bg-slate-800/60 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Overnight repair</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            2X renewal radiance
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Hydrate, soften, and blur for refreshed skin with peptide-rich serum essentials.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-5 text-sm text-slate-200">
            <p className="font-semibold text-white">0.1% Retinol</p>
            <p className="mt-2 text-slate-300">Smoothing power for nightly renewal.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5 text-sm text-slate-200">
            <p className="font-semibold text-white">5% Peptide Complex</p>
            <p className="mt-2 text-slate-300">Boosts firmness and glow as you sleep.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
