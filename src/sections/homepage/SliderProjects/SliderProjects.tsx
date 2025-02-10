"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./SliderProjects.module.css";
import CoverProject from "./../../../../public/assets/images/mockup-pc.jpg";
import Link from "next/link";
import LeftArrow from "../../../../public/assets/images/left-chevron.svg";
import type { ProjectType } from "@/types";
import { useRouter } from "next/navigation";

interface SliderProjectsProps {
  projects: ProjectType[]
}

export default function SliderProjects({projects}: SliderProjectsProps) {
  const router = useRouter();
  const pathProjects = {
    es: '/proyectos',
    en: '/projects'
  }

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
      >
        {projects.map((project) => (
          <SwiperSlide style={{cursor: 'pointer'}} onClick={() => router.push(`${pathProjects.es}/${project.slug}`)} key={project._id}>
            <div className={styles.slide}>
              <h2 className={styles.projectTitle}>/{project.title}/</h2>
              <div className={styles.content}>
                <img
                  className={styles.cover}
                  src={project.image || CoverProject.src}
                  alt={project.title}
                />
              </div>
              <div className={styles.stack}>
                <div className={styles.info}>
                  <span>New York</span>
                  <Link href="#" className="underline">
                    See project
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.sliderNav}>
        <button className={`${styles.prev} ${styles.arrow} arrow-prev`}>
          <img src={LeftArrow.src} alt="" />
        </button>

        <button className={`${styles.next} ${styles.arrow} arrow-next`}>
          <img src={LeftArrow.src} alt="" />
        </button>
      </div>
    </div>
  );
}
