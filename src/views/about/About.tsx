"use client"

import React from "react";
import WhatDo from "@/sections/about/WhatDo/WhatDo";
import OurTeam from "@/sections/about/OurTeam/OurTeam";
import WhyUs from "@/sections/about/WhyUs/WhyUs";
import HeadingPage from "@/components/HeadingPage/HeadingPage";
import BgLinear from "../../../public/assets/images/bg-linearRecurso 1.svg";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const tAbout = useTranslations('about')

  return (
    <React.Fragment>
        <HeadingPage 
          title={`/${tAbout('about')}`}
          layerOpacity={true}
          backgroundImage={BgLinear.src}
          />
        <WhatDo />
        <OurTeam />
        <WhyUs />
    </React.Fragment>
  )
}
