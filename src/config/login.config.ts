import axios from "axios";
import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

const loginConfig: ConfigLoginType = {
  title: "Login to Jd Omni",
  initialValues: { email: "", password: "" },
  onSubmit: ({
    values,
    helper: { setErrors, setSubmitting },
    setState,
    navigate,
  }) => {
    setSubmitting(true);
    axios
      .post("http://localhost:3001/api/v1/login", { ...values })
      .then(({ data }) => {
        console.log("result: ", data.data);
        navigate("/");
      })
      .catch(({ response }) => {
        console.log(response);
        const { email, password } = response.data.msg;
        setErrors({ email, password });
        setSubmitting(false);
        setState(prev => prev + 1);
      });
  },
};

interface InitialValue {
  email: string;
  password: string;
}

export interface ConfigLoginType {
  title: string;
  initialValues: InitialValue;
  onSubmit: (args: {
    values: InitialValue;
    helper: FormikHelpers<InitialValue>;
    setState: Dispatch<SetStateAction<number>>;
    navigate: NavigateFunction;
  }) => void;
}

export default loginConfig;
