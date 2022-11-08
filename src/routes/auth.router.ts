import { Router } from "express";
import { Container } from "typedi";

import { AuthController } from "../controllers/auth.controller";
import { asyncHandler } from "../utils/async.handler";

const authRouter = Router();

const authController = Container.get(AuthController);

authRouter.post("/login", asyncHandler(authController.authLogin));

export { authRouter };