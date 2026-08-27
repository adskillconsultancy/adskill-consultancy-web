import type { Metadata } from "next";
import FaqsPageClient from "./FaqsPageClient";
import { faqCategories } from "@/lib/faqData";
import { faqPageSchema, breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

// Template appends "| AdSkill Consultancy" → final: "US Immigration FAQs | AdSkill Consultancy" (41 chars ✅)
export const metadata: Metadata = {
  title: "US Immigration FAQs",
  description:
    "Answers to 40+ common US immigration questions — EB-1A eligibility, EB-2 NIW requirements, EB-5 investment, E-2 visa, and Green Card process.",
  keywords: [
    "immigration FAQs",
    "US visa frequently asked questions",
    "EB-1A questions",
    "EB-2 NIW eligibility",
    "EB-5 minimum investment",
    "E-2 visa requirements",
    "green card process",
    "immigration consultant FAQ",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/faqs",
  },
  openGraph: {
    title: "US Immigration FAQs | AdSkill Consultancy",
    siteName: "AdSkill Consultancy",
    description:
      "Answers to 40+ common US immigration questions — EB-1A, EB-2 NIW, EB-5, E-2, EB-3, EB-4 visa categories explained.",
    url: "https://adskillconsultancy.com/faqs",
    type: "website",
  },
};

// Flatten all FAQs from all categories for the FAQPage schema
const allFaqs = faqCategories.flatMap((cat) =>
  cat.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))
);

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://adskillconsultancy.com" },
  { name: "FAQs", url: "https://adskillconsultancy.com/faqs" },
]);

export default function FaqPage() {
  return (
    <>
      {/* FAQPage JSON-LD — enables Google FAQ rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqPageSchema(allFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <FaqsPageClient />
    </>
  );
}
