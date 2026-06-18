import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { GlobalLoader } from "@/components/ui/GlobalLoader";
import { TopProgressBar } from "@/components/ui/TopProgressBar";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { defaultOgImage } from "@/lib/seo";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://glowrious.com"),
  applicationName: "GlowRious",
  title: {
    default: "Nepal's Dermatology Tested Skin & Haircare | GlowRious",
    template: "%s | GlowRious",
  },
  description:
    "GlowRious brings dermatologist-tested skin &haircare, including brightening serums & night cream. Vegan, cruelty-free, and made for Nepal's skin. Shop now! ",
  category: "beauty",
  creator: "GlowRious",
  publisher: "Yuva Trade Concern",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Nepal's Dermatology Tested Skin & Haircare | GlowRious",
    description:
      "GlowRious brings dermatologist-tested skin &haircare, including brightening serums & night cream. Vegan, cruelty-free, and made for Nepal's skin. Shop now! ",
    url: "/",
    siteName: "GlowRious",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "GlowRious skincare and beauty products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal's Dermatology Tested Skin & Haircare | GlowRious",
    description:
      "GlowRious brings dermatologist-tested skin &haircare, including brightening serums & night cream. Vegan, cruelty-free, and made for Nepal's skin. Shop now! ",
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <Header />
        <Breadcrumb />
        <TopProgressBar />
        <GlobalLoader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
