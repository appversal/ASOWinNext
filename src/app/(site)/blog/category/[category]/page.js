import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import BlogPostGrid from "../../../../components/BlogPostGrid";
import { getCategoryHubs } from "../../categories";

const SITE_URL = "https://www.asowin.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategoryHubs().map((hub) => ({ category: hub.slug }));
}

const findHub = (slug) => getCategoryHubs().find((hub) => hub.slug === slug);

export async function generateMetadata({ params }) {
  const { category } = await params;
  const hub = findHub(category);
  if (!hub) return {};
  const title = `${hub.name}: ${hub.posts.length} ASO Guides | ASOWin`;
  const canonical = `/blog/category/${hub.slug}/`;
  return {
    title,
    description: hub.description,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical, title, description: hub.description, siteName: "ASOWin" },
    twitter: { card: "summary_large_image", title, description: hub.description, site: "@asowin" },
  };
}

export default async function CategoryHub({ params }) {
  const { category } = await params;
  const hub = findHub(category);
  if (!hub) notFound();
  const others = getCategoryHubs().filter((item) => item.slug !== hub.slug);
  const posts = [...hub.posts].sort(
    (a, b) => new Date(b.publishedAt || b.date) - new Date(a.publishedAt || a.date),
  );
  const url = `${SITE_URL}/blog/category/${hub.slug}/`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${hub.name}: ASO guides`,
      description: hub.description,
      url,
      isPartOf: { "@type": "WebSite", name: "ASOWin", url: SITE_URL },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/blog/${post.slug}/`,
          name: post.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
        { "@type": "ListItem", position: 3, name: hub.name, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {schema.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
      <Navbar />
      <div className="w-full bg-gradient-to-b from-[#EEF6FF] to-[#FFFFFF] px-4 sm:px-6 lg:px-20 pt-12 pb-12 md:pt-16">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#306777]">Home</Link> /{" "}
            <Link href="/blog/" className="hover:text-[#306777]">Blog</Link> / <span>{hub.name}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">{hub.name}</h1>
          <p className="text-lg sm:text-xl text-[#4B5563] max-w-3xl leading-relaxed">{hub.description}</p>
          <p className="text-sm text-gray-500 mt-4">{posts.length} guides</p>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlogPostGrid posts={posts} />
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore other topics</h2>
            <div className="flex flex-wrap gap-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/category/${item.slug}/`}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-[#306777] hover:text-[#306777] transition-colors"
                >
                  {item.name} ({item.posts.length})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
