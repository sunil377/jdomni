import {title} from "process";
import {FC} from "react";
import Button from "../../component/Button";
import {useObserver} from "../../hooks/useObserver";
const Sample: FC<SampleProps> = ({src, title}) => {
  const {ref, style} = useObserver();

  return (
    <article
      className={`border rounded-md hover:shadow-2xl overflow-hidden lg:max-w-xs ${style}`}
      ref={ref}
    >
      <div className="border-b pl-2 space-x-1">
        <span className="w-1.5 h-1.5 bg-blue-200 border inline-block rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-blue-200 border inline-block rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-blue-200 border inline-block rounded-full"></span>
      </div>
      <figure>
        <img
          src={src}
          alt=""
          className="hover:transform w-full transition-transform duration-300 hover:scale-105"
        />
        <figcaption className="text-sm py-4 text-gray-500 text-center">
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
