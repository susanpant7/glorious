export function HeroFeatureCard() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
      <div className="space-y-6">
        <div className="rounded-3xl bg-slate-800/60 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#eea504]">SKIN LIGHTENING SERUM </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            100% Vegan & cruelty-free formulation
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            A next-generation depigmentation and brightening serum that targets dark spots, hyperpigmentation, uneven tone and dull skin. An advanced encapsulation system carries eleven actives deeper, releases them in a controlled way and improves stability — for visible, long-lasting results with better tolerability.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-5 text-sm text-slate-200">
            <p className="font-semibold text-white">30 ml • 1 fl. oz</p>
            <p className="mt-2 text-slate-300">11 active ingredients.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5 text-sm text-slate-200">
            <p className="font-semibold text-white">30 ml</p>
            <p className="mt-2 text-slate-300">Premium 1 fl. oz format.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
