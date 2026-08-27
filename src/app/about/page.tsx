import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import { breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

// Template appends "| AdSkill Consultancy" → final: "About Us | AdSkill Consultancy" (30 chars ✅)
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet AdSkill Consultancy's immigration experts. 5,000+ clients helped, 98% success rate. Specialists in EB-1A, EB-2 NIW, EB-5, E-2 & Green Card. Jackson Heights, NY.",
  keywords: [
    "about AdSkill Consultancy",
    "immigration consultancy team",
    "US visa experts",
    "immigration consultants New York",
    "immigration firm Jackson Heights",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/about",
  },
  openGraph: {
    title: "About Us | AdSkill Consultancy",
    siteName: "AdSkill Consultancy",
    description:
      "Meet our team of US immigration experts. 5,000+ successful cases. EB-1A, EB-2 NIW, EB-5 & E-2 specialists.",
    url: "https://adskillconsultancy.com/about",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://adskillconsultancy.com" },
  { name: "About Us", url: "https://adskillconsultancy.com/about" },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <AboutSection />
    </>
  );
}
