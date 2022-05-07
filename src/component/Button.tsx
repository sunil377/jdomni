import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  FC,
} from "react";
import { Link } from "react-router-dom";

const Button: FC<ButtonProps> = ({
  variant = "contained",
  className = "",
  size = "base",
  as = "button",
  to = "",
  shadow = false,
  children,
  ...rest
}) => {
  const classes = `rounded-[4rem] transition-colors duration-300 hover:text-white hover:bg-blue-600 ${
    variant === "contained"
      ? " bg-blue-500 text-white"
      : "text-blue-500 border border-blue-500 "
  } ${
    size === "base"
      ? "text-xs px-6 py-2.5"
      : size === "large"
      ? "text-sm px-8 py-3"
      : ""
  } ${shadow ? "shadow-2xl  shadow-blue-400" : ""} ${className}`;

  if (as === Link) {
    return <Link to={to} className={classes} children={children} />;
  }
  return <button className={classes} {...rest} children={children} />;
};

export default Button;

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "contained" | "outlined";
  as?: ElementType<any>;
  size?: "small" | "large" | "base";
  to?: string;
  shadow?: boolean;
}
