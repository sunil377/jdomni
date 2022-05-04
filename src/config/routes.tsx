import Landing from "../routes/Landing";

import { LOGIN_URL, SIGNUP_URL } from "../constants/url";
import Login from "../routes/Login";
import loginConfig from "./login.config";
import Signup from "../routes/Signup";
import signupConfig from "./signup.config";

const config = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: LOGIN_URL,
    element: <Login {...loginConfig} />,
  },
  {
    path: SIGNUP_URL,
    element: <Signup {...signupConfig} />,
  },
  {
    path: "*",
    element: (
      <>
        <h1 className="py-12 text-center text-3xl">page not found 404</h1>,
      </>
    ),
  },
];

export default config;
