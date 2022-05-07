import { FC } from "react";
import { Button } from "../component";
import { useObserver } from "../hooks/useObserver";
import content from "../content/Contact_content.json";
import bg_art_first from "../assets/images/bg_art_first.png";
import bg_art_second from "../assets/images/bg_art_second.png";

export const ContactLayout = () => {
  const { ref, style } = useObserver();
  return (
    <section className=" bg-gray-50 text-center">
      <div className={`space-y-5 py-12 px-4 ${style}`} ref={ref}>
        <h2 className="text-xl font-bold">Get Your Own FREE Website Today!</h2>
        <Button shadow={true} size="large">
          Get Started
        </Button>
      </div>

      <div
        className="relative grid justify-items-center gap-10 bg-blue-50 bg-no-repeat py-12 px-6"
        style={{
          backgroundImage: `url(${bg_art_first}),url(${bg_art_second})`,
          backgroundSize: "100px 100px,100px 80px",
          backgroundPosition: "top 5px left 5px,bottom 5px right 5px",
        }}
      >
        {content.map(arg => (
          <Card key={arg.title} {...arg} />
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  img: string;
  title: string;
  desc: string;
  button: string;
}

const Card: FC<CardProps> = ({ img, title, button, desc }) => {
  const { ref, style } = useObserver();
  const { ref: refDiv, style: styleDiv } = useObserver();

  return (
    <article
      ref={ref}
      className={`grid justify-items-center gap-4 rounded-xl bg-white px-4 py-8 ${style}`}
    >
      <img
        src={img}
        alt=""
        className="aspect-square w-[120px]"
        width={120}
        height={120}
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{desc}</p>
      <div ref={refDiv} className={styleDiv}>
        <Button size="large" shadow={true}>
          {button}
        </Button>
      </div>
    </article>
  );
};
