import styles from "./WhatDo.module.css";
import CoverAbout from "../../../../public/assets/images/about/about-geniorama.jpg";
import Isologo from "../../../../public/assets/images/Isologo Geniorama - otros fondos.png";

export default function WhatDo() {
  return (
    <section>
      <div className="container text-white relative">
        <div className="w-2/3 mx-auto py-28 my-28">
          <h2 className={`${styles.copy} absolute left-0 top-0 underline z-10`}>WHAT DO</h2>
          <div className="relative">
            <img src={Isologo.src} alt="" className={`${styles.isologo} absolute`}/>
            <img className="w-full" src={CoverAbout.src} alt="" />
          </div>

          <p className={`${styles.description} md:w-2/4 mt-5`}>
            As you see before, we love to code. But coding has a lot of work to
            make good things done, so we also work with a agile methodology for
            tech-project management, developing any kind of task for our clients
            and to make their ideas become real on time.
          </p>

          <h2 className={`${styles.copy} absolute right-0 bottom-44 underline`}>WE DO</h2>
        </div>
      </div>
    </section>
  );
}
