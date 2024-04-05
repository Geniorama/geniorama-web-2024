import Link from "next/link";
import LogoLight from "./../../../public/assets/images/logo-geniorama-blanco.svg";
import styles from "./Header.module.css";

export default function Header() {
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
      
        <div className={styles.menus}>
          <ul className={styles.menuList}>
            <li><Link href={'#'}>Home</Link></li>
            <li><Link href={'#'}>Home</Link></li>
            <li><Link href={'#'}>Home</Link></li>
            <li><Link href={'#'}>Home</Link></li>
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
