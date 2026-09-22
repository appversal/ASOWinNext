import Image from "next/image";
import Link from "next/link";
import CaseStudyShell, { Arrow, CaseStudyCTA } from "../CaseStudyShell";
import styles from "../case-studies.module.css";

const services = [
  {
    number: "01",
    title: "Manage App Store and Google Play reviews.",
    text: "ASOWin managed reviews and ratings across Google Play and the App Store, combining ongoing engagement with its organic community in India and a consistent approach to customer feedback.",
    tag: "APP REPUTATION",
    href: "/services/app-reputation-management",
  },
  {
    number: "02",
    title: "Automate positive replies and ticket negative feedback.",
    text: "AI-powered replies gave positive reviews an immediate response. Negative feedback entered a ticketing workflow, giving the team a clear path to follow up on customer concerns.",
    tag: "REVIEW MANAGEMENT",
    href: "/automated-review-replies",
  },
  {
    number: "03",
    title: "Optimize keywords, metadata, and creatives.",
    text: "Keyword research, metadata optimization, and creative A/B testing supported Pepperfry’s app store visibility. Ongoing competitor analysis helped the team refine its approach.",
    tag: "APP STORE OPTIMIZATION",
    href: "/services/app-store-optimization",
  },
  {
    number: "04",
    title: "Manage social media reputation across four channels.",
    text: "The engagement extended to social media reputation management across LinkedIn, X (Twitter), Facebook, and Instagram, with ongoing community engagement and brand interactions.",
    tag: "SOCIAL REPUTATION",
    href: "/contact",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.asowin.com/success-stories/pepperfry/#article",
      url: "https://www.asowin.com/success-stories/pepperfry/",
      inLanguage: "en",
      articleSection: "App reputation management",
      headline: "Pepperfry app reputation case study: App ratings improved from around 3.9 to 4.4+.",
      description:
        "How ASOWin supported Pepperfry with app reputation management, AI-powered review responses, ASO, and social media reputation management.",
      author: {
        "@type": "Organization",
        "@id": "https://www.asowin.com/#organization",
        name: "ASOWin",
        url: "https://www.asowin.com",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.asowin.com/#organization",
        name: "ASOWin",
        url: "https://www.asowin.com",
      },
      mainEntityOfPage: "https://www.asowin.com/success-stories/pepperfry/",
      image: "https://www.asowin.com/pepperfry-case-study-og.jpg",
      about: { "@type": "Organization", name: "Pepperfry" },
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Pepperfry",
          item: "https://www.asowin.com/success-stories/pepperfry/",
        },
      ],
    },
  ],
};

