"use client"

import GeniusText from "@/components/GeniusText/GeniusText";
import homeStyles from "@/sections/homepage/WeAre/WeAre.module.css";
import BgLinear from '../../../../public/assets/images/bg-linearRecurso 1.svg';
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const tAbout = useTranslations('about')

  return (
    <section 
        style={{backgroundImage: `url('${BgLinear.src}')`}} 
        className={`text-white px-3 pb-24 md:py-40 bg-cover bg-right-bottom relative ${homeStyles.layerOpacity}`}>
      <div className="container relative">
        <p className={`${homeStyles.title} mb-5 font-light`}>
          {tAbout('why_us_copy')}
        </p>
        <hr />
        <div className="flex items-center md:items-start justify-between my-3 md:my-5">
          <span className={`${homeStyles.label} uppercase`}>{tAbout('why')}</span>
          <div className={`w-2/3 md:w-1/2 md:text-right font-light`}>
            <span className="block mb-1 md:mb-0 text-lg md:text-4xl leading-5">
              <GeniusText>{tAbout('world_class_team')}</GeniusText>
            </span>

            <div className="ml-auto" style={{ maxWidth: "350px" }}>
              <p className="text-xs md:text-base">
              {tAbout('world_class_team_body')}
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex items-center md:items-start justify-between my-3 md:my-5">
          <span className={`${homeStyles.label} uppercase`}>{tAbout('us')}</span>
          <div className={`w-2/3 md:w-1/2 md:text-right font-light`}>
            <span className="block mb-1 md:mb-0 text-lg md:text-4xl leading-5">
              <GeniusText>{tAbout('worldwide_connected_team')}</GeniusText>
            </span>

            <div className="ml-auto" style={{ maxWidth: "350px" }}>
              <p className="text-xs md:text-base">
              {tAbout('worldwide_connected_team_body')}
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex items-center md:items-start justify-between my-3 md:my-5">
          <span className={`${homeStyles.label}`}>?</span>
          <div className={`w-2/3 md:w-1/2 md:text-right font-light`}>
            <span className="block mb-1 md:mb-0 text-lg md:text-4xl leading-5">
              <GeniusText>{tAbout('tech_based_metodology')}</GeniusText>
            </span>

            <div className="ml-auto" style={{ maxWidth: "350px" }}>
              <p className="text-xs md:text-base">
              {tAbout('tech_based_metodology_body')}
              </p>
            </div>
          </div>
        </div>

        <hr />
        <p className={`${homeStyles.title} mt-5 font-light`}>
          {tAbout('why_us_copy_closed')}.
        </p>
      </div>
    </section>
  );
}
