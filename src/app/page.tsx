import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarClock, CheckCircle2, TrendingUp, Users } from "lucide-react";
import ConsultancySection from "@/components/ConsultancySection";
import ServiceSection from "@/components/ServiceSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import FaqSection from "@/components/FaqSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import TypingAnimation from "@/components/TypingAnimation";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import { localBusinessSchema, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Expert US Immigration Consultancy — EB-1A, EB-2 NIW, EB-5, E-2 Visa",
  description:
    "AdSkill Consultancy Inc. helps professionals and investors navigate US employment-based visa pathways. EB-1A, EB-2 NIW, EB-5, E-2, Green Card. 5,000+ clients. 98% success rate. Based in Jackson Heights, NY.",
  keywords: [
    "US immigration consultancy",
    "immigration consultant Jackson Heights NY",
    "EB-1A visa consultant",
    "EB-2 NIW green card",
    "EB-5 investor visa",
    "E-2 investor visa",
    "immigration lawyer New York",
    "green card consultant",
  ],
  alternates: {
    canonical: "https://adskillconsultancy.com",
  },
  openGraph: {
    title: "AdSkill Consultancy — Expert US Immigration & Visa Consultancy",
    description:
      "5,000+ clients helped. 98% success rate. Expert guidance on EB-1A, EB-2 NIW, EB-5, E-2, and all US visa pathways.",
    url: "https://adskillconsultancy.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
    {/* LocalBusiness JSON-LD for homepage */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(localBusinessSchema()) }}
    />
    <main className="min-h-screen bg-[#f8f9fa] relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
          alt="Clean Minimal Office Background"
          fill
          sizes="100vw"
          className="object-cover grayscale opacity-10"
          priority
        />
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 35, 66, 0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            backgroundPosition: 'center center',
          }}
        />
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-125 h-125 bg-brand-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-150 h-150 bg-brand-dark/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-360 px-6 lg:px-12 pt-20 pb-32 lg:pt-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl lg:-mt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8 animate-float-y" style={{ animationDelay: '0.2s' }}>
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-star-pulse" />
              <span className="text-sm font-semibold text-brand-dark uppercase tracking-wider">
                Innovation and Creativity
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-bold text-brand-dark leading-[1.1] mb-20 tracking-tight">
              <TypingAnimation text="Empowering your" delay={300} /> <br />
              <span className="text-brand-primary relative inline-block">
                <TypingAnimation text="immigration" delay={1100} />
                <div className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary opacity-30 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
                  <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </div>
              </span>
              <br />
              <TypingAnimation text="journey" delay={1700} showCursorWhenDone={true} />
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-light">
              We provide expert consultancy and specialized guidance across a wide range of U.S. visa and Green Card pathways to help you achieve your American dream seamlessly.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/services" 
                aria-label="Discover more about our services"
                className="inline-flex items-center gap-3 px-8 h-13.5 rounded bg-brand-dark text-white font-semibold hover:bg-brand-teal transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Discover More
                <ArrowRight size={18} />
              </Link>
              
              <Link
                href="https://calendly.com/adskillconsultancyinc/30-minutes-consulation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-brand-dark font-semibold group hover:text-brand-primary transition-colors"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors relative">
                  <CalendarClock size={20} className="ml-1" />
                  <span className="absolute w-full h-full rounded-full border border-brand-primary animate-ping opacity-20" />
                </span>
                30 Min Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Images & Badges Grid */}
          <div className="relative h-100 sm:h-125 lg:h-175 w-full flex justify-center items-center lg:-mt-28 overflow-visible">

            {/* Background Spinning Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 sm:w-100 sm:h-100 md:w-125 md:h-125 rounded-full border-2 border-dashed border-gray-300 animate-spin-slow opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 sm:w-75 sm:h-75 md:w-95 md:h-95 rounded-full border border-solid border-gray-200" />

            {/* Main Consultant Image */}
            <div className="relative z-10 w-[75%] sm:w-[70%] md:w-[80%] max-w-112.5 h-75 sm:h-100 lg:h-150 animate-float-y rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Expert Consultant"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating Badge 1: Stats */}
            <div className="absolute top-[8%] -left-2 sm:left-4 z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 items-center gap-3 sm:gap-4 animate-float-y hover:-translate-y-2 transition-transform cursor-default hidden sm:flex" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-dark">98%</p>
                <p className="text-sm font-medium text-gray-500">Success Rate</p>
              </div>
            </div>

            {/* Floating Badge 2: Revenue/Growth */}
            <div className="absolute bottom-[15%] -left-2 sm:-left-8 z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 items-center gap-3 sm:gap-4 animate-float-y hover:-translate-y-2 transition-transform cursor-default hidden sm:flex" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-dark">2.5k+</p>
                <p className="text-sm font-medium text-gray-500">Visas Approved</p>
              </div>
            </div>

            {/* Floating Badge 3: Happy Clients */}
            <div className="absolute top-[35%] -right-2 sm:-right-4 md:-right-8 z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex-col items-center gap-2 animate-float-y hover:-translate-y-2 transition-transform cursor-default hidden sm:flex" style={{ animationDelay: '0.8s' }}>
              <div className="flex -space-x-3 mb-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-sm">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i * 12}`} 
                      alt="Client" 
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-primary flex items-center justify-center text-white text-xs font-bold shadow-sm z-10">
                  <Users size={16} />
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-brand-dark">5,000+</p>
                <p className="text-xs font-medium text-gray-500">Happy Clients</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <ConsultancySection />
      <ServiceSection />
      <MissionVisionSection />
      <FaqSection />
      <SuccessStoriesSection />
      <TeamSection />
      <BlogSection />
    </main>
    </>  
  );
}
