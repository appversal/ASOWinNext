import { batch01 } from "./batch01";
import { batch02 } from "./batch02";
import { batch03 } from "./batch03";
import { batch04 } from "./batch04";
import { batch05 } from "./batch05";
import { batch06 } from "./batch06";
import { batch07 } from "./batch07";
import { batch08 } from "./batch08";
import { batch09 } from "./batch09";
import { batch10 } from "./batch10";
import { extras01 } from "./extras01";
import { extras02 } from "./extras02";
import { extras03 } from "./extras03";
import { extras04 } from "./extras04";
import { extras05 } from "./extras05";
import { deep01 } from "./deep01";
import { deep02 } from "./deep02";
import { deep03 } from "./deep03";
import { deep04 } from "./deep04";
import { deep05 } from "./deep05";
import { agencyGuides } from "./agencies";

const deep = { ...deep01, ...deep02, ...deep03, ...deep04, ...deep05 };
const extras = { ...extras01, ...extras02, ...extras03, ...extras04, ...extras05 };

const wordCount = (post) =>
  [post.answer, ...post.sections.flatMap((s) => s.paragraphs), ...post.faqs.map((f) => f.a), ...post.playbook, ...post.metrics, ...(post.steps || []).flat(), ...(post.examples || []).flat()]
    .join(" ")
    .split(/\s+/).length;

export const libraryPosts = [
  ...batch01, ...batch02, ...batch03, ...batch04, ...batch05,
  ...batch06, ...batch07, ...batch08, ...batch09, ...batch10,
  ...agencyGuides,
].map((post) => {
  const topic = post.primaryKeyword.charAt(0).toUpperCase() + post.primaryKeyword.slice(1);
  const headingFor = (heading) =>
    heading === "Mistakes that quietly cost installs"
      ? `Common mistakes with ${post.primaryKeyword}`
      : heading === "A worked example"
        ? `${topic}: a worked example`
        : heading;
  const extra = (extras[post.slug] || []).map(([heading, paragraphs]) => ({ heading: headingFor(heading), paragraphs }));
  const d = deep[post.slug] || {};
  const calc = d.calc ? [{ heading: d.calc[0], paragraphs: d.calc[1] }] : [];
  const merged = { ...post, sections: [...post.sections, ...extra, ...calc], steps: d.steps || post.steps || [], examples: d.examples || post.examples || [] };
  return { ...merged, readTime: `${Math.max(2, Math.round(wordCount(merged) / 200))} min read` };
});
