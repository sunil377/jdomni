import {RequestHandler} from "express";
import {
  ERROR_PASSWORD_DONT_MATCH,
  ERROR_USER_NOT_FOUND,
} from "../constant/Error";
import {UserModel} from "../model";
import bcrypt from "bcrypt";

const controller: RequestHandler = async (req, res) => {
  try {
    const email = res.get("email");
    const user = await UserModel.findOne({email});
    if (!user) {
      throw {email: ERROR_USER_NOT_FOUND};
    }

    const password = res.get("password");
    const isPasswordSame = await bcrypt.compare(password, user.password);

    if (!isPasswordSame) {
      throw {password: ERROR_PASSWORD_DONT_MATCH};
    }

    return res.status(200).json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
        _token: res.get("token"),
      },
    });
  } catch (err) {
    res.status(400).json({success: false, msg: err});
  }
};

export default controller;
