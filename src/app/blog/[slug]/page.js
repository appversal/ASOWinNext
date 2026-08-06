import { notFound } from "next/navigation";
import BlogHero from "../../components/BlogHero";
import BlogContent from "../../components/BlogContent";
import BlogCTA from "../../components/BlogCTA";
import ReadMoreBlogs from "../../components/ReadMoreBlogs";
import Footer from "../../components/Footer";
import { blogPosts } from "../blogData";
import { seoClusterBySlug, seoClusterPosts } from "../seoClusterData";

const SITE_URL = "https://www.asowin.com";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const jsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

const buildContent = (post) => {
  const relatedLinks = post.related
    .map((slug) => blogPosts.find((item) => item.slug === slug))
    .filter(Boolean)
    .map(
      (item) =>
        `<li><a href="/blog/${escapeHtml(item.slug)}/">${escapeHtml(item.title)}</a></li>`,
    )
    .join("");

  const serviceLinks = (post.serviceLinks || [])
    .map((href) => {
      const label = href.includes("creative-ab-testing")
        ? "Creative A/B testing services"
        : href.includes("paid-user-acquisition")
          ? "Paid user acquisition services"
          : href.includes("reputation") || href.includes("review")
            ? "App reputation management"
            : href.includes("contact")
              ? "Request an ASO consultation"
              : "App store optimization services";
      return `<li><a href="${escapeHtml(href)}">${label}</a></li>`;
    })
    .join("");

  return `
    <p class="blog-answer"><strong>Quick answer:</strong> ${escapeHtml(post.answer)}</p>
    <h2 id="why-this-matters">What this guide will help you do</h2>
    <p>This guide focuses on <strong>${escapeHtml(post.primaryKeyword)}</strong> with a practical, evidence-led approach. It covers ${post.secondaryKeywords.map(escapeHtml).join(", ")} without repeating phrases for artificial density. Use the framework to make a clear decision, document the result, and improve the next release.</p>
    ${post.sections
      .map(
        (section, index) => `
          <h2 id="section-${index + 1}">${escapeHtml(section.heading)}</h2>
          ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        `,
      )
      .join("")}
    <h2 id="action-plan">Action plan</h2>
    <ol>${post.playbook.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
    <h2 id="measurement">Metrics to monitor</h2>
    <ul>${post.metrics.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <p>Record the baseline, release date, audience, markets, and external changes before interpreting movement. Rankings and conversion are useful signals, but a decision is stronger when activation, retention, and business value confirm that the page attracted the right users.</p>
    <h2 id="next-reading">Continue the topic cluster</h2>
    <p>Use these supporting resources to move from this strategy into the next implementation step:</p>
    <ul>${relatedLinks}${serviceLinks}</ul>
    <h2 id="faq">Frequently asked questions</h2>
    ${post.faqs
      .map(
        (item, index) => `<h3 id="faq-${index + 1}">${escapeHtml(item.q)}</h3><p>${escapeHtml(item.a)}</p>`,
      )
      .join("")}
    ${
      post.sources.length
        ? `<h2 id="sources">Primary sources</h2><p>Platform capabilities and limits can change. Verify current requirements in these official resources:</p><ul>${post.sources
            .map(
              (source) =>
                `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`,
            )
            .join("")}</ul>`
        : ""
    }
  `;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return seoClusterPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = seoClusterBySlug[slug];

  if (!post) return {};

  const canonical = `/blog/${post.slug}/`;
  return {
    title: `${post.title} | ASOWin`,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    authors: [{ name: post.author, url: "/about/" }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      section: post.category,
      tags: [post.primaryKeyword, ...post.secondaryKeywords],
      images: [{ url: post.heroImage, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function SeoClusterArticle({ params }) {
  const { slug } = await params;
  const post = seoClusterBySlug[slug];
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}/`;
  const articleBody = [post.answer, ...post.sections.flatMap((section) => section.paragraphs)].join(" ");
  const relatedBlogs = post.related
    .map((relatedSlug) => blogPosts.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.heroImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: post.author, url: `${SITE_URL}/about/` },
    publisher: {
      "@type": "Organization",
      name: "ASOWin",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/ASOWin.png` },
    },
    articleSection: post.category,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
    wordCount: articleBody.trim().split(/\s+/).length,
    isAccessibleForFree: true,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <BlogHero
        category={post.category}
        date={post.date}
        title={post.title}
        description={post.description}
        author={post.author}
        readTime={post.readTime}
        heroImage={post.heroImage}
      />
      <BlogContent content={buildContent(post)} />
      <BlogCTA
        title="Turn your next ASO decision into measurable growth"
        subtitle="Get a focused audit of visibility, conversion, ratings, and market opportunities."
        buttonText="Request an ASO Consultation"
        buttonLink="/contact/"
      />
      <ReadMoreBlogs currentSlug={post.slug} blogs={relatedBlogs} />
      <Footer />
    </div>
  );
}
