import { FC } from "react";
import { useObserver } from "../hooks/useObserver";
import content from "../content/Comment_content.json";
import { useCountdown } from "../hooks/useCountdown";
import { Quote } from "../component/Quote";

export const CommentLayout = () => {
  const { ref, style } = useObserver();
  const { length } = content;
  const { active, setActive } = useCountdown(length);
  const emptyArrayOfContentLength = Array.from(new Array(length));

  const activeArray = content
    .filter((val, index, arr) => index >= active)
    .slice(0, 2);

  return (
    <section
      ref={ref}
      className={
        "grid justify-items-center gap-y-6 bg-blue-50 py-10 px-4 text-center " +
        style
      }
    >
      <Quote />
      <h2 className="py-4 text-xl font-bold">
        Here’s What Our Customers Have Been Saying About Us
      </h2>
      {/* <section className="mx-auto hidden h-[480px] max-w-4xl overflow-hidden px-4 md:grid md:grid-cols-2">
        {activeArray.map(arg => (
          <Card key={arg.username} {...arg} />
        ))}
      </section> */}
      <section className="grid">
        {content.map((arg, index) => (
          <Card key={arg.username} {...arg} isActive={active === index} />
        ))}
      </section>

      <div className="space-x-1 text-center">
        {emptyArrayOfContentLength.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 min-w-[8px] rounded-full border border-blue-500 ${
              active === index ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => setActive(index)}
          >
            <span className="sr-only">{index}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  desc: string;
  logo: string;
  userProfile: string;
  username: string;
  userCompanyStatus: string;
  isActive: boolean;
}

const Card: FC<CardProps> = ({
  logo,
  desc,
  userProfile,
  username,
  userCompanyStatus,
  isActive,
}) => {
  return (
    <article
      className={`relative col-start-1 col-end-2 row-start-1 row-end-2 grid transform justify-center justify-items-center gap-y-6 transition-transform duration-300 ${
        isActive ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <img
        src={logo}
        alt={"campany name"}
        height="30"
        width="auto"
        className="max-h-[30px] object-scale-down"
      />
      <p
        className="text-sm text-gray-600"
        style={{
          fontSize: "0.825rem",
        }}
      >
        {desc}
      </p>
      <div className="flex items-center gap-2">
        <img
          src={userProfile}
          className="aspect-square w-[50px] shrink-0 overflow-hidden rounded-full border border-gray-300 p-0.5"
          width={50}
          height={50}
          alt="avatar"
        />
        <div className="text-left">
          <h4 className="text-sm font-semibold">{username}</h4>
          <p className="text-xs font-bold text-gray-600">{userCompanyStatus}</p>
        </div>
      </div>
    </article>
  );
};
