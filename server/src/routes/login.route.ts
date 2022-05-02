import {Router} from "express";
import {loginController} from "../controller";
import {isEmailAndPasswordValid, createAuth, auth} from "../middleware";

export const route = Router();

route.route("/").post(isEmailAndPasswordValid, createAuth, loginController);

export default route;
