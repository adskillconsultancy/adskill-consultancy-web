"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
      setShowTop(currentScrollY > 100);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  const handleScrollClick = () => {
    if (scrollDirection === 'down') {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Dynamic Scroll Button */}
      <button
        onClick={handleScrollClick}
        aria-label={scrollDirection === 'down' ? "Scroll to bottom" : "Scroll to top"}
        className={cn(
          "w-12 h-12 rounded-full bg-brand-dark text-white shadow-lg flex items-center justify-center transition-all duration-300",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}>
        <ArrowUp 
          size={20} 
          className={cn(
            "transition-transform duration-300", 
            scrollDirection === 'down' ? "rotate-180" : "rotate-0"
          )} 
        />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/16467728544"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}
