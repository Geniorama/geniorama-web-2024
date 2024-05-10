"use client";

import Link from "next/link";
import LogoLight from "../../../../public/assets/images/logo-geniorama-blanco.svg";
import styles from "./Header.module.css";
import GeniusLink from "@/components/GeniusLink/GeniusLink";
import { usePathname } from "next/navigation";
import ButtonMenuToggle from "@/components/MenuToggle/ButtonMenuToggle";
import { useState } from "react";
import MenuResponsive from "@/components/MenuResponsive/MenuResponsive";
import bgMenuMobile from "../../../../public/assets/images/bg-linearRecurso 1.svg";
import menuPrincipal from "@/MenuItems/menuPrincipal";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname();

  const handleToggleMenu = () =>{
    setOpenMenu(!openMenu);
  }

  const handleCloseMenu = () =>{
    setOpenMenu(false)
  }

  return (
    <header className={`${styles.container} relative z-50`}>
      {openMenu && (
        <div 
          style={{backgroundImage: `url('${bgMenuMobile.src}')`}}
          className="fixed h-screen w-screen top-0 left-0 bg-cover ">
          <MenuResponsive handleClose={handleCloseMenu} />
        </div>
      )}
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
          <ButtonMenuToggle onClick={handleToggleMenu} />
        </div>
        <div className={`${styles.menus} hidden md:flex`}>
          <ul className={styles.menuList}>
            {menuPrincipal.map((item, i) => {
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
