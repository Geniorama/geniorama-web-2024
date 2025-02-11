import HomepagePage from "@/views/homepage/Homepage";
import { GET_ALL_PROJECTS } from "@/helpers/queries";
import type { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const options = { next: { revalidate: 30 } };

export default async function page() {
  const projects = await client.fetch<SanityDocument[]>(GET_ALL_PROJECTS(6), {}, options);
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
    shortDescription: project.shortDescription
  }))
  
  return(
    <HomepagePage 
      projects={dataForProjects}
    />
  )
}
