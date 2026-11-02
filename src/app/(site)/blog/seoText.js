// Search results cut titles at about 60 characters and descriptions at about
// 160. These helpers fit text to those limits without cutting mid-sentence.
const BRAND = " | ASOWin";

export const fitTitle = (title, max = 62) => {
  const base = title.replace(/\s*\|\s*ASOWin( Blog)?$/, "");
  if ((base + BRAND).length <= max) return base + BRAND;
  if (base.length <= max) return base;
  // "Topic: Promise" titles keep the keyword-led topic part.
  const main = base.split(": ")[0];
  if (main !== base && main.length >= 20) return (main + BRAND).length <= max ? main + BRAND : main;
  return base;
};

// Keeps whole sentences that fit; returns the text unchanged when the first
// sentence alone is too long or too short to stand as a description.
export const fitDescription = (text = "", max = 160) => {
  if (text.length <= max) return text;
  let out = "";
  for (const sentence of text.match(/[^.!?]+[.!?]+(?:\s+|$)/g) || []) {
    if ((out + sentence).trim().length > max) break;
    out += sentence;
  }
  out = out.trim();
  return out.length >= 70 ? out : text;
};
