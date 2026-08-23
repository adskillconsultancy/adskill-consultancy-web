"use client";

import Image from "next/image";
import Link from "next/link";
import { User, MessageCircle, ArrowRight, Search, TrendingUp } from "lucide-react";
import { recentBlogs } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-20">
      
      {/* Hero Section */}
      <div className="bg-brand-dark py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden mb-16 mx-4 lg:mx-12 rounded-3xl">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/20 text-brand-primary mb-6">
            <TrendingUp size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest Immigration Insights
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Stay up-to-date with the latest changes in U.S. immigration laws, visa policies, and expert tips for your 2026 application.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
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
