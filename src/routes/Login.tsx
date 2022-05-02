import {FC} from "react";
import {MdClose} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import Button from "../component/Button";
import TextField from "../component/TextField";
import {SIGNUP_URL} from "../constants/url";
import {useObserver} from "../hooks/useObserver";

import {Formik, Form} from "formik";
import logo from "../assets/images/logo.webp";
import {LoginValidation} from "../config/validation";
import {useTitle} from "../hooks/useTitle";
import axios from "axios";

const Login: FC<LoginProps> = props => {
  useTitle("Login to Jd Omni");
  const navigate = useNavigate();
  const {ref, style} = useObserver();

  return (
    <main className="grid min-h-screen w-full bg-gray-50 xs:items-center ">
      <section
        ref={ref}
        className={`relative mx-auto w-full max-w-md border bg-white py-12 px-4 
        shadow-xl sm:rounded-xl md:max-w-lg xs:px-12 ${style}`}
      >
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
          Log In to Your Account
        </h1>
        <Formik
          initialValues={{email: "", password: ""}}
          validationSchema={LoginValidation}
          onSubmit={(values, {setSubmitting, setErrors}) => {
            setSubmitting(true);
            axios
              .post("http://localhost:3001/api/v1/login", {...values})
              .then(({data}) => {
                console.log("result: ", data.data);
                navigate("/");
              })
              .catch(({response}) => {
                console.log(response);
                const {email, password} = response.data.msg;
                setErrors({email, password});
                setSubmitting(false);
              });
          }}
        >
          {({isSubmitting}) => (
            <Form className="flex flex-col gap-y-2 py-6">
              <TextField name="email" type="email" label="email" />
              <TextField name="password" type="password" label="Password" />

              <Button
                type="submit"
                size="large"
                shadow={true}
                disabled={isSubmitting}
                className="w-full uppercase"
                style={{
                  padding: "0.7rem",
                }}
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-center align-middle text-gray-900">
          Do not have an account?{" "}
          <Link
            to={SIGNUP_URL}
            className="text-sm font-semibold uppercase text-black
                underline hover:no-underline focus:no-underline"
          >
            create Account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;

interface LoginProps {}
