"use client";

import { Suspense, useEffect, useState, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { createClient } from '@/lib/client';

interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: string;
  published_date: string;
  content: string;
}

const ITEMS_PER_PAGE = 10;

function NewsDashboardContent() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const sourceParam = searchParams.get('source');
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  
  const supabase = createClient();

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

  useEffect(() => {
    fetchNews();
  }, [sourceParam, currentPage]);

  const fetchNews = async () => {
    setLoading(true);
    
    // First get total count for pagination
    let countQuery = supabase
      .from('news')
      .select('*', { count: 'exact', head: true });
      
    if (sourceParam) {
      countQuery = countQuery.eq('source', sourceParam);
    }
    
    const { count } = await countQuery;
    setTotalCount(count || 0);

    // Then get data for current page
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE - 1;

    let query = supabase
      .from('news')
      .select('id, title, url, source, published_date, content')
      .order('published_date', { ascending: false })
      .order('created_at', { ascending: false })
      .range(start, end);
      
    if (sourceParam) {
      query = query.eq('source', sourceParam);
    }
    
    const { data, error } = await query;
    
    if (data && !error) {
      setNews(data);
    }
    setLoading(false);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/news?${params.toString()}`);
  };

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-[#f8f9fa] pb-20">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[35vh] lg:min-h-[40vh] flex items-start pt-28 pb-12 mb-16">
        <div className="absolute inset-0">
          <Image
            ref={bgRef}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
            alt="US immigration news background"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ transform: "scale(1)", transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-360 w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
          <Link href="/" className="lg:hidden inline-flex items-center gap-2 text-brand-primary hover:text-white transition-colors mb-6 font-bold text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div>
            {sourceParam ? (
              <a 
                href={sourceParam === 'USCIS' ? 'https://www.uscis.gov/newsroom/all-news' : 'https://www.dhs.gov/news-releases/press-releases'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 transition-colors text-sm font-semibold mb-4 animate-float-y"
              >
                {sourceParam === 'USCIS' ? 'U.S. Citizenship and Immigration Services' : 'Department of Homeland Security'}
              </a>
            ) : (
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 animate-float-y">
                Intelligence Hub
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] mb-4">
            Government <span className="text-brand-primary">News & Alerts</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
            Stay updated with the latest automated daily updates and reports from USCIS and DHS.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {loading ? (
          <div className="py-20 text-center text-gray-500 font-medium">Loading intelligence data...</div>
        ) : (
          <div>
            {news.length === 0 ? (
              <div className="py-20 text-center bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-brand-dark">No intelligence data found.</h2>
                <p className="mt-2 text-gray-500">Check back later or ensure the database is populated.</p>
              </div>
            ) : (
              <div className="flex flex-col">
                {news.map((item) => {
                  const plainText = item.content ? item.content.replace(/<[^>]*>?/gm, ' ') : '';
                  const snippet = plainText.length > 200 
                    ? plainText.substring(0, 200) + '...'
                    : plainText;
                    
                  // format date: e.g. August 28, 2026
                  let formattedDate = item.published_date;
                  try {
                    const d = new Date(item.published_date);
                    if (!isNaN(d.getTime())) {
                       formattedDate = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                    }
                  } catch (e) {}

                  return (
                    <div key={item.id} className="py-8 border-b border-gray-300 last:border-b-0">
                      <Link href={`/news/${item.id}`} className="inline-block mb-2 group">
                        <h3 className="text-[22px] font-bold text-brand-primary group-hover:underline underline-offset-4 leading-snug">
                          {item.title}
                        </h3>
                      </Link>
                      <div className="text-sm font-bold text-brand-dark mb-4 flex items-center gap-3">
                        <span>{formattedDate}</span>
                        {!sourceParam && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <a 
                              href={item.source === 'USCIS' ? 'https://www.uscis.gov/newsroom/all-news' : 
                                    item.source === 'DHS' ? 'https://www.dhs.gov/news-releases/press-releases' : '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="uppercase text-brand-secondary text-xs hover:underline"
                            >
                              {item.source === 'USCIS' ? 'U.S. Citizenship and Immigration Services' : 
                               item.source === 'DHS' ? 'Department of Homeland Security' : item.source}
                            </a>
                          </>
                        )}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {snippet}
                      </p>
                    </div>
                  );
                })}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between border-t border-gray-300 bg-white px-4 py-6 sm:px-6 mt-8 rounded-b-2xl shadow-sm">
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-bold">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to <span className="font-bold">{Math.min(currentPage * ITEMS_PER_PAGE, totalCount)}</span> of <span className="font-bold">{totalCount}</span> results
                        </p>
                      </div>
                      <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                          </button>
                          
                          {/* Simple page numbers */}
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                             let pageNum = currentPage;
                             if (currentPage <= 3) pageNum = i + 1;
                             else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                             else pageNum = currentPage - 2 + i;
                             
                             if (pageNum > 0 && pageNum <= totalPages) {
                               return (
                                <button
                                  key={pageNum}
                                  onClick={() => handlePageChange(pageNum)}
                                  aria-current={currentPage === pageNum ? "page" : undefined}
                                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                                    currentPage === pageNum 
                                      ? "z-10 bg-brand-primary text-brand-dark focus-visible:outline-brand-primary"
                                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                                  }`}
                                >
                                  {pageNum}
                                </button>
                               );
                             }
                             return null;
                          })}

                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default function NewsDashboard() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center text-gray-500 font-medium">Loading intelligence data...</div>}>
      <NewsDashboardContent />
    </Suspense>
  );
}
