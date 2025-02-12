// Queries para hacer llamados a Sanity

export const GET_ALL_PROJECTS = (limit = 12, language: string) =>
  `*[_type == "project" && defined(slug.current) && language == "${language}"]|order(publishedAt desc)[0...${limit}]{_id, title, slug, image, description, language, publishedAt, featured, shortDescription, projectLink}`;
