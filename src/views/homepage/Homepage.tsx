"use client";

import SliderProjects from "@/sections/homepage/SliderProjects/SliderProjects";
import WeDevelop from "@/sections/homepage/WeDevelop/WeDevelop";
import Work from "@/sections/homepage/Work/Work";
import WeAre from "@/sections/homepage/WeAre/WeAre";
import { useState, useEffect } from "react";
import { ProjectType } from "@/types";

interface HomepagePageProps {
  projects: ProjectType[]
}

export default function HomepagePage({projects}: HomepagePageProps) {
  const [fetchProjects, setFetchProjects] = useState<ProjectType[]>([])
  const [featuredProjects, setFeaturedProjects] = useState<ProjectType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(projects){
      const filterProjectsByFeatured = projects.filter((project) => project.featured)

      console.log('projects', projects)

      setFeaturedProjects(filterProjectsByFeatured)
      setFetchProjects(projects)
    }

    setLoading(false)
  },[projects])

  if(loading){
    return <p>Loading ...</p>
  }
 
  return (
    <>
      <SliderProjects 
        projects={featuredProjects}
      />
      <WeDevelop />
      <Work
        projects={fetchProjects} 
      />
      <WeAre />
    </>
  );
}
