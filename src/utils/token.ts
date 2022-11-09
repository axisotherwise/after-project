
import {
    sign,
    verify,
    SignOptions,
} from "jsonwebtoken";

import { 
    privateKey,
} from "../config/index";

export async function generateToken(
    id: number,
    email: string
) {
    const payload = {
        id,
        email,
    };

    const options: SignOptions = {
        issuer: "axisotherwise",
        expiresIn: "10m",
        algorithm: "RS256",
    };

    return await sign(
        payload,
        privateKey,
        options,
    );
}

export async function verifyToken(token: string, publicKey: string) {
    return await verify(token, publicKey);
}
