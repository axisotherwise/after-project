import passport from "passport";
import passportLocal, { IStrategyOptionsWithRequest } from "passport-local";
import { Container } from "typedi";
import { User } from "@prisma/client";

import { UserService } from "../services/_.exporter";
import { compareHashPassword } from "../utils/_.exporter";

// type cb = (error: null, user?: User, options?: Object) => void;

export const LocalStrategy = passportLocal.Strategy;

export const LocalConfig = {
    usernameField: "email",
    passwordField: "password",
};

export default new LocalStrategy(LocalConfig, async (
    email: string,
    password: string, 
    done: any
) => {
    const userService = Container.get(UserService);

    const findUser = await userService.findUserByEmail(email);

    if (!findUser) return done(null, false, { message: "존재하지않는 사용자입니다." });

    const comparePassword = await compareHashPassword(
        password,
        findUser.password!
    );

    if (!comparePassword) return done(null, false, { message: "비밀번호가 일치하지않습니다."});

    return done(null, findUser);
});
