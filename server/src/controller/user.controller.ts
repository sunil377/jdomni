import {RequestHandler} from "express";
import {
  ERROR_EMAIL_ALREADY_EXITS,
  ERROR_USER_NOT_FOUND,
} from "../constant/Error";
import {UserModel} from "../model";

const create: RequestHandler = async (req, res) => {
  try {
    const email = res.get("email");
    const password = res.get("password");

    const isUserExits = await UserModel.findOne({email});
    if (isUserExits) {
      throw {email: ERROR_EMAIL_ALREADY_EXITS};
    }

    const user = await new UserModel({email, password}).save();

    return res.status(200).json({
      success: true,
      data: {id: user._id, email: user.email, _token: res.get("token")},
    });
  } catch (err) {
    res.status(400).json({sucess: false, msg: err});
  }
};

const getAll: RequestHandler = async (req, res) => {
  try {
    const {limit} = req.query;
    let users = await UserModel.find({}).limit(Number(limit) || 50);
    let newUsers = users.map(({email, _id}) => ({id: _id, email}));

    res.status(200).json({success: true, data: newUsers});
  } catch (err) {
    res.status(400).json({success: false, msg: err});
  }
};

const deleteUser: RequestHandler = async (req, res) => {
  try {
    const {email} = req.params;
    const user = await UserModel.findOneAndDelete({email});
    if (!user) {
      throw {email: ERROR_USER_NOT_FOUND};
    }
    res.status(200).json({success: true, data: `User ${email} is deleted `});
  } catch (err) {
    res.status(400).json({success: false, msg: err});
  }
};

const byEmail: RequestHandler = async (req, res) => {
  try {
    const {email} = req.params;
    const user = await UserModel.findOne({email});
    if (!user) {
      throw {email: ERROR_USER_NOT_FOUND};
    }
    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(400).json({success: false, msg: err});
  }
};

export default {
  create,
  delete: deleteUser,
  getAll,
  byEmail,
};
