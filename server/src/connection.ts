import mongoose from "mongoose";
import {
  ERROR_DB_ENVIOURNMENT_NOT_DEFIND,
  ERROR_DB_CONNECTION_ERROR,
} from "./constant/Error";

const DB = process.env.MONGO_DB;

if (!DB) {
  throw ERROR_DB_ENVIOURNMENT_NOT_DEFIND;
}

/* connecting to database */
const connection = async () => {
  await mongoose.connect(DB);
  console.log("connected to database successfully");
};

connection().catch(err => console.log(ERROR_DB_CONNECTION_ERROR));
