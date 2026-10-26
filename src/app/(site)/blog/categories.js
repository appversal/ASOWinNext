import { blogPosts } from "./blogData";

export const categoryKey = (name = "") =>
  name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const categoryLabel = (name = "") => name.replace(/&/g, "and");

const DESCRIPTIONS = {
  "industry-playbooks": "Vertical-specific ASO playbooks for health, education, travel, finance, marketplaces, media, and more: how to position, what to show, what to avoid, and which metrics prove it works.",
  "market-guides": "Country and language guides for app store optimization: localization depth, local vocabulary, devices and payments, and seasonal moments for markets from Brazil and Japan to the Gulf and Africa.",
  "metadata-craft": "Hands-on guides to writing titles, subtitles, short descriptions, promotional text, release notes, and keyword fields that earn search relevance and persuade visitors to install.",
  "creative-optimization": "How to design and test icons, screenshots, captions, preview videos, and feature graphics, with prioritization and localization workflows that keep quality high.",
  "ratings-and-reviews": "Rating prompts, review replies, stability, rollouts, and reputation: everything that shapes the stars and sentiment visitors see before they install.",
  "measurement": "Funnel metrics, experiment design, dashboards, attribution, and reporting practices that let ASO teams prove impact and decide what to do next.",
  "strategy-and-operations": "Staffing, tooling, cost, and operating-model decisions for ASO: when to build in-house, when to hire an agency, and how to plan work for small teams.",
  "policy-and-compliance": "Store guidelines, privacy disclosures, age ratings, and rejection recovery: stay compliant while you optimize, and avoid tactics that put your app at risk.",
  "growth-strategy": "Launch, featuring, events, pre-registration, and discovery channels that extend reach beyond keyword rankings.",
  "monetization": "Pricing, subscriptions, trials, and paywall alignment, so the store promise and the first-session experience match and revenue quality improves.",
  "conversion-optimization": "Techniques for turning store visitors into installs: page structure, creative testing, and conversion measurement.",
  "launch-and-growth": "Pre-launch preparation, launch checklists, and the early growth levers that shape an app's first months.",
  "keyword-strategy": "Keyword research, field allocation, long-tail targeting, and platform-specific tactics for App Store and Google Play search.",
  "platform-guides": "Step-by-step guides to publishing and maintaining apps on the App Store and Google Play: developer accounts, testing tracks, review times, fees, and exact asset specifications.",
  "other-app-stores": "Optimization guides for stores beyond the main iOS and Google Play phone storefronts: Huawei AppGallery, Samsung Galaxy Store, Chinese Android stores, EU marketplaces, Mac, Chrome, and TV app stores.",
  "app-marketing": "Mobile app marketing beyond the store listing: launch plans, free promotion channels, social and community marketing, PR, influencers, and landing pages that feed organic growth.",
  "retention-and-engagement": "Onboarding, push notifications, referrals, churn reduction, and retention benchmarks that turn installs into active users and protect the ratings that ASO depends on.",
  "paid-acquisition": "Apple Ads, Meta, TikTok, and other paid user acquisition channels, plus the measurement stack behind them: CPI, SKAdNetwork, AdAttributionKit, ATT, MMPs, and deep links.",
  "game-growth": "ASO and growth playbooks for mobile games by genre, from hyper-casual and puzzle to RPG, strategy, and card games, plus soft launch, live ops, creatives, and localization.",
  "localization": "Localization strategy and culturalization for app listings: prioritizing markets, adapting meaning, and measuring results.",
};

export function getCategoryHubs(minPosts = 3) {
  const map = new Map();
  for (const post of blogPosts) {
    if (!post.category) continue;
    const key = categoryKey(post.category);
    if (!map.has(key)) map.set(key, { slug: key, name: categoryLabel(post.category), posts: [] });
    map.get(key).posts.push(post);
  }
  return [...map.values()]
    .filter((hub) => hub.posts.length >= minPosts)
    .map((hub) => ({
      ...hub,
      description:
        DESCRIPTIONS[hub.slug] ||
        `ASOWin guides on ${hub.name.toLowerCase()} for app store optimization and mobile growth.`,
    }))
    .sort((a, b) => b.posts.length - a.posts.length);
}
