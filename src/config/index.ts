import fs from "fs";
import path from "path";

export const isProd = process.env.NODE_ENV === "production";
export const port = process.env.PORT || 2000;
export const passphrase = process.env.PASSPHRASE!;

export let privateKey: string;
export let publicKey: string;

export const privateKeyPem = fs.readFile(
    path.join(__dirname, "../../private.pem"),
    (err, data) => privateKey = data.toString()
);
export const publicKeyPem = fs.readFile(
    path.join(__dirname, "../../public.pem"),
    (err, data) => publicKey = data.toString()
);





