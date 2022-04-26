import {FC} from "react";
import {useObserver} from "../../hooks/useObserver";

const StartUpCard: FC<StartUpCardProps> = ({
  id,
  src,
  info,
  title,
  alt = "step",
}) => {
  const {ref, style} = useObserver();

  return (
    <article
      className={`flex basis-full flex-col items-center justify-center gap-y-4 
      p-4 ${style}`}
      ref={ref}
    >
      <h3>
        STEP {id} - {title}
      </h3>
      <div className="min-h-[200] min-w-[200]">
        <img src={src} alt={alt} width={200} height={200} />
      </div>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-center">{info}</p>
    </article>
  );
};

export default StartUpCard;

interface StartUpCardProps {
  id: number;
  src: string;
  info: string;
  title: string;
  alt?: string;
}
