import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "US Immigration Services — EB-1A, EB-2 NIW, EB-5, E-2 & Green Card",
  description:
    "Explore AdSkill Consultancy's full range of US immigration services: EB-1A Extraordinary Ability, EB-2 National Interest Waiver, EB-5 Investor Visa, E-2 Treaty Investor, EB-3, EB-4, and Green Card pathways.",
  keywords: [
    "US immigration services",
    "EB-1A visa service",
    "EB-2 NIW service",
    "EB-5 investor visa service",
    "E-2 investor visa",
    "EB-3 skilled worker visa",
    "green card services",
    "employment based visa",
    "immigration visa types",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/services",
  },
  openGraph: {
    title: "US Immigration Services — EB-1A, EB-2 NIW, EB-5, E-2 & Green Card",
    description:
      "Full range of US immigration services — EB-1A, EB-2 NIW, EB-5, E-2, EB-3, EB-4. Expert guidance from petition to Green Card.",
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
