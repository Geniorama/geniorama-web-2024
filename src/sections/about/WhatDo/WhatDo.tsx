"use client"

import styles from "./WhatDo.module.css";
import CoverAbout from "../../../../public/assets/images/about/about-geniorama.jpg";
import Isologo from "../../../../public/assets/images/Isologo Geniorama - otros fondos.png";
import { useTranslations } from "next-intl";

export default function WhatDo() {
  const tAbout = useTranslations('about')

  return (
    <section>
      <div className="container text-white relative">
        <div className="px-5 md:w-2/3 md:mx-auto md:py-28 md:my-28">
          <div className="relative">
            <img
              src={Isologo.src}
              alt=""
              className={`${styles.isologo} absolute`}
            />
            <img className="w-full" src={CoverAbout.src} alt="" />
          </div>

          <div className="flex flex-col">
            <p className={`${styles.description} md:w-2/4 mt-5 order-last`}>
              {tAbout('what_do_we_do_body')}
            </p>
            <div className="order-first">
              <h2
                className={`${styles.copy} md:absolute left-0 top-0 underline z-10 uppercase`}
              >
                {tAbout('what_do')}
              </h2>
              <h2
                className={`${styles.copy} md:absolute md:right-0 md:bottom-44 underline uppercase`}
              >
                {tAbout('we_do')}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
