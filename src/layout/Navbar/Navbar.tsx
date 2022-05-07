import { Menu } from "@headlessui/react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { ShadowOnScroll, Logo } from "../../component";

import { navLinks } from "../../constants/navlinks";
import { LOGIN_URL } from "../../constants/url";
import { useMatchMedia } from "../../hooks/useMatchMedia";

export const Navbar = () => {
  const { isMatch } = useMatchMedia({ query: "(max-width:640px)" });

  return (
    <nav className="sticky top-0 z-10 flex justify-between bg-white px-4 py-3">
      {isMatch ? (
        <div className="flex gap-x-3">
          <MobileLayout />
          <Logo />
        </div>
      ) : (
        <Layout />
      )}
      <Link
        className="rounded-full bg-primary px-3.5 py-1 text-xs text-white"
        to={LOGIN_URL}
        children="Log In"
      />
      <ShadowOnScroll />
    </nav>
  );
};

const Layout = () => {
  return (
    <ul className="flex flex-1 items-center justify-evenly md:justify-end md:gap-8">
      {navLinks.map(arg => (
        <li key={arg.children}>
          <Link {...arg} className="text-lg" />
        </li>
      ))}
    </ul>
  );
};

const MobileLayout = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          {open ? (
            <Menu.Button className="fixed top-5 right-5 z-30">
              <span className="sr-only">close menu</span>
              <MdClose
                aria-hidden="true"
                size="1.5rem"
                className="text-white"
              />
            </Menu.Button>
          ) : (
            <Menu.Button>
              <span className="sr-only">menu</span>
              <CgMenuLeftAlt
                size="1.5rem"
                aria-hidden="true"
                className="text-primary"
              />
            </Menu.Button>
          )}

          {/* overlay */}

          {open && (
            <span
              aria-hidden="true"
              className="fixed inset-0 z-10 bg-black bg-opacity-70"
            />
          )}

          <Menu.Items
            static
            as="div"
            className={`fixed inset-0 z-20 transform overflow-hidden outline-none transition-transform duration-300 ${
              open
                ? " translate-x-0 opacity-100"
                : " -translate-x-[1000px] opacity-0"
            }`}
          >
            <ul className="h-full w-5/6 bg-white">
              <li className="bg-gray-100 p-3">
                <Logo />
              </li>
              {navLinks.map(arg => (
                <Menu.Item key={arg.children}>
                  <li className="mx-3 border-b py-3 last-of-type:border-0 ">
                    <Link {...arg} className="text-gray-600" />
                  </li>
                </Menu.Item>
              ))}
            </ul>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};
