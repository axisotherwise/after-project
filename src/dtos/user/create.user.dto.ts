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

    constructor({ email, password, passwordConfirm }: ICreateUser) {
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }
}