"use client"

import styles from "./OurTeam.module.css";
import GeniusText from "@/components/GeniusText/GeniusText";
import CardTeam from "@/components/CardTeam/CardTeam";
import { useTranslations } from "next-intl";

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
    position: "Wordpress Dev",
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
    name: "Jairo Ruíz",
    position: "Wordpress / Shopify Dev",
  },
];

export default function OurTeam() {
  const tAbout = useTranslations('about')

  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="text-white text-center">
          <h2 className={`${styles.title} uppercase`}>
            <span>/</span>
            <span>{tAbout('this_is_our')}</span>
            <span>{tAbout('team')}</span>
          </h2>

          <p className={`my-5 ${styles.description}`}>
           {tAbout('our_team_caption')}
          </p>
        </div>

        <div className="text-white mt-20 md:mt-0 md:p-5">
          {/* FOUNDERS */}
          <div className="md:flex gap-10 justify-center items-center">
            <div className={`${styles.cardTeam} mb-10 md:w-2/4`}>
              <div>
                <img
                  src="https://geniorama.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fequipo%2Fteam-oscar.7e8119c7f94e1e044061cdbc1bf1e086.png&w=640&q=75"
                  alt="Oscar Pedraza"
                  className="w-full aspect-square object-cover object-top"
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
              <div>
                <img
                  src="https://geniorama.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fequipo%2Fteam-angel.50c6b67b21cbf254eb7c4f1838226186.png&w=640&q=75"
                  alt="Oscar Pedraza"
                  className="w-full aspect-square object-cover object-top"
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
          <div className="mt-20 md:mt-40">
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
