import bcrypt, { hash } from "bcrypt";

const saltRound = 12;

export async function generateHashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(saltRound);
    const hashPassword = await bcrypt.hash(password, salt);

    console.log(hashPassword);

    return hashPassword;
}

export async function compareHashPassword(password: string, hashPassword: string): Promise<boolean> {
    const comparePassword = await bcrypt.compare(password, hashPassword);
    
    if (comparePassword) return true;
    else return false;
}   