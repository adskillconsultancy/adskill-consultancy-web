"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { recentBlogs } from "@/lib/blogData";

export default function BlogPage() {
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
    <main className="min-h-screen bg-[#f8f9fa] pb-20">

      {/* Header Section — exact FAQ style */}
      <section className="relative overflow-hidden min-h-[35vh] lg:min-h-[40vh] flex items-start pt-28 pb-12 mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            ref={bgRef}
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop"
            alt="Blog background"
            className="w-full h-full object-cover"
            style={{ transform: "scale(1)", transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 animate-float-y">Blogs & News</span>
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] mb-4">
            Latest Immigration <span className="text-brand-primary">Insights & Updates</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
            Stay up-to-date with the latest changes in U.S. immigration laws, visa policies, and expert tips for your 2026 application.
          </p>
        </div>
      </section>

      {/* Blog Grid + Sidebar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Main Content: Blog Grid */}
          <div className="w-full lg:w-[70%]">
            <div className="grid md:grid-cols-2 gap-8">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-[240px] overflow-hidden bg-gray-200">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Visa Updates
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-brand-dark mb-4 leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors flex-grow">
                      <Link href={`/blog/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </h3>
                    <Link
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors mt-auto pt-4 border-t border-gray-100"
                    >
                      Read Full Article
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[30%] shrink-0 flex flex-col gap-8 lg:sticky lg:top-32">

            {/* Search Box */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-4">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search keywords..."
                  className="w-full h-12 pl-12 pr-4 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-4">Categories</h3>
              <ul className="flex flex-col gap-2">
                {['EB-1A Extraordinary Ability', 'EB-2 National Interest Waiver', 'EB-5 Investor Visa', 'E-2 Visa Updates', 'General Immigration News'].map((cat, i) => (
                  <li key={i}>
                    <button className="w-full flex items-center justify-between py-2 text-sm text-gray-600 hover:text-brand-primary transition-colors text-left group">
                      <span>{cat}</span>
                      <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px] group-hover:bg-brand-primary/10 group-hover:text-brand-dark font-medium transition-colors">
                        {(i * 3) + 2}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-brand-dark rounded-xl shadow-sm p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-3 relative z-10">Need Expert Advice?</h3>
              <p className="text-sm text-gray-400 mb-6 relative z-10 leading-relaxed">
                Book a consultation with our experienced attorneys to discuss your case.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center h-11 rounded bg-brand-primary text-brand-dark font-bold text-sm hover:bg-white transition-colors relative z-10"
              >
                Contact Us Now
              </Link>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}
