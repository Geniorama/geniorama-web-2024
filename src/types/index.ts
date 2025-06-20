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
    shortDescription?: string,
    projectLink?: string,
    category?: {
        _id: string;
        slug: {
          current: string;
        };
      };
}

export interface CategoryType {
    _id: string,
    name: string,
    slug: string,
    description: string | null,
    nameEs: string,
    nameEn: string
}