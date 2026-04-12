import jwt from "jsonwebtoken";
export interface TokenPayload {
    id: string;
}
export declare const generateToken: (id: string) => string;
export declare const verifyToken: (token: string) => TokenPayload;
export declare const decodeToken: (token: string) => string | jwt.JwtPayload | null;
//# sourceMappingURL=jwt.d.ts.map