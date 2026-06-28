import type { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";

const pageImage =
  "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781624189/Interview_wall_Flex_For_Website_rexctv.png";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy - GlowRious",
  description:
    "Read GlowRious Privacy Policy to understand how we collect, use, and protect your personal information when you visit our site or purchase our products.",
  path: "/privacy-policy",
  image: pageImage,
  imageAlt: "GlowRious privacy policy",
  keywords: [
    "privacy policy",
    "GlowRious",
    "data protection",
    "privacy",
  ],
});

export default function PrivacyPolicyPage() {
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
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Privacy Policy</h1>
              </div>
            </div>

            <div className="mt-10 space-y-8 text-slate-700">
              

              <div>
                <h2 className="text-xl font-semibold text-slate-900">Privacy Policy</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  This is a starting draft, not legal advice. Every bracketed <strong>[placeholder]</strong> must be replaced with a real value from GlowRious / Yuva Trade Concern before publishing. Have the final version reviewed by a lawyer familiar with Nepal consumer and e-commerce law before it goes live.
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  This Privacy Policy explains how <strong>GlowRious</strong> (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses, shares, and protects information when you visit glowrious.shnmart.com or purchase our products (the &quot;Site&quot;).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We may collect the following categories of information:
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span><strong>Contact details:</strong> name, email address, phone number, and shipping/billing address.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span><strong>Order information:</strong> products purchased, order history, and payment confirmation (we do not store full card numbers: these are processed by <strong>[payment processor name]</strong>).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span><strong>Account information, if you create one:</strong> username, password (stored encrypted), and saved addresses.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span><strong>Communications:</strong> messages you send via email, contact form, or phone, including any details you share about your skin concerns or product questions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span><strong>Technical information:</strong> IP address, browser type, device type, and pages visited, collected automatically via cookies and similar technologies.</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-slate-600">
                  Drafting note: Confirm whether the site uses any analytics tools (e.g., Google Analytics, Meta Pixel) and list them specifically: this affects what must be disclosed here and whether a cookie consent banner is required.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">2. How We Use Your Information</h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>To process and fulfill your orders, including shipping and customer support.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>To respond to inquiries, including skincare questions submitted via <strong>[consultation/contact information]</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>To send order confirmations, shipping updates, and, only with your consent, marketing emails about new products or promotions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>To improve the Site, including troubleshooting technical issues and understanding which pages and products are most useful to visitors.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>To comply with legal obligations, such as tax and accounting recordkeeping.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">3. How We Share Your Information</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We do not sell your personal information. We may share it with:
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Shipping and logistics partners will deliver your order.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Payment processors, to complete transactions securely.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span><strong>[ShnMart]</strong>, since orders are currently completed through <a href="https://shnmart.com" className="text-blue-600 hover:underline">shnmart.com</a>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Service providers who help us operate the Site (e.g. hosting, email delivery), bound by confidentiality obligations.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Legal or regulatory authorities, if required by law.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">4. Cookies and Tracking</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  The Site may use cookies to remember your preferences, keep you logged in, and understand how visitors use the Site. You can disable cookies in your browser settings, though some features may not work correctly without them.
                </p>
                <p className="mt-4 text-sm italic text-slate-600">
                  Drafting note: Add a cookie table here (cookie name, purpose, duration, first/third-party) once analytics and marketing tools are finalized.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">5. Data Retention</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We retain your personal information for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. Order records are typically retained for <strong>[3 years]</strong> for tax and accounting purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">6. Data Security</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">7. Your Rights</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Access the personal information we hold about you.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Request correction of inaccurate information.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Request deletion of your information, subject to legal recordkeeping requirements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-600">•</span>
                    <span>Withdraw consent to marketing communications at any time by clicking “unsubscribe” or contacting us directly.</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed">
                  To exercise these rights, contact us using the details in Section 10.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">8. Children&apos;s Privacy</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  The Site is not directed at children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">9. Changes to This Policy</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time. The “Last updated” date below will reflect the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-900">10. Contact Us</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Questions about this Privacy Policy or your personal information can be directed to:
                </p>
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
