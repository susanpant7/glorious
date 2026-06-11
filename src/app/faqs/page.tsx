"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "general-1",
    category: "General",
    question: "What is Glowrious?",
    answer: "Glowrious is a premium beauty and personal care platform dedicated to helping you discover authentic, high-quality products and building a supportive community around beauty and self-care."
  },
  {
    id: "general-2",
    category: "General",
    question: "Where is Glowrious located?",
    answer: "We are based in Suncity Road, Kageshwori Manohara - 09, Kathmandu, Nepal. However, we serve customers across the region with online delivery services."
  },
  {
    id: "general-3",
    category: "General",
    question: "How long has Glowrious been in business?",
    answer: "Glowrious was founded in 2020 and has been growing steadily since then. We've served thousands of customers and expanded our product range significantly."
  },

  {
    id: "products-1",
    category: "Products",
    question: "Are all products authentic?",
    answer: "Yes, absolutely. We source all our products directly from authorized distributors and manufacturers. Every product is genuine and comes with original packaging and warranties."
  },
  {
    id: "products-2",
    category: "Products",
    question: "Do you offer skincare products?",
    answer: "Yes, we have an extensive range of skincare products including cleansers, toners, serums, moisturizers, masks, and specialized treatments from trusted brands."
  },
  {
    id: "products-3",
    category: "Products",
    question: "How do you select your products?",
    answer: "We carefully curate every product based on quality standards, customer reviews, brand reputation, and ingredient safety. Our team tests and verifies products before adding them to our collection."
  },
  {
    id: "products-4",
    category: "Products",
    question: "Are there cruelty-free products available?",
    answer: "Yes, we offer a selection of cruelty-free and eco-friendly beauty products. You can filter products by these criteria on our website."
  },
  {
    id: "products-5",
    category: "Products",
    question: "What is the GlowRious Skin Lightening Serum?",
    answer: "The GlowRious Skin Lightening Serum is a next-generation depigmentation and brightening serum powered by NEOSOME™ Technology. It contains eleven clinically respected active ingredients working across four functions: brightening, exfoliation, skin repair, and antioxidant protection to target dark spots, hyperpigmentation, melasma, uneven skin tone, and dullness."
  },
  {
    id: "products-6",
    category: "Products",
    question: "What is NEOSOME™ Technology?",
    answer: "NEOSOME™ is an advanced encapsulation system that wraps each active ingredient inside microscopic liposomal and niosomal carriers. These carriers protect fragile actives like Vitamin C from breaking down, carry them deeper into the skin layers where pigment is actually formed, and release them gradually for a longer-lasting effect. Most ordinary serums leave actives on the surface where they quickly evaporate or degrade. NEOSOME™ ensures they reach where they work."
  },
  {
    id: "products-7",
    category: "Products",
    question: "What are the eleven active ingredients in the serum?",
    answer: "The serum contains: Tranexamic Acid, Alpha Arbutin, Kojic Acid Dipalmitate, Niacinamide (Vitamin B3), and Liquorice Extract for brightening; Glycolic Acid and Mandelic Acid (AHAs) for gentle exfoliation; Bakuchiol and D-Panthenol (Pro-Vitamin B5) for repair and renewal; and NIO-VCS (Vitamin C derivative) and Vitamin E for antioxidant protection."
  },
  {
    id: "products-8",
    category: "Products",
    question: "What skin concerns does it address?",
    answer: "The serum is clinically positioned to address melasma, sun spots, age spots, acne marks, post-inflammatory hyperpigmentation (PIH), and dull or uneven skin tone. It is suitable for anyone who experiences pigmentation, tanning, or a lacklustre complexion."
  },
  {
    id: "products-9",
    category: "Products",
    question: "Is the serum suitable for sensitive skin?",
    answer: "Yes, the formula uses gentle mandelic acid rather than more aggressive exfoliants, and includes soothing actives like liquorice extract and D-Panthenol. The NEOSOME™ system's controlled-release mechanism further reduces the risk of irritation. We recommend doing a patch test on the inner arm before full facial use and starting with an application every other night."
  },
  {
    id: "products-10",
    category: "Products",
    question: "Is GlowRious vegan and cruelty-free?",
    answer: "Absolutely. The GlowRious Skin Lightening Serum is 100% vegan, cruelty-free, paraben-free, sulfate-free, and alcohol-free. It contains no harmful chemicals and is formulated for daily use."
  },
  {
    id: "products-11",
    category: "Products",
    question: "How do I use the serum?",
    answer: "Use the serum at night as part of your evening skincare routine. Step 1: Cleanse your face and pat dry. Step 2: Dispense 2–3 drops onto your fingertips. Step 3: Massage gently and evenly across the face. Step 4: Allow a few minutes for it to absorb before applying moisturiser. Step 5: Every morning, apply a broad-spectrum sunscreen (SPF 30+)."
  },
  {
    id: "products-12",
    category: "Products",
    question: "Why must I use sunscreen during the day?",
    answer: "Brightened and treated skin is more sensitive to UV radiation. Without daily sunscreen, sun exposure can reactivate melanin production and undo the serum's benefits. Sunscreen is not optional; it is an essential part of any brightening routine."
  },
  {
    id: "products-13",
    category: "Products",
    question: "How much product should I use per application?",
    answer: "2–3 drops is sufficient for the full face. Do not over-apply. The NEOSOME™ encapsulation system means a small amount goes a long way."
  },
  {
    id: "products-14",
    category: "Products",
    question: "Can I use it with other skincare products?",
    answer: "Yes, apply the serum to clean, dry skin, then follow with a moisturiser. For the first few weeks, avoid layering with strong retinoids to allow your skin to adjust. Once your skin has built tolerance, gentle layering is generally fine. Always patch test new combinations."
  },
  {
    id: "products-15",
    category: "Products",
    question: "Can men use this serum?",
    answer: "Absolutely. Pigmentation, tan lines, dullness, and uneven tone affect everyone regardless of gender. The simple nightly routine, 2–3 drops, sunscreen by day, suits all genders and most skin types."
  },
  {
    id: "products-16",
    category: "Products",
    question: "Will it make my skin thinner or more fragile?",
    answer: "No, the actives in GlowRious are cosmetic brightening and exfoliating agents, not steroids. Niacinamide and D-Panthenol in the formula actively support and strengthen the skin barrier. Used as directed with daily sunscreen, the serum promotes a healthier skin barrier over time."
  },
  {
    id: "products-17",
    category: "Products",
    question: "Where is GlowRious available?",
    answer: "GlowRious is currently focused on establishing a strong presence across Nepal, available through select retail channels, pharmacies, and beauty stores. The brand's vision includes expanding its reach across the region and eventually beyond. Contact Yuva Trade Concern for authorised stockist information."
  },
  {
    id: "products-18",
    category: "Products",
    question: "Does GlowRious offer skin consultation or assessment services?",
    answer: "Yes, a cornerstone of the GlowRious brand is education and personalised customer care. The GlowRious Academy and Yuva Trade Concern offer skin-test programmes and customer consultations to help customers understand their specific concerns and identify the most suitable solutions. Ask your nearest GlowRious retailer or contact us directly for details."
  },

  {
    id: "ordering-1",
    category: "Ordering & Delivery",
    question: "How do I place an order?",
    answer: "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide delivery details and choose your preferred payment method."
  },
  {
    id: "ordering-2",
    category: "Ordering & Delivery",
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery (where available). All transactions are secure and encrypted."
  },
  {
    id: "ordering-3",
    category: "Ordering & Delivery",
    question: "How long does delivery take?",
    answer: "Standard delivery typically takes 2-5 business days depending on your location. We also offer express delivery options for faster shipping. Delivery times are shown during checkout."
  },
  {
    id: "ordering-4",
    category: "Ordering & Delivery",
    question: "Do you deliver internationally?",
    answer: "Currently, we primarily serve customers within Nepal and nearby regions. We're working on expanding our international shipping capabilities. Contact us for more information."
  },
  {
    id: "ordering-5",
    category: "Ordering & Delivery",
    question: "Is there a minimum order value?",
    answer: "No, there's no minimum order value. You can order as little or as much as you'd like. However, delivery charges may apply for very small orders."
  },

  {
    id: "returns-1",
    category: "Returns & Refunds",
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most products. Items must be unused, unopened, and in original packaging. Some products may have different policies due to hygiene reasons."
  },
  {
    id: "returns-2",
    category: "Returns & Refunds",
    question: "How do I initiate a return?",
    answer: "Contact our customer service team with your order number and reason for return. We'll provide you with return instructions and a prepaid shipping label if applicable."
  },
  {
    id: "returns-3",
    category: "Returns & Refunds",
    question: "How long does a refund take?",
    answer: "Once we receive and inspect your returned item, refunds are processed within 5-7 business days. The refund will be credited back to your original payment method."
  },
  {
    id: "returns-4",
    category: "Returns & Refunds",
    question: "What if I receive a damaged product?",
    answer: "We guarantee safe packaging. If you receive a damaged product, contact us immediately with photos. We'll replace it or issue a refund promptly."
  },

  {
    id: "account-1",
    category: "Account",
    question: "Do I need to create an account?",
    answer: "Creating an account is optional. However, it allows you to track orders, save favorites, and access personalized recommendations. You can also checkout as a guest."
  },
  {
    id: "account-2",
    category: "Account",
    question: "Is my personal information secure?",
    answer: "Yes, we use industry-standard encryption and security measures to protect your personal and payment information. Your privacy is our top priority."
  },
  {
    id: "account-3",
    category: "Account",
    question: "Can I change my account details?",
    answer: "Yes, you can update your personal information, delivery address, and payment methods anytime from your account settings."
  },

  {
    id: "other-1",
    category: "Other",
    question: "Do you offer gift cards?",
    answer: "Yes, gift cards are available. They make perfect gifts for beauty enthusiasts and can be used for any products on our platform. Contact us for details."
  },
  {
    id: "other-2",
    category: "Other",
    question: "How can I contact customer service?",
    answer: "You can reach us via email at glowrious.info@gmail.com or call +977-9704509812. We're happy to help with any questions or concerns."
  },
  {
    id: "other-3",
    category: "Other",
    question: "Do you have a loyalty program?",
    answer: "We're developing an exciting loyalty program to reward our regular customers. Stay tuned for announcements!"
  },
  {
    id: "other-4",
    category: "Other",
    question: "Can I become a brand partner or reseller?",
    answer: "We're always interested in partnerships with quality brands and retailers. Contact our team at glowrious.info@gmail.com with partnership inquiries."
  }
];

const categories = ["All", "General", "Products", "Ordering & Delivery", "Returns & Refunds", "Account", "Other"];

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
          <p className="mt-2 text-lg text-slate-600">Find answers to common questions about Glowrious</p>
        </div>
      </div>

      <div className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-amber-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map(item => (
              <div
                key={item.id}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:border-amber-300 transition"
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-slate-50 transition text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                    <p className="mt-1 text-sm text-amber-600 font-medium">{item.category}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="border-t border-slate-200 px-6 py-4 bg-slate-50">
                    <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Need Help */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="mb-6">Can't find what you're looking for? Our customer service team is here to help!</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-sm opacity-90">glowrious.info@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="mt-1 text-sm opacity-90">+977-9704509812</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="mt-1 text-sm opacity-90">Suncity Road, Kageshwori Manohara - 09, Kathmandu</p>
              </div>
              <div>
                <p className="font-semibold">Hours</p>
                <p className="mt-1 text-sm opacity-90">Mon-Sat: 10 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
