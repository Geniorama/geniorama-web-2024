"use client";

import styles from "./Footer.module.css";
import LogoGenioramaDark from '../../../../public/assets/images/logo-geniorama-negro.svg';
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm";
import { useRouter } from "next/navigation";


export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      {/* NAVIGATION */}
      <ul className={`${styles.menu} columns-3 gap-0`}>
        <li onClick={() => router.push('/work')} className={styles.menuItem}>WORK</li>
        <li className={styles.menuItem}>ABOUT</li>
        <li className={styles.menuItem}>CONTACT</li>
      </ul>

      {/* INFO CONTACT */}
      <div className="container pb-2 md:pb-10 pt-10 px-3 md:px-0">
        <div className="md:flex justify-between">
          {/* Newsletter */}
          <div className={`${styles.boxNewsletter}`}>
            <p className="text-3xl leading-7">Want to <br />work with <br />geniuses?</p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>

          {/* Widgets contact */}
          <div className="flex gap-5 md:gap-20 text-right justify-between md:justify-end pt-8 md:pt-0">
            <div className={`${styles.widget} text-left md:text-right`}>
              <h5 className={styles.wdgTitle}>Help</h5>
              <ul>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className={`${styles.widget} text-center md:text-right`}>
              <h5 className={styles.wdgTitle}>Legal Info</h5>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
            <div className={`${styles.widget} text-right`}>
              <h5 className={styles.wdgTitle}>Follow Us</h5>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Linked In</a></li>
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
            <span>Designed by</span>
            <img className={`${styles.logoDesign} ml-2`} src="https://bitoinc.net/wp-content/uploads/2023/08/Bito-1.svg" alt="" />
          </div>
          <div className="text-right">
            <p>©2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
