"use client";

// import Link from "next/link";
import { Link } from "@/i18n/routing";
import LogoLight from "../../../../public/assets/images/logo-geniorama-blanco.svg";
import styles from "./Header.module.css";
import GeniusLink from "@/components/GeniusLink/GeniusLink";
import { usePathname, useRouter} from "next/navigation";
import ButtonMenuToggle from "@/components/MenuToggle/ButtonMenuToggle";
import { useEffect, useState } from "react";
import MenuResponsive from "@/components/MenuResponsive/MenuResponsive";
import bgMenuMobile from "../../../../public/assets/images/bg-linearRecurso 1.svg";
import menuPrincipal from "@/MenuItems/menuPrincipal";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const pathnameWithLocale = usePathname();
  const pathname = pathnameWithLocale.replace(/^\/(en|es)\//, '/');
  const locale = useLocale();
  const router = useRouter();
  const tCommon = useTranslations('common')

  const actualPath = (pathname === '/es' || pathname === '/en') ? '/' : pathname

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

  const handleToggleMenu = () =>{
    setOpenMenu(!openMenu);
  }

  const handleCloseMenu = () =>{
    setOpenMenu(false)
  }

  const handleChangeLang = (newLocale: string) => {
    if(!newLocale) return

    let newPathname
    if(newLocale === 'en'){
      newPathname = pathname.replace('/es', '/en')
    } else if(newLocale === 'es'){
      newPathname = pathname.replace('/en', '/es')
    }

    if(newPathname){
      router.push(newPathname)
    }
  }
  
  return (
    <header id="main-head" className={`${styles.container} relative z-50 top-0 left-0`}>
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


        {/* Menu Desktop */}
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
                    {tCommon(name.toLowerCase())||'undefined'}
                  </GeniusLink>
                </li>
              );
            })}
          </ul>

          <ul className={`${styles.menuList} ${styles.menuLang}`}>
            <li>
              <GeniusLink href={actualPath} locale={'en'} active={locale === 'en'}>En</GeniusLink>
            </li>
            <li>
              <GeniusLink href={actualPath} locale={'es'} active={locale === 'es'}>Es</GeniusLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
