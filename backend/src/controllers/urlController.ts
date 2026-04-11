import type { Request, Response } from "express";
import { generateShortCode } from "../utils/generateShortCode.js";
import Url from "./../models/urlModel.js"

export const generateUrlShort = async (req: Request, res: Response) => {
    
    return res.status(200).json({ message: "success" });
}

export const handleShortid = async (req: Request, res: Response) => {
    
    return res.status(302).json({
        success: true, 
        message: 'Original URL fetched',
        // originalURL: result?.original_url
    });
}