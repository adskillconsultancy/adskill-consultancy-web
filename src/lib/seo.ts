import type { Metadata } from "next";

const BASE_URL = "https://adskillconsultancy.com";
const BRAND = "AdSkill Consultancy";
const BRAND_SUFFIX = `| ${BRAND}`;
const DEFAULT_OG_IMAGE = `${BASE_URL}/adskillconsultancy.png`;

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}

/**
 * Builds a full Next.js Metadata object for a given page.
 * Includes OG, Twitter, canonical, keywords, and robots directives.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
}: PageSEO): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: `${title} ${BRAND_SUFFIX}`,
    description,
    keywords: [
      "US immigration consultancy",
      "immigration consultant New York",
      "green card consultant",
      "visa consultancy Jackson Heights",
      "US visa expert",
      ...keywords,
    ],
    authors: [{ name: BRAND, url: BASE_URL }],
    creator: BRAND,
    publisher: BRAND,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: `${title} ${BRAND_SUFFIX}`,
      description,
      url,
      siteName: BRAND,
      locale: "en_US",
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${BRAND}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} ${BRAND_SUFFIX}`,
      description,
      images: [ogImage],
      creator: "@adskillconsultancy",
      site: "@adskillconsultancy",
    },
  };
}
