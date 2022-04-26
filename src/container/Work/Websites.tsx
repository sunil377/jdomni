import {FC} from "react";
import Button from "../../component/Button";
import {useObserver} from "../../hooks/useObserver";
import Sample from "./Sample";

const data = [
  {
    title: "Food Outliet - Bakery",
    src: "https://image1.jdomni.in/preview-theme/c/f/4/0f5dcc99-0a7c-45ee-bb01-b9b4d21464c9.jpeg",
  },
  {
    title: "Food Outliet - Bakery 2",
    src: "https://image1.jdomni.in/preview-theme/c/f/4/0f5dcc99-0a7c-45ee-bb01-b9b4d21464c9.jpeg",
  },
  {
    title: "Food Outliet - Bakery 3",
    src: "https://image1.jdomni.in/preview-theme/c/f/4/0f5dcc99-0a7c-45ee-bb01-b9b4d21464c9.jpeg",
  },
  {
    title: "Food Outliet - Bakery 4",
    src: "https://image1.jdomni.in/preview-theme/c/f/4/0f5dcc99-0a7c-45ee-bb01-b9b4d21464c9.jpeg",
  },
  {
    title: "Food Outliet - Bakery 5",
    src: "https://image1.jdomni.in/preview-theme/c/f/4/0f5dcc99-0a7c-45ee-bb01-b9b4d21464c9.jpeg",
  },
  {
    title: "Food Outliet - Bakery 6",
    src: "https://image1.jdomni.in/preview-theme/c/f/4/0f5dcc99-0a7c-45ee-bb01-b9b4d21464c9.jpeg",
  },
];

const Websites: FC<WebsitesProps> = props => {
  const {ref, style} = useObserver();

  return (
    <section className="min-h-screen py-20 px-4">
      <h2 className="text-center">
        Get a Beautiful and Professional Looking Website
      </h2>
      <p className="my-4 text-center">
        Whatever is your business, we have the right look and feel
      </p>
      <div className="grid gap-4 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {data.map(arg => (
          <Sample key={arg.title} {...arg} />
        ))}
      </div>
      <div className={`text-center ${style}`} ref={ref}>
        <Button shadow={true} size="large">
          Browse More
        </Button>
      </div>
    </section>
  );
};

export default Websites;

interface WebsitesProps {}
