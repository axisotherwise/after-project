import fs from "fs";
import path from "path";

import { IPrivateKey } from "../types/_.exporter";

export const isProd = process.env.NODE_ENV === "production";
export const port = process.env.PORT || 2000;
export const passphrase = process.env.PASSPHRASE!;

export const privateKey: IPrivateKey = {
    key: fs.readFileSync(path.join(__dirname, "../../private.pem")).toString(),
    passphrase,
};

export const publicKey: string = fs.readFileSync(
    path.join(__dirname, "../../public.pem")
).toString();






