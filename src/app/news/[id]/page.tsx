import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { createClient } from '@/lib/server';

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient();
  const { id } = await params;

  const { data: article, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !article) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center py-20 px-6">
        <h1 className="text-2xl font-bold text-brand-dark mb-4">Intelligence Report Not Found</h1>
        <Link href="/news" className="text-brand-primary hover:underline font-medium inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Hub
        </Link>
      </div>
    );
  }



  // Format date: e.g. 08/11/2026
  let formattedDate = article.published_date;
  try {
    const d = new Date(article.published_date);
    if (!isNaN(d.getTime())) {
       const month = String(d.getMonth() + 1).padStart(2, '0');
       const day = String(d.getDate()).padStart(2, '0');
       const year = d.getFullYear();
       formattedDate = `${month}/${day}/${year}`;
    }
  } catch (e) {}

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/news" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors font-bold text-sm mb-8">
          <ArrowLeft size={16} /> Back to News List
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-dark leading-tight mb-8">
              {article.title}
            </h1>
            <div className="text-gray-800 font-medium mb-8">
              Release Date : {formattedDate}
            </div>
            {/* Hardcoded italic subtitle since scraping does not currently extract this, but mimicking the design closely */}
            <p className="text-gray-400 italic font-medium">
              Official update from {' '}
              <a 
                href={article.source === 'USCIS' ? 'https://www.uscis.gov/newsroom/all-news' : 
                      article.source === 'DHS' ? 'https://www.dhs.gov/news-releases/press-releases' : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary hover:underline transition-colors"
              >
                {article.source === 'USCIS' ? 'U.S. Citizenship and Immigration Services' : 
                 article.source === 'DHS' ? 'The Department of Homeland Security' : article.source}
              </a>
            </p>
          </header>

          <div 
            className="prose prose-lg max-w-none text-gray-800 leading-loose prose-p:mb-6 prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-sm"
            dangerouslySetInnerHTML={{ __html: article.content || '<p>Full content was not successfully extracted during the automated sync. Please view the original source.</p>' }}
          />

          <div className="mt-16 pt-8 border-t border-gray-300">
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline"
            >
              View Original Official Source <ExternalLink size={16} />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
