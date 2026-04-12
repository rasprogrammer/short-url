import type { Request, Response } from "express";
import Url from "../models/urlModel.js";


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
        }

        return res.redirect(url.original_url);

    } catch (error) {
        return res.status(500).json({
            success: false, 
            error: "Internal server error"
        });
    }
}