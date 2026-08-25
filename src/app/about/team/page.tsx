"use client";

import { Link as LucideLink } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Team members array - structured to easily add more team members in the future
const teamMembers = [
  {
    id: 1,
    name: "Adil Mohammad",
    role: "Founder, AdSkill Consultancy Inc.",
    description:
      "U.S. Business & Investment Advisor | Supporting Entrepreneurship, Small Business Growth & Foreign Investment in the United States",
    image: "/founder iamge.png",
    linkedin: "https://www.linkedin.com/in/adiiladnaan/", // Add the actual LinkedIn URL here
  },
  // You can add more team members below following the same structure
];

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

        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col h-full hover:-translate-y-1">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay for social icon on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 bg-brand-teal text-white p-3 rounded-full opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-primary shadow-lg z-10 delay-100"
                  aria-label={`LinkedIn profile for ${member.name}`}>
                    <LucideLink size={18} strokeWidth={2.5} />
                </a>
              </div>
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                <h3 className="text-2xl font-bold text-brand-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-teal font-semibold text-sm mb-5 pb-5 border-b border-gray-100">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
