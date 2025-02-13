"use client"

import styles from "./WeDevelop.module.css";
import Cover from '../../../../public/assets/images/home/geniorama_home_1.png';
import Isologo from '../../../../public/assets/images/Isologo Geniorama - otros fondos.png';
import BgLinear from '../../../../public/assets/images/bg-linearRecurso 1.svg';
import { useTranslations } from "next-intl";

export default function WeDevelop() {
  const tHome = useTranslations('homepage')

  return (
    <section
      style={{
        backgroundImage: `url('${BgLinear.src}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
      
      className={`pt-28 pb-0 md:pb-64 lg:pb-40 relative ${styles.layerOpacity}`}>
      <img className={`${styles.isologo} absolute md:hidden`} src={Isologo.src} alt="" />
      <div className="container relative pt-16 pb-16 md:pb-20">
        <div className="px-5 md:px-0 md:flex items-center justify-between relative z-10">
          <div className="md:w-1/2">
            <h2 className={`${styles.title}`} style={{ color: "white" }}>
              /{tHome('we_develop')}
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className={`${styles.desc}`}>
              {tHome('we_develop_body')}
            </p>
          </div>
        </div>

        <div className="w-full absolute top-0 left-1/4 md:left-0 d-flex justify-center text-center items-center">
            {/* <img className={`${styles.cover} w-full md:max-w-screen-lg m-auto md:rounded-lg`} src={Cover.src} alt="" /> */}
            <video poster={Cover.src} autoPlay loop muted className="w-full aspect-video max-w-[1000px] mx-auto" src="https://res.cloudinary.com/geniorama2021/video/upload/v1739482272/Geniorama%20Web/freepik__a-slow-dollyin-movement-towards-the-subject-captur__22643_kns9cn.mp4"></video>
            <img className={`${styles.isologo} absolute hidden md:block`} src={Isologo.src} alt="" />
        </div>
      </div>
    </section>
  );
}
