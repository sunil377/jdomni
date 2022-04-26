import Navbar from "./Navbar/Navbar";
import Startup from "./StartUp/Startup";

/* assets */
import PowerFullEditor from "./PowerFullEditor";
import Action from "./Action";
import Tools from "./Tools/Tools";
import Websites from "./Work/Websites";
import Comment from "./Comments/Comment";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
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
}

export default App;
