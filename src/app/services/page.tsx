"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/lib/services";
import { Settings, Megaphone, TrendingUp, Briefcase, Globe, FileCheck } from "lucide-react";

const ICONS = [Settings, Megaphone, TrendingUp, Briefcase, Globe, FileCheck];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const router = useRouter();
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const updateScale = () => {
      if (!bgRef.current) return;
      const scale = 1 + Math.min(window.scrollY / 500, 1) * 0.6;
      bgRef.current.style.transform = `scale(${scale})`;
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScale);
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Hero Header */}
      <section className="relative overflow-hidden min-h-[35vh] lg:min-h-[40vh] flex items-start pt-28 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            ref={bgRef}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
            alt="Office background"
            className="w-full h-full object-cover"
            style={{ transform: "scale(1)", transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>

        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 animate-float-y">Our Services</span>
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] mb-4">
            Immigration <span className="text-brand-primary">Services</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
            We offer specialized guidance across a wide range of U.S. visa and Green Card pathways to help you achieve your American dream.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = ICONS[index % ICONS.length];

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="block relative flex flex-col items-center text-center p-8 h-full transition-all duration-300 border cursor-pointer bg-white border-gray-100 hover:border-gray-300"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%)'
                }}
                onClick={() => router.push(`/services/${service.id}`)}
              >
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
                    {service.title}
                  </h2>

                  {/* Short description */}
                  <p className={`text-[15px] mb-6 flex-grow transition-colors duration-300 leading-[1.8] line-clamp-2 ${
                    isActive ? "text-brand-dark/80 font-medium" : "text-gray-500"
                  }`}>
                    {service.short_description}
                  </p>

                  {/* Dashed divider */}
                  <div className={`w-full border-t-2 border-dashed mb-6 ${
                    isActive ? "border-brand-dark/30" : "border-gray-200"
                  }`} />

                  {/* Benefits as checkmark bullets */}
                  <div className="space-y-2 mb-8 w-full">
                    {service.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-left">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isActive ? "bg-brand-dark text-white" : "bg-brand-primary text-white"
                        }`}>
                          <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                        <span className={`text-xs font-medium leading-relaxed ${
                          isActive ? "text-brand-dark/80" : "text-gray-500"
                        }`}>
                          {benefit.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pill Button */}
                  <div
                    className={`inline-flex items-center justify-center min-w-[150px] px-6 h-[46px] rounded-full font-bold text-[13px] uppercase tracking-wide transition-all duration-300 mt-auto border ${
                      isActive
                        ? "bg-brand-dark text-white border-brand-dark"
                        : "bg-transparent text-gray-900 border-gray-200"
                    }`}
                  >
                    Learn More
                  </div>

                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </main>
  );
}
