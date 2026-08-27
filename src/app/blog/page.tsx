import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

// Template appends "| AdSkill Consultancy" → final: "Immigration Blog & Visa Updates 2026 | AdSkill Consultancy" (58 chars ✅)
export const metadata: Metadata = {
  title: "Immigration Blog & Visa Updates 2026",
  description:
    "Latest US immigration news, EB-1A, EB-2 NIW, EB-5 & E-2 visa updates, Green Card tips, and expert guides for 2026 applicants.",
  keywords: [
    "US immigration blog",
    "visa updates 2026",
    "EB-1A guide",
    "EB-2 NIW guide 2026",
    "EB-5 investor visa news",
    "E-2 visa update",
    "green card tips",
    "immigration news 2026",
    "H-1B visa changes",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/blog",
  },
  openGraph: {
    title: "Immigration Blog & Visa Updates 2026",
    siteName: "AdSkill Consultancy",
    description:
      "Expert immigration insights — EB-1A, EB-2 NIW, EB-5, E-2, H-1B, O-1, Green Card guides and 2026 policy updates.",
    url: "https://adskillconsultancy.com/blog",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://adskillconsultancy.com" },
  { name: "Blog", url: "https://adskillconsultancy.com/blog" },
]);

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <BlogPageClient />
    </>
  );
}
