"use client";

import styles from "./Footer.module.css";
import LogoGenioramaDark from '../../../../public/assets/images/logo-geniorama-negro.svg';
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm";
import CookieManager from "@/components/CookieManager/CookieManager";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


export default function Footer() {
  const tCommon = useTranslations('common')
  const tFooter = useTranslations('footer')

  const router = useRouter();
  return (
    <footer className={styles.footer}>
      {/* NAVIGATION */}
      <ul className={`${styles.menu} columns-3 gap-0`}>
        <li className={`${styles.menuItem} hover:underline transition`} style={{textTransform: 'uppercase'}}>
          <Link href={'/work'}>{tCommon('work')}</Link>
        </li>
        <li className={`${styles.menuItem} hover:underline transition`} style={{textTransform: 'uppercase'}}>
          <Link href={'/about'}>{tCommon('about')}</Link>
        </li>
        <li className={`${styles.menuItem} hover:underline transition`} style={{textTransform: 'uppercase'}}>
          <Link href={'/contact'}>
            {tCommon('contact')}
          </Link>
        </li>
      </ul>

      {/* INFO CONTACT */}
      <div className="container pb-2 md:pb-10 pt-10 px-3 md:px-0">
        <div className="md:flex justify-between">
          {/* Newsletter */}
          <div className={`${styles.boxNewsletter}`}>
            <p style={{maxWidth: '200px'}} className="text-3xl leading-7">
              {tFooter('title_newsletter')}
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>

          {/* Widgets contact */}
          <div className="flex gap-5 md:gap-20 text-right justify-between md:justify-end pt-8 md:pt-0">
            <div className={`${styles.widget} text-left md:text-right`}>
              <h5 className={styles.wdgTitle}>{tFooter('help')}</h5>
              <ul>
                <li>
                  <Link className="hover:opacity-50 transition" href={'/contact'}>{tFooter('contact_us')}</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.widget} text-center md:text-right`}>
              <h5 className={styles.wdgTitle}>{tFooter('legal_info')}</h5>
              <ul>
                <li><Link className="hover:opacity-50 transition" href="/privacy">{tFooter('privacy')}</Link></li>
                <li><Link className="hover:opacity-50 transition" href="/cookies">{tFooter('cookies')}</Link></li>
                <li><CookieManager /></li>
              </ul>
            </div>
            <div className={`${styles.widget} text-right`}>
              <h5 className={styles.wdgTitle}>{tFooter('follow_us')}</h5>
              <ul>
                <li><a className="hover:opacity-50 transition" href="https://www.instagram.com/geniorama/" target="_blank">Instagram</a></li>
                <li><a className="hover:opacity-50 transition" href="https://www.linkedin.com/company/geniorama" target="_blank">Linked In</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="w-full mt-8 md:hidden border-black"/>

        {/* LOGO */}
        <img className="w-full py-5 md:mt-32 cursor-pointer" onClick={() => router.push("/")} src={LogoGenioramaDark.src} alt="" />


        {/* Copyright */}
        <div className={`${styles.copyright} columns-2 justify-space-between font-bold mt-3 md:mt-10`}>
          <div>
            <span>{tFooter('designed_by')}</span>
            <img className={`${styles.logoDesign} ml-2`} src="https://bitoinc.net/wp-content/uploads/2023/08/Bito-1.svg" alt="" />
          </div>
          <div className="text-right">
            <p>©2023 {tFooter('all_rights_reserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
