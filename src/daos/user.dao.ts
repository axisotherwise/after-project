import { Service } from "typedi";
import { User, Profile } from "@prisma/client";

import Prisma from "../db/prisma";
import { IUserDao } from "../types/_.exporter";
import { CreateUserDto } from "../dtos/_.exporter";

@Service()
export class UserDao implements IUserDao{
    private readonly prisma;
    
    constructor() {this.prisma = Prisma};

    async findUserByEmail(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    async createUser({
        email,
        password,
    }: CreateUserDto): Promise<User> { 
        // transaction
        const user = await this.prisma.user.create({
            data: {
                email,
                password,
            },
        });

        const profile = await this.prisma.profile.create({
            data: {
                gender: "남자",
                introduce: "자기소개",
                userId: user.id,
            },
        });

        return user;
    }
}
