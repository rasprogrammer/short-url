import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
export const generateToken = (id) => {
    return jwt.sign({
        id
    }, JWT_SECRET, {
        expiresIn: "1d"
    });
};
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
export const decodeToken = (token) => {
    return jwt.decode(token);
};
//# sourceMappingURL=jwt.js.map