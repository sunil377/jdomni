import {RequestHandler} from "express";
import * as yup from "yup";
import {
  ERROR_EMAIL_INVALID,
  ERROR_EMAIL_REQUIRED,
  ERROR_PASSWORD_MIN_LENGTH,
  ERROR_PASSWORD_REQUIRED,
} from "../../constant/Error";

export const isEmailAndPasswordValid: RequestHandler = (req, res, next) => {
  const {email, password} = req.body;
  yup
    .object({
      password: yup
        .string()
        .min(6, ERROR_PASSWORD_MIN_LENGTH)
        .required(ERROR_PASSWORD_REQUIRED),
      email: yup
        .string()
        .email(ERROR_EMAIL_INVALID)
        .required(ERROR_EMAIL_REQUIRED),
    })
    .validate({email, password})
    .then(() => {
      res.set("email", email);
      res.set("password", password);
      next();
    })
    .catch(err => {
      res.status(400).json({success: false, msg: {[err.path]: err.message}});
    });
};
