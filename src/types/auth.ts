import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { LoginDto } from "../dtos/_.exporter";

export type TokenType = "AccessToken" | "RefreshToken";

export interface IToken extends JwtPayload {
    type: TokenType;
}

export interface ITokenCustom extends IToken {
    type: "AccessToken";
    id: number;
    email: string;
}

export interface IPrivateKey {
    key: string;
    passphrase: string;
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