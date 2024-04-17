"use client";

import React from "react";
import Header from "@/layout/SimpleLayout/Header/Header";
import Footer from "@/layout/SimpleLayout/Footer/Footer";
import Intro from "@/sections/homepage/Intro/Intro";
import { usePathname } from "next/navigation";
import BgLinear from "../../../public/assets/images/bg-linearRecurso 1.svg";

export default function LayoutWithIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  console.log(BgLinear.src);
  return (
    <React.Fragment>
      <div
        className="wraper-intro"
        style={{
          backgroundImage: `url('${BgLinear.src}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
        }}
      >
        {pathName == "/" && <Intro />}
        <Header />
      </div>
      {children}
      <Footer />
    </React.Fragment>
  );
}
