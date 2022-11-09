import { Router } from "express";
import { Container } from "typedi";

import { UserController } from "../controllers/_.exporter";
import { asyncHandler } from "../utils/_.exporter";

const userRouter = Router();

const userController = Container.get(UserController);

userRouter.post("/create", asyncHandler(userController.createUser));

export { userRouter };