import { blogPosts } from "../blogData";

export const dynamic = "force-static";

const SITE_URL = "https://www.asowin.com";
const esc = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt || b.date) - new Date(a.publishedAt || a.date))
    .slice(0, 100);
  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}/`;
      const date = new Date(post.publishedAt || post.date);
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${Number.isNaN(date.getTime()) ? new Date().toUTCString() : date.toUTCString()}</pubDate>
      ${post.category ? `<category>${esc(post.category)}</category>` : ""}
      <description>${esc(post.description)}</description>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ASOWin Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>App store optimization guides, research, and playbooks from ASOWin.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
