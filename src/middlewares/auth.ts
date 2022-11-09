import { Request, Response, NextFunction } from "express";

import { publicKey } from "../config/index";
import { ITokenCustom } from "../types/_.exporter";
import { verifyToken } from "../utils/_.exporter";

export const isAuthenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // const bearerToken = req?.headers?.authorization;
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json("존재하지않는 Token");

    const verify = await verifyToken(token, publicKey) as ITokenCustom;

    if (!verify) return res.status(401).json("유효하지않는 Token");

    res.locals.id = verify.id;
    res.locals.email = verify.email;

    next();
}