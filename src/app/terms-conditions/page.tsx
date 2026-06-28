import type { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";

const pageImage =
  "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781624189/Interview_wall_Flex_For_Website_rexctv.png";

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions - GlowRious",
  description:
    "Read GlowRious Terms and Conditions. Understand the rules governing your use of our website and purchase of our skincare and haircare products.",
  path: "/terms-conditions",
  image: pageImage,
  imageAlt: "GlowRious terms and conditions",
  keywords: [
    "terms and conditions",
    "GlowRious",
    "terms of service",
    "legal",
  ],
});

export default function TermsConditionsPage() {
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
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Terms and Conditions</h1>
              </div>
            </div>

            <div className="mt-10 space-y-8 text-slate-700">
           

              <div>
                <h2 className="text-xl font-semibold text-slate-900">Terms and Conditions</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  This is a starting draft, not legal advice. Every bracketed <strong>[placeholder]</strong> must be replaced with a real value from GlowRious / Yuva Trade Concern before publishing. Have the final version reviewed by a lawyer familiar with Nepal consumer and e-commerce law before it goes live.
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  These Terms and Conditions (&quot;Terms&quot;) govern your use of glowrious.shnmart.com (the &quot;Site&quot;) and any purchase of products from <strong>[GlowRious]</strong> (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By accessing the Site or placing an order, you agree to these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">1. About GlowRious</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  GlowRious is a skincare and haircare brand owned and operated by <strong>[Yuva Trade Concern]</strong>, based at <strong>[Suncity Road, Kageshwori Manohara - 09, Kathmandu, Nepal]</strong>. Products are currently sold via <strong>[shnmart.com]</strong>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">2. Eligibility</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  You must be at least 18 years old, or have the consent of a parent or legal guardian, to place an order on the Site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">3. Products and Descriptions</h2>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>We make reasonable efforts to display product details, ingredients, and images accurately, but slight variations in color or packaging may occur.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Product results vary by individual; statements on the Site are not guarantees of specific outcomes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Skincare and haircare products are intended for external cosmetic use only and are not a substitute for medical advice, diagnosis, or treatment.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>We recommend a patch test before first use of any new product, and discontinuing use if irritation occurs.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">4. Orders and Payment</h2>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud or pricing errors.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Prices are listed in <strong>[NPR]</strong> and are subject to change without notice. Prices at the time of order confirmation will apply.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Payment is processed through <strong>[payment processor/ShnMart checkout]</strong>. By placing an order, you confirm that the payment information provided is accurate and that you are authorized to use the chosen payment method.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">5. Shipping and Delivery</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Estimated delivery timelines and shipping charges are set out on our <strong>[Shipping Policy / FAQ]</strong> page. Delivery dates are estimates only; we are not liable for delays caused by couriers, customs, weather, or other circumstances beyond our reasonable control.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">6. Returns and Refunds</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Returns, exchanges, and refunds are governed by our separate Refund Policy, available at <strong>[link to Refund Policy page]</strong>, which forms part of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">7. Intellectual Property</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  All content on the Site, including text, graphics, logos, product names, images, and all products name and branding, is the property of Yuva Trade Concern or its licensors, and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from this content without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">8. User Conduct</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  When using the Site, you agree not to:
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Use the Site for any unlawful purpose or in violation of these Terms.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Attempt to gain unauthorized access to the Site, its systems, or other users&apos; accounts.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Post or transmit any harmful, defamatory, or infringing content through any contact or review feature.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Misrepresent your identity or affiliation with GlowRious.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">9. Reviews and Testimonials</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  If we enable customer reviews or testimonials, you grant us a non-exclusive, royalty-free license to display, reproduce, and use submitted content for marketing purposes, unless you indicate otherwise in writing. We reserve the right to remove reviews that are false, abusive, or violate these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">10. Limitation of Liability</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  To the maximum extent permitted by applicable law, GlowRious / shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or our products, including but not limited to allergic reactions resulting from undisclosed sensitivities or misuse of products contrary to label instructions.
                </p>
                <p className="mt-3 text-xs text-slate-500 italic">
                  Drafting note: This section should be reviewed by a lawyer, liability limitations for cosmetic products often have specific requirements under local consumer protection law, and cannot fully exclude liability for personal injury caused by negligence or defective products in most jurisdictions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">11. Indemnification</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  You agree to indemnify and hold harmless GlowRious, its officers, employees, and partners from any claims, damages, or expenses arising from your violation of these Terms or misuse of the Site or products.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">12. Governing Law</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  These Terms are governed by the laws of <strong>[Nepal/applicable jurisdiction]</strong>, without regard to conflict-of-law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of <strong>[city/jurisdiction]</strong>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">13. Changes to These Terms</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We may revise these Terms at any time by updating this page. Continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-900">14. Contact Us</h2>
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
                    <strong>Address:</strong> <strong>[Suncity Road, Kageshwori Manohara - 09, Kathmandu, Nepal]</strong>
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-xs text-slate-500 italic">
                  Last updated: June 25, 2026 10:54 PM +05:45
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
