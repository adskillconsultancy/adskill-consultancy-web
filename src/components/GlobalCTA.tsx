"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function GlobalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection so it triggers EVERY time it scrolls into view
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const titleWords = ["Looking", "For", "Professional", "Immigration", "Consultant", "?"];
  const subtitleWords = "Consult with our expert immigration professionals to navigate your path to the U.S. with confidence and precision.".split(" ");

  return (
    <div className="w-full bg-[#f8f9fa] pt-10 pb-16" ref={sectionRef}>
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="relative w-full bg-brand-primary rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-14 lg:p-20 shadow-xl border border-brand-primary/50">
          
          {/* Grid Pattern Background on the right half */}
          <div 
            className="absolute top-0 right-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block"
            style={{
              backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 35, 66, 0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              borderLeft: '1px solid rgba(10,35,66,0.1)'
            }}
          />

          {/* Left Content */}
          <div className="relative z-10 md:w-3/5 text-brand-dark pr-0 md:pr-10 mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black mb-6 leading-[1.15] tracking-tight flex flex-wrap gap-x-3 gap-y-2 justify-center md:justify-start">
              {titleWords.map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-8 blur-xs"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-medium max-w-xl leading-relaxed mx-auto md:mx-0 flex flex-wrap gap-x-1.5 gap-y-1 justify-center md:justify-start">
              {subtitleWords.map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block transition-all duration-500 ease-out ${isVisible ? "opacity-85 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${500 + i * 40}ms` }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Middle Curly Arrow SVG */}
          <div className={`hidden lg:block absolute left-[55%] top-1/2 -translate-y-1/2 z-10 transition-all duration-1000 delay-[1200ms] ${isVisible ? "scale-100 opacity-70" : "scale-50 opacity-0"}`}>
            <style jsx>{`
              @keyframes floatX {
                0%, 100% { transform: translateX(0) rotate(-6deg); }
                50% { transform: translateX(12px) rotate(-2deg); }
              }
              .animate-float-x {
                animation: floatX 2.5s ease-in-out infinite;
              }
            `}</style>
            <Image src="/ary.png" alt="Arrow" width={120} height={120} className="w-30 h-auto object-contain opacity-80 animate-float-x" />
          </div>

          {/* Right Button */}
          <div className="relative z-10 md:w-2/5 flex flex-col items-center md:items-end justify-center w-full gap-4">
            <div className="flex flex-col items-center md:items-end w-full">
              <a 
                href="https://calendly.com/adskillconsultancyinc/30-minutes-consulation"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ease-out w-full md:w-auto min-w-70 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: '1000ms' }}
              >
                Book Strategy Session 
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <p 
                className={`mt-2 text-sm font-semibold text-brand-dark/70 text-center md:text-right w-full md:pr-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: '1100ms' }}
              >
                Secure your spot today
              </p>
            </div>
            
            <Link 
              href="/contact"
              className={`group flex items-center justify-center gap-2 bg-brand-dark text-white border-2 border-brand-dark px-8 py-3.5 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 hover:bg-brand-dark/90 transition-all duration-700 ease-out w-full md:w-auto min-w-70 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: '1200ms' }}
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
