import styles from './ButtonMenuToggle.module.css';

interface ButtonMenuToggleProps {
  onClick?: () => void;
}

export default function ButtonMenuToggle(props:ButtonMenuToggleProps) {
  return (
    <button onClick={props.onClick} className={`${styles.button}`}>
        <span className={`${styles.line}`}></span>
        <span className={`${styles.line}`}></span>
        <span className={`${styles.line}`}></span>
    </button>
  )
}
