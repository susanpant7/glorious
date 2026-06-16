import { site } from "@/lib/site";
import { ThreePillars } from "@/components/about/ThreePillars";
import Image from "next/image";

const pageImage =
  "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781624189/Interview_wall_Flex_For_Website_rexctv.png";

function getClaimDescription(claim: string) {
  const map: Record<string, string> = {
    "Sulfate Free": "Formulated without sulfates to be gentler on hair and skin.",
    Vegan: "Contains no animal-derived ingredients and is suitable for vegans.",
    "Alcohol Free": "Free from drying alcohols that can strip moisture.",
    "Cruelty Free": "Never tested on animals; we support ethical beauty practices.",
    "Paraben Free": "Formulated without parabens, avoiding certain preservatives.",
    Hypoallergenic: "Designed to minimize the risk of allergic reactions.",
    "No Harmful Chemicals": "Free from known harmful ingredients and irritants.",
    "Dermatologically Inspired": "Developed with dermatological principles for skin health.",
    "Non-Toxic": "Formulated with safe, non-toxic ingredients for daily use.",
    "Daily Use": "Gentle enough for regular daily routines.",
  };

  return map[claim] || "";
}

export default function AboutPage() {
  const about = site.about;

  return (
    <div>
      <div className="relative isolate -mb-10 overflow-hidden bg-slate-50 py-16">
        <Image
          src={pageImage}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
          preload
        />

        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="flex flex-col items-center gap-8 text-center">
              <Image
                src="https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781273539/Logo_GlowRious_page-0001_gemjsg.png"
                alt="glowrious"
                width={240}
                height={80}
                className="h-auto w-auto object-contain"
              />
            
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

              <div className="mt-8">
                <h2 className="text-lg font-semibold">Product claims</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Sulfate Free, Vegan, Alcohol Free, Cruelty Free, Paraben Free, Hypoallergenic, No Harmful Chemicals,
                  Dermatologically Inspired, Non-Toxic, Daily Use
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    "Sulfate Free",
                    "Vegan",
                    "Alcohol Free",
                    "Cruelty Free",
                    "Paraben Free",
                    "Hypoallergenic",
                    "No Harmful Chemicals",
                    "Dermatologically Inspired",
                    "Non-Toxic",
                    "Daily Use",
                  ].map((claim) => (
                    <div key={claim} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-lg font-bold text-amber-600">
                        &#10003;
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{claim}</p>
                        <p className="mt-1 text-sm text-slate-600">{getClaimDescription(claim)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                    {[
                      ["Deep delivery", "Neosome encapsulation", "Sits mostly on the surface"],
                      ["Encapsulation technology", "Liposomal + niosomal", "Usually none"],
                      ["Multi-ingredient brightening", "11 actives, 4 pathways", "Often 1-2 actives"],
                      ["Skin repair", "Panthenol + bakuchiol", "Rarely included"],
                      ["Hydration", "Built-in", "Variable"],
                      ["Anti-ageing support", "Bakuchiol + vitamin E", "Limited"],
                      ["Safety profile", "Gentle, clean, vegan", "Varies widely"],
                    ].map(([parameter, glowrious, ordinary]) => (
                      <tr key={parameter} className="hover:bg-slate-50">
                        <td className="px-4 py-4 text-sm font-medium text-slate-700">{parameter}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{glowrious}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{ordinary}</td>
                      </tr>
                    ))}
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
