import Link from "next/link";
import styles from "./LinkProject.module.css";

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
  const { name, description, href, reverse, spacing } = props;

  return (
    <div>
        <Link className={`text-white md:flex items-center ${spacing ? spacing : 'gap-x-80'} ${styles.link} ${reverse && 'flex-row-reverse'}`} href={href ? href : '#'}>
            <div className={`uppercase ${styles.name}`}>
                <span className={styles.slash}>/</span>
                <span className={styles.text}>{name ? name : 'Name'}</span>
            </div>

            <div>
                <p className={`font-bold ${styles.description}`}>
                    {description ? description : 'Description'}
                </p>
            </div>
        </Link>
    </div>
  )
}
