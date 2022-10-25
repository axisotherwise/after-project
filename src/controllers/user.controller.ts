import { Request, Response } from "express";
import { Service } from "typedi";

import { UserService } from "../services/_.exporter";
import { IUserController } from "../types/_.exporter";
import { CreateUserDto } from "../dtos/_.exporter";
import { validatorDtos } from "../utils/_.exporter";

@Service()
export class UserController implements IUserController{
    constructor(private readonly userService: UserService) {}

    createUser = async (
        { body }: Request<unknown, unknown, CreateUserDto>,
        res: Response
    ) => {
        await validatorDtos(new CreateUserDto(body));
        
        const result = await this.userService.createUser(body);

        return res.json(result);
    };
}