import { Request, Response } from "express";
import { Service } from "typedi";

import { PostService } from "../services/_.exporter";
import { IPostController } from "../types/_.exporter";
import { CreatePostDto } from "../dtos/_.exporter";
import { validatorDto } from "../utils/_.exporter";

@Service()
export class PostController implements IPostController {
    constructor(private readonly postService: PostService) {}

    createPost = async (
        { body }: Request<unknown, unknown, CreatePostDto>,
        res: Response
    ) => {
        await validatorDto(new CreatePostDto(body));

        return res.json("here");
    };
}
