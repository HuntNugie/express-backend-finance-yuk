import { hash,compare } from "bcrypt";

const salt = 10;
export const hashPass = async(string)=>{
    const hashing = await hash(string,salt);
    return hashing;
}

