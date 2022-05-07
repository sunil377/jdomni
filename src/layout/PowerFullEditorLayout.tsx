import site_example from "../assets/images/site_example.webp";
import { useObserver } from "../hooks/useObserver";
import content from "../content/powerfull_editor_content.json";

export const PowerFullEditorLayout = () => {
  const { ref: imgRef, style: imgStyle } = useObserver();
  const { ref, style } = useObserver();

  return (
    <section className="grid items-center gap-x-2 px-4 py-16">
      <article ref={imgRef} className={imgStyle}>
        <img src={site_example} alt="beautiful site design" />
      </article>

      <article ref={ref} className={"space-y-4 px-4" + style}>
        <h2 className="text-center text-xl font-bold">{content.title}</h2>
        <p className="text-center text-sm normal-case leading-normal text-gray-600">
          {content["first-paragraph"]}
        </p>
        <p className="text-center text-sm normal-case leading-normal text-gray-600">
          {content["second-paragraph"]}
        </p>
      </article>
    </section>
  );
};
