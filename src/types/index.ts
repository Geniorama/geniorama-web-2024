import type { SanityImageAssetDocument } from "next-sanity";

export interface ProjectType {
    _id: string,
    title: string,
    slug: string,
    image?: string | null,
    publishedAt?: string,
    description?: any ,
    language?: string,
    featured?: boolean,
    shortDescription?: string
}