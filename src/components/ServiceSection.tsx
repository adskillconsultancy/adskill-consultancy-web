"use client";
import { services } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const defaultImages = [
  "/service/1.png",
  "/service/2.png",
  "/service/3.png",
  "/service/4.png",
  "/service/5.png",
  "/service/6.png",
  "/service/7.png",
  "/service/8.png",
  "/service/9.png",
];

export default function ServiceSection() {
  const loopServices = [...services, ...services, ...services];
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const isHoveredRef = React.useRef(false);
  const isDraggingRef = React.useRef(false);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    let targetScroll = container.scrollLeft;
    let currentScroll = container.scrollLeft;

    const scrollLoop = () => {
      const singleSetWidth = container.scrollWidth / 3;

      if (isDraggingRef.current) {
        // User is swiping on mobile! Let them scroll natively.
        // Sync our JS variables so when they let go, it resumes smoothly from where they are.
        currentScroll = container.scrollLeft;
        targetScroll = container.scrollLeft;

        // Wrap around seamlessly if they swipe past the edge
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft -= singleSetWidth;
          currentScroll = container.scrollLeft;
          targetScroll = container.scrollLeft;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
          currentScroll = container.scrollLeft;
          targetScroll = container.scrollLeft;
        }
      } else {
        if (!isHoveredRef.current) {
          targetScroll += 1.5; // Auto-scroll speed
        }

        // Smooth lerp (momentum) scrolling
        currentScroll += (targetScroll - currentScroll) * 0.04;

        // Infinite loop forwards
        if (currentScroll >= singleSetWidth) {
          currentScroll -= singleSetWidth;
          targetScroll -= singleSetWidth;
        }
        // Infinite loop backwards (if user scrolls left manually with mouse wheel)
        else if (currentScroll <= 0) {
          currentScroll += singleSetWidth;
          targetScroll += singleSetWidth;
        }

        container.scrollLeft = currentScroll;
      }

      animationId = requestAnimationFrame(scrollLoop);
    };

    animationId = requestAnimationFrame(scrollLoop);

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        // Increased multiplier to 2.0 to compensate for the longer, smoother glide
        targetScroll += e.deltaY * 2.0;

        // Limit manual mouse scrolling to the first 9 cards
        const singleSetWidth = container.scrollWidth / 3;
        const maxManualScroll = singleSetWidth - container.clientWidth;
        
        if (targetScroll < 0) targetScroll = 0;
        if (targetScroll > maxManualScroll) targetScroll = maxManualScroll;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="relative pt-12 pb-24 lg:pt-16 bg-[#f8f9fa] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,35,66,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(10,35,66,0.1) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-360 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 px-6 lg:px-12">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary mb-4">
              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                SERVICE AREA
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-[1.1]">
              U.S. Visa Experts
              <br />
              Immigration Made Simple
            </h2>
          </div>
          <div className="mt-8 lg:mt-0 relative hidden md:block">
            <svg
              className="absolute -top-12 right-10 w-12 h-12 text-brand-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <path
                d="M12 5v14M19 12l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 h-14 bg-brand-primary text-brand-dark font-bold hover:bg-white transition-colors">
              All Services
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full pb-12">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 px-6 lg:px-12 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
          onTouchStart={() => (isDraggingRef.current = true)}
          onTouchEnd={() => (isDraggingRef.current = false)}
          onTouchCancel={() => (isDraggingRef.current = false)}>
          {loopServices.map((service, index) => (
            <Link
              key={`${service.id}-${index}`}
              href={`/services/${service.id}`}
              className="w-[450px] md:w-150 shrink-0 flex h-[300px] md:h-100 group relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 cursor-grab active:cursor-grabbing">
              <div className="w-1/2 bg-brand-dark p-6 md:p-8 flex flex-col justify-between relative group-hover:bg-opacity-95 transition-colors overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="w-12 h-12 text-brand-primary mt-2 relative z-10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5">
                    <path
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <span className="text-brand-primary font-bold text-base md:text-lg mb-1 md:mb-2 block">
                    {String((index % services.length) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-snug md:leading-relaxed line-clamp-3">
                    {service.overview}
                  </p>
                </div>
              </div>
              <div className="w-1/2 relative overflow-hidden bg-brand-dark">
                <Image
                  src={defaultImages[index % defaultImages.length]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="flex items-center justify-center w-12 h-24 md:w-16 md:h-32 rounded-full bg-brand-primary text-brand-dark group-hover:bg-white group-hover:text-brand-dark transition-all duration-500 ease-in-out shadow-xl">
                  <ArrowUpRight
                    className="w-[15px] md:w-[18px]"
                    strokeWidth={2.5}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
