import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export interface TokenPayload {
    id: string;
}

export const generateToken = (id: string) => {
    return jwt.sign(
        {
            id
        },
        JWT_SECRET as string,
        {
            expiresIn: "1d"
        }
    )
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET as string) as TokenPayload;
};

export const decodeToken = (token: string) => {
    return jwt.decode(token);
}