import { FC } from "react";
import content from "../content/feature_content.json";
import sprite from "../assets/images/sprite_icon.webp";
import { useObserver } from "../hooks/useObserver";
import { Button } from "../component";

export const FeatureLayout = () => {
  const { ref, style } = useObserver();

  return (
    <div className="grid gap-y-10 bg-blue-50 px-2 py-10">
      <h2 className="text-center text-xl font-bold">
        Everything You Need To Create Your Own Website
      </h2>
      <div className="grid gap-y-10">
        {content.map((d, i) => (
          <Card key={d.title} {...d} index={i} />
        ))}
      </div>
      <div className={`text-center ${style}`} ref={ref}>
        <Button shadow={true} size="large">
          See All Feature
        </Button>
      </div>
    </div>
  );
};

const getSpritePosition = (arg: number) => {
  const left = arg > 3 ? arg % 4 : arg;
  const top = 10 + 90 * Math.floor(arg / 4);
  return `top -${top}px left -${10 + 90 * left}px`;
};

export const Card: FC<CardProps> = ({ index, title, desc }) => {
  const { ref, style } = useObserver();

  return (
    <article className={`flex gap-x-1 ${style}`} ref={ref}>
      <div
        className="aspect-square h-20 w-20 -translate-y-5 scale-50 transform self-start"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${sprite})`,
          backgroundPosition: getSpritePosition(index),
          gridArea: "icon",
        }}
      />
      <div className="space-y-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </article>
  );
};

interface CardProps {
  title: string;
  desc: string;
  index: number;
}
