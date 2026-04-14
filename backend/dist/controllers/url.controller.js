import { generateShortCode } from "../utils/generateShortCode.js";
import Url from "../models/urlModel.js";
import { CreateShortURLSchema, UpdateShortURLSchema } from "../validations/url.js";
import { BASE_URL } from "../config/env.js";
import UrlClick from "../models/urlClickModel.js";
import { hashPassword } from "../utils/bcrypt.js";
export const createShortURL = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        // Validation
        const parsedData = CreateShortURLSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400).json({
                success: false,
                error: parsedData.error
            });
        }
        const { original_url, custom_alias, expires_at, password } = parsedData.data;
        // Generate short code 
        let shortCode = generateShortCode();
        console.log('before custom alias');
        // Validate custom alias
        if (typeof custom_alias === 'string' && custom_alias.length > 0) {
            const base62Regex = /^[0-9a-zA-Z]+$/;
            if (!base62Regex.test(custom_alias)) {
                return res.status(400).json({
                    success: false,
                    error: "Please input valid custom alias"
                });
            }
            shortCode = custom_alias;
        }
        console.log('after custom alias');
        // Validate this Short URL already exist in database or not
        const existingShorURL = await Url.findOne({
            $or: [
                { short_code: shortCode },
                { custom_alias: shortCode }
            ]
        });
        if (existingShorURL) {
            return res.status(409).json({
                success: false,
                error: "Short URL already exists."
            });
        }
        const expiresDate = expires_at ? new Date(expires_at) : undefined;
        if (expiresDate && expiresDate <= new Date()) {
            return res.status(400).json({
                success: false,
                error: "Invalid expiration date: Date must be in the future."
            });
        }
        console.log('before password');
        // Protect URL to password
        const hashedPassword = password ? await hashPassword(password) : null;
        console.log('after password');
        // Create short URL in db 
        await Url.create({
            user_id: userId,
            original_url,
            short_code: shortCode,
            custom_alias,
            expires_at: expiresDate,
            password_protected: hashedPassword ? true : false,
            password_hash: hashedPassword ? hashedPassword : '',
        });
        return res.status(201).json({
            success: true,
            message: "Short URL Created",
            url: {
                original_url,
                short_url: `${BASE_URL}/${shortCode}`
            }
        });
    }
    catch (error) {
        console.log("Short URL Creation error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
export const getAllUrls = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const urls = await Url.find({
            user_id: userId
        });
        return res.status(200).json({
            success: true,
            message: "User all URL fetched successfully",
            data: {
                urls
            }
        });
    }
    catch (error) {
        console.log("Get All Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
export const getUrl = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const url_id = req.params.id;
        if (!url_id) {
            return res.status(400).json({
                success: false,
                error: "URL id not provided"
            });
        }
        const url = await Url.findOne({
            _id: url_id,
            user_id: userId
        });
        if (!url) {
            return res.status(404).json({
                success: false,
                error: "URL not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "URL fetched successfully",
            data: {
                url
            }
        });
    }
    catch (error) {
        console.log("Get Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
export const updateUrl = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const url_id = req.params.id;
        if (!url_id) {
            return res.status(400).json({
                success: false,
                error: "URL id not provided"
            });
        }
        const parsedData = UpdateShortURLSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(401).json({
                success: false,
                error: parsedData.error
            });
        }
        const { original_url, custom_alias, expires_at, password } = parsedData.data;
        const url = await Url.findOne({
            user_id: userId,
            _id: url_id
        });
        if (!url) {
            return res.status(404).json({
                success: false,
                error: "URL not found"
            });
        }
        await Url.updateOne({
            _id: url_id
        }, {
            $set: { original_url, custom_alias, expires_at }
        }, {
            upsert: true
        });
        return res.status(200).json({
            success: true,
            message: "URL update successfully"
        });
    }
    catch (error) {
        console.log("Update Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
export const deleteUrl = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const url_id = req.params.id;
        if (!url_id) {
            return res.status(400).json({
                success: false,
                error: "URL id not provided"
            });
        }
        const url = await Url.findOne({
            user_id: userId,
            _id: url_id
        });
        if (!url) {
            return res.status(404).json({
                success: false,
                error: "URL not found"
            });
        }
        await Url.deleteOne({
            user_id: userId,
            _id: url_id
        });
        return res.status(200).json({
            success: true,
            message: "URL delete successfully"
        });
    }
    catch (error) {
        console.log("Delete Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
export const getUrlAnalytics = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const url_id = req.params.id;
        if (!url_id) {
            return res.status(400).json({
                success: false,
                error: "URL id not provided"
            });
        }
        const url = await Url.findOne({
            user_id: userId,
            _id: url_id
        });
        if (!url) {
            return res.status(404).json({
                success: false,
                error: "URL not found"
            });
        }
        const urlAnalytics = await UrlClick.find({
            url_id
        });
        return res.status(200).json({
            success: true,
            message: "URL Analytics details fetched successfully",
            data: {
                urlAnalytics
            }
        });
    }
    catch (error) {
        console.log("Get URL Analytics error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
export const getClickLogs = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const url_id = req.params.id;
        if (!url_id) {
            return res.status(400).json({
                success: false,
                error: "URL id not provided"
            });
        }
        const url = await Url.findOne({
            user_id: userId,
            _id: url_id
        });
        if (!url) {
            return res.status(404).json({
                success: false,
                error: "URL not found"
            });
        }
        const urlDetails = await UrlClick.find({
            url_id
        });
        return res.status(200).json({
            success: true,
            message: "URL click logs fetched successfully",
            data: {
                urlDetails
            }
        });
    }
    catch (error) {
        console.log("Get Click Logs error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
//# sourceMappingURL=url.controller.js.map