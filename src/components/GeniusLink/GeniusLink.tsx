// import Link from "next/link";
import { Link } from "@/i18n/routing";
import styles from "./GeniusLink.module.css";
import { MouseEvent } from "react";

interface GeniusLinkProps {
    children: any;
    href?: string;
    active?: boolean;
    onClick?: () => void;
    locale?: string;
}

export default function GeniusLink(props:GeniusLinkProps) {
  const handleClick = (e:MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    if(!props.onClick) return
    e.preventDefault()
    props.onClick()
  }

  return (
    <Link locale={props.locale} onClick={(e) => handleClick(e)} style={{color: 'white', fontSize: '1em'}} className={`${styles.link} ${props.active && styles.active}`} href={props.href ? props.href : "#"}>
        <span className={styles.symbol}>&lt; </span>
        <span className={styles.text}>{props.children}</span>
        <span className={styles.symbol}> &gt;</span>
    </Link>
  )
}
