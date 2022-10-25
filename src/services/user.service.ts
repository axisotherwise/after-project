import { Service } from "typedi";

import { IUserService } from "../types/_.exporter";
import { CreateUserDto } from "../dtos/_.exporter";
import { UserDao } from "../daos/_.exporter";

@Service()
export class UserService implements IUserService{
    constructor(private readonly userDao: UserDao) {};

    createUser({ email, password }: CreateUserDto) {
        return this.userDao.createUser({ email, password });
    }
}