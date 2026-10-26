import { makeLibraryPost } from "./factory";

// Posts added in the October 2026 library expansion. Body copy may link to
// other pages inline with [anchor](/path/), which the article page renders.
export const P = (post) =>
  makeLibraryPost({
    date: "October 26, 2026",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    ...post,
  });
