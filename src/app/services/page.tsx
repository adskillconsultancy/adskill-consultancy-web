import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

// Template appends "| AdSkill Consultancy" → final: "US Immigration Services | AdSkill Consultancy" (46 chars ✅)
export const metadata: Metadata = {
  title: "US Immigration Services",
  description:
    "Full range of US immigration services — EB-1A Extraordinary Ability, EB-2 NIW, EB-5 Investor, E-2 Treaty Investor, EB-3 & EB-4. Expert guidance from petition to Green Card.",
  keywords: [
    "US immigration services",
    "EB-1A visa service",
    "EB-2 NIW service",
    "EB-5 investor visa service",
    "E-2 investor visa",
    "EB-3 skilled worker visa",
    "green card services",
    "employment based visa",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/services",
  },
  openGraph: {
    title: "US Immigration Services | AdSkill Consultancy",
    siteName: "AdSkill Consultancy",
    description:
      "EB-1A, EB-2 NIW, EB-5, E-2, EB-3 & EB-4 visa services. Expert immigration guidance from petition to Green Card approval.",
    url: "https://adskillconsultancy.com/services",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://adskillconsultancy.com" },
  { name: "Services", url: "https://adskillconsultancy.com/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <ServicesPageClient />
    </>
  );
}
