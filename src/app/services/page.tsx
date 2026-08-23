"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import Link from "next/link";
import { Settings, Megaphone, TrendingUp, Briefcase, Globe, FileCheck } from "lucide-react";

// Map some generic icons to the services based on index to simulate the design
const ICONS = [Settings, Megaphone, TrendingUp, Briefcase, Globe, FileCheck];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to middle card in first row

  return (
    <main className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
      
      {/* Faint Background Grid for entire page */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Immigration <span className="text-brand-secondary">Services</span>
          </h1>
          <p className="text-lg text-gray-600">
            We offer specialized guidance across a wide range of U.S. visa and Green Card pathways to help you achieve your American dream.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = ICONS[index % ICONS.length];
            
            return (
              <div 
                key={service.id} 
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative flex flex-col items-center text-center p-8 h-full transition-all duration-300 border ${
                  isActive ? "bg-brand-primary border-brand-primary" : "bg-white border-gray-100"
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%)'
                }}
              >
                {/* Background Image Pattern */}
                <div 
                  className="absolute inset-0 z-0 pointer-events-none bg-no-repeat bg-right-bottom transition-opacity duration-300"
                  style={{
                    backgroundImage: 'url(/images/service-block-shape.png)',
                    backgroundSize: 'auto',
                    opacity: 1
                  }}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center w-full h-full">
                  
                  {/* Icon Circle */}
                  <div className={`w-[90px] h-[90px] rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                    isActive ? "bg-brand-dark text-white scale-110" : "bg-brand-primary text-brand-dark"
                  }`}>
                    <Icon size={36} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h2 className={`text-[22px] font-bold mb-4 transition-colors ${
                    isActive ? "text-brand-dark" : "text-gray-900"
                  }`}>
                    <Link href={`/services/${service.id}`} className="hover:text-brand-dark transition-colors">
                      {service.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className={`text-[15px] mb-8 line-clamp-4 flex-grow transition-colors duration-300 leading-relaxed ${
                    isActive ? "text-brand-dark/80 font-medium" : "text-gray-500"
                  }`}>
                    {service.overview}
                  </p>

                  {/* Button */}
                  <Link 
                    href={`/services/${service.id}`}
                    className={`inline-flex items-center justify-center min-w-[150px] px-6 h-[46px] rounded-full font-bold text-[13px] uppercase tracking-wide transition-all duration-300 mt-auto border ${
                      isActive 
                        ? "bg-brand-dark text-white border-brand-dark hover:bg-white hover:text-brand-dark" 
                        : "bg-transparent text-gray-900 border-gray-200 hover:bg-brand-primary hover:border-brand-primary"
                    }`}
                  >
                    Learn More
                  </Link>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
