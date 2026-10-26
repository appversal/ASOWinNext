// Generates /public/blog-covers/<slug>.svg (1200x900) and /public/blog-og/<slug>.png
// (1200x630) for library posts that don't have them yet, in the same style as the
// existing covers. Usage: node scripts/generate-blog-covers.mjs [--force] [slug ...]
import { register } from "node:module";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

// The blog data uses extensionless relative imports (resolved by Next), so teach Node to resolve them.
register(
  "data:text/javascript," +
    encodeURIComponent(`export async function resolve(s, c, n) {
      try { return await n(s, c); } catch (e) {
        if (s.startsWith(".") && !s.endsWith(".js")) return n(s + ".js", c);
        throw e;
      }
    }`),
);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { libraryPosts } = await import(pathToFileURL(path.join(ROOT, "src/app/(site)/blog/asoLibrary/index.js")).href);

const COLORS = {
  "industry-playbooks": ["#1d4a56", "#306777"],
  "market-guides": ["#1e3a8a", "#2563eb"],
  "metadata-craft": ["#4c1d95", "#7c3aed"],
  "creative-optimization": ["#9d174d", "#ea580c"],
  "ratings-and-reviews": ["#92400e", "#d97706"],
  measurement: ["#065f46", "#0d9488"],
  "strategy-and-operations": ["#0f172a", "#334155"],
  "policy-and-compliance": ["#7f1d1d", "#b91c1c"],
  "growth-strategy": ["#3730a3", "#6366f1"],
  monetization: ["#7c2d12", "#c2410c"],
  "reference-guides": ["#155e75", "#0891b2"],
  "keyword-strategy": ["#831843", "#db2777"],
  "platform-guides": ["#0c4a6e", "#0284c7"],
  "other-app-stores": ["#44403c", "#78716c"],
  "app-marketing": ["#9f1239", "#e11d48"],
  "retention-and-engagement": ["#14532d", "#16a34a"],
  "paid-acquisition": ["#3f6212", "#65a30d"],
  "game-growth": ["#1e1b4b", "#7e22ce"],
};

const key = (name) => name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

const wrap = (text, max) => {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  return line ? [...lines, line] : lines;
};

// "Main Title: Subtitle" -> two parts; falls back to the first "?" for question titles.
const splitTitle = (title) => {
  const at = title.indexOf(": ");
  if (at > 0) return [title.slice(0, at), title.slice(at + 2)];
  const q = title.indexOf("? ");
  if (q > 0) return [title.slice(0, q + 1), title.slice(q + 2)];
  return [title, ""];
};

const render = (post, height) => {
  const [c1, c2] = COLORS[key(post.category)] || COLORS["industry-playbooks"];
  const h = hash(post.slug);
  const label = post.category.toUpperCase().replace(/&/g, "AND");
  const [main, sub] = splitTitle(post.title);
  let size = 68;
  let lines = wrap(main, 26);
  if (lines.length > 2) {
    size = 56;
    lines = wrap(main, 32).slice(0, 3);
  }
  const subLines = sub ? wrap(sub, 62).slice(0, 2) : [];
  const og = height === 630;
  const lineGap = size + 8;
  const block = lines.length * lineGap + (subLines.length ? 30 + subLines.length * 38 : 0);
  const top = og ? Math.max(200, 330 - block / 2) : Math.max(260, 420 - block / 2);
  const titleSvg = lines
    .map((l, i) => `<text x="80" y="${top + i * lineGap}" font-size="${size}" font-weight="800" fill="#ffffff">${esc(l)}</text>`)
    .join("");
  const subTop = top + (lines.length - 1) * lineGap + 70;
  const subSvg = subLines
    .map((l, i) => `<text x="80" y="${subTop + i * 38}" font-size="30" font-weight="500" fill="#ffffff" fill-opacity="0.82">${esc(l)}</text>`)
    .join("");
  const footer = og ? 572 : 840;
  const r = 260 + (h % 40);
  const cx = 700 + (h % 300);
  const cy = (og ? 120 : 200) + ((h >> 3) % 200);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 ${height}" width="1200" height="${height}" font-family="Inter, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" role="img" aria-label="${esc(post.title)}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
<rect width="1200" height="${height}" fill="url(#g)"/>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" fill-opacity="0.07"/>
<circle cx="${cx + 120}" cy="${cy + 360}" r="${Math.round(r / 2)}" fill="#F0A32B" fill-opacity="0.18"/>
<circle cx="1120" cy="${height - 100}" r="150" fill="#ffffff" fill-opacity="0.06"/>
<rect x="80" y="${og ? 64 : 86}" width="${Math.round(40 + label.length * 17.5)}" height="44" rx="22" fill="#F0A32B"/>
<text x="100" y="${og ? 94 : 116}" font-size="22" font-weight="700" letter-spacing="1.5" fill="#1f2937">${esc(label)}</text>
${titleSvg}
${subSvg}
<rect x="80" y="${footer - 50}" width="64" height="6" rx="3" fill="#F0A32B"/>
<text x="80" y="${footer}" font-size="30" font-weight="800" fill="#ffffff">ASOWin</text>
<text x="236" y="${footer}" font-size="24" fill="#ffffff" fill-opacity="0.75">App Store Optimization Library</text>
</svg>
`;
};

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const coverDir = path.join(ROOT, "public/blog-covers");
const ogDir = path.join(ROOT, "public/blog-og");
mkdirSync(coverDir, { recursive: true });
mkdirSync(ogDir, { recursive: true });

let made = 0;
for (const post of libraryPosts) {
  if (only.length && !only.includes(post.slug)) continue;
  const svgPath = path.join(coverDir, `${post.slug}.svg`);
  const pngPath = path.join(ogDir, `${post.slug}.png`);
  if (!force && existsSync(svgPath) && existsSync(pngPath)) continue;
  writeFileSync(svgPath, render(post, 900));
  await sharp(Buffer.from(render(post, 630))).png({ palette: true }).toFile(pngPath);
  made += 1;
}
console.log(`Generated covers for ${made} post(s).`);
