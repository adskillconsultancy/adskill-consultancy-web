"use client";

import { ArrowUpRight, ChevronDown, Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export default function SuccessStoriesPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
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
    if (loading) return;

    let ticking = false;

    const updateScale = () => {
      if (!bgRef.current) return;
      const scale = 1 + Math.min(window.scrollY / 500, 1) * 0.6;
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
  }, [loading]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-lg font-bold text-brand-dark animate-pulse">Loading stories...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
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
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-360 w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 animate-float-y">
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

      {/* Stats Bar */}
      <div className="max-w-360 mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 bg-white rounded-3xl p-6 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
          {[
            { value: "500+", label: "Clients Served" },
            { value: "98%", label: "Success Rate" },
            { value: "4.9", label: "Google Rating" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center flex flex-col items-center ${i !== 0 ? 'md:border-l md:border-gray-100' : ''}`}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-wider text-gray-500 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-360 mx-auto px-6 lg:px-12">
        {/* Featured Stories Grid */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">
              Featured Experiences
            </h2>
            <div className="w-24 h-1.5 bg-brand-primary rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredReviews.slice(0, 6).map((review, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-gray-100 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
              >
                {/* Large Background Quote Icon */}
                <Quote className="absolute -top-6 -right-6 w-32 h-32 text-gray-50 transform rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-primary/5" />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating || 5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <div className="relative flex-1 mb-8 z-10">
                  <p className="text-gray-700 text-base leading-loose font-medium">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover shadow-md ring-4 ring-gray-50"
                    />
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg">
                        {review.author_name}
                      </h4>
                      <p className="text-sm text-gray-500 font-medium">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google Review"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-xs font-bold text-gray-500 hidden sm:block">Posted on Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Accordion Stories */}
        {otherReviews.length > 0 && (
          <div className="mb-32 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                More Success Stories
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {otherReviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "shadow-lg ring-1 ring-brand-primary"
                      : "shadow-sm border border-gray-100 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-5">
                      <Image
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover shrink-0 shadow-sm"
                      />
                      <div>
                        <span className={`font-bold text-lg transition-colors duration-300 ${
                            openIndex === index ? "text-brand-primary" : "text-brand-dark group-hover:text-brand-primary"
                          }`}>
                          {review.author_name}
                        </span>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating || 5)].map((_, idx) => (
                              <Star key={idx} size={12} className="text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400 font-medium">{review.relative_time_description}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                        openIndex === index
                          ? "bg-brand-primary text-brand-dark rotate-180"
                          : "bg-gray-50 text-gray-500 group-hover:bg-gray-100"
                      }`}
                    >
                      <ChevronDown size={20} strokeWidth={2.5} />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 ml-17 text-gray-600 leading-relaxed text-base">
                      <p className="italic bg-gray-50 p-4 rounded-xl border border-gray-100">"{review.text || "Highly recommended services."}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Premium CTA Section */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-dark py-20 px-8 lg:px-24 text-center shadow-2xl">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1920&auto=format&fit=crop"
              alt="Contact background"
              fill
              sizes="100vw"
              className="object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark/80" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="px-4 py-1.5 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-bold tracking-widest uppercase mb-6 border border-brand-primary/30">
              Take the first step
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-3xl">
              Ready to write your <br/><span className="text-brand-primary">success story?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10 font-light leading-relaxed">
              Join hundreds of clients who have successfully achieved their immigration goals with AdSkill Consultancy.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 h-16 bg-brand-primary text-brand-dark font-bold text-lg rounded-full hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Start Your Journey 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
