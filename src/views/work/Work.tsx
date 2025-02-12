"use client"

import LinkProjectBasic from "@/components/LinkProject/LinkProjectBasic";
// import { projects } from "@/sections/homepage/Work/Work";
import type { ProjectType } from "@/types";
import { useState, useEffect } from "react";

interface WorkPageProps {
  projects: ProjectType[]
}

export default function WorkPage({projects}: WorkPageProps) {
  const [allProjects, setAllProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    if(projects){
      setAllProjects(projects)
    }
  },[projects])

  return (
    <section className="py-5 px-3 md:px-0 md:py-28">
      <div className="container">
        {allProjects.map((project, i) => {
          return (
            <div key={i}>
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
