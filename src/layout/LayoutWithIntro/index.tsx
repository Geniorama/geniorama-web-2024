"use client";

import React from "react";
import Header from "@/layout/SimpleLayout/Header/Header";
import Footer from "@/layout/SimpleLayout/Footer/Footer";
import Intro from "@/sections/homepage/Intro/Intro";
import { usePathname } from "next/navigation";

export default function LayoutWithIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <React.Fragment>
      <div style={{background: 'radial-gradient(circle, rgba(0,10,61,1) 0%, rgba(253,19,131,1) 100%)'}}>
        {pathName == "/" && <Intro />}
        <Header />
      </div>
      {children}
      <Footer />
    </React.Fragment>
  );
}
