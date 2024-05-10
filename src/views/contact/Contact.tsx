import React from "react";
import HeadingPage from "@/components/HeadingPage/HeadingPage";
import Cover from "../../../public/assets/images/contact/03.webp";
import WorkWithUs from "@/sections/contact/WorkWithUs/WorkWithUs";

export default function ContactPage() {
  return (
    <React.Fragment>
        <HeadingPage 
            title="/CONTACT"
            backgroundColor="#000000"
            cover={Cover.src}
        />
        <WorkWithUs />
    </React.Fragment>
  )
}
