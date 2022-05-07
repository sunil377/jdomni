import { FC } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/images/logo.webp";

const Logo: FC<LogoProps> = props => {
  return (
    <Link to="/" className="w-[64px]">
      <img src={LogoImg} alt="jdomni" className="aspect-auto" />
    </Link>
  );
};

export default Logo;

interface LogoProps {}
