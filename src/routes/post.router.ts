import { Router } from "express";
import { Container } from "typedi";

import { PostController } from "../controllers/post.controller";
import { asyncHandler } from "../utils/async.handler";
import { isAuthenticate } from "../middlewares/_.exporter";

const postRouter = Router();

const postController = Container.get(PostController);

postRouter.get(
    "/find/:postId",
    asyncHandler(postController.findPost)
);

postRouter.post(
    "/create",
    isAuthenticate,
    asyncHandler(postController.createPost)
);

export { postRouter };