import { 
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  Min,
  Max
} from "class-validator";

import { ICreateProfile } from "../../types/_.exporter";

export class CreateProfiledDto {
    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsString()
    introduce: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(999)
    userId: number;

    constructor({
        gender,
        introduce,
        userId
    }: ICreateProfile) {
        this.gender = gender;
        this.introduce = introduce;
        this.userId = userId;
    }
}