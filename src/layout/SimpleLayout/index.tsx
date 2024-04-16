import Header from "@/layout/SimpleLayout/Header/Header";
import Footer from "@/layout/SimpleLayout/Footer/Footer";
import React from "react";

export default function SimpleLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
