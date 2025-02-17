import styles from './HeadingPage.module.css';

interface HeadingPageProps {
    title: string;
    layerOpacity?: boolean;
    backgroundImage?: string;
    backgroundColor?: string;
    cover?: string;
}

export default function HeadingPage(props:HeadingPageProps) {
  return (
    <section 
      style={{
        backgroundColor: props.backgroundColor && props.backgroundColor,
        backgroundImage: props.backgroundImage && `url('${props.backgroundImage}')`
      }}  
      className={`relative text-center pb-10 ${props.backgroundImage && 'bg-no-repeat bg-cover bg-bottom bg-left pt-5'} ${props.layerOpacity && styles.layerOpacity}`}>
      <div className="relative">
        <h1 className={`${styles.title} text-white uppercase`}>{props.title}</h1>
        
        {props.cover && (
            <div className='absolute top-0 left-0 flex justify-center items-center h-3/4 md:h-full mx-auto w-full'>
                {/* <img 
                    src={props.cover} 
                    alt={props.title} 
                    className='w-2/5'
                    /> */}
                <video className='w-2/5 aspect-video mx-auto' autoPlay muted loop src="https://res.cloudinary.com/geniorama2021/video/upload/v1739486214/Geniorama%20Web/freepik__a-smooth-dollyin-movement-approaches-the-character__22647_skte2d.mp4"></video>
            </div>
        )}

        {/* DOWN ARROW */}
        <span className="text-white inline-block cursor-pointer" style={{fontSize: '45px'}}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={'1em'}
            height={'1em'}
            >
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
        </span>
      </div>
    </section>
  )
}
