import { Router } from "express";
import { Container } from "typedi";

import { AuthController } from "../controllers/auth.controller";

const authRouter = Router();

const authController = Container.get(AuthController);

authRouter.post("/login", authController.authLogin);

export { authRouter };