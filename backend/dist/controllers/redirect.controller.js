import Url from "../models/urlModel.js";
import UrlClick from "../models/urlClickModel.js";
import { getClientIp } from "get-client-ip";
import { getUserDeviceType } from "../utils/userDevice.js";
import prompt from "prompt-sync";
import { verifyPassword } from "../utils/bcrypt.js";
export const getOriginalUrl = async (req, res) => {
    try {
        const short_code = req.params.short_code;
        if (!short_code) {
            return res.status(401).json({
                success: false,
                error: "Short URL not provided"
            });
        }
        const url = await Url.findOne({
            $or: [
                { custom_alias: short_code },
                { short_code }
            ]
        });
        // URL exists or not
        if (!url) {
            return res.status(404).json({
                success: false,
                error: "Invalid URL"
            });
        }
        ;
        // Expire Date URL should not be opened
        if (url.expires_at && new Date(url.expires_at) <= new Date()) {
            return res.status(401).json({
                success: false,
                error: "URL has been expired"
            });
        }
        if (url.password_protected) {
            return res.send(`
                <html>
                    <body>
                        <h2>This link is protected</h2>
                        <form method="POST" action="/verify-password">
                            <input type="hidden" name="short_code" value="${url.short_code}" />
                            <input type="password" name="password" placeholder="Enter password" />
                            <button type="submit">Submit</button>
                        </form>
                    </body>
                </html>
            `);
        }
        const ip_address = getClientIp(req) || req.ip;
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
        // Increment link click count
        await Url.updateOne({ _id: url._id }, { $inc: { click_count: 1 } });
        return res.redirect(url.original_url);
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
export const verifyPasswordRequest = async (req, res) => {
    const { short_code, password } = req.body;
    const url = await Url.findOne({
        $or: [{ custom_alias: short_code }, { short_code }]
    });
    // URL exists or not
    if (!url) {
        return res.status(404).json({
            success: false,
            error: "Invalid URL"
        });
    }
    ;
    // Validate password  
    if (url.password_protected && url.password_hash) {
        const isValidPassword = await verifyPassword(password, url.password_hash);
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                error: "Wrong password"
            });
        }
    }
    // Log click after validation
    await UrlClick.create({
        url_id: url._id,
        ip_address: req.ip,
        user_agent: req.get("User-Agent"),
        referer: req.get('Referrer'),
        device_type: getUserDeviceType(),
    });
    // Increment link click count
    await Url.updateOne({ _id: url._id }, { $inc: { click_count: 1 } });
    return res.redirect(url.original_url);
};
//# sourceMappingURL=redirect.controller.js.map