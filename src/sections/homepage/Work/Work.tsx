import LinkProjectBasic from "@/components/LinkProject/LinkProjectBasic";
import GeniusLink from "@/components/GeniusLink/GeniusLink";
import GeniusText from "@/components/GeniusText/GeniusText";
import styles from "./Work.module.css";

const projects = [
  {
    name: "Gymdoor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut aliquam quia enim quam, nam est! Deleniti, temporibus iusto! Facere error harum architecto vitae qui aspernatur! Molestiae dolores ea fugit!",
    link: "#",
  },

  {
    name: "Bito Inc",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut aliquam quia enim quam, nam est! Deleniti, temporibus iusto! Facere error harum architecto vitae qui aspernatur! Molestiae dolores ea fugit!",
    link: "#",
  },

  {
    name: "Copu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut aliquam quia enim quam, nam est! Deleniti, temporibus iusto! Facere error harum architecto vitae qui aspernatur! Molestiae dolores ea fugit!",
    link: "#",
  },

  {
    name: "Amaze Inc",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut aliquam quia enim quam, nam est! Deleniti, temporibus iusto! Facere error harum architecto vitae qui aspernatur! Molestiae dolores ea fugit!",
    link: "#",
  },

  {
    name: "Skyline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut aliquam quia enim quam, nam est! Deleniti, temporibus iusto! Facere error harum architecto vitae qui aspernatur! Molestiae dolores ea fugit!",
    link: "#",
  },
];

export default function Work() {
  return (
    <section className="py-16 md:py-28 px-3 md:px-0">
      <div className="container">
        <div className="text-white font-light" style={{fontSize: '3.7vw'}}>
          <GeniusText component={'h4'}>
            Work
          </GeniusText>
        </div>
        <div>
          {/* Item */}
          {projects &&
            projects.map((item, i) => {
              return (
                <div key={i} className={i == 0 ? 'md:pl-32': i == 2 ? 'md:pl-80' : i == 3 ? 'md:pr-52' : ''}>
                  <LinkProjectBasic
                    name={item.name}
                    description={item.description}
                    href={item.link}
                    reverse={i == 3 || i == 4 && true}
                    spacing={i == 3 && 'gap-x-36'}
                  />
                </div>
              );
            })}

            <div className={`mt-5 text-right ${styles.seeMore}`}>
              <GeniusLink>See more</GeniusLink>
            </div>
        </div>
      </div>
    </section>
  );
}
