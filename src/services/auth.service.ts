import { Service } from "typedi";

import { IAuthService } from "../types/_.exporter";
import { LoginDto } from "../dtos/_.exporter";

@Service()
export class AuthService implements IAuthService {
    constructor() {};

    async authLogin({ email, password }: LoginDto) {
        
    }
}