import { generateShortCode } from "../utils/generateShortCode.js";
import Url from "./../models/urlModel.js";
export const generateUrlShort = async (req, res) => {
    return res.status(200).json({ message: "success" });
};
export const handleShortid = async (req, res) => {
    return res.status(302).json({
        success: true,
        message: 'Original URL fetched',
        // originalURL: result?.original_url
    });
};
//# sourceMappingURL=urlController.js.map