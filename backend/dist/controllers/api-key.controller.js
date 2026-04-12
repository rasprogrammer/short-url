import { GenerateApikeySchema } from "../validations/api-key.js";
import ApiKey from "../models/apiKeyModel.js";
import { generateShortCode } from "../utils/generateShortCode.js";
export const generateApikey = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const parsedData = GenerateApikeySchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400).json({
                success: false,
                error: parsedData.error
            });
        }
        const { name } = parsedData.data;
        const api_key = generateShortCode(16);
        const newApiKey = await ApiKey.create({
            name,
            user_id: userId,
            api_key
        });
        return res.status(201).json({
            success: true,
            message: "API Key Generated Successfully",
            data: {
                newApiKey
            }
        });
    }
    catch (error) {
        console.log("Generate api key error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
export const getAllApiKey = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const apikeys = await ApiKey.find({
            user_id: userId,
        });
        return res.status(201).json({
            success: true,
            message: "API Keys fetched Successfully",
            data: {
                apikeys
            }
        });
    }
    catch (error) {
        console.log("All API Keys error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
export const revokeApiKey = async (req, res) => {
    try {
        const userId = req.auth?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized user"
            });
        }
        const apiKeyId = req.params.id;
        if (!apiKeyId) {
            return res.status(404).json({
                success: false,
                error: "API Key id not provided"
            });
        }
        const apikey = await ApiKey.findOne({
            _id: apiKeyId,
            user_id: userId
        });
        if (!apikey) {
            return res.status(404).json({
                success: false,
                error: "API Key not found"
            });
        }
        await ApiKey.deleteOne({
            _id: apikey._id
        });
        return res.status(200).json({
            success: true,
            message: "API Key deleted successfully",
        });
    }
    catch (error) {
        console.log("Delete api key error: ", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
//# sourceMappingURL=api-key.controller.js.map