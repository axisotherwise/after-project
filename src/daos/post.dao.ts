import { Service } from "typedi";
import { Post } from "@prisma/client";

import Prisma from "../db/prisma";
import { IPostDao } from "../types/_.exporter";
import { CreatePostDto } from "../dtos/_.exporter";

@Service()
export class PostDao implements IPostDao {
    private readonly prisma;

    constructor() {this.prisma = Prisma};

    async findPost(postId: number): Promise<Post | null> {
        return await this.prisma.post.findUnique({
            where: {
                id: postId,
            }
        });
    }
    
    async createPost({
        title,
        content,
        image,
        userId
    }: CreatePostDto): Promise<Post> {
        return await this.prisma.post.create({
            data: {
                title,
                content,
                image,
                userId,
            }
        });
    }
}