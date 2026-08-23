"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "E-2 Investor Visa", href: "/services/e-2" },
      { label: "EB-1A Extraordinary Ability", href: "/services/eb-1a" },
      { label: "EB-2 (NIW – National Interest Waiver)", href: "/services/eb-2" },
      { label: "EB-3 Workers", href: "/services/eb-3" },
      { label: "EB-4 Special Immigrants", href: "/services/eb-4" },
      { label: "EB-5 Investor Visa", href: "/services/eb-5" },
      { label: "L1A Transfer Visa", href: "/services/l1a" },
      { label: "Interview Prep", href: "/services/interview-prep" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about/team" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Success Stories", href: "/portfolio/success-stories" },
      { label: "Case Studies", href: "/portfolio/case-studies" },
    ],
  },
  { label: "News", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const TOP_LINKS = [
  { label: "About", href: "/about" },
  { label: "Faqs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

function IconFacebook({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconTwitterX({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/AdskillConsultancyINC",
    icon: IconFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adskillconsultancy",
    icon: IconInstagram,
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/adskillconsultancy",
    icon: IconTwitterX,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/adskill-consultancy",
    icon: IconLinkedIn,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function toggleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* ── Top bar ── */}
      <div className="hidden md:block bg-white border-b border-gray-100 relative">
        <div className="absolute top-0 right-0 bottom-0 w-[50%] bg-brand-primary z-0 hidden lg:block" />
        <div className="mx-auto max-w-[1440px] flex items-stretch relative z-10">
          <div className="flex items-center gap-6 px-6 py-2.5 flex-1 text-sm bg-white">
            <a
              href="mailto:admin@adskillconsultancy.com"
              className="flex items-center gap-2 hover:text-brand-primary transition-colors font-medium text-gray-700"
            >
              <Mail size={16} className="text-brand-teal" />
              admin@adskillconsultancy.com
            </a>
            <span className="flex items-center gap-2 font-medium text-gray-700">
              <MapPin size={16} className="text-brand-teal" />
              37-13 74th Street, Floor 2 Jackson Heights, NY 11372
            </span>
          </div>
          <div className="flex items-center gap-5 px-6 py-2.5 bg-brand-primary text-sm font-medium text-gray-900">
            {TOP_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-gray-700 transition-colors">
                {link.label}
              </Link>
            ))}
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-gray-700 transition-colors ml-2 first-of-type:ml-4">
                <Icon size={15} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="bg-white" aria-label="Main navigation">
        <div className="mx-auto max-w-360 px-6 flex items-center gap-4 h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-6" aria-label="Adskill Consultancy — home">
            <Image 
              src="/adskillconsultancy.png" 
              alt="Adskill Consultancy" 
              width={240} 
              height={60} 
              className="h-14 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-2 flex-1 justify-center" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className="flex items-center gap-1.5 px-4 py-6 text-base font-semibold text-gray-900 hover:text-brand-secondary transition-colors whitespace-nowrap"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === link.label}
                      onClick={() => toggleDropdown(link.label)}
                      onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <ul
                      className={cn(
                        "absolute left-0 top-full min-w-[240px] shadow-xl rounded-b-lg overflow-hidden transition-all duration-200 bg-white border border-gray-100",
                        openDropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                      )}
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            className="block px-5 py-3 text-[15px] font-medium text-gray-700 hover:text-brand-secondary hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-6 text-base font-semibold text-gray-900 hover:text-brand-secondary transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-6 ml-auto shrink-0">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-primary text-brand-dark">
                <Phone size={18} strokeWidth={2.5} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">PHONE:</span>
                <a href="tel:+16467728544" className="text-sm font-bold text-gray-900 hover:text-brand-secondary transition-colors">
                  +1 646-772-8544
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 h-[46px] rounded text-sm font-semibold text-white bg-brand-dark hover:bg-brand-teal transition-colors whitespace-nowrap"
            >
              Contact Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden ml-auto p-2 text-gray-700 hover:text-brand-secondary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          id="mobile-nav"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100",
            mobileOpen ? "max-h-screen" : "max-h-0"
          )}
          aria-hidden={!mobileOpen}
        >
          <ul className="px-6 py-4 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 border-b border-gray-100"
                      onClick={() => toggleDropdown(link.label)}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform", openDropdown === link.label && "rotate-180")}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <ul className="pl-4 mt-1 space-y-1" role="list">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm text-gray-500 hover:text-brand-secondary transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-brand-secondary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-3">
              <a href="tel:+16467728544" className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-secondary text-white shrink-0">
                  <Phone size={15} />
                </span>
                +1 646-772-8544
              </a>
            </li>
            <li className="pt-2">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full rounded px-5 h-10 text-sm font-semibold text-white bg-brand-dark hover:bg-brand-teal transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact Now
              </Link>
            </li>
            <li className="pt-2">
              <div className="flex items-center gap-4 py-2 border-t border-gray-100">
                {TOP_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-brand-secondary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

