import {RequestHandler} from "express";
import {ERROR_ACCESS_FORBIDDEN} from "../../constant/Error";

export const auth: RequestHandler = async (req, res, next) => {
  try {
    const {authorization} = req.headers;
    const token = authorization && Array.from(authorization?.split(" "))[1];
    if (!token) {
      throw ERROR_ACCESS_FORBIDDEN;
    }
    res.set("token", token);
    next();
  } catch (err) {
    res.status(403).json({success: false, msg: err});
  }
};
