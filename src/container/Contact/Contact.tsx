import {FC} from "react";
import Button from "../../component/Button";
import {useObserver} from "../../hooks/useObserver";
import ContactCard from "./ContactCard";

const data = [
  {
    title: "Contact Us",
    desc: "How Can We Help You?Reach Us Today to Know More",
    img: "https://image1.jdomni.in/jdomni_email/05_1911011407.png",
    button: "Get In Touch",
  },
  {
    title: "Help Center",
    desc: "Have any queries about creating your website? We'll help you find the answer",
    img: "https://image1.jdomni.in/jdomni_email/05_1911011407.png",
    button: "Learn More",
  },
];

const Contact: FC<ContactProps> = props => {
  const {ref, style} = useObserver();
  return (
    <section className="bg-gray-50 px-4 text-center">
      <div className={`space-y-4 py-20 ${style}`} ref={ref}>
        <h2 className="xl:text-5xl">Get Your Own FREE Website Today!</h2>
        <Button shadow={true} size="large">
          Get Started
        </Button>
      </div>
      <div
        className="grid justify-items-center gap-10 bg-blue-50 py-20 px-5 
      md:grid-cols-2 md:gap-5"
      >
        {data.map(arg => (
          <ContactCard key={arg.title} {...arg} />
        ))}
      </div>
    </section>
  );
};

export default Contact;

interface ContactProps {}
