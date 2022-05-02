import {RequestHandler} from "express";
import jwt from "jsonwebtoken";
import {ERROR_ACCESS_KEY_NOT_PROVIDED} from "../../constant/Error";

export const createAuth: RequestHandler = async (req, res, next) => {
  try {
    const email = res.get("email");
    const token = process.env.SECRET_KEY_TOKEN;
    if (!token) {
      throw ERROR_ACCESS_KEY_NOT_PROVIDED;
    }
    const result = jwt.sign({email}, token, {expiresIn: "1d"});
    res.set("token", result);
    next();
  } catch (err) {
    res.status(400).json({success: false, msg: err});
  }
};
