import {DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import {useField} from "formik";
import {Link} from "react-router-dom";
import {FORGOT_PASSWORD} from "../constants/url";

const TextField: FC<TextFieldProps> = ({id, name, label, ...props}) => {
  const uid = id || name;
  if (!name) {
    throw new Error("name is not valid");
  }

  const [fields, {error, value, touched}] = useField(name);
  const isInvalid = touched && error ? true : false;

  return (
    <div>
      <section
        className={`textfield relative isolate flex flex-col 
    rounded-md border px-2 py-0.5 text-sm text-gray-900 
     ${isInvalid ? " border-red-500 " : "focus-within:border-blue-300"}`}
      >
        <label
          htmlFor={uid}
          className="z-10 origin-left transform cursor-text uppercase
        transition-transform"
          data-is-dirty={typeof value === "string" && value.length > 0}
        >
          {label}
        </label>
        <input
          id={uid}
          {...props}
          {...fields}
          className="basis-full transform bg-inherit outline-none transition-transform"
          aria-invalid={isInvalid}
        />
        {props.type === "password" && (
          <Link
            to={FORGOT_PASSWORD}
            className="absolute right-0.5 top-1 z-20 rounded-sm border-0 p-1.5
             text-blue-500 transition-colors duration-300 hover:bg-blue-100"
          >
            Forgot?
          </Link>
        )}
      </section>
      <span
        className="inline-block h-4 w-full overflow-hidden border-0 pl-2 text-xs
       capitalize text-red-500"
      >
        {isInvalid && error}
      </span>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  autoCapitalize: "off",
  autoCorrect: "off",
  "aria-required": "true",
};

export default TextField;

interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
