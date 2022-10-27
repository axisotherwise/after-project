import { Router } from "express";
import { Container } from "typedi";

import { PostController } from "../controllers/post.controller";
import { asyncHandler } from "../utils/async.handler";

const postRouter = Router();

const postController = Container.get(PostController);

postRouter.post("/create", asyncHandler(postController.createPost));

export { postRouter };