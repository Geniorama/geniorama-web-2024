import LinkProjectBasic from "@/components/LinkProject/LinkProjectBasic";
import GeniusLink from "@/components/GeniusLink/GeniusLink";

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
    <section className="py-28">
      <div className="container">
        <h4 style={{ fontSize: "61px" }} className="text-white">
          Work
        </h4>
        <div>
          {/* Item */}
          {projects &&
            projects.map((item, i) => {
              return (
                <div key={i} className={i == 0 ? 'pl-32': i == 2 ? 'pl-80' : i == 3 ? 'pr-52' : ''}>
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

            <div className="text-right" style={{fontSize: '34px'}}>
              <GeniusLink>See more</GeniusLink>
            </div>
        </div>
      </div>
    </section>
  );
}
