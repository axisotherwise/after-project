import { Service } from "typedi";
import { user } from "@prisma/client";

import Prisma from "../db/prisma";
import { IUserDao } from "../types/_.exporter";
import { CreateUserDto } from "../dtos/_.exporter";

@Service()
export class UserDao implements IUserDao{
    private readonly prisma;
    
    constructor() {
        this.prisma = Prisma;
    }

    async createUser({
        email,
        password,
    }: CreateUserDto) {
        return await this.prisma.user.create({
            data: {
                email,
                password,
            }
        });
    }
}
