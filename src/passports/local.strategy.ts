import { Container } from "typedi";
import passport from "passport";
import passportLocal from "passport-local";

import { UserService } from "../services/_.exporter";
import { compareHashPassword } from "../utils/_.exporter";

type done = () => {};

export const LocalStrategy = passportLocal.Strategy;

export const LocalConfig = {
    usernameField: "email",
    passwordField: "password",
};

export const LocalVerify = async (
        email: string,
        password: string,
        done: done,
    ) => {
    const userService = Container.get(UserService);
    
    const findUser = await userService.findUserByEmail(email);
    
    if (!findUser) return done(null, false, {})
};