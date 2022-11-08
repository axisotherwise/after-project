import { Request, Response } from "express";
import { Service } from "typedi";

import { AuthService } from "../services/auth.service";
import { IAuthController } from "../types/_.exporter";
import { LoginDto } from "../dtos/_.exporter";
import { validatorDto } from "../utils/_.exporter";

@Service()
export class AuthController implements IAuthController {
    constructor(private readonly authService: AuthService) {}

    authLogin = async (
        { body }: Request<unknown, unknown, LoginDto>,
        res: Response
    ) => {
        await validatorDto(new LoginDto(body));

        const result = await this.authService.authLogin(body);

        return res.json(result);
    }
}