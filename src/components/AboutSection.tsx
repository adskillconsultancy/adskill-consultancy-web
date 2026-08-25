"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let startTime: number;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / duration, 1);
          // Easing function for smoother counting
          const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
          setCount(Math.floor(end * easeOutQuart));
          if (progress < duration) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={ref} className="inline-block">{count}{suffix && <span className="text-3xl">{suffix}</span>}</div>;
}

const accordionItems = [
  {
    num: "01",
    title: "Employment-Based Immigration",
    text: "We provide end-to-end support for EB-1A, EB-2 NIW, EB-3, EB-4, and EB-5 petitions, from eligibility assessment to Green Card submission.",
  },
  {
    num: "02",
    title: "Business & Investor Advisory",
    text: "Complete advisory for E-2 Treaty Investor and EB-5 Immigrant Investor programs — from business setup to source of funds documentation.",
  },
  {
    num: "03",
    title: "Technology-Driven Case Management",
    text: "Secure, digital-first platform allowing clients worldwide to submit documents, track progress, and communicate efficiently.",
  },
  {
    num: "04",
    title: "Interview Preparation",
    text: "Mock sessions with former U.S. visa officers providing real feedback and building real confidence for your interview.",
  },
];

export default function AboutSection() {
  const [openAcc, setOpenAcc] = useState(3);
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* --- SECTION 1: ABOUT AREA --- */}
      <div className="py-16 lg:py-24 relative">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Image with Rotating Badge */}
            <div className="relative w-full lg:w-[90%] h-100 md:h-125">
              
              {/* Image Container with hidden overflow */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder iamge.png"
                  alt="Consulting Expert"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Rotating Badge - placed outside overflow-hidden so full circle shows */}
              <div className="absolute -top-12 -left-12 w-48 h-48 flex items-center justify-center z-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow text-brand-dark opacity-90">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text fontSize="11.5" fontWeight="600" letterSpacing="3" className="fill-current uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      Digital World - Digital World - Digital World - 
                    </textPath>
                  </text>
                </svg>
                {/* Center Asterisk */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-dark">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5l-10 14M5 5l10 14M2 12h20"/>
                  </svg>
                </div>
              </div>
              
            </div>

            {/* Right: Content */}
            <div className="lg:pl-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">About Us</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
                Expert Guidance for Your Global Immigration <span className="text-brand-dark">and Business Success</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                AdSkill Consultancy Inc. is a United States–based immigration consulting and business advisory company. We assist qualified professionals, students, entrepreneurs, and global investors in strategically preparing for lawful immigration opportunities.
              </p>
              
              <div className="flex flex-wrap items-center gap-8 mb-12">
                <Link
                  href="/success-stories"
                  className="inline-flex items-center gap-2 px-8 h-12 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm"
                >
                  Our Work <ArrowUpRight size={16} />
                </Link>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-sm">
                        <Image src={`https://i.pravatar.cc/100?img=${i * 12}`} alt="Client" width={40} height={40} className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-brand-dark border-b-2 border-brand-primary pb-0.5">Trusted by professionals worldwide.</span>
                </div>
              </div>
              
              {/* Overlapping Circle Stats */}
              <div className="flex items-center gap-4 relative">
                <div className="w-45 md:w-55 h-45 md:h-55 rounded-full shadow-lg flex flex-col items-center justify-center bg-brand-primary z-10 transition-transform hover:-translate-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-brand-dark leading-none mb-2">
                    <CountUp end={15} suffix="+" />
                  </div>
                  <p className="text-xs md:text-sm text-brand-dark/80 font-bold text-center">Experienced Professionals<br/>Ready to Assist</p>
                </div>
                <div className="w-45 md:w-55 h-45 md:h-55 rounded-full shadow-lg flex flex-col items-center justify-center bg-brand-dark -ml-16 transition-transform hover:-translate-y-2 border-4 border-white">
                  <div className="text-5xl md:text-6xl font-bold text-white leading-none mb-2">
                    <CountUp end={98} suffix="%" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-300 font-medium text-center">Success Rate<br/>for Clients</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: SERVICES ACCORDION --- */}
      <div className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="lg:pr-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">Services</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
                Strategic Solutions for Sustainable Success
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Business consulting is a dynamic and multifaceted field that plays a pivotal role in helping organizations thrive in today&apos;s competitive landscape.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-4 mb-10">
                {["Comprehensive Case Evaluation", "Strategic Business Planning", "Dedicated Client Support", "Proven Track Record"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={18} className="text-brand-dark shrink-0" strokeWidth={2.5} />
                    <span className="text-brand-dark font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 h-12 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Accordion */}
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              {accordionItems.map((item, idx) => {
                const isActive = idx === openAcc;
                return (
                  <div key={item.num} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => setOpenAcc(isActive ? -1 : idx)}
                      className={cn(
                        "w-full flex items-center gap-4 py-6 px-6 text-left transition-colors",
                        isActive ? "bg-brand-dark text-white rounded-t-xl" : "bg-transparent hover:bg-white text-brand-dark"
                      )}
                    >
                      <div className="shrink-0">
                        <div className={cn("w-10 h-10 flex items-center justify-center rounded-lg border", isActive ? "border-white/20" : "border-gray-200")}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                           </svg>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold flex-1">{item.title}</h3>
                      <span className="text-sm font-bold">{item.num}</span>
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isActive ? "bg-brand-dark text-white rounded-b-xl border-t border-white/10" : ""
                      )}
                      style={{ maxHeight: isActive ? "250px" : "0px", opacity: isActive ? 1 : 0 }}
                    >
                      <p className="px-6 pb-6 pt-2 text-white/80 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: GROWTH RATE STATS --- */}
      <div className="relative bg-brand-dark py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="Team meeting"
            fill
            className="object-cover opacity-10 grayscale"
          />
        </div>
        <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">Growth Rate</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Building Global Connections for Limitless Opportunities.
              </h2>
            </div>
            <div className="lg:text-right">
              <Link href="/about" className="inline-flex items-center justify-center px-8 h-12 bg-white text-brand-dark font-bold hover:bg-brand-primary transition-colors text-sm">
                Discover More
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 pt-10 border-t border-white/10">
            {[
              { percent: 98, title: "High Success Rate", text: "Consistently delivering positive outcomes for complex immigration and business cases." },
              { percent: 95, title: "Client Satisfaction", text: "Providing dedicated support and clear communication throughout the entire process." },
              { percent: 100, title: "Global Reach", text: "Successfully assisting professionals, investors, and students across the world." },
            ].map((stat) => (
              <div key={stat.title} className="flex items-center gap-6">
                {/* Circular Progress SVG */}
                <div className="relative w-25 h-25 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="45"
                      fill="none" stroke="var(--color-brand-primary)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * stat.percent) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center bg-white m-3 rounded-full shadow-inner">
                    <span className="text-xl font-bold text-brand-dark">{stat.percent}%</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{stat.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 4: PROCESS --- */}
      <div className="bg-white py-16 lg:py-28">
        <div className="max-w-1440 mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">Process</div>
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-brand-dark leading-[1.1] tracking-tight">
              Ensure the Success of <br/> Your Immigration Journey.
            </h2>
          </div>

          {/* Tabs + Dashboard */}
          <div className="max-w-6xl mx-auto">

            {/* Tab Navigation */}
            <div className="relative flex justify-center items-center gap-0 mb-16 lg:mb-24">
              {/* Background pill */}
              <div className="flex bg-gray-50 rounded-full p-1.5 border border-gray-100 relative">
                {["Initial Assessment", "Strategic Planning", "Final Execution"].map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(idx)}
                    className={cn(
                      "relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300",
                      activeTab === idx
                        ? "bg-brand-dark text-white shadow-md"
                        : "text-gray-500 hover:text-brand-dark"
                    )}
                  >
                    <span className="hidden sm:inline">{tab}</span>
                    <span className="sm:hidden">0{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-5">
                  Core Principles of {["Initial Assessment", "Strategic Planning", "Final Execution"][activeTab]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                  We meticulously analyze your unique situation to develop a tailored strategy that maximizes your chances of success and aligns with your long-term goals.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {["Thorough Documentation", "Regulatory Compliance", "Expert Representation", "Clear Communication"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-brand-dark" strokeWidth={3} />
                      </div>
                      <span className="text-brand-dark font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Step indicator pills */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Step</span>
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                          i === activeTab
                            ? "bg-brand-dark text-white scale-110"
                            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                        )}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Stats Visual */}
              <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-100">
                <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-gray-50 rounded-full -z-10" />

                <div className="relative z-10 w-full max-w-95 space-y-4">

                  {/* Hero Stat */}
                  <div className="bg-brand-dark rounded-xl shadow-lg p-5 flex items-center gap-5">
                    <div className="relative w-20 h-20 shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="var(--color-brand-primary)" strokeWidth="3" strokeDasharray="88" strokeDashoffset="8" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">91%</span>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">Approval Rate</p>
                      <p className="text-xs text-gray-400 leading-relaxed">Across all petition types<br/>filed in the last 5 years</p>
                    </div>
                  </div>

                  {/* Case Pipeline */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5">
                    <p className="text-sm font-bold text-brand-dark mb-1">Case Pipeline</p>
                    <p className="text-[10px] text-gray-400 mb-4">Current active cases by stage</p>
                    <div className="space-y-3">
                      {[
                        { label: "Under Review", count: 38, pct: 76, color: "bg-brand-primary" },
                        { label: "RFE Received", count: 12, pct: 24, color: "bg-brand-primary" },
                        { label: "Interview Ready", count: 25, pct: 50, color: "bg-brand-primary" },
                        { label: "Approved", count: 67, pct: 100, color: "bg-brand-dark" },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color === 'bg-brand-dark' ? 'var(--color-brand-dark)' : 'var(--color-brand-primary)' }} />
                              <span className="text-[11px] font-bold text-brand-dark">{item.label}</span>
                            </div>
                            <span className="text-[11px] font-bold text-gray-400">{item.count}</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all" style={{ width: `${item.pct}%`, backgroundColor: item.color === 'bg-brand-dark' ? 'var(--color-brand-dark)' : 'var(--color-brand-primary)' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Processing + Countries */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Processing Time */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Avg. Processing Time</p>
                      <div className="space-y-3">
                        {[
                          { label: "EB-1A", time: "8-12 mo", badge: "Fast" },
                          { label: "EB-2 NIW", time: "12-18 mo", badge: "Fast" },
                          { label: "EB-5", time: "24-36 mo", badge: "Long" },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-between">
                            <div>
                              <p className="text-[11px] font-bold text-brand-dark">{item.label}</p>
                              <p className="text-[9px] text-gray-400">{item.time}</p>
                            </div>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.badge === "Fast" ? "bg-brand-primary/20 text-brand-dark" : "bg-gray-200 text-gray-500"}`}>{item.badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Regional Distribution */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Clients By Region</p>
                      <div className="space-y-2.5">
                        {[
                          { label: "South Asia", pct: 78 },
                          { label: "East Asia", pct: 64 },
                          { label: "South America", pct: 41 },
                        ].map((c) => (
                          <div key={c.label} className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-brand-dark">{c.label}</span>
                            <span className="text-[11px] font-bold text-gray-400">{c.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
