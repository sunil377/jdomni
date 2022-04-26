import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../component/Button";
import {navLinks} from "../../constants/navlinks";
import {NavbarDropdown} from "./NavbarDropdown";

const Navbar: FC<NavbarProps> = props => {
  const [isScrolled, setScrolled] = useState(false);
  const handleScroll = (ev: Event) => {
    setScrolled(window.scrollY > 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.screenY]);

  return (
    <nav className="z-10 flex items-center gap-2 bg-white px-2 py-4">
      <span
        className={`absolute inset-0 -z-10 transition-shadow duration-500 ${
          isScrolled ? "shadow-md " : ""
        }`}
      ></span>

      <Link to="#demo" className="px-2 md:w-28">
        <img
          src="https://image1.jdomni.in/jdomni_email/logoomni1_2011101548.png"
          alt="jdomni"
          width={60}
          height={60}
          className="basis-full"
        />
      </Link>

      <NavbarDropdown links={navLinks} />

      <Button as={Link} to="/login">
        Log in
      </Button>
    </nav>
  );
};

export default Navbar;

interface NavbarProps {}
