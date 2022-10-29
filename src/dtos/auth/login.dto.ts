import { 
    IsString,
    IsNotEmpty,
    IsEmail,
} from "class-validator";

import { ILogin } from "../../types/_.exporter";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;

    constructor({
        email,
        password
    }: ILogin) {
        this.email = email;
        this.password = password;
    }
}