import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { GlobalLoader } from "@/components/ui/GlobalLoader";
import { TopProgressBar } from "@/components/ui/TopProgressBar";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "GlowRious",
  description: "Chasing your glow",
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
