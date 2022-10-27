import { Service } from "typedi";

import { IUserService } from "../types/_.exporter";
import { UserDao } from "../daos/_.exporter";
import { CreateUserDto } from "../dtos/_.exporter";
import { generateHashPassword, compareHashPassword } from "../utils/_.exporter";

@Service()
export class UserService implements IUserService{
    constructor(private readonly userDao: UserDao) {};

    async findUserByEmail(email: string) {
        return this.userDao.findUserByEmail(email);
    }

    async createUser({ email, password }: CreateUserDto) {
        const findUser = await this.userDao.findUserByEmail(email);

        if (findUser) return null;

        const hashPassword = await generateHashPassword(password);

        const input = {
            email,
            password: hashPassword,
        } as CreateUserDto;

        return this.userDao.createUser(input);
    }
}