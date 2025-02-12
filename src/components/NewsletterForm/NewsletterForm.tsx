"use client"

import styles from "./NewsletterForm.module.css";
import { useTranslations } from "next-intl";

export default function NewsletterForm() {
  const tFooter = useTranslations('footer')

  return (
    <form style={{width: '100%'}} action="">
      <div className={`${styles.formGroup}`}>
        <input required className={`${styles.input} bg-transparent text-black`} type="email" name="" id="" placeholder="Email"/>
        <button className={`${styles.button}`} type="submit">{tFooter('send')}</button>
      </div>
    </form>
  )
}
