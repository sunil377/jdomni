import {FC} from "react";

import site_example from "../assets/images/site_example.webp";
import {useObserver} from "../hooks/useObserver";

const PowerFullEditor: FC<PowerFullEditorProps> = props => {
  const {ref: imgRef, style: imgStyle} = useObserver();
  const {ref, style} = useObserver();

  return (
    <section
      className="grid min-h-screen items-center gap-x-2 px-8 
py-12 md:grid-cols-2"
    >
      <article ref={imgRef} className={imgStyle}>
        <img src={site_example} className="mt-20" alt="beautiful site design" />
      </article>

      <article ref={ref} className={"space-y-4 " + style}>
        <h2 className="md:text-left">The Most Powerful Website Editor</h2>
        <p className="text-left">
          With an array of editing tools available at your fingertips, click
          anything to edit, and publish instantly. Add text, images, videos,
          colors, animations, call-to-action buttons and much more with our
          easy-to-use and intuitive editor.
        </p>
        <p className="text-left">
          Absolutely no design or coding skills required. Customize your website
          as much as you want.
        </p>
      </article>
    </section>
  );
};

export default PowerFullEditor;

interface PowerFullEditorProps {}
