import styles from './Intro.module.css';
import GeniusLink from '@/components/GeniusLink/GeniusLink';

export default function Intro() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>/Geniuses <span>of WEB</span></h1>
        <div className={`${styles.stack}`}>
          <p>Software development company</p>
          <GeniusLink href='#'>
            See our work
          </GeniusLink>
        </div>
    </div>
  )
}
