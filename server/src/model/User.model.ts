import {Schema, model} from "mongoose";

interface IUser {
  email: string;
  password: string;
}

export default model(
  "User",
  new Schema<IUser>({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }),
);
