import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.js";
import type { AuthRequest } from "../utils/request-types.js";


export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            res.status(401).json({
                success: false,
                error: "Access denied: No token provided"
            });
            return;
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            res.status(401).json({
                success: false,
                error: "Invalid token"
            });
            return;
        }

        req.auth = { id: decoded.id };
        next();

    } catch (error) {
        res.status(500).json({
            success: false, 
            error: "Internal server error"
        });
        return;
    }
};