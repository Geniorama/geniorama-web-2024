'use client';

import Link from "next/link";
import LogoLight from "./../../../public/assets/images/logo-geniorama-blanco.svg";
import styles from "./Header.module.css";
import GeniusLink from "@/components/GeniusLink/GeniusLink";
import { usePathname } from "next/navigation";
import ButtonMenuToggle from "@/components/MenuToggle/ButtonMenuToggle";

const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <Link href={"#"}>
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
              const {name, path} = item
              return <li key={i}><GeniusLink active={pathname == path ? true : false} href={path}>{name}</GeniusLink></li>
            })}
          </ul>

          <ul className={styles.menuList}>
            <li><Link href={"#"}>En</Link></li>
            <li><Link href={"#"}>Es</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
