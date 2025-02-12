import WorkPage from "@/views/work/Work";
import { GET_ALL_PROJECTS } from "@/helpers/queries";
import type { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { getLocale } from "next-intl/server";

const options = { next: { revalidate: 30 } };

export default async function Work() {
  const locale = await getLocale()
  const projects = await client.fetch<SanityDocument[]>(GET_ALL_PROJECTS(100, locale), {}, options);
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const dataForProjects = projects.map((project) =>( {
    _id: project._id,
    title: project.title || '',
    slug: project.slug.current || '',
    image: project.image ? urlFor(project.image)?.width(550).height(310).url() : null,
    language: project.language,
    featured: project.featured,
    description: project.description,
    shortDescription: project.shortDescription,
    projectLink: project.projectLink
  }))
  return(
    <WorkPage 
      projects={dataForProjects}
    />
  )
}
