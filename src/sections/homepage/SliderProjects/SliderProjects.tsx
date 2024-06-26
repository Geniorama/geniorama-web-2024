"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./SliderProjects.module.css";
import CoverProject from "./../../../../public/assets/images/mockup-pc.jpg";
import Link from "next/link";
import LeftArrow from "../../../../public/assets/images/left-chevron.svg";

export default function SliderProjects() {
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
        <SwiperSlide>
          <div className={styles.slide}>
            <h2 className={styles.projectTitle}>/GYMDOOR/</h2>
            <div className={styles.content}>
              <img
                className={styles.cover}
                src={CoverProject.src}
                alt="Name project"
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
        <SwiperSlide>
          <div style={{ color: "white" }}>Slide 2</div>
        </SwiperSlide>
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
