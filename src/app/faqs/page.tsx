"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, MessageCircleQuestion } from "lucide-react";
import { faqCategories } from "@/lib/faqData";

export default function FaqPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const activeCategory = faqCategories.find(c => c.id === activeCategoryId) || faqCategories[0];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-20">
      
      {/* Hero Section */}
      <div className="bg-brand-dark py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden mb-16 mx-4 lg:mx-12 rounded-3xl">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/20 text-brand-primary mb-6">
            <MessageCircleQuestion size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How Can We Help You?
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our visa categories, consulting services, and the U.S. immigration process.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Sidebar / Categories */}
          <div className="w-full lg:w-[30%] shrink-0 lg:sticky lg:top-32">
            <h3 className="text-xl font-bold text-brand-dark mb-6 pl-2">Categories</h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    setOpenFaqId(null);
                  }}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl text-left font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategoryId === category.id 
                      ? "bg-brand-primary text-brand-dark shadow-md" 
                      : "bg-white text-gray-500 hover:bg-gray-100 hover:text-brand-dark"
                  }`}
                >
                  {category.title}
                  <ChevronRight 
                    size={18} 
                    className={`hidden lg:block transition-transform duration-300 ${
                      activeCategoryId === category.id ? "translate-x-1" : ""
                    }`} 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordions */}
          <div className="w-full lg:w-[70%]">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-brand-dark mb-3">{activeCategory.title}</h2>
              <p className="text-gray-500">Explore frequently asked questions related to {activeCategory.title}.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              {activeCategory.faqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen ? "border-brand-primary shadow-lg" : "border-gray-100 shadow-sm hover:border-brand-primary/30"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className={`font-bold pr-6 text-lg transition-colors duration-300 ${isOpen ? "text-brand-dark" : "text-gray-700"}`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-brand-primary text-brand-dark" : "bg-gray-100 text-gray-400"
                      }`}>
                        <ChevronDown 
                          size={18} 
                          strokeWidth={3}
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                        />
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 lg:px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
