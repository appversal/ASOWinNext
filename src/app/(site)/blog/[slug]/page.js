import { notFound } from "next/navigation";
import BlogHero from "../../../components/BlogHero";
import BlogContent from "../../../components/BlogContent";
import BlogCTA from "../../../components/BlogCTA";
import ReadMoreBlogs from "../../../components/ReadMoreBlogs";
import Footer from "../../../components/Footer";
import { blogPosts, authors, authorPath, slugifyAuthor } from "../blogData";
import { seoClusterBySlug, seoClusterPosts } from "../seoClusterData";
import { categoryKey, getCategoryHubs } from "../categories";

const SITE_URL = "https://www.asowin.com";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

// Named authors with a profile page are a Person; anything else falls back to the organization.
const authorSchema = (name) => {
  const path = authorPath(name);
  if (!path) return { "@type": "Organization", name, url: `${SITE_URL}/about/` };
  const profile = authors[slugifyAuthor(name)];
  return {
    "@type": "Person",
    "@id": `${SITE_URL}${path}#person`,
    name,
    url: `${SITE_URL}${path}`,
    ...(profile.avatar && { image: `${SITE_URL}${profile.avatar}` }),
    ...(profile.social?.linkedin && { sameAs: [profile.social.linkedin] }),
  };
};

const jsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

// blogPosts already includes seoClusterPosts (see blogData.js), so related-post
// lookups below only need blogPosts, not a merge with seoClusterPosts again.

const SERVICE_LABELS = [
  ["creative-ab-testing", "Creative A/B testing", "Test icons, screenshots, and pages with a clear roadmap"],
  ["paid-user-acquisition", "Paid user acquisition", "Scale installs with ads aligned to your store pages"],
  ["keyword-installs", "Keyword installs", "Support priority keywords with compliant, quality-led programs"],
  ["automated-aso-ai", "Automated ASO with AI", "Faster research, reporting, and monitoring"],
  ["app-reputation-management", "App reputation management", "Protect and improve ratings and reviews"],
  ["success-stories", "ASOWin case studies", "See results from real client engagements"],
  ["contact", "Request an ASO consultation", "Talk to the ASOWin team about your app"],
  ["app-store-optimization", "App store optimization services", "Full-service ASO for visibility and conversion"],
];

const serviceCard = (href) => {
  const match = SERVICE_LABELS.find(([key]) => href.includes(key)) || SERVICE_LABELS[SERVICE_LABELS.length - 1];
  return `<a class="aso-service" href="${escapeHtml(href)}"><strong>${match[1]}</strong><span>${match[2]}</span></a>`;
};

