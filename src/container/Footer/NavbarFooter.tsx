import {FC} from "react";
import {Link} from "react-router-dom";

const NavbarFooter: FC<NavbarFooterProps> = ({links}) => {
  return (
    <>
      <ul className="flex flex-1 flex-col md:flex-row md:flex-wrap items-center justify-start gap-5">
        {links.map(arg => (
          <li key={arg.children} className="self-start">
            <Link
              {...arg}
              className="text-sm md:text-base justify-start text-skin-gray"
            />
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
