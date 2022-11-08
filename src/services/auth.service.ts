import { Service } from "typedi";

import { IAuthService } from "../types/_.exporter";
import { LoginDto } from "../dtos/_.exporter";
import { compareHashPassword } from "../utils/bcrypt";
import { 
    generateToken,
    verifyToken,
} from "../utils/token";

@Service()
export class AuthService implements IAuthService {
    constructor() {};

    async authLogin({ email, password }: LoginDto) {
        
    }
}