import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import cors from "cors";
import { loginRoute, userRoute } from "./routes";
import "./connection";

const app = express();
const port = process.env.PORT || 3001;

/* middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* renderning static files */
const publicStaticFiles = path.join(
  path.dirname(path.dirname(__dirname)),
  "build",
);
app.use(express.static(publicStaticFiles));

/* routes */
app.use("/api/v1/users", userRoute);
app.use("/api/v1/login", loginRoute);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
