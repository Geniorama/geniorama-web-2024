// Queries para hacer llamados a Sanity

export const GET_ALL_PROJECTS = (limit = 12, language: string) =>
  `*[_type == "project" && defined(slug.current) && language == "${language}"]|order(publishedAt desc)[0...${limit}]{_id, title, slug, image, description, language, publishedAt, featured, shortDescription, projectLink, 'category': category->{_id, slug}}`;

export const GET_ALL_CATEGORIES = (language: string) =>
  `*[_type == "category"]|order(nameEn asc){
    _id,
    nameEs,
    nameEn,
    slug,
    description,
    "name": ${language === "es" ? "nameEs" : "nameEn"}
  }`;

