import { hash,compare } from "bcrypt";

const salt = 10;
// unutk hashing password
export const hashPass = async(string)=>{
    const hashing = await hash(string,salt);
    return hashing;
}

// untuk verifikasi password benar atau salah
export const comparePass = async(password,passwordHash)=>{
    const check = await compare(password,passwordHash);
    return check
}