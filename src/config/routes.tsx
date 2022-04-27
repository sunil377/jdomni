import Landing from "../routes/Landing";
import Login from "../routes/Login";

import {LOGIN_URL} from "../constants/url";

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
    path: "*",
    element: (
      <>
        <h1 className="py-12 text-center text-3xl">page not found 404</h1>,
      </>
    ),
  },
];

export default config;
