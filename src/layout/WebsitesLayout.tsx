import { FC } from "react";
import { useObserver } from "../hooks/useObserver";
import content from "../content/sample_website_content.json";
import { Button } from "../component";

export const WebsitesLayout = () => {
  const { ref, style } = useObserver();

  return (
    <section className="py-20 px-4">
      <h2 className="text-center text-xl font-bold">
        Get a Beautiful and Professional Looking Website
      </h2>
      <p className="my-4 text-center text-sm text-gray-600">
        Whatever is your business, we have the right look and feel
      </p>
      <div className="grid gap-4 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {content.map(arg => (
          <Card key={arg.title} {...arg} />
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

const Card: FC<CardProps> = ({ src, title }) => {
  const { ref, style } = useObserver();
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-md border border-gray-300 hover:shadow-2xl lg:max-w-xs ${style}`}
      ref={ref}
    >
      <div className="space-x-1 border-b pl-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full border bg-blue-200" />
        <span className="inline-block h-1.5 w-1.5 rounded-full border bg-blue-200" />
        <span className="inline-block h-1.5 w-1.5 rounded-full border bg-blue-200" />
      </div>
      <figure>
        <img
          src={src}
          alt=""
          className="transform transition-transform duration-300 hover:scale-105"
        />
        <figcaption className="py-4 text-center text-sm text-gray-500">
          {title}
        </figcaption>
      </figure>
      <div className="grid grid-cols-2 gap-4 px-4 pb-6">
        <Button>Live Demo</Button>
        <Button variant="outlined">preview</Button>
      </div>
    </article>
  );
};

interface CardProps {
  title: string;
  src: string;
}
