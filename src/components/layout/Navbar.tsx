"use client";

import { services } from "@/lib/services";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      ...services.map((s) => ({
        label: s.title,
        href: s.link || `/services/${s.id}`,
      })),
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
    label: "Success Story",
    href: "/success-stories",
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
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconTwitterX({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  const NavContent = (
    <div className="mx-auto max-w-360 px-6 flex items-center gap-4 h-20">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center shrink-0 mr-6"
        aria-label="Adskill Consultancy — home"
        onClick={() => {
          if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}>
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
      <ul
        className="hidden lg:flex items-center gap-2 flex-1 justify-center"
        role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.label} className="relative group">
            {link.children ? (
              <>
                <div
                  className="group/btn flex items-center gap-1.5 px-4 py-6 text-base font-semibold text-gray-900 hover:text-brand-secondary transition-colors whitespace-nowrap relative cursor-default"
                  aria-haspopup="true">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover/btn:rotate-180"
                  />
                  <span className="absolute left-4 right-4 bottom-4 h-0.5 bg-brand-secondary scale-x-0 origin-left transition-transform duration-300 group-hover/btn:scale-x-100"></span>
                </div>
                <ul
                  className={cn(
                    "absolute left-0 top-full shadow-xl rounded-b-lg transition-all duration-300 bg-white border border-gray-100 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto p-4",
                    link.label === "Services"
                      ? "w-150 grid grid-cols-2 gap-x-4 gap-y-2"
                      : "min-w-60 flex flex-col gap-1",
                  )}
                  role="menu">
                  {link.children.map((child) => (
                    <li
                      key={child.href}
                      role="none"
                      className={cn(
                        "relative",
                        child.label === "All Services" &&
                          link.label === "Services"
                          ? "col-span-2 mb-2 pb-2 border-b border-gray-100"
                          : "",
                      )}>
                      <Link
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          "group/item flex items-center justify-between px-4 py-3 text-[14px] font-medium text-gray-700 hover:text-brand-secondary rounded-lg hover:bg-brand-primary/5 transition-all duration-300",
                          child.label === "All Services" &&
                            "text-brand-dark font-bold bg-gray-50",
                        )}>
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {child.label}
                        </span>
                        <ChevronRight
                          size={14}
                          className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-secondary"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={link.href}
                className="group/link block px-4 py-6 text-base font-semibold text-gray-900 hover:text-brand-secondary transition-colors whitespace-nowrap relative"
                onClick={() => {
                  if (window.location.pathname === link.href) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}>
                {link.label}
                <span className="absolute left-4 right-4 bottom-4 h-0.5 bg-brand-secondary scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100"></span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Right: phone + CTA */}
      <div className="hidden lg:flex items-center gap-6 ml-auto shrink-0">
        <a href="tel:+16467728544" className="flex items-center gap-3 group">
          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-primary text-brand-dark shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
            <Phone
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">
              PHONE:
            </span>
            <span className="text-sm font-bold text-gray-900 group-hover:text-brand-secondary transition-colors">
              +1 646-772-8544
            </span>
          </div>
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 h-11.5 rounded text-sm font-semibold text-white bg-brand-dark hover:bg-brand-teal transition-colors whitespace-nowrap">
          Contact Now
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="lg:hidden ml-auto p-2 text-gray-700 hover:text-brand-secondary transition-colors"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        onClick={() => setMobileOpen((v) => !v)}>
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  );

  return (
    <>
      {/* ORIGINAL IN-FLOW HEADER (Scrolls out of view normally) */}
      <header className="relative w-full z-40 bg-white shadow-sm">
        {/* ── Top bar ── */}
        <div className="hidden md:block bg-white border-b border-gray-100 relative">
          <div className="absolute top-0 right-0 bottom-0 w-[50%] bg-brand-primary z-0 hidden lg:block" />
          <div className="mx-auto max-w-360 flex items-stretch relative z-10">
            <div className="flex items-center gap-6 px-6 py-2.5 flex-1 text-sm bg-white">
              <a
                href="mailto:adskillconsultancyinc@gmail.com"
                className="flex items-center gap-2 hover:text-brand-primary transition-colors font-medium text-gray-700">
                <Mail size={16} className="text-brand-teal" />
                adskillconsultancyinc@gmail.com
              </a>
              <span className="flex items-center gap-2 font-medium text-gray-700">
                <MapPin size={16} className="text-brand-teal" />
                37-13 74th Street, Floor 2 Jackson Heights, NY 11372
              </span>
            </div>
            <div className="flex items-center gap-5 px-6 py-2.5 bg-brand-primary text-sm font-medium text-gray-900">
              {TOP_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-700 transition-colors">
                  {link.label}
                </Link>
              ))}
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-gray-700 transition-colors ml-2 first-of-type:ml-4">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav className="bg-white" aria-label="Main navigation">
          {NavContent}
        </nav>

        {/* ── Mobile menu ── */}
        <div
          id="mobile-nav"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 absolute w-full",
            mobileOpen ? "max-h-screen" : "max-h-0",
          )}
          aria-hidden={!mobileOpen}>
          <ul className="px-6 py-4 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 border-b border-gray-100"
                      onClick={() => toggleDropdown(link.label)}
                      aria-expanded={openDropdown === link.label}>
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform",
                          openDropdown === link.label && "rotate-180",
                        )}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <ul className="pl-4 mt-1 space-y-1" role="list">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm text-gray-500 hover:text-brand-secondary transition-colors"
                              onClick={() => setMobileOpen(false)}>
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
                    onClick={() => {
                      setMobileOpen(false);
                      if (window.location.pathname === link.href) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-3">
              <a
                href="tel:+16467728544"
                className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700">
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
                onClick={() => setMobileOpen(false)}>
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
                    onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </header>

      {/* STICKY CLONE - Drops down smoothly after 250px scroll */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 bg-white shadow-md hidden lg:block",
          isSticky
            ? "translate-y-0 transition-transform duration-500 ease-out visible"
            : "-translate-y-full transition-none invisible",
        )}>
        <nav className="bg-white" aria-label="Sticky navigation">
          {NavContent}
        </nav>
      </div>
    </>
  );
}
