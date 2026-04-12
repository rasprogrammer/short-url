import { verifyToken } from "../utils/jwt.js";
export const auth = (req, res, next) => {
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
        return;
    }
};
//# sourceMappingURL=auth.js.map