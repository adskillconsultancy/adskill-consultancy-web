"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Image with Rotating Badge */}
            <div className="relative w-full lg:w-[90%] h-[400px] md:h-[500px]">
              
              {/* Image Container with hidden overflow */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
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
                We Provide Brilliant Idea To Grow The Consulting Agency <span className="text-brand-dark">Your Sharp Brand</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                AdSkill Consultancy Inc. is a United States–based immigration consulting and business advisory company. We assist qualified professionals, students, entrepreneurs, and global investors in strategically preparing for lawful immigration opportunities.
              </p>
              
              <div className="flex flex-wrap items-center gap-8 mb-12">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-8 h-12 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm"
                >
                  Our Work <ArrowUpRight size={16} />
                </Link>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i * 12}`} alt="Client" className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-brand-dark border-b-2 border-brand-primary pb-0.5">10M+ Impact Across the World.</span>
                </div>
              </div>
              
              {/* Overlapping Circle Stats */}
              <div className="flex items-center gap-4 relative">
                <div className="w-[180px] md:w-[220px] h-[180px] md:h-[220px] rounded-full border border-gray-100 shadow-sm flex flex-col items-center justify-center bg-white z-10 transition-transform hover:-translate-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-brand-dark leading-none mb-2">15<span className="text-3xl">+</span></div>
                  <p className="text-xs md:text-sm text-gray-500 font-medium text-center">Experience Team<br/>Help you</p>
                </div>
                <div className="w-[180px] md:w-[220px] h-[180px] md:h-[220px] rounded-full border border-gray-100 shadow-sm flex flex-col items-center justify-center bg-white -ml-16 transition-transform hover:-translate-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-brand-dark leading-none mb-2">18<span className="text-3xl">M</span></div>
                  <p className="text-xs md:text-sm text-gray-500 font-medium text-center">We helped to get<br/>companies</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: SERVICES ACCORDION --- */}
      <div className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="lg:pr-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">Services</div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
                Solutions Drive Business Sustain Growth
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Business consulting is a dynamic and multifaceted field that plays a pivotal role in helping organizations thrive in today's competitive landscape.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-4 mb-10">
                {["Optimized Sprint Planning", "Incremental Delivery Approach", "Continuous Improvement", "Delivering Innovative"].map((item) => (
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
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">Growth Rate</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Building Connections For Grow Limitless Opportunities.
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
              { percent: 90, title: "Scalable Solutions", text: "End to end fiber optic cable nnectivity for stable" },
              { percent: 95, title: "Automation Features", text: "End to end fiber optic cable nnectivity for stable" },
              { percent: 75, title: "24/7 Support", text: "End to end fiber optic cable nnectivity for stable" },
            ].map((stat) => (
              <div key={stat.title} className="flex items-center gap-6">
                {/* Circular Progress SVG */}
                <div className="relative w-[100px] h-[100px] shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" stroke="#ccff00" 
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

      {/* --- SECTION 4: PROCESS TABS --- */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          {/* Top Wavy Stats */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 border-b border-gray-100 pb-16 mb-16 items-center">
            <div className="lg:pr-4">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight tracking-tight">
                We Help Real People Do More Business Plan
              </h2>
            </div>
            
            {[
              { val: "90%", label: "Clients Satisfactions" },
              { val: "40%", label: "Decrease Expense" },
              { val: "7M", label: "Money Flow Users" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col justify-center lg:border-l border-gray-100 lg:pl-10 relative">
                {/* Wavy Line SVG */}
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="text-brand-primary mb-5">
                  <path d="M0 6 Q5 0 10 6 T20 6 T30 6 T40 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
                <div className="text-5xl font-bold text-brand-dark mb-2">{stat.val}</div>
                <div className="text-sm font-bold text-brand-dark">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Process Tabs */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-brand-dark text-xs font-bold uppercase tracking-wider mb-5">Process</div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">
              Ensure The Success Of <br/> Your Business Venture.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex justify-between relative mb-16 px-4 md:px-12">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 -z-10"></div>
              
              {["Business Analysis", "Business Strategy", "Final Execution"].map((tab, idx) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className="flex flex-col items-center gap-4 bg-white px-2 md:px-4 transition-all group"
                >
                  <span className={cn(
                    "text-xs md:text-sm font-bold transition-colors", 
                    activeTab === idx ? "text-brand-dark" : "text-gray-500 group-hover:text-brand-dark"
                  )}>
                    {tab}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors shadow-sm",
                    activeTab === idx ? "bg-brand-dark text-white border-[6px] border-gray-100" : "bg-gray-100 text-gray-500 border-4 border-white group-hover:bg-brand-primary group-hover:text-brand-dark"
                  )}>
                    0{idx + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[400px]">
              
              {/* Content Box (Left) */}
              <div className="transition-all duration-500 ease-in-out">
                <h3 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-4">
                  Essential Features for {["Business Analysis", "Business Strategy", "Final Execution"][activeTab]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totamto aperiame eaque ipsa quae ab illo inventore veritatis
                </p>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-4">
                  {["Optimized Sprint Planning", "Incremental Delivery Approach", "Continuous Improvement", "Delivering Innovative"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={18} className="text-brand-dark shrink-0" strokeWidth={2.5} />
                      <span className="text-brand-dark font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image / Dashboard Box (Right) */}
              <div className="relative h-full flex justify-center items-center">
                <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gray-50 rounded-full -z-10"></div>
                
                <div className="relative z-10 w-full max-w-[320px] transition-transform duration-700 ease-out hover:-translate-y-2">
                   {/* Main Dashboard Card */}
                   <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                     <p className="text-sm font-bold text-brand-dark mb-4">Project Cost Performance</p>
                     
                     {/* Speedometer placeholder */}
                     <div className="w-full h-[120px] bg-gray-50 rounded-t-full border-b-2 border-gray-200 mb-6 flex items-end justify-center pb-2 relative overflow-hidden">
                        {/* Gauge Colors */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-t-full border-[20px] border-t-brand-primary border-l-red-500 border-r-blue-500 border-b-transparent"></div>
                        <div className="absolute bottom-0 w-3 h-20 bg-brand-dark rounded-full origin-bottom rotate-45 shadow-md"></div>
                     </div>
                     <div className="flex justify-between items-center">
                        <div>
                           <p className="text-2xl font-bold text-brand-dark">$ 85.632</p>
                           <p className="text-xs text-gray-500">Total budget</p>
                        </div>
                     </div>
                   </div>
                   
                   {/* Floating Dashboard Card */}
                   <div className="absolute -bottom-10 -right-6 md:-right-12 bg-white rounded-xl shadow-2xl p-4 md:p-5 border border-gray-100 w-[220px] md:w-[240px] animate-float-y">
                      <div className="flex justify-between items-center mb-4">
                         <span className="text-sm font-bold text-brand-dark">Expenses</span>
                         <span className="text-[10px] bg-blue-500 text-white px-3 py-1 rounded-full">view all</span>
                      </div>
                      {[
                        { name: "Avanoda Inc.", amount: 1386.00, up: true },
                        { name: "Rouge Mc", amount: 711.32, up: true },
                        { name: "Magesty", amount: 392.32, up: false },
                      ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between mb-3 last:mb-0">
                           <div className="flex items-center gap-2">
                             <div className="w-6 h-6 bg-brand-dark rounded-md flex items-center justify-center text-[10px] text-white">★</div>
                             <div>
                               <p className="text-[10px] font-bold text-brand-dark leading-none">{item.name}</p>
                               <p className="text-[8px] text-gray-500 mt-0.5">23 Jan, 2023</p>
                             </div>
                           </div>
                           <div className="flex items-center gap-1">
                             <ArrowUpRight size={12} className={item.up ? "text-brand-primary" : "text-red-500 rotate-90"} />
                             <span className="text-[11px] font-bold text-brand-dark">${item.amount.toFixed(2)}</span>
                           </div>
                         </div>
                      ))}
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
