import { Service  } from "typedi";  

import { IPostService } from "../types/_.exporter";
import { PostDao } from "../daos/_.exporter";
import { CreatePostDto } from "../dtos/_.exporter";

@Service()
export class PostService implements IPostService {
    constructor(private readonly postDao: PostDao) {};

    async findPost(postId: number) {
        return await this.postDao.findPost(postId);
    }

    async createPost({ 
        title,
        content,
        image,
        userId
    }: CreatePostDto) {
        const input = {
            title,
            content,
            image,
            userId: 1,
        };

        return await this.postDao.createPost(input);
    }
} 