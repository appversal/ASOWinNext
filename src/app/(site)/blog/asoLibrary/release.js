import { makeLibraryPost } from "./factory";

// Stamps a release date on library posts. Body copy may link to other pages
// inline with [anchor](/path/), which the article page renders.
export const released = (isoDate) => {
  const date = new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  return (post) => makeLibraryPost({ date, publishedAt: isoDate, updatedAt: isoDate, ...post });
};

// Posts added in the October 26, 2026 library expansion.
export const P = released("2026-10-26");
