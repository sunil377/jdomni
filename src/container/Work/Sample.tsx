import {FC} from "react";
import Button from "../../component/Button";
import {useObserver} from "../../hooks/useObserver";

const Sample: FC<SampleProps> = ({src, title}) => {
  const {ref, style} = useObserver();

  return (
    <article
      className={`overflow-hidden rounded-md border hover:shadow-2xl lg:max-w-xs ${style}`}
      ref={ref}
    >
      <div className="space-x-1 border-b pl-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full border bg-blue-200"></span>
        <span className="inline-block h-1.5 w-1.5 rounded-full border bg-blue-200"></span>
        <span className="inline-block h-1.5 w-1.5 rounded-full border bg-blue-200"></span>
      </div>
      <figure>
        <img
          src={src}
          alt=""
          className="w-full transition-transform duration-300 hover:scale-105 hover:transform"
        />
        <figcaption className="py-4 text-center text-sm text-gray-500">
          {title}
        </figcaption>
      </figure>
      <div className="flex gap-4 px-4 pb-6">
        <Button className="basis-full">Live Demo</Button>
        <Button variant="outlined" className="basis-full">
          preview
        </Button>
      </div>
    </article>
  );
};

export default Sample;

interface SampleProps {
  title: string;
  src: string;
}
