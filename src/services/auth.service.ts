import { Service } from "typedi";

import { IAuthService } from "../types/_.exporter";
import { UserDao } from "../daos/_.exporter";
import { LoginDto } from "../dtos/_.exporter";
import { compareHashPassword } from "../utils/bcrypt";
import {
    generateToken,
    // verifyToken,
} from "../utils/token";

@Service()
export class AuthService implements IAuthService {
    constructor(private readonly userDao: UserDao) {};

    async authLogin({ email, password }: LoginDto) {
        const findUser = await this.userDao.findUserByEmail(email);

        if (!findUser) return "존재하지 않는 사용자입니다.";

        const comparePassword = await compareHashPassword(
            password,
            findUser.password!
        );

        if (!comparePassword) return "비밀번호가 일치하지 않습니다.";
        
        return await generateToken(
            findUser.id,
            findUser.email
        );
    }
}