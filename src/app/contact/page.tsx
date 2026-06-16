import Link from "next/link";
import { site } from "@/lib/site";
import Image from "next/image";

const pageImage =
  "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781624189/Interview_wall_Flex_For_Website_rexctv.png";

export default function ContactPage() {
  const c = site.contact;

  return (
    <div className="relative isolate -mb-10 overflow-hidden bg-slate-50 py-16">
      <Image
        src={pageImage}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
        preload
      />

      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Get in touch</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">Contact Us</h1>
          <p className="mt-4 text-base text-slate-600">Questions about an order? Need product advice? We're here to help.</p>
        </div>

        <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781273538/headerlogo_1_p64epf.png"
              alt="glowrious"
              width={180}
              height={60}
              className="h-auto w-auto object-contain"
            />
          </div>

          <div className="mt-6 grid gap-6">
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="mt-3 text-sm text-slate-700">Address: {c.address}</p>
              <p className="mt-2 text-sm text-slate-700">Phone: {c.phone}</p>
              <p className="mt-2 text-sm text-slate-700">
                Email:{" "}
                <a href={`mailto:${c.email}`} className="text-amber-600">
                  {c.email}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Customer support</h3>
            <p className="mt-3 text-sm text-slate-700">
              For order enquiries, returns, or product questions, email us at{" "}
              <a href={`mailto:${c.email}`} className="text-amber-600">
                {c.email}
              </a>{" "}
              or call {c.phone}.
            </p>
            <p className="mt-4 text-sm">
              Want to browse products?{" "}
              <Link href="/products" className="text-amber-600 hover:underline">
                View our catalog
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
