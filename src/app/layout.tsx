import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GlobalCTA from "@/components/GlobalCTA";
import { organizationSchema, websiteSchema, jsonLdScript } from "@/lib/jsonld";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://adskillconsultancy.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AdSkill Consultancy — US Immigration Experts",
    template: "%s | AdSkill Consultancy",
  },
  description:
    "Expert US immigration consultancy — EB-1A, EB-2 NIW, EB-5, E-2 & Green Card. 5,000+ clients. 98% success rate. Jackson Heights, NY.",
  keywords: [
    "US immigration consultancy",
    "immigration consultant New York",
    "EB-1A extraordinary ability visa",
    "EB-2 NIW national interest waiver",
    "EB-5 investor visa",
    "E-2 investor visa",
    "Green Card consultant",
    "visa consultancy Jackson Heights",
    "US visa expert",
    "immigration attorney New York",
    "employment based green card",
  ],
  authors: [{ name: "AdSkill Consultancy Inc.", url: BASE_URL }],
  creator: "AdSkill Consultancy Inc.",
  publisher: "AdSkill Consultancy Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "AdSkill Consultancy",
    title: "AdSkill Consultancy — US Immigration Experts",
    description:
      "EB-1A, EB-2 NIW, EB-5, E-2 & Green Card experts. 5,000+ clients. 98% success rate. Jackson Heights, NY.",
    images: [
      {
        url: "/adskillconsultancy.png",
        width: 1200,
        height: 630,
        alt: "AdSkill Consultancy Inc. — US Immigration Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdSkill Consultancy — US Immigration Experts",
    description:
      "EB-1A, EB-2 NIW, EB-5, E-2 & Green Card experts. 5,000+ clients. 98% success rate.",
    images: ["/adskillconsultancy.png"],
    creator: "@adskillconsultancy",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your Google Search Console verification token here when ready
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased overflow-x-clip`}
      suppressHydrationWarning
    >
      <head>
        {/* Organization JSON-LD — sitewide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationSchema()) }}
        />
        {/* WebSite JSON-LD — enables Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-clip">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <GlobalCTA />
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
