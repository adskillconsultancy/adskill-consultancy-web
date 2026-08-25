"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, ChevronDown, Quote } from "lucide-react";

export default function SuccessStoriesPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const featuredReviews = reviews.filter((r) => r.text && r.text.length > 50);
  const otherReviews = reviews.filter((r) => !r.text || r.text.length <= 50);

  const heroRef = useRef<HTMLElement>(null);
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
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section - FAQ-style header */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[35vh] lg:min-h-[40vh] flex items-start pt-28 pb-12 mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            ref={bgRef}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
            alt="Success stories background"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ transform: "scale(1)", transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
          />
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

        <div className="max-w-360 w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] mb-4">
            Success <span className="text-brand-primary">Stories</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
            Real experiences from our clients who trusted us with their
            immigration journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-360 mx-auto px-6 lg:px-12 pb-24">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "500+", label: "Clients Served" },
            { value: "98%", label: "Success Rate" },
            { value: "4.9", label: "Google Rating" },
            { value: "15+", label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm"
            >
              <p className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Stories - Large Cards */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10">
            Featured Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.slice(0, 6).map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm">
                        {review.author_name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating || 5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="relative flex-1">
                    <Quote
                      size={24}
                      className="text-brand-primary/20 absolute -top-1 -left-1"
                    />
                    <p className="text-gray-600 text-sm leading-relaxed pl-6">
                      {review.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-50 flex items-center gap-2">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-xs font-bold text-gray-500">
                      Posted on Google
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Stories Section */}
        {otherReviews.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10">
              More Client Stories
            </h2>
            <div className="flex flex-col gap-4 max-w-4xl">
              {otherReviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "border-brand-primary shadow-lg"
                      : "border-gray-100 shadow-sm hover:border-brand-primary/30"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4 pr-6">
                      <Image
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <span
                          className={`font-bold text-sm transition-colors duration-300 ${
                            openIndex === index
                              ? "text-brand-dark"
                              : "text-gray-700"
                          }`}
                        >
                          {review.author_name}
                        </span>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {review.relative_time_description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                        openIndex === index
                          ? "bg-brand-primary text-brand-dark"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {openIndex === index ? (
                        <ChevronDown
                          size={18}
                          strokeWidth={3}
                          className="transition-transform duration-300 rotate-180"
                        />
                      ) : (
                        <ChevronDown
                          size={18}
                          strokeWidth={3}
                          className="transition-transform duration-300"
                        />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-50 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 lg:px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      <div className="flex gap-1 mb-3">
                        {[...Array(review.rating || 5)].map((_, idx) => (
                          <Star
                            key={idx}
                            size={14}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p>{review.text || "No review text available."}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-24 bg-brand-dark rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join hundreds of clients who have achieved their immigration goals
              with AdSkill Consultancy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 h-12 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-white transition-colors text-sm"
            >
              Start Your Journey <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
