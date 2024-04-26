import styles from "./OurTeam.module.css";
import GeniusText from "@/components/GeniusText/GeniusText";

export default function OurTeam() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-white text-center">
          <h2 className={`${styles.title}`}>
            <span>/</span>
            <span>THIS IS OUR</span>
            <span>TEAM</span>
          </h2>

          <p className={`my-5 ${styles.description}`}>
            We told you, we are an army. Well, rather a tech-army that works
            very hard to make your software, app or website runs perfectly.
          </p>
        </div>

        <div className="text-white p-5">
          {/* FOUNDERS */}
          <div className="md:flex gap-10 justify-center items-center">
            <div className={`${styles.cardTeam} mb-10 md:w-2/4`}>
                <div>
                <img
                    src="https://geniorama.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fequipo%2Fteam-oscar.7e8119c7f94e1e044061cdbc1bf1e086.png&w=640&q=75"
                    alt="Oscar Pedraza"
                    className="w-full aspect-square object-cover object-top"
                />
                </div>
                <div className="mt-5">
                    <h4 className="text-2xl md:text-5xl">Oscar Pedraza</h4>
                    <span className="text-sm md:text-xl mt-2 block">
                        <GeniusText>CMO</GeniusText>
                    </span>
                </div>
            </div>

            <div className={`${styles.cardTeam} mb-10 md:w-2/4`}>
                <div>
                <img
                    src="https://geniorama.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fequipo%2Fteam-angel.50c6b67b21cbf254eb7c4f1838226186.png&w=640&q=75"
                    alt="Oscar Pedraza"
                    className="w-full aspect-square object-cover object-top"
                />
                </div>
                <div className="mt-5">
                    <h4 className="text-2xl md:text-5xl">Angel Burgos</h4>
                    <span className="text-sm md:text-xl mt-2 block">
                        <GeniusText>CTO</GeniusText>
                    </span>
                </div>
            </div>
          </div>

          {/* TEAM */}
          <span>
            <GeniusText>
                Our Team
            </GeniusText>
          </span>
        </div>
      </div>
    </section>
  );
}
