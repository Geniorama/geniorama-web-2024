import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { GET_ALL_PROJECTS } from '@/helpers/queries'
import { routing } from '@/i18n/routing'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // URLs base para cada idioma
  const baseUrls = routing.locales.map(locale => ({
    url: `https://geniorama.co/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  // URLs estáticas para cada idioma
  const staticRoutes = routing.locales.flatMap(locale => [
    {
      url: `https://geniorama.co/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `https://geniorama.co/${locale}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `https://geniorama.co/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ])

  // Obtener todos los proyectos de Sanity
  const projects = await client.fetch(GET_ALL_PROJECTS(100, 'es'))
  
  // URLs dinámicas de proyectos para cada idioma
  const projectRoutes = routing.locales.flatMap(locale => 
    projects.map((project: any) => ({
      url: `https://geniorama.co/${locale}/work/${project.slug.current}`,
      lastModified: new Date(project._updatedAt || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [
    ...baseUrls,
    ...staticRoutes,
    ...projectRoutes,
  ]
} 