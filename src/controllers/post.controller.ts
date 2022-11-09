import { Request, Response } from "express";
import { Service } from "typedi";

import { PostService } from "../services/_.exporter";
import { IPostController } from "../types/_.exporter";
import { CreatePostDto, FindPostDto } from "../dtos/_.exporter";
import { validatorDto } from "../utils/_.exporter";

@Service()
export class PostController implements IPostController {
    constructor(private readonly postService: PostService) {}

    findPost = async (
        { params: { postId } }: Request,
        res: Response
    ) => {
        await validatorDto(new FindPostDto(parseInt(postId)));

        const findPost = await this.postService.findPost(parseInt(postId));
    
        return res.json(findPost);
    }
    
    createPost = async (
        { body }: Request<unknown, unknown, CreatePostDto>,
        res: Response
    ) => {
        body.userId = res.locals.id;

        await validatorDto(new CreatePostDto(body));

        await this.postService.createPost(body);

        return res.json("here");
    };
}
