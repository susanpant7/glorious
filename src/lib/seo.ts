import type { Metadata } from "next";
import { site } from "@/lib/site";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://glowrious.com").replace(/\/$/, "");

export const defaultOgImage =
  "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781273539/Logo_GlowRious_page-0001_gemjsg.png";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
  imageAlt = `${site.shortName} skincare and beauty products`,
  noIndex = false,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.shortName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
