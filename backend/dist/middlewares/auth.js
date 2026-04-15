import { verifyToken } from "../utils/jwt.js";
import ApiKey from "../models/apiKeyModel.js";
export const auth = async (req, res, next) => {
    try {
        // JWT Based Authentication 
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")) {
            const token = authHeader.split(" ")[1];
            if (!token) {
                return res.status(401).json({
                    success: false,
                    error: "Access denied: No token provided"
                });
            }
            const decoded = verifyToken(token);
            if (!decoded) {
                return res.status(401).json({
                    success: false,
                    error: "Invalid token"
                });
            }
            req.auth = {
                id: decoded.id,
                type: "user"
            };
            return next();
        }
        // API Key Based Authenticate 
        const apiKey = req.headers["x-api-key"];
        if (apiKey) {
            const key = await ApiKey.findOne({
                api_key: apiKey, is_active: true
            });
            if (!key) {
                return res.status(401).json({
                    success: false,
                    error: "Invalid API Key"
                });
            }
            req.auth = {
                id: key.user_id?.toString(),
                type: 'api'
            };
            return next();
        }
        return res.status(401).json({
            success: false,
            error: "Access denied"
        });
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