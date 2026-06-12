import { site } from "@/lib/site";
import { ThreePillars } from "@/components/about/ThreePillars";
import Image from "next/image";

function getClaimDescription(claim: string) {
  const map: Record<string, string> = {
    'Sulfate Free': 'Formulated without sulfates to be gentler on hair and skin.',
    'Vegan': 'Contains no animal-derived ingredients and is suitable for vegans.',
    'Alcohol Free': 'Free from drying alcohols that can strip moisture.',
    'Cruelty Free': 'Never tested on animals; we support ethical beauty practices.',
    'Paraben Free': 'Formulated without parabens, avoiding certain preservatives.',
    'Hypoallergenic': 'Designed to minimize the risk of allergic reactions.',
    'No Harmful Chemicals': 'Free from known harmful ingredients and irritants.',
    'Dermatologically Inspired': 'Developed with dermatological principles for skin health.',
    'Non-Toxic': 'Formulated with safe, non-toxic ingredients for daily use.',
    'Daily Use': 'Gentle enough for regular daily routines.'
  };

  return map[claim] || '';
}

export default function AboutPage() {
  const about = site.about;

  return (
    <div>
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="flex flex-col items-center gap-8 text-center">
              <Image
                src="https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781273539/Logo_GlowRious_page-0001_gemjsg.png"
                alt="glowrious"
                width={240}
                height={80}
                className="h-auto w-auto object-contain"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold">{site.name}</h1>
                <p className="text-sm text-slate-600">{site.description}</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <p className="text-sm text-slate-700">{about.description}</p>

              <div>
                <h2 className="text-lg font-semibold">Five things to remember</h2>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                  {about.fiveThingsToRemember.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <ThreePillars />
              </div>

              {/* Product Claims */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold">Product claims</h2>
                <p className="mt-2 text-sm text-slate-600">Sulfate Free, Vegan, Alcohol Free, Cruelty Free, Paraben Free, Hypoallergenic, No Harmful Chemicals, Dermatologically Inspired, Non-Toxic, Daily Use</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    'Sulfate Free',
                    'Vegan',
                    'Alcohol Free',
                    'Cruelty Free',
                    'Paraben Free',
                    'Hypoallergenic',
                    'No Harmful Chemicals',
                    'Dermatologically Inspired',
                    'Non-Toxic',
                    'Daily Use'
                  ].map((claim) => (
                    <div key={claim} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 text-lg font-bold">✓</div>
                      <div>
                        <p className="font-semibold text-slate-900">{claim}</p>
                        <p className="mt-1 text-sm text-slate-600">{getClaimDescription(claim)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Serum Comparison */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold">GlowRious vs ordinary serums</h2>
              <p className="mt-2 text-sm text-slate-600">A concise comparison of key parameters</p>

              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 border border-slate-100 bg-white">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Parameter</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">GlowRious Serum</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Ordinary brightening serums</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700 font-medium">Deep delivery</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Neosome™ encapsulation</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Sits mostly on the surface</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700 font-medium">Encapsulation technology</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Liposomal + niosomal</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Usually none</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700 font-medium">Multi-ingredient brightening</td>
                      <td className="px-4 py-4 text-sm text-slate-700">11 actives, 4 pathways</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Often 1–2 actives</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700 font-medium">Skin repair</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Panthenol + bakuchiol</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Rarely included</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700 font-medium">Hydration</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Built-in</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Variable</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700 font-medium">Anti-ageing support</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Bakuchiol + vitamin E</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Limited</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-700 font-medium">Safety profile</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Gentle, clean, vegan</td>
                      <td className="px-4 py-4 text-sm text-slate-700">Varies widely</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

