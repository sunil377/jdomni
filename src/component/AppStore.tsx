import { Link } from "react-router-dom";
import Google_Store_Img from "../assets/images/Google_Play_store.webp";
import Apple_Store_Img from "../assets/images/Apple_App_store.webp";

const content = [
  { to: "#google", img: Google_Store_Img, alt: "Google Store" },
  { to: "#apple", img: Apple_Store_Img, alt: "Apple Store" },
];

export const AppStore = () => {
  return (
    <section className="space-y-5">
      <h3 className="text-left">Downloads Apps</h3>
      <div className="inline-flex gap-3">
        {content.map(arg => (
          <Link key={arg.to} to={arg.to}>
            <span className="sr-only">{arg.alt}</span>
            <img
              src={arg.img}
              alt={arg.alt}
              className="h-auto w-[138px]"
              width={138}
              height={39}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
