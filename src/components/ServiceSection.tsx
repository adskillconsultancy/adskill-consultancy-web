"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { services, type Service } from "@/lib/services";

const defaultImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop", // Replaced the broken one
  "https://images.unsplash.com/photo-1555529771-835f59bfc50c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
];

export default function ServiceSection() {
  // Duplicate services to create a seamless infinite loop
  const loopServices = [...services, ...services, ...services];
  return (
    <section className="relative pt-12 pb-24 lg:pt-16 bg-[#f8f9fa] overflow-hidden">
      {/* Unified Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 35, 66, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 px-6 lg:px-12">
          {/* Left Text */}
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary mb-4">
              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                SERVICE AREA
              </span>
            </div>
            {/* The heading has normal text styling in the new image */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-[1.1]">
              Empowering Your Brand
              <br/>
              Innovative Solutions
            </h2>
          </div>
          
          {/* Right Button */}
          <div className="mt-8 lg:mt-0 relative hidden md:block">
            {/* Decorative arrow above button (optional) */}
            <svg className="absolute -top-12 right-10 w-12 h-12 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-10 h-14 bg-brand-primary text-brand-dark font-bold hover:bg-white transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Carousel */}
      <div className="relative z-10 w-full overflow-hidden pb-12">
        <div className="flex w-max animate-marquee gap-6 px-6 lg:px-12">
          {loopServices.map((service, index) => (
            <div 
              key={`${service.id}-${index}`} 
              className="w-[450px] md:w-[600px] shrink-0 flex h-[400px] group relative rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Left Dark Half */}
              <div className="w-1/2 bg-brand-dark p-8 flex flex-col justify-between relative group-hover:bg-opacity-95 transition-colors overflow-hidden">
                {/* Subtle Grid Pattern inside the card */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                
                {/* Icon Placeholder */}
                <div className="w-12 h-12 text-brand-primary mt-2 relative z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <span className="text-brand-primary font-bold text-lg mb-2 block">{String(index % services.length + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {service.overview || (service as Service & { description?: string }).description}
                  </p>
                </div>
              </div>

              {/* Right Image Half */}
              <div className="w-1/2 relative overflow-hidden">
                <Image 
                  src={(service as Service & { image?: string }).image || defaultImages[index % defaultImages.length]} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale"
                />
              </div>

              {/* Center overlapping button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <Link 
                  href={service.link || `/services/${service.id}`}
                  className="flex items-center justify-center w-16 h-32 rounded-full bg-brand-primary text-brand-dark group-hover:bg-white group-hover:text-brand-dark transition-all duration-500 ease-in-out shadow-xl"
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
