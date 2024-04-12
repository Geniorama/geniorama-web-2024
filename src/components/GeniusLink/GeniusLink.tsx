import Link from "next/link";
import styles from "./GeniusLink.module.css";

interface GeniusLinkProps {
    children: any;
    href?: string;
}

export default function GeniusLink(props:GeniusLinkProps) {
  return (
    <Link style={{color: 'white', fontSize: '1em'}} className={styles.link} href={props.href ? props.href : "#"}>
        <span>&lt;/ </span>
        <span className={styles.text}>{props.children}</span>
        <span> &gt;</span>
    </Link>
  )
}
