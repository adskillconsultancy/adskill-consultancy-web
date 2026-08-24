import { NextResponse } from 'next/server';
import localReviewsData from '@/data/reviews.json';

export async function GET() {
  const apiKey = process.env.SERPAPI_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID; // ChIJPX_anbf57qcRNVhJ30_dTnk

  if (!apiKey) {
    return NextResponse.json({ error: 'Missing SERPAPI_KEY in .env.local' }, { status: 500 });
  }

  try {
    // 1. Fetch live API reviews (sorted by newest)
    let url = `https://serpapi.com/search.json?engine=google_maps_reviews&place_id=${placeId}&api_key=${apiKey}&sort_by=newest`;
    let apiReviews: any[] = [];
    
    // We will fetch up to 2 pages to get all 12+ live reviews
    for (let i = 0; i < 2; i++) {
      const res = await fetch(url, { next: { revalidate: 43200 } }); // Cache for 12 hours
      if (!res.ok) {
        if (i === 0) console.warn(`SerpApi responded with status: ${res.status}`);
        break; // If page fails, just return what we have
      }
      const data = await res.json();
      if (data.reviews) {
        apiReviews = [...apiReviews, ...data.reviews];
      }
      if (data.serpapi_pagination?.next_page_token) {
        url = `https://serpapi.com/search.json?engine=google_maps_reviews&place_id=${placeId}&api_key=${apiKey}&sort_by=newest&next_page_token=${data.serpapi_pagination.next_page_token}`;
      } else {
        break; 
      }
    }

    // Map SerpApi's response format
    const formattedApiReviews = apiReviews.map((review: any) => ({
      author_name: review.user?.name || 'Google User',
      profile_photo_url: review.user?.thumbnail || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.user?.name || 'User')}&background=random`,
      rating: review.rating || 5,
      relative_time_description: review.date || '',
      text: review.snippet || review.details || ''
    }));

    // 2. Read local hardcoded reviews (from your custom JSON file)
    let localReviews: any[] = [];
    try {
      localReviews = localReviewsData;
    } catch (e) {
      console.warn("Could not load local reviews.json", e);
    }

    // 3. Combine both lists and remove duplicates based on the author's name!
    const allCombined = [...formattedApiReviews, ...localReviews];
    
    const uniqueReviews = Array.from(
      new Map(allCombined.map(item => [item.author_name, item])).values()
    );

    return NextResponse.json(uniqueReviews);
  } catch (error) {
    console.error('Error fetching reviews from SerpApi:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
