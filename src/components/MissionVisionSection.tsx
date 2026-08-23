"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState("About Us");

  const tabs = ["About Us", "Our Mission", "Our Vision"];
  
  const tabData: Record<string, { title: string, description: string, checklist: string[] }> = {
    "About Us": {
      title: "The Journey Behind Our Business Success",
      description: "Adskill is your trusted partner for visa and immigration consultancy, providing expert guidance and personalized solutions to help you navigate global opportunities seamlessly.",
      checklist: [
        "Tailored Visa Guidance",
        "Expert Immigration Consultants",
        "End-to-End Processing",
        "Global Opportunity Mapping"
      ]
    },
    "Our Mission": {
      title: "Empowering Your Global Journey Seamlessly",
      description: "Our mission is to simplify the complex immigration process, making international mobility accessible, transparent, and stress-free for individuals and businesses worldwide.",
      checklist: [
        "Transparent Visa Policies",
        "Stress-Free Application",
        "Dedicated Support Team",
        "Client-Centric Approach"
      ]
    },
    "Our Vision": {
      title: "To Be The World's Leading Visa Consultancy",
      description: "We envision a world where borders are not barriers but gateways to new opportunities. We strive to be the most reliable compass for your international ambitions.",
      checklist: [
        "Innovative Immigration Tech",
        "Global Network Expansion",
        "Unmatched Success Rates",
        "Pioneering Visa Solutions"
      ]
    }
  };

  const currentContent = tabData[activeTab];

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary mb-6">
              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                MISSION & VISION
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-brand-dark leading-[1.2] mb-6 tracking-tight transition-all duration-300">
              {currentContent.title}
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-lg font-bold transition-colors relative ${
                    activeTab === tab ? "text-brand-dark" : "text-gray-400 hover:text-brand-dark"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-dark" />
                  )}
                </button>
              ))}
            </div>

            <p className="text-gray-500 mb-5 leading-relaxed min-h-[70px] transition-all duration-300">
              {currentContent.description}
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8 mb-8 min-h-[80px]">
              {currentContent.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex-shrink-0 text-brand-dark">
                    <Check size={18} strokeWidth={3.5} />
                  </div>
                  <span className="text-brand-dark font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-10 h-14 bg-brand-dark text-white font-bold hover:bg-brand-primary hover:text-brand-dark transition-colors"
            >
              Discover More
            </Link>
          </div>

          {/* Right Content - Image & Stats Card */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative h-[400px] md:h-[480px] w-full lg:w-[90%] lg:ml-auto">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Team working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-4 md:-left-12 lg:-left-4 bg-brand-primary p-6 md:p-8 shadow-2xl z-10 w-[240px] md:w-[300px]">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-[2.5px] border-brand-dark shrink-0">
                  <ArrowUpRight size={22} className="text-brand-dark" strokeWidth={2.5} />
                  {/* Small rotating notch/gap effect using SVG */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="6" strokeDasharray="20 300" className="opacity-50" />
                  </svg>
                </div>
                <div>
                  <div className="text-[32px] font-bold text-brand-dark leading-none mb-1">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <p className="text-[13px] font-bold text-brand-dark/80 tracking-wide uppercase">Project Done</p>
                </div>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-brand-dark/15 mb-6" />

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-[2.5px] border-brand-dark shrink-0">
                  <ArrowUpRight size={22} className="text-brand-dark" strokeWidth={2.5} />
                  {/* Small rotating notch/gap effect using SVG */}
                  <svg className="absolute inset-0 w-full h-full -rotate-180" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="6" strokeDasharray="20 300" className="opacity-50" />
                  </svg>
                </div>
                <div>
                  <div className="text-[32px] font-bold text-brand-dark leading-none mb-1">
                    <AnimatedCounter end={50} suffix="%" />
                  </div>
                  <p className="text-[13px] font-bold text-brand-dark/80 tracking-wide uppercase">Complete Project</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
