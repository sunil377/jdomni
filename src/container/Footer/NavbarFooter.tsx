import {FC} from "react";
import {Link} from "react-router-dom";

const NavbarFooter: FC<NavbarFooterProps> = ({links}) => {
  return (
    <>
      <ul className="flex flex-1 flex-col items-center justify-start gap-5 md:flex-row md:flex-wrap">
        {links.map(arg => (
          <li key={arg.children} className="self-start">
            <Link {...arg} className="justify-start text-sm md:text-base" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarFooter;

interface NavbarFooterProps {
  links: {to: string; children: string}[];
}
