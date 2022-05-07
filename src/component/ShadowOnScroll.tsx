import { FC } from "react";
import { useWindowScrolled } from "../hooks/useWindowScrolled";

const ShadowOnScroll: FC<ShadowOnScrollProps> = props => {
  const { isScrolled } = useWindowScrolled();
  const isScrolledClass = isScrolled ? " shadow-md " : "";
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 -z-10 transition-shadow duration-500 ${isScrolledClass}`}
    />
  );
};

export default ShadowOnScroll;

interface ShadowOnScrollProps {}