const buildContent = (post) => {
  const relatedLinks = post.related
    .map((slug) => blogPosts.find((item) => item.slug === slug))
    .filter(Boolean)
    .map(
      (item) =>
        `<a class="aso-related" href="/blog/${escapeHtml(item.slug)}/"><span class="aso-related-cat">${escapeHtml(item.category || "ASO guide")}</span><strong>${escapeHtml(item.title)}</strong></a>`,
    )
    .join("");

  const serviceLinks = [...new Set([...(post.serviceLinks || []), "/success-stories/"])].map(serviceCard).join("");
  const topics = [post.primaryKeyword, ...post.secondaryKeywords];
  const hub = getCategoryHubs().find((item) => item.slug === categoryKey(post.category));
  const moreInCategory = hub
    ? hub.posts
        .filter((item) => item.slug !== post.slug && !post.related.includes(item.slug))
        .slice(0, 3)
        .map(
          (item) =>
            `<a class="aso-related" href="/blog/${escapeHtml(item.slug)}/"><span class="aso-related-cat">${escapeHtml(hub.name)}</span><strong>${escapeHtml(item.title)}</strong></a>`,
        )
        .join("")
    : "";

  return `
    <div class="aso-callout">
      <div class="aso-callout-label">Quick answer</div>
      <p>${escapeHtml(post.answer)}</p>
    </div>
    <div class="aso-chips" aria-label="Topics covered">
      ${hub ? `<a class="aso-chip aso-chip-link" href="/blog/category/${hub.slug}/">${escapeHtml(hub.name)}</a>` : ""}
      ${topics.map((topic) => `<span class="aso-chip">${escapeHtml(topic)}</span>`).join("")}
    </div>
    ${post.sections
      .map(
        (section, index) => `
          <h2 id="section-${index + 1}">${escapeHtml(section.heading)}</h2>
          ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        `,
      )
      .join("")}
    ${
      post.steps && post.steps.length
        ? `<h2 id="step-by-step">How to do it, step by step</h2>
    <ol class="aso-howto">${post.steps
      .map(([title, detail]) => `<li><strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span></li>`)
      .join("")}</ol>`
        : ""
    }
    ${
      post.examples && post.examples.length
        ? `<h2 id="examples">Before and after examples</h2>
    <p class="aso-note">Illustrative examples written for a generic app in this category, not client results. Swap in your own product, audience, and data.</p>
    <div class="aso-examples">${post.examples
      .map(
        ([context, before, after, why]) => `
      <div class="aso-example">
        <div class="aso-example-context">${escapeHtml(context)}</div>
        <div class="aso-ba">
          <div class="aso-before"><span>Before</span><p>${escapeHtml(before)}</p></div>
          <div class="aso-after"><span>After</span><p>${escapeHtml(after)}</p></div>
        </div>
        <p class="aso-why"><strong>Why it works:</strong> ${escapeHtml(why)}</p>
      </div>`,
      )
      .join("")}</div>`
        : ""
    }
    <h2 id="action-plan">Action plan</h2>
    <ol class="aso-steps">${post.playbook.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
    <h2 id="measurement">Metrics to monitor</h2>
    <ul class="aso-metrics">${post.metrics.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <p class="aso-note">Record the baseline, release date, audience, markets, and external changes before interpreting movement. Rankings and conversion are useful signals, but a decision is stronger when activation, retention, and business value confirm that the page attracted the right users.</p>
    <h2 id="faq">Frequently asked questions</h2>
    <div class="aso-faq">
      ${post.faqs
        .map(
          (item, index) => `
            <details class="aso-faq-item"${index === 0 ? " open" : ""}>
              <summary>${escapeHtml(item.q)}</summary>
              <div class="aso-faq-answer"><p>${escapeHtml(item.a)}</p></div>
            </details>`,
        )
        .join("")}
    </div>
    ${
      relatedLinks
        ? `<h2 id="next-reading">Keep reading</h2><div class="aso-related-grid">${relatedLinks}</div>`
        : ""
    }
    ${
      moreInCategory
        ? `<h2 id="more-in-category">More in ${escapeHtml(hub.name)}</h2><div class="aso-related-grid">${moreInCategory}</div><p><a href="/blog/category/${hub.slug}/">Browse all ${hub.posts.length} ${escapeHtml(hub.name)} guides</a></p>`
        : ""
    }
    ${
      serviceLinks
        ? `<h2 id="work-with-asowin">Work with ASOWin</h2><div class="aso-service-grid">${serviceLinks}</div>`
        : ""
    }
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
    authors: [{ name: post.author, url: authorPath(post.author) || "/about/" }],
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
      images: [{ url: post.ogImage || post.heroImage, width: post.ogImage ? 1200 : undefined, height: post.ogImage ? 630 : undefined, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.ogImage || post.heroImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function SeoClusterArticle({ params }) {
  const { slug } = await params;
  const post = seoClusterBySlug[slug];
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}/`;
  const hub = getCategoryHubs().find((item) => item.slug === categoryKey(post.category));
  const articleBody = [post.answer, ...post.sections.flatMap((section) => section.paragraphs)].join(" ");
  const relatedBlogs = post.related
    .map((relatedSlug) => blogPosts.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.ogImage || post.heroImage}`,
    inLanguage: "en",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: authorSchema(post.author),
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
      ...(hub
        ? [
            { "@type": "ListItem", position: 3, name: hub.name, item: `${SITE_URL}/blog/category/${hub.slug}/` },
            { "@type": "ListItem", position: 4, name: post.title, item: url },
          ]
        : [{ "@type": "ListItem", position: 3, name: post.title, item: url }]),
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
