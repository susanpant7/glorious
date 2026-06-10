import { site } from "@/lib/site";
import { ThreePillars } from "@/components/about/ThreePillars";

export default function AboutPage() {
  const about = site.about;

  return (
    <div>
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-rose-300 flex items-center justify-center text-white text-2xl font-bold">
                G
              </div>
              <div>
                <h1 className="text-2xl font-bold">{site.name}</h1>
                <p className="text-sm text-slate-600">{site.description}</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <p className="text-sm text-slate-700">{about.description}</p>

              <div>
                <h2 className="text-lg font-semibold">What we value</h2>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                  {about.values.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <ThreePillars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

