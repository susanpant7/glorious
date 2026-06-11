export default function MissionPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold text-slate-900">Our Mission</h1>
          <p className="mt-2 text-lg text-slate-600">Empowering individuals to confidently chase their glow</p>
        </div>
      </div>

      <div className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-12">
            {/* Main Mission */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-slate-900">
                  Our mission is to empower individuals to confidently chase their glow by providing high-quality, effective, and trustworthy skin and hair care solutions.
                </p>
                <p className="mt-4 text-slate-700">
                  We create lasting value, not just visible results in a bottle, but confidence, trust, and the knowledge to care for yourself well. We believe premium personal care should be accessible to everyone who seeks it.
                </p>
              </div>
            </div>

            {/* Commitments */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Four Commitments</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Carefully formulated products',
                    description: 'Made with quality ingredients that are proven, safe, and transparently disclosed.',
                  },
                  {
                    title: 'Continuous improvement',
                    description: 'Driven by science, customer feedback, and evolving formulation expertise.',
                  },
                  {
                    title: 'Skin assessment programmes',
                    description: 'Helping customers understand their unique concerns and find the right solutions.',
                  },
                  {
                    title: 'Customer education',
                    description: 'Empowering people to make informed choices and build sustainable, effective skincare routines.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-lg border border-slate-200 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">✓</div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Achieve It */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How We Achieve Our Mission</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-blue-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Quality ingredients
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">Every product is formulated with ingredients chosen for safety, stability, and visible performance.</p>
                </div>
                <div className="rounded-lg border-2 border-blue-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Transparent formulation
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">We disclose ingredients clearly and explain their purpose so customers can shop with confidence.</p>
                </div>
                <div className="rounded-lg border-2 border-blue-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Personalised guidance
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">Skin assessment programmes and expert support help people find the right routine for their needs.</p>
                </div>
                <div className="rounded-lg border-2 border-blue-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Customer education
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">We provide practical advice and product knowledge so routines stay effective and sustainable.</p>
                </div>
              </div>
            </div>

            {/* Commitment */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
              <p className="text-lg leading-relaxed">
                We are committed to being more than just a beauty retailer. We aim to be your trusted partner in your beauty journey, providing not just products, but guidance, inspiration, and a supportive community. Your confidence and satisfaction are our ultimate success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
