"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  tagline: string;
}

export default function ServiceHero({ title, tagline }: ServiceHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScale = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      const scale = 1 + Math.min(scrollY / 500, 1) * 0.6;
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
    <section ref={heroRef} className="relative overflow-hidden min-h-[35vh] lg:min-h-[40vh] flex items-start pt-28 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
          alt="Service background"
          className="w-full h-full object-cover"
          style={{ transform: "scale(1)", transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
        <Link href="/services" className="inline-flex items-center gap-2 text-brand-primary hover:text-white transition-colors mb-6 font-bold text-sm">
          <ArrowLeft size={16} /> Back to All Services
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] mb-4">
          {title}
        </h1>
        <p className="text-base lg:text-lg text-gray-300 max-w-2xl font-light border-l-4 border-brand-primary pl-4">
          {tagline}
        </p>
      </div>
    </section>
  );
}