export default function PepperfryCaseStudy() {
  return (
    <CaseStudyShell>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <section className={styles.hero} aria-labelledby="case-title">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/success-stories">Success stories</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Pepperfry</span>
          </nav>
          <div className={styles.heroHeading}>
            <div>
              <p className={styles.eyebrow}>PEPPERFRY × ASOWIN</p>
              <h1 id="case-title">
                <span className={styles.caseTopic}>Pepperfry app reputation case study</span>
                App ratings improved
                <br />
                from ~3.9 to <em>4.4+.</em>
              </h1>
            </div>
            <div className={styles.heroIntro}>
              <span className={styles.status}>
                <i /> Ongoing partnership
              </span>
              <p>
                ASOWin manages Pepperfry’s app reviews, AI-powered replies,
                customer-issue ticketing, and social media reputation. The team
                reports ratings of 4.4+ sustained month on month.
              </p>
              <a href="#results" className={styles.textLink}>
                Explore the impact <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className={styles.showcase}>
            <div className={styles.showcaseCopy}>
              <span className={styles.clientWordmark}>
                pepperfry<span>.</span>
              </span>
              <p>
                Review management and AI replies
                <br />
                across both app stores.
              </p>
              <div className={styles.ratingStamp}>
                <span className={styles.stars} aria-hidden="true">
                  ★★★★★
                </span>
                <strong>
                  4.4<span>+</span>
                </strong>
                <span>App store ratings</span>
              </div>
              <span className={styles.showcaseCaption}>
                APP REPUTATION · ASO · SOCIAL ORM
              </span>
            </div>
            <Image
              src="/pepperfry-apps.webp"
              alt="Pepperfry app screens showing furniture, home decor, and new releases"
              width={1774}
              height={1084}
              priority
              sizes="(max-width: 700px) 95vw, 65vw"
              className={styles.phones}
            />
            <span className={styles.artworkLabel}>
              THE PEPPERFRY EXPERIENCE
            </span>
          </div>
          <dl className={styles.projectFacts}>
            <div>
              <dt>CLIENT</dt>
              <dd>Pepperfry</dd>
            </div>
            <div>
              <dt>INDUSTRY</dt>
              <dd>Furniture & home decor</dd>
            </div>
            <div>
              <dt>MARKET</dt>
              <dd>India</dd>
            </div>
            <div>
              <dt>THE PARTNERSHIP</dt>
              <dd>Ongoing reputation & growth</dd>
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
            <h2 id="overview-title">
              Improve app ratings and manage customer feedback.
            </h2>
            <div className={styles.twoColumns}>
              <p>
                Pepperfry helps customers discover furniture and home decor. For
                a business where confidence shapes the purchase, every review,
                rating, and interaction becomes part of the brand experience.
              </p>
              <p>
                When the partnership began, app ratings were around 3.9 on
                Google Play and the App Store. The opportunity: bring app
                reputation, customer responses, search visibility, and social
                engagement into one sustained effort.
              </p>
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
            <h2 id="approach-title">
              Manage reviews, automate replies, and follow up on complaints.
            </h2>
            <p>
              ASOWin combined app review management, AI replies, issue
              ticketing, app store optimization, and social media ORM.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.number} className={styles.service}>
                <div className={styles.serviceTop}>
                  <span>{service.number}</span>
                  <span>{service.tag}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.href} className={styles.textLink}>
                  <span>Explore{" "}
                  {service.number === "01"
                    ? "app reputation"
                    : service.number === "02"
                      ? "review replies"
                      : service.number === "03"
                        ? "ASO"
                        : "our approach"}</span>
                  <Arrow diagonal />
                </Link>
              </article>
            ))}
          </div>
          <div className={styles.workflow}>
            <div>
              <p className={styles.eyebrow}>FROM FEEDBACK TO FOLLOW-THROUGH</p>
              <h3>
                Reply to positive reviews.
                <br />
                Escalate customer concerns.
              </h3>
            </div>
            <div className={styles.flowSteps}>
              <div className={styles.flowStart}>
                <span aria-hidden="true">↳</span> A customer leaves a review
              </div>
              <div className={styles.flowBranches}>
                <div>
                  <span className={styles.flowLabel}>POSITIVE FEEDBACK</span>
                  <strong>AI-powered reply</strong>
                  <p>A timely acknowledgement.</p>
                </div>
                <div>
                  <span className={styles.flowLabel}>CUSTOMER CONCERN</span>
                  <strong>Support ticket</strong>
                  <p>Routed for team follow-up.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="results"
          className={styles.results}
          aria-labelledby="results-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>03 / THE IMPACT</p>
            <h2 id="results-title">
              4.4+ app ratings, sustained month on month.
            </h2>
            <p>
              Progress built through consistent reputation management, with the
              work continuing today.
            </p>
          </div>
          <div className={styles.impactGrid}>
            <div className={styles.ratingResult}>
              <span className={styles.eyebrow}>APP STORE & GOOGLE PLAY</span>
              <div className={styles.ratingComparison}>
                <span>
                  ~3.9<small>At the start</small>
                </span>
                <span aria-hidden="true">↗</span>
                <strong>
                  4.4+<small>Sustained month on month</small>
                </strong>
              </div>
              <p>Improved app ratings across both stores.</p>
            </div>
            <div className={styles.impactNote}>
              <span className={styles.eyebrow}>BEYOND THE RATING</span>
              <h3>
                Higher social engagement and faster review replies.
              </h3>
              <p>
                Higher social engagement, timely review responses, and an
                ongoing process for customer concerns.
              </p>
            </div>
          </div>
          <p className={styles.sourceNote}>
            Rating figures and ongoing engagement outcomes reported by the
            ASOWin team for this case study; ratings may vary over time.
          </p>
          <div className={styles.continuity}>
            <span className={styles.status}>
              <i /> The work continues
            </span>
            <p>
              ASOWin continues to manage Pepperfry’s app reputation and social
              media ORM, bringing the same attention to each new review and
              conversation.
            </p>
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
          <Link
            href="/success-stories/indiabulls-securities"
            className={styles.relatedLink}
          >
            <span>
              Financial services<strong>Indiabulls Securities</strong>
            </span>
            <Arrow diagonal />
          </Link>
          <Link href="/success-stories/lsm-apps" className={styles.relatedLink}>
            <span>
              Mobile applications<strong>LSM Apps</strong>
            </span>
            <Arrow diagonal />
          </Link>
        </section>
        <CaseStudyCTA />
      </main>
    </CaseStudyShell>
  );
}
