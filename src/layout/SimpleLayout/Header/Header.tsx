"use client";

import Link from "next/link";
import LogoLight from "../../../../public/assets/images/logo-geniorama-blanco.svg";
import styles from "./Header.module.css";
import GeniusLink from "@/components/GeniusLink/GeniusLink";
import { usePathname } from "next/navigation";
import ButtonMenuToggle from "@/components/MenuToggle/ButtonMenuToggle";
import { useEffect, useState } from "react";

const menuItems = [
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById('main-head');
    if(header){
      const toTop = header.offsetTop
      window.onscroll = function(){
        const scrollY = window.scrollY
        if(scrollY > toTop){
          header.classList.add('fixed', 'w-full', 'bg-black', 'border-b', 'border-stone-700')
          header.classList.remove('relative')
        } else {
          header.classList.remove('fixed', 'bg-black', 'border-b')
          header.classList.add('relative')
        }
      }
    }
  },[pathname])

  return (
    <header id="main-head" className={`${styles.container} relative z-50 top-0 left-0`}>
      <nav className={styles.navigation}>
        <Link href={"/"}>
          <img
            className={styles.brand}
            src={LogoLight.src}
            alt="Logo geniorama"
          />
        </Link>

        {/* Toggle menu mobile */}
        <div className="md:hidden text-white">
          <ButtonMenuToggle />
        </div>


        {/* Menu Desktop */}
        <div className={`${styles.menus} hidden md:flex`}>
          <ul className={styles.menuList}>
            {menuItems.map((item, i) => {
              const { name, path } = item;
              return (
                <li key={i}>
                  <GeniusLink
                    active={pathname == path ? true : false}
                    href={path}
                  >
                    {name}
                  </GeniusLink>
                </li>
              );
            })}
          </ul>

          <ul className={`${styles.menuList} ${styles.menuLang}`}>
            <li>
              <GeniusLink active={true}>En</GeniusLink>
            </li>
            <li>
              <GeniusLink>Es</GeniusLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
