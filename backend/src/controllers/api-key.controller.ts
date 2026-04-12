import type { Request, Response } from "express";

export const generateApikey = async (req: Request, res: Response) => {
    try {

        

    } catch (error) {
        console.log("Generate api key error: ", error);
        return res.status(500).json({
            success: false, 
            error: "Internal server error",
        });
    }
};

export const revokeApiKey = async (req: Request, res: Response) => {
    try {

        

    } catch (error) {
        console.log("Delete api key error: ", error);
        return res.status(500).json({
            success: false, 
            error: "Internal server error",
        });
    }
}