import GeniusText from "@/components/GeniusText/GeniusText";
import homeStyles from "@/sections/homepage/WeAre/WeAre.module.css";
import BgLinear from '../../../../public/assets/images/bg-linearRecurso 1.svg';

export default function WhyUs() {
  return (
    <section 
        style={{backgroundImage: `url('${BgLinear.src}')`}} 
        className={`text-white px-3 py-40 bg-cover bg-right-bottom relative ${homeStyles.layerOpacity}`}>
      <div className="container relative">
        <p className={`${homeStyles.title} mb-5 font-light`}>
          Among so many companies you will wonder…
        </p>
        <hr />
        <div className="flex items-center md:items-start justify-between my-3 md:my-5">
          <span className={`${homeStyles.label}`}>WHY</span>
          <div className={`w-1/3 md:w-1/2 text-right font-light`}>
            <span className="md:text-4xl">
              <GeniusText>World-class team</GeniusText>
            </span>

            <div className="ml-auto" style={{ maxWidth: "350px" }}>
              <p>
                We recruit the best developers in LATAM to offer the best
                services to our clients.
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex items-center md:items-start justify-between my-3 md:my-5">
          <span className={`${homeStyles.label}`}>US</span>
          <div className={`w-1/3 md:w-1/2 text-right font-light`}>
            <span className="md:text-4xl">
              <GeniusText>Worldwide connected team</GeniusText>
            </span>

            <div className="ml-auto" style={{ maxWidth: "350px" }}>
              <p>
                We work projects in several countries, so we can work with you
                even if you’re in Tokyo.
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex items-center md:items-start justify-between my-3 md:my-5">
          <span className={`${homeStyles.label}`}>?</span>
          <div className={`w-1/3 md:w-1/2 text-right font-light`}>
            <span className="md:text-4xl">
              <GeniusText>Tech-based metodology</GeniusText>
            </span>

            <div className="ml-auto" style={{ maxWidth: "350px" }}>
              <p>
                We work with the best operating methodology for tech projects to
                make amazing thins always on time.
              </p>
            </div>
          </div>
        </div>

        <hr />
        <p className={`${homeStyles.title} mt-5 font-light`}>
            and also because we are cooler.
        </p>
      </div>
    </section>
  );
}
