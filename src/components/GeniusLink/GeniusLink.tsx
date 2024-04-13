import Link from "next/link";
import styles from "./GeniusLink.module.css";

interface GeniusLinkProps {
    children: any;
    href?: string;
    active?: boolean;
}

export default function GeniusLink(props:GeniusLinkProps) {
  return (
    <Link style={{color: 'white', fontSize: '1em'}} className={`${styles.link} ${props.active && styles.active}`} href={props.href ? props.href : "#"}>
        <span className={styles.symbol}>&lt; </span>
        <span className={styles.text}>{props.children}</span>
        <span className={styles.symbol}> &gt;</span>
    </Link>
  )
}
