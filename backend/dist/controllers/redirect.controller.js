import Url from "../models/urlModel.js";
import UrlClick from "../models/urlClickModel.js";
import { getClientIp } from "get-client-ip";
import { getUserDeviceType } from "../utils/userDevice.js";
import prompt from "prompt-sync";
import { verifyPassword } from "../utils/bcrypt.js";
import { findUrlByShortCode, isUrlActive, isUrlExpired } from "../services/url.service.js";
import { incrementClickCount, logClick } from "../services/click.service.js";
export const getOriginalUrl = async (req, res) => {
    try {
        const short_code = req.params.short_code;
        if (!short_code) {
            return res.status(401).json({
                success: false,
                error: "Short URL not provided"
            });
        }
        const url = await findUrlByShortCode(short_code);
        if (!url) {
            return res.status(404).json({
                success: false,
                error: "Invalid URL"
            });
        }
        ;
        if (isUrlExpired(url.expires_at)) {
            return res.status(410).json({
                success: false,
                error: "URL has expired"
            });
        }
        if (!isUrlActive(url.is_active)) {
            return res.status(410).json({
                success: false,
                error: "URL has disabled"
            });
        }
        if (url.password_protected) {
            return res.send(getPasswordHTML(url.short_code));
        }
        await handleRedirect(req, url);
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
    const url = await findUrlByShortCode(short_code);
    if (!url) {
        return res.status(404).json({
            success: false,
            error: "Invalid URL"
        });
    }
    ;
    if (isUrlExpired(url.expires_at)) {
        return res.status(410).json({
            success: false,
            error: "URL has expired"
        });
    }
    if (!isUrlActive(url.is_active)) {
        return res.status(410).json({
            success: false,
            error: "URL has disabled"
        });
    }
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
    await handleRedirect(req, url);
    return res.redirect(url.original_url);
};
export const handleRedirect = async (req, url) => {
    const ip_address = getClientIp(req) || req.ip;
    await logClick({
        url_id: url._id,
        ip_address,
        user_agent: req.get("User-Agent"),
        referer: req.get("Referrer"),
        device_type: getUserDeviceType(),
    });
    await incrementClickCount(url._id);
};
export const getPasswordHTML = (short_code) => {
    return `<html>
                <body>
                    <h2>This link is protected</h2>
                    <form method="POST" action="/verify-password">
                        <input type="hidden" name="short_code" value="${short_code}" />
                        <input type="password" name="password" placeholder="Enter password" />
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>`;
};
//# sourceMappingURL=redirect.controller.js.map