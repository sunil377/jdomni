import {FC} from "react";
import Action from "../container/Action";
import Comment from "../container/Comments/Comment";
import Contact from "../container/Contact/Contact";
import Footer from "../container/Footer/Footer";
import Navbar from "../container/Navbar/Navbar";
import PowerFullEditor from "../container/PowerFullEditor";
import Startup from "../container/StartUp/Startup";
import Tools from "../container/Tools/Tools";
import Websites from "../container/Work/Websites";
import {useTitle} from "../hooks/useTitle";

const Landing: FC<LandingProps> = props => {
  useTitle();

  return (
    <>
      <Navbar />
      <main>
        <Action />
        <Startup />
        <PowerFullEditor />
        <Tools />
        <Websites />
        <Comment />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Landing;

interface LandingProps {}
