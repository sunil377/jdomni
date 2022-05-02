import {RequestHandler} from "express";
import bcrypt from "bcrypt";

export const createPasswordHash: RequestHandler = async (req, res, next) => {
  try {
    const password = res.get("password");
    const hashPassword = await bcrypt.hash(password, 10);
    res.set("password", hashPassword);
    next();
  } catch (err) {
    res.status(400).json({success: false, msg: err});
  }
};
