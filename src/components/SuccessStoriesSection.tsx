import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import reviewsData from "@/content/review.json";

export default function SuccessStoriesSection() {
  // Split into left and right columns
  const leftCol = reviewsData.slice(0, 4);
  const rightCol = reviewsData.slice(4, 8);
  
  // Duplicate for infinite scrolling effect
  const leftReviews = [...leftCol, ...leftCol, ...leftCol];
  const rightReviews = [...rightCol, ...rightCol, ...rightCol];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden relative">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center min-h-[600px]">
          
          {/* Left Column - Scrolling Up */}
          <div 
            className="hidden lg:block h-[600px] overflow-hidden relative" 
            style={{ 
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" 
            }}
          >
            <div className="flex flex-col gap-6 animate-marquee-up hover:[animation-play-state:paused]">
              {leftReviews.map((review: any, i) => (
                <div key={`left-${i}`} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex-shrink-0 w-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating || 5)].map((_, idx) => (
                      <Star key={idx} size={16} className="text-brand-primary fill-brand-primary" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed mb-6">"{review.text}"</p>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-sm border border-gray-100 shrink-0">
                        <Image 
                          src={review.profile_photo_url} 
                          alt={review.author_name} 
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm leading-tight">{review.author_name}</h4>
                        <span className="text-[11px] text-gray-500 font-semibold">{review.relative_time_description}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 border border-gray-100">
                      <Image
                        src={review.platform === 'Facebook' ? 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' : 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'}
                        alt={review.platform || 'Google'}
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                      <span className="text-[10px] font-bold text-gray-500 hidden xl:block">Posted on {review.platform || 'Google'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Content - Static */}
          <div className="text-center px-4 z-10 py-10 lg:py-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4 tracking-tight">
              Our Client's <br />
              <span className="text-brand-primary/90 font-serif italic text-4xl md:text-5xl lg:text-6xl mt-2 block">Testimonials</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-md mx-auto">
              Real feedback from our clients that reflects our quality, reliability, and commitment to excellence.
            </p>
            
            <div className="flex flex-col items-center">
              <div className="flex -space-x-4 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-gray-50 bg-gray-200 overflow-hidden relative shadow-md">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i * 10 + 5}`} 
                      alt="Client" 
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-6xl font-black text-brand-dark mb-2 tracking-tight">14k+</h3>
              <p className="text-gray-600 font-semibold tracking-wide">Trusted and Happy Customer</p>
              
              <Link 
                href="/success-stories"
                className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 bg-brand-primary text-brand-dark font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                See All Stories
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Column - Scrolling Down */}
          <div 
            className="hidden lg:block h-[600px] overflow-hidden relative" 
            style={{ 
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" 
            }}
          >
            <div className="flex flex-col gap-6 animate-marquee-down hover:[animation-play-state:paused]">
              {rightReviews.map((review: any, i) => (
                <div key={`right-${i}`} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex-shrink-0 w-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating || 5)].map((_, idx) => (
                      <Star key={idx} size={16} className="text-brand-primary fill-brand-primary" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed mb-6">"{review.text}"</p>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-sm border border-gray-100 shrink-0">
                        <Image 
                          src={review.profile_photo_url} 
                          alt={review.author_name} 
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm leading-tight">{review.author_name}</h4>
                        <span className="text-[11px] text-gray-500 font-semibold">{review.relative_time_description}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 border border-gray-100">
                      <Image
                        src={review.platform === 'Facebook' ? 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' : 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'}
                        alt={review.platform || 'Google'}
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                      <span className="text-[10px] font-bold text-gray-500 hidden xl:block">Posted on {review.platform || 'Google'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* Mobile View - Horizontal Scroll or Grid */}
        <div className="lg:hidden mt-10 grid gap-6 sm:grid-cols-2">
           {leftCol.slice(0, 2).concat(rightCol.slice(0, 2)).map((review: any, i) => (
              <div key={`mobile-${i}`} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 w-full">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating || 5)].map((_, idx) => (
                    <Star key={idx} size={14} className="text-brand-primary fill-brand-primary" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed mb-4">"{review.text}"</p>
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-sm border border-gray-100 shrink-0">
                      <Image 
                        src={review.profile_photo_url} 
                        alt={review.author_name} 
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-dark leading-tight">{review.author_name}</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 border border-gray-100">
                    <Image
                      src={review.platform === 'Facebook' ? 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' : 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'}
                      alt={review.platform || 'Google'}
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
