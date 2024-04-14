import styles from './ButtonMenuToggle.module.css';

export default function ButtonMenuToggle() {
  return (
    <button className={`${styles.button}`}>
        <span className={`${styles.line}`}></span>
        <span className={`${styles.line}`}></span>
        <span className={`${styles.line}`}></span>
    </button>
  )
}
