// Blog authors with a public profile at /author/<slug>/.
// Kept separate from blogData so client components can import it without the post list.
export const authors = {
  'khwahish-kapoor': {
    name: 'Khwahish Kapoor',
    role: 'ASO Strategist',
    bio: 'Khwahish Kapoor is a leading expert in App Store Optimization with a deep focus on data-driven growth and organic search visibility. Her strategic approach has helped numerous mobile applications achieve top rankings and sustainable user acquisition.',
    avatar: '/khwahish-kapoor.jpg', // Premium professional portrait
    social: {
      linkedin: 'https://www.linkedin.com/in/khwahish-kapoor05/',
      email: 'khwahish@asowin.com'
    }
  },
  'saarthak-srivastav': {
    name: 'Saarthak Srivastav',
    role: 'ASOWin',
    bio: 'Saarthak Srivastav writes ASOWin\'s App Store Optimization guides, covering keyword research, conversion, ratings, localization and measurement for the Apple App Store and Google Play.',
    avatar: '/saarthak-srivastav.jpg',
    social: {}
  }
};

/**
 * Helper function to slugify author name
 */
export const slugifyAuthor = (name) => {
  if (!name) return '';
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

/**
 * Helper function to get author by name
 */
export const getAuthorByName = (name) => {
  const slug = slugifyAuthor(name);
  return authors[slug] || { name, role: 'Author', bio: '', social: {} };
};

/**
 * Profile URL for authors that have a page, otherwise null
 */
export const authorPath = (name) => {
  const slug = slugifyAuthor(name);
  return authors[slug] ? `/author/${slug}/` : null;
};
