import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlobalLoader } from "@/components/ui/GlobalLoader";
import { TopProgressBar } from "@/components/ui/TopProgressBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glorious",
  description: "Glorious Health Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <Header />
        <TopProgressBar />
        <GlobalLoader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
