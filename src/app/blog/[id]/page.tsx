import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { recentBlogs } from "@/lib/blogData";
import { blogPostSchema, breadcrumbSchema, jsonLdScript } from "@/lib/jsonld";

const BASE_URL = "https://adskillconsultancy.com";

// Simulate fetching a blog post
const getPost = (id: string) => {
  const post = recentBlogs.find(p => p.id === id);
  if (!post) return null;

  return {
    ...post,
    content: `
      <p>This is a detailed article about ${post.title}. In 2026, navigating the complexities of U.S. immigration requires a strategic approach and up-to-date knowledge of policy changes.</p>
      
      <h2>Key Takeaways for Applicants</h2>
      <p>Recent updates have streamlined certain processes while introducing new compliance requirements. It is crucial for applicants to prepare their documentation meticulously.</p>
      <ul>
        <li>Ensure all forms are updated to the latest 2026 versions.</li>
        <li>Gather comprehensive evidence to support your claims.</li>
        <li>Consult with a qualified immigration attorney to review your petition.</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As the landscape continues to evolve, staying informed is your best defense against unexpected delays. Our team at Adskill Consultancy remains committed to guiding you through every step of your immigration journey.</p>
    `,
    date: "August 20, 2026",
    dateISO: "2026-08-20",
    description: `Expert guide on ${post.title}. Stay informed about 2026 US immigration changes and requirements for a successful application.`,
  };
};

export function generateStaticParams() {
  return recentBlogs.map((blog) => ({ id: blog.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return { title: "Article Not Found" };

  const url = `${BASE_URL}/blog/${id}`;

  // Short title for template — template appends "| AdSkill Consultancy" (21 chars)
  // Keep page title portion ≤39 chars so total is ≤60 chars
  const shortTitle = post.title.length > 39
    ? post.title.substring(0, 36) + "…"
    : post.title;

  // Keep description ≤155 chars
  const description = post.description.length > 155
    ? post.description.substring(0, 152) + "…"
    : post.description;

  return {
    title: shortTitle,
    description,
    keywords: [
      "US immigration 2026",
      "visa guide",
      "immigration news",
      "green card guide",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: shortTitle,
      siteName: "AdSkill Consultancy",
      description,
      url,
      type: "article",
      publishedTime: post.dateISO,
      authors: ["AdSkill Consultancy Inc."],
      images: [
        {
          url: `${BASE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: shortTitle,
      description,
      images: [`${BASE_URL}${post.image}`],
    },
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    notFound();
  }

  const url = `${BASE_URL}/blog/${id}`;

  const blogLd = blogPostSchema({
    title: post.title,
    description: post.description,
    url,
    image: `${BASE_URL}${post.image}`,
    datePublished: post.dateISO,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: post.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-20">
        <div className="max-w-200 mx-auto px-6 lg:px-12">
          
          {/* Back Link */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
          </div>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
              Visa Updates
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium border-y border-gray-200 py-4">
              <span>Published on {post.date}</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-75 md:h-112.5 rounded-2xl overflow-hidden mb-12 shadow-md">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Area */}
          <article 
            className="prose prose-lg max-w-none text-gray-600 prose-headings:text-brand-dark prose-headings:font-bold prose-a:text-brand-primary hover:prose-a:text-brand-dark transition-colors"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer / CTA */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-75 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                Ready to start your immigration journey?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                Book a consultation with our experienced team today and let us help you navigate the 2026 visa landscape.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 h-12 rounded bg-brand-primary text-brand-dark font-bold hover:bg-white transition-colors relative z-10"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
