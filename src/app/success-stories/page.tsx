import type { Metadata } from "next";
import SuccessStoriesPageClient from "./SuccessStoriesPageClient";
import { aggregateRatingSchema, breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Client Success Stories — 5,000+ Happy US Visa Clients",
  description:
    "Read real success stories from AdSkill Consultancy's 5,000+ satisfied clients. See how we helped professionals and investors achieve US visas — EB-1A, EB-2 NIW, EB-5, E-2, and Green Card approvals.",
  keywords: [
    "immigration success stories",
    "US visa client reviews",
    "EB-1A approval stories",
    "immigration consultancy reviews",
    "visa approved testimonials",
    "green card success stories",
    "AdSkill Consultancy reviews",
    "immigration consultant testimonials",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/success-stories",
  },
  openGraph: {
    title: "Client Success Stories — 5,000+ Happy US Visa Clients",
    description:
      "Real client reviews and success stories from AdSkill Consultancy. 98% success rate. 2,500+ visas approved.",
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
