import { Request, Response } from "express";

import { user } from "@prisma/client";

import { CreateUserDto } from "../dtos/_.exporter";

export interface ICreateUser {
    email: string;
    password: string;
    passwordConfirm?: string;
}

export interface IUserController {
    createUser: (req: Request, res: Response) => Promise<Response>;
}

export interface IUserService {
    createUser: (createUserDto: CreateUserDto) => Promise<user>;
}

export interface IUserDao {
    createUser: (
        createUserDao: CreateUserDto
    ) => Promise<user>;
}
