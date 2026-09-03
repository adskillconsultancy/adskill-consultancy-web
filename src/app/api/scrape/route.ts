import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { createClient } from '@/lib/server';

async function fetchArticleContent(url: string, baseUrl: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    
    // Narrow down to the actual content container, prioritizing narrow classes over broad wrappers
    const prioritizedSelectors = [
      '.field-name-body', 
      '.field--name-body', 
      '.usa-prose', 
      '.node__content', 
      '.layout-content', 
      '.region-content',
      'article', 
      '#main-content', 
      'main'
    ];
    
    let contentNode: any = null;
    let maxLen = 0;
    
    for (const selector of prioritizedSelectors) {
      const nodes = $(selector);
      if (nodes.length > 0) {
        // Pick the best node for this specific selector
        nodes.each((_, el) => {
          const textLen = $(el).text().trim().length;
          if (textLen > maxLen) {
            maxLen = textLen;
            contentNode = $(el);
          }
        });
        
        // If we found a node with substantial text, stop searching broader selectors!
        // Using 250 to avoid grabbing tiny snippets like "Qualtrics feedback" blocks
        if (maxLen > 250 && contentNode) {
          break;
        }
      }
    }
    
    if (contentNode && contentNode.length > 0) {
      // Remove boilerplate
      contentNode.find('script, style, header, footer, nav, .breadcrumb, .usa-breadcrumb, .usa-banner, .site-header, .site-footer, .howyouknow-header-block, .block-howyouknowdescription').remove();
      
      // Remove Topics / Keywords sections at the bottom
      contentNode.find('.field-name-field-topics, .field-name-field-keywords, .usa-collection, .topics, .keywords, h3:contains("TOPICS"), h3:contains("KEYWORDS")').remove();

      // Convert relative URLs to absolute URLs
      contentNode.find('img').each((_: any, img: any) => {
        const src = $(img).attr('src');
        if (src && src.startsWith('/')) {
          $(img).attr('src', baseUrl + src);
        }
        // Remove styling/classes that might conflict with Tailwind prose
        $(img).removeAttr('class');
        $(img).removeAttr('style');
        $(img).removeAttr('width');
        $(img).removeAttr('height');
      });
      
      contentNode.find('a').each((_: any, a: any) => {
        const href = $(a).attr('href');
        if (href && href.startsWith('/')) {
          $(a).attr('href', baseUrl + href);
        }
      });
      
      let htmlContent = contentNode.html();
      if (htmlContent && htmlContent.trim().length > 100) {
         return htmlContent.trim();
      }
    }
    
    return 'Content could not be automatically extracted. Please visit the original source.';
  } catch (e) {
    console.error('Error fetching article content:', url, e);
    return 'Content extraction failed.';
  }
}

function parseDateString(dateStr: string): string {
  try {
    // Append 12:00:00 UTC so the date doesn't shift backward for users in timezones behind UTC
    const d = new Date(dateStr + " 12:00:00 UTC");
    if (!isNaN(d.getTime())) {
      return d.toISOString().split('T')[0];
    }
  } catch (e) {}
  return new Date().toISOString().split('T')[0];
}

export async function GET(req: Request) {
  try {
    const supabase = await createClient();
    const scrapedNews: any[] = [];

    console.log('Starting automated cron scrape...');

    // --- 1. Scrape USCIS (Pages 0-4) ---
    for (let page = 0; page < 5; page++) {
      try {
        const uscisRes = await fetch(`https://www.uscis.gov/newsroom/all-news?page=${page}`, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
          next: { revalidate: 0 } 
        });
        const uscisHtml = await uscisRes.text();
        const $uscis = cheerio.load(uscisHtml);
        
        $uscis('.views-row').slice(0, 10).each((_, el) => {
          const titleEl = $uscis(el).find('.views-field-title a, h2 a, h3 a').first();
          const title = titleEl.text().trim();
          let url = titleEl.attr('href');
          const rawDate = $uscis(el).find('time, .date-display-single, .datetime, .views-field-created, .usa-card__date').text().trim();
          
          if (title && url) {
            if (!url.startsWith('http')) url = 'https://www.uscis.gov' + url;
            scrapedNews.push({ title, url, source: 'USCIS', published_date: parseDateString(rawDate) });
          }
        });
      } catch (e) {
        console.error(`USCIS scrape error on page ${page}:`, e);
      }
    }

    // --- 2. Scrape DHS (Pages 0-4) ---
    for (let page = 0; page < 5; page++) {
      try {
        const dhsRes = await fetch(`https://www.dhs.gov/all-news-updates?page=${page}`, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
          next: { revalidate: 0 }
        });
        const dhsHtml = await dhsRes.text();
        const $dhs = cheerio.load(dhsHtml);
        
        $dhs('.usa-card__container, .views-row').slice(0, 10).each((_, el) => {
          const titleEl = $dhs(el).find('h3 a, .usa-card__heading a').first();
          const title = titleEl.text().trim();
          let url = titleEl.attr('href');
          const rawDate = $dhs(el).find('time, .date-display-single, .datetime, .views-field-created, .usa-card__date, .views-field-field-date').text().trim();
          
          if (title && url) {
            if (!url.startsWith('http')) url = 'https://www.dhs.gov' + url;
            scrapedNews.push({ title, url, source: 'DHS', published_date: parseDateString(rawDate) });
          }
        });
      } catch (e) {
        console.error(`DHS scrape error on page ${page}:`, e);
      }
    }

    // --- 3. Deep Fetch and Save to Supabase ---
    let insertedCount = 0;
    
    // To prevent checking thousands of links, let's first get existing URLs to skip deep scraping
    const { data: existingRecords } = await supabase.from('news').select('url, content, published_date');
    const existingMap = new Map(existingRecords?.map(r => [r.url, r]) || []);

    for (const news of scrapedNews) {
      const existingRecord = existingMap.get(news.url);
      
      // Update date for existing records if it was previously set to a scrape timestamp
      if (existingRecord && existingRecord.published_date !== news.published_date) {
        await supabase.from('news').update({ published_date: news.published_date }).eq('url', news.url);
      }
      
      // If we already have rich HTML content, skip deep fetch
      if (existingRecord?.content && existingRecord.content.includes('<p>')) {
        continue;
      }

      // It's a new article or has bad content, fetch the deep content!
      console.log('Fetching full article:', news.url);
      const baseUrl = news.source === 'USCIS' ? 'https://www.uscis.gov' : 'https://www.dhs.gov';
      const fullContent = await fetchArticleContent(news.url, baseUrl);

      if (existingRecord) {
        // Update existing bad record
        const { error } = await supabase
          .from('news')
          .update({ content: fullContent, published_date: news.published_date })
          .eq('url', news.url);
        
        if (!error) insertedCount++;
        else console.error('DB Update Error:', error);
      } else {
        // Insert new record
        const { error } = await supabase
          .from('news')
          .insert({
            title: news.title,
            url: news.url,
            source: news.source,
            content: fullContent,
            published_date: news.published_date
          });
        
        if (!error) insertedCount++;
        else console.error('DB Insert Error:', error);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Automated cron finished. Scraped ${scrapedNews.length} items. Deep-fetched and inserted ${insertedCount} new items.`
    });

  } catch (error: any) {
    console.error('Scrape API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
