import { blogPosts } from "./blog/blogData";

const SITE_URL = "https://www.asowin.com";
const LAST_UPDATED = "2026-08-05";

export const dynamic = "force-static";

const staticPages = [
  ["/", 1, "weekly"],
  ["/services/", 0.9, "monthly"],
  ["/services/app-store-optimization/", 0.9, "monthly"],
  ["/services/keyword-installs/", 0.8, "monthly"],
  ["/services/app-reputation-management/", 0.8, "monthly"],
  ["/services/automated-aso-ai/", 0.8, "monthly"],
  ["/services/creative-ab-testing/", 0.8, "monthly"],
  ["/services/paid-user-acquisition/", 0.8, "monthly"],
  ["/blog/", 0.9, "weekly"],
  ["/about/", 0.7, "monthly"],
  ["/contact/", 0.7, "yearly"],
  ["/aso-agency-usa/", 0.8, "monthly"],
  ["/aso-agency-india/", 0.8, "monthly"],
  ["/aso-agency-indonesia/", 0.8, "monthly"],
  ["/automated-review-replies/", 0.7, "monthly"],
  ["/success-stories/", 0.7, "monthly"],
  ["/book/", 0.6, "yearly"],
  ["/privacy-policy/", 0.3, "yearly"],
  ["/terms-of-service/", 0.3, "yearly"],
];

const toIsoDate = (date) => {
  const parsed = new Date(date || LAST_UPDATED);
  return Number.isNaN(parsed.getTime()) ? LAST_UPDATED : parsed.toISOString();
};

export default function sitemap() {
  const pages = staticPages.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: toIsoDate(post.updatedAt || post.publishedAt || post.date),
    changeFrequency: "monthly",
    priority: post.slug === "app-store-optimization-guide" ? 0.9 : 0.7,
  }));

  return [...pages, ...posts];
}
