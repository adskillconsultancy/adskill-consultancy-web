"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { faqCategories } from "@/lib/faqData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // For the homepage, we only want a few of the top General FAQs
  const generalCategory = faqCategories.find(c => c.id === "general");
  // Select a specific 5 FAQs that are best for the homepage
  const displayFaqs = generalCategory ? [
    generalCategory.faqs.find(f => f.id === "38"),
    generalCategory.faqs.find(f => f.id === "31"),
    generalCategory.faqs.find(f => f.id === "34"),
    generalCategory.faqs.find(f => f.id === "35"),
    generalCategory.faqs.find(f => f.id === "39"),
  ].filter(Boolean) as typeof generalCategory.faqs : [];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-dark relative overflow-hidden flex flex-col lg:flex-row min-h-150">
      {/* Subtle background map/pattern (simulated with a subtle gradient/noise) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Left Image Section */}
      <div className="w-full lg:w-[35%] relative h-100 lg:h-auto z-10 shrink-0">
        <Image 
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000&auto=format&fit=crop"
          alt="Consultants working together"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 35vw"
        />
        {/* Decorative overlap element if needed */}
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hidden lg:flex">
           <div className="w-6 h-6 rounded-full bg-brand-primary animate-pulse" />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-[65%] px-6 py-16 lg:px-16 lg:py-24 z-10 flex flex-col xl:flex-row gap-12 xl:gap-16 items-start">
        
        {/* Text Content */}
        <div className="w-full xl:w-[40%] shrink-0">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary mb-6">
            <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
              FAQ'S
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.15] mb-6 tracking-tight">
            Frequently Asked<br/>Questions
          </h2>
          
          <p className="text-gray-400 mb-10 leading-relaxed text-sm">
            Adskill is the hub for ambitious global citizens, offering expert, transparent, and seamless visa consultancy before your journey begins.
          </p>

          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 px-6 h-12 bg-brand-primary text-brand-dark font-bold hover:bg-white transition-colors text-sm"
          >
            View All FAQs
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Accordion List */}
        <div className="w-full xl:w-[60%] flex flex-col gap-3">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded border border-white/5 overflow-hidden transition-colors ${
                  isOpen ? "bg-brand-teal" : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-white font-semibold pr-4 text-[15px]">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-white/50">
                    {isOpen ? (
                      <ChevronDown size={18} strokeWidth={2.5} />
                    ) : (
                      <ChevronRight size={18} strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
