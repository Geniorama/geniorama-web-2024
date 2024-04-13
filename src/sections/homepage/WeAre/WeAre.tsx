import styles from './WeAre.module.css';
import GeniusText from '@/components/GeniusText/GeniusText';

export default function WeAre() {
  return (
    <section className="text-white py-44">
        <div className="container">
            <div className='mb-5 font-light' style={{fontSize: '1.6vw'}}>
                <GeniusText>
                    We are geniuses of web
                </GeniusText>
            </div>
            <div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-5">
                    <span className={`${styles.label}`}>THESE</span>
                    <ul className='w-1/5'>
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
                <div className="flex justify-between my-5">
                    <span className={`${styles.label}`}>ARE</span>
                    <ul className='w-1/5'>
                        <li className='font-light'>
                            <GeniusText>SEM positioning</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>SEO positioning</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-5">
                    <span className={`${styles.label}`}>OUR</span>
                    <ul className='w-1/5'>
                        <li className='font-light'>
                            <GeniusText>Audiovisual production</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-5">
                    <span className={`${styles.label}`}>SERVICES</span>
                    <ul className='w-1/5'>
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
