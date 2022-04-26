import {FC} from "react";
import Button from "../../component/Button";
import {useObserver} from "../../hooks/useObserver";

const ContactCard: FC<ContactCardProps> = ({img, title, button, desc}) => {
  const {ref, style} = useObserver();

  return (
    <article
      ref={ref}
      className={`flex max-w-md flex-col gap-5 rounded-xl bg-white px-10 py-12 ${style}`}
    >
      <img
        src={img}
        alt=""
        className="h-[120px] w-[120px] self-center"
        width={120}
        height={120}
      />
      <h2>{title}</h2>
      <p>{desc}</p>
      <Button className="self-center" size="large" shadow={true}>
        {button}
      </Button>
    </article>
  );
};

export default ContactCard;

interface ContactCardProps {
  img: string;
  title: string;
  desc: string;
  button: string;
}
