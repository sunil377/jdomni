import { FC, Fragment } from "react";

import { IoIosArrowForward } from "react-icons/io";

import wave from "../assets/svg/wave.svg";
import content from "../content/startup_content.json";
import { useObserver } from "../hooks/useObserver";

export const StartUpLayout = () => {
  return (
    <section className="relative grid place-content-center gap-y-8 py-20 px-4">
      <span className="absolute inset-0 -z-20 bg-blue-50" aria-hidden="true" />
      <span className="absolute inset-x-0 top-0 -z-10" aria-hidden="true">
        <img src={wave} alt="" />
      </span>
      {content.map((step, i) => (
        <Fragment key={step.title}>
          <Card {...step} id={i + 1} />
        </Fragment>
      ))}
    </section>
  );
};

const Card: FC<CardProps> = ({ id, src, info, title, alt = "step" }) => {
  const { ref, style } = useObserver();

  return (
    <article className={`startup_card ${style}`} ref={ref}>
      <h3
        className="text-sm font-semibold"
        style={{
          gridArea: "step",
        }}
      >
        STEP {id}
      </h3>
      <img
        style={{
          gridArea: "img",
        }}
        src={src}
        alt={alt}
        width={50}
        height={50}
        className="aspect-square w-[50px] object-cover"
      />
      <h2
        style={{
          gridArea: "heading",
        }}
        className="text-base font-bold"
      >
        {title}
      </h2>
      <p
        style={{
          gridArea: "content",
        }}
        className="text-sm text-gray-600"
      >
        {info}
      </p>
      <CardSeperator />
    </article>
  );
};

const CardSeperator = () => {
  return (
    <span className="startup_card_sep">
      <span>
        <IoIosArrowForward className="text-blue-200" />
      </span>
      <span>
        <IoIosArrowForward className="text-blue-400" />
      </span>
      <span>
        <IoIosArrowForward className="text-blue-600" />
      </span>
    </span>
  );
};

interface CardProps {
  id: number;
  src: string;
  info: string;
  title: string;
  alt?: string;
}
