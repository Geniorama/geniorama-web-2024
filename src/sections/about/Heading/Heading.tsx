import styles from "./Heading.module.css";
import BgLinear from "../../../../public/assets/images/bg-linearRecurso 1.svg";

export default function Heading() {
  return (
    <section 
      style={{backgroundImage: `url('${BgLinear.src}')`}}  
      className={`relative text-center pb-10 bg-no-repeat bg-cover bg-bottom bg-left ${styles.layerOpacity}`}>
      <div className="relative">
        <h1 className={`${styles.title} text-white`}>/ABOUT</h1>
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
  );
}
