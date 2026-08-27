import type { Metadata } from "next";
import SuccessStoriesPageClient from "./SuccessStoriesPageClient";
import { aggregateRatingSchema, breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

// Template appends "| AdSkill Consultancy" → final: "Client Success Stories | AdSkill Consultancy" (44 chars ✅)
export const metadata: Metadata = {
  title: "Client Success Stories",
  description:
    "Real success stories from AdSkill Consultancy's 5,000+ satisfied clients. EB-1A, EB-2 NIW, EB-5, E-2 & Green Card approvals. 98% success rate.",
  keywords: [
    "immigration success stories",
    "US visa client reviews",
    "EB-1A approval stories",
    "immigration consultancy reviews",
    "visa approved testimonials",
    "green card success stories",
    "AdSkill Consultancy reviews",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/success-stories",
  },
  openGraph: {
    title: "Client Success Stories | AdSkill Consultancy",
    siteName: "AdSkill Consultancy",
    description:
      "5,000+ satisfied clients. Real visa approval stories — EB-1A, EB-2 NIW, EB-5, E-2 & Green Card. 98% success rate.",
    url: "https://adskillconsultancy.com/success-stories",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://adskillconsultancy.com" },
  { name: "Success Stories", url: "https://adskillconsultancy.com/success-stories" },
]);

export default function SuccessStoriesPage() {
  return (
    <>
      {/* AggregateRating JSON-LD — enables star rating in Google search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(aggregateRatingSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <SuccessStoriesPageClient />
    </>
  );
}
