"use client";

import Image from "next/image";
import Link from "next/link";
import { User, MessageCircle, ArrowRight } from "lucide-react";
import { recentBlogs } from "@/lib/blogData";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary mb-4">
              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                NEW & BLOGS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-brand-dark leading-tight tracking-tight">
              Our News & Blogs
            </h2>
          </div>
          
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center px-8 h-12 bg-brand-dark text-white font-bold hover:bg-brand-primary hover:text-brand-dark transition-colors shrink-0"
          >
            All News & Blogs
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {recentBlogs.map((blog) => (
            <div key={blog.id} className="group relative">
              {/* Image Container */}
              <div className="relative w-full h-[280px] md:h-[340px] overflow-hidden rounded-t-xl bg-gray-200">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              {/* Overlapping Card */}
              <div className="relative -mt-12 mx-4 bg-white p-5 sm:p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-10 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-shadow">
                
                {/* Title */}
                <h3 className="text-lg font-bold text-brand-dark mb-4 leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors h-[50px]">
                  <Link href={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>

                {/* Read More */}
                <Link 
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots (Decorative) */}
        <div className="flex justify-center items-center gap-2 mt-16">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full border border-brand-primary flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
          </span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>

      </div>
    </section>
  );
}
