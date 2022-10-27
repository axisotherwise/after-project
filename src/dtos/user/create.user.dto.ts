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

    @IsString()
    createdAt: string;

    @IsString()
    updatedAt: string;

    constructor({ email, password, passwordConfirm, createdAt, updatedAt }: ICreateUser) {
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}