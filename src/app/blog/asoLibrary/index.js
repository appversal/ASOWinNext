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

const extras = { ...extras01, ...extras02, ...extras03, ...extras04, ...extras05 };

const wordCount = (post) =>
  [post.answer, ...post.sections.flatMap((s) => s.paragraphs), ...post.faqs.map((f) => f.a), ...post.playbook, ...post.metrics]
    .join(" ")
    .split(/\s+/).length;

export const libraryPosts = [
  ...batch01, ...batch02, ...batch03, ...batch04, ...batch05,
  ...batch06, ...batch07, ...batch08, ...batch09, ...batch10,
].map((post) => {
  const headingFor = (heading) =>
    heading === "Mistakes that quietly cost installs"
      ? `Common mistakes with ${post.primaryKeyword}`
      : heading === "A worked example"
        ? `${post.primaryKeyword}: a worked example`
        : heading;
  const extra = (extras[post.slug] || []).map(([heading, paragraphs]) => ({ heading: headingFor(heading), paragraphs }));
  const merged = { ...post, sections: [...post.sections, ...extra] };
  return { ...merged, readTime: `${Math.max(2, Math.round(wordCount(merged) / 200))} min read` };
});
