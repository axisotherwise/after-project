import { Request, Response } from "express";
import { Service } from "typedi";

import { IAuthController } from "../types/_.exporter";
import { LoginDto } from "../dtos/_.exporter";
import { validatorDto } from "../utils/_.exporter";

@Service()
export class AuthController implements IAuthController {
    constructor() {}

    authLogin = async (
        { body }: Request<unknown, unknown, LoginDto>,
        res: Response
    ) => {
        await validatorDto(new LoginDto(body));

        return res.json("here");
    }
}