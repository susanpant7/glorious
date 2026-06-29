export function ThreePillars() {
  const pillars = [
    {
      title: "Advanced Depigmentation",
      description:
        "A multi-pathway approach — inhibiting melanin synthesis, blocking pigment transfer and fading existing spots — for genuinely even tone.",
      icon: "✨",
    },
    {
      title: "Deep Delivery",
      description:
        "Neosome™ encapsulation carries actives past the surface, where they can work, instead of evaporating or sitting on top of the skin.",
      icon: "🎯",
    },
    {
      title: "Skin Renewal",
      description:
        "Gentle AHA exfoliation plus repair and hydration actives reveal fresh, smoother, more radiant skin over time.",
      icon: "🌸",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-950">Three Pillars of GlowRious</h2>
        <p className="mt-2 text-sm text-slate-600">Our comprehensive approach to skincare excellence.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#eea504]/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#eea504]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 space-y-4">
              <div className="text-4xl">{pillar.icon}</div>

              <h3 className="text-lg font-semibold text-slate-950 transition-colors duration-300 group-hover:text-[#eea504] group-active:text-[#eea504]">
                {pillar.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                {pillar.description}
              </p>
            </div>

            <div className="absolute inset-0 rounded-2xl border border-[#eea504]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
