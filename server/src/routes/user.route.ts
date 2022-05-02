import {Router} from "express";
import {userController} from "../controller";
import {
  isEmailAndPasswordValid,
  createAuth,
  auth,
  isEmailValid,
} from "../middleware";
import {createPasswordHash} from "../middleware/authentication/convertPasswordHash";

const route = Router();

route
  .route("/")
  .get(auth, userController.getAll)
  .post(
    isEmailAndPasswordValid,
    createPasswordHash,
    createAuth,
    userController.create,
  );

route.use("/:email", isEmailValid, auth);
route
  .route("/:email")
  .get(userController.byEmail)
  .delete(userController.delete);

export default route;
