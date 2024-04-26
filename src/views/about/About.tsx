import React from "react";
import Heading from "@/sections/about/Heading/Heading";
import WhatDo from "@/sections/about/WhatDo/WhatDo";
import OurTeam from "@/sections/about/OurTeam/OurTeam";

export default function AboutPage() {
  return (
    <React.Fragment>
        <Heading />
        <WhatDo />
        <OurTeam />
    </React.Fragment>
  )
}
