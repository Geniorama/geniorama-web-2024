import styles from "./WeDevelop.module.css";
import Cover from '../../../../public/assets/images/home/Geniorama.jpg';
import Isologo from '../../../../public/assets/images/Isologo Geniorama - otros fondos.png';

export default function WeDevelop() {
  return (
    <section className="py-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-48">
      <div className="container relative pt-16 pb-20">
        <div className="flex items-center justify-between relative z-10">
          <div className="w-1/2">
            <h2 className={`${styles.title}`} style={{ color: "white" }}>
              /We Develop.
            </h2>
          </div>
          <div className="w-1/3">
            <p className={`${styles.desc}`}>
              Yes, that’s our mantra but also our every-day work. We are a group
              of obsessed code-folks who make incredible software, apps and
              websites for companies that search tech solutions. Over 10 years
              of experience has taught us a lot of things, but the most
              important: code and develop amazing things.
            </p>
          </div>
        </div>

        <div className="w-full absolute top-0 left-0 d-flex justify-center text-center items-center">
            <img className="w-full max-w-screen-lg m-auto rounded-lg" src={Cover.src} alt="" />
            <img className="absolute" style={{ bottom: '-19.1%', right: '10.1%', width: '200px'}} src={Isologo.src} alt="" />
        </div>
      </div>
    </section>
  );
}
