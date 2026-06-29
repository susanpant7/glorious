import type { Metadata } from "next";
import { site } from "@/lib/site";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";

const pageImage =
  "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781624189/Interview_wall_Flex_For_Website_rexctv.png";

export const metadata: Metadata = createPageMetadata({
  title: "Refund & Return Policy - GlowRious",
  description:
    "Learn about GlowRious refund and return policy. We want you to be happy with your purchase. Read our clear terms on returns, refunds, and exchanges.",
  path: "/refund-policy",
  image: pageImage,
  imageAlt: "GlowRious refund policy",
  keywords: [
    "refund policy",
    "return policy",
    "GlowRious",
    "customer service",
    "skincare returns",
  ],
});

export default function RefundPolicyPage() {
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
                src="https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781273538/headerlogo_1_p64epf.png"
                alt="glowrious"
                width={240}
                height={80}
                className="h-auto w-auto object-contain"
              />
              <div>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Refund & Return Policy</h1>
              </div>
            </div>

            <div className="mt-10 space-y-8 text-slate-700">
              

              <div>
                <h2 className="text-xl font-semibold text-slate-900">Refund & Return Policy</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We want you to be happy with your GlowRious purchase. This policy explains when and how you can return a product or request a refund.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">Quick Reference</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-200 border border-slate-200">
                      <tr className="bg-slate-50">
                        <td className="px-4 py-3 font-semibold text-slate-900">Return window</td>
                        <td className="px-4 py-3">3 business days from delivery date with proof</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Condition required</td>
                        <td className="px-4 py-3">Unopened, unused, original packaging and seal intact</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-4 py-3 font-semibold text-slate-900">Who pays return shipping</td>
                        <td className="px-4 py-3">GlowRious covers return shipping if the error occurs from our company side</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Refund method</td>
                        <td className="px-4 py-3">Original payment method within 2-3 business days of receiving the returned item</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-4 py-3 font-semibold text-slate-900">Exchanges offered?</td>
                        <td className="px-4 py-3">No, except when the company sends defective or damaged products</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">1. Eligibility for Returns</h2>
                <p className="mt-3 text-sm leading-relaxed">You may request a return or refund if:</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>The product arrives damaged, defective, or incorrect (wrong item shipped).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>You request a return within 48 hours of delivery, and the product is unused, unopened, and in its original packaging with seal intact.</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Due to the personal-care nature of skincare and haircare products, we cannot accept returns of opened or used products, except where the product is defective, for hygiene and safety reasons.
                </p>
                <p className="mt-3 text-xs italic text-slate-500">
                  Drafting note: Hygiene-based return restrictions are standard for cosmetics, but confirm the wording against any consumer protection requirements in Nepal, as some jurisdictions require returns to be allowed even on opened goods within a statutory period.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">2. Non-Returnable Items</h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>Products marked &quot;final sale&quot; or purchased during a clearance promotion.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>Opened or used skincare/haircare products, unless defective.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>Gift cards, if offered.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">3. How to Request a Return</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  To start a return, contact us within the return window with your order number, photos of the product (and packaging, if damaged), and a brief description of the issue:
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:glowrious.info@gmail.com" className="text-blue-600 hover:underline">
                      glowrious.info@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+977-9704509812" className="text-blue-600 hover:underline">
                      +977-9704509812
                    </a>
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  We will confirm whether your request qualifies and provide instructions, including the return address if a physical return is required.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">4. Damaged or Incorrect Items</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  If you receive a damaged, defective, or incorrect item, please contact us within 48-72 hours of delivery with photos of the product and packaging. We will arrange a replacement or full refund, including return shipping costs, at no cost to you.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">5. Refund Processing</h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>Once we receive and inspect your return, we will notify you whether the refund is approved.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>Approved refunds are issued to your original payment method within 2-3 business days. Processing times after that point depend on your bank or payment provider.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">-</span>
                    <span>If you paid via ShnMart checkout, refunds may be subject to ShnMart&apos;s own payment processing timelines in addition to ours.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">6. Exchanges</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We do not currently offer exchanges, except where the company sends defective or damaged products. If your item is defective or damaged, follow the same process as a return and we will confirm the available replacement or refund option.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">7. Shipping Costs</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Original shipping fees are non-refundable except where the return is due to our error (wrong, damaged, or defective item), in which case we cover all shipping costs.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">8. Late or Missing Refunds</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  If you haven&apos;t received a refund after the timeframe above, please first check with your bank or card provider, as processing times vary. If you still have concerns, contact us at{" "}
                  <a href="mailto:glowrious.info@gmail.com" className="text-blue-600 hover:underline">
                    glowrious.info@gmail.com
                  </a>{" "}
                  and we&apos;ll look into it.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-900">9. Contact Us</h2>
                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:glowrious.info@gmail.com" className="text-blue-600 hover:underline">
                      glowrious.info@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+977-9704509812" className="text-blue-600 hover:underline">
                      +977-9704509812
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> {site.contact.address}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-xs text-slate-500 italic">
                  This policy is current as of June 18, 2026. GlowRious reserves the right to update this policy at any time. Please check this page regularly for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
