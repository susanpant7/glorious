export default function VisionPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold text-slate-900">Our Vision</h1>
          <p className="mt-2 text-lg text-slate-600">We envision GlowRious as a trusted personal care brand for Nepal and beyond.</p>
        </div>
      </div>

      <div className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-12">
            {/* Main Vision */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Long-Term Vision</h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
                <p className="text-lg font-semibold text-slate-900">
                  We envision a future where GlowRious becomes a household name in beauty and personal care, empowering people across Nepal and beyond to confidently pursue their healthiest skin, strongest hair, and most radiant selves.
                </p>
                <p className="mt-4 text-slate-700">
                  Our vision is built on quality, accessibility, and customer impact. We are committed to delivering products people trust for their daily skincare and haircare rituals, combining advanced technology with honest, effective formulation.
                </p>
              </div>
            </div>

            {/* Vision Pillars */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Vision Pillars</h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-purple-200 p-2 text-purple-600 font-bold">✨</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Quality & Innovation</h3>
                      <p className="mt-2 text-slate-700">To become a trusted beauty and wellness brand recognised for formulation science, ingredient integrity, and effective products. We continue investing in advanced delivery technologies like NEOSOME™ and in deeper skin and hair science.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-purple-200 p-2 text-purple-600 font-bold">🌍</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Reach & Accessibility</h3>
                      <p className="mt-2 text-slate-700">To strengthen our presence across Nepal and establish GlowRious as a leading name in skincare and haircare. We aim to expand our portfolio to meet diverse needs: hyperpigmentation, melasma, hydration, sun protection, and hair wellness.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-purple-200 p-2 text-purple-600 font-bold">💜</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Customer Impact</h3>
                      <p className="mt-2 text-slate-700">To positively impact millions through innovation, education, and customer-focused growth. We aim to inspire healthy skin, healthy hair, and the lasting confidence that comes with both.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skin Concerns */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Skin Concerns</h2>
              <p className="text-slate-600 mb-8">GlowRious addresses</p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Melasma */}
                <div className="rounded-lg border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 hover:border-amber-400 transition">
                  <div className="text-4xl mb-4">🟤</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Melasma</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Symmetrical brown patches, often hormone- or sun-triggered.
                  </p>
                </div>

                {/* Sun Spots */}
                <div className="rounded-lg border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-6 hover:border-yellow-400 transition">
                  <div className="text-4xl mb-4">☀️</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sun Spots</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Flat brown marks from cumulative UV exposure.
                  </p>
                </div>

                {/* Age Spots */}
                <div className="rounded-lg border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 hover:border-rose-400 transition">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Age Spots</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Pigmentation that appears with maturing skin.
                  </p>
                </div>

                {/* Acne Marks */}
                <div className="rounded-lg border-2 border-red-200 bg-gradient-to-br from-red-50 to-rose-50 p-6 hover:border-red-400 transition">
                  <div className="text-4xl mb-4">🩹</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Acne Marks</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Dark marks left behind after breakouts heal.
                  </p>
                </div>

                {/* Post-inflammatory Hyperpigmentation */}
                <div className="rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 hover:border-purple-400 transition">
                  <div className="text-4xl mb-4">💜</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Post-inflammatory Hyperpigmentation</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Discolouration following irritation or injury.
                  </p>
                </div>

                {/* Dull Skin */}
                <div className="rounded-lg border-2 border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50 p-6 hover:border-slate-400 transition">
                  <div className="text-4xl mb-4">💤</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Dull Skin</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Tired, lacklustre tone lacking radiance.
                  </p>
                </div>
              </div>
            </div>

            {/* Why We Believe */}
            <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Why We Believe in This Vision</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="font-semibold mb-2">Trusted daily rituals</p>
                  <p className="text-sm opacity-90">Our vision is grounded in becoming the brand people trust for their most personal daily skincare and haircare routines.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Accessible quality</p>
                  <p className="text-sm opacity-90">We believe premium personal care should be accessible to people who want honest, effective, and safe products.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Science-driven care</p>
                  <p className="text-sm opacity-90">We invest in advanced delivery systems like NEOSOME™ and ingredient science to make products that genuinely work.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Confident outcomes</p>
                  <p className="text-sm opacity-90">Our goal is not just beauty on the surface, but confidence and lasting skin and hair health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
