import Link from "next/link";
import { site } from "@/lib/site";

export default function ContactPage() {
  const c = site.contact;

  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Get in touch</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">Contact Us</h1>
          <p className="mt-4 text-base text-slate-600">Questions about an order? Need product advice? We're here to help.</p>
        </div>

        <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-rose-300 flex items-center justify-center text-white text-2xl font-bold">
              G
            </div>
            <div>
              <h2 className="text-xl font-semibold">{site.name}</h2>
              <p className="text-sm text-slate-700">{site.description}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="mt-3 text-sm text-slate-700">Address: {c.address}</p>
              <p className="mt-2 text-sm text-slate-700">Phone: {c.phone}</p>
              <p className="mt-2 text-sm text-slate-700">Email: <a href={`mailto:${c.email}`} className="text-amber-600">{c.email}</a></p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Business hours</h3>
              <p className="mt-3 text-sm text-slate-700">{c.hours.weekday}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Customer support</h3>
            <p className="mt-3 text-sm text-slate-700">For order enquiries, returns, or product questions, email us at <a href={`mailto:${c.email}`} className="text-amber-600">{c.email}</a> or call {c.phone}.</p>
            <p className="mt-4 text-sm">Want to browse products? <Link href="/products" className="text-amber-600 hover:underline">View our catalog</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
