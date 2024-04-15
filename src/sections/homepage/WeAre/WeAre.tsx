import styles from './WeAre.module.css';
import GeniusText from '@/components/GeniusText/GeniusText';

export default function WeAre() {
  return (
    <section className="text-white pb-24 md:py-44 px-3 md:px-0">
        <div className="container">
            <div className={`${styles.title} mb-5 font-light`}>
                <GeniusText>
                    We are geniuses of web
                </GeniusText>
            </div>
            <div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span className={`${styles.label}`}>THESE</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5`}>
                        <li className='font-light'>
                            <GeniusText>Apps Development</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>Web Development</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>Software Development</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span className={`${styles.label}`}>ARE</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5`}>
                        <li className='font-light'>
                            <GeniusText>SEM positioning</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>SEO positioning</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span className={`${styles.label}`}>OUR</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5`}>
                        <li className='font-light'>
                            <GeniusText>Audiovisual production</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span className={`${styles.label}`}>SERVICES.</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5`}>
                        <li className='font-light'>
                            <GeniusText>Integrations</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>Mail Marketing</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>SMS Marketing</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>Analytics</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>Hosting Web</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
            </div>
        </div>
    </section>
  )
}
