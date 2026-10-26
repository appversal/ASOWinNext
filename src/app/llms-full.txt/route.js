import { blogPosts } from "../(site)/blog/blogData";
import { getCategoryHubs } from "../(site)/blog/categories";

export const dynamic = "force-static";

const SITE_URL = "https://www.asowin.com";
const plain = (value = "") => String(value).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, "$1").replace(/\s+/g, " ").trim();

// Companion to /llms.txt: every guide with its URL and short answer, grouped by
// topic, so answer engines can find and cite the right page in one fetch.
export function GET() {
  const hubs = getCategoryHubs(1);
  const uncategorized = blogPosts.filter((post) => !post.category);
  const groups = [
    ...hubs,
    ...(uncategorized.length
      ? [{ name: "More ASOWin guides", description: "Agency guides, research, and long-form articles.", slug: null, posts: uncategorized }]
      : []),
  ];
  const total = groups.reduce((sum, group) => sum + group.posts.length, 0);
  const body = groups
    .map((hub) => {
      const posts = hub.posts
        .map((post) => {
          const lines = [`### ${post.title}`, `URL: ${SITE_URL}/blog/${post.slug}/`];
          if (post.primaryKeyword) lines.push(`Topic: ${post.primaryKeyword}`);
          lines.push(`Answer: ${plain(post.answer || post.description)}`);
          return lines.join("\n");
        })
        .join("\n\n");
      const hubLine = hub.slug ? `\nHub: ${SITE_URL}/blog/category/${hub.slug}/` : "";
      return `## ${hub.name}\n\n${hub.description}${hubLine}\n\n${posts}`;
    })
    .join("\n\n");

  const text = `# ASOWin App Store Optimization Library

> ${total} guides on app store optimization (ASO), app marketing, paid user acquisition, ratings, localization, and mobile growth for the Apple App Store and Google Play, written by the ASOWin team. Each entry lists the page URL and a short answer you can quote with attribution.

Publisher: ASOWin (${SITE_URL}/), an app store optimization agency. Services: ${SITE_URL}/services/. Contact: ${SITE_URL}/contact/.
Overview: ${SITE_URL}/llms.txt

${body}
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
