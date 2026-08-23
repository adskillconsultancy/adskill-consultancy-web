"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { recentBlogs } from "@/lib/blogData";

export default function BlogSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesPerView = 4;
  const maxIndex = recentBlogs.length - slidesPerView;

  const next = useCallback(() => {
    setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [next, isPaused]);

  return (
    <section
      className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        {/* Carousel */}
        <div className="relative px-2 lg:px-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 25}%)`,
              }}
            >
              {recentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="shrink-0 w-1/4 px-2 group"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl bg-gray-200">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative -mt-12 mx-3 bg-white p-5 sm:p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-10 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-shadow">
                    <h3 className="text-lg font-bold text-brand-dark mb-3 leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h3>
                    <Link
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-2.5 transition-all"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Arrows */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors z-20"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors z-20"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
