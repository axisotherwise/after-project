import { Request, Response } from "express";

import { User } from "@prisma/client";

import { CreateUserDto } from "../dtos/_.exporter";

export interface ICreateUser {
    email: string;
    password: string;
    passwordConfirm?: string;
    createdAt: string;
    updatedAt: string;
}

export interface IUserController {
    createUser: (req: Request, res: Response) => Promise<Response>;
}

export interface IUserService {
    findUserByEmail: (email: string) => Promise<User | null>; 
    createUser: (createUserDto: CreateUserDto) => Promise<User | null>;
}

export interface IUserDao {
    createUser: (createUserDao: CreateUserDto) => Promise<User>;
}
