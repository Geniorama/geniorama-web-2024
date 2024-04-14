import styles from "./WeDevelop.module.css";
import Cover from '../../../../public/assets/images/home/Geniorama.jpg';
import Isologo from '../../../../public/assets/images/Isologo Geniorama - otros fondos.png';

export default function WeDevelop() {
  return (
    <section className="pt-28 pb-0 md:pb-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-48">
      <div className="container relative pt-16 pb-16 md:pb-20">
        <div className="px-5 md:px-0 md:flex items-center justify-between relative z-10">
          <div className="md:w-1/2">
            <h2 className={`${styles.title}`} style={{ color: "white" }}>
              /We <span>Develop.</span>
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className={`${styles.desc}`}>
              Yes, that’s our mantra but also our every-day work. We are a group
              of obsessed code-folks who make incredible software, apps and
              websites for companies that search tech solutions. Over 10 years
              of experience has taught us a lot of things, but the most
              important: code and develop amazing things.
            </p>
          </div>
        </div>

        <div className="w-full absolute top-0 left-1/4 md:left-0 d-flex justify-center text-center items-center">
            <img className="w-full md:max-w-screen-lg m-auto md:rounded-lg" src={Cover.src} alt="" />
            <img className={`${styles.isologo} absolute`} src={Isologo.src} alt="" />
        </div>
      </div>
    </section>
  );
}
