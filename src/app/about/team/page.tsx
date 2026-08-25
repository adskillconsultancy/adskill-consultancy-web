"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { teamMembers, TeamCard } from "@/components/TeamSection";

export default function TeamPage() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  // Zoom-in scroll animation effect matching the FAQ page header
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
    <main className="min-h-screen bg-[#f8f9fa] pb-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[35vh] lg:min-h-[40vh] flex items-start pt-28 pb-12 mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            ref={bgRef}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="Team background"
            fill
            sizes="100vw"
            className="object-cover origin-center"
            style={{
              transform: "scale(1)",
              transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        {/* Decorative dots */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-360 w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 animate-float-y">
            Our Team
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] mb-4">
            Meet the <span className="text-brand-primary">Experts</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
            Our dedicated team of professionals is here to guide you through
            your business and investment journey in the United States.
          </p>
        </div>
      </section>

      {/* Team Content Area */}
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </main>
  );
}

