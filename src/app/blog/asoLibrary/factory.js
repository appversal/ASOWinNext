const IMAGE_POOL = [
  "/appstore.png", "/applestore.jpeg", "/GooglePlayStore.jpeg", "/playstoreiamge.jpeg",
  "/asosection.png", "/asosection2.png", "/asosection4.png", "/whyaso.png",
  "/bars.png", "/statsbg.png", "/pricing.png", "/quality.png",
  "/AppMarket.jpeg", "/AppMarket1.jpeg", "/AppMarket3.jpeg", "/AppMaket2.jpeg",
  "/AppIcons.jpeg", "/APPIcons2.jpeg", "/AppIcon3.jpeg", "/AB_testing.jpeg",
  "/img2.png", "/img3.png", "/img4.png", "/img5.png", "/img6.png",
  "/img7.png", "/img8.png", "/img9.png", "/img10.png", "/img12.png", "/imgmain.png",
];

const hash = (value) => [...value].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);

export const makeLibraryPost = ({ sections, faqs, ...post }) => ({
  author: "ASOWin Editorial Team",
  date: "October 19, 2026",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  readTime: "5 min read",
  searchIntent: "Informational",
  heroImage: IMAGE_POOL[hash(post.slug) % IMAGE_POOL.length],
  imageAlt: `${post.primaryKeyword} guide`,
  serviceLinks: ["/services/app-store-optimization/"],
  sources: [],
  ...post,
  sections: sections.map(([heading, paragraphs]) => ({ heading, paragraphs })),
  faqs: faqs.map(([q, a]) => ({ q, a })),
});
