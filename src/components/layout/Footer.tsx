"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconTikTok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.91-.65 3.8-1.85 5.25-1.21 1.48-2.92 2.45-4.8 2.78-1.87.34-3.83-.06-5.43-1.07-1.63-1.03-2.86-2.58-3.41-4.42-.55-1.85-.38-3.87.49-5.59.88-1.74 2.45-3.09 4.31-3.72 1.83-.62 3.84-.66 5.68-.07v4.12c-.5-.22-1.05-.33-1.6-.33-1.43 0-2.73.83-3.33 2.12-.6 1.3-.43 2.85.45 3.99.88 1.13 2.4 1.63 3.84 1.25 1.44-.37 2.47-1.61 2.59-3.09V.02h-1.01z"/>
    </svg>
  );
}

function IconLinkedIn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-8 text-gray-300 relative overflow-hidden">
      {/* Decorative background subtle map overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: About & Logo */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block bg-white p-4 rounded-xl w-fit shadow-sm">
              <Image 
                src="/adskillconsultancy.png" 
                alt="Adskill Consultancy" 
                width={200} 
                height={50} 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              We help professionals and investors navigate every US employment-based visa pathway — from petition to Green Card.
            </p>
            
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/AdskillConsultancyINC" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all duration-300">
                <IconFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/adskillconsultancyinc/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all duration-300">
                <IconInstagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@adskill.consultancy" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all duration-300">
                <IconTikTok size={18} />
              </a>
              <a href="https://www.linkedin.com/company/adskillconsultancyinc/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all duration-300">
                <IconLinkedIn size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Important Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              Important Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-primary hover:translate-x-1 transition-all inline-block">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-primary hover:translate-x-1 transition-all inline-block">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-brand-primary hover:translate-x-1 transition-all inline-block">Services</Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-brand-primary hover:translate-x-1 transition-all inline-block">FAQs</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-brand-primary hover:translate-x-1 transition-all inline-block">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-primary hover:translate-x-1 transition-all inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info & CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              Contact Info
            </h3>
            
            <ul className="flex flex-col gap-4 text-sm mb-6">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-brand-primary shrink-0 mt-0.5" size={18} />
                <span>37-13 74th Street, Floor 2<br/>Jackson Heights, NY 11372</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-brand-primary shrink-0" size={18} />
                <a href="tel:+16467728544" className="hover:text-white transition-colors">+1 646-772-8544</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-primary shrink-0" />
                <a href="mailto:adskillconsultancyinc@gmail.com" className="hover:text-white transition-colors">adskillconsultancyinc@gmail.com</a>
              </li>
            </ul>

            <div className="flex flex-col gap-3">
              <a 
                href="https://calendly.com/adskillconsultancyinc/30-minutes-consulation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-primary text-brand-dark px-4 py-2.5 rounded text-sm font-bold hover:bg-white transition-colors"
              >
                Book 30-Min Strategy Session
              </a>
              <Link 
                href="/check-eligibility"
                className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-4 py-2.5 rounded text-sm font-bold hover:bg-white/10 transition-colors"
              >
                Check Your Eligibility
              </Link>
            </div>
          </div>

          {/* Col 4: Location Map */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              Our Location
            </h3>
            <div className="w-full h-[220px] rounded-xl overflow-hidden border-2 border-white/10 shadow-lg relative bg-white/5">
              <iframe 
                src="https://maps.google.com/maps?q=37-13%2074th%20Street,%20Jackson%20Heights,%20NY%2011372&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="AdSkill Consultancy Location"
              />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center lg:text-left">
            <p>
              © 2026 <Link href="/" className="text-white hover:text-brand-primary transition-colors">Adskill Consultancy Inc.</Link> All rights reserved. Developed by Adskill Technology.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Link href="/privacy-policy-2" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <span>|</span>
              <Link href="/legal-disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</Link>
            </div>
          </div>
          <div className="text-[11px] text-gray-500 text-center max-w-5xl mx-auto leading-loose mt-4">
            <span className="text-gray-400 font-semibold">AdSkill Consultancy Inc. is not a law firm and does not provide legal advice.</span> We coordinate petition preparation services in collaboration with independent licensed immigration attorneys. The information provided on this website is for general informational purposes only and should not be construed as legal advice on any subject matter.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
