import React from "react";
import Heading from "@/sections/about/Heading/Heading";
import WhatDo from "@/sections/about/WhatDo/WhatDo";
import OurTeam from "@/sections/about/OurTeam/OurTeam";
import WhyUs from "@/sections/about/WhyUs/WhyUs";

export default function AboutPage() {
  return (
    <React.Fragment>
        <Heading />
        <WhatDo />
        <OurTeam />
        <WhyUs />
    </React.Fragment>
  )
}
