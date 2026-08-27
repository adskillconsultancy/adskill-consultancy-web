import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import { breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Us — AdSkill Consultancy | US Immigration Experts",
  description:
    "Learn about AdSkill Consultancy Inc., our team of immigration experts, our mission, and our track record of 5,000+ successful clients with a 98% visa approval rate. Based in Jackson Heights, NY.",
  keywords: [
    "about AdSkill Consultancy",
    "immigration consultancy team",
    "US visa experts",
    "immigration consultants New York",
    "immigration firm Jackson Heights",
    "expert visa consultants",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/about",
  },
  openGraph: {
    title: "About Us — AdSkill Consultancy Inc.",
    description:
      "Meet the team behind 5,000+ successful US visa approvals. AdSkill Consultancy — immigration experts in Jackson Heights, NY.",
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
