import styles from './Intro.module.css';
import GeniusLink from '@/components/GeniusLink/GeniusLink';

export default function Intro() {
  return (
    <div className={`${styles.container} genius-intro`}>
        <h1 className={styles.title}>/Geniuses <span>of WEB</span></h1>
        <div className={`${styles.stack}`}>
          <p>Web development company</p>
          <GeniusLink href='/work'>
            See our work
          </GeniusLink>
        </div>
    </div>
  )
}
