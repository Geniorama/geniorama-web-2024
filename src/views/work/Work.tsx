"use client"

import LinkProjectBasic from "@/components/LinkProject/LinkProjectBasic";
// import { projects } from "@/sections/homepage/Work/Work";
import type { ProjectType, CategoryType } from "@/types";
import { useState, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";

interface WorkPageProps {
  projects: ProjectType[]
  categories: CategoryType[]
}

export default function WorkPage({projects, categories}: WorkPageProps) {
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const locale = useLocale()

  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    if (!projects) return counts;

    for (const project of projects) {
      if (project.category?._id) {
        counts[project.category._id] = (counts[project.category._id] || 0) + 1;
      }
    }
    return counts;
  }, [projects]);

  useEffect(() => {
    if(projects){
      if (selectedCategory === "all") {
        setFilteredProjects(projects)
      } else {
        const filtered = projects.filter(
          (project) => project.category?._id === selectedCategory
        )
        setFilteredProjects(filtered)
      }
    }
  },[projects, selectedCategory])

  return (
    <section className="py-5 px-3 md:px-0 md:py-28">
      <div className="container">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {locale === 'es' ? 'Todos' : 'All'} ({projects?.length || 0})
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => setSelectedCategory(category._id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category._id
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name} ({categoryCounts[category._id] || 0})
            </button>
          ))}
        </div>

        {filteredProjects.map((project) => {
          return (
            <div key={project._id}>
              <LinkProjectBasic
                spacing="gap-20"
                name={project.title}
                description={project.shortDescription}
                imageUrl={project.image || ''}
                href={project.projectLink}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
