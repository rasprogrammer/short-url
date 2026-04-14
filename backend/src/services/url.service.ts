import Url from "../models/urlModel.js";

export const findUrlByShortCode = async (short_code: string) => {
    return Url.findOne({
        $or: [
            { custom_alias: short_code },
            { short_code }
        ]
    });
};

export const isUrlExpired = (expires_at?: Date | null | undefined) => {
    return expires_at && new Date(expires_at) <= new Date();
};

export const isUrlActive = (is_active: boolean) => {
    return is_active;
}