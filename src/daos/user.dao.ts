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
        gender,
        introduce
    }: CreateUserDto) { 
        return await this.prisma.$transaction(async (prisma) => {
            const user = await prisma.user.create({
                data: {
                    email,
                    password,
                },
                select: {
                    id: true,
                    email: true,
                    createdAt: true,
                },
            });

            const profile = await prisma.profile.create({
                data: {
                    gender,
                    introduce,
                    userId: user.id,
                }
            });

            return {
                user,
                profile,
            };
        });
    }
}
