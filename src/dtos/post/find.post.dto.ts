import {
    IsNumber,
    Min,
    Max
} from "class-validator";

export class FindPostDto {
    @IsNumber()
    @Min(1)
    @Max(100)
    postId: number;

    constructor(postId: number) {
        this.postId = postId;
    }
}