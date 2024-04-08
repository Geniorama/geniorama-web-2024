import styles from "./Footer.module.css";
import LogoGenioramaDark from '../../../public/assets/images/logo-geniorama-negro.svg';
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* NAVIGATION */}
      <ul className={`${styles.menu} columns-3 gap-0`}>
        <li className={styles.menuItem}><a className={styles.menuLink} href="">WORK</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="">ABOUT</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="">CONTACT</a></li>
      </ul>

      {/* INFO CONTACT */}
      <div className="container py-10">
        <div className="flex justify-between">
          {/* Newsletter */}
          <div style={{width: '30%'}}>
            <p className="text-3xl leading-7">Want to <br />work with <br />geniuses?</p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>

          {/* Widgets contact */}
          <div className="flex gap-20 text-right justify-end">
            <div className={styles.widget}>
              <h5 className={styles.wdgTitle}>Help</h5>
              <ul>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className={styles.widget}>
              <h5 className={styles.wdgTitle}>Legal Info</h5>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
            <div className={styles.widget}>
              <h5 className={styles.wdgTitle}>Follow Us</h5>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Linked In</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* LOGO */}
        <img className="w-full py-5 mt-32" src={LogoGenioramaDark.src} alt="" />


        {/* Copyright */}
        <div className={`${styles.copyright} columns-2 justify-space-between font-bold mt-10`}>
          <div>
            <span>Designed by</span>
            <img className="ml-2" style={{display: 'inline-block'}} width={'80px'} src="https://bitoinc.net/wp-content/uploads/2023/08/Bito-1.svg" alt="" />
          </div>
          <div className="text-right">
            <p>©2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
