import Url from "../models/urlModel.js";
export const findUrlByShortCode = async (short_code) => {
    return Url.findOne({
        $or: [
            { custom_alias: short_code },
            { short_code }
        ]
    });
};
export const isUrlExpired = (expires_at) => {
    return expires_at && new Date(expires_at) <= new Date();
};
export const isUrlActive = (is_active) => {
    return is_active;
};
//# sourceMappingURL=url.service.js.map