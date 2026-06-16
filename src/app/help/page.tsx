import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Help Center - Orders, Shipping & Product Support",
  description:
    "Get help with GlowRious ordering, shipping, returns, product guidance, and customer support for skincare and haircare purchases.",
  path: "/help",
  keywords: [
    "GlowRious help",
    "GlowRious support",
    "skincare order help",
    "GlowRious shipping",
    "GlowRious returns",
  ],
});

export default function HelpPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Support</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">Help & FAQs</h1>
          <p className="mt-4 text-base text-slate-600">Find answers to common questions about ordering, shipping, and returns.</p>
        </div>

        <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Getting started</h2>
          <p className="text-sm text-slate-700">Browse products, add items to cart, and checkout securely. For more help, contact our support team.</p>

          <h2 className="mt-6 text-xl font-semibold">Ordering</h2>
          <p className="text-sm text-slate-700">Orders are processed within 1-2 business days. You will receive a confirmation email with tracking information.</p>

          <div className="mt-6">
            <Link href="/contact" className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Contact support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
