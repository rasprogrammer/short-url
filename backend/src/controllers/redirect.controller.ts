import type { Request, Response } from "express";
import Url from "../models/urlModel.js";
import UrlClick from "../models/urlClickModel.js";
import { getClientIp } from "get-client-ip";
import { getUserDeviceType } from "../utils/userDevice.js";


export const getOriginalUrl = async (req: Request, res: Response) => {
    try {

        const short_code = req.params.short_code;
        if (!short_code) {
            return res.status(401).json({
                success: false,
                error: "Short URL not provided"
            });
        }

        const url = await Url.findOne({
            short_code
        });

        if (!url) {
            return res.status(404).json({
                success: false,
                error: "URL not found or expired"
            });
        };
        
        const ip_address = getClientIp(req as any) || req.ip;
        const user_agent = req.get('User-Agent');
        const referer = req.get('Referrer');

        // Store click logs in DB
        await UrlClick.create({
            url_id: url._id,
            ip_address,
            user_agent,
            referer,
            device_type: getUserDeviceType(),
        });

        return res.redirect(url.original_url);

    } catch (error) {
        return res.status(500).json({
            success: false, 
            error: "Internal server error"
        });
    }
}