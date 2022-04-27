import {FC} from "react";
import {Link} from "react-router-dom";
import {Formik, Form} from "formik";
import {MdClose} from "react-icons/md";

import {LOGIN_URL} from "../constants/url";
import {useObserver} from "../hooks/useObserver";
import {LoginValidation} from "../config/validation";
import {useTitle} from "../hooks/useTitle";

/* components */
import Button from "../component/Button";
import TextField from "../component/TextField";

/* assets */
import logo from "../assets/images/logo.webp";
import pc from "../assets/images/pc.webp";
import banner from "../assets/images/banner.webp";

const Signup: FC<SignupProps> = props => {
  useTitle();
  const {ref, style} = useObserver();

  return (
    <main
      className="flex min-h-screen items-center justify-center
     bg-gray-50"
    >
      <section
        ref={ref}
        className={`grid w-full grid-rows-2 justify-center 
      gap-y-5 bg-gray-50 md:flex md:shadow-md xs:py-10 ${style}`}
      >
        <article
          className="relative w-full max-w-md rounded-xl border-0 bg-white 
          py-12 px-4 md:rounded-br-[8rem] xs:px-10"
        >
          <span className="absolute inset-0 -z-10 rounded-xl rounded-br-none bg-blue-100"></span>
          <Link
            to="/"
            className="absolute top-2 right-2 z-10 sm:right-10 sm:top-10"
          >
            <span className="sr-only">back to home</span>
            <MdClose size="1.8rem" />
          </Link>
          <img
            src={logo}
            alt="jdomni"
            width={80}
            height={80 * (9 / 25)}
            className="mx-auto"
          />

          <h1 className="py-4 text-center text-xl font-normal sm:text-2xl">
            Get Started With FREE Website
          </h1>

          <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={LoginValidation}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="flex flex-col gap-y-2 py-6">
              <TextField name="email" type="email" label="email" />
              <TextField name="password" type="password" label="Password" />

              <Button
                type="submit"
                size="large"
                shadow={true}
                className="w-full uppercase"
                style={{
                  padding: "0.7rem",
                }}
              >
                Create Account
              </Button>
            </Form>
          </Formik>
          <p className="py-4 text-center text-xs">
            By signing up you agree to Jd Omni’s{" "}
            <Link
              to="/terms"
              className=" text-xs underline hover:no-underline focus:no-underline"
            >
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link
              to="/policy"
              className="text-xs underline hover:no-underline focus:no-underline"
            >
              Privacy Policy
            </Link>{" "}
          </p>
          <p className="text-center text-gray-900">
            Already have an account?{" "}
            <Link
              to={LOGIN_URL}
              className="text-sm font-semibold uppercase text-black 
               underline hover:no-underline focus:no-underline"
            >
              Log In
            </Link>
          </p>
        </article>
        <article
          className="relative flex w-full max-w-md items-center 
        justify-center rounded-xl bg-blue-100 md:rounded-tl-[8rem]"
        >
          <span className="absolute inset-0 -z-10 bg-white"></span>
          <div
            className="bg-contain bg-no-repeat bg-origin-padding"
            style={{
              backgroundImage: `url(${pc})`,
            }}
          >
            <img src={banner} alt="computer" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Signup;

interface SignupProps {}
