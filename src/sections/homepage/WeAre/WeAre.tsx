"use client"

import styles from './WeAre.module.css';
import GeniusText from '@/components/GeniusText/GeniusText';
import BgLinear from '../../../../public/assets/images/bg-linearRecurso 1.svg';
import { useTranslations } from 'next-intl';

export default function WeAre() {
  const tHome = useTranslations('homepage')

  return (
    <section 
        style={{
            backgroundImage: `url('${BgLinear.src}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
        }}
        className={`relative text-white pb-24 md:py-44 px-3 md:px-0 ${styles.layerOpacity}`}>
        <div className="container relative">
            <div className={`${styles.title} mb-5 font-light`}>
                <GeniusText>
                    {tHome('we_are_geniuses_of_web')}
                </GeniusText>
            </div>
            <div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span className={`${styles.label}`} style={{textTransform: 'uppercase'}}>{tHome('these')}</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5 text-xl`}>
                        <li className='font-light'>
                            <GeniusText>{tHome('apps_development')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('web_development')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('software_development')}</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span style={{textTransform: 'uppercase'}} className={`${styles.label}`}>{tHome('are')}</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5 text-xl`}>
                        <li className='font-light'>
                            <GeniusText>{tHome('sem_positioning')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('seo_positioning')}</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span style={{textTransform: 'uppercase'}} className={`${styles.label}`}>{tHome('our')}</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5 text-xl`}>
                        <li className='font-light'>
                            <GeniusText>{tHome('audiovisual_production')}</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
                <div className="flex justify-between my-3 md:my-5">
                    <span style={{textTransform: 'uppercase'}} className={`${styles.label}`}>{tHome('services')}.</span>
                    <ul className={`${styles.list} w-1/3 md:w-1/5 text-xl`}>
                        <li className='font-light'>
                            <GeniusText>{tHome('integrations')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('process_automation')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('mail_marketing')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('sms_marketing')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('analytics')}</GeniusText>
                        </li>
                        <li className='font-light'>
                            <GeniusText>{tHome('hosting_web')}</GeniusText>
                        </li>
                    </ul>
                </div>
                <hr className={`${styles.divider}`} />
            </div>
        </div>
    </section>
  )
}
