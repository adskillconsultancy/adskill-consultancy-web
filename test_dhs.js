const cheerio = require('cheerio');

async function testScrape() {
  const url = 'https://www.dhs.gov/news/2026/09/02/worst-worst-ice-arrests-child-abusers-robbers-and-drug-traffickers';
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const html = await res.text();
  const $ = cheerio.load(html);
  
  let contentNode = $('.field-name-body, .field--name-body, .usa-prose, .node__content, .layout-content, #main-content').first();
  if (contentNode.length === 0) {
    contentNode = $('article').first();
  }
  if (contentNode.length === 0) {
    contentNode = $('main').first();
  }
  
  console.log('Found contentNode with classes:', contentNode.attr('class'));
  
  if (contentNode.length > 0) {
    // Remove boilerplate
    contentNode.find('script, style, header, footer, nav, .breadcrumb, .usa-breadcrumb, .usa-banner, .site-header, .site-footer, .howyouknow-header-block, .block-howyouknowdescription').remove();
    
    // Remove Topics / Keywords sections at the bottom
    contentNode.find('.field-name-field-topics, .field-name-field-keywords, .usa-collection, .topics, .keywords, h3:contains("TOPICS"), h3:contains("KEYWORDS")').remove();

    let htmlContent = contentNode.html();
    console.log('HTML length:', htmlContent?.trim().length);
    console.log('HTML snippet:', htmlContent?.substring(0, 500));
  }
}

testScrape();
