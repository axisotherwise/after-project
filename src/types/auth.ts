import { Request, Response } from "express";

import { LoginDto } from "../dtos/_.exporter";

export interface IToken {
    id: number;
    email: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IAuthController {
    authLogin: (req: Request, res: Response) => Promise<Response>;
}

export interface IAuthService {
    authLogin: (authLoginDto: LoginDto) => Promise<any>;
}