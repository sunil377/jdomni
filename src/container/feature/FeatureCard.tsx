import { FC } from "react";
import sprite from "../../assets/images/sprite_icon.webp";
import { useObserver } from "../../hooks/useObserver";

const getSpritePosition = (arg: number) => {
  const left = arg > 3 ? arg % 4 : arg;
  const top = 10 + 90 * Math.floor(arg / 4);
  return `top -${top}px left -${10 + 90 * left}px`;
};

const FeatureCard: FC<FeatureProps> = ({ title, desc, index }) => {
  const { ref, style } = useObserver();

  return (
    <article className={`flex gap-x-5 ${style}`} ref={ref}>
      <span
        className="h-20 w-20 shrink-0 scale-75 transform"
        style={{
          backgroundImage: `url(${sprite})`,
          backgroundPosition: getSpritePosition(index),
        }}
      ></span>
      <div className="space-y-2">
        <h3 className="text-left">{title}</h3>
        <p className="text-left">{desc}</p>
      </div>
    </article>
  );
};

export default FeatureCard;

interface FeatureProps {
  title: string;
  desc: string;
  index: number;
}
