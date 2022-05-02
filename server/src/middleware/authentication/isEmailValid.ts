import {RequestHandler} from "express";
import * as yup from "yup";
import {ERROR_EMAIL_INVALID, ERROR_EMAIL_REQUIRED} from "../../constant/Error";

export const isEmailValid: RequestHandler = (req, res, next) => {
  const {email} = req.params;
  yup
    .object({
      email: yup
        .string()
        .email(ERROR_EMAIL_INVALID)
        .required(ERROR_EMAIL_REQUIRED),
    })
    .validate({email})
    .then(() => {
      res.set("email", email);
      next();
    })
    .catch(err =>
      res.status(400).json({success: false, msg: {[err.path]: err.message}}),
    );
};
