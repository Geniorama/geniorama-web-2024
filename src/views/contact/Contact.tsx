"use client"

import React from "react";
import HeadingPage from "@/components/HeadingPage/HeadingPage";
import Cover from "../../../public/assets/images/contact/03.webp";
import WorkWithUs from "@/sections/contact/WorkWithUs/WorkWithUs";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const tContact = useTranslations('contact')

  return (
    <React.Fragment>
        <HeadingPage 
            title={`/${tContact('contact')}`}
            backgroundColor="#000000"
            cover={Cover.src}
        />
        <WorkWithUs />
    </React.Fragment>
  )
}
