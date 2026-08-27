import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { localBusinessSchema, breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

// Template appends "| AdSkill Consultancy" → final: "Contact Us | AdSkill Consultancy" (32 chars ✅)
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free immigration consultation with AdSkill Consultancy. Located at 37-13 74th Street, Jackson Heights, NY 11372. Call +1 646-772-8544 or book via Calendly.",
  keywords: [
    "contact immigration consultant",
    "free immigration consultation",
    "immigration consultant Jackson Heights",
    "book immigration consultation",
    "US visa consultant contact",
    "immigration help New York",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com/contact",
  },
  openGraph: {
    title: "Contact Us | AdSkill Consultancy",
    siteName: "AdSkill Consultancy",
    description:
      "Book a free 30-min consultation with US immigration experts. Jackson Heights, NY. Call +1 646-772-8544.",
    url: "https://adskillconsultancy.com/contact",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://adskillconsultancy.com" },
  { name: "Contact", url: "https://adskillconsultancy.com/contact" },
]);

export default function ContactPage() {
  return (
    <>
      {/* LocalBusiness JSON-LD — critical for local SEO and Google Maps */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <ContactPageClient />
    </>
  );
}
