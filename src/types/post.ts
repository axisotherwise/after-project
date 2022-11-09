import { Request, Response } from "express";
import { Post } from "@prisma/client";

import { CreatePostDto } from "../dtos/_.exporter"

export interface ICreatePost {
    postId?: number;
    title: string;
    content: string;
    image: string | null;
    createdAt?: string;
    updatedAt?: string;
    userId: number;
}

export interface IPostController {
    findPost: (req: Request, res: Response) => Promise<Response>;
    createPost: (req: Request, res: Response) => Promise<Response>;
}

export interface IPostService {
    findPost : (postId: number) => Promise<Post | null>;
    createPost: (createPostDto: CreatePostDto) => Promise<Post>;
}

export interface IPostDao {
    createPost: (createPost: CreatePostDto) => Promise<Post>;
}