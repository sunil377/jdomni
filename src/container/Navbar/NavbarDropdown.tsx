import {Menu} from "@headlessui/react";
import {useState, useEffect, FC} from "react";
import {MdMenu} from "react-icons/md";
import {Link} from "react-router-dom";

export const NavbarDropdown: FC<NavbarDropdownProps> = ({links}) => {
  const [isMobileScreen, setMoblieScreen] = useState(true);

  const handleWin = (ev: MediaQueryListEvent) => {
    setMoblieScreen(ev.matches);
  };

  useEffect(() => {
    const win = window.matchMedia("(max-width:640px)");
    setMoblieScreen(win.matches);
    win.addEventListener("change", handleWin);
    return () => win.removeEventListener("change", handleWin);
  }, []);

  return (
    <>
      {isMobileScreen ? (
        <Menu>
          <Menu.Button className="ml-auto">
            <span className="sr-only">menu</span>
            <MdMenu size="1.5rem" aria-hidden="true" />
          </Menu.Button>

          <Menu.Items
            as="ul"
            className="absolute inset-x-0 top-full flex flex-1 flex-col
            items-stretch rounded-sm border bg-white shadow-lg outline-none"
          >
            {links.map(arg => (
              <Menu.Item key={arg.children}>
                {({active}) => (
                  <li>
                    <Link
                      {...arg}
                      className={`w-full justify-start px-6 py-1.5 text-base ${
                        active
                          ? "bg-skin-blue-500 text-white hover:text-white"
                          : "text-skin-gray"
                      }`}
                    />
                  </li>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ) : (
        <ul className="flex flex-1 items-center justify-evenly md:justify-end md:gap-8">
          {links.map(arg => (
            <li key={arg.children}>
              <Link {...arg} className="text-lg" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

interface NavbarDropdownProps {
  links: {to: string; children: string}[];
}
