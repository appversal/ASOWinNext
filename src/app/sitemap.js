import { blogPosts } from "./(site)/blog/blogData";
import { getCategoryHubs } from "./(site)/blog/categories";
import { authors } from "./(site)/blog/authors";

export const dynamic = "force-static";

const SITE_URL = "https://www.asowin.com";

// [path, lastModified, priority, changeFrequency]
const STATIC_PAGES = [
  ["/", "2026-05-04", 1.0, "weekly"],
  ["/services/", "2026-05-04", 0.9, "monthly"],
  ["/services/app-store-optimization/", "2026-05-04", 0.88, "monthly"],
  ["/services/keyword-installs/", "2026-05-04", 0.88, "monthly"],
  ["/services/app-reputation-management/", "2026-05-04", 0.88, "monthly"],
  ["/services/automated-aso-ai/", "2026-05-04", 0.88, "monthly"],
  ["/services/creative-ab-testing/", "2026-05-04", 0.88, "monthly"],
  ["/services/paid-user-acquisition/", "2026-05-04", 0.88, "monthly"],
  ["/about/", "2026-05-04", 0.85, "monthly"],
  ["/contact/", "2026-05-04", 0.8, "yearly"],
  ["/aso-agency-usa/", "2026-05-04", 0.8, "monthly"],
  ["/aso-agency-india/", "2026-05-04", 0.8, "monthly"],
  ["/aso-agency-indonesia/", "2026-05-04", 0.8, "monthly"],
  ["/automated-review-replies/", "2026-05-04", 0.75, "monthly"],
  ["/google-play-store-optimization/", "2026-10-22", 0.8, "monthly"],
  ["/media-kit/", "2026-10-22", 0.5, "monthly"],
  ["/success-stories/", "2026-05-04", 0.75, "monthly"],
  ["/book/", "2026-05-04", 0.7, "yearly"],
  ["/privacy-policy/", "2026-05-04", 0.5, "yearly"],
  ["/terms-of-service/", "2026-05-04", 0.5, "yearly"],
  ["/success-stories/pepperfry/", "2026-05-04", 0.7, "monthly"],
  ["/success-stories/bybit/", "2026-05-04", 0.7, "monthly"],
  ["/success-stories/indiabulls-securities/", "2026-05-04", 0.7, "monthly"],
  ["/success-stories/lsm-apps/", "2026-05-04", 0.7, "monthly"],
  ["/success-stories/viker-games/", "2026-05-04", 0.7, "monthly"],
  ["/blog/", null, 0.85, "weekly"],
  ["/blog/category/", null, 0.7, "weekly"],
];

const toDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
};

export default function sitemap() {
  const newest = blogPosts
    .map((post) => toDate(post.updatedAt || post.publishedAt || post.date))
    .filter(Boolean)
    .sort((a, b) => b - a)[0];

  const staticEntries = STATIC_PAGES.map(([path, lastModified, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastModified ? new Date(lastModified) : newest,
    changeFrequency,
    priority,
  }));

  const hubEntries = getCategoryHubs().map((hub) => ({
    url: `${SITE_URL}/blog/category/${hub.slug}/`,
    lastModified: newest,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const authorEntries = Object.keys(authors).map((slug) => ({
    url: `${SITE_URL}/author/${slug}/`,
    lastModified: newest,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const postEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: toDate(post.updatedAt || post.publishedAt || post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const seen = new Set();
  return [...staticEntries, ...hubEntries, ...authorEntries, ...postEntries].filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
