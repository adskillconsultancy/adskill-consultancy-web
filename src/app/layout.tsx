import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import GlobalCTA from "@/components/GlobalCTA";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adskill Consultancy Inc.",
  description: "We help professionals and investors navigate every US employment-based visa pathway - from petition to Green Card.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased overflow-x-clip`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-clip">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <GlobalCTA />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
