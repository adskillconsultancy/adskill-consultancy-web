import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, TrendingUp, Users } from "lucide-react";
import ConsultancySection from "@/components/ConsultancySection";
import ServiceSection from "@/components/ServiceSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Faint Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
          alt="Clean Minimal Office Background"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-10"
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
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 pb-32 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl lg:-mt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8 animate-float-y" style={{ animationDelay: '0.2s' }}>
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-star-pulse" />
              <span className="text-sm font-semibold text-brand-dark uppercase tracking-wider">
                Innovation and Creativity
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-bold text-brand-dark leading-[1.1] mb-8 tracking-tight">
              Empowering your <br />
              <span className="text-brand-primary relative inline-block">
                immigration
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <br />
              journey
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-light">
              We provide expert consultancy and specialized guidance across a wide range of U.S. visa and Green Card pathways to help you achieve your American dream seamlessly.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-3 px-8 h-[54px] rounded bg-brand-dark text-white font-semibold hover:bg-brand-teal transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
          <div className="relative h-[600px] lg:h-[700px] w-full flex justify-center items-center lg:-mt-28">
            
            {/* Background Spinning Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-[2px] border-dashed border-gray-300 animate-spin-slow opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-[1px] border-solid border-gray-200" />
            
            {/* Main Consultant Image */}
            <div className="relative z-10 w-[80%] max-w-[450px] h-[500px] lg:h-[600px] animate-float-y rounded-full overflow-hidden border-[8px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Expert Consultant"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Badge 1: Stats */}
            <div className="absolute top-[10%] -left-4 md:left-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-float-y hover:-translate-y-2 transition-transform cursor-default" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-dark">98%</p>
                <p className="text-sm font-medium text-gray-500">Success Rate</p>
              </div>
            </div>

            {/* Floating Badge 2: Revenue/Growth */}
            <div className="absolute bottom-[20%] -left-4 md:-left-8 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-float-y hover:-translate-y-2 transition-transform cursor-default" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-dark">2.5k+</p>
                <p className="text-sm font-medium text-gray-500">Visas Approved</p>
              </div>
            </div>

            {/* Floating Badge 3: Happy Clients */}
            <div className="absolute top-[40%] -right-4 md:-right-8 z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center gap-2 animate-float-y hover:-translate-y-2 transition-transform cursor-default" style={{ animationDelay: '0.8s' }}>
              <div className="flex -space-x-3 mb-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-sm">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i * 12}`} 
                      alt="Client" 
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
      <BlogSection />
    </main>
  );
}
