import { Service } from "typedi";

import { IUserService } from "../types/_.exporter";
import { CreateUserDto } from "../dtos/_.exporter";
import { UserDao } from "../daos/_.exporter";
import { generateHashPassword, compareHashPassword } from "../utils/_.exporter";

@Service()
export class UserService implements IUserService{
    constructor(private readonly userDao: UserDao) {};

    async createUser({ email, password }: CreateUserDto) {
        const find = await this.userDao.findUserByEmail(email);

        console.log(find);

        const hashPassword = await generateHashPassword(password);

        const input = {
            email,
            password: hashPassword,
        } as CreateUserDto;

        return this.userDao.createUser(input);
    }
}