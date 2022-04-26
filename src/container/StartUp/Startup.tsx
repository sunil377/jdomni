import {FC, Fragment} from "react";
import CardSeperator from "./CardSeperator";
import StartUpCard from "./StartUpCard";

const startUpStep = [
  {
    title: "Create Account",
    src: "https://image1.jdomni.in/jdomni_email/1_2011102050.png",
    info: "Answer few simple questions to help us know about you.",
  },
  {
    title: "Select Business Type",
    src: "https://image1.jdomni.in/jdomni_email/2_2011102051.png",
    info: "We combine your answers with professionally-crafted content based on your industry.",
  },
  {
    title: "Get Started",
    src: "https://image1.jdomni.in/jdomni_email/3_2011102051.png",
    info: "You get a unique website with your information, text and images tailored for your business.",
  },
];

const Startup: FC<StartupProps> = props => {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center
gap-y-10 py-10 px-8 lg:flex-row"
    >
      <span className="absolute inset-0 -z-20 bg-blue-50" />
      <span className="absolute inset-x-0 top-0 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-white"
            d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </span>
      {startUpStep.map((step, i) => (
        <Fragment key={step.title}>
          <StartUpCard {...step} id={i + 1} />
          {i !== startUpStep.length - 1 && <CardSeperator />}
        </Fragment>
      ))}
    </section>
  );
};

export default Startup;

interface StartupProps {}
