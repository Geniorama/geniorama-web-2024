"use client"

import styles from "./OurTeam.module.css";
import GeniusText from "@/components/GeniusText/GeniusText";
import CardTeam from "@/components/CardTeam/CardTeam";
import { useTranslations, useLocale } from "next-intl";
import PicOscarPedraza from "../../../../public/assets/images/about/oscar-pedraza.webp";
import PicAngelBurgos from "../../../../public/assets/images/about/angel-burgos.webp";

const team = [
  {
    name: "Catalina Barrera",
    position: "Ads Manager",
  },

  {
    name: "William Mondul",
    position: "Multimedia Digital Designer",
  },

  {
    name: "Juliana Sossa",
    position: "Content Manager",
  },

  {
    name: "Diego Burgos",
    position: "Wordpress Manager",
  },

  {
    name: "Darwin Roa",
    position: "Wordpress / Frontend Dev",
  },

  {
    name: "Melanie Fitzgerald",
    position: "UX / UI Designer",
  },

  {
    name: "Valentina Ortiz",
    position: "Wordpress / Shopify Dev",
  },

  {
    name: "Diego Solorzano",
    position: "Fullstack Senior Developer",
  },
];

export default function OurTeam() {
  const tAbout = useTranslations('about')
  const locale = useLocale()

  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="text-white text-center">
          <h2 className={`${styles.title} uppercase`}>
            <span className={`${locale === "es" ? "text-4xl lg:text-[170px] mr-1" : "lg:text-[12vw] mr-1"}`}>/</span>
            <span className={`${locale === "es" && "text-4xl lg:text-[160px]"}`}>{tAbout('this_is_our')}</span>
            <span className={`${locale === "es" && "text-4xl lg:text-[160px]"}`}>{tAbout('team')}</span>
          </h2>

          <p className={`my-5 ${styles.description}`}>
           {tAbout('our_team_caption')}
          </p>
        </div>

        <div className="text-white mt-20 md:mt-0 md:p-5">
          {/* FOUNDERS */}
          <div className="md:flex gap-10 justify-center items-center">
            <div className={`${styles.cardTeam} mb-10 md:w-2/4`}>
              <div className="w-full bg-gray-950 aspect-square flex justify-center items-end">
                <img
                  src={PicOscarPedraza.src}
                  alt="Oscar Pedraza"
                  className="w-[350px] grayscale opacity-50 transition hover:opacity-100"
                />
              </div>
              <div className="mt-5">
                <h4 className="text-2xl md:text-5xl">Oscar Pedraza</h4>
                <span className="text-sm md:text-xl mt-2 block">
                  <GeniusText>CMO</GeniusText>
                </span>
              </div>
            </div>

            <div className={`${styles.cardTeam} mb-10 md:w-2/4`}>
              <div className="w-full bg-gray-950 aspect-square flex justify-center items-end">
                <img
                  src={PicAngelBurgos.src}
                  alt="Angel Burgos"
                  className="w-[400px] grayscale opacity-50 transition hover:opacity-100"
                />
              </div>
              <div className="mt-5">
                <h4 className="text-2xl md:text-5xl">Angel Burgos</h4>
                <span className="text-sm md:text-xl mt-2 block">
                  <GeniusText>CTO</GeniusText>
                </span>
              </div>
            </div>
          </div>

          {/* TEAM */}
          <div className="mt-20 md:mt-30">
            <span>
              <GeniusText>Our Team</GeniusText>
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
              {team.map((item, i) => {
                const { name, position } = item;
                return <CardTeam name={name} position={position} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
