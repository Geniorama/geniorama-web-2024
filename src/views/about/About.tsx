import React from "react";
import WhatDo from "@/sections/about/WhatDo/WhatDo";
import OurTeam from "@/sections/about/OurTeam/OurTeam";
import WhyUs from "@/sections/about/WhyUs/WhyUs";
import HeadingPage from "@/components/HeadingPage/HeadingPage";
import BgLinear from "../../../public/assets/images/bg-linearRecurso 1.svg";

export default function AboutPage() {
  return (
    <React.Fragment>
        <HeadingPage 
          title="/ABOUT"
          layerOpacity={true}
          backgroundImage={BgLinear.src}
          />
        <WhatDo />
        <OurTeam />
        <WhyUs />
    </React.Fragment>
  )
}
