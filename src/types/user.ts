import { Request, Response } from "express";
import { User, Profile } from "@prisma/client";

import { CreateUserDto } from "../dtos/_.exporter";

export interface ICreateUser {
    email: string;
    password: string;
    passwordConfirm?: string;
    gender: string;
    introduce: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICreateProfile {
    gender: string;
    introduce: string;
    userId: number;
}

export interface IUserController {
    createUser: (req: Request, res: Response) => Promise<Response>;
}

export interface IUserService {
    findUserByEmail: (email: string) => Promise<User | null>; 
    createUser: (createUserDto: CreateUserDto) => Promise<{ user: User, profile: Profile } | null>;
}

export interface IUserDao {
    createUser: (createUserDao: CreateUserDto) => Promise<{ user: User, profile: Profile }>;
}
