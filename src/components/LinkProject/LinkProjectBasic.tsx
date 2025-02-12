import Link from "next/link";
import styles from "./LinkProject.module.css";
import { truncateText } from "@/helpers/formatters";
export interface ProjectProps {
    name?: string;
    description?: string;
    image?: object;
    imageUrl?: string;
    href?: string;
    reverse?: boolean;
    spacing?: string | null | boolean;
}

export default function LinkProjectBasic(props: ProjectProps) {
  const { name, description, href, reverse, spacing, imageUrl } = props;

  return (
    <div>
        <Link className={`text-white md:flex items-center ${spacing ? spacing : 'gap-x-80'} ${styles.link} ${imageUrl && styles.withCover} ${reverse && 'flex-row-reverse'}`} href={href ? href : '#'} target="_blank">
            <div className={`flex items-center ${imageUrl && ('md:gap-20')}`}>
                {imageUrl && (
                    <div className={`${styles.cover} hidden md:block`}>
                        <img className="object-cover h-full" src={imageUrl} alt="" />
                    </div>
                )}
                <div className={`uppercase ${styles.name}`}>
                    {!imageUrl && (
                        <span className={styles.slash}>/</span>
                    )}
                    <span className={styles.text}>{name ? name : 'Name'}</span>
                </div>
            </div>

            {/* <div>
                <p className={`font-bold ${styles.description}`}>
                    {description ? truncateText(description, 60) : 'Description not found'}
                </p>
            </div> */}
        </Link>
    </div>
  )
}
