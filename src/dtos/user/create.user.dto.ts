import { 
    IsString,
    IsNotEmpty,
    IsEmail,
} from "class-validator";

import { ICreateUser } from "../../types/_.exporter";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    passwordConfirm?: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsString()
    introduce: string;
    
    createdAt: string;

    updatedAt: string;

    constructor({ 
        email,
        password, 
        passwordConfirm,
        gender,
        introduce,
        createdAt,
        updatedAt 
    }: ICreateUser) {
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.gender = gender;
        this.introduce = introduce;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}