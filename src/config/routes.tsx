import Landing from "../routes/Landing";
import Login from "../routes/Login";
import Signup from "../routes/Signup";

import {LOGIN_URL, SIGNUP_URL} from "../constants/url";

const config = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: LOGIN_URL,
    element: <Login />,
  },
  {
    path: SIGNUP_URL,
    element: <Signup />,
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
