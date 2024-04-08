import styles from "./NewsletterForm.module.css";

export default function NewsletterForm() {
  return (
    <form style={{width: '100%'}} action="">
      <div className={`${styles.formGroup}`}>
        <input required className={`${styles.input} bg-transparent text-black`} type="email" name="" id="" placeholder="Email"/>
        <button className={`${styles.button}`} type="submit">Send</button>
      </div>
    </form>
  )
}
