"use client"

import LinkProjectBasic from "@/components/LinkProject/LinkProjectBasic";
import GeniusLink from "@/components/GeniusLink/GeniusLink";
import GeniusText from "@/components/GeniusText/GeniusText";
import styles from "./Work.module.css";
import type { ProjectType } from "@/types";
import { useTranslations } from "next-intl";

interface WorkProps {
  projects: ProjectType[]
}

export default function Work({projects}: WorkProps) {
  const tHome = useTranslations('homepage')

  return (
    <section className="py-16 md:py-28 px-3 md:px-0">
      <div className="container">
        <div className="text-white font-light" style={{fontSize: '3.7vw'}}>
          <GeniusText component={'h4'}>
            {tHome('work')}
          </GeniusText>
        </div>
        <div>
          {/* Item */}
          {projects &&
            projects.map((project, i) => {
              return (
                <div key={project._id} className={i == 0 ? 'md:pl-32': i == 2 ? 'md:pl-80' : i == 3 ? 'md:pr-52' : ''}>
                  <LinkProjectBasic
                    name={project.title}
                    description={project.shortDescription}
                    href={project.projectLink}
                    reverse={i == 3 || i == 4 && true}
                    spacing={i == 3 && 'gap-x-36'}
                  />
                </div>
              );
            })}

            <div className={`mt-5 text-right ${styles.seeMore}`}>
              <GeniusLink href="/work">{tHome('see_more')}</GeniusLink>
            </div>
        </div>
      </div>
    </section>
  );
}
