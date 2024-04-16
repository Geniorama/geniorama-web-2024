import SliderProjects from "@/sections/homepage/SliderProjects/SliderProjects";
import WeDevelop from "@/sections/homepage/WeDevelop/WeDevelop";
import Work from "@/sections/homepage/Work/Work";
import WeAre from "@/sections/homepage/WeAre/WeAre";
import React from "react";

export default function HomepagePage() {
  return (
    <React.Fragment>
      <SliderProjects />
      <WeDevelop />
      <Work />
      <WeAre />
    </React.Fragment>
  );
}
