import {FC, useEffect, useState} from "react";
import {useObserver} from "../../hooks/useObserver";
import CommentCard from "./CommentCard";

const data = [
  {
    logo: "https://image1.jdomni.in/jdomni_email/website_testimonial3_logo_1910301737.png",
    desc: " Jd Omni is the most easy-to-use website building platform that I have come across. The Mobile App is very user friendly which allows me to edit and manage my website on the go.",
    userProfile: "https://image1.jdomni.in/jdomni_email/E_2011101805.png",
    username: "B.Sam",
    userCompanyStatus: "Founder, Nahomea Almshouse Charitable Trust Sevalayam",
  },
  {
    logo: "https://image1.jdomni.in/jdomni_email/31_1909301906.png",
    desc: "With my own business website, it has been easy to promote the complete range of footwear I deal into. Since my website came into being, I have received more enquiries. My sales have increased.",
    userProfile: "https://image1.jdomni.in/jdomni_email/E_2011101805.png",
    username: "Hitesh Varyani",
    userCompanyStatus: "Founder, Minzo India",
  },
  {
    logo: "https://image1.jdomni.in/jdomni_email/website_testimonial4_logo_1910301737.png",
    desc: " Jd Omni is the most easy-to-use website building platform that I have come across. The Mobile App is very user friendly which allows me to edit and manage my website on the go.",
    userProfile: "https://image1.jdomni.in/jdomni_email/E_2011101805.png",
    username: "B.Sam 2",
    userCompanyStatus: "Founder, Nahomea Almshouse Charitable Trust Sevalayam",
  },
  {
    logo: "https://image1.jdomni.in/jdomni_email/34_1909301923.png",
    desc: "With my own business website, it has been easy to promote the complete range of footwear I deal into. Since my website came into being, I have received more enquiries. My sales have increased.",
    userProfile: "https://image1.jdomni.in/jdomni_email/E_2011101805.png",
    username: "Hitesh Varyani 2",
    userCompanyStatus: "Founder, Minzo India",
  },
];

const Comment: FC<CommentProps> = props => {
  const [active, setActive] = useState(0);
  const {ref, style} = useObserver();

  useEffect(() => {
    const timer = setInterval(() => {
      if (active === data.length - 1) {
        setActive(0);
      } else {
        setActive(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [active]);

  const activeArray = data
    .filter((val, index, arr) => index >= active)
    .slice(0, 2);

  return (
    <section ref={ref} className={"bg-blue-50 py-10 text-center " + style}>
      <h2 className="py-4">
        Here’s What Our Customers Have Been Saying About Us
      </h2>
      <section className="mx-auto hidden h-[480px] max-w-4xl overflow-hidden px-4 md:grid md:grid-cols-2">
        {activeArray.map(arg => (
          <CommentCard key={arg.username} {...arg} />
        ))}
      </section>
      <section className="mx-auto grid h-[480px] max-w-4xl place-content-center overflow-hidden px-4 md:hidden md:grid-cols-2">
        {data.map(
          (arg, index) =>
            index === active && <CommentCard key={arg.username} {...arg} />,
        )}
      </section>
      <div className="col-span-2 space-x-1 text-center">
        {Array.from(new Array(data.length)).map((arg, index) => (
          <button
            key={index}
            className={`h-2 w-2 min-w-[8px] rounded-full ${
              active === index ? "bg-blue-500" : "bg-blue-200"
            }`}
            onClick={() => setActive(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Comment;

interface CommentProps {}
