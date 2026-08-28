const BASE_URL = "https://adskillconsultancy.com";

// ─── Organization / LocalBusiness ───────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LegalService"],
    "@id": `${BASE_URL}/#organization`,
    name: "AdSkill Consultancy Inc.",
    alternateName: "AdSkill Consultancy",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/adskillconsultancy.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/adskillconsultancy.png`,
    description:
      "AdSkill Consultancy Inc. is a U.S.-based immigration consulting firm specializing in EB-1A, EB-2 NIW, EB-3, EB-4, EB-5, E-2 investor visas, and Green Card pathways for professionals and investors.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "37-13 74th Street, Floor 2",
      addressLocality: "Jackson Heights",
      addressRegion: "NY",
      postalCode: "11372",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7468,
      longitude: -73.8912,
    },
    telephone: "+1-425-540-7996",
    email: "admin@adskillconsultancy.com",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceArea: "Worldwide (US visa applications from any country)",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/AdskillConsultancyINC",
      "https://www.instagram.com/adskillconsultancyinc/",
      "https://www.tiktok.com/@adskill.consultancy",
      "https://www.linkedin.com/company/adskillconsultancyinc/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "US Immigration Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "EB-1A Extraordinary Ability Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "EB-2 National Interest Waiver (NIW)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "EB-3 Skilled Worker Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "EB-4 Special Immigrants Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "EB-5 Investor Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-2 Treaty Investor Visa" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// ─── WebSite / Sitelinks Search ───────────────────────────────────────────

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "AdSkill Consultancy",
    description: "Expert US immigration consultancy — EB-1A, EB-2 NIW, EB-5, E-2, Green Card pathways",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── FAQ Page ──────────────────────────────────────────────────────────────

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Breadcrumb ────────────────────────────────────────────────────────────

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Service ───────────────────────────────────────────────────────────────

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Immigration Consulting",
  };
}

// ─── Blog Article ──────────────────────────────────────────────────────────

export function blogPostSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: "AdSkill Consultancy Inc.",
      url: BASE_URL,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// ─── Local Business (for Contact page) ────────────────────────────────────

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LegalService"],
    name: "AdSkill Consultancy Inc.",
    image: `${BASE_URL}/adskillconsultancy.png`,
    "@id": `${BASE_URL}/#localbusiness`,
    url: BASE_URL,
    telephone: "+1-425-540-7996",
    email: "admin@adskillconsultancy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "37-13 74th Street, Floor 2",
      addressLocality: "Jackson Heights",
      addressRegion: "NY",
      postalCode: "11372",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7468,
      longitude: -73.8912,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/AdskillConsultancyINC",
      "https://www.instagram.com/adskillconsultancyinc/",
      "https://www.linkedin.com/company/adskillconsultancyinc/",
    ],
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  };
}

// ─── Aggregate Rating / Reviews ────────────────────────────────────────────

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AdSkill Consultancy Inc.",
    url: BASE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "500",
      description: "Client reviews from Google and Facebook for US immigration consultancy services.",
    },
  };
}

// ─── Helper: Render JSON-LD as script tag string ────────────────────────────

export function jsonLdScript(data: object) {
  return JSON.stringify(data);
}
