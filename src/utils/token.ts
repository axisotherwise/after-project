
import {
    sign,
    verify,
    SignOptions
} from "jsonwebtoken";

import { 
    privateKey,
    publicKey
} from "../config/index";

export function generateToken(
    id: number,
    email: string
) {
    const payload = {
        id,
        email,
    };

    const options: SignOptions = {
        algorithm: "RS256",
    };

    return sign(
        payload,
        privateKey,
        options
    )
}

export function verifyToken(token: string) {
    return verify(token, publicKey);
}
