import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-[#f8f9fa] relative overflow-hidden px-6 py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #0a2342 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 md:w-150 h-100 md:h-150 bg-brand-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center bg-white p-10 md:p-16 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center">
        {/* 404 Text */}
        <div className="relative mb-4 md:mb-6">
          <h1 className="text-[100px] md:text-[160px] font-black text-transparent bg-clip-text bg-linear-to-br from-brand-dark to-brand-primary leading-none select-none drop-shadow-sm">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Page not found!
        </h2>
        
        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-md leading-relaxed">
          Sorry we can't find that page! The page you are looking for was never existed or has been removed.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group"
        >
          <Home size={18} className="transition-transform group-hover:scale-110" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
