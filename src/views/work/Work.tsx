import LinkProjectBasic from "@/components/LinkProject/LinkProjectBasic";
import { projects } from "@/sections/homepage/Work/Work";

export default function WorkPage() {
  const projectsWithImage = projects.map((item) => ({
    ...item,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }));

  return (
    <section className="py-5 px-3 md:px-0 md:py-28">
      <div className="container">
        {projectsWithImage.map((project, i) => {
          return (
            <div key={i}>
              <LinkProjectBasic
                spacing="gap-20"
                name={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
