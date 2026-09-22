import Image from "next/image";
import Link from "next/link";
import CaseStudyShell, { Arrow, CaseStudyCTA } from "./CaseStudyShell";
import styles from "./case-studies.module.css";

export function growthMetadata(story) {
  const title = story.seoTitle || `${story.name} ASO Case Study | ASOWin`;
  const url = `https://www.asowin.com/success-stories/${story.slug}/`;
  return {
    title,
    description: story.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: story.description,
      url,
      siteName: "ASOWin",
      type: "article",
      images: [
        {
          url: story.og,
          width: 1200,
          height: 630,
          alt: `${story.name}: ${story.metric} ${story.metricLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: story.description,
      images: [story.og],
      site: "@asowin",
    },
  };
}

export default function GrowthCaseStudy({ story }) {
  const url = `https://www.asowin.com/success-stories/${story.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        inLanguage: "en",
        articleSection: story.category,
        headline: `${story.name} ${story.searchTopic}: ${story.headline} ${story.emphasis}`,
        description: story.description,
        mainEntityOfPage: url,
        image: `https://www.asowin.com${story.og}`,
        author: {
          "@type": "Organization",
          "@id": "https://www.asowin.com/#organization",
          name: "ASOWin",
          url: "https://www.asowin.com/",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.asowin.com/#organization",
          name: "ASOWin",
          url: "https://www.asowin.com/",
        },
        about: { "@type": "Organization", name: story.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.asowin.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Success stories",
            item: "https://www.asowin.com/success-stories/",
          },
          { "@type": "ListItem", position: 3, name: story.name, item: url },
        ],
      },
    ],
  };
  return (
    <CaseStudyShell>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <section className={styles.hero} aria-labelledby="case-title">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/success-stories">Success stories</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{story.name}</span>
          </nav>
          <div className={styles.heroHeading}>
            <div>
              <p className={styles.eyebrow}>
                {story.name.toUpperCase()} × ASOWIN
              </p>
              <h1 id="case-title">
                <span className={styles.caseTopic}>{story.name} {story.searchTopic}</span>
                {story.headline}
                <br />
                <em>{story.emphasis}</em>
              </h1>
            </div>
            <div className={styles.heroIntro}>
              <span className={styles.status}>{story.category}</span>
              <p>{story.intro}</p>
              <a href="#results" className={styles.textLink}>
                Explore the impact <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div
            className={`${styles.showcase} ${styles.growthShowcase} ${story.visual === "markets" ? styles.marketShowcase : ""}`}
            style={{ background: story.background }}
          >
            <div className={styles.showcaseCopy}>
              <span className={styles.growthWordmark}>{story.name}</span>
              <p>{story.artCaption}</p>
              <div className={`${styles.ratingStamp} ${styles.growthStamp}`}>
                <strong>{story.metric}</strong>
                <span>{story.metricLabel}</span>
              </div>
              <span className={styles.showcaseCaption}>{story.artTag}</span>
            </div>
            {story.visual === "markets" ? (
              <div className={styles.marketArtwork} aria-label="Localized app store optimization connecting Spain and Spanish-speaking Latin America">
                <div className={styles.marketOrbit} aria-hidden="true" />
                <span className={styles.marketLanguage}>es</span>
                <div className={styles.marketDestination}><span>01 / ESPAÑA</span><strong>Spain</strong><small>Where the strategy began</small></div>
                <div className={styles.marketDestination}><span>02 / AMÉRICA LATINA</span><strong>Latin America</strong><small>A wider horizon for discovery</small></div>
                <p>Spanish keywords.<br /><em>Localized listings.</em></p>
              </div>
            ) : <Image
              src={story.image}
              alt={story.imageAlt}
              width={1774}
              height={1084}
              priority
              sizes="(max-width:700px) 95vw, 65vw"
              className={styles.phones}
            />}
            <span className={styles.artworkLabel}>{story.artLabel}</span>
          </div>
          <dl className={styles.projectFacts}>
            <div>
              <dt>CLIENT</dt>
              <dd>{story.name}</dd>
            </div>
            <div>
              <dt>INDUSTRY</dt>
              <dd>{story.industry}</dd>
            </div>
            <div>
              <dt>MARKET</dt>
              <dd>{story.market}</dd>
            </div>
            <div>
              <dt>{story.scopeLabel || "PLATFORMS"}</dt>
              <dd>{story.platforms}</dd>
            </div>
          </dl>
        </section>
        <nav className={styles.sectionNav} aria-label="Case study sections">
          <a href="#overview">01 — Overview</a>
          <a href="#approach">02 — Our approach</a>
          <a href="#results">03 — The impact</a>
        </nav>
        <section
          id="overview"
          className={styles.editorial}
          aria-labelledby="overview-title"
        >
          <p className={styles.eyebrow}>01 / THE CHALLENGE</p>
          <div>
            <h2 id="overview-title">{story.overviewTitle}</h2>
            <div className={styles.twoColumns}>
              {story.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
        <section
          id="approach"
          className={styles.approach}
          aria-labelledby="approach-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>02 / OUR APPROACH</p>
            <h2 id="approach-title">{story.approachTitle}</h2>
            <p>{story.approachIntro}</p>
          </div>
          <div className={styles.serviceGrid}>
            {story.services.map((service, index) => (
              <article className={styles.service} key={service.title}>
                <div className={styles.serviceTop}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{service.tag}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.href} className={styles.textLink}>
                  <span>{service.linkLabel}</span>
                  <Arrow diagonal />
                </Link>
              </article>
            ))}
          </div>
        </section>
        <section
          id="results"
          className={styles.results}
          aria-labelledby="results-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>03 / THE IMPACT</p>
            <h2 id="results-title">{story.resultsTitle}</h2>
            <p>{story.resultsIntro}</p>
          </div>
          <div className={styles.growthMetrics}>
            {story.results.map((result, index) => (
              <article
                key={result.value}
                className={
                  index === 0
                    ? styles.primaryGrowthMetric
                    : styles.secondaryGrowthMetric
                }
              >
                <p className={styles.eyebrow}>{result.label}</p>
                <strong>{result.value}</strong>
                <p>{result.text}</p>
              </article>
            ))}
          </div>
          <p className={styles.sourceNote}>
            Results reported in ASOWin’s original {story.name} case study. These
            describe the campaign outcome, not live app store rankings or
            guaranteed future results.
          </p>
          <div className={styles.continuity}>
            <span className={styles.eyebrow}>{story.takeawayLabel}</span>
            <p>{story.takeaway}</p>
          </div>
        </section>
        <section className={styles.related} aria-labelledby="related-title">
          <div>
            <p className={styles.eyebrow}>MORE FROM ASOWIN</p>
            <h2 id="related-title">
              More client
              <br />
              case studies.
            </h2>
          </div>
          {story.related.map((item) => (
            <Link
              href={`/success-stories/${item.slug}`}
              key={item.slug}
              className={styles.relatedLink}
            >
              <span>
                {item.category}
                <strong>{item.name}</strong>
              </span>
              <Arrow diagonal />
            </Link>
          ))}
        </section>
        <CaseStudyCTA />
      </main>
    </CaseStudyShell>
  );
}
