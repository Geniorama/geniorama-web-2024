"use client";

import Link from "next/link";
import LogoLight from "../../../../public/assets/images/logo-geniorama-blanco.svg";
import styles from "./Header.module.css";
import GeniusLink from "@/components/GeniusLink/GeniusLink";
import { usePathname } from "next/navigation";
import ButtonMenuToggle from "@/components/MenuToggle/ButtonMenuToggle";

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

  return (
    <header className={`${styles.container} relative z-50`}>
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
