import type { Request, Response } from "express";
import { generateShortCode } from "../utils/generateShortCode.js";
import Url from "../models/urlModel.js"
import type { AuthRequest } from "../utils/request-types.js";
import { CreateShortURLSchema, UpdateShortURLSchema } from "../validations/url.js";
import { BASE_URL } from "../config/env.js";
import UrlClick from "../models/urlClickModel.js";
import { hashPassword } from "../utils/bcrypt.js";

export const createShortURL = async (req: AuthRequest, res: Response) => {
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

        // Protect URL to password
        const hashedPassword = password ? await hashPassword(password) : null;

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
        
    } catch (error) {
        console.log("Short URL Creation error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};

export const getAllUrls = async (req: AuthRequest, res: Response) => {
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
    } catch (error) {
        console.log("Get All Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};

export const getUrl = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.auth?.id;
        const url_id = req.params.id;

        if (!userId) {
            return res.status(401).json({
                success: false, 
                error: "Unauthorized user"
            });
        }

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

    } catch (error) {
        console.log("Get Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};

export const updateUrl = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.auth?.id;
        const url_id = req.params.id;

        if (!userId) {
            return res.status(401).json({
                success: false, 
                error: "Unauthorized user"
            });
        }

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

        const { original_url, custom_alias, expires_at, password, is_active } = parsedData.data;

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
        
        const expiresDate = expires_at ? new Date(expires_at) : undefined;
        if (expiresDate && expiresDate <= new Date()) {
            return res.status(400).json({
                success: false, 
                error: "Invalid expiration date: Date must be in the future."
            });
        }

        const updateData = Object.fromEntries(
            Object.entries({
                original_url,
                custom_alias,
                is_active,
                expires_at: expiresDate
            }).filter(([_, v]) => v !== undefined)
        );

        // Protect URL to password
        if (password === "") {
            updateData.password_protected = false;
            updateData.password_hash = "";
        } else if (password !== undefined) {
            const hashedPassword = await hashPassword(password);
            updateData.password_protected = true;
            updateData.password_hash = hashedPassword;
        } 

        await Url.updateOne(
            { _id: url_id },
            { $set: updateData }
        );

        return res.status(200).json({
            success: true, 
            message: "URL update successfully"
        });

    } catch (error) {
        console.log("Update Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};

export const deleteUrl = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.auth?.id;
        const url_id = req.params.id;

        if (!userId) {
            return res.status(401).json({
                success: false, 
                error: "Unauthorized user"
            });
        }

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

    } catch (error) {
        console.log("Delete Short URL error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};

export const getUrlAnalytics = async (req: AuthRequest, res: Response) => {
    try {

        const userId = req.auth?.id;
        const url_id = req.params.id; 

        if (!userId) {
            return res.status(401).json({
                success: false, 
                error: "Unauthorized user"
            });
        }

        if (!url_id) {
            return res.status(400).json({
                success: false, 
                error: "URL id not provided"
            });
        }

        const totalClicks = await UrlClick.countDocuments({ url_id });

        const countryStats = await UrlClick.aggregate([
            { $match: { url_id } },
            { $group: { _id: "$country", count: { $sum: 1 } } }
        ]);

        const deviceStats = await UrlClick.aggregate([
            { $match: { url_id } },
            { $group: { _id: "$device_type", count: { $sum: 1 } } }
        ]);

        return res.status(200).json({
            success: true,
            message: "URL Analytics fetched successfully",
            data: {
                totalClicks,
                countryStats,
                deviceStats
            }
        });

    } catch (error) {
        console.log("Get URL Analytics error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};

export const getClickLogs = async (req: AuthRequest, res: Response) => {
    try {

        const userId = req.auth?.id;
        const url_id = req.params.id;

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        if (!userId) {
            return res.status(401).json({ 
                success: false, 
                error: "Unauthorized user" 
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

        const filter: any = { url_id };

        // Optional filters
        if (req.query.country) {
            filter.country = req.query.country;
        }

        if (req.query.device) {
            filter.device_type = req.query.device;
        }

        const total = await UrlClick.countDocuments(filter);

        const clicks = await UrlClick.find(filter)
            .sort({ created_at: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        return res.status(200).json({
            success: true,
            message: "URL click logs fetched successfully",
            data: {
                clicks,
                meta: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            },
            
        });

    } catch (error) {
        console.log("Get Click Logs error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};