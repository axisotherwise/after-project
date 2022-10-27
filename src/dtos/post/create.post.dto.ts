import { 
    IsString,
    IsNumber,
    IsNotEmpty,
    IsOptional,
    Min,
    Max,
} from "class-validator";

import { ICreatePost } from "../../types/_.exporter";

export class CreatePostDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    postId?: number;

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    @IsOptional()
    image: string | null;

    @IsString()
    createdAt?: string;

    @IsString()
    updatedAt?: string;

    @IsNumber()
    userId: number;

    constructor({
        postId,
        title,
        content,
        image,
        createdAt,
        updatedAt,
        userId
    }: ICreatePost) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.image = image ? image : null;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.userId = userId;
    }
}